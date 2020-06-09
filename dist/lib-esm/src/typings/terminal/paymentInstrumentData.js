var PaymentInstrumentData = (function () {
    function PaymentInstrumentData() {
    }
    PaymentInstrumentData.getAttributeTypeMap = function () {
        return PaymentInstrumentData.attributeTypeMap;
    };
    PaymentInstrumentData.discriminator = undefined;
    PaymentInstrumentData.attributeTypeMap = [
        {
            "name": "cardData",
            "baseName": "CardData",
            "type": "CardData"
        },
        {
            "name": "checkData",
            "baseName": "CheckData",
            "type": "CheckData"
        },
        {
            "name": "mobileData",
            "baseName": "MobileData",
            "type": "MobileData"
        },
        {
            "name": "paymentInstrumentType",
            "baseName": "PaymentInstrumentType",
            "type": "PaymentInstrumentType"
        }
    ];
    return PaymentInstrumentData;
}());
export { PaymentInstrumentData };
//# sourceMappingURL=paymentInstrumentData.js.map