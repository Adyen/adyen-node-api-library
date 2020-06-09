var PredefinedContent = (function () {
    function PredefinedContent() {
    }
    PredefinedContent.getAttributeTypeMap = function () {
        return PredefinedContent.attributeTypeMap;
    };
    PredefinedContent.discriminator = undefined;
    PredefinedContent.attributeTypeMap = [
        {
            "name": "language",
            "baseName": "Language",
            "type": "string"
        },
        {
            "name": "referenceID",
            "baseName": "ReferenceID",
            "type": "string"
        }
    ];
    return PredefinedContent;
}());
export { PredefinedContent };
//# sourceMappingURL=predefinedContent.js.map