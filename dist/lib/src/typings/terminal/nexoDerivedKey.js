"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NexoDerivedKey = void 0;
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
exports.NexoDerivedKey = NexoDerivedKey;
//# sourceMappingURL=nexoDerivedKey.js.map