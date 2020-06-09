var InputRequest = (function () {
    function InputRequest() {
    }
    InputRequest.getAttributeTypeMap = function () {
        return InputRequest.attributeTypeMap;
    };
    InputRequest.discriminator = undefined;
    InputRequest.attributeTypeMap = [
        {
            "name": "displayOutput",
            "baseName": "DisplayOutput",
            "type": "DisplayOutput"
        },
        {
            "name": "inputData",
            "baseName": "InputData",
            "type": "InputData"
        }
    ];
    return InputRequest;
}());
export { InputRequest };
//# sourceMappingURL=inputRequest.js.map