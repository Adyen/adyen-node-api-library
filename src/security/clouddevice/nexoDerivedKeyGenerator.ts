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
 * Adyen NodeJS API Library
 * Copyright (c) 2026 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

import { pbkdf2Sync } from "crypto";
import {
    NexoDerivedKey,
    NEXO_CIPHER_KEY_LENGTH,
    NEXO_HMAC_KEY_LENGTH,
    NEXO_IV_LENGTH,
} from "../../typings/clouddevice/security/nexoDerivedKey";

export function deriveKeyMaterial(passphrase: string): NexoDerivedKey {
    const pass = Buffer.from(passphrase, "binary");
    const salt = Buffer.from("AdyenNexoV1Salt", "binary");
    // Iteration count fixed at 4000 as mandated by the Nexo protocol specification (AdyenNexoV1)
    const iterations = 4000;
    const keylen = NEXO_HMAC_KEY_LENGTH + NEXO_CIPHER_KEY_LENGTH + NEXO_IV_LENGTH;
    const key = pbkdf2Sync(pass, salt, iterations, keylen, "sha1");

    return {
        hmacKey: key.slice(0, NEXO_HMAC_KEY_LENGTH),
        cipherKey: key.slice(NEXO_HMAC_KEY_LENGTH, NEXO_HMAC_KEY_LENGTH + NEXO_CIPHER_KEY_LENGTH),
        iv: key.slice(NEXO_HMAC_KEY_LENGTH + NEXO_CIPHER_KEY_LENGTH),
    };
}
