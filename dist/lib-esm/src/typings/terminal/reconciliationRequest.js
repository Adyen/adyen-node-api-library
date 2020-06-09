var ReconciliationRequest = (function () {
    function ReconciliationRequest() {
    }
    ReconciliationRequest.getAttributeTypeMap = function () {
        return ReconciliationRequest.attributeTypeMap;
    };
    ReconciliationRequest.discriminator = undefined;
    ReconciliationRequest.attributeTypeMap = [
        {
            "name": "acquirerID",
            "baseName": "AcquirerID",
            "type": "Array<string>"
        },
        {
            "name": "pOIReconciliationID",
            "baseName": "POIReconciliationID",
            "type": "string"
        },
        {
            "name": "reconciliationType",
            "baseName": "ReconciliationType",
            "type": "ReconciliationType"
        }
    ];
    return ReconciliationRequest;
}());
export { ReconciliationRequest };
//# sourceMappingURL=reconciliationRequest.js.map