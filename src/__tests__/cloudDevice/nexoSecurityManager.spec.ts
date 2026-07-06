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

import { NexoSecurityManager } from "../../security/clouddevice/nexoSecurityManager";
import { NexoSecurityException } from "../../security/clouddevice/nexoSecurityException";
import { EncryptionCredentialDetails } from "../../security/clouddevice/encryptionCredentialDetails";
import { SaleToPOISecuredMessage } from "../../typings/clouddevice/saleToPOISecuredMessage";
import { MessageCategory } from "../../typings/tapi/messageCategory";
import { MessageClass } from "../../typings/tapi/messageClass";
import { MessageType } from "../../typings/tapi/messageType";
import { MessageHeader } from "../../typings/tapi/messageHeader";

const credentials: EncryptionCredentialDetails = {
    adyenCryptoVersion: 1,
    keyIdentifier: "CryptoKeyIdentifier12345",
    keyVersion: 1,
    passphrase: "p@ssw0rd123456",
};

const messageHeader: MessageHeader = {
    ProtocolVersion: "3.0",
    MessageClass: MessageClass.Service,
    MessageCategory: MessageCategory.Payment,
    MessageType: MessageType.Request,
    SaleID: "001",
    ServiceID: "001",
    POIID: "MX915-000000001",
};

const plaintext = '{"SaleToPOIRequest":{"MessageHeader":{}}}';

describe("NexoSecurityManager", () => {
    const invalidCredentials: Array<EncryptionCredentialDetails | null> = [
        null,
        {} as EncryptionCredentialDetails,
        { passphrase: null as unknown as string, keyIdentifier: "k", keyVersion: 1, adyenCryptoVersion: 1 },
        { passphrase: "", keyIdentifier: "k", keyVersion: 1, adyenCryptoVersion: 1 },
        { passphrase: "p", keyIdentifier: null as unknown as string, keyVersion: 1, adyenCryptoVersion: 1 },
        { passphrase: "p", keyIdentifier: "k", keyVersion: null as unknown as number, adyenCryptoVersion: 1 },
        { passphrase: "p", keyIdentifier: "k", keyVersion: 1, adyenCryptoVersion: null as unknown as number },
        { passphrase: "p", keyIdentifier: "k", keyVersion: NaN, adyenCryptoVersion: 1 },
        { passphrase: "p", keyIdentifier: "k", keyVersion: 1, adyenCryptoVersion: NaN },
    ];

    test.each(invalidCredentials)(
        "invalid or incomplete credentials must be rejected in the constructor: %o",
        (creds) => {
            expect(() => new NexoSecurityManager(creds as EncryptionCredentialDetails)).toThrow(NexoSecurityException);
        },
    );

    test("tampered HMAC must cause decryption to throw NexoSecurityException", () => {
        const manager = new NexoSecurityManager(credentials);
        const encrypted: SaleToPOISecuredMessage = manager.encrypt(plaintext, messageHeader);

        encrypted.SecurityTrailer.Hmac = Buffer.from("tampered-hmac-value-000000000000").toString("base64");

        expect(() => manager.decrypt(encrypted)).toThrow(NexoSecurityException);
    });

    test("encrypt then decrypt is internally self-consistent", () => {
        const manager = new NexoSecurityManager(credentials);
        const encrypted: SaleToPOISecuredMessage = manager.encrypt(plaintext, messageHeader);
        const decrypted = manager.decrypt(encrypted);

        expect(decrypted).toBe(plaintext);
    });

    test("decrypt with short nonce must throw NexoSecurityException", () => {
        const manager = new NexoSecurityManager(credentials);
        const encrypted: SaleToPOISecuredMessage = manager.encrypt(plaintext, messageHeader);

        // Replace nonce with a base64-encoded buffer shorter than NEXO_IV_LENGTH (16 bytes)
        encrypted.SecurityTrailer.Nonce = Buffer.alloc(8).toString("base64");

        expect(() => manager.decrypt(encrypted)).toThrow(NexoSecurityException);
    });

    test("decrypt with long nonce must throw NexoSecurityException", () => {
        const manager = new NexoSecurityManager(credentials);
        const encrypted: SaleToPOISecuredMessage = manager.encrypt(plaintext, messageHeader);

        encrypted.SecurityTrailer.Nonce = Buffer.alloc(32).toString("base64");

        expect(() => manager.decrypt(encrypted)).toThrow(NexoSecurityException);
    });

    test("encrypt then decrypt round-trips correctly via JSON serialization", () => {
        const manager = new NexoSecurityManager(credentials);
        const encrypted: SaleToPOISecuredMessage = manager.encrypt(plaintext, messageHeader);

        // Simulate the message travelling over the wire: serialize to JSON then parse back.
        const json = JSON.stringify(encrypted);
        const deserialized: SaleToPOISecuredMessage = JSON.parse(json);

        const decrypted = manager.decrypt(deserialized);
        expect(decrypted).toBe(plaintext);
    });
});
