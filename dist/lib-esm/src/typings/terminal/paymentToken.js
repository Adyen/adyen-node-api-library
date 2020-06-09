var PaymentToken = (function () {
    function PaymentToken() {
    }
    PaymentToken.getAttributeTypeMap = function () {
        return PaymentToken.attributeTypeMap;
    };
    PaymentToken.discriminator = undefined;
    PaymentToken.attributeTypeMap = [
        {
            "name": "expiryDateTime",
            "baseName": "ExpiryDateTime",
            "type": "{ [key: string]: AnyType; }"
        },
        {
            "name": "tokenRequestedType",
            "baseName": "TokenRequestedType",
            "type": "TokenRequestedType"
        },
        {
            "name": "tokenValue",
            "baseName": "TokenValue",
            "type": "string"
        }
    ];
    return PaymentToken;
}());
export { PaymentToken };
//# sourceMappingURL=paymentToken.js.map