var OriginalPOITransaction = (function () {
    function OriginalPOITransaction() {
    }
    OriginalPOITransaction.getAttributeTypeMap = function () {
        return OriginalPOITransaction.attributeTypeMap;
    };
    OriginalPOITransaction.discriminator = undefined;
    OriginalPOITransaction.attributeTypeMap = [
        {
            "name": "acquirerID",
            "baseName": "AcquirerID",
            "type": "string"
        },
        {
            "name": "approvalCode",
            "baseName": "ApprovalCode",
            "type": "string"
        },
        {
            "name": "customerLanguage",
            "baseName": "CustomerLanguage",
            "type": "string"
        },
        {
            "name": "hostTransactionID",
            "baseName": "HostTransactionID",
            "type": "TransactionIdentification"
        },
        {
            "name": "pOIID",
            "baseName": "POIID",
            "type": "string"
        },
        {
            "name": "pOITransactionID",
            "baseName": "POITransactionID",
            "type": "TransactionIdentification"
        },
        {
            "name": "reuseCardDataFlag",
            "baseName": "ReuseCardDataFlag",
            "type": "boolean"
        },
        {
            "name": "saleID",
            "baseName": "SaleID",
            "type": "string"
        }
    ];
    return OriginalPOITransaction;
}());
export { OriginalPOITransaction };
//# sourceMappingURL=originalPOITransaction.js.map