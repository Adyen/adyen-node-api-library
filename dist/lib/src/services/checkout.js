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
var apiKeyAuthenticatedService_1 = __importDefault(require("../apiKeyAuthenticatedService"));
var getJsonResponse_1 = __importDefault(require("../helpers/getJsonResponse"));
var paymentMethods_1 = __importDefault(require("./resource/checkout/paymentMethods"));
var payments_1 = __importDefault(require("./resource/checkout/payments"));
var paymentsDetails_1 = __importDefault(require("./resource/checkout/paymentsDetails"));
var paymentSession_1 = __importDefault(require("./resource/checkout/paymentSession"));
var paymentsResult_1 = __importDefault(require("./resource/checkout/paymentsResult"));
var paymentLinks_1 = __importDefault(require("./resource/checkout/paymentLinks"));
var setApplicationInfo_1 = __importDefault(require("../helpers/setApplicationInfo"));
var Checkout = /** @class */ (function (_super) {
    __extends(Checkout, _super);
    function Checkout(client) {
        var _this = _super.call(this, client) || this;
        _this._payments = new payments_1.default(_this);
        _this._paymentMethods = new paymentMethods_1.default(_this);
        _this._paymentsDetails = new paymentsDetails_1.default(_this);
        _this._paymentSession = new paymentSession_1.default(_this);
        _this._paymentsResult = new paymentsResult_1.default(_this);
        _this._paymentLinks = new paymentLinks_1.default(_this);
        return _this;
    }
    Checkout.prototype.payments = function (paymentsRequest, requestOptions) {
        return getJsonResponse_1.default(this._payments, setApplicationInfo_1.default(paymentsRequest), requestOptions);
    };
    Checkout.prototype.paymentMethods = function (paymentMethodsRequest) {
        return getJsonResponse_1.default(this._paymentMethods, paymentMethodsRequest);
    };
    Checkout.prototype.paymentLinks = function (paymentLinkRequest) {
        return getJsonResponse_1.default(this._paymentLinks, paymentLinkRequest);
    };
    Checkout.prototype.paymentsDetails = function (paymentsDetailsRequest, requestOptions) {
        return getJsonResponse_1.default(this._paymentsDetails, paymentsDetailsRequest, requestOptions);
    };
    Checkout.prototype.paymentSession = function (paymentSessionRequest, requestOptions) {
        return getJsonResponse_1.default(this._paymentSession, paymentSessionRequest, requestOptions);
    };
    Checkout.prototype.paymentResult = function (paymentResultRequest) {
        return getJsonResponse_1.default(this._paymentsResult, paymentResultRequest);
    };
    return Checkout;
}(apiKeyAuthenticatedService_1.default));
exports.default = Checkout;
//# sourceMappingURL=checkout.js.map