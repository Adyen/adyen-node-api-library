"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var https_1 = require("https");
var https_proxy_agent_1 = require("https-proxy-agent");
var fs = __importStar(require("fs"));
var url_1 = require("url");
var client_1 = __importDefault(require("../client"));
var httpClientException_1 = __importDefault(require("./httpClientException"));
var checkServerIdentity_1 = __importDefault(require("../helpers/checkServerIdentity"));
var apiException_1 = __importDefault(require("../services/exception/apiException"));
var apiConstants_1 = require("../constants/apiConstants");
var HttpURLConnectionClient = (function () {
    function HttpURLConnectionClient() {
    }
    HttpURLConnectionClient.prototype.request = function (endpoint, json, config, isApiRequired, requestOptions) {
        requestOptions.headers = {};
        requestOptions.timeout = config.connectionTimeoutMillis;
        if (config.certificatePath) {
            this.installCertificateVerifier(config.certificatePath);
        }
        var apiKey = config.apiKey;
        if (isApiRequired && !apiKey) {
            return Promise.reject(new apiException_1.default("Invalid X-API-Key was used", 401));
        }
        if (apiKey) {
            requestOptions.headers[apiConstants_1.ApiConstants.API_KEY] = apiKey;
        }
        else {
            var authString = config.username + ":" + config.password;
            var authStringEnc = Buffer.from(authString, "utf8").toString("base64");
            requestOptions.headers.Authorization = "Basic " + authStringEnc;
        }
        requestOptions.headers[apiConstants_1.ApiConstants.CONTENT_TYPE] = apiConstants_1.ApiConstants.APPLICATION_JSON_TYPE;
        var httpConnection = this.createRequest(endpoint, requestOptions, config.applicationName);
        return this.doPostRequest(httpConnection, json);
    };
    HttpURLConnectionClient.prototype.post = function (endpoint, postParameters, config) {
        var postQuery = this.getQuery(postParameters);
        var connectionRequest = this.createRequest(endpoint, {}, config.applicationName);
        return this.doPostRequest(connectionRequest, postQuery);
    };
    HttpURLConnectionClient.prototype.createRequest = function (endpoint, requestOptions, applicationName) {
        if (!requestOptions.headers) {
            requestOptions.headers = {};
        }
        var url = new url_1.URL(endpoint);
        requestOptions.hostname = url.hostname;
        requestOptions.protocol = url.protocol;
        requestOptions.port = url.port;
        requestOptions.path = url.pathname;
        if (requestOptions && requestOptions.idempotencyKey) {
            requestOptions.headers[apiConstants_1.ApiConstants.IDEMPOTENCY_KEY] = requestOptions.idempotencyKey;
            delete requestOptions.idempotencyKey;
        }
        if (this.proxy && this.proxy.host) {
            var _a = this.proxy, host = _a.host, port = _a.port, options = __rest(_a, ["host", "port"]);
            requestOptions.agent = new https_proxy_agent_1.HttpsProxyAgent(__assign({ host: host, port: port || 443 }, options));
        }
        else {
            requestOptions.agent = new https_1.Agent(this.agentOptions);
        }
        requestOptions.headers["Cache-Control"] = "no-cache";
        requestOptions.method = apiConstants_1.ApiConstants.METHOD_POST;
        requestOptions.headers[apiConstants_1.ApiConstants.ACCEPT_CHARSET] = HttpURLConnectionClient.CHARSET;
        requestOptions.headers[apiConstants_1.ApiConstants.USER_AGENT] = applicationName + " " + client_1.default.LIB_NAME + "/" + client_1.default.LIB_VERSION;
        return https_1.request(requestOptions);
    };
    HttpURLConnectionClient.prototype.getQuery = function (params) {
        return params.map(function (_a) {
            var key = _a[0], value = _a[1];
            return key + "=" + value;
        }).join("&");
    };
    HttpURLConnectionClient.prototype.doPostRequest = function (connectionRequest, json) {
        return new Promise(function (resolve, reject) {
            connectionRequest.flushHeaders();
            connectionRequest.on("response", function (res) {
                var response = {
                    statusCode: res.statusCode,
                    headers: res.headers,
                    body: []
                };
                var getException = function (responseBody) { return new httpClientException_1.default({
                    message: "HTTP Exception: " + response.statusCode + ". " + res.statusMessage,
                    statusCode: response.statusCode,
                    errorCode: undefined,
                    responseHeaders: response.headers,
                    responseBody: responseBody,
                }); };
                var exception = getException(response.body.toString());
                res.on("data", function (data) {
                    response.body.push(data);
                });
                res.on("end", function () {
                    if (!res.complete) {
                        reject(new Error("The connection was terminated while the message was still being sent"));
                    }
                    if (response.body.length) {
                        response.body = response.body.join();
                    }
                    if (res.statusCode && (res.statusCode < 200 || res.statusCode >= 300)) {
                        try {
                            var dataString = response.body.toString();
                            var formattedData = JSON.parse(dataString);
                            var isApiError = "status" in formattedData;
                            var isRequestError = "errors" in formattedData;
                            if (isApiError) {
                                exception = new httpClientException_1.default({
                                    message: "HTTP Exception: " + formattedData.status + ". " + res.statusMessage + ": " + formattedData.message,
                                    statusCode: formattedData.status,
                                    errorCode: formattedData.errorCode,
                                    responseHeaders: res.headers,
                                    responseBody: dataString,
                                });
                            }
                            else if (isRequestError) {
                                exception = new Error(dataString);
                            }
                            else {
                                exception = getException(dataString);
                            }
                        }
                        catch (e) {
                            reject(exception);
                        }
                        finally {
                            reject(exception);
                        }
                    }
                    resolve(response.body);
                });
                res.on("error", reject);
            });
            connectionRequest.on("timeout", function () {
                connectionRequest.abort();
            });
            connectionRequest.on("error", function (e) { return reject(new apiException_1.default(e.message)); });
            connectionRequest.write(Buffer.from(json));
            connectionRequest.end();
        });
    };
    HttpURLConnectionClient.prototype.installCertificateVerifier = function (terminalCertificatePath) {
        try {
            var certificateInput = fs.readFileSync(terminalCertificatePath);
            this.agentOptions = {
                ca: certificateInput,
                checkServerIdentity: checkServerIdentity_1.default,
            };
        }
        catch (e) {
            return Promise.reject(new httpClientException_1.default({ message: "Error loading certificate from path: " + e.message }));
        }
    };
    HttpURLConnectionClient.CHARSET = "utf-8";
    return HttpURLConnectionClient;
}());
exports.default = HttpURLConnectionClient;
//# sourceMappingURL=httpURLConnectionClient.js.map