var CardData = (function () {
    function CardData() {
    }
    CardData.getAttributeTypeMap = function () {
        return CardData.attributeTypeMap;
    };
    CardData.discriminator = undefined;
    CardData.attributeTypeMap = [
        {
            "name": "allowedProduct",
            "baseName": "AllowedProduct",
            "type": "Array<AllowedProduct>"
        },
        {
            "name": "allowedProductCode",
            "baseName": "AllowedProductCode",
            "type": "Array<string>"
        },
        {
            "name": "cardCountryCode",
            "baseName": "CardCountryCode",
            "type": "string"
        },
        {
            "name": "customerOrder",
            "baseName": "CustomerOrder",
            "type": "Array<CustomerOrder>"
        },
        {
            "name": "entryMode",
            "baseName": "EntryMode",
            "type": "Array<CardData.EntryModeEnum>"
        },
        {
            "name": "maskedPAN",
            "baseName": "MaskedPAN",
            "type": "string"
        },
        {
            "name": "paymentAccountRef",
            "baseName": "PaymentAccountRef",
            "type": "string"
        },
        {
            "name": "paymentBrand",
            "baseName": "PaymentBrand",
            "type": "string"
        },
        {
            "name": "paymentToken",
            "baseName": "PaymentToken",
            "type": "PaymentToken"
        },
        {
            "name": "protectedCardData",
            "baseName": "ProtectedCardData",
            "type": "ContentInformation"
        },
        {
            "name": "sensitiveCardData",
            "baseName": "SensitiveCardData",
            "type": "SensitiveCardData"
        }
    ];
    return CardData;
}());
export { CardData };
(function (CardData) {
    var EntryModeEnum;
    (function (EntryModeEnum) {
        EntryModeEnum[EntryModeEnum["Contactless"] = 'Contactless'] = "Contactless";
        EntryModeEnum[EntryModeEnum["File"] = 'File'] = "File";
        EntryModeEnum[EntryModeEnum["ICC"] = 'ICC'] = "ICC";
        EntryModeEnum[EntryModeEnum["Keyed"] = 'Keyed'] = "Keyed";
        EntryModeEnum[EntryModeEnum["MagStripe"] = 'MagStripe'] = "MagStripe";
        EntryModeEnum[EntryModeEnum["Manual"] = 'Manual'] = "Manual";
        EntryModeEnum[EntryModeEnum["Mobile"] = 'Mobile'] = "Mobile";
        EntryModeEnum[EntryModeEnum["RFID"] = 'RFID'] = "RFID";
        EntryModeEnum[EntryModeEnum["Scanned"] = 'Scanned'] = "Scanned";
        EntryModeEnum[EntryModeEnum["SynchronousICC"] = 'SynchronousICC'] = "SynchronousICC";
        EntryModeEnum[EntryModeEnum["Tapped"] = 'Tapped'] = "Tapped";
    })(EntryModeEnum = CardData.EntryModeEnum || (CardData.EntryModeEnum = {}));
})(CardData || (CardData = {}));
//# sourceMappingURL=cardData.js.map