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

import {
    createCipheriv,
    createDecipheriv,
    createHmac,
    randomBytes,
    timingSafeEqual,
} from "crypto";
import { NexoDerivedKey, NEXO_IV_LENGTH } from "../../typings/clouddevice/security/nexoDerivedKey";
import { NexoSecurityException } from "./nexoSecurityException";

/** Performs AES-256-CBC encryption or decryption using the derived key and provided IV nonce. */
export function crypt(bytes: Buffer, dk: NexoDerivedKey, ivNonce: Buffer, mode: "encrypt" | "decrypt"): Buffer {
    const actualIV = Buffer.alloc(NEXO_IV_LENGTH);
    for (let i = 0; i < NEXO_IV_LENGTH; i++) {
        actualIV[i] = dk.iv[i] ^ ivNonce[i];
    }

    if (mode === "encrypt") {
        const cipher = createCipheriv("aes-256-cbc", dk.cipherKey, actualIV);
        return Buffer.concat([cipher.update(bytes), cipher.final()]);
    } else {
        const decipher = createDecipheriv("aes-256-cbc", dk.cipherKey, actualIV);
        return Buffer.concat([decipher.update(bytes), decipher.final()]);
    }
}

/** Generates an HMAC-SHA256 for message authentication. */
export function hmac(bytes: Buffer, dk: NexoDerivedKey): Buffer {
    return createHmac("sha256", dk.hmacKey).update(bytes).digest();
}

/** Validates the HMAC of a decrypted message to ensure data integrity. */
export function validateHmac(receivedHmac: Buffer, decryptedMessage: Buffer, dk: NexoDerivedKey): void {
    const computed = hmac(decryptedMessage, dk);
    if (!timingSafeEqual(computed, receivedHmac)) {
        throw new NexoSecurityException("HMAC validation failed");
    }
}

/** Generates a cryptographically random IV nonce. */
export function generateRandomIvNonce(): Buffer {
    return randomBytes(NEXO_IV_LENGTH);
}
