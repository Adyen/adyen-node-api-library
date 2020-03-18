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
import getJsonResponse from "../helpers/getJsonResponse";
import Service from "../service";
import AdjustAuthorisation from "./resource/modification/adjustAuthorisation";
import Cancel from "./resource/modification/cancel";
import CancelOrRefund from "./resource/modification/cancelOrRefund";
import Capture from "./resource/modification/capture";
import Refund from "./resource/modification/refund";
import TechnicalCancel from "./resource/modification/technicalCancel";
import setApplicationInfo from "../helpers/setApplicationInfo";
var Modification = /** @class */ (function (_super) {
    __extends(Modification, _super);
    function Modification(client) {
        var _this = _super.call(this, client) || this;
        _this._capture = new Capture(_this);
        _this._cancelOrRefund = new CancelOrRefund(_this);
        _this._cancel = new Cancel(_this);
        _this._refund = new Refund(_this);
        _this._adjustAuthorisation = new AdjustAuthorisation(_this);
        _this._technicalCancel = new TechnicalCancel(_this);
        return _this;
    }
    Modification.prototype.capture = function (captureRequest, requestOptions) {
        return getJsonResponse(this._capture, setApplicationInfo(captureRequest), requestOptions);
    };
    Modification.prototype.cancelOrRefund = function (cancelOrRefundRequest, requestOptions) {
        return getJsonResponse(this._cancelOrRefund, setApplicationInfo(cancelOrRefundRequest), requestOptions);
    };
    Modification.prototype.refund = function (refundRequest, requestOptions) {
        return getJsonResponse(this._refund, setApplicationInfo(refundRequest), requestOptions);
    };
    Modification.prototype.cancel = function (cancelRequest, requestOptions) {
        return getJsonResponse(this._cancel, setApplicationInfo(cancelRequest), requestOptions);
    };
    Modification.prototype.technicalCancel = function (technicalCancelRequest, requestOptions) {
        return getJsonResponse(this._technicalCancel, setApplicationInfo(technicalCancelRequest), requestOptions);
    };
    Modification.prototype.adjustAuthorisation = function (adjustAuthorisationRequest, requestOptions) {
        return getJsonResponse(this._adjustAuthorisation, setApplicationInfo(adjustAuthorisationRequest), requestOptions);
    };
    return Modification;
}(Service));
export default Modification;
//# sourceMappingURL=modification.js.map