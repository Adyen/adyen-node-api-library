var InputUpdate = (function () {
    function InputUpdate() {
    }
    InputUpdate.getAttributeTypeMap = function () {
        return InputUpdate.attributeTypeMap;
    };
    InputUpdate.discriminator = undefined;
    InputUpdate.attributeTypeMap = [
        {
            "name": "maxDecimalLength",
            "baseName": "MaxDecimalLength",
            "type": "number"
        },
        {
            "name": "maxLength",
            "baseName": "MaxLength",
            "type": "number"
        },
        {
            "name": "menuEntry",
            "baseName": "MenuEntry",
            "type": "Array<MenuEntry>"
        },
        {
            "name": "messageReference",
            "baseName": "MessageReference",
            "type": "MessageReference"
        },
        {
            "name": "minLength",
            "baseName": "MinLength",
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
        }
    ];
    return InputUpdate;
}());
export { InputUpdate };
//# sourceMappingURL=inputUpdate.js.map