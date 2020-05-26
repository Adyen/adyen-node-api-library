import { pbkdf2Sync } from "crypto";
import { NexoEnum } from "../constants/nexoConstants";
var NexoDerivedKeyGenerator = (function () {
    function NexoDerivedKeyGenerator() {
    }
    NexoDerivedKeyGenerator.deriveKeyMaterial = function (passphrase) {
        var pass = Buffer.from(passphrase, "binary");
        var salt = Buffer.from("AdyenNexoV1Salt", "binary");
        var iterations = 4000;
        var keylen = NexoEnum.CIPHER_KEY_LENGTH + NexoEnum.HMAC_KEY_LENGTH + NexoEnum.IV_LENGTH;
        var key = pbkdf2Sync(pass, salt, iterations, keylen * 8, "sha1");
        return NexoDerivedKeyGenerator.readKeyData(key);
    };
    NexoDerivedKeyGenerator.readKeyData = function (key) {
        return {
            cipherKey: key.slice(NexoEnum.HMAC_KEY_LENGTH, NexoEnum.HMAC_KEY_LENGTH + NexoEnum.CIPHER_KEY_LENGTH),
            hmacKey: key.slice(0, NexoEnum.HMAC_KEY_LENGTH),
            iv: key.slice(NexoEnum.HMAC_KEY_LENGTH + NexoEnum.CIPHER_KEY_LENGTH, NexoEnum.CIPHER_KEY_LENGTH + NexoEnum.HMAC_KEY_LENGTH + NexoEnum.IV_LENGTH),
        };
    };
    return NexoDerivedKeyGenerator;
}());
export default NexoDerivedKeyGenerator;
//# sourceMappingURL=nexoDerivedKeyGenerator.js.map