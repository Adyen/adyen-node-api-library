"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelativeDistinguishedName = void 0;
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
exports.RelativeDistinguishedName = RelativeDistinguishedName;
//# sourceMappingURL=relativeDistinguishedName.js.map