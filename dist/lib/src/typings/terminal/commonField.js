"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonField = void 0;
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
exports.CommonField = CommonField;
//# sourceMappingURL=commonField.js.map