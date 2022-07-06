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

import Config from "./config";
import HttpURLConnectionClient from "./httpClient/httpURLConnectionClient";
import { version } from "../package.json";
import ClientInterface from "./httpClient/clientInterface";

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
    public static ENDPOINT_TEST = "https://pal-test.adyen.com";
    public static ENDPOINT_LIVE = "https://pal-live.adyen.com";
    public static ENDPOINT_LIVE_SUFFIX = "-pal-live.adyenpayments.com";
    public static HPP_TEST = "https://test.adyen.com/hpp";
    public static HPP_LIVE = "https://live.adyen.com/hpp";
    public static MARKETPAY_ENDPOINT_TEST = "https://cal-test.adyen.com/cal/services";
    public static MARKETPAY_ENDPOINT_LIVE = "https://cal-live.adyen.com/cal/services";
    public static CHECKOUT_API_VERSION = "v69";
    public static API_VERSION = "v64";
    public static RECURRING_API_VERSION = "v49";
    public static MARKETPAY_ACCOUNT_API_VERSION = "v6";
    public static MARKETPAY_FUND_API_VERSION = "v6";
    public static MARKETPAY_HOP_API_VERSION = "v6";
    public static MARKETPAY_NOTIFICATION_API_VERSION = "v5";
    public static MARKETPAY_NOTIFICATION_CONFIGURATION_API_VERSION = "v6";
    public static PAYMENT_API_VERSION = "v68";
    public static LIB_NAME = "adyen-node-api-library";
    public static LIB_VERSION: string = version;
    public static CHECKOUT_ENDPOINT_TEST = "https://checkout-test.adyen.com/checkout";
    public static CHECKOUT_ENDPOINT_LIVE_SUFFIX = "-checkout-live.adyenpayments.com/checkout";
    public static BIN_LOOKUP_PAL_SUFFIX = "/pal/servlet/BinLookup/";
    public static BIN_LOOKUP_API_VERSION = "v50";
    public static TERMINAL_API_ENDPOINT_TEST = "https://terminal-api-test.adyen.com";
    public static TERMINAL_API_ENDPOINT_LIVE = "https://terminal-api-live.adyen.com";
    public static ENDPOINT_PROTOCOL = "https://";
    public static PAYMENT_API_ENDPOINT_TEST = "https://pal-test.adyen.com/pal/servlet/Payment";
    public static PAYMENT_API_ENDPOINT_LIVE = "https://pal-live.adyen.com/pal/servlet/Payment";


    private _httpClient!: ClientInterface;
    public config: Config;

    public constructor(clientParameters: ClientParametersOverload);
    public constructor(options: ClientParameters) {
        if (options.config) {
            this.config = options.config;
        } else {
            this.config = new Config();
        }

        const environment = options.environment || this.config.environment;
        if (environment) {
            this.setEnvironment(environment, options.liveEndpointUrlPrefix);
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
        if (environment === "TEST") {
            this.config.endpoint = Client.ENDPOINT_TEST;
            this.config.marketPayEndpoint = Client.MARKETPAY_ENDPOINT_TEST;
            this.config.hppEndpoint = Client.HPP_TEST;
            this.config.checkoutEndpoint = Client.CHECKOUT_ENDPOINT_TEST;
            this.config.terminalApiCloudEndpoint = Client.TERMINAL_API_ENDPOINT_TEST;
            this.config.paymentEndpoint = Client.PAYMENT_API_ENDPOINT_TEST;
        } else if (environment === "LIVE") {
            this.config.endpoint = Client.ENDPOINT_LIVE;
            this.config.marketPayEndpoint = Client.MARKETPAY_ENDPOINT_LIVE;
            this.config.hppEndpoint = Client.HPP_LIVE;
            this.config.terminalApiCloudEndpoint = Client.TERMINAL_API_ENDPOINT_LIVE;
            this.config.paymentEndpoint = Client.PAYMENT_API_ENDPOINT_LIVE;
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
