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

export const NEXO_HMAC_KEY_LENGTH = 32;
export const NEXO_CIPHER_KEY_LENGTH = 32;
export const NEXO_IV_LENGTH = 16;

/**
 * Container for Nexo derived key material.
 * 80 bytes total: 32-byte HMAC key, 32-byte cipher key, 16-byte IV.
 */
export interface NexoDerivedKey {
    hmacKey: Buffer;
    cipherKey: Buffer;
    iv: Buffer;
}
