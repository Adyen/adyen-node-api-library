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
    function HttpClientException(props) {
        this.statusCode = 500;
        this.name = "HttpClientException";
        this.message = props.message;
        if (props.responseHeaders)
            this.responseHeaders = props.responseHeaders;
        if (props.responseBody)
            this.responseBody = props.responseBody;
        if (props.errorCode)
            this.errorCode = props.errorCode;
        if (props.statusCode)
            this.statusCode = props.statusCode;
    }
    return HttpClientException;
}());
exports.default = HttpClientException;
//# sourceMappingURL=httpClientException.js.map