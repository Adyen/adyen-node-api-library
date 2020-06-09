"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoyaltyTotals = void 0;
var LoyaltyTotals = (function () {
    function LoyaltyTotals() {
    }
    LoyaltyTotals.getAttributeTypeMap = function () {
        return LoyaltyTotals.attributeTypeMap;
    };
    LoyaltyTotals.discriminator = undefined;
    LoyaltyTotals.attributeTypeMap = [
        {
            "name": "transactionAmount",
            "baseName": "TransactionAmount",
            "type": "number"
        },
        {
            "name": "transactionCount",
            "baseName": "TransactionCount",
            "type": "number"
        },
        {
            "name": "transactionType",
            "baseName": "TransactionType",
            "type": "TransactionType"
        }
    ];
    return LoyaltyTotals;
}());
exports.LoyaltyTotals = LoyaltyTotals;
//# sourceMappingURL=loyaltyTotals.js.map