var CurrencyConversion = (function () {
    function CurrencyConversion() {
    }
    CurrencyConversion.getAttributeTypeMap = function () {
        return CurrencyConversion.attributeTypeMap;
    };
    CurrencyConversion.discriminator = undefined;
    CurrencyConversion.attributeTypeMap = [
        {
            "name": "commission",
            "baseName": "Commission",
            "type": "number"
        },
        {
            "name": "convertedAmount",
            "baseName": "ConvertedAmount",
            "type": "Amount"
        },
        {
            "name": "customerApprovedFlag",
            "baseName": "CustomerApprovedFlag",
            "type": "boolean"
        },
        {
            "name": "declaration",
            "baseName": "Declaration",
            "type": "string"
        },
        {
            "name": "markup",
            "baseName": "Markup",
            "type": "number"
        },
        {
            "name": "rate",
            "baseName": "Rate",
            "type": "number"
        }
    ];
    return CurrencyConversion;
}());
export { CurrencyConversion };
//# sourceMappingURL=currencyConversion.js.map