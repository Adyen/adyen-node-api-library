var PaymentRequest = (function () {
    function PaymentRequest() {
    }
    PaymentRequest.getAttributeTypeMap = function () {
        return PaymentRequest.attributeTypeMap;
    };
    PaymentRequest.discriminator = undefined;
    PaymentRequest.attributeTypeMap = [
        {
            "name": "loyaltyData",
            "baseName": "LoyaltyData",
            "type": "Array<LoyaltyData>"
        },
        {
            "name": "paymentData",
            "baseName": "PaymentData",
            "type": "PaymentData"
        },
        {
            "name": "paymentTransaction",
            "baseName": "PaymentTransaction",
            "type": "PaymentTransaction"
        },
        {
            "name": "saleData",
            "baseName": "SaleData",
            "type": "SaleData"
        }
    ];
    return PaymentRequest;
}());
export { PaymentRequest };
//# sourceMappingURL=paymentRequest.js.map