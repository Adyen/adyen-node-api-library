"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoyaltyAccountStatus = void 0;
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
exports.LoyaltyAccountStatus = LoyaltyAccountStatus;
(function (LoyaltyAccountStatus) {
    var LoyaltyUnitEnum;
    (function (LoyaltyUnitEnum) {
        LoyaltyUnitEnum[LoyaltyUnitEnum["Monetary"] = 'Monetary'] = "Monetary";
        LoyaltyUnitEnum[LoyaltyUnitEnum["Point"] = 'Point'] = "Point";
    })(LoyaltyUnitEnum = LoyaltyAccountStatus.LoyaltyUnitEnum || (LoyaltyAccountStatus.LoyaltyUnitEnum = {}));
})(LoyaltyAccountStatus = exports.LoyaltyAccountStatus || (exports.LoyaltyAccountStatus = {}));
exports.LoyaltyAccountStatus = LoyaltyAccountStatus;
//# sourceMappingURL=loyaltyAccountStatus.js.map