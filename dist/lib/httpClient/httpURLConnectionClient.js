"use strict";
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var https_1 = require("https");
var fs = __importStar(require("fs"));
var url_1 = require("url");
var client_1 = __importDefault(require("../client"));
var apiConstants_1 = require("../typings/constants/apiConstants");
var httpClientException_1 = __importDefault(require("./httpClientException"));
var HttpURLConnectionClient = /** @class */ (function () {
    function HttpURLConnectionClient() {
    }
    HttpURLConnectionClient.prototype.request = function (endpoint, json, config, isApiRequired, requestOptions) {
        if (requestOptions === void 0) { requestOptions = {}; }
        requestOptions.headers = {};
        requestOptions.timeout = config.connectionTimeoutMillis;
        if (config.certificatePath) {
            this.installCertificateVerifier(config.certificatePath);
        }
        var apiKey = config.apiKey;
        if (isApiRequired || apiKey) {
            requestOptions.headers[apiConstants_1.API_KEY] = apiKey;
        }
        else {
            var authString = config.username + ":" + config.password;
            var authEncBytes = new Buffer(authString);
            var authStringEnc = authEncBytes.toString();
            requestOptions.headers.Authorization = "Basic " + authStringEnc;
        }
        requestOptions.headers[apiConstants_1.CONTENT_TYPE] = apiConstants_1.APPLICATION_JSON_TYPE;
        var httpConnection = this.createRequest(endpoint, config.applicationName, requestOptions);
        return this.doPostRequest(httpConnection, json);
    };
    HttpURLConnectionClient.prototype.post = function (endpoint, postParameters, config) {
        var postQuery = this.getQuery(postParameters);
        var httpConnection = this.createRequest(endpoint, config.applicationName, {});
        return this.doPostRequest(httpConnection, postQuery);
    };
    Object.defineProperty(HttpURLConnectionClient.prototype, "proxy", {
        set: function (agentOptions) {
            this._proxy = agentOptions;
        },
        enumerable: true,
        configurable: true
    });
    HttpURLConnectionClient.prototype.createRequest = function (endpoint, applicationName, requestOptions) {
        var url = new url_1.URL(endpoint);
        requestOptions.hostname = url.hostname;
        requestOptions.protocol = url.protocol;
        requestOptions.port = url.port;
        requestOptions.path = url.pathname;
        if (this._proxy) {
            this.agentOptions = __assign({}, this._proxy, this.agentOptions);
        }
        if (requestOptions && requestOptions.idempotencyKey) {
            requestOptions.headers[apiConstants_1.IDEMPOTENCY_KEY] = requestOptions.idempotencyKey;
            delete requestOptions.idempotencyKey;
        }
        requestOptions.agent = new https_1.Agent(this.agentOptions);
        requestOptions.headers["Cache-Control"] = "no-cache";
        requestOptions.method = apiConstants_1.METHOD_POST;
        requestOptions.headers[apiConstants_1.ACCEPT_CHARSET] = HttpURLConnectionClient.CHARSET;
        requestOptions.headers[apiConstants_1.USER_AGENT] = applicationName + " " + client_1.default.LIB_NAME + "/" + client_1.default.LIB_VERSION;
        return https_1.request(requestOptions);
    };
    HttpURLConnectionClient.prototype.getQuery = function (params) {
        return params.map(function (_a) {
            var key = _a[0], value = _a[1];
            return key + "=" + value;
        }).join("&");
    };
    HttpURLConnectionClient.prototype.doPostRequest = function (httpConnection, json) {
        return new Promise(function (resolve, reject) {
            httpConnection.flushHeaders();
            httpConnection.on("response", function (res) {
                var resData = "";
                if (res.statusCode && res.statusCode !== 200) {
                    var exception = new httpClientException_1.default("HTTP Exception: " + res.statusCode + ". " + res.statusMessage, res.statusCode, res.headers, res);
                    reject(exception);
                }
                res.on("data", function (data) {
                    resData += data;
                });
                res.on("end", function () {
                    if (!res.complete) {
                        reject(new Error("The connection was terminated while the message was still being sent"));
                    }
                    resolve(resData);
                });
                res.on("error", reject);
            });
            httpConnection.on("timeout", function () {
                httpConnection.abort();
            });
            httpConnection.on("error", reject);
            httpConnection.write(Buffer.from(json));
            httpConnection.end();
        });
    };
    HttpURLConnectionClient.setBasicAuthentication = function (httpConnection, username, password) {
        var authString = username + ":" + password;
        var authEncBytes = new Buffer(authString);
        var authStringEnc = authEncBytes.toString();
        httpConnection.setHeader("Authorization", "Basic " + authStringEnc);
        return httpConnection;
    };
    HttpURLConnectionClient.prototype.installCertificateVerifier = function (terminalCertificatePath) {
        try {
            var certificateInput = fs.readFileSync(terminalCertificatePath);
            this.agentOptions = {
                ca: certificateInput,
                checkServerIdentity: function () {
                    return undefined;
                },
            };
        }
        catch (e) {
            throw new httpClientException_1.default("Error loading certificate from path: " + e.message);
        }
    };
    HttpURLConnectionClient.CHARSET = "utf-8";
    return HttpURLConnectionClient;
}());
exports.default = HttpURLConnectionClient;
//# sourceMappingURL=httpURLConnectionClient.js.map