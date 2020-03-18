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
var getJsonResponse_1 = __importDefault(require("../helpers/getJsonResponse"));
var service_1 = __importDefault(require("../service"));
var adjustAuthorisation_1 = __importDefault(require("./resource/modification/adjustAuthorisation"));
var cancel_1 = __importDefault(require("./resource/modification/cancel"));
var cancelOrRefund_1 = __importDefault(require("./resource/modification/cancelOrRefund"));
var capture_1 = __importDefault(require("./resource/modification/capture"));
var refund_1 = __importDefault(require("./resource/modification/refund"));
var technicalCancel_1 = __importDefault(require("./resource/modification/technicalCancel"));
var setApplicationInfo_1 = __importDefault(require("../helpers/setApplicationInfo"));
var Modification = /** @class */ (function (_super) {
    __extends(Modification, _super);
    function Modification(client) {
        var _this = _super.call(this, client) || this;
        _this._capture = new capture_1.default(_this);
        _this._cancelOrRefund = new cancelOrRefund_1.default(_this);
        _this._cancel = new cancel_1.default(_this);
        _this._refund = new refund_1.default(_this);
        _this._adjustAuthorisation = new adjustAuthorisation_1.default(_this);
        _this._technicalCancel = new technicalCancel_1.default(_this);
        return _this;
    }
    Modification.prototype.capture = function (captureRequest, requestOptions) {
        return getJsonResponse_1.default(this._capture, setApplicationInfo_1.default(captureRequest), requestOptions);
    };
    Modification.prototype.cancelOrRefund = function (cancelOrRefundRequest, requestOptions) {
        return getJsonResponse_1.default(this._cancelOrRefund, setApplicationInfo_1.default(cancelOrRefundRequest), requestOptions);
    };
    Modification.prototype.refund = function (refundRequest, requestOptions) {
        return getJsonResponse_1.default(this._refund, setApplicationInfo_1.default(refundRequest), requestOptions);
    };
    Modification.prototype.cancel = function (cancelRequest, requestOptions) {
        return getJsonResponse_1.default(this._cancel, setApplicationInfo_1.default(cancelRequest), requestOptions);
    };
    Modification.prototype.technicalCancel = function (technicalCancelRequest, requestOptions) {
        return getJsonResponse_1.default(this._technicalCancel, setApplicationInfo_1.default(technicalCancelRequest), requestOptions);
    };
    Modification.prototype.adjustAuthorisation = function (adjustAuthorisationRequest, requestOptions) {
        return getJsonResponse_1.default(this._adjustAuthorisation, setApplicationInfo_1.default(adjustAuthorisationRequest), requestOptions);
    };
    return Modification;
}(service_1.default));
exports.default = Modification;
//# sourceMappingURL=modification.js.map