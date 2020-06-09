"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAcquirerData = void 0;
var PaymentAcquirerData = (function () {
    function PaymentAcquirerData() {
    }
    PaymentAcquirerData.getAttributeTypeMap = function () {
        return PaymentAcquirerData.attributeTypeMap;
    };
    PaymentAcquirerData.discriminator = undefined;
    PaymentAcquirerData.attributeTypeMap = [
        {
            "name": "acquirerID",
            "baseName": "AcquirerID",
            "type": "string"
        },
        {
            "name": "acquirerPOIID",
            "baseName": "AcquirerPOIID",
            "type": "string"
        },
        {
            "name": "acquirerTransactionID",
            "baseName": "AcquirerTransactionID",
            "type": "TransactionIdentification"
        },
        {
            "name": "approvalCode",
            "baseName": "ApprovalCode",
            "type": "string"
        },
        {
            "name": "merchantID",
            "baseName": "MerchantID",
            "type": "string"
        }
    ];
    return PaymentAcquirerData;
}());
exports.PaymentAcquirerData = PaymentAcquirerData;
//# sourceMappingURL=paymentAcquirerData.js.map