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

import nock from "nock";
import * as fs from "fs";
import * as path from "path";
import { createClient } from "../../__mocks__/base";
import Client from "../../client";
import { EncryptedCloudDeviceApi } from "../../services/clouddevice/encryptedCloudDeviceApi";
import { EncryptionCredentialDetails } from "../../security/clouddevice/encryptionCredentialDetails";
import { NexoSecurityManager } from "../../security/clouddevice/nexoSecurityManager";
import { NexoSecurityException } from "../../security/clouddevice/nexoSecurityException";
import { CloudDeviceApiRequest } from "../../typings/clouddevice/cloudDeviceApiRequest";
import { CloudDeviceApiSecuredRequest } from "../../typings/clouddevice/cloudDeviceApiSecuredRequest";
import { SaleToPOIRequest } from "../../typings/tapi/saleToPOIRequest";
import { MessageCategory } from "../../typings/tapi/messageCategory";
import { MessageClass } from "../../typings/tapi/messageClass";
import { MessageType } from "../../typings/tapi/messageType";

import paymentSyncEncryptedSuccess from "../../__mocks__/clouddevice/payment-sync-encrypted-success.json";
import paymentSyncError from "../../__mocks__/clouddevice/payment-sync-error.json";
import paymentAsyncError from "../../__mocks__/clouddevice/payment-async-error.json";

const BASE_URL = "https://device-api-test.adyen.com/v1";
const merchantAccount = "TestMerchantAccount";
const deviceId = "MX915-284251016";

const DEFAULT_CREDENTIALS: EncryptionCredentialDetails = {
    adyenCryptoVersion: 0,
    keyIdentifier: "CryptoKeyIdentifier12345",
    keyVersion: 0,
    passphrase: "p@ssw0rd123456",
};

function createCloudDeviceApiPaymentRequest(): CloudDeviceApiRequest {
    const saleToPOIRequest: SaleToPOIRequest = {
        MessageHeader: {
            ProtocolVersion: "3.0",
            MessageClass: MessageClass.Service,
            MessageCategory: MessageCategory.Payment,
            MessageType: MessageType.Request,
            SaleID: "001",
            ServiceID: "001",
            POIID: deviceId,
        },
        PaymentRequest: {
            SaleData: {
                SaleTransactionID: {
                    TransactionID: "001",
                    TimeStamp: new Date(),
                },
            },
            PaymentTransaction: {
                AmountsReq: {
                    Currency: "EUR",
                    RequestedAmount: 1,
                },
            },
        },
    };
    return { SaleToPOIRequest: saleToPOIRequest };
}

let client: Client;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    scope = nock(BASE_URL);
});

afterEach(() => {
    nock.cleanAll();
});

describe("EncryptedCloudDeviceApi", () => {
    test("sendEncryptedSync - encrypts request and decrypts response", async () => {
        let capturedBody = "";
        nock(BASE_URL)
            .post(`/merchants/${merchantAccount}/devices/${deviceId}/sync`, (body) => {
                capturedBody = JSON.stringify(body);
                return true;
            })
            .reply(200, paymentSyncEncryptedSuccess);

        const api = new EncryptedCloudDeviceApi(client, DEFAULT_CREDENTIALS);
        const request = createCloudDeviceApiPaymentRequest();
        const response = await api.sync(merchantAccount, deviceId, request);

        expect(response).toBeDefined();
        expect(response.SaleToPOIResponse).toBeDefined();
        expect(response.SaleToPOIResponse?.MessageHeader?.POIID).toBe(deviceId);
        expect(capturedBody).toContain("NexoBlob");
    });

    test("sendEncryptedAsync - encrypts request and returns ok", async () => {
        scope
            .post(`/merchants/${merchantAccount}/devices/${deviceId}/async`)
            .reply(200, "ok");

        const api = new EncryptedCloudDeviceApi(client, DEFAULT_CREDENTIALS);
        const request = createCloudDeviceApiPaymentRequest();
        const response = await api.async(merchantAccount, deviceId, request);

        expect(response).toBeDefined();
        expect(response.Result).toBe("ok");
        expect(response.SaleToPOIRequest).toBeUndefined();
    });

    test("asyncEncryptedEventNotification - decrypts encrypted error from terminal", async () => {
        const manager = new NexoSecurityManager(DEFAULT_CREDENTIALS);

        const plaintextJson = JSON.stringify({
            SaleToPOIRequest: {
                MessageHeader: {
                    MessageCategory: "Event",
                    POIID: deviceId,
                },
            },
        });

        const encryptedMessage = manager.encrypt(plaintextJson, {
            MessageClass: MessageClass.Event,
            MessageCategory: MessageCategory.Event,
            MessageType: MessageType.Notification,
            SaleID: "sale-001",
            ServiceID: "svc-001",
            POIID: deviceId,
        });

        const encryptedRequest: CloudDeviceApiSecuredRequest = { SaleToPOIRequest: encryptedMessage };

        scope
            .post(`/merchants/${merchantAccount}/devices/${deviceId}/async`)
            .reply(200, encryptedRequest);

        const api = new EncryptedCloudDeviceApi(client, DEFAULT_CREDENTIALS);
        const request = createCloudDeviceApiPaymentRequest();
        const response = await api.async(merchantAccount, deviceId, request);

        expect(response).toBeDefined();
        expect(response.Result).toBeUndefined();
        expect(response.SaleToPOIRequest).toBeDefined();
        expect(response.SaleToPOIRequest?.MessageHeader?.POIID).toBe(deviceId);
    });

    test("decryptNotification - decrypts SaleToPOIResponse encrypted notification", async () => {
        const api = new EncryptedCloudDeviceApi(client, {
            adyenCryptoVersion: 1,
            keyIdentifier: "Key123456789crypt",
            keyVersion: 1,
            passphrase: "P@ssw0rd123456",
        });

        const payload = fs.readFileSync(
            path.join(__dirname, "../../__mocks__/clouddevice/encrypted-event-notification.json"),
            "utf-8",
        );

        const result = api.decryptNotification(payload);

        expect(result).toBeDefined();
        expect(result).not.toContain("NexoBlob");
        expect(result).toContain("PaymentResponse");
    });

    test("syncUnencryptedErrorResponse - returns unencrypted error as-is", async () => {
        scope
            .post(`/merchants/${merchantAccount}/devices/${deviceId}/sync`)
            .reply(200, paymentSyncError);

        const api = new EncryptedCloudDeviceApi(client, DEFAULT_CREDENTIALS);
        const request = createCloudDeviceApiPaymentRequest();
        const response = await api.sync(merchantAccount, deviceId, request);

        expect(response).toBeDefined();
        expect(response.SaleToPOIResponse).toBeDefined();
        expect(response.SaleToPOIResponse?.PaymentResponse?.Response?.Result).toBe("Failure");
        expect(response.SaleToPOIResponse?.PaymentResponse?.Response?.ErrorCondition).toBe("UnreachableHost");
    });

    test("asyncUnencryptedErrorResponse - returns unencrypted error as-is", async () => {
        scope
            .post(`/merchants/${merchantAccount}/devices/${deviceId}/async`)
            .reply(200, paymentAsyncError);

        const api = new EncryptedCloudDeviceApi(client, DEFAULT_CREDENTIALS);
        const request = createCloudDeviceApiPaymentRequest();
        const response = await api.async(merchantAccount, deviceId, request);

        expect(response).toBeDefined();
        expect(response.Result).toBeUndefined();
        expect(response.SaleToPOIRequest).toBeDefined();
        expect(response.SaleToPOIRequest?.MessageHeader).toBeDefined();
    });

    test("decryptNotificationInvalidPayload - throws NexoSecurityException", () => {
        const api = new EncryptedCloudDeviceApi(client, {
            adyenCryptoVersion: 1,
            keyIdentifier: "Key123456789crypt",
            keyVersion: 1,
            passphrase: "P@ssw0rd123456",
        });

        expect(() => api.decryptNotification("{...}")).toThrow(NexoSecurityException);
    });

    test("decryptNotificationSaleToPOIRequest - decrypts SaleToPOIRequest envelope", () => {
        const creds: EncryptionCredentialDetails = {
            adyenCryptoVersion: 1,
            keyIdentifier: "CryptoKeyIdentifier12345",
            keyVersion: 1,
            passphrase: "p@ssw0rd123456",
        };
        const api = new EncryptedCloudDeviceApi(client, creds);
        const manager = new NexoSecurityManager(creds);

        const plaintextJson = JSON.stringify({
            SaleToPOIRequest: { MessageHeader: { MessageCategory: "Event" } },
        });

        const encryptedMessage = manager.encrypt(plaintextJson, {
            MessageClass: MessageClass.Event,
            MessageCategory: MessageCategory.Event,
            MessageType: MessageType.Notification,
            SaleID: "sale-001",
            ServiceID: "svc-001",
            POIID: "MX915-000000001",
        });

        const securedRequest: CloudDeviceApiSecuredRequest = { SaleToPOIRequest: encryptedMessage };
        const decrypted = api.decryptNotification(JSON.stringify(securedRequest));

        expect(decrypted).toBeDefined();
        expect(decrypted).not.toContain("NexoBlob");
        expect(decrypted).toContain("MessageHeader");
    });

    test("syncEncryptedSetsPoiIdInEncryptedPayload - POIID is set to deviceId inside blob", async () => {
        scope
            .post(`/merchants/${merchantAccount}/devices/${deviceId}/sync`)
            .reply(200, paymentSyncEncryptedSuccess);

        const api = new EncryptedCloudDeviceApi(client, DEFAULT_CREDENTIALS);
        const manager = new NexoSecurityManager(DEFAULT_CREDENTIALS);

        let capturedBody: CloudDeviceApiSecuredRequest | null = null;
        nock.cleanAll();
        nock(BASE_URL)
            .post(`/merchants/${merchantAccount}/devices/${deviceId}/sync`, (body) => {
                capturedBody = body as CloudDeviceApiSecuredRequest;
                return true;
            })
            .reply(200, paymentSyncEncryptedSuccess);

        const request = createCloudDeviceApiPaymentRequest();
        request.SaleToPOIRequest.MessageHeader.POIID = "";
        await api.sync(merchantAccount, deviceId, request);

        expect(capturedBody).not.toBeNull();
        const decrypted = manager.decrypt(capturedBody!.SaleToPOIRequest);
        expect(decrypted).toContain(`"POIID":"${deviceId}"`);
    });

    test("asyncEncryptedSetsPoiIdInEncryptedPayload - POIID is set to deviceId inside blob", async () => {
        scope
            .post(`/merchants/${merchantAccount}/devices/${deviceId}/async`)
            .reply(200, "ok");

        const api = new EncryptedCloudDeviceApi(client, DEFAULT_CREDENTIALS);
        const manager = new NexoSecurityManager(DEFAULT_CREDENTIALS);

        let capturedBody: CloudDeviceApiSecuredRequest | null = null;
        nock.cleanAll();
        nock(BASE_URL)
            .post(`/merchants/${merchantAccount}/devices/${deviceId}/async`, (body) => {
                capturedBody = body as CloudDeviceApiSecuredRequest;
                return true;
            })
            .reply(200, "ok");

        const request = createCloudDeviceApiPaymentRequest();
        request.SaleToPOIRequest.MessageHeader.POIID = "";
        await api.async(merchantAccount, deviceId, request);

        expect(capturedBody).not.toBeNull();
        const decrypted = manager.decrypt(capturedBody!.SaleToPOIRequest);
        expect(decrypted).toContain(`"POIID":"${deviceId}"`);
    });

    test("constructor throws NexoSecurityException for invalid credentials", () => {
        expect(() => new EncryptedCloudDeviceApi(client, {
            adyenCryptoVersion: 0,
            keyIdentifier: "",
            keyVersion: 0,
            passphrase: "",
        })).toThrow(NexoSecurityException);
    });
});
