"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentAccountStatus = void 0;
var PaymentAccountStatus = (function () {
    function PaymentAccountStatus() {
    }
    PaymentAccountStatus.getAttributeTypeMap = function () {
        return PaymentAccountStatus.attributeTypeMap;
    };
    PaymentAccountStatus.discriminator = undefined;
    PaymentAccountStatus.attributeTypeMap = [
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
            "name": "loyaltyAccountStatus",
            "baseName": "LoyaltyAccountStatus",
            "type": "LoyaltyAccountStatus"
        },
        {
            "name": "paymentAcquirerData",
            "baseName": "PaymentAcquirerData",
            "type": "PaymentAcquirerData"
        },
        {
            "name": "paymentInstrumentData",
            "baseName": "PaymentInstrumentData",
            "type": "PaymentInstrumentData"
        }
    ];
    return PaymentAccountStatus;
}());
exports.PaymentAccountStatus = PaymentAccountStatus;
//# sourceMappingURL=paymentAccountStatus.js.map