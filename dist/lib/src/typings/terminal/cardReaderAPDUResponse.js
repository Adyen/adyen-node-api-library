"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardReaderAPDUResponse = void 0;
var CardReaderAPDUResponse = (function () {
    function CardReaderAPDUResponse() {
    }
    CardReaderAPDUResponse.getAttributeTypeMap = function () {
        return CardReaderAPDUResponse.attributeTypeMap;
    };
    CardReaderAPDUResponse.discriminator = undefined;
    CardReaderAPDUResponse.attributeTypeMap = [
        {
            "name": "aPDUData",
            "baseName": "APDUData",
            "type": "AnyType"
        },
        {
            "name": "cardStatusWords",
            "baseName": "CardStatusWords",
            "type": "AnyType"
        },
        {
            "name": "response",
            "baseName": "Response",
            "type": "Response"
        }
    ];
    return CardReaderAPDUResponse;
}());
exports.CardReaderAPDUResponse = CardReaderAPDUResponse;
//# sourceMappingURL=cardReaderAPDUResponse.js.map