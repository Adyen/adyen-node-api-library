var NexoDerivedKey = (function () {
    function NexoDerivedKey() {
    }
    NexoDerivedKey.getAttributeTypeMap = function () {
        return NexoDerivedKey.attributeTypeMap;
    };
    NexoDerivedKey.discriminator = undefined;
    NexoDerivedKey.attributeTypeMap = [
        {
            "name": "cipherKey",
            "baseName": "CipherKey",
            "type": "AnyType"
        },
        {
            "name": "hmacKey",
            "baseName": "HmacKey",
            "type": "AnyType"
        },
        {
            "name": "iv",
            "baseName": "Iv",
            "type": "AnyType"
        }
    ];
    return NexoDerivedKey;
}());
export { NexoDerivedKey };
//# sourceMappingURL=nexoDerivedKey.js.map