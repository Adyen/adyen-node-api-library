var LoyaltyAccount = (function () {
    function LoyaltyAccount() {
    }
    LoyaltyAccount.getAttributeTypeMap = function () {
        return LoyaltyAccount.attributeTypeMap;
    };
    LoyaltyAccount.discriminator = undefined;
    LoyaltyAccount.attributeTypeMap = [
        {
            "name": "loyaltyAccountID",
            "baseName": "LoyaltyAccountID",
            "type": "LoyaltyAccountId"
        },
        {
            "name": "loyaltyBrand",
            "baseName": "LoyaltyBrand",
            "type": "string"
        }
    ];
    return LoyaltyAccount;
}());
export { LoyaltyAccount };
//# sourceMappingURL=loyaltyAccount.js.map