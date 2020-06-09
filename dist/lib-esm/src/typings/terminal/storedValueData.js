var StoredValueData = (function () {
    function StoredValueData() {
    }
    StoredValueData.getAttributeTypeMap = function () {
        return StoredValueData.attributeTypeMap;
    };
    StoredValueData.discriminator = undefined;
    StoredValueData.attributeTypeMap = [
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
            "name": "itemAmount",
            "baseName": "ItemAmount",
            "type": "number"
        },
        {
            "name": "originalPOITransaction",
            "baseName": "OriginalPOITransaction",
            "type": "OriginalPOITransaction"
        },
        {
            "name": "productCode",
            "baseName": "ProductCode",
            "type": "string"
        },
        {
            "name": "storedValueAccountID",
            "baseName": "StoredValueAccountID",
            "type": "StoredValueAccountId"
        },
        {
            "name": "storedValueProvider",
            "baseName": "StoredValueProvider",
            "type": "string"
        },
        {
            "name": "storedValueTransactionType",
            "baseName": "StoredValueTransactionType",
            "type": "StoredValueTransactionType"
        }
    ];
    return StoredValueData;
}());
export { StoredValueData };
//# sourceMappingURL=storedValueData.js.map