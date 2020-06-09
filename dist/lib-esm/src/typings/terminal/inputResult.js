var InputResult = (function () {
    function InputResult() {
    }
    InputResult.getAttributeTypeMap = function () {
        return InputResult.attributeTypeMap;
    };
    InputResult.discriminator = undefined;
    InputResult.attributeTypeMap = [
        {
            "name": "device",
            "baseName": "Device",
            "type": "DeviceType"
        },
        {
            "name": "infoQualify",
            "baseName": "InfoQualify",
            "type": "InfoQualifyType"
        },
        {
            "name": "input",
            "baseName": "Input",
            "type": "Input"
        },
        {
            "name": "response",
            "baseName": "Response",
            "type": "Response"
        }
    ];
    return InputResult;
}());
export { InputResult };
//# sourceMappingURL=inputResult.js.map