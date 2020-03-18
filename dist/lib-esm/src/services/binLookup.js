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
import ApiKeyAuthenticatedService from "../apiKeyAuthenticatedService";
import GetCostEstimate from "./resource/binLookup/getCostEstimate";
import Get3dsAvailability from "./resource/binLookup/get3dsAvailability";
import getJsonResponse from "../helpers/getJsonResponse";
var BinLookup = /** @class */ (function (_super) {
    __extends(BinLookup, _super);
    function BinLookup(client) {
        var _this = _super.call(this, client) || this;
        _this._get3dsAvailability = new Get3dsAvailability(_this);
        _this._getCostEstimate = new GetCostEstimate(_this);
        return _this;
    }
    BinLookup.prototype.get3dsAvailability = function (request) {
        return getJsonResponse(this._get3dsAvailability, request);
    };
    BinLookup.prototype.getCostEstimate = function (request) {
        return getJsonResponse(this._getCostEstimate, request);
    };
    return BinLookup;
}(ApiKeyAuthenticatedService));
export default BinLookup;
//# sourceMappingURL=binLookup.js.map