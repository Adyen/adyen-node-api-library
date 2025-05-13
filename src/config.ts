interface ConfigConstructor {
    username?: string;
    password?: string;
    environment?: Environment;
    marketPayEndpoint?: string;
    applicationName?: string;
    apiKey?: string;
    connectionTimeoutMillis?: number;
    certificatePath?: string;
    terminalApiCloudEndpoint?: string;
    terminalApiLocalEndpoint?: string;
}

const DEFAULT_TIMEOUT = 30000; // Default timeout value (30 sec)

class Config {
    public username?: string;
    public password?: string;
    public environment?: Environment;
    public marketPayEndpoint?: string;
    public applicationName?: string;
    public apiKey?: string;
    public connectionTimeoutMillis?: number;
    public certificatePath?: string;
    public terminalApiCloudEndpoint?: string;
    public terminalApiLocalEndpoint?: string;


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
    }
}

export default Config;
