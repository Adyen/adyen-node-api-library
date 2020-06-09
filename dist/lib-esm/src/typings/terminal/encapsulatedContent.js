var EncapsulatedContent = (function () {
    function EncapsulatedContent() {
    }
    EncapsulatedContent.getAttributeTypeMap = function () {
        return EncapsulatedContent.attributeTypeMap;
    };
    EncapsulatedContent.discriminator = undefined;
    EncapsulatedContent.attributeTypeMap = [
        {
            "name": "content",
            "baseName": "Content",
            "type": "AnyType"
        },
        {
            "name": "contentType",
            "baseName": "ContentType",
            "type": "ContentType"
        }
    ];
    return EncapsulatedContent;
}());
export { EncapsulatedContent };
//# sourceMappingURL=encapsulatedContent.js.map