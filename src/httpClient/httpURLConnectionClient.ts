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
 *
 * Adyen NodeJS API Library
 *
 * Copyright (c) 2019 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

import {ClientRequest, IncomingMessage} from "http";
import {Agent, AgentOptions, request as httpsRequest} from "https";
import HttpsProxyAgent from "https-proxy-agent";

import * as fs from "fs";
import {URL} from "url";
import Client from "../client";
import Config from "../config";
import {
    ACCEPT_CHARSET,
    API_KEY,
    APPLICATION_JSON_TYPE,
    CONTENT_TYPE,
    IDEMPOTENCY_KEY,
    METHOD_POST,
    USER_AGENT,
} from "../typings/constants/apiConstants";
import { RequestOptions } from "../typings/requestOptions";
import ClientInterface from "../typings/httpClient/clientInterface";
import HttpClientException from "./httpClientException";
import checkServerIdentity from "../helpers/checkServerIdentity";
import {ApiError} from "../typings/apiError";
import ApiException from "../services/exception/apiException";

class HttpURLConnectionClient implements ClientInterface {
    private static CHARSET = "utf-8";
    public proxy?: AgentOptions;
    private agentOptions!: AgentOptions;

    public request(
        endpoint: string, json: string, config: Config, isApiRequired: boolean,
        requestOptions: RequestOptions,
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
            requestOptions.headers[API_KEY] = apiKey;
        } else {
            const authString = `${config.username}:${config.password}`;
            const authStringEnc = new Buffer(authString).toString("base64");

            requestOptions.headers.Authorization = `Basic ${authStringEnc}`;
        }

        requestOptions.headers[CONTENT_TYPE] = APPLICATION_JSON_TYPE;

        const httpConnection: ClientRequest = this.createRequest(endpoint, requestOptions, config.applicationName);
        return this.doPostRequest(httpConnection, json);
    }

    public post(endpoint: string, postParameters: [string, string][], config: Config): Promise<HttpClientException | string> {
        const postQuery: string = this.getQuery(postParameters);
        const connectionRequest: ClientRequest = this.createRequest(endpoint, {}, config.applicationName);
        return this.doPostRequest(connectionRequest, postQuery);
    }

    private createRequest(endpoint: string, requestOptions: RequestOptions, applicationName?: string): ClientRequest {
        if (!requestOptions.headers) {
            requestOptions.headers = {};
        }

        const url = new URL(endpoint);
        requestOptions.hostname = url.hostname;
        requestOptions.protocol = url.protocol;
        requestOptions.port = url.port;
        requestOptions.path = url.pathname;

        if (requestOptions && requestOptions.idempotencyKey) {
            requestOptions.headers[IDEMPOTENCY_KEY] = requestOptions.idempotencyKey;
            delete requestOptions.idempotencyKey;
        }

        if (this.proxy && this.proxy.host) {
            const { host, port, ...options } = this.proxy;
            requestOptions.agent = new HttpsProxyAgent({ host, port: port || 443, ...options });
        } else {
            requestOptions.agent = new Agent(this.agentOptions);
        }

        requestOptions.headers["Cache-Control"] = "no-cache";
        requestOptions.method = METHOD_POST;
        requestOptions.headers[ACCEPT_CHARSET] = HttpURLConnectionClient.CHARSET;
        requestOptions.headers[USER_AGENT] = `${applicationName} ${Client.LIB_NAME}/${Client.LIB_VERSION}`;

        return httpsRequest(requestOptions);
    }

    private getQuery(params: [string, string][]): string {
        return params.map(([key, value]): string => `${key}=${value}`).join("&");
    }

    private doPostRequest(connectionRequest: ClientRequest, json: string): Promise<HttpClientException | string> {
        return new Promise((resolve, reject): void => {
            connectionRequest.flushHeaders();

            connectionRequest.on("response", (res: IncomingMessage): void => {
                let resData = "";
                const getException = (): HttpClientException => new HttpClientException(
                    `HTTP Exception: ${res.statusCode}. ${res.statusMessage}`,
                    res.statusCode,
                    undefined,
                    res.headers,
                    res,
                );
                let exception: HttpClientException = getException();

                res.on("data", (data): void => {
                    if (res.statusCode && res.statusCode !== 200) {
                        try {
                            const formattedData: ApiError = JSON.parse(data.toString() as string);
                            const isApiError = "status" in formattedData;
                            const customException = new HttpClientException(
                                `HTTP Exception: ${formattedData.status}. ${res.statusMessage}: ${formattedData.message}`,
                                formattedData.status,
                                formattedData.errorCode,
                                res.headers,
                                res,
                            );
                            exception = isApiError ? customException : exception;
                        } catch (e) {
                            reject(exception);
                        } finally {
                            reject(exception);
                        }
                    }

                    resData += data;
                });

                res.on("end", (): void => {
                    if (!res.complete) {
                        reject(new Error("The connection was terminated while the message was still being sent"));
                    }
                    resolve(resData);
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
            const certificateInput = fs.readFileSync(terminalCertificatePath);

            this.agentOptions = {
                ca: certificateInput,
                checkServerIdentity,
            };

        } catch (e) {
            return Promise.reject(new HttpClientException(`Error loading certificate from path: ${e.message}`));
        }

    }
}

export default HttpURLConnectionClient;
