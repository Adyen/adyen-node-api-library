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
export { CardReaderPowerOffRequest };
//# sourceMappingURL=cardReaderPowerOffRequest.js.map