var DisplayOutput = (function () {
    function DisplayOutput() {
    }
    DisplayOutput.getAttributeTypeMap = function () {
        return DisplayOutput.attributeTypeMap;
    };
    DisplayOutput.discriminator = undefined;
    DisplayOutput.attributeTypeMap = [
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
            "name": "menuEntry",
            "baseName": "MenuEntry",
            "type": "Array<MenuEntry>"
        },
        {
            "name": "minimumDisplayTime",
            "baseName": "MinimumDisplayTime",
            "type": "number"
        },
        {
            "name": "outputContent",
            "baseName": "OutputContent",
            "type": "OutputContent"
        },
        {
            "name": "outputSignature",
            "baseName": "OutputSignature",
            "type": "AnyType"
        },
        {
            "name": "responseRequiredFlag",
            "baseName": "ResponseRequiredFlag",
            "type": "boolean"
        }
    ];
    return DisplayOutput;
}());
export { DisplayOutput };
//# sourceMappingURL=displayOutput.js.map