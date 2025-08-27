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
 * Copyright (c) 2025 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

import { Cipher, createCipheriv, createDecipheriv, createHmac, randomBytes, timingSafeEqual } from "crypto";
import NexoCryptoException from "../services/exception/nexoCryptoException";
import {
    MessageHeader,
    NexoDerivedKey,
    SaleToPOISecuredMessage,
    SecurityTrailer,
} from "../typings/terminal/models";
import { EncryptionCredentialDetails } from "./encryptionCredentialDetails";
import InvalidSecurityKeyException from "./exception/invalidSecurityKeyException";
import NexoDerivedKeyGenerator from "./nexoDerivedKeyGenerator";
import { NexoEnum } from "../constants/nexoConstants";

enum Modes {
    ENCRYPT,
    DECRYPT,
}

/**
 * Handles encryption, decryption, and integrity validation
 * for Nexo SaleToPOI messages using AES and HMAC.
 *
 * - Derives keys from {@link EncryptionCredentialDetails}
 * - Encrypts and decrypts Nexo messages (AES-256-CBC)
 * - Generates and validates HMAC (SHA-256)
 * - Constructs and validates {@link SecurityTrailer}
 */
class NexoSecurityManager {
    /**
     * Encrypts a SaleToPOI message.
     *
     * @param messageHeader - The Nexo message header
     * @param saleToPoiMessageJson - The message body in JSON string format
     * @param credentials - The encryption credentials
     * @returns A secured SaleToPOI message with encrypted payload and security trailer
     */
    public static encrypt(
        messageHeader: MessageHeader,
        saleToPoiMessageJson: string,
        credentials: EncryptionCredentialDetails,
    ): SaleToPOISecuredMessage {
        const derivedKey: NexoDerivedKey = NexoDerivedKeyGenerator.deriveKeyMaterial(credentials.Passphrase);
        const saleToPoiMessageByteArray = Buffer.from(saleToPoiMessageJson, "utf-8");
        const ivNonce = NexoSecurityManager.generateRandomIvNonce();
        const encryptedSaleToPoiMessage = NexoSecurityManager.crypt(
            saleToPoiMessageByteArray,
            derivedKey,
            ivNonce,
            Modes.ENCRYPT,
        );
        const encryptedSaleToPoiMessageHmac = NexoSecurityManager.hmac(saleToPoiMessageByteArray, derivedKey);

        const securityTrailer: SecurityTrailer = {
            AdyenCryptoVersion: credentials.AdyenCryptoVersion,
            Hmac: encryptedSaleToPoiMessageHmac.toString("base64"),
            KeyIdentifier: credentials.KeyIdentifier,
            KeyVersion: credentials.KeyVersion,
            Nonce: ivNonce.toString("base64"),
        };

        return {
            MessageHeader: messageHeader,
            NexoBlob: encryptedSaleToPoiMessage.toString("base64"),
            SecurityTrailer: securityTrailer,
        };
    }

    /**
     * Decrypts a secured SaleToPOI message and validates its HMAC.
     *
     * @param saleToPoiSecureMessage - The secured message to decrypt
     * @param credentials - The encryption credentials
     * @throws {InvalidSecurityKeyException} If the credentials are invalid
     * @throws {NexoCryptoException} If HMAC validation fails
     * @returns The decrypted SaleToPOI message as a UTF-8 string
     */
    public static decrypt(
        saleToPoiSecureMessage: SaleToPOISecuredMessage,
        credentials: EncryptionCredentialDetails,
    ): string {
        NexoSecurityManager.validateEncryptionCredentials(credentials);

        const encryptedSaleToPoiMessageByteArray = Buffer.from(saleToPoiSecureMessage.NexoBlob, "base64");
        const derivedKey = NexoDerivedKeyGenerator.deriveKeyMaterial(credentials.Passphrase);
        const ivNonce = Buffer.from(saleToPoiSecureMessage.SecurityTrailer.Nonce, "base64");
        const decryptedSaleToPoiMessageByteArray = NexoSecurityManager.crypt(
            encryptedSaleToPoiMessageByteArray,
            derivedKey,
            ivNonce,
            Modes.DECRYPT,
        );

        const receivedHmac = Buffer.from(saleToPoiSecureMessage.SecurityTrailer.Hmac, "base64");
        NexoSecurityManager.validateHmac(receivedHmac, decryptedSaleToPoiMessageByteArray, derivedKey);

        return decryptedSaleToPoiMessageByteArray.toString("utf-8");
    }

    private static validateEncryptionCredentials(credentials: EncryptionCredentialDetails): void {
        const isValid =
            credentials &&
            credentials.Passphrase &&
            credentials.KeyIdentifier &&
            !isNaN(credentials.KeyVersion) &&
            !isNaN(credentials.AdyenCryptoVersion);
        if (!isValid) {
            throw new InvalidSecurityKeyException("Invalid Encryption Credentials");
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

    private static validateHmac(receivedHmac: Buffer, decryptedMessage: Buffer, derivedKey: NexoDerivedKey): void {
        const hmac = NexoSecurityManager.hmac(decryptedMessage, derivedKey);

        if (!timingSafeEqual(hmac, receivedHmac)) {
            throw new NexoCryptoException("Hmac validation failed");
        }
    }
}

export default NexoSecurityManager;
