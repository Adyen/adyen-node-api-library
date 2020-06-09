"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleToPOISecuredMessage = void 0;
var SaleToPOISecuredMessage = (function () {
    function SaleToPOISecuredMessage() {
    }
    SaleToPOISecuredMessage.getAttributeTypeMap = function () {
        return SaleToPOISecuredMessage.attributeTypeMap;
    };
    SaleToPOISecuredMessage.discriminator = undefined;
    SaleToPOISecuredMessage.attributeTypeMap = [
        {
            "name": "messageHeader",
            "baseName": "MessageHeader",
            "type": "MessageHeader"
        },
        {
            "name": "nexoBlob",
            "baseName": "NexoBlob",
            "type": "string"
        },
        {
            "name": "securityTrailer",
            "baseName": "SecurityTrailer",
            "type": "SecurityTrailer"
        }
    ];
    return SaleToPOISecuredMessage;
}());
exports.SaleToPOISecuredMessage = SaleToPOISecuredMessage;
//# sourceMappingURL=saleToPOISecuredMessage.js.map