var LoyaltyAcquirerData = (function () {
    function LoyaltyAcquirerData() {
    }
    LoyaltyAcquirerData.getAttributeTypeMap = function () {
        return LoyaltyAcquirerData.attributeTypeMap;
    };
    LoyaltyAcquirerData.discriminator = undefined;
    LoyaltyAcquirerData.attributeTypeMap = [
        {
            "name": "approvalCode",
            "baseName": "ApprovalCode",
            "type": "string"
        },
        {
            "name": "hostReconciliationID",
            "baseName": "HostReconciliationID",
            "type": "string"
        },
        {
            "name": "loyaltyAcquirerID",
            "baseName": "LoyaltyAcquirerID",
            "type": "string"
        },
        {
            "name": "loyaltyTransactionID",
            "baseName": "LoyaltyTransactionID",
            "type": "TransactionIdentification"
        }
    ];
    return LoyaltyAcquirerData;
}());
export { LoyaltyAcquirerData };
//# sourceMappingURL=loyaltyAcquirerData.js.map