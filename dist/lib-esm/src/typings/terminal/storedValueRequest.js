var StoredValueRequest = (function () {
    function StoredValueRequest() {
    }
    StoredValueRequest.getAttributeTypeMap = function () {
        return StoredValueRequest.attributeTypeMap;
    };
    StoredValueRequest.discriminator = undefined;
    StoredValueRequest.attributeTypeMap = [
        {
            "name": "customerLanguage",
            "baseName": "CustomerLanguage",
            "type": "string"
        },
        {
            "name": "saleData",
            "baseName": "SaleData",
            "type": "SaleData"
        },
        {
            "name": "storedValueData",
            "baseName": "StoredValueData",
            "type": "Array<StoredValueData>"
        }
    ];
    return StoredValueRequest;
}());
export { StoredValueRequest };
//# sourceMappingURL=storedValueRequest.js.map