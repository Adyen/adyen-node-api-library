"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignaturePoint = void 0;
var SignaturePoint = (function () {
    function SignaturePoint() {
    }
    SignaturePoint.getAttributeTypeMap = function () {
        return SignaturePoint.attributeTypeMap;
    };
    SignaturePoint.discriminator = undefined;
    SignaturePoint.attributeTypeMap = [
        {
            "name": "x",
            "baseName": "X",
            "type": "string"
        },
        {
            "name": "y",
            "baseName": "Y",
            "type": "string"
        }
    ];
    return SignaturePoint;
}());
exports.SignaturePoint = SignaturePoint;
//# sourceMappingURL=signaturePoint.js.map