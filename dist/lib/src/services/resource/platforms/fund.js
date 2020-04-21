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
var client_1 = __importDefault(require("../../../client"));
var resource_1 = __importDefault(require("../../resource"));
var Endpoints;
(function (Endpoints) {
    Endpoints["accountHolderBalance"] = "/accountHolderBalance";
    Endpoints["accountHolderTransactionList"] = "/accountHolderTransactionList";
    Endpoints["payoutAccountHolder"] = "/payoutAccountHolder";
    Endpoints["transferFunds"] = "/transferFunds";
    Endpoints["refundFundsTransfer"] = "/refundFundsTransfer";
    Endpoints["setupBeneficiary"] = "/setupBeneficiary";
    Endpoints["refundNotPaidOutTransfers"] = "/refundNotPaidOutTransfers";
})(Endpoints || (Endpoints = {}));
var PlatformsFund = /** @class */ (function (_super) {
    __extends(PlatformsFund, _super);
    function PlatformsFund(service, endpoint) {
        return _super.call(this, service, service.client.config.marketPayEndpoint + "/Fund/" + client_1.default.MARKETPAY_FUND_API_VERSION + "/" + endpoint) || this;
    }
    return PlatformsFund;
}(resource_1.default));
exports.default = PlatformsFund;
//# sourceMappingURL=fund.js.map