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
export { SecurityKey };
//# sourceMappingURL=securityKey.js.map