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
import { Agent, request as httpsRequest } from "https";
import { HttpsProxyAgent } from "https-proxy-agent";
import * as fs from "fs";
import { URL } from "url";
import Client from "../client";
import HttpClientException from "./httpClientException";
import checkServerIdentity from "../helpers/checkServerIdentity";
import ApiException from "../services/exception/apiException";
import { ApiConstants } from "../constants/apiConstants";
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
            return Promise.reject(new ApiException("Invalid X-API-Key was used", 401));
        }
        if (apiKey) {
            requestOptions.headers[ApiConstants.API_KEY] = apiKey;
        }
        else {
            var authString = config.username + ":" + config.password;
            var authStringEnc = Buffer.from(authString, "utf8").toString("base64");
            requestOptions.headers.Authorization = "Basic " + authStringEnc;
        }
        requestOptions.headers[ApiConstants.CONTENT_TYPE] = ApiConstants.APPLICATION_JSON_TYPE;
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
        var url = new URL(endpoint);
        requestOptions.hostname = url.hostname;
        requestOptions.protocol = url.protocol;
        requestOptions.port = url.port;
        requestOptions.path = url.pathname;
        if (requestOptions && requestOptions.idempotencyKey) {
            requestOptions.headers[ApiConstants.IDEMPOTENCY_KEY] = requestOptions.idempotencyKey;
            delete requestOptions.idempotencyKey;
        }
        if (this.proxy && this.proxy.host) {
            var _a = this.proxy, host = _a.host, port = _a.port, options = __rest(_a, ["host", "port"]);
            requestOptions.agent = new HttpsProxyAgent(__assign({ host: host, port: port || 443 }, options));
        }
        else {
            requestOptions.agent = new Agent(this.agentOptions);
        }
        requestOptions.headers["Cache-Control"] = "no-cache";
        requestOptions.method = ApiConstants.METHOD_POST;
        requestOptions.headers[ApiConstants.ACCEPT_CHARSET] = HttpURLConnectionClient.CHARSET;
        requestOptions.headers[ApiConstants.USER_AGENT] = applicationName + " " + Client.LIB_NAME + "/" + Client.LIB_VERSION;
        return httpsRequest(requestOptions);
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
                var getException = function (responseBody) { return new HttpClientException({
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
                                exception = new HttpClientException({
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
            connectionRequest.on("error", function (e) { return reject(new ApiException(e.message)); });
            connectionRequest.write(Buffer.from(json));
            connectionRequest.end();
        });
    };
    HttpURLConnectionClient.prototype.installCertificateVerifier = function (terminalCertificatePath) {
        try {
            var certificateInput = fs.readFileSync(terminalCertificatePath);
            this.agentOptions = {
                ca: certificateInput,
                checkServerIdentity: checkServerIdentity,
            };
        }
        catch (e) {
            return Promise.reject(new HttpClientException({ message: "Error loading certificate from path: " + e.message }));
        }
    };
    HttpURLConnectionClient.CHARSET = "utf-8";
    return HttpURLConnectionClient;
}());
export default HttpURLConnectionClient;
//# sourceMappingURL=httpURLConnectionClient.js.map