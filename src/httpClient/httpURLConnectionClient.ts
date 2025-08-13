/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

import { ClientRequest, IncomingHttpHeaders, IncomingMessage } from "http";
import { Agent, AgentOptions, request as httpsRequest } from "https";
import { HttpsProxyAgent } from "https-proxy-agent";

import * as fs from "fs";
import { URL, URLSearchParams } from "url";
import LibraryConstants from "../constants/libraryConstants";
import Config from "../config";
import HttpClientException from "./httpClientException";

import { ApiError } from "../typings/apiError";
import ApiException from "../services/exception/apiException";
import ClientInterface from "./clientInterface";
import { ApiConstants } from "../constants/apiConstants";
import { IRequest } from "../typings/requestOptions";
import checkServerIdentity from "../helpers/checkServerIdentity";

class HttpURLConnectionClient implements ClientInterface {
    private static CHARSET = "utf-8";
    public proxy?: AgentOptions;
    private agentOptions!: AgentOptions;

    /**
     * Sends an HTTP request to the specified endpoint with the provided JSON payload and configuration.
     *
     * This method sets up request headers, including authentication (API key or basic auth), content type,
     * and timeout. If a certificate path is provided in the config, it installs a certificate verifier.
     * Throws an ApiException when an error occurs (invalid API key, API error response, etc.).
     *
     * @param endpoint - The URL to which the request will be sent.
     * @param json - The JSON string to be sent as the request body.
     * @param config - The configuration object containing authentication, timeout, and certificate details.
     * @param isApiRequired - Indicates whether an API key is required for this request.
     * @param requestOptions - Additional options for the HTTP request, such as headers and timeout.
     * @returns A promise that resolves with the response body as a string.
     * @throws {ApiException} when an error occurs
     */
    public request(
        endpoint: string, 
        json: string, 
        config: Config, 
        isApiRequired: boolean,
        requestOptions: IRequest.Options,
    ): Promise<string> {
        requestOptions.headers ??= {};
        requestOptions.timeout = config.connectionTimeoutMillis;

        if (config.certificatePath) {
            this.installCertificateVerifier(config.certificatePath);
        }

        const apiKey = config.apiKey;

        if (isApiRequired && !apiKey) {
            return Promise.reject(new ApiException("Invalid X-API-Key was used", 401));
        }

        if (apiKey) {
            requestOptions.headers[ApiConstants.API_KEY] = apiKey;
        } else {
            const authString = `${config.username}:${config.password}`;
            const authStringEnc = Buffer.from(authString, "utf8").toString("base64");

            requestOptions.headers.Authorization = `Basic ${authStringEnc}`;
        }

        requestOptions.headers[ApiConstants.CONTENT_TYPE] = ApiConstants.APPLICATION_JSON_TYPE;

        const httpConnection: ClientRequest = this.createRequest(endpoint, requestOptions, config.applicationName);
        return this.doRequest(httpConnection, json);
    }

    // create Request object
    private createRequest(endpoint: string, requestOptions: IRequest.Options, applicationName?: string): ClientRequest {
        if (!requestOptions.headers) {
            requestOptions.headers = {};
        }

        const url = new URL(endpoint);
        requestOptions.hostname = url.hostname;
        requestOptions.protocol = url.protocol;
        requestOptions.port = url.port;
        requestOptions.path = url.pathname;

        if (requestOptions.params) {
            requestOptions.path += "?" + new URLSearchParams(requestOptions.params).toString();
        }

        if (requestOptions && requestOptions.idempotencyKey) {
            requestOptions.headers[ApiConstants.IDEMPOTENCY_KEY] = requestOptions.idempotencyKey;
            delete requestOptions.idempotencyKey;
        }

        if (this.proxy && this.proxy.host) {
            const { host, port, ...options } = this.proxy;
            requestOptions.agent = new HttpsProxyAgent({ host, port: port || 443, ...options });
        } else {
            requestOptions.agent = new Agent(this.agentOptions);
        }

        requestOptions.headers["Cache-Control"] = "no-cache";

        if (!requestOptions.method) {
            requestOptions.method = ApiConstants.METHOD_POST;
        }

        requestOptions.headers[ApiConstants.ACCEPT_CHARSET] = HttpURLConnectionClient.CHARSET;
        // user-agent header
        const libInfo = `${LibraryConstants.LIB_NAME}/${LibraryConstants.LIB_VERSION}`;
        requestOptions.headers[ApiConstants.USER_AGENT] = applicationName ? `${applicationName} ${libInfo}` : libInfo;
        // custom headers
        requestOptions.headers[ApiConstants.ADYEN_LIBRARY_NAME] = LibraryConstants.LIB_NAME;
        requestOptions.headers[ApiConstants.ADYEN_LIBRARY_VERSION] = LibraryConstants.LIB_VERSION;

        // create a new ClientRequest object
        const req = httpsRequest(requestOptions);

        // set the timeout on the ClientRequest instance
        if (requestOptions.timeout) {
            req.setTimeout(requestOptions.timeout);
        }

        return req;
    }

    // invoke request
    private doRequest(connectionRequest: ClientRequest, json: string): Promise<string> {
        return new Promise((resolve, reject): void => {
            connectionRequest.flushHeaders();

            connectionRequest.on("response", (res: IncomingMessage): void => {
                const response: { headers: IncomingHttpHeaders; body: string; statusCode: number | undefined } = {
                    statusCode: res.statusCode,
                    headers: res.headers,
                    body: ""
                };

                // define default exception (in case of error during the handling of the response)
                const getException = (responseBody: string): HttpClientException => new HttpClientException({
                    message: `HTTP Exception: ${response.statusCode}. ${res.statusMessage}`,
                    statusCode: response.statusCode,
                    errorCode: undefined,
                    responseHeaders: response.headers,
                    responseBody,
                });
                let exception: HttpClientException | Error = getException(response.body);

                res.on("data", (chunk: string): void => {
                    response.body += chunk;
                });

                res.on("end", (): void => {
                    if (!res.complete) {
                        reject(new Error("The connection was terminated while the message was still being sent"));
                    }

                    // Handle 308 redirect
                    if (res.statusCode && res.statusCode === 308) {
                        const location = res.headers['location'];
                        if (location) {
                            // follow the redirect
                            try {
                                const url = new URL(location);

                                // allow-list of trusted domains (*.adyen.com)
                                const allowedHostnameRegex = /^([a-z0-9-]+\.)*adyen\.com$/;
                                if (!allowedHostnameRegex.test(url.hostname)) {
                                    return reject(new Error(`Redirect to host ${url.hostname} is not allowed.`));
                                }

                                const newRequestOptions = {
                                    hostname: url.hostname,
                                    port: url.port || (url.protocol === 'https:' ? 443 : 80),
                                    path: url.pathname + url.search,
                                    method: connectionRequest.method,
                                    headers: connectionRequest.getHeaders(),
                                    protocol: url.protocol,
                                };
                                const redirectedRequest = (url.protocol === 'https:' ? require('https') : require('http')).request(newRequestOptions);
                                const redirectResponse = this.doRequest(redirectedRequest, json);
                                return resolve(redirectResponse);
                            } catch (err) {
                                return reject(err);
                            }
                        } else {
                            return reject(new Error(`Redirect status ${res.statusCode} but no Location header`));
                        }
                    }                    

                    if (res.statusCode && (res.statusCode < 200 || res.statusCode >= 400)) {
                        // API error handling
                        try {
                            const formattedData: ApiError | { [key: string]: never } = JSON.parse(response.body);
                            const isApiError = "status" in formattedData;
                            const isRequestError = "errors" in formattedData;

                            if (isApiError) {
                                // Adyen API has returned an error
                                exception = new HttpClientException({
                                    message: `HTTP Exception: ${formattedData.status}. ${res.statusMessage}: ${formattedData.message}`,
                                    statusCode: formattedData.status,
                                    errorCode: formattedData.errorCode,
                                    responseHeaders: res.headers,
                                    responseBody: response.body,
                                    apiError: formattedData,
                                });
                            } else if (isRequestError) {
                                exception = new Error(response.body);
                            } else {
                                exception = getException(response.body);
                            }
                        } catch (e) {
                            // parsing error
                            exception = new HttpClientException({
                                message: `HTTP Exception: ${response.statusCode}. Error parsing response: ${(e as Error).message}`,
                                statusCode: response.statusCode,
                                responseHeaders: response.headers,
                                responseBody: response.body,
                            });
                        }

                        return reject(exception);
                    }

                    resolve(response.body as string);
                });

                res.on("error", reject);
            });

            connectionRequest.on("timeout", (): void => {
                connectionRequest.abort();
            });
            connectionRequest.on("error", (e) => reject(new ApiException(e.message)));
            connectionRequest.write(Buffer.from(json));
            connectionRequest.end();
        });
    }

    private installCertificateVerifier(terminalCertificatePath: string): void | Promise<HttpClientException> {
        try {
            if (terminalCertificatePath == "unencrypted") {
                this.agentOptions = {
                    rejectUnauthorized: false
                };
            } else {
                const certificateInput = fs.readFileSync(terminalCertificatePath);
                this.agentOptions = {
                    ca: certificateInput,
                    checkServerIdentity,
                };
            }

        } catch (e) {
            const message = e instanceof Error ? e.message : "undefined";
            return Promise.reject(new HttpClientException({ message: `Error loading certificate from path: ${message}` }));
        }

    }
}

export default HttpURLConnectionClient;
