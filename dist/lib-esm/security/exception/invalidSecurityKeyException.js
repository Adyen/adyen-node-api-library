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
var InvalidSecurityKeyException = /** @class */ (function () {
    function InvalidSecurityKeyException(message) {
        this._message = message;
        this._name = "InvalidSecurityKeyException";
    }
    Object.defineProperty(InvalidSecurityKeyException.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InvalidSecurityKeyException.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return InvalidSecurityKeyException;
}());
export default InvalidSecurityKeyException;
//# sourceMappingURL=invalidSecurityKeyException.js.map