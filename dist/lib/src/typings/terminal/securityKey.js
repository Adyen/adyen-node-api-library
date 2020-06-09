"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityKey = void 0;
var SecurityKey = (function () {
    function SecurityKey() {
    }
    SecurityKey.getAttributeTypeMap = function () {
        return SecurityKey.attributeTypeMap;
    };
    SecurityKey.discriminator = undefined;
    SecurityKey.attributeTypeMap = [
        {
            "name": "adyenCryptoVersion",
            "baseName": "AdyenCryptoVersion",
            "type": "number"
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
            "name": "passphrase",
            "baseName": "Passphrase",
            "type": "string"
        }
    ];
    return SecurityKey;
}());
exports.SecurityKey = SecurityKey;
//# sourceMappingURL=securityKey.js.map