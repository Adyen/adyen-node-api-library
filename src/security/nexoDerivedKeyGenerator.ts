/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 *
 * Adyen NodeJS API Library
 *
 * Copyright (c) 2019 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

import {pbkdf2Sync} from "crypto";
import {NEXO_CIPHER_KEY_LENGTH, NEXO_HMAC_KEY_LENGTH, NEXO_IV_LENGTH} from "../typings/constants/nexoConstants";
import { NexoDerivedKey } from "../typings/terminal";

class NexoDerivedKeyGenerator {
    public static deriveKeyMaterial(passphrase: string): NexoDerivedKey {
        const pass = Buffer.from(passphrase, "binary");
        const salt = Buffer.from("AdyenNexoV1Salt", "binary");
        const iterations = 4000;
        const keylen = NEXO_CIPHER_KEY_LENGTH + NEXO_HMAC_KEY_LENGTH + NEXO_IV_LENGTH;
        const key = pbkdf2Sync(pass, salt, iterations, keylen * 8, "sha1");
        return NexoDerivedKeyGenerator.readKeyData(key);
    }

    private static readKeyData(key: Buffer): NexoDerivedKey {
        return {
            cipherKey: key.slice(NEXO_HMAC_KEY_LENGTH, NEXO_HMAC_KEY_LENGTH + NEXO_CIPHER_KEY_LENGTH),
            hmacKey: key.slice(0, NEXO_HMAC_KEY_LENGTH),
            iv: key.slice(
                NEXO_HMAC_KEY_LENGTH + NEXO_CIPHER_KEY_LENGTH,
                NEXO_CIPHER_KEY_LENGTH + NEXO_HMAC_KEY_LENGTH + NEXO_IV_LENGTH,
            ),
        };
    }
}

export default NexoDerivedKeyGenerator;
