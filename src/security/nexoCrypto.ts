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
 * Copyright (c) 2021 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

import { Cipher, createCipheriv, createDecipheriv, createHmac, randomBytes, timingSafeEqual } from "crypto";
import NexoCryptoException from "../services/exception/nexoCryptoException";
import {
    MessageHeader,
    NexoDerivedKey,
    SaleToPOISecuredMessage,
    SecurityKey,
    SecurityTrailer,
} from "../typings/terminal/models";
import InvalidSecurityKeyException from "./exception/invalidSecurityKeyException";
import NexoDerivedKeyGenerator from "./nexoDerivedKeyGenerator";
import { NexoEnum } from "../constants/nexoConstants";

enum Modes {
    ENCRYPT,
    DECRYPT,
}

class NexoCrypto {
    public static encrypt(
        messageHeader: MessageHeader,
        saleToPoiMessageJson: string,
        securityKey: SecurityKey,
    ): SaleToPOISecuredMessage {
        const derivedKey: NexoDerivedKey = NexoDerivedKeyGenerator.deriveKeyMaterial(securityKey.Passphrase);
        const saleToPoiMessageByteArray = Buffer.from(saleToPoiMessageJson, "utf-8");
        const ivNonce = NexoCrypto.generateRandomIvNonce();
        const encryptedSaleToPoiMessage = NexoCrypto.crypt(saleToPoiMessageByteArray, derivedKey, ivNonce, Modes.ENCRYPT);
        const encryptedSaleToPoiMessageHmac = NexoCrypto.hmac(saleToPoiMessageByteArray, derivedKey);

        const securityTrailer: SecurityTrailer = {
            AdyenCryptoVersion: securityKey.AdyenCryptoVersion,
            Hmac: encryptedSaleToPoiMessageHmac.toString("base64"),
            KeyIdentifier: securityKey.KeyIdentifier,
            KeyVersion: securityKey.KeyVersion,
            Nonce: ivNonce.toString("base64"),
        };

        return {
            MessageHeader: messageHeader,
            NexoBlob: encryptedSaleToPoiMessage.toString("base64"),
            SecurityTrailer: securityTrailer,
        };
    }

    public decrypt(saleToPoiSecureMessage: SaleToPOISecuredMessage, securityKey: SecurityKey): string {
        NexoCrypto.validateSecurityKey(securityKey);

        const encryptedSaleToPoiMessageByteArray = Buffer.from(saleToPoiSecureMessage.NexoBlob, "base64");
        const derivedKey = NexoDerivedKeyGenerator.deriveKeyMaterial(securityKey.Passphrase);
        const ivNonce = Buffer.from(saleToPoiSecureMessage.SecurityTrailer.Nonce, "base64");
        const decryptedSaleToPoiMessageByteArray =
            NexoCrypto.crypt(encryptedSaleToPoiMessageByteArray, derivedKey, ivNonce, Modes.DECRYPT);

        const receivedHmac = Buffer.from(saleToPoiSecureMessage.SecurityTrailer.Hmac, "base64");
        this.validateHmac(receivedHmac, decryptedSaleToPoiMessageByteArray, derivedKey);

        return decryptedSaleToPoiMessageByteArray.toString("utf-8");
    }

    private static validateSecurityKey(securityKey: SecurityKey): void {
        const isValid = securityKey
            && securityKey.Passphrase
            && securityKey.KeyIdentifier
            && !isNaN(securityKey.KeyVersion)
            && !isNaN(securityKey.AdyenCryptoVersion);
        if (!isValid) {
            throw new InvalidSecurityKeyException("Invalid Security Key");
        }
    }

    private static crypt(bytes: Buffer, dk: NexoDerivedKey, ivNonce: Buffer, mode: Modes): Buffer {
        const actualIV = Buffer.alloc(NexoEnum.IV_LENGTH);
        for (let i = 0; i < NexoEnum.IV_LENGTH; i++) {
            actualIV[i] = dk.iv[i] ^ ivNonce[i];
        }

        const cipher = mode === Modes.ENCRYPT
            ? createCipheriv("aes-256-cbc", dk.cipherKey, actualIV)
            : createDecipheriv("aes-256-cbc", dk.cipherKey, actualIV);

        let encrypted = (cipher as Cipher).update(bytes);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return encrypted;
    }

    private static hmac(bytes: Buffer, derivedKey: NexoDerivedKey): Buffer {
        const mac = createHmac("sha256", derivedKey.hmacKey);
        return mac.update(bytes).digest();
    }

    private static generateRandomIvNonce(): Buffer {
        return randomBytes(NexoEnum.IV_LENGTH);
    }

    private validateHmac(receivedHmac: Buffer, decryptedMessage: Buffer, derivedKey: NexoDerivedKey): void {
        const hmac = NexoCrypto.hmac(decryptedMessage, derivedKey);

        if (!timingSafeEqual(hmac, receivedHmac)) {
            throw new NexoCryptoException("Hmac validation failed");
        }
    }
}

export default NexoCrypto;
