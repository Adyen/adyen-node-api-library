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
export { BalanceInquiryRequest };
//# sourceMappingURL=balanceInquiryRequest.js.map