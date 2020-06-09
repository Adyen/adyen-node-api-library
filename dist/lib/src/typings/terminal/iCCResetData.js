"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICCResetData = void 0;
var ICCResetData = (function () {
    function ICCResetData() {
    }
    ICCResetData.getAttributeTypeMap = function () {
        return ICCResetData.attributeTypeMap;
    };
    ICCResetData.discriminator = undefined;
    ICCResetData.attributeTypeMap = [
        {
            "name": "atrValue",
            "baseName": "AtrValue",
            "type": "AnyType"
        },
        {
            "name": "cardStatusWords",
            "baseName": "CardStatusWords",
            "type": "AnyType"
        }
    ];
    return ICCResetData;
}());
exports.ICCResetData = ICCResetData;
//# sourceMappingURL=iCCResetData.js.map