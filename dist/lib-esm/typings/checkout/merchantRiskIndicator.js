export var MerchantRiskIndicator;
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
})(MerchantRiskIndicator || (MerchantRiskIndicator = {}));
//# sourceMappingURL=merchantRiskIndicator.js.map