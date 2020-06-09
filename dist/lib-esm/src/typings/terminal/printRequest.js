var PrintRequest = (function () {
    function PrintRequest() {
    }
    PrintRequest.getAttributeTypeMap = function () {
        return PrintRequest.attributeTypeMap;
    };
    PrintRequest.discriminator = undefined;
    PrintRequest.attributeTypeMap = [
        {
            "name": "printOutput",
            "baseName": "PrintOutput",
            "type": "PrintOutput"
        }
    ];
    return PrintRequest;
}());
export { PrintRequest };
//# sourceMappingURL=printRequest.js.map