"use strict";
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
var apiKeyAuthenticatedService_1 = __importDefault(require("../apiKeyAuthenticatedService"));
var getCostEstimate_1 = __importDefault(require("./resource/binLookup/getCostEstimate"));
var get3dsAvailability_1 = __importDefault(require("./resource/binLookup/get3dsAvailability"));
var getJsonResponse_1 = __importDefault(require("../helpers/getJsonResponse"));
var BinLookup = /** @class */ (function (_super) {
    __extends(BinLookup, _super);
    function BinLookup(client) {
        var _this = _super.call(this, client) || this;
        _this._get3dsAvailability = new get3dsAvailability_1.default(_this);
        _this._getCostEstimate = new getCostEstimate_1.default(_this);
        return _this;
    }
    BinLookup.prototype.get3dsAvailability = function (request) {
        return getJsonResponse_1.default(this._get3dsAvailability, request);
    };
    BinLookup.prototype.getCostEstimate = function (request) {
        return getJsonResponse_1.default(this._getCostEstimate, request);
    };
    return BinLookup;
}(apiKeyAuthenticatedService_1.default));
exports.default = BinLookup;
//# sourceMappingURL=binLookup.js.map