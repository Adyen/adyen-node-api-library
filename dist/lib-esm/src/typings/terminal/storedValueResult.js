var StoredValueResult = (function () {
    function StoredValueResult() {
    }
    StoredValueResult.getAttributeTypeMap = function () {
        return StoredValueResult.attributeTypeMap;
    };
    StoredValueResult.discriminator = undefined;
    StoredValueResult.attributeTypeMap = [
        {
            "name": "currency",
            "baseName": "Currency",
            "type": "string"
        },
        {
            "name": "eanUpc",
            "baseName": "EanUpc",
            "type": "string"
        },
        {
            "name": "hostTransactionID",
            "baseName": "HostTransactionID",
            "type": "TransactionIdentification"
        },
        {
            "name": "itemAmount",
            "baseName": "ItemAmount",
            "type": "number"
        },
        {
            "name": "productCode",
            "baseName": "ProductCode",
            "type": "string"
        },
        {
            "name": "storedValueAccountStatus",
            "baseName": "StoredValueAccountStatus",
            "type": "StoredValueAccountStatus"
        },
        {
            "name": "storedValueTransactionType",
            "baseName": "StoredValueTransactionType",
            "type": "StoredValueTransactionType"
        }
    ];
    return StoredValueResult;
}());
export { StoredValueResult };
//# sourceMappingURL=storedValueResult.js.map