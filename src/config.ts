
/**
 * Test endpoint for Terminal API.
 */
export const TERMINAL_API_ENDPOINT_TEST = "https://terminal-api-test.adyen.com";

/**
 * Supported environments for the Adyen APIs.
 */
export enum EnvironmentEnum {
  LIVE = "LIVE",
  TEST = "TEST"
}

/**
 * Supported regions for APIs with regional live endpoints.
 */
export enum RegionEnum {
    EU = "EU",
    AU = "AU",
    US = "US",
    APSE = "APSE",
    NEA = "NEA"
}

const REGIONAL_LIVE_URL_TEMPLATES: Record<RegionEnum, string> = {
    [RegionEnum.EU]: "https://%s-live.adyen.com",
    [RegionEnum.AU]: "https://%s-live-au.adyen.com",
    [RegionEnum.US]: "https://%s-live-us.adyen.com",
    [RegionEnum.APSE]: "https://%s-live-apse.adyen.com",
    [RegionEnum.NEA]: "https://%s-live-nea.adyen.com"
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
    /**
     * The prefix of the live endpoint URL.
     * Must be provided for LIVE integration.
     */
    liveEndpointUrlPrefix?: string;
    /**
     * The region used to determine live endpoints for regional APIs.
     * Must be provided for LIVE Terminal API integration.
     */
    region?: RegionEnum;
    /**
     * Whether to redirect upon a 308 response status.
     * Enabled by default.
     */
    enable308Redirect?: boolean;
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
    /**
     * The prefix of the live endpoint URL.
     * Must be provided for LIVE integration.
     */
    public liveEndpointUrlPrefix?: string;
    /**
     * The region used to determine live endpoints for regional APIs.
     * Must be provided for LIVE Terminal API integration.
     */
    public region?: RegionEnum;
    /**
     * Whether to redirect upon a 308 response status.
     * Enabled by default.
     */
    public enable308Redirect?: boolean;


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
        this.enable308Redirect = options.enable308Redirect ?? true; // enabled by default

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
     * Forms a live URL for an API that supports regional hosts.
     * @param apiHostName - API hostname prefix, such as device-api or softposconfig.
     * @param region - Target region. If not provided, defaults to EU.
     * @returns The regional live URL, without an API path.
     * @throws Error if the region is invalid.
     */
    public static getRegionalLiveUrl(apiHostName: string, region?: RegionEnum | null): string {
        const effectiveRegion = region ?? RegionEnum.EU;
        if (!Config.isRegionValid(effectiveRegion)) {
            throw new Error(`Invalid region provided: ${effectiveRegion}`);
        }
        return REGIONAL_LIVE_URL_TEMPLATES[effectiveRegion].replace("%s", apiHostName);
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

/**
 * Maps each region to its Terminal API live endpoint.
 */
export const TERMINAL_API_ENDPOINTS_MAP: Record<RegionEnum, string> = Object.fromEntries(
    Object.values(RegionEnum).map((region) => [region, Config.getRegionalLiveUrl("terminal-api", region)])
) as Record<RegionEnum, string>;

export default Config;
