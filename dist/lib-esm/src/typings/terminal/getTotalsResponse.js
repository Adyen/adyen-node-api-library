var GetTotalsResponse = (function () {
    function GetTotalsResponse() {
    }
    GetTotalsResponse.getAttributeTypeMap = function () {
        return GetTotalsResponse.attributeTypeMap;
    };
    GetTotalsResponse.discriminator = undefined;
    GetTotalsResponse.attributeTypeMap = [
        {
            "name": "pOIReconciliationID",
            "baseName": "POIReconciliationID",
            "type": "string"
        },
        {
            "name": "response",
            "baseName": "Response",
            "type": "Response"
        },
        {
            "name": "transactionTotals",
            "baseName": "TransactionTotals",
            "type": "Array<TransactionTotals>"
        }
    ];
    return GetTotalsResponse;
}());
export { GetTotalsResponse };
//# sourceMappingURL=getTotalsResponse.js.map