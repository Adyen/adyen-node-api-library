var LoyaltyAccountReq = (function () {
    function LoyaltyAccountReq() {
    }
    LoyaltyAccountReq.getAttributeTypeMap = function () {
        return LoyaltyAccountReq.attributeTypeMap;
    };
    LoyaltyAccountReq.discriminator = undefined;
    LoyaltyAccountReq.attributeTypeMap = [
        {
            "name": "cardAcquisitionReference",
            "baseName": "CardAcquisitionReference",
            "type": "TransactionIdentification"
        },
        {
            "name": "loyaltyAccountID",
            "baseName": "LoyaltyAccountID",
            "type": "LoyaltyAccountId"
        }
    ];
    return LoyaltyAccountReq;
}());
export { LoyaltyAccountReq };
//# sourceMappingURL=loyaltyAccountReq.js.map