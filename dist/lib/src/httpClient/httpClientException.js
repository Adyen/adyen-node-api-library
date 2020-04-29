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
Object.defineProperty(exports, "__esModule", { value: true });
var HttpClientException = /** @class */ (function () {
    function HttpClientException(message, statusCode, errorCode, responseHeaders, responseBody) {
        this.statusCode = 500;
        this.name = "HttpClientException";
        this.message = message;
        if (errorCode)
            this.errorCode = errorCode;
        if (statusCode)
            this.statusCode = statusCode;
        if (responseHeaders)
            this.responseHeaders = responseHeaders;
        if (responseBody)
            this.responseBody = responseBody;
    }
    return HttpClientException;
}());
exports.default = HttpClientException;
//# sourceMappingURL=httpClientException.js.map