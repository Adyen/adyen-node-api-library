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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getJsonResponse_1 = __importDefault(require("../helpers/getJsonResponse"));
var service_1 = __importDefault(require("../service"));
var disable_1 = __importDefault(require("./resource/recurring/disable"));
var listRecurringDetails_1 = __importDefault(require("./resource/recurring/listRecurringDetails"));
var Recurring = /** @class */ (function (_super) {
    __extends(Recurring, _super);
    function Recurring(client) {
        var _this = _super.call(this, client) || this;
        _this._listRecurringDetails = new listRecurringDetails_1.default(_this);
        _this._disable = new disable_1.default(_this);
        return _this;
    }
    Recurring.prototype.listRecurringDetails = function (request) {
        return getJsonResponse_1.default(this._listRecurringDetails, request);
    };
    Recurring.prototype.disable = function (request) {
        return getJsonResponse_1.default(this._disable, request);
    };
    return Recurring;
}(service_1.default));
exports.default = Recurring;
//# sourceMappingURL=recurring.js.map