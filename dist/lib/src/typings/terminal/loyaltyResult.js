"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoyaltyResult = void 0;
var LoyaltyResult = (function () {
    function LoyaltyResult() {
    }
    LoyaltyResult.getAttributeTypeMap = function () {
        return LoyaltyResult.attributeTypeMap;
    };
    LoyaltyResult.discriminator = undefined;
    LoyaltyResult.attributeTypeMap = [
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
            "name": "loyaltyAcquirerData",
            "baseName": "LoyaltyAcquirerData",
            "type": "LoyaltyAcquirerData"
        },
        {
            "name": "loyaltyAmount",
            "baseName": "LoyaltyAmount",
            "type": "LoyaltyAmount"
        },
        {
            "name": "rebates",
            "baseName": "Rebates",
            "type": "Rebates"
        }
    ];
    return LoyaltyResult;
}());
exports.LoyaltyResult = LoyaltyResult;
//# sourceMappingURL=loyaltyResult.js.map