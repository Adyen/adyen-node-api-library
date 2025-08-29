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

});

describe("should extract PaymentRequest with extractPayloadObject", () => {

  it("should return the correct payload object when one is set", () => {
    const cloudDeviceApiRequest = createCloudDeviceApiRequest();

    const payload = cloudDeviceAPI.extractPayloadObject(cloudDeviceApiRequest.SaleToPOIRequest);

    expect(payload).not.toBeNull();
    expect(payload).toHaveProperty("PaymentRequest");
    expect(payload).not.toHaveProperty("ReversalRequest");
    expect(payload).not.toHaveProperty("MessageHeader");
  });

});
