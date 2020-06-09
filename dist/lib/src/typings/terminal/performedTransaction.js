"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PerformedTransaction = void 0;
var PerformedTransaction = (function () {
    function PerformedTransaction() {
    }
    PerformedTransaction.getAttributeTypeMap = function () {
        return PerformedTransaction.attributeTypeMap;
    };
    PerformedTransaction.discriminator = undefined;
    PerformedTransaction.attributeTypeMap = [
        {
            "name": "loyaltyResult",
            "baseName": "LoyaltyResult",
            "type": "Array<LoyaltyResult>"
        },
        {
            "name": "paymentResult",
            "baseName": "PaymentResult",
            "type": "PaymentResult"
        },
        {
            "name": "pOIData",
            "baseName": "POIData",
            "type": "POIData"
        },
        {
            "name": "response",
            "baseName": "Response",
            "type": "Response"
        },
        {
            "name": "reversedAmount",
            "baseName": "ReversedAmount",
            "type": "number"
        },
        {
            "name": "saleData",
            "baseName": "SaleData",
            "type": "SaleData"
        }
    ];
    return PerformedTransaction;
}());
exports.PerformedTransaction = PerformedTransaction;
//# sourceMappingURL=performedTransaction.js.map