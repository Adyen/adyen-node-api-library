import Config from "./config";
import ClientInterface from "./httpClient/clientInterface";
import { Environment } from "./typings/enums/environment";
declare type ClientParametersOverload = {
    config: Config;
} | {
    config: Config;
    httpClient: ClientInterface;
} | {
    username: string;
    password: string;
    environment: Environment;
    applicationName: string;
} | {
    username: string;
    password: string;
    environment: Environment;
    applicationName: string;
    httpClient: ClientInterface;
} | {
    username: string;
    password: string;
    environment: Environment;
    applicationName: string;
    liveEndpointUrlPrefix: string;
} | {
    username: string;
    password: string;
    environment: Environment;
    applicationName: string;
    liveEndpointUrlPrefix: string;
    httpClient: ClientInterface;
} | {
    apiKey: string;
    environment: Environment;
} | {
    apiKey: string;
    environment: Environment;
    httpClient: ClientInterface;
} | {
    apiKey: string;
    environment: Environment;
    liveEndpointUrlPrefix: string;
    httpClient: ClientInterface;
};
declare class Client {
    static ENDPOINT_TEST: string;
    static ENDPOINT_LIVE: string;
    static ENDPOINT_LIVE_SUFFIX: string;
    static HPP_TEST: string;
    static HPP_LIVE: string;
    static MARKETPAY_ENDPOINT_TEST: string;
    static MARKETPAY_ENDPOINT_LIVE: string;
    static API_VERSION: string;
    static RECURRING_API_VERSION: string;
    static MARKETPAY_ACCOUNT_API_VERSION: string;
    static MARKETPAY_FUND_API_VERSION: string;
    static MARKETPAY_NOTIFICATION_API_VERSION: string;
    static LIB_NAME: string;
    static LIB_VERSION: string;
    static CHECKOUT_ENDPOINT_TEST: string;
    static CHECKOUT_ENDPOINT_LIVE_SUFFIX: string;
    static CHECKOUT_API_VERSION: string;
    static BIN_LOOKUP_PAL_SUFFIX: string;
    static BIN_LOOKUP_API_VERSION: string;
    static CHECKOUT_UTILITY_API_VERSION: string;
    static TERMINAL_API_ENDPOINT_TEST: string;
    static TERMINAL_API_ENDPOINT_LIVE: string;
    static ENDPOINT_PROTOCOL: string;
    private _httpClient;
    private _config;
    constructor(clientParameters: ClientParametersOverload);
    setEnvironment(environment: Environment, liveEndpointUrlPrefix?: string): void;
    httpClient: ClientInterface;
    config: Config;
    setApplicationName(applicationName: string): void;
    setTimeouts(connectionTimeoutMillis: number, readTimeoutMillis: number): void;
}
export default Client;
