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
    merchantAccount?: string;
    environment?: Environment;
    endpoint?: string;
    marketPayEndpoint?: string;
    applicationName?: string;
    apiKey?: string;
    connectionTimeoutMillis?: number;
    readTimeoutMillis?: number;
    certificatePath?: string;
    skinCode?: string;
    hmacKey?: string;
    terminalApiCloudEndpoint?: string;
    terminalApiLocalEndpoint?: string;
}

class Config {
    public username?: string;
    public password?: string;
    public merchantAccount?: string;
    public environment?: Environment;
    public endpoint?: string;
    public marketPayEndpoint?: string;
    public applicationName?: string;
    public apiKey?: string;
    public connectionTimeoutMillis?: number;
    public readTimeoutMillis?: number;
    public certificatePath?: string;

    public skinCode?: string;
    public hmacKey?: string;


    public terminalApiCloudEndpoint?: string;
    public terminalApiLocalEndpoint?: string;


    public constructor(options: ConfigConstructor = {}) {
        if (options.username) this.username = options.username;
        if (options.password) this.password = options.password;
        if (options.merchantAccount) this.merchantAccount = options.merchantAccount;
        if (options.environment) this.environment = options.environment;
        if (options.endpoint) this.endpoint = options.endpoint;
        if (options.marketPayEndpoint) this.marketPayEndpoint = options.marketPayEndpoint;
        if (options.applicationName) this.applicationName = options.applicationName;
        if (options.apiKey) this.apiKey = options.apiKey;
        if (options.connectionTimeoutMillis) this.connectionTimeoutMillis = options.connectionTimeoutMillis || 30000;
        if (options.readTimeoutMillis) this.readTimeoutMillis = options.readTimeoutMillis || 3000;
        if (options.certificatePath) this.certificatePath = options.certificatePath;
        if (options.skinCode) this.skinCode = options.skinCode;
        if (options.hmacKey) this.hmacKey = options.hmacKey;
        if (options.terminalApiCloudEndpoint) this.terminalApiCloudEndpoint = options.terminalApiCloudEndpoint;
        if (options.terminalApiLocalEndpoint) this.terminalApiLocalEndpoint = options.terminalApiLocalEndpoint;
    }
}

export default Config;
