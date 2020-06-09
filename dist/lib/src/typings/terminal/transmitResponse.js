"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransmitResponse = void 0;
var TransmitResponse = (function () {
    function TransmitResponse() {
    }
    TransmitResponse.getAttributeTypeMap = function () {
        return TransmitResponse.attributeTypeMap;
    };
    TransmitResponse.discriminator = undefined;
    TransmitResponse.attributeTypeMap = [
        {
            "name": "message",
            "baseName": "Message",
            "type": "AnyType"
        },
        {
            "name": "response",
            "baseName": "Response",
            "type": "Response"
        }
    ];
    return TransmitResponse;
}());
exports.TransmitResponse = TransmitResponse;
//# sourceMappingURL=transmitResponse.js.map