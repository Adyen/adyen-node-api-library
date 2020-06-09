var StoredValueResponse = (function () {
    function StoredValueResponse() {
    }
    StoredValueResponse.getAttributeTypeMap = function () {
        return StoredValueResponse.attributeTypeMap;
    };
    StoredValueResponse.discriminator = undefined;
    StoredValueResponse.attributeTypeMap = [
        {
            "name": "pOIData",
            "baseName": "POIData",
            "type": "POIData"
        },
        {
            "name": "response",
            "baseName": "Response",
            "type": "Response"
        },
        {
            "name": "saleData",
            "baseName": "SaleData",
            "type": "SaleData"
        },
        {
            "name": "storedValueResult",
            "baseName": "StoredValueResult",
            "type": "Array<StoredValueResult>"
        }
    ];
    return StoredValueResponse;
}());
export { StoredValueResponse };
//# sourceMappingURL=storedValueResponse.js.map