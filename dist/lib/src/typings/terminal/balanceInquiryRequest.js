"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceInquiryRequest = void 0;
var BalanceInquiryRequest = (function () {
    function BalanceInquiryRequest() {
    }
    BalanceInquiryRequest.getAttributeTypeMap = function () {
        return BalanceInquiryRequest.attributeTypeMap;
    };
    BalanceInquiryRequest.discriminator = undefined;
    BalanceInquiryRequest.attributeTypeMap = [
        {
            "name": "loyaltyAccountReq",
            "baseName": "LoyaltyAccountReq",
            "type": "LoyaltyAccountReq"
        },
        {
            "name": "paymentAccountReq",
            "baseName": "PaymentAccountReq",
            "type": "PaymentAccountReq"
        }
    ];
    return BalanceInquiryRequest;
}());
exports.BalanceInquiryRequest = BalanceInquiryRequest;
//# sourceMappingURL=balanceInquiryRequest.js.map