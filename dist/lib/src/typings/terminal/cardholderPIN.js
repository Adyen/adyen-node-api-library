"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardholderPIN = void 0;
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
exports.CardholderPIN = CardholderPIN;
//# sourceMappingURL=cardholderPIN.js.map