"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoyaltyResponse = void 0;
var LoyaltyResponse = (function () {
    function LoyaltyResponse() {
    }
    LoyaltyResponse.getAttributeTypeMap = function () {
        return LoyaltyResponse.attributeTypeMap;
    };
    LoyaltyResponse.discriminator = undefined;
    LoyaltyResponse.attributeTypeMap = [
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
    return LoyaltyResponse;
}());
exports.LoyaltyResponse = LoyaltyResponse;
//# sourceMappingURL=loyaltyResponse.js.map