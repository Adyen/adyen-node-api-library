var TransactionToPerform = (function () {
    function TransactionToPerform() {
    }
    TransactionToPerform.getAttributeTypeMap = function () {
        return TransactionToPerform.attributeTypeMap;
    };
    TransactionToPerform.discriminator = undefined;
    TransactionToPerform.attributeTypeMap = [
        {
            "name": "loyaltyRequest",
            "baseName": "LoyaltyRequest",
            "type": "LoyaltyRequest"
        },
        {
            "name": "paymentRequest",
            "baseName": "PaymentRequest",
            "type": "PaymentRequest"
        },
        {
            "name": "reversalRequest",
            "baseName": "ReversalRequest",
            "type": "ReversalRequest"
        }
    ];
    return TransactionToPerform;
}());
export { TransactionToPerform };
//# sourceMappingURL=transactionToPerform.js.map