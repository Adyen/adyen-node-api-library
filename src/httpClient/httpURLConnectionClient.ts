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

    public request(
        endpoint: string, json: string, config: Config, isApiRequired: boolean,
        requestOptions: IRequest.Options,
    ): Promise<string | HttpClientException | ApiException> {
        requestOptions.headers = {};
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
        return this.doPostRequest(httpConnection, json);
    }

    public post(endpoint: string, postParameters: [string, string][], config: Config): Promise<HttpClientException | string> {
        const postQuery: string = this.getQuery(postParameters);
        const connectionRequest: ClientRequest = this.createRequest(endpoint, {}, config.applicationName);
        return this.doPostRequest(connectionRequest, postQuery);
    }

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
        requestOptions.headers[ApiConstants.USER_AGENT] = `${applicationName} ${LibraryConstants.LIB_NAME}/${LibraryConstants.LIB_VERSION}`;
        requestOptions.headers[ApiConstants.ADYEN_LIBRARY_NAME] = LibraryConstants.LIB_NAME;
        requestOptions.headers[ApiConstants.ADYEN_LIBRARY_VERSION] = LibraryConstants.LIB_VERSION;

        return httpsRequest(requestOptions);
    }

    private getQuery(params: [string, string][]): string {
        return params.map(([key, value]): string => `${key}=${value}`).join("&");
    }

    private doPostRequest(connectionRequest: ClientRequest, json: string): Promise<HttpClientException | string> {
        return new Promise((resolve, reject): void => {
            connectionRequest.flushHeaders();

            connectionRequest.on("response", (res: IncomingMessage): void => {
                const response: { headers: IncomingHttpHeaders; body: string; statusCode: number | undefined } = {
                    statusCode: res.statusCode,
                    headers: res.headers,
                    body: ""
                };

                const getException = (responseBody: string): HttpClientException => new HttpClientException({
                    message: `HTTP Exception: ${response.statusCode}. ${res.statusMessage}`,
                    statusCode: response.statusCode,
                    errorCode: undefined,
                    responseHeaders: response.headers,
                    responseBody,
                });

                let exception: HttpClientException | Error = getException(response.body.toString());

                res.on("data", (chunk: string): void => {
                    response.body += chunk;
                });

                res.on("end", (): void => {
                    if (!res.complete) {
                        reject(new Error("The connection was terminated while the message was still being sent"));
                    }

                    if (res.statusCode && (res.statusCode < 200 || res.statusCode >= 300)) {
                        try {
                            const formattedData: ApiError | {[key: string]: never} = JSON.parse(response.body);
                            const isApiError = "status" in formattedData;
                            const isRequestError = "errors" in formattedData;

                            if (isApiError) {
                                exception = new HttpClientException({
                                    message: `HTTP Exception: ${formattedData.status}. ${res.statusMessage}: ${formattedData.message}`,
                                    statusCode: formattedData.status,
                                    errorCode: formattedData.errorCode,
                                    responseHeaders: res.headers,
                                    responseBody: response.body,
                                });
                            } else if (isRequestError) {
                                exception = new Error(response.body);
                            } else {
                                exception = getException(response.body);
                            }
                        } catch (e) {
                            reject(exception);
                        } finally {
                            reject(exception);
                        }
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
            if (terminalCertificatePath == "unencrypted"){
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
            const message = e instanceof Error ? e.message: "undefined";
            return Promise.reject(new HttpClientException({ message: `Error loading certificate from path: ${message}` }));
        }

    }
}

export default HttpURLConnectionClient;
