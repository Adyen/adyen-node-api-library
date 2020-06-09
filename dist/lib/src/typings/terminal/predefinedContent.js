"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PredefinedContent = void 0;
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
exports.PredefinedContent = PredefinedContent;
//# sourceMappingURL=predefinedContent.js.map