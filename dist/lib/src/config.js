"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = /** @class */ (function () {
    function Config(options) {
        if (options === void 0) { options = {}; }
        if (options.username)
            this.username = options.username;
        if (options.password)
            this.password = options.password;
        if (options.merchantAccount)
            this.merchantAccount = options.merchantAccount;
        if (options.environment)
            this.environment = options.environment;
        if (options.endpoint)
            this.endpoint = options.endpoint;
        if (options.marketPayEndpoint)
            this.marketPayEndpoint = options.marketPayEndpoint;
        if (options.applicationName)
            this.applicationName = options.applicationName;
        if (options.apiKey)
            this.apiKey = options.apiKey;
        if (options.connectionTimeoutMillis)
            this.connectionTimeoutMillis = options.connectionTimeoutMillis || 30000;
        if (options.readTimeoutMillis)
            this.readTimeoutMillis = options.readTimeoutMillis || 3000;
        if (options.certificatePath)
            this.certificatePath = options.certificatePath;
        if (options.hppEndpoint)
            this.hppEndpoint = options.hppEndpoint;
        if (options.skinCode)
            this.skinCode = options.skinCode;
        if (options.hmacKey)
            this.hmacKey = options.hmacKey;
        if (options.checkoutEndpoint)
            this._checkoutEndpoint = options.checkoutEndpoint;
        if (options.terminalApiCloudEndpoint)
            this.terminalApiCloudEndpoint = options.terminalApiCloudEndpoint;
        if (options.terminalApiLocalEndpoint)
            this.terminalApiLocalEndpoint = options.terminalApiLocalEndpoint;
    }
    Object.defineProperty(Config.prototype, "checkoutEndpoint", {
        get: function () {
            if (!this._checkoutEndpoint) {
                var message = "Please provide your unique live url prefix on the setEnvironment() call on the Client or provide checkoutEndpoint in your config object.";
                throw new Error(message);
            }
            else {
                return this._checkoutEndpoint;
            }
        },
        set: function (checkoutEndpoint) {
            this._checkoutEndpoint = checkoutEndpoint;
        },
        enumerable: true,
        configurable: true
    });
    return Config;
}());
exports.default = Config;
//# sourceMappingURL=config.js.map