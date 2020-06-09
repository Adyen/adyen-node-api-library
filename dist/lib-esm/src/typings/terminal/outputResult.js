var OutputResult = (function () {
    function OutputResult() {
    }
    OutputResult.getAttributeTypeMap = function () {
        return OutputResult.attributeTypeMap;
    };
    OutputResult.discriminator = undefined;
    OutputResult.attributeTypeMap = [
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
            "name": "response",
            "baseName": "Response",
            "type": "Response"
        }
    ];
    return OutputResult;
}());
export { OutputResult };
//# sourceMappingURL=outputResult.js.map