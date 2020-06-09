"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentReceipt = void 0;
var PaymentReceipt = (function () {
    function PaymentReceipt() {
    }
    PaymentReceipt.getAttributeTypeMap = function () {
        return PaymentReceipt.attributeTypeMap;
    };
    PaymentReceipt.discriminator = undefined;
    PaymentReceipt.attributeTypeMap = [
        {
            "name": "documentQualifier",
            "baseName": "DocumentQualifier",
            "type": "DocumentQualifierType"
        },
        {
            "name": "integratedPrintFlag",
            "baseName": "IntegratedPrintFlag",
            "type": "boolean"
        },
        {
            "name": "outputContent",
            "baseName": "OutputContent",
            "type": "OutputContent"
        },
        {
            "name": "requiredSignatureFlag",
            "baseName": "RequiredSignatureFlag",
            "type": "boolean"
        }
    ];
    return PaymentReceipt;
}());
exports.PaymentReceipt = PaymentReceipt;
//# sourceMappingURL=paymentReceipt.js.map