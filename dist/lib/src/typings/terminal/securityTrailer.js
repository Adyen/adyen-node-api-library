"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityTrailer = void 0;
var SecurityTrailer = (function () {
    function SecurityTrailer() {
    }
    SecurityTrailer.getAttributeTypeMap = function () {
        return SecurityTrailer.attributeTypeMap;
    };
    SecurityTrailer.discriminator = undefined;
    SecurityTrailer.attributeTypeMap = [
        {
            "name": "adyenCryptoVersion",
            "baseName": "AdyenCryptoVersion",
            "type": "number"
        },
        {
            "name": "hmac",
            "baseName": "Hmac",
            "type": "AnyType"
        },
        {
            "name": "keyIdentifier",
            "baseName": "KeyIdentifier",
            "type": "string"
        },
        {
            "name": "keyVersion",
            "baseName": "KeyVersion",
            "type": "number"
        },
        {
            "name": "nonce",
            "baseName": "Nonce",
            "type": "AnyType"
        }
    ];
    return SecurityTrailer;
}());
exports.SecurityTrailer = SecurityTrailer;
//# sourceMappingURL=securityTrailer.js.map