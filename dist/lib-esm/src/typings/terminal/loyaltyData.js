var LoyaltyData = (function () {
    function LoyaltyData() {
    }
    LoyaltyData.getAttributeTypeMap = function () {
        return LoyaltyData.attributeTypeMap;
    };
    LoyaltyData.discriminator = undefined;
    LoyaltyData.attributeTypeMap = [
        {
            "name": "cardAcquisitionReference",
            "baseName": "CardAcquisitionReference",
            "type": "TransactionIdentification"
        },
        {
            "name": "loyaltyAccountID",
            "baseName": "LoyaltyAccountID",
            "type": "LoyaltyAccountId"
        },
        {
            "name": "loyaltyAmount",
            "baseName": "LoyaltyAmount",
            "type": "LoyaltyAmount"
        }
    ];
    return LoyaltyData;
}());
export { LoyaltyData };
//# sourceMappingURL=loyaltyData.js.map