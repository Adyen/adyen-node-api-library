"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("crypto");
var apiConstants_1 = require("../constants/apiConstants");
var HmacValidator = /** @class */ (function () {
    function HmacValidator() {
    }
    HmacValidator.prototype.calculateHmac = function (data, key) {
        var dataString = typeof data !== "string" ? this.getDataToSign(data) : data;
        var rawKey = Buffer.from(key, "hex");
        return crypto_1.createHmac(HmacValidator.HMAC_SHA256_ALGORITHM, rawKey).update(dataString, "utf8").digest("base64");
    };
    HmacValidator.prototype.validateHMAC = function (notificationRequestItem, key) {
        var expectedSign = this.calculateHmac(notificationRequestItem, key);
        var merchantSign = notificationRequestItem.additionalData[apiConstants_1.ApiConstants.HMAC_SIGNATURE];
        return expectedSign === merchantSign;
    };
    HmacValidator.prototype.isNotificationRequestItem = function (item) {
        return !Object.values(item).every(function (value) { return typeof value === "string"; });
    };
    HmacValidator.prototype.getDataToSign = function (notificationRequestItem) {
        if (this.isNotificationRequestItem(notificationRequestItem)) {
            var signedDataList = [];
            signedDataList.push(notificationRequestItem.pspReference);
            signedDataList.push(notificationRequestItem.originalReference);
            signedDataList.push(notificationRequestItem.merchantAccountCode);
            signedDataList.push(notificationRequestItem.merchantReference);
            signedDataList.push(notificationRequestItem.amount.value);
            signedDataList.push(notificationRequestItem.amount.currency);
            signedDataList.push(notificationRequestItem.eventCode);
            signedDataList.push(notificationRequestItem.success);
            return signedDataList.join(HmacValidator.DATA_SEPARATOR);
        }
        else {
            var keys_1 = [];
            var values_1 = [];
            var replacer_1 = function (str) {
                return str.replace(/\\/g, "\\\\").replace(/:/g, "\\:");
            };
            Object.entries(notificationRequestItem).sort().forEach(function (_a) {
                var key = _a[0], value = _a[1];
                keys_1.push(replacer_1(key));
                values_1.push(replacer_1(value));
            });
            return __spreadArrays(keys_1, values_1).join(HmacValidator.DATA_SEPARATOR);
        }
    };
    HmacValidator.HMAC_SHA256_ALGORITHM = "sha256";
    HmacValidator.DATA_SEPARATOR = ":";
    return HmacValidator;
}());
exports.default = HmacValidator;
//# sourceMappingURL=hmacValidator.js.map