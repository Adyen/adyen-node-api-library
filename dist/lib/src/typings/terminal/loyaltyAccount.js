"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoyaltyAccount = void 0;
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
exports.LoyaltyAccount = LoyaltyAccount;
//# sourceMappingURL=loyaltyAccount.js.map