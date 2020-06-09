var PrintResponse = (function () {
    function PrintResponse() {
    }
    PrintResponse.getAttributeTypeMap = function () {
        return PrintResponse.attributeTypeMap;
    };
    PrintResponse.discriminator = undefined;
    PrintResponse.attributeTypeMap = [
        {
            "name": "documentQualifier",
            "baseName": "DocumentQualifier",
            "type": "DocumentQualifierType"
        },
        {
            "name": "response",
            "baseName": "Response",
            "type": "Response"
        }
    ];
    return PrintResponse;
}());
export { PrintResponse };
//# sourceMappingURL=printResponse.js.map