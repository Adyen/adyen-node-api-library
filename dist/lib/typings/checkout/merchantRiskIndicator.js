"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MerchantRiskIndicator;
(function (MerchantRiskIndicator) {
    MerchantRiskIndicator.DeliveryAddressIndicatorEnum = {
        ShipToBillingAddress: 'shipToBillingAddress',
        ShipToVerifiedAddress: 'shipToVerifiedAddress',
        ShipToNewAddress: 'shipToNewAddress',
        ShipToStore: 'shipToStore',
        DigitalGoods: 'digitalGoods',
        GoodsNotShipped: 'goodsNotShipped',
        Other: 'other'
    };
    MerchantRiskIndicator.DeliveryTimeframeEnum = {
        ElectronicDelivery: 'electronicDelivery',
        SameDayShipping: 'sameDayShipping',
        OvernightShipping: 'overnightShipping',
        TwoOrMoreDaysShipping: 'twoOrMoreDaysShipping'
    };
})(MerchantRiskIndicator = exports.MerchantRiskIndicator || (exports.MerchantRiskIndicator = {}));
//# sourceMappingURL=merchantRiskIndicator.js.map