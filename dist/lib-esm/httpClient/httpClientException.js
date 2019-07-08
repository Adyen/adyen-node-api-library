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
var HttpClientException = /** @class */ (function () {
    function HttpClientException(message, code, responseHeaders, responseBody) {
        this._code = 0;
        this._name = "HttpClientException";
        this._message = message;
        this._code = code;
        this._responseHeaders = responseHeaders;
        this._responseBody = responseBody;
    }
    Object.defineProperty(HttpClientException.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpClientException.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpClientException.prototype, "code", {
        get: function () {
            return this._code;
        },
        set: function (value) {
            this._code = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpClientException.prototype, "responseHeaders", {
        get: function () {
            return this._responseHeaders;
        },
        set: function (value) {
            this._responseHeaders = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HttpClientException.prototype, "responseBody", {
        get: function () {
            return this._responseBody;
        },
        set: function (value) {
            this._responseBody = value;
        },
        enumerable: true,
        configurable: true
    });
    return HttpClientException;
}());
export default HttpClientException;
//# sourceMappingURL=httpClientException.js.map