var InputResponse = (function () {
    function InputResponse() {
    }
    InputResponse.getAttributeTypeMap = function () {
        return InputResponse.attributeTypeMap;
    };
    InputResponse.discriminator = undefined;
    InputResponse.attributeTypeMap = [
        {
            "name": "inputResult",
            "baseName": "InputResult",
            "type": "InputResult"
        },
        {
            "name": "outputResult",
            "baseName": "OutputResult",
            "type": "OutputResult"
        }
    ];
    return InputResponse;
}());
export { InputResponse };
//# sourceMappingURL=inputResponse.js.map