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
import Service from "../service";
import DeclineThirdParty from "./resource/payout/declineThirdParty";
import StoreDetail from "./resource/payout/storeDetail";
import SubmitThirdParty from "./resource/payout/submitThirdParty";
import ConfirmThirdParty from "./resource/payout/confirmThirdParty";
import PayoutResource from "./resource/payout/payout";
import StoreDetailAndSubmitThirdParty from "./resource/payout/storeDetailAndSubmitThirdParty";
import getJsonResponse from "../helpers/getJsonResponse";
var Payout = /** @class */ (function (_super) {
    __extends(Payout, _super);
    function Payout(client) {
        var _this = _super.call(this, client) || this;
        _this._storeDetailAndSubmitThirdParty = new StoreDetailAndSubmitThirdParty(_this);
        _this._confirmThirdParty = new ConfirmThirdParty(_this);
        _this._declineThirdParty = new DeclineThirdParty(_this);
        _this._storeDetail = new StoreDetail(_this);
        _this._submitThirdParty = new SubmitThirdParty(_this);
        _this._payout = new PayoutResource(_this);
        return _this;
    }
    Payout.prototype.storeDetailAndSubmitThirdParty = function (request) {
        return getJsonResponse(this._storeDetailAndSubmitThirdParty, request);
    };
    Payout.prototype.confirmThirdParty = function (request) {
        return getJsonResponse(this._confirmThirdParty, request);
    };
    Payout.prototype.declineThirdParty = function (request) {
        return getJsonResponse(this._declineThirdParty, request);
    };
    Payout.prototype.storeDetail = function (request) {
        return getJsonResponse(this._storeDetail, request);
    };
    Payout.prototype.submitThirdparty = function (request) {
        return getJsonResponse(this._submitThirdParty, request);
    };
    Payout.prototype.payout = function (request) {
        return getJsonResponse(this._payout, request);
    };
    return Payout;
}(Service));
export default Payout;
//# sourceMappingURL=payout.js.map