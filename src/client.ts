import Config from "./config";
import HttpURLConnectionClient from "./httpClient/httpURLConnectionClient";
import ClientInterface from "./httpClient/clientInterface";

type ClientParametersOverload =
| { config: Config }
| { config: Config; httpClient: ClientInterface }
| { username: string; password: string; environment: Environment}
| { username: string; password: string; environment: Environment; httpClient: ClientInterface }
| { username: string; password: string; environment: Environment; liveEndpointUrlPrefix: string }
| { username: string; password: string; environment: Environment; liveEndpointUrlPrefix: string; httpClient: ClientInterface }
| { username: string; password: string; environment: Environment; applicationName: string }
| { username: string; password: string; environment: Environment; applicationName: string; httpClient: ClientInterface }
| { username: string; password: string; environment: Environment; applicationName: string; liveEndpointUrlPrefix: string }
| { username: string; password: string; environment: Environment; applicationName: string; liveEndpointUrlPrefix: string; httpClient: ClientInterface }
| { apiKey: string; environment: Environment }
| { apiKey: string; environment: Environment; httpClient: ClientInterface }
| { apiKey: string; environment: Environment; liveEndpointUrlPrefix: string }
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
    public static MARKETPAY_ENDPOINT_TEST = "https://cal-test.adyen.com/cal/services";
    public static MARKETPAY_ENDPOINT_LIVE = "https://cal-live.adyen.com/cal/services";
    public static MARKETPAY_ACCOUNT_API_VERSION = "v6";
    public static MARKETPAY_FUND_API_VERSION = "v6";
    public static MARKETPAY_HOP_API_VERSION = "v6";
    public static MARKETPAY_NOTIFICATION_API_VERSION = "v5";
    public static MARKETPAY_NOTIFICATION_CONFIGURATION_API_VERSION = "v6";
    public static TERMINAL_API_ENDPOINT_TEST = "https://terminal-api-test.adyen.com";
    public static TERMINAL_API_ENDPOINT_LIVE = "https://terminal-api-live.adyen.com";

    private _httpClient!: ClientInterface;
    public config: Config;
    public liveEndpointUrlPrefix: string;

    public constructor(clientParameters: ClientParametersOverload);
    public constructor(options: ClientParameters) {
        if (options.config) {
            this.config = options.config;
        } else {
            this.config = new Config();
        }
        this.liveEndpointUrlPrefix = options.liveEndpointUrlPrefix ?? "";

        const environment = options.environment ?? this.config.environment;
        if (environment) {
            this.setEnvironment(environment, options.liveEndpointUrlPrefix);
            if (options.username && options.password) {
                this.config.username = options.username;
                this.config.password = options.password;
            }

            if (options.apiKey) {
                this.config.apiKey = options.apiKey;
            }
        }

        if(options.applicationName) {
            this.config.applicationName = options.applicationName;
        }
        
        if (options.httpClient) {
            this._httpClient = options.httpClient;
        }
    }

    public setEnvironment(environment: Environment, liveEndpointUrlPrefix?: string): void {
        // ensure environment and liveUrlPrefix is set in config
        this.config.environment = environment;
        this.liveEndpointUrlPrefix = liveEndpointUrlPrefix ?? "";

        if (environment === "TEST") {
            this.config.marketPayEndpoint = Client.MARKETPAY_ENDPOINT_TEST;
            this.config.terminalApiCloudEndpoint = Client.TERMINAL_API_ENDPOINT_TEST;
        } else if (environment === "LIVE") {
            this.config.marketPayEndpoint = Client.MARKETPAY_ENDPOINT_LIVE;
            this.config.terminalApiCloudEndpoint = Client.TERMINAL_API_ENDPOINT_LIVE;
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

    public setTimeouts(connectionTimeoutMillis: number): void {
        this.config.connectionTimeoutMillis = connectionTimeoutMillis;
    }
}

export default Client;
