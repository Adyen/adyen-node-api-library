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

import Config from "./config";
import ClientInterface from "./typings/httpClient/clientInterface";
import HttpURLConnectionClient from "./httpClient/httpURLConnectionClient";
import { Environment } from "./typings/enums/environment";

type ClientParametersOverload =
| { config: Config }
| { config: Config; httpClient: ClientInterface }
| { username: string; password: string; environment: Environment; applicationName: string }
| { username: string; password: string; environment: Environment; applicationName: string; httpClient: ClientInterface }
| { username: string; password: string; environment: Environment; applicationName: string; liveEndpointUrlPrefix: string }
| { username: string; password: string; environment: Environment; applicationName: string; liveEndpointUrlPrefix: string; httpClient: ClientInterface }
| { apiKey: string; environment: Environment }
| { apiKey: string; environment: Environment; httpClient: ClientInterface }
| { apiKey: string; environment: Environment; liveEndpointUrlPrefix: string; httpClient: ClientInterface };

interface ClientParameters {
    config?: Config;
    username?: string;
    password?: string;
    environment?: Environment;
    applicationName?: string;
    liveEndpointUrlPrefix?: string;
    apiKey?: string;
    httpClient?: ClientInterface;
}

class Client {
    public static ENDPOINT_TEST: string = "https://pal-test.adyen.com";
    public static ENDPOINT_LIVE: string = "https://pal-live.adyen.com";
    public static ENDPOINT_LIVE_SUFFIX: string = "-pal-live.adyenpayments.com";
    public static HPP_TEST: string = "https://test.adyen.com/hpp";
    public static HPP_LIVE: string = "https://live.adyen.com/hpp";
    public static MARKETPAY_ENDPOINT_TEST: string = "https://cal-test.adyen.com/cal/services";
    public static MARKETPAY_ENDPOINT_LIVE: string = "https://cal-live.adyen.com/cal/services";
    public static API_VERSION: string = "v49";
    public static RECURRING_API_VERSION: string = "v30";
    public static MARKETPAY_ACCOUNT_API_VERSION: string = "v4";
    public static MARKETPAY_FUND_API_VERSION: string = "v3";
    public static MARKETPAY_NOTIFICATION_API_VERSION: string = "v1";
    public static LIB_NAME: string = "adyen-node-api-library";
    public static LIB_VERSION: string = "1.0.1";
    public static CHECKOUT_ENDPOINT_TEST: string = "https://checkout-test.adyen.com/checkout";
    public static CHECKOUT_ENDPOINT_LIVE_SUFFIX: string = "-checkout-live.adyenpayments.com/checkout";
    public static CHECKOUT_API_VERSION: string = "v49";
    public static BIN_LOOKUP_PAL_SUFFIX = "/pal/servlet/BinLookup/";
    public static BIN_LOOKUP_API_VERSION = "v40";
    public static CHECKOUT_UTILITY_API_VERSION: string = "v1";
    public static TERMINAL_API_ENDPOINT_TEST: string = "https://terminal-api-test.adyen.com";
    public static TERMINAL_API_ENDPOINT_LIVE: string = "https://terminal-api-live.adyen.com";
    public static ENDPOINT_PROTOCOL: string = "https://";

    private _httpClient!: ClientInterface;
    public config: Config;

    public constructor(clientParameters: ClientParametersOverload);
    public constructor(options: ClientParameters) {
        if (options.config) {
            this.config = options.config;
        } else {
            this.config = new Config();
        }

        if (options.environment) {
            this.setEnvironment(options.environment, options.liveEndpointUrlPrefix);
            if (options.username && options.password && options.applicationName) {
                this.config.username = options.username;
                this.config.password = options.password;
                this.config.applicationName = options.applicationName;
            }

            if (options.apiKey) {
                this.config.apiKey = options.apiKey;
            }
        }

        if (options.httpClient) {
            this._httpClient = options.httpClient;
        }
    }

    public setEnvironment(environment: Environment, liveEndpointUrlPrefix?: string): void {
        this.config.environment = environment;
        if (environment === "TEST") {
            this.config.endpoint = Client.ENDPOINT_TEST;
            this.config.marketPayEndpoint = Client.MARKETPAY_ENDPOINT_TEST;
            this.config.hppEndpoint = Client.HPP_TEST;
            this.config.checkoutEndpoint = Client.CHECKOUT_ENDPOINT_TEST;
            this.config.terminalApiCloudEndpoint = Client.TERMINAL_API_ENDPOINT_TEST;
        } else if (environment === "LIVE") {
            this.config.endpoint = Client.ENDPOINT_LIVE;
            this.config.marketPayEndpoint = Client.MARKETPAY_ENDPOINT_LIVE;
            this.config.hppEndpoint = Client.HPP_LIVE;
            if (liveEndpointUrlPrefix) {
                this.config.endpoint =
                    `${Client.ENDPOINT_PROTOCOL}${liveEndpointUrlPrefix}${Client.ENDPOINT_LIVE_SUFFIX}`;
                this.config.checkoutEndpoint =
                    `${Client.ENDPOINT_PROTOCOL}${liveEndpointUrlPrefix}${Client.CHECKOUT_ENDPOINT_LIVE_SUFFIX}`;
            } else {
                this.config.endpoint = Client.ENDPOINT_LIVE;
                this.config.checkoutEndpoint = undefined;
            }
        }
    }

    public get httpClient(): ClientInterface {
        if (!this._httpClient) {
            this._httpClient = new HttpURLConnectionClient();
        }

        return this._httpClient;
    }

    public set httpClient(httpClient: ClientInterface) {
        this._httpClient = httpClient;
    }

    public setApplicationName(applicationName: string): void {
        this.config.applicationName = applicationName;
    }

    public setTimeouts(connectionTimeoutMillis: number, readTimeoutMillis: number): void {
        this.config.connectionTimeoutMillis = connectionTimeoutMillis;
        this.config.readTimeoutMillis = readTimeoutMillis;
    }
}

export default Client;
