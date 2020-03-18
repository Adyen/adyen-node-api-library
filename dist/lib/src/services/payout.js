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
var service_1 = __importDefault(require("../service"));
var declineThirdParty_1 = __importDefault(require("./resource/payout/declineThirdParty"));
var storeDetail_1 = __importDefault(require("./resource/payout/storeDetail"));
var submitThirdParty_1 = __importDefault(require("./resource/payout/submitThirdParty"));
var confirmThirdParty_1 = __importDefault(require("./resource/payout/confirmThirdParty"));
var payout_1 = __importDefault(require("./resource/payout/payout"));
var storeDetailAndSubmitThirdParty_1 = __importDefault(require("./resource/payout/storeDetailAndSubmitThirdParty"));
var getJsonResponse_1 = __importDefault(require("../helpers/getJsonResponse"));
var Payout = /** @class */ (function (_super) {
    __extends(Payout, _super);
    function Payout(client) {
        var _this = _super.call(this, client) || this;
        _this._storeDetailAndSubmitThirdParty = new storeDetailAndSubmitThirdParty_1.default(_this);
        _this._confirmThirdParty = new confirmThirdParty_1.default(_this);
        _this._declineThirdParty = new declineThirdParty_1.default(_this);
        _this._storeDetail = new storeDetail_1.default(_this);
        _this._submitThirdParty = new submitThirdParty_1.default(_this);
        _this._payout = new payout_1.default(_this);
        return _this;
    }
    Payout.prototype.storeDetailAndSubmitThirdParty = function (request) {
        return getJsonResponse_1.default(this._storeDetailAndSubmitThirdParty, request);
    };
    Payout.prototype.confirmThirdParty = function (request) {
        return getJsonResponse_1.default(this._confirmThirdParty, request);
    };
    Payout.prototype.declineThirdParty = function (request) {
        return getJsonResponse_1.default(this._declineThirdParty, request);
    };
    Payout.prototype.storeDetail = function (request) {
        return getJsonResponse_1.default(this._storeDetail, request);
    };
    Payout.prototype.submitThirdparty = function (request) {
        return getJsonResponse_1.default(this._submitThirdParty, request);
    };
    Payout.prototype.payout = function (request) {
        return getJsonResponse_1.default(this._payout, request);
    };
    return Payout;
}(service_1.default));
exports.default = Payout;
//# sourceMappingURL=payout.js.map