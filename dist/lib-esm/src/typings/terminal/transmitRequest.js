var TransmitRequest = (function () {
    function TransmitRequest() {
    }
    TransmitRequest.getAttributeTypeMap = function () {
        return TransmitRequest.attributeTypeMap;
    };
    TransmitRequest.discriminator = undefined;
    TransmitRequest.attributeTypeMap = [
        {
            "name": "destinationAddress",
            "baseName": "DestinationAddress",
            "type": "string"
        },
        {
            "name": "maximumTransmitTime",
            "baseName": "MaximumTransmitTime",
            "type": "number"
        },
        {
            "name": "message",
            "baseName": "Message",
            "type": "AnyType"
        },
        {
            "name": "waitResponseFlag",
            "baseName": "WaitResponseFlag",
            "type": "boolean"
        }
    ];
    return TransmitRequest;
}());
export { TransmitRequest };
//# sourceMappingURL=transmitRequest.js.map