import nock from "nock";
import { createClient } from "../../__mocks__/base";
import { createCloudDeviceAPIRefundRequest, createCloudDeviceApiRequest } from "../../__mocks__/cloudDeviceApi/baseCloudDeviceApi";
import { asyncResponseError } from "../../__mocks__/cloudDeviceApi/async";
import { syncEncryptedResponse, syncResponse, syncResponseEventNotificationWithAdditionalAttributes, syncResponseEventNotificationWithUnknownEnum, syncResponseRefund } from "../../__mocks__/cloudDeviceApi/sync";
import { connectedDevicesResponse, deviceStatusResponse } from "../../__mocks__/cloudDeviceApi/devices";

import Client from "../../client";
import CloudDeviceAPI, { CLOUD_DEVICE_API_VERSION, CloudDeviceApiError } from "../../services/cloudDevice/cloudDeviceApi";
import { cloudDevice } from "../../typings";
import { EncryptionCredentialDetails } from "../../security/encryptionCredentialDetails";
import { MessageType } from "../../typings/terminal/messageType";


let client: Client;
let cloudDeviceAPI: CloudDeviceAPI;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient(process.env.ADYEN_TERMINAL_APIKEY);

    cloudDeviceAPI = new CloudDeviceAPI(client);
    scope = nock(`${client.config.cloudDeviceApiEndpoint}` + "/" + CLOUD_DEVICE_API_VERSION);
});

afterEach((): void => {
    nock.cleanAll();
});

describe("Cloud device API", (): void => {
    test("should make an async payment request", async (): Promise<void> => {
        scope.post("/merchants/TestMerchantAccount/devices/P400Plus-123456789/async").reply(200, "ok");

        const cloudDeviceApiRequest = createCloudDeviceApiRequest();

        const merchantAccount = "TestMerchantAccount";
        const deviceId = "P400Plus-123456789";
        const response = await cloudDeviceAPI.sendAsync(merchantAccount, deviceId, cloudDeviceApiRequest);

        // verify deviceId is set on request
        expect(cloudDeviceApiRequest.SaleToPOIRequest.MessageHeader.POIID).toBe(deviceId);
        // verify response
        expect(typeof response).toBe("string");
        expect(response).toEqual("ok");

    });

    test("should get an error after async payment request", async (): Promise<void> => {
        scope.post("/merchants/TestMerchantAccount/devices/P400Plus-123456789/async").reply(200, asyncResponseError);

        const cloudDeviceApiRequest = createCloudDeviceApiRequest();

        const merchantAccount = "TestMerchantAccount";
        const deviceId = "P400Plus-123456789";
        const response = await cloudDeviceAPI.sendAsync(merchantAccount, deviceId, cloudDeviceApiRequest);

        // verify deviceId is set on request
        expect(cloudDeviceApiRequest.SaleToPOIRequest.MessageHeader.POIID).toBe(deviceId);
        // verify response
        if (typeof response === "object") {
            expect(response.SaleToPOIRequest?.EventNotification).toBeDefined();
            expect(response.SaleToPOIRequest?.EventNotification?.EventToNotify).toBe("Reject");
        } else {
            throw new Error("Expected structured response, but got raw string");
        }
    });

    test("should make a sync payment request", async (): Promise<void> => {
        scope.post("/merchants/TestMerchantAccount/devices/P400Plus-123456789/sync").reply(200, syncResponse);

        const cloudDeviceApiRequest = createCloudDeviceApiRequest();

        const merchantAccount = "TestMerchantAccount";
        const deviceId = "P400Plus-123456789";
        const response = await cloudDeviceAPI.sendSync(merchantAccount, deviceId, cloudDeviceApiRequest);

        // verify deviceId is set on request
        expect(cloudDeviceApiRequest.SaleToPOIRequest.MessageHeader.POIID).toBe(deviceId);

        expect(response.SaleToPOIResponse).toBeDefined();
        expect(response.SaleToPOIResponse?.PaymentResponse).toBeDefined();
        expect(response.SaleToPOIResponse?.MessageHeader).toBeDefined();

    });

    test("should make a sync payment request with additional attributes", async (): Promise<void> => {
        scope.post("/merchants/TestMerchantAccount/devices/P400Plus-123456789/sync").reply(200, syncResponseEventNotificationWithAdditionalAttributes);

        const cloudDeviceApiRequest = createCloudDeviceApiRequest();

        await expect(async () => {
            const merchantAccount = "TestMerchantAccount";
            const deviceId = "P400Plus-123456789";
            const response = await cloudDeviceAPI.sendSync(merchantAccount, deviceId, cloudDeviceApiRequest);

            // verify deviceId is set on request
            expect(cloudDeviceApiRequest.SaleToPOIRequest.MessageHeader.POIID).toBe(deviceId);

            expect(response.SaleToPOIRequest?.EventNotification).toBeDefined();
            expect(response.SaleToPOIRequest?.MessageHeader).toBeDefined();
        }).not.toThrow();

    });

    test("should return event notification with unknown enum", async (): Promise<void> => {
        scope.post("/merchants/TestMerchantAccount/devices/P400Plus-123456789/sync").reply(200, syncResponseEventNotificationWithUnknownEnum);

        const cloudDeviceApiRequest = createCloudDeviceApiRequest();

        await expect(async () => {
            const merchantAccount = "TestMerchantAccount";
            const deviceId = "P400Plus-123456789";
            const response = await cloudDeviceAPI.sendSync(merchantAccount, deviceId, cloudDeviceApiRequest);

            // verify deviceId is set on request
            expect(cloudDeviceApiRequest.SaleToPOIRequest.MessageHeader.POIID).toBe(deviceId);

            expect(response.SaleToPOIRequest?.EventNotification).toBeDefined();
            // EventToNotify is unknown, so it holds whatever value is found in the payload
            expect(response.SaleToPOIRequest?.EventNotification?.EventToNotify).toBe("this is unknown");

        }).not.toThrow();
    });

    test("should make a sync refund request", async (): Promise<void> => {
        scope.post("/merchants/TestMerchantAccount/devices/P400Plus-123456789/sync").reply(200, syncResponseRefund);

        const transactionIdentification = {
            TimeStamp: "2019-04-29T00:00:00.000Z",
            TransactionID: "4r7i001556529591000.8515565295894301",
        };

        const cloudDeviceApiRequest = createCloudDeviceAPIRefundRequest(transactionIdentification);

        const id = Math.floor(Math.random() * Math.floor(10000000)).toString();
        cloudDeviceApiRequest.SaleToPOIRequest.MessageHeader.ServiceID = id;
        const saleToAcquirerData: cloudDevice.SaleToAcquirerData = new cloudDevice.SaleToAcquirerData();
        saleToAcquirerData.currency = "EUR";
        cloudDeviceApiRequest.SaleToPOIRequest.ReversalRequest!.SaleData!.SaleToAcquirerData = saleToAcquirerData;

        const merchantAccount = "TestMerchantAccount";
        const deviceId = "P400Plus-123456789";
        const response = await cloudDeviceAPI.sendSync(merchantAccount, deviceId, cloudDeviceApiRequest);

        // verify deviceId is set on request
        expect(cloudDeviceApiRequest.SaleToPOIRequest.MessageHeader.POIID).toBe(deviceId);

        expect(response.SaleToPOIResponse?.ReversalResponse?.Response.Result).toBe("Success");
    }, 20000);

    test("should get connected devices", async (): Promise<void> => {
        const merchantAccount = "TestMerchantAccount";
        scope.get(`/merchants/${merchantAccount}/connectedDevices`).reply(200, connectedDevicesResponse);

        const response = await cloudDeviceAPI.getConnectedDevices(merchantAccount);

        expect(response.uniqueDeviceIds).toBeDefined();
        expect(response.uniqueDeviceIds?.length).toBe(6);
    });

    test("should get connected devices for a given store", async (): Promise<void> => {
        const merchantAccount = "TestMerchantAccount";
        const store = "TestStore";
        scope.get(`/merchants/${merchantAccount}/connectedDevices?store=${store}`).reply(200, connectedDevicesResponse);

        const response = await cloudDeviceAPI.getConnectedDevices(merchantAccount, store);

        expect(response.uniqueDeviceIds).toBeDefined();
        expect(response.uniqueDeviceIds?.length).toBe(6);
    });

    test("should get device status", async (): Promise<void> => {
        const merchantAccount = "TestMerchantAccount";
        const deviceId = "AMS1-000168242800763";
        scope.get(`/merchants/${merchantAccount}/devices/${deviceId}/status`).reply(200, deviceStatusResponse);

        const response = await cloudDeviceAPI.getDeviceStatus(merchantAccount, deviceId);

        expect(response).toBeDefined();
        expect(response.deviceId).toEqual(deviceId);
        expect(response.status).toEqual(cloudDevice.DeviceStatusResponse.StatusEnum.ONLINE);
    });

    test("should make an encrypted async request", async (): Promise<void> => {
        scope.post("/merchants/TestMerchantAccount/devices/P400Plus-123456789/async").reply(200, "ok");
        const merchantAccount = "TestMerchantAccount";
        const deviceId = "P400Plus-123456789";

        const cloudDeviceApiSecuredRequest = createCloudDeviceApiRequest();

        const encryptionCredentialDetails: EncryptionCredentialDetails = {
            AdyenCryptoVersion: 0,
            KeyIdentifier: "CryptoKeyIdentifier12345",
            KeyVersion: 0,
            Passphrase: "p@ssw0rd123456",
        };

        const response = await cloudDeviceAPI.sendEncryptedAsync(merchantAccount, deviceId, cloudDeviceApiSecuredRequest, encryptionCredentialDetails);

        expect(response).toBeDefined();
        expect(response).toEqual("ok");
    });

    test("should make an encrypted sync request", async (): Promise<void> => {
        scope.post("/merchants/TestMerchantAccount/devices/MX915-284251016/sync").reply(200, syncEncryptedResponse);
        const merchantAccount = "TestMerchantAccount";
        const deviceId = "MX915-284251016";

        const cloudDeviceApiSecuredRequest = createCloudDeviceApiRequest();

        const encryptionCredentialDetails: EncryptionCredentialDetails = {
            AdyenCryptoVersion: 0,
            KeyIdentifier: "CryptoKeyIdentifier12345",
            KeyVersion: 0,
            Passphrase: "p@ssw0rd123456",
        };

        const response = await cloudDeviceAPI.sendEncryptedSync(merchantAccount, deviceId, cloudDeviceApiSecuredRequest, encryptionCredentialDetails);

        expect(response).toBeDefined();
        expect(response.SaleToPOIResponse?.MessageHeader).toBeDefined();
        expect(response.SaleToPOIResponse?.MessageHeader.MessageType).toBe(MessageType.Response);
        expect(response.SaleToPOIResponse?.PaymentResponse).toBeDefined();
        expect(response.SaleToPOIResponse?.PaymentResponse?.Response.Result).toBe("Success");
        // verify deviceId is set on request
        expect(cloudDeviceApiSecuredRequest.SaleToPOIRequest.MessageHeader.POIID).toBe(deviceId);

    });

    test("should throw CloudDeviceApiError when request fails", async (): Promise<void> => {
        scope.post("/merchants/TestMerchantAccount/devices/P400Plus-123456789/sync").replyWithError("timeout");

        const merchantAccount = "TestMerchantAccount";
        const deviceId = "P400Plus-123456789";

        const cloudDeviceApiSecuredRequest = createCloudDeviceApiRequest();

        const encryptionCredentialDetails: EncryptionCredentialDetails = {
            AdyenCryptoVersion: 0,
            KeyIdentifier: "CryptoKeyIdentifier12345",
            KeyVersion: 0,
            Passphrase: "invalid passphrase",
        };

        await expect(
            cloudDeviceAPI.sendEncryptedAsync(
                merchantAccount,
                deviceId,
                cloudDeviceApiSecuredRequest,
                encryptionCredentialDetails
            )
        ).rejects.toThrow(CloudDeviceApiError);
    });

    test("should decrypt event notification", async (): Promise<void> => {

        const encryptionCredentialDetails: EncryptionCredentialDetails = {
            AdyenCryptoVersion: 1,
            KeyIdentifier: "ncrkey",
            KeyVersion: 1,
            Passphrase: "ncrpass",
        };

        // encrypted notification (SaleToPOIRequest) sent by the terminal
        const encryptedNotification = `{
            "SaleToPOIRequest": {
                "SecurityTrailer": {
                    "AdyenCryptoVersion": 1,
                    "Nonce": "Be6rAx+vRju2aCHwPh6lrg==",
                    "KeyIdentifier": "ncrkey",
                    "Hmac": "LG8A9Re1M8xLMr7rDUk0NwsnvAOX+VLjHv9sPHWTl34=",
                    "KeyVersion": 1
                },
                "NexoBlob": "x2DY8J2M9ZCyjOZ8Gt7JdLBA/6bT/KXvvAbJf9kzguqO8dWp1I1pPLQpLstpdIiAVqSwG3PR0PrP/lF82UmhmCnUJGCuEXilqvBNF1tF/yEgnFOklNc1myR2IPW/+2oZOWKFXlTo/gX89EbODXOOGUqaJfSdpDhlqjyMz7mGczobTPvPGqCVx2BDHU8VTxI9nicwQv+QV48GqVZzxnP8ZOdQOQ5cac+bcS0Y3l7SmWpIoQsoicnjahTY9ICosLJmN4DvDHsN4Kh2DAetFO5b9I9Lqgm/dvnXUVhb9tPbM7Pn+ratjYpaNbonbO5M+Tm8rDEIyKoUUuFXPWISymrCXtCDVKEb2B5S5pilUmokrXVa9Ldtsv3BKG7rbrglYEuql4WVs6kzr6ybgAKh1Q0LsAXEve3pydt72ay4U3FOJSBxJ3gNqmnG8mVW2HCXQVo1RgVaZmP5TBWYuksCKXYypnMulu1PlRI++oeW/J2qjQU=",
                "MessageHeader": {
                    "ProtocolVersion": "3.0",
                    "SaleID": "null",
                    "MessageClass": "Event",
                    "MessageCategory": "Event",
                    "POIID": "P400Plus-275102806",
                    "MessageType": "Notification",
                    "DeviceID": "5"
                }
            }
        }`;

        // expected notification (SaleToPOIRequest) sent by the terminal
        const expectedDecryption = `{
            "SaleToPOIRequest": {
                "EventNotification": {
                    "EventDetails": "reference_id=9876",
                    "TimeStamp": "2020-11-13T09:02:35.697Z",
                    "EventToNotify": "SaleWakeUp"
                },
                "MessageHeader": {
                    "ProtocolVersion": "3.0",
                    "SaleID": "null",
                    "MessageClass": "Event",
                    "MessageCategory": "Event",
                    "POIID": "P400Plus-275102806",
                    "MessageType": "Notification",
                    "DeviceID": "5" 
                } 
            } 
        }`;

        const decryptedEventNotification = cloudDeviceAPI.decryptNotification(encryptedNotification, encryptionCredentialDetails);

        expect(JSON.parse(decryptedEventNotification)).toEqual(JSON.parse(expectedDecryption));

    });

    test("should decrypt an async response", async (): Promise<void> => {

        const encryptionCredentialDetails: EncryptionCredentialDetails = {
            AdyenCryptoVersion: 1,
            KeyIdentifier: "Key123456789crypt",
            KeyVersion: 1,
            Passphrase: "P@ssw0rd123456",
        };

        // encrypted async respomse (SaleToPOIResponse) 
        const payload = `{
            "SaleToPOIResponse": {
                "MessageHeader": {
                    "MessageCategory": "Payment",
                    "MessageClass": "Service",
                    "MessageType": "Response",
                    "POIID": "V400m-347374578",
                    "ProtocolVersion": "3.0",
                    "SaleID": "6167012",
                    "ServiceID": "6167012"
                },
                "NexoBlob": "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",
                "SecurityTrailer": {
                    "AdyenCryptoVersion": 1,
                    "Hmac": "6B8R+dZyeUFDWAr46hVWb6nB6IbfmKzomAqw1vv8uns=",
                    "KeyIdentifier": "Key123456789crypt",
                    "KeyVersion": 1,
                    "Nonce": "oaOGhOiNdT6qz3pI5afHBg=="
                }
            }
        }`;

        const decryptedEventNotification = cloudDeviceAPI.decryptNotification(payload, encryptionCredentialDetails);

        const res = JSON.parse(decryptedEventNotification);
        expect(res.SaleToPOIResponse).toBeDefined();
        expect(res.SaleToPOIResponse.MessageHeader).toBeDefined();
        expect(res.SaleToPOIResponse.MessageHeader.POIID).toBe("V400m-347374578");

        expect(res.SaleToPOIResponse.PaymentResponse).toBeDefined();
        expect(res.SaleToPOIResponse.PaymentResponse.PaymentResult).toBeDefined();
        expect(res.SaleToPOIResponse.PaymentResponse.PaymentResult.CustomerLanguage).toBe("en");

    });

});

describe("should build the expected CloudDeviceAPI endpoints", () => {

    it("should return the sync endpoint", () => {
        const endpoint = cloudDeviceAPI.getSyncEndpoint("TestMerchantAccount", "P400Plus-123456789");
        expect(endpoint).toBe("https://device-api-test.adyen.com/v1/merchants/TestMerchantAccount/devices/P400Plus-123456789/sync");
    });

    it("should return the async endpoint", () => {
        const endpoint = cloudDeviceAPI.getAsyncEndpoint("TestMerchantAccount", "P400Plus-123456789");
        expect(endpoint).toBe("https://device-api-test.adyen.com/v1/merchants/TestMerchantAccount/devices/P400Plus-123456789/async");
    });

    it("should return the connected devices endpoint", () => {
        const endpoint = cloudDeviceAPI.getConnectedDevicesEndpoint("TestMerchantAccount");
        expect(endpoint).toBe("https://device-api-test.adyen.com/v1/merchants/TestMerchantAccount/connectedDevices");
    });

    it("should return the device status endpoint", () => {
        const endpoint = cloudDeviceAPI.getDeviceStatusEndpoint("TestMerchantAccount", "P400Plus-123456789");
        expect(endpoint).toBe("https://device-api-test.adyen.com/v1/merchants/TestMerchantAccount/devices/P400Plus-123456789/status");
    });

});
