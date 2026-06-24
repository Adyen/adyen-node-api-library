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
import { createClient } from "../__mocks__/base";
import Client from "../client";
import { CloudDeviceAPI } from "../services";
import { CloudDeviceApiRequest } from "../typings/clouddevice/models";
import { DeviceStatus } from "../typings/clouddevice/models";
import {
    MessageCategory,
    MessageClass,
    MessageType,
    SaleToPOIRequest,
} from "../typings/tapi/models";

import paymentSyncSuccess from "../__mocks__/clouddevice/payment-sync-success.json";
import paymentAsyncError from "../__mocks__/clouddevice/payment-async-error.json";
import connectedDevices from "../__mocks__/clouddevice/connected-devices.json";
import statusDevice from "../__mocks__/clouddevice/status-device.json";

const BASE_URL = "https://device-api-test.adyen.com/v1";
const merchantAccount = "myMerchant";
const deviceId = "P400Plus-123456789";

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
let cloudDeviceAPI: CloudDeviceAPI;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    cloudDeviceAPI = new CloudDeviceAPI(client);
    scope = nock(BASE_URL);
});

afterEach(() => {
    nock.cleanAll();
});

describe("CloudDeviceApi", (): void => {
    test("should send a sync payment request", async (): Promise<void> => {
        scope
            .post(`/merchants/${merchantAccount}/devices/${deviceId}/sync`)
            .reply(200, paymentSyncSuccess);

        const request = createCloudDeviceApiPaymentRequest();
        const response = await cloudDeviceAPI.CloudDeviceApi.sync(merchantAccount, deviceId, request);

        expect(response).toBeDefined();
        expect(response.SaleToPOIResponse).toBeDefined();
        expect(response.SaleToPOIResponse?.MessageHeader).toBeDefined();
        expect(response.SaleToPOIResponse?.MessageHeader?.POIID).toBe(deviceId);
    });

    test("should send an async payment request and get ok result", async (): Promise<void> => {
        scope
            .post(`/merchants/${merchantAccount}/devices/${deviceId}/async`)
            .reply(200, "ok");

        const request = createCloudDeviceApiPaymentRequest();
        const response = await cloudDeviceAPI.CloudDeviceApi.async(merchantAccount, deviceId, request);

        expect(response).toBeDefined();
        expect(response.Result).toBe("ok");
        expect(response.SaleToPOIRequest).toBeUndefined();
    });

    test("should handle async error response with EventNotification", async (): Promise<void> => {
        scope
            .post(`/merchants/${merchantAccount}/devices/${deviceId}/async`)
            .reply(200, paymentAsyncError);

        const request = createCloudDeviceApiPaymentRequest();
        const response = await cloudDeviceAPI.CloudDeviceApi.async(merchantAccount, deviceId, request);

        expect(response).toBeDefined();
        expect(response.Result).toBeUndefined();
        expect(response.SaleToPOIRequest).toBeDefined();
        expect(response.SaleToPOIRequest?.EventNotification?.EventToNotify).toBe("Reject");
    });

    test("should get connected devices", async (): Promise<void> => {
        scope
            .get(`/merchants/${merchantAccount}/connectedDevices`)
            .reply(200, connectedDevices);

        const response = await cloudDeviceAPI.CloudDeviceApi.getConnectedDevices(merchantAccount);

        expect(response).toBeDefined();
        expect(response.uniqueDeviceIds).toHaveLength(2);
        expect(response.uniqueDeviceIds?.[0]).toBe("P400Plus-123456789");
        expect(response.uniqueDeviceIds?.[1]).toBe("V400m-123456789");
    });

    test("should get connected devices with store query param", async (): Promise<void> => {
        const store = "myStore";
        scope
            .get(`/merchants/${merchantAccount}/connectedDevices`)
            .query({ store })
            .reply(200, connectedDevices);

        const response = await cloudDeviceAPI.CloudDeviceApi.getConnectedDevices(merchantAccount, store);

        expect(response).toBeDefined();
        expect(response.uniqueDeviceIds).toHaveLength(2);
        expect(response.uniqueDeviceIds?.[0]).toBe("P400Plus-123456789");
        expect(response.uniqueDeviceIds?.[1]).toBe("V400m-123456789");
    });

    test("should get device status", async (): Promise<void> => {
        const statusDeviceId = "AMS1-000168242800763";
        scope
            .get(`/merchants/${merchantAccount}/devices/${statusDeviceId}/status`)
            .reply(200, statusDevice);

        const response = await cloudDeviceAPI.CloudDeviceApi.getDeviceStatus(merchantAccount, statusDeviceId);

        expect(response).toBeDefined();
        expect(response.deviceId).toBe(statusDeviceId);
        expect(response.status).toBe(DeviceStatus.Online);
    });
});
