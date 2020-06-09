"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapturedSignature = void 0;
var CapturedSignature = (function () {
    function CapturedSignature() {
    }
    CapturedSignature.getAttributeTypeMap = function () {
        return CapturedSignature.attributeTypeMap;
    };
    CapturedSignature.discriminator = undefined;
    CapturedSignature.attributeTypeMap = [
        {
            "name": "areaSize",
            "baseName": "AreaSize",
            "type": "AreaSize"
        },
        {
            "name": "signaturePoint",
            "baseName": "SignaturePoint",
            "type": "Array<SignaturePoint>"
        }
    ];
    return CapturedSignature;
}());
exports.CapturedSignature = CapturedSignature;
//# sourceMappingURL=capturedSignature.js.map