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
 *
 * Adyen NodeJS API Library
 *
 * Copyright (c) 2019 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
import { Environment } from "./typings/enums/environment";

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

class Config {
    protected _username: string;
    protected _password: string;
    protected _merchantAccount: string;
    protected _environment: Environment;
    protected _endpoint: string;
    protected _marketPayEndpoint: string;
    protected _applicationName: string;
    protected _apiKey: string;
    protected _connectionTimeoutMillis: number;
    protected _readTimeoutMillis: number;
    protected _certificatePath: string;

    protected _hppEndpoint: string;
    protected _skinCode: string;
    protected _hmacKey: string;

    protected _checkoutEndpoint: string;

    protected _terminalApiCloudEndpoint: string;
    protected _terminalApiLocalEndpoint: string;

    public constructor(options: ConfigConstructor = {}) {
        this._username = options.username;
        this._password = options.password;
        this._merchantAccount = options.merchantAccount;
        this._environment = options.environment;
        this._endpoint = options.endpoint;
        this._marketPayEndpoint = options.marketPayEndpoint;
        this._applicationName = options.applicationName;
        this._apiKey = options.apiKey;
        this._connectionTimeoutMillis = options.connectionTimeoutMillis || 30000;
        this._readTimeoutMillis = options.readTimeoutMillis || 3000;
        this._certificatePath = options.certificatePath;
        this._hppEndpoint = options.hppEndpoint;
        this._skinCode = options.skinCode;
        this._hmacKey = options.hmacKey;
        this._checkoutEndpoint = options.checkoutEndpoint;
        this._terminalApiCloudEndpoint = options.terminalApiCloudEndpoint;
        this._terminalApiLocalEndpoint = options.terminalApiLocalEndpoint;
    }

    public get username(): string {
        return this._username;
    }

    public set username(username: string) {
        this._username = username;
    }

    public get password(): string {
        return this._password;
    }

    public set password(password: string) {
        this._password = password;
    }

    public get merchantAccount(): string {
        return this._merchantAccount;
    }

    public set merchantAccount(merchantAccount: string) {
        this._merchantAccount = merchantAccount;
    }

    public get environment(): Environment {
        return this._environment;
    }

    public set environment(environment: Environment) {
        this._environment = environment;
    }

    public get endpoint(): string {
        return this._endpoint;
    }

    public set endpoint(endpoint: string) {
        this._endpoint = endpoint;
    }

    public get marketPayEndpoint(): string {
        return this._marketPayEndpoint;
    }

    public set marketPayEndpoint(marketPayEndpoint: string) {
        this._marketPayEndpoint = marketPayEndpoint;
    }

    public get applicationName(): string {
        return this._applicationName;
    }

    public set applicationName(applicationName: string) {
        this._applicationName = applicationName;
    }

    public get apiKey(): string {
        return this._apiKey;
    }

    public set apiKey(apiKey: string) {
        this._apiKey = apiKey;
    }

    public get hppEndpoint(): string {
        return this._hppEndpoint;
    }

    public set hppEndpoint(hppEndpoint: string) {
        this._hppEndpoint = hppEndpoint;
    }

    public get skinCode(): string {
        return this._skinCode;
    }

    public set skinCode(skinCode: string) {
        this._skinCode = skinCode;
    }

    public get hmacKey(): string {
        return this._hmacKey;
    }

    public set hmacKey(hmacKey: string) {
        this._hmacKey = hmacKey;
    }

    public get checkoutEndpoint(): string {
        if (!this._checkoutEndpoint) {
            const message = "Please provide your unique live url prefix on the setEnvironment() call on the Client or provide checkoutEndpoint in your config object.";
            throw new Error(message);
        }
        return this._checkoutEndpoint;
    }

    public set checkoutEndpoint(checkoutEndpoint: string) {
        this._checkoutEndpoint = checkoutEndpoint;
    }

    public get terminalApiCloudEndpoint(): string {
        return this._terminalApiCloudEndpoint;
    }

    public set terminalApiCloudEndpoint(terminalApiCloudEndpoint: string) {
        this._terminalApiCloudEndpoint = terminalApiCloudEndpoint;
    }

    public get terminalApiLocalEndpoint(): string {
        return this._terminalApiLocalEndpoint;
    }

    public set terminalApiLocalEndpoint(terminalApiLocalEndpoint: string) {
        this._terminalApiLocalEndpoint = terminalApiLocalEndpoint;
    }

    public get connectionTimeoutMillis(): number {
        return this._connectionTimeoutMillis;
    }

    public set connectionTimeoutMillis(connectionTimeoutMillis: number) {
        this._connectionTimeoutMillis = connectionTimeoutMillis;
    }

    public get readTimeoutMillis(): number {
        return this._readTimeoutMillis;
    }

    public set readTimeoutMillis(readTimeoutMillis: number) {
        this._readTimeoutMillis = readTimeoutMillis;
    }

    public set certificatePath(certificatePath: string) {
        this._certificatePath = certificatePath;
    }

    public get certificatePath(): string {
        return this._certificatePath;
    }
}

export default Config;
