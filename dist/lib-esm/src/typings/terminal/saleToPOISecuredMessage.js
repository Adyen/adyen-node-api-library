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
export { SaleToPOISecuredMessage };
//# sourceMappingURL=saleToPOISecuredMessage.js.map