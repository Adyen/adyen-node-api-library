var POIData = (function () {
    function POIData() {
    }
    POIData.getAttributeTypeMap = function () {
        return POIData.attributeTypeMap;
    };
    POIData.discriminator = undefined;
    POIData.attributeTypeMap = [
        {
            "name": "pOIReconciliationID",
            "baseName": "POIReconciliationID",
            "type": "string"
        },
        {
            "name": "pOITransactionID",
            "baseName": "POITransactionID",
            "type": "TransactionIdentification"
        }
    ];
    return POIData;
}());
export { POIData };
//# sourceMappingURL=pOIData.js.map