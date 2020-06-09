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
export { CardReaderAPDUResponse };
//# sourceMappingURL=cardReaderAPDUResponse.js.map