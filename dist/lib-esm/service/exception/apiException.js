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
var ApiException = /** @class */ (function () {
    function ApiException(message, statusCode) {
        this._name = "ApiException";
        this._message = message;
        this._statusCode = statusCode;
    }
    Object.defineProperty(ApiException.prototype, "error", {
        get: function () {
            return this._error;
        },
        set: function (error) {
            this._error = error;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiException.prototype, "statusCode", {
        get: function () {
            return this._statusCode;
        },
        set: function (statusCode) {
            this._statusCode = statusCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiException.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiException.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return ApiException;
}());
export default ApiException;
//# sourceMappingURL=apiException.js.map