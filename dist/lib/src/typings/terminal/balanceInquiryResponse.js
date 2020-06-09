"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceInquiryResponse = void 0;
var BalanceInquiryResponse = (function () {
    function BalanceInquiryResponse() {
    }
    BalanceInquiryResponse.getAttributeTypeMap = function () {
        return BalanceInquiryResponse.attributeTypeMap;
    };
    BalanceInquiryResponse.discriminator = undefined;
    BalanceInquiryResponse.attributeTypeMap = [
        {
            "name": "loyaltyAccountStatus",
            "baseName": "LoyaltyAccountStatus",
            "type": "LoyaltyAccountStatus"
        },
        {
            "name": "paymentAccountStatus",
            "baseName": "PaymentAccountStatus",
            "type": "PaymentAccountStatus"
        },
        {
            "name": "response",
            "baseName": "Response",
            "type": "Response"
        }
    ];
    return BalanceInquiryResponse;
}());
exports.BalanceInquiryResponse = BalanceInquiryResponse;
//# sourceMappingURL=balanceInquiryResponse.js.map