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
var Service = /** @class */ (function () {
    function Service(client) {
        this._apiKeyRequired = false;
        this._client = client;
    }
    Object.defineProperty(Service.prototype, "client", {
        get: function () {
            return this._client;
        },
        set: function (client) {
            this._client = client;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Service.prototype, "apiKeyRequired", {
        get: function () {
            return this._apiKeyRequired;
        },
        set: function (apiKeyRequired) {
            this._apiKeyRequired = apiKeyRequired;
        },
        enumerable: true,
        configurable: true
    });
    return Service;
}());
exports.default = Service;
//# sourceMappingURL=service.js.map