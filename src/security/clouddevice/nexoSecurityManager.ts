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

import { MessageHeader } from "../../typings/tapi/messageHeader";
import { NexoDerivedKey } from "../../typings/clouddevice/security/nexoDerivedKey";
import { SaleToPOISecuredMessage } from "../../typings/clouddevice/saleToPOISecuredMessage";
import { EncryptionCredentialDetails } from "./encryptionCredentialDetails";
import { NexoSecurityException } from "./nexoSecurityException";
import { deriveKeyMaterial } from "./nexoDerivedKeyGenerator";
import { crypt, hmac, validateHmac, generateRandomIvNonce } from "./nexoCryptoPrimitives";

/**
 * Handles encryption, decryption, and integrity validation for Cloud Device API
 * SaleToPOI messages using AES-256-CBC and HMAC-SHA256.
 */
export class NexoSecurityManager {
    private readonly credentials: EncryptionCredentialDetails;
    private derivedKey: NexoDerivedKey | null = null;

    public constructor(credentials: EncryptionCredentialDetails) {
        validateCredentials(credentials);
        this.credentials = credentials;
    }

    /**
     * Encrypts the SaleToPOI message using the provided message header and credential details.
     */
    public encrypt(saleToPoiMessageJson: string, messageHeader: MessageHeader): SaleToPOISecuredMessage {
        try {
            const dk = this.getDerivedKey();
            const messageBytes = Buffer.from(saleToPoiMessageJson, "utf-8");
            const ivNonce = generateRandomIvNonce();
            const encryptedBytes = crypt(messageBytes, dk, ivNonce, "encrypt");
            const hmacBytes = hmac(messageBytes, dk);

            return {
                MessageHeader: messageHeader,
                NexoBlob: encryptedBytes.toString("base64"),
                SecurityTrailer: {
                    AdyenCryptoVersion: this.credentials.adyenCryptoVersion,
                    KeyIdentifier: this.credentials.keyIdentifier,
                    KeyVersion: this.credentials.keyVersion,
                    Nonce: ivNonce.toString("base64"),
                    Hmac: hmacBytes.toString("base64"),
                },
            };
        } catch (e) {
            if (e instanceof NexoSecurityException) throw e;
            throw new NexoSecurityException("Cannot encrypt the SaleToPOISecuredMessage", e as Error);
        }
    }

    /**
     * Decrypts a SaleToPOI secured message and returns the plaintext JSON string.
     */
    public decrypt(secured: SaleToPOISecuredMessage): string {
        try {
            const dk = this.getDerivedKey();
            const encryptedBytes = Buffer.from(secured.NexoBlob, "base64");
            const ivNonce = Buffer.from(secured.SecurityTrailer.Nonce, "base64");
            const decryptedBytes = crypt(encryptedBytes, dk, ivNonce, "decrypt");
            const receivedHmac = Buffer.from(secured.SecurityTrailer.Hmac, "base64");
            validateHmac(receivedHmac, decryptedBytes, dk);
            return decryptedBytes.toString("utf-8");
        } catch {
            // Emit a single, generic error for every failure mode (padding, HMAC, nonce, decoding).
            // Distinguishable errors would reintroduce a CBC padding-oracle side channel.
            throw new NexoSecurityException("Decryption of the SaleToPOISecuredMessage failed");
        }
    }

    private getDerivedKey(): NexoDerivedKey {
        if (!this.derivedKey) {
            this.derivedKey = deriveKeyMaterial(this.credentials.passphrase);
        }
        return this.derivedKey;
    }
}

function validateCredentials(credentials: EncryptionCredentialDetails): void {
    if (
        !credentials ||
        !credentials.passphrase ||
        !credentials.keyIdentifier ||
        !Number.isFinite(credentials.keyVersion) ||
        !Number.isFinite(credentials.adyenCryptoVersion)
    ) {
        throw new NexoSecurityException("Invalid Security Key");
    }
}
