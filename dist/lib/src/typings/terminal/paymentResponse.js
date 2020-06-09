"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentResponse = void 0;
var PaymentResponse = (function () {
    function PaymentResponse() {
    }
    PaymentResponse.getAttributeTypeMap = function () {
        return PaymentResponse.attributeTypeMap;
    };
    PaymentResponse.discriminator = undefined;
    PaymentResponse.attributeTypeMap = [
        {
            "name": "customerOrder",
            "baseName": "CustomerOrder",
            "type": "Array<CustomerOrder>"
        },
        {
            "name": "loyaltyResult",
            "baseName": "LoyaltyResult",
            "type": "Array<LoyaltyResult>"
        },
        {
            "name": "paymentReceipt",
            "baseName": "PaymentReceipt",
            "type": "Array<PaymentReceipt>"
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
            "name": "saleData",
            "baseName": "SaleData",
            "type": "SaleData"
        }
    ];
    return PaymentResponse;
}());
exports.PaymentResponse = PaymentResponse;
//# sourceMappingURL=paymentResponse.js.map