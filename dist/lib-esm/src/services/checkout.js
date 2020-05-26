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
import ApiKeyAuthenticatedService from "../apiKeyAuthenticatedService";
import getJsonResponse from "../helpers/getJsonResponse";
import PaymentMethods from "./resource/checkout/paymentMethods";
import Payments from "./resource/checkout/payments";
import PaymentsDetails from "./resource/checkout/paymentsDetails";
import PaymentSession from "./resource/checkout/paymentSession";
import PaymentsResult from "./resource/checkout/paymentsResult";
import PaymentLinks from "./resource/checkout/paymentLinks";
import setApplicationInfo from "../helpers/setApplicationInfo";
var Checkout = (function (_super) {
    __extends(Checkout, _super);
    function Checkout(client) {
        var _this = _super.call(this, client) || this;
        _this._payments = new Payments(_this);
        _this._paymentMethods = new PaymentMethods(_this);
        _this._paymentsDetails = new PaymentsDetails(_this);
        _this._paymentSession = new PaymentSession(_this);
        _this._paymentsResult = new PaymentsResult(_this);
        _this._paymentLinks = new PaymentLinks(_this);
        return _this;
    }
    Checkout.prototype.payments = function (paymentsRequest, requestOptions) {
        return getJsonResponse(this._payments, setApplicationInfo(paymentsRequest), requestOptions);
    };
    Checkout.prototype.paymentMethods = function (paymentMethodsRequest) {
        return getJsonResponse(this._paymentMethods, paymentMethodsRequest);
    };
    Checkout.prototype.paymentLinks = function (paymentLinkRequest) {
        return getJsonResponse(this._paymentLinks, paymentLinkRequest);
    };
    Checkout.prototype.paymentsDetails = function (paymentsDetailsRequest, requestOptions) {
        return getJsonResponse(this._paymentsDetails, paymentsDetailsRequest, requestOptions);
    };
    Checkout.prototype.paymentSession = function (paymentSessionRequest, requestOptions) {
        return getJsonResponse(this._paymentSession, paymentSessionRequest, requestOptions);
    };
    Checkout.prototype.paymentResult = function (paymentResultRequest) {
        return getJsonResponse(this._paymentsResult, paymentResultRequest);
    };
    return Checkout;
}(ApiKeyAuthenticatedService));
export default Checkout;
//# sourceMappingURL=checkout.js.map