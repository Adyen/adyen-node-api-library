"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = require("crypto");
var nexoConstants_1 = require("../constants/nexoConstants");
var NexoDerivedKeyGenerator = (function () {
    function NexoDerivedKeyGenerator() {
    }
    NexoDerivedKeyGenerator.deriveKeyMaterial = function (passphrase) {
        var pass = Buffer.from(passphrase, "binary");
        var salt = Buffer.from("AdyenNexoV1Salt", "binary");
        var iterations = 4000;
        var keylen = nexoConstants_1.NexoEnum.CIPHER_KEY_LENGTH + nexoConstants_1.NexoEnum.HMAC_KEY_LENGTH + nexoConstants_1.NexoEnum.IV_LENGTH;
        var key = crypto_1.pbkdf2Sync(pass, salt, iterations, keylen * 8, "sha1");
        return NexoDerivedKeyGenerator.readKeyData(key);
    };
    NexoDerivedKeyGenerator.readKeyData = function (key) {
        return {
            cipherKey: key.slice(nexoConstants_1.NexoEnum.HMAC_KEY_LENGTH, nexoConstants_1.NexoEnum.HMAC_KEY_LENGTH + nexoConstants_1.NexoEnum.CIPHER_KEY_LENGTH),
            hmacKey: key.slice(0, nexoConstants_1.NexoEnum.HMAC_KEY_LENGTH),
            iv: key.slice(nexoConstants_1.NexoEnum.HMAC_KEY_LENGTH + nexoConstants_1.NexoEnum.CIPHER_KEY_LENGTH, nexoConstants_1.NexoEnum.CIPHER_KEY_LENGTH + nexoConstants_1.NexoEnum.HMAC_KEY_LENGTH + nexoConstants_1.NexoEnum.IV_LENGTH),
        };
    };
    return NexoDerivedKeyGenerator;
}());
exports.default = NexoDerivedKeyGenerator;
//# sourceMappingURL=nexoDerivedKeyGenerator.js.map