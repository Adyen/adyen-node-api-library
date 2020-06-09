"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentTransaction = void 0;
var PaymentTransaction = (function () {
    function PaymentTransaction() {
    }
    PaymentTransaction.getAttributeTypeMap = function () {
        return PaymentTransaction.attributeTypeMap;
    };
    PaymentTransaction.discriminator = undefined;
    PaymentTransaction.attributeTypeMap = [
        {
            "name": "amountsReq",
            "baseName": "AmountsReq",
            "type": "AmountsReq"
        },
        {
            "name": "originalPOITransaction",
            "baseName": "OriginalPOITransaction",
            "type": "OriginalPOITransaction"
        },
        {
            "name": "saleItem",
            "baseName": "SaleItem",
            "type": "Array<SaleItem>"
        },
        {
            "name": "transactionConditions",
            "baseName": "TransactionConditions",
            "type": "TransactionConditions"
        }
    ];
    return PaymentTransaction;
}());
exports.PaymentTransaction = PaymentTransaction;
//# sourceMappingURL=paymentTransaction.js.map