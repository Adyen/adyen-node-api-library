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

import NexoSecurityManager from "../../security/nexoSecurityManager";
import { EncryptionCredentialDetails } from "../../security/encryptionCredentialDetails";
import { MessageHeader, SaleToPOISecuredMessage, MessageCategoryType, MessageClassType, MessageType, CloudDeviceApiRequest, PaymentRequest} from "../../typings/cloudDevice/models";
import InvalidSecurityKeyException from "../../security/exception/invalidSecurityKeyException";
import NexoCryptoException from "../../services/exception/nexoCryptoException";

describe("NexoSecurityManager", (): void => {
    const credentials: EncryptionCredentialDetails = {
        KeyIdentifier: "SpecTest",
        KeyVersion: 1,
        Passphrase: "spec-test-passphrase",
        AdyenCryptoVersion: 1,
    };

    const messageHeader: MessageHeader = {
        MessageCategory: MessageCategoryType.Payment,
        MessageClass: MessageClassType.Service,
        MessageType: MessageType.Request,
        POIID: "P400Plus-123456789",
        ProtocolVersion: "3.0",
        SaleID: "001",
        ServiceID: "001",
    };

    const paymentRequest: PaymentRequest = {
        PaymentTransaction: {
            AmountsReq: {
                Currency: "EUR",
                RequestedAmount: 1,
            },
        },
        SaleData: {
            SaleTransactionID: {
                TimeStamp: "2025-09-11T08:51:30.698Z",
                TransactionID: "123456789",
            },
            SaleToAcquirerData: {
                applicationInfo: {
                    merchantApplication: {
                        version: "1",
                        name: "test"
                    }
                },
            }
        },
    };

    const cloudDeviceApiRequest: CloudDeviceApiRequest = {
        SaleToPOIRequest: {
            MessageHeader: messageHeader,
            PaymentRequest: paymentRequest,
        },
    };

    const payload: string = JSON.stringify(cloudDeviceApiRequest)

    it("should encrypt and decrypt a message successfully", (): void => {
        // Encrypt
        const securedMessage: SaleToPOISecuredMessage = NexoSecurityManager.encrypt(
            messageHeader,
            payload,
            credentials,
        );

        expect(securedMessage).toBeDefined();
        expect(securedMessage.MessageHeader).toEqual(messageHeader);
        expect(securedMessage.NexoBlob).toBeDefined();
        expect(typeof securedMessage.NexoBlob).toBe("string");
        expect(securedMessage.SecurityTrailer).toBeDefined();
        expect(securedMessage.SecurityTrailer.KeyIdentifier).toBe(credentials.KeyIdentifier);
        expect(securedMessage.SecurityTrailer.KeyVersion).toBe(credentials.KeyVersion);
        expect(securedMessage.SecurityTrailer.AdyenCryptoVersion).toBe(credentials.AdyenCryptoVersion);
        expect(typeof securedMessage.SecurityTrailer.Hmac).toBe("string");
        expect(typeof securedMessage.SecurityTrailer.Nonce).toBe("string");

        // Decrypt
        const decryptedJson = NexoSecurityManager.decrypt(securedMessage, credentials);

        expect(decryptedJson).toBe(payload);
    });

    it("should throw InvalidSecurityKeyException on decrypt with invalid credentials", (): void => {
        const invalidCredentials: any[] = [
            {},
            { ...credentials, Passphrase: "" },
            { ...credentials, KeyIdentifier: "" },
            { ...credentials, KeyVersion: NaN },
            { ...credentials, AdyenCryptoVersion: NaN },
            null,
            undefined,
        ];

        const securedMessage: SaleToPOISecuredMessage = NexoSecurityManager.encrypt(
            messageHeader,
            payload,
            credentials,
        );

        invalidCredentials.forEach((cred): void => {
            expect((): string => NexoSecurityManager.decrypt(securedMessage, cred)).toThrow(
                new InvalidSecurityKeyException("Invalid Encryption Credentials")
            );
        });


    });

    it("should throw NexoCryptoException on decrypt with wrong HMAC", (): void => {
        const securedMessage: SaleToPOISecuredMessage = NexoSecurityManager.encrypt(
            messageHeader,
            payload,
            credentials,
        );

        // Tamper with the HMAC
        const tamperedMessage = {
            ...securedMessage,
            SecurityTrailer: {
                ...securedMessage.SecurityTrailer,
                Hmac: "dGFtcGVyZWRIbWFj", // "tamperedHmac" in base64
            },
        };

        expect((): string => NexoSecurityManager.decrypt(tamperedMessage, credentials))
            .toThrow(NexoCryptoException);
    });

    it("should throw NexoCryptoException on decrypt with wrong passphrase", (): void => {
        const securedMessage: SaleToPOISecuredMessage = NexoSecurityManager.encrypt(
            messageHeader,
            payload,
            credentials,
        );

        const wrongCredentials = {
            ...credentials,
            Passphrase: "wrong-passphrase",
        };

        expect((): string => NexoSecurityManager.decrypt(securedMessage, wrongCredentials))
            .toThrow(NexoCryptoException);

    });
});