var LoyaltyAmount = (function () {
    function LoyaltyAmount() {
    }
    LoyaltyAmount.getAttributeTypeMap = function () {
        return LoyaltyAmount.attributeTypeMap;
    };
    LoyaltyAmount.discriminator = undefined;
    LoyaltyAmount.attributeTypeMap = [
        {
            "name": "currency",
            "baseName": "Currency",
            "type": "string"
        },
        {
            "name": "loyaltyUnit",
            "baseName": "LoyaltyUnit",
            "type": "LoyaltyAmount.LoyaltyUnitEnum"
        },
        {
            "name": "value",
            "baseName": "Value",
            "type": "number"
        }
    ];
    return LoyaltyAmount;
}());
export { LoyaltyAmount };
(function (LoyaltyAmount) {
    var LoyaltyUnitEnum;
    (function (LoyaltyUnitEnum) {
        LoyaltyUnitEnum[LoyaltyUnitEnum["Monetary"] = 'Monetary'] = "Monetary";
        LoyaltyUnitEnum[LoyaltyUnitEnum["Point"] = 'Point'] = "Point";
    })(LoyaltyUnitEnum = LoyaltyAmount.LoyaltyUnitEnum || (LoyaltyAmount.LoyaltyUnitEnum = {}));
})(LoyaltyAmount || (LoyaltyAmount = {}));
//# sourceMappingURL=loyaltyAmount.js.map