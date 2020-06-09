var CommonField = (function () {
    function CommonField() {
    }
    CommonField.getAttributeTypeMap = function () {
        return CommonField.attributeTypeMap;
    };
    CommonField.discriminator = undefined;
    CommonField.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string"
        }
    ];
    return CommonField;
}());
export { CommonField };
//# sourceMappingURL=commonField.js.map