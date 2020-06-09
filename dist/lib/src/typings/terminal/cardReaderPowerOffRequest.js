"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardReaderPowerOffRequest = void 0;
var CardReaderPowerOffRequest = (function () {
    function CardReaderPowerOffRequest() {
    }
    CardReaderPowerOffRequest.getAttributeTypeMap = function () {
        return CardReaderPowerOffRequest.attributeTypeMap;
    };
    CardReaderPowerOffRequest.discriminator = undefined;
    CardReaderPowerOffRequest.attributeTypeMap = [
        {
            "name": "displayOutput",
            "baseName": "DisplayOutput",
            "type": "DisplayOutput"
        },
        {
            "name": "maxWaitingTime",
            "baseName": "MaxWaitingTime",
            "type": "number"
        }
    ];
    return CardReaderPowerOffRequest;
}());
exports.CardReaderPowerOffRequest = CardReaderPowerOffRequest;
//# sourceMappingURL=cardReaderPowerOffRequest.js.map