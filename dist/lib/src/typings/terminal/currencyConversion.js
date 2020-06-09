"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyConversion = void 0;
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
exports.CurrencyConversion = CurrencyConversion;
//# sourceMappingURL=currencyConversion.js.map