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
import { Agent, AgentOptions, request as httpRequest } from "https";

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
import ClientInterface from "./clientInterface";
import HttpClientException from "./httpClientException";

class HttpURLConnectionClient implements ClientInterface {
    private static CHARSET: string = "utf-8";
    public proxy?: AgentOptions;
    private agentOptions!: AgentOptions;

    public request(
        endpoint: string, json: string, config: Config, isApiRequired: boolean,
        requestOptions: RequestOptions,
    ): Promise<string> {
        requestOptions.headers = {};
        requestOptions.timeout = config.connectionTimeoutMillis;

        if (config.certificatePath) {
            this.installCertificateVerifier(config.certificatePath);
        }

        const apiKey = config.apiKey;

        if (isApiRequired || apiKey) {
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

    public post(endpoint: string, postParameters: [string, string][], config: Config): Promise<string> {
        const postQuery: string = this.getQuery(postParameters);
        const httpConnection: ClientRequest = this.createRequest(endpoint, {}, config.applicationName);
        return this.doPostRequest(httpConnection, postQuery);
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

        if (this.proxy) {
            this.agentOptions = {...this.proxy, ...this.agentOptions};
        }

        if (requestOptions && requestOptions.idempotencyKey) {
            requestOptions.headers[IDEMPOTENCY_KEY] = requestOptions.idempotencyKey;
            delete requestOptions.idempotencyKey;
        }

        requestOptions.agent = new Agent(this.agentOptions);
        requestOptions.headers["Cache-Control"] = "no-cache";
        requestOptions.method = METHOD_POST;
        requestOptions.headers[ACCEPT_CHARSET] = HttpURLConnectionClient.CHARSET;
        requestOptions.headers[USER_AGENT] = `${applicationName} ${Client.LIB_NAME}/${Client.LIB_VERSION}`;

        return httpRequest(requestOptions);
    }

    private getQuery(params: [string, string][]): string {
        return params.map(([key, value]): string => `${key}=${value}`).join("&");
    }

    private doPostRequest(httpConnection: ClientRequest, json: string): Promise<string> {
        return new Promise((resolve, reject): void => {
            httpConnection.flushHeaders();

            httpConnection.on("response", (res: IncomingMessage): void => {
                let resData = "";
                if (res.statusCode && res.statusCode !== 200) {
                    const exception = new HttpClientException(
                        `HTTP Exception: ${res.statusCode}. ${res.statusMessage}`,
                        res.statusCode,
                        res.headers,
                        res,
                    );
                    reject(exception);
                }
                res.on("data", (data): void => {
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

            httpConnection.on("timeout", (): void => {
                httpConnection.abort();
            });
            httpConnection.on("error", reject);
            httpConnection.write(Buffer.from(json));
            httpConnection.end();
        });
    }

    private installCertificateVerifier(terminalCertificatePath: string): void {
        try {
            const certificateInput = fs.readFileSync(terminalCertificatePath);

            this.agentOptions = {
                ca: certificateInput,
                checkServerIdentity: (): undefined => {
                    return undefined;
                },
            };

        } catch (e) {
            throw new HttpClientException(`Error loading certificate from path: ${e.message}`);
        }

    }

}

export default HttpURLConnectionClient;
