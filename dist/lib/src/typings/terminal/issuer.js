"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Issuer = void 0;
var Issuer = (function () {
    function Issuer() {
    }
    Issuer.getAttributeTypeMap = function () {
        return Issuer.attributeTypeMap;
    };
    Issuer.discriminator = undefined;
    Issuer.attributeTypeMap = [
        {
            "name": "relativeDistinguishedName",
            "baseName": "RelativeDistinguishedName",
            "type": "Array<RelativeDistinguishedName>"
        }
    ];
    return Issuer;
}());
exports.Issuer = Issuer;
//# sourceMappingURL=issuer.js.map