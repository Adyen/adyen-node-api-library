import { pbkdf2Sync } from "crypto";
import { NexoDerivedKey } from "../typings/terminal/models";
import { NexoEnum } from "../constants/nexoConstants";

class NexoDerivedKeyGenerator {
    public static deriveKeyMaterial(passphrase: string): NexoDerivedKey {
        const pass = Buffer.from(passphrase, "binary");
        const salt = Buffer.from("AdyenNexoV1Salt", "binary");
        const iterations = 4000;
        const keylen = NexoEnum.CIPHER_KEY_LENGTH + NexoEnum.HMAC_KEY_LENGTH + NexoEnum.IV_LENGTH;
        const key = pbkdf2Sync(pass, salt, iterations, keylen * 8, "sha1");
        return NexoDerivedKeyGenerator.readKeyData(key);
    }

    private static readKeyData(key: Buffer): NexoDerivedKey {
        return {
            cipherKey: key.slice(NexoEnum.HMAC_KEY_LENGTH, NexoEnum.HMAC_KEY_LENGTH + NexoEnum.CIPHER_KEY_LENGTH),
            hmacKey: key.slice(0, NexoEnum.HMAC_KEY_LENGTH),
            iv: key.slice(
                NexoEnum.HMAC_KEY_LENGTH + NexoEnum.CIPHER_KEY_LENGTH,
                NexoEnum.CIPHER_KEY_LENGTH + NexoEnum.HMAC_KEY_LENGTH + NexoEnum.IV_LENGTH,
            ),
        };
    }
}

export default NexoDerivedKeyGenerator;
