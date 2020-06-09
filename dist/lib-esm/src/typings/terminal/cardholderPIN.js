var CardholderPIN = (function () {
    function CardholderPIN() {
    }
    CardholderPIN.getAttributeTypeMap = function () {
        return CardholderPIN.attributeTypeMap;
    };
    CardholderPIN.discriminator = undefined;
    CardholderPIN.attributeTypeMap = [
        {
            "name": "additionalInput",
            "baseName": "AdditionalInput",
            "type": "string"
        },
        {
            "name": "encrPINBlock",
            "baseName": "EncrPINBlock",
            "type": "ContentInformation"
        },
        {
            "name": "pINFormat",
            "baseName": "PINFormat",
            "type": "PINFormatType"
        }
    ];
    return CardholderPIN;
}());
export { CardholderPIN };
//# sourceMappingURL=cardholderPIN.js.map