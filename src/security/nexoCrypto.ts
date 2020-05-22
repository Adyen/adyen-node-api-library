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
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

import {Cipher, createCipheriv, createDecipheriv, createHmac, randomBytes} from "crypto";
import NexoCryptoException from "../services/exception/nexoCryptoException";
import {
    MessageHeader,
    NexoDerivedKey,
    SaleToPoiSecuredMessage,
    SecurityKey,
    SecurityTrailer,
} from "../typings/terminal";
import InvalidSecurityKeyException from "./exception/invalidSecurityKeyException";
import NexoDerivedKeyGenerator from "./nexoDerivedKeyGenerator";
import {NexoEnum} from "../constants/nexoConstants";

enum Modes {
    ENCRYPT,
    DECRYPT,
}

class NexoCrypto {
    public static encrypt(
        messageHeader: MessageHeader,
        saleToPoiMessageJson: string,
        securityKey: SecurityKey,
    ): SaleToPoiSecuredMessage {
        const derivedKey: NexoDerivedKey = NexoDerivedKeyGenerator.deriveKeyMaterial(securityKey.passphrase);
        const saleToPoiMessageByteArray = Buffer.from(saleToPoiMessageJson, "ascii");
        const ivNonce = NexoCrypto.generateRandomIvNonce();
        const encryptedSaleToPoiMessage = NexoCrypto.crypt(saleToPoiMessageByteArray, derivedKey, ivNonce, Modes.ENCRYPT);
        const encryptedSaleToPoiMessageHmac = NexoCrypto.hmac(saleToPoiMessageByteArray, derivedKey);

        const securityTrailer: SecurityTrailer = {
            adyenCryptoVersion: securityKey.adyenCryptoVersion,
            hmac: encryptedSaleToPoiMessageHmac.toString("base64"),
            keyIdentifier: securityKey.keyIdentifier,
            keyVersion: securityKey.keyVersion,
            nonce: ivNonce.toString("base64"),
        };

        return {
            messageHeader,
            nexoBlob: encryptedSaleToPoiMessage.toString("base64"),
            securityTrailer: securityTrailer,
        };
    }

    public decrypt(saleToPoiSecureMessage: SaleToPoiSecuredMessage, securityKey: SecurityKey): string {
        NexoCrypto.validateSecurityKey(securityKey);

        const encryptedSaleToPoiMessageByteArray = Buffer.from(saleToPoiSecureMessage.nexoBlob, "base64");
        const derivedKey = NexoDerivedKeyGenerator.deriveKeyMaterial(securityKey.passphrase);
        const ivNonce = Buffer.from(saleToPoiSecureMessage.securityTrailer.nonce, "base64");
        const decryptedSaleToPoiMessageByteArray =
            NexoCrypto.crypt(encryptedSaleToPoiMessageByteArray, derivedKey, ivNonce, Modes.DECRYPT);

        const receivedHmac = Buffer.from(saleToPoiSecureMessage.securityTrailer.hmac, "base64");
        this.validateHmac(receivedHmac, decryptedSaleToPoiMessageByteArray, derivedKey);

        return decryptedSaleToPoiMessageByteArray.toString("ascii");
    }

    private static validateSecurityKey(securityKey: SecurityKey): void {
        const isValid = securityKey
            && securityKey.passphrase
            && securityKey.keyIdentifier
            && securityKey.keyVersion
            && securityKey.adyenCryptoVersion;
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

        const isValid = hmac.every((item, index): boolean => item === receivedHmac[index]);

        if (!isValid) {
            throw new NexoCryptoException("Hmac validation failed");
        }
    }
}

export default NexoCrypto;
