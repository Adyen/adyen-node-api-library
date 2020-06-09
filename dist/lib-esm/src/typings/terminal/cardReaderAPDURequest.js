var CardReaderAPDURequest = (function () {
    function CardReaderAPDURequest() {
    }
    CardReaderAPDURequest.getAttributeTypeMap = function () {
        return CardReaderAPDURequest.attributeTypeMap;
    };
    CardReaderAPDURequest.discriminator = undefined;
    CardReaderAPDURequest.attributeTypeMap = [
        {
            "name": "aPDUClass",
            "baseName": "APDUClass",
            "type": "AnyType"
        },
        {
            "name": "aPDUData",
            "baseName": "APDUData",
            "type": "AnyType"
        },
        {
            "name": "aPDUExpectedLength",
            "baseName": "APDUExpectedLength",
            "type": "AnyType"
        },
        {
            "name": "aPDUInstruction",
            "baseName": "APDUInstruction",
            "type": "AnyType"
        },
        {
            "name": "aPDUPar1",
            "baseName": "APDUPar1",
            "type": "AnyType"
        },
        {
            "name": "aPDUPar2",
            "baseName": "APDUPar2",
            "type": "AnyType"
        }
    ];
    return CardReaderAPDURequest;
}());
export { CardReaderAPDURequest };
//# sourceMappingURL=cardReaderAPDURequest.js.map