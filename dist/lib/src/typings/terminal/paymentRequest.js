"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRequest = void 0;
var PaymentRequest = (function () {
    function PaymentRequest() {
    }
    PaymentRequest.getAttributeTypeMap = function () {
        return PaymentRequest.attributeTypeMap;
    };
    PaymentRequest.discriminator = undefined;
    PaymentRequest.attributeTypeMap = [
        {
            "name": "loyaltyData",
            "baseName": "LoyaltyData",
            "type": "Array<LoyaltyData>"
        },
        {
            "name": "paymentData",
            "baseName": "PaymentData",
            "type": "PaymentData"
        },
        {
            "name": "paymentTransaction",
            "baseName": "PaymentTransaction",
            "type": "PaymentTransaction"
        },
        {
            "name": "saleData",
            "baseName": "SaleData",
            "type": "SaleData"
        }
    ];
    return PaymentRequest;
}());
exports.PaymentRequest = PaymentRequest;
//# sourceMappingURL=paymentRequest.js.map