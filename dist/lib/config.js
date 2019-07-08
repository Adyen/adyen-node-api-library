"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = /** @class */ (function () {
    function Config(options) {
        if (options === void 0) { options = {}; }
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
    Object.defineProperty(Config.prototype, "username", {
        get: function () {
            return this._username;
        },
        set: function (username) {
            this._username = username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (password) {
            this._password = password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "merchantAccount", {
        get: function () {
            return this._merchantAccount;
        },
        set: function (merchantAccount) {
            this._merchantAccount = merchantAccount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "environment", {
        get: function () {
            return this._environment;
        },
        set: function (environment) {
            this._environment = environment;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "endpoint", {
        get: function () {
            return this._endpoint;
        },
        set: function (endpoint) {
            this._endpoint = endpoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "marketPayEndpoint", {
        get: function () {
            return this._marketPayEndpoint;
        },
        set: function (marketPayEndpoint) {
            this._marketPayEndpoint = marketPayEndpoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "applicationName", {
        get: function () {
            return this._applicationName;
        },
        set: function (applicationName) {
            this._applicationName = applicationName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "apiKey", {
        get: function () {
            return this._apiKey;
        },
        set: function (apiKey) {
            this._apiKey = apiKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "hppEndpoint", {
        get: function () {
            return this._hppEndpoint;
        },
        set: function (hppEndpoint) {
            this._hppEndpoint = hppEndpoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "skinCode", {
        get: function () {
            return this._skinCode;
        },
        set: function (skinCode) {
            this._skinCode = skinCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "hmacKey", {
        get: function () {
            return this._hmacKey;
        },
        set: function (hmacKey) {
            this._hmacKey = hmacKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "checkoutEndpoint", {
        get: function () {
            if (!this._checkoutEndpoint) {
                var message = "Please provide your unique live url prefix on the setEnvironment() call on the Client or provide checkoutEndpoint in your config object.";
                throw new Error(message);
            }
            return this._checkoutEndpoint;
        },
        set: function (checkoutEndpoint) {
            this._checkoutEndpoint = checkoutEndpoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "terminalApiCloudEndpoint", {
        get: function () {
            return this._terminalApiCloudEndpoint;
        },
        set: function (terminalApiCloudEndpoint) {
            this._terminalApiCloudEndpoint = terminalApiCloudEndpoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "terminalApiLocalEndpoint", {
        get: function () {
            return this._terminalApiLocalEndpoint;
        },
        set: function (terminalApiLocalEndpoint) {
            this._terminalApiLocalEndpoint = terminalApiLocalEndpoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "connectionTimeoutMillis", {
        get: function () {
            return this._connectionTimeoutMillis;
        },
        set: function (connectionTimeoutMillis) {
            this._connectionTimeoutMillis = connectionTimeoutMillis;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "readTimeoutMillis", {
        get: function () {
            return this._readTimeoutMillis;
        },
        set: function (readTimeoutMillis) {
            this._readTimeoutMillis = readTimeoutMillis;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Config.prototype, "certificatePath", {
        get: function () {
            return this._certificatePath;
        },
        set: function (certificatePath) {
            this._certificatePath = certificatePath;
        },
        enumerable: true,
        configurable: true
    });
    return Config;
}());
exports.default = Config;
//# sourceMappingURL=config.js.map