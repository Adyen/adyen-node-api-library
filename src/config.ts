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
interface ConfigConstructor {
    username?: string;
    password?: string;
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

class Config {
    public username?: string;
    public password?: string;
    public environment?: Environment;
    public endpoint?: string;
    public marketPayEndpoint?: string;
    public applicationName?: string;
    public apiKey?: string;
    public connectionTimeoutMillis?: number;
    public readTimeoutMillis?: number;
    public certificatePath?: string;

    public hppEndpoint?: string;
    public skinCode?: string;
    public hmacKey?: string;

    protected _checkoutEndpoint?: string;

    public terminalApiCloudEndpoint?: string;
    public terminalApiLocalEndpoint?: string;

    public constructor(options: ConfigConstructor = {}) {
        if (options.username) this.username = options.username;
        if (options.password) this.password = options.password;
        if (options.environment) this.environment = options.environment;
        if (options.endpoint) this.endpoint = options.endpoint;
        if (options.marketPayEndpoint) this.marketPayEndpoint = options.marketPayEndpoint;
        if (options.applicationName) this.applicationName = options.applicationName;
        if (options.apiKey) this.apiKey = options.apiKey;
        if (options.connectionTimeoutMillis) this.connectionTimeoutMillis = options.connectionTimeoutMillis || 30000;
        if (options.readTimeoutMillis) this.readTimeoutMillis = options.readTimeoutMillis || 3000;
        if (options.certificatePath) this.certificatePath = options.certificatePath;
        if (options.hppEndpoint) this.hppEndpoint = options.hppEndpoint;
        if (options.skinCode) this.skinCode = options.skinCode;
        if (options.hmacKey) this.hmacKey = options.hmacKey;
        if (options.checkoutEndpoint) this._checkoutEndpoint = options.checkoutEndpoint;
        if (options.terminalApiCloudEndpoint) this.terminalApiCloudEndpoint = options.terminalApiCloudEndpoint;
        if (options.terminalApiLocalEndpoint) this.terminalApiLocalEndpoint = options.terminalApiLocalEndpoint;
    }

    public set checkoutEndpoint(checkoutEndpoint: string | undefined) {
        this._checkoutEndpoint = checkoutEndpoint;
    }

    public get checkoutEndpoint(): string | undefined {
        if (!this._checkoutEndpoint) {
            const message = "Please provide your unique live url prefix on the setEnvironment() call on the Client or provide checkoutEndpoint in your config object.";
            throw new Error(message);
        } else {
            return this._checkoutEndpoint;
        }
    }
}

export default Config;
