var LoyaltyTransaction = (function () {
    function LoyaltyTransaction() {
    }
    LoyaltyTransaction.getAttributeTypeMap = function () {
        return LoyaltyTransaction.attributeTypeMap;
    };
    LoyaltyTransaction.discriminator = undefined;
    LoyaltyTransaction.attributeTypeMap = [
        {
            "name": "currency",
            "baseName": "Currency",
            "type": "string"
        },
        {
            "name": "loyaltyTransactionType",
            "baseName": "LoyaltyTransactionType",
            "type": "LoyaltyTransactionType"
        },
        {
            "name": "originalPOITransaction",
            "baseName": "OriginalPOITransaction",
            "type": "OriginalPOITransaction"
        },
        {
            "name": "saleItem",
            "baseName": "SaleItem",
            "type": "Array<SaleItem>"
        },
        {
            "name": "totalAmount",
            "baseName": "TotalAmount",
            "type": "number"
        },
        {
            "name": "transactionConditions",
            "baseName": "TransactionConditions",
            "type": "TransactionConditions"
        }
    ];
    return LoyaltyTransaction;
}());
export { LoyaltyTransaction };
//# sourceMappingURL=loyaltyTransaction.js.map