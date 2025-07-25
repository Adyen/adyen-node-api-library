import Config from "./config";
import { TERMINAL_API_ENDPOINT_TEST } from "./config";

import HttpURLConnectionClient from "./httpClient/httpURLConnectionClient";
import ClientInterface from "./httpClient/clientInterface";


/**
 * Main Adyen API Client class.
 * Handles configuration, authentication, and HTTP client setup for API requests.
 */
class Client {
    // Static endpoints and API version constants
    // @deprecated: use Config.TERMINAL_API_ENDPOINT_TEST instead
    public static TERMINAL_API_ENDPOINT_TEST = "https://terminal-api-test.adyen.com";
    // @deprecated: use Config.TERMINAL_API_ENDPOINT_LIVE instead
    public static TERMINAL_API_ENDPOINT_LIVE = "https://terminal-api-live.adyen.com";
    // legacy support for marketPayEndpoint
    public static MARKETPAY_ENDPOINT_TEST = "https://cal-test.adyen.com/cal/services";
    public static MARKETPAY_ENDPOINT_LIVE = "https://cal-live.adyen.com/cal/services";
    public static MARKETPAY_ACCOUNT_API_VERSION = "v6";
    public static MARKETPAY_FUND_API_VERSION = "v6";
    public static MARKETPAY_HOP_API_VERSION = "v6";
    public static MARKETPAY_NOTIFICATION_API_VERSION = "v5";
    public static MARKETPAY_NOTIFICATION_CONFIGURATION_API_VERSION = "v6";


    private _httpClient!: ClientInterface;
    public config: Config;

    /**
     * Constructs a new Client instance.
     * @param options - Configuration object
     */
    public constructor(options: Config, httpClient?: ClientInterface) {
        
        this.config = options;

        if (!this.config.environment) {
            throw new Error("Environment must be defined");
        }

        // set Terminal API endpoints 
        if (this.config.environment === "TEST") {
            // one TEST endpoint for all regions
            this.config.terminalApiCloudEndpoint = TERMINAL_API_ENDPOINT_TEST;
        } else if (this.config.environment === "LIVE") {
            // region-based LIVE endpoints
            if(this.config.region) {
                if (!Config.isRegionValid(this.config.region)) {
                    throw new Error(`Invalid region provided: ${this.config.region}`);
                }
                this.config.terminalApiCloudEndpoint = Config.getTerminalApiEndpoint(this.config.region);  
            }
        }

        // legacy support for marketPayEndpoint
        if (this.config.environment === "TEST") {
            this.config.marketPayEndpoint = Client.MARKETPAY_ENDPOINT_TEST;
        } else if (this.config.environment === "LIVE") {
            this.config.marketPayEndpoint = Client.MARKETPAY_ENDPOINT_LIVE;
        }

        // Set application name if provided
        if(options.applicationName) {
            this.config.applicationName = options.applicationName;
        }
        
        // Set custom HTTP client if provided
        if (httpClient) {
            this._httpClient = httpClient;
        }

    }

    /**
     * Gets the HTTP client instance, creating a default one if not set.
     */
    public get httpClient(): ClientInterface {
        if (!this._httpClient) {
            this._httpClient = new HttpURLConnectionClient();
        }

        return this._httpClient;
    }

    /**
     * Sets a custom HTTP client.
     * @param httpClient - The HTTP client to use.
     */
    public set httpClient(httpClient: ClientInterface) {
        this._httpClient = httpClient;
    }

    /**
     * Sets the application name in the config.
     * @param applicationName - The application name.
     */
    public setApplicationName(applicationName: string): void {
        this.config.applicationName = applicationName;
    }

    /**
     * Sets the connection timeout in milliseconds.
     * @param connectionTimeoutMillis - Timeout in milliseconds.
     */
    public setTimeouts(connectionTimeoutMillis: number): void {
        this.config.connectionTimeoutMillis = connectionTimeoutMillis;
    }
}

export default Client;

