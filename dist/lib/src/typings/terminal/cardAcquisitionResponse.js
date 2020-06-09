"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardAcquisitionResponse = void 0;
var CardAcquisitionResponse = (function () {
    function CardAcquisitionResponse() {
    }
    CardAcquisitionResponse.getAttributeTypeMap = function () {
        return CardAcquisitionResponse.attributeTypeMap;
    };
    CardAcquisitionResponse.discriminator = undefined;
    CardAcquisitionResponse.attributeTypeMap = [
        {
            "name": "customerOrder",
            "baseName": "CustomerOrder",
            "type": "Array<CustomerOrder>"
        },
        {
            "name": "loyaltyAccount",
            "baseName": "LoyaltyAccount",
            "type": "Array<LoyaltyAccount>"
        },
        {
            "name": "paymentBrand",
            "baseName": "PaymentBrand",
            "type": "Array<string>"
        },
        {
            "name": "paymentInstrumentData",
            "baseName": "PaymentInstrumentData",
            "type": "PaymentInstrumentData"
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
    return CardAcquisitionResponse;
}());
exports.CardAcquisitionResponse = CardAcquisitionResponse;
//# sourceMappingURL=cardAcquisitionResponse.js.map