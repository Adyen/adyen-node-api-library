var LoyaltyAccountStatus = (function () {
    function LoyaltyAccountStatus() {
    }
    LoyaltyAccountStatus.getAttributeTypeMap = function () {
        return LoyaltyAccountStatus.attributeTypeMap;
    };
    LoyaltyAccountStatus.discriminator = undefined;
    LoyaltyAccountStatus.attributeTypeMap = [
        {
            "name": "currency",
            "baseName": "Currency",
            "type": "string"
        },
        {
            "name": "currentBalance",
            "baseName": "CurrentBalance",
            "type": "number"
        },
        {
            "name": "loyaltyAccount",
            "baseName": "LoyaltyAccount",
            "type": "LoyaltyAccount"
        },
        {
            "name": "loyaltyUnit",
            "baseName": "LoyaltyUnit",
            "type": "LoyaltyAccountStatus.LoyaltyUnitEnum"
        }
    ];
    return LoyaltyAccountStatus;
}());
export { LoyaltyAccountStatus };
(function (LoyaltyAccountStatus) {
    var LoyaltyUnitEnum;
    (function (LoyaltyUnitEnum) {
        LoyaltyUnitEnum[LoyaltyUnitEnum["Monetary"] = 'Monetary'] = "Monetary";
        LoyaltyUnitEnum[LoyaltyUnitEnum["Point"] = 'Point'] = "Point";
    })(LoyaltyUnitEnum = LoyaltyAccountStatus.LoyaltyUnitEnum || (LoyaltyAccountStatus.LoyaltyUnitEnum = {}));
})(LoyaltyAccountStatus || (LoyaltyAccountStatus = {}));
//# sourceMappingURL=loyaltyAccountStatus.js.map