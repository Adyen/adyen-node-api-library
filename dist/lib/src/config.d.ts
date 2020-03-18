interface ConfigConstructor {
    username?: string;
    password?: string;
    merchantAccount?: string;
    environment?: Environment;
    endpoint?: string;
    marketPayEndpoint?: string;
    applicationName?: string;
    apiKey?: string;
    connectionTimeoutMillis?: number;
    readTimeoutMillis?: number;
    certificatePath?: string;
    hppEndpoint?: string;
    skinCode?: string;
    hmacKey?: string;
    checkoutEndpoint?: string;
    terminalApiCloudEndpoint?: string;
    terminalApiLocalEndpoint?: string;
}
declare class Config {
    username?: string;
    password?: string;
    merchantAccount?: string;
    environment?: Environment;
    endpoint?: string;
    marketPayEndpoint?: string;
    applicationName?: string;
    apiKey?: string;
    connectionTimeoutMillis?: number;
    readTimeoutMillis?: number;
    certificatePath?: string;
    hppEndpoint?: string;
    skinCode?: string;
    hmacKey?: string;
    protected _checkoutEndpoint?: string;
    terminalApiCloudEndpoint?: string;
    terminalApiLocalEndpoint?: string;
    constructor(options?: ConfigConstructor);
    set checkoutEndpoint(checkoutEndpoint: string | undefined);
    get checkoutEndpoint(): string | undefined;
}
export default Config;
