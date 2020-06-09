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
export { BalanceInquiryResponse };
//# sourceMappingURL=balanceInquiryResponse.js.map