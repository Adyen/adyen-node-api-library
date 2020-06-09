var LoyaltyTotals = (function () {
    function LoyaltyTotals() {
    }
    LoyaltyTotals.getAttributeTypeMap = function () {
        return LoyaltyTotals.attributeTypeMap;
    };
    LoyaltyTotals.discriminator = undefined;
    LoyaltyTotals.attributeTypeMap = [
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
    return LoyaltyTotals;
}());
export { LoyaltyTotals };
//# sourceMappingURL=loyaltyTotals.js.map