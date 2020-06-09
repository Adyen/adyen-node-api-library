var RelativeDistinguishedName = (function () {
    function RelativeDistinguishedName() {
    }
    RelativeDistinguishedName.getAttributeTypeMap = function () {
        return RelativeDistinguishedName.attributeTypeMap;
    };
    RelativeDistinguishedName.discriminator = undefined;
    RelativeDistinguishedName.attributeTypeMap = [
        {
            "name": "attribute",
            "baseName": "Attribute",
            "type": "string"
        },
        {
            "name": "attributeValue",
            "baseName": "AttributeValue",
            "type": "string"
        }
    ];
    return RelativeDistinguishedName;
}());
export { RelativeDistinguishedName };
//# sourceMappingURL=relativeDistinguishedName.js.map