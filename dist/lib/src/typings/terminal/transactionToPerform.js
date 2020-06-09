"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionToPerform = void 0;
var TransactionToPerform = (function () {
    function TransactionToPerform() {
    }
    TransactionToPerform.getAttributeTypeMap = function () {
        return TransactionToPerform.attributeTypeMap;
    };
    TransactionToPerform.discriminator = undefined;
    TransactionToPerform.attributeTypeMap = [
        {
            "name": "loyaltyRequest",
            "baseName": "LoyaltyRequest",
            "type": "LoyaltyRequest"
        },
        {
            "name": "paymentRequest",
            "baseName": "PaymentRequest",
            "type": "PaymentRequest"
        },
        {
            "name": "reversalRequest",
            "baseName": "ReversalRequest",
            "type": "ReversalRequest"
        }
    ];
    return TransactionToPerform;
}());
exports.TransactionToPerform = TransactionToPerform;
//# sourceMappingURL=transactionToPerform.js.map