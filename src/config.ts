
// Test endpoint for Terminal API
export const TERMINAL_API_ENDPOINT_TEST = "https://terminal-api-test.adyen.com";

// Live endpoints for Terminal API
const TERMINAL_API_ENDPOINT_LIVE = "https://terminal-api-live.adyen.com";
const TERMINAL_API_ENDPOINT_AU_LIVE = "https://terminal-api-live-au.adyen.com";
const TERMINAL_API_ENDPOINT_US_LIVE = "https://terminal-api-live-us.adyen.com";
const TERMINAL_API_ENDPOINT_APSE_LIVE = "https://terminal-api-live-apse.adyen.com";


/**
 * Supported environments for the Adyen APIs.
 */
export enum EnvironmentEnum {
  LIVE = "LIVE",
  TEST = "TEST"
}

/**
 * Supported Regions for Terminal API integration.
 */
export enum RegionEnum {
    EU = "EU",
    AU = "AU",
    US = "US",
    APSE = "APSE"
}

// Terminal API Endpoints Map
export const TERMINAL_API_ENDPOINTS_MAP: Record<RegionEnum, string> = {
    [RegionEnum.EU]: TERMINAL_API_ENDPOINT_LIVE,
    [RegionEnum.AU]: TERMINAL_API_ENDPOINT_AU_LIVE,
    [RegionEnum.US]: TERMINAL_API_ENDPOINT_US_LIVE,
    [RegionEnum.APSE]: TERMINAL_API_ENDPOINT_APSE_LIVE
};


interface ConfigConstructor {
    username?: string;
    password?: string;
    environment?: EnvironmentEnum;
    marketPayEndpoint?: string;
    applicationName?: string;
    apiKey?: string;
    connectionTimeoutMillis?: number;
    certificatePath?: string;
    terminalApiCloudEndpoint?: string;
    terminalApiLocalEndpoint?: string;
    liveEndpointUrlPrefix?: string; // must be provided for LIVE integration
    region?: RegionEnum; // must be provided for Terminal API integration
}

const DEFAULT_TIMEOUT = 30000; // Default timeout value (30 sec)

class Config {

    public username?: string;
    public password?: string;
    public environment?: EnvironmentEnum;
    public marketPayEndpoint?: string;
    public applicationName?: string;
    public apiKey?: string;
    public connectionTimeoutMillis?: number;
    public certificatePath?: string;
    public terminalApiCloudEndpoint?: string;
    public terminalApiLocalEndpoint?: string;
    public liveEndpointUrlPrefix?: string;
    public region?: RegionEnum;

    public constructor(options: ConfigConstructor = {}) {
        if (options.username) this.username = options.username;
        if (options.password) this.password = options.password;
        if (options.environment) this.environment = options.environment;
        if (options.marketPayEndpoint) this.marketPayEndpoint = options.marketPayEndpoint;
        if (options.applicationName) this.applicationName = options.applicationName;
        if (options.apiKey) this.apiKey = options.apiKey;
        // Set the timeout to DEFAULT_TIMEOUT if not provided
        this.connectionTimeoutMillis = options.connectionTimeoutMillis ?? DEFAULT_TIMEOUT;
        if (options.certificatePath) this.certificatePath = options.certificatePath;
        if (options.terminalApiCloudEndpoint) this.terminalApiCloudEndpoint = options.terminalApiCloudEndpoint;
        if (options.terminalApiLocalEndpoint) this.terminalApiLocalEndpoint = options.terminalApiLocalEndpoint;
        if (options.liveEndpointUrlPrefix) this.liveEndpointUrlPrefix = options.liveEndpointUrlPrefix;
        if (options.region) this.region = options.region;
    }

    /**
     * Checks if the provided environment is valid.
     * @param environment - The environment to validate.
     * @returns true if the environment exists in EnvironmentEnum, false otherwise.
     */
    public static isEnvironmentValid(environment: EnvironmentEnum): boolean {
        return Object.values(EnvironmentEnum).includes(environment);
    }

    /**
     * Checks if the provided region is a valid supported.
     * @param region - The region to validate.
     * @returns true if the region exists in RegionEnum, false otherwise.
     */
    public static isRegionValid(region: RegionEnum): boolean {
        return Object.values(RegionEnum).includes(region);
    }

    /**
     * Returns the Terminal API endpoint for the given region.
     * If the region is not valid, returns the EU endpoint.
     * @param region - The region to get the endpoint for.
     * @returns The Terminal API endpoint URL.
     */
    public static getTerminalApiEndpoint(region: RegionEnum): string {
        return TERMINAL_API_ENDPOINTS_MAP[region] || TERMINAL_API_ENDPOINTS_MAP[RegionEnum.EU];
    }

}

export default Config;
