var PaymentTotals = (function () {
    function PaymentTotals() {
    }
    PaymentTotals.getAttributeTypeMap = function () {
        return PaymentTotals.attributeTypeMap;
    };
    PaymentTotals.discriminator = undefined;
    PaymentTotals.attributeTypeMap = [
        {
            "name": "transactionAmount",
            "baseName": "TransactionAmount",
            "type": "number"
        },
        {
            "name": "transactionCount",
            "baseName": "TransactionCount",
            "type": "number"
        },
        {
            "name": "transactionType",
            "baseName": "TransactionType",
            "type": "TransactionType"
        }
    ];
    return PaymentTotals;
}());
export { PaymentTotals };
//# sourceMappingURL=paymentTotals.js.map