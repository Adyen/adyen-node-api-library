"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncapsulatedContent = void 0;
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
exports.EncapsulatedContent = EncapsulatedContent;
//# sourceMappingURL=encapsulatedContent.js.map