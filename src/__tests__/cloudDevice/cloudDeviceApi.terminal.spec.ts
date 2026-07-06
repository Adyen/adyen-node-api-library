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

import Client from "../../client";
import Config, { EnvironmentEnum } from "../../config";
import { CloudDeviceAPI } from "../../services";
import {
    CloudDeviceApiRequest,
    CloudDeviceApiAsyncResponse,
    CloudDeviceApiResponse,
    ConnectedDevicesResponse,
    DeviceStatusResponse,
} from "../../typings/clouddevice/models";
import {
    MessageCategory,
    MessageClass,
    MessageType,
    MessageHeader,
    PaymentRequest,
    SaleToPOIRequest,
} from "../../typings/tapi/models";

/*
Verify Terminal integration: tests to send API requests to the Cloud Device API and confirm the Terminal responds as expected.

Don't forget to:
- Enable the terminal
- Set 'enableTerminalTest' to true
- Set required variables (ADYEN_API_KEY, ADYEN_MERCHANT_ACCOUNT, ADYEN_TERMINAL_DEVICE_ID) by creating the .env file in root of the repository:

# Adyen Test Credentials
ADYEN_API_KEY=#####
ADYEN_MERCHANT_ACCOUNT=MyMerchantAccount
ADYEN_TERMINAL_DEVICE_ID=V400m-1234567890

- Run one test at a time with: npx jest cloudDeviceApi.terminal.spec.ts -t "should make a sync payment request"
- Restore 'enableTerminalTest' value to false
*/

const enableTerminalTest = false; // set to true when you want to test with the Terminal

const { ADYEN_API_KEY, ADYEN_MERCHANT_ACCOUNT, ADYEN_TERMINAL_DEVICE_ID } = process.env;

const hasEnv = !!(ADYEN_API_KEY && ADYEN_MERCHANT_ACCOUNT && ADYEN_TERMINAL_DEVICE_ID);
(enableTerminalTest && hasEnv ? describe : describe.skip)("Cloud Device API Testing with Terminal", (): void => {
    let client: Client;
    let cloudDeviceAPI: CloudDeviceAPI;

    beforeAll((): void => {
        console.log("*** Testing with Terminal enabled ***");

        client = new Client(new Config({
            apiKey: ADYEN_API_KEY,
            environment: EnvironmentEnum.TEST,
        }));
        cloudDeviceAPI = new CloudDeviceAPI(client);
        jest.setTimeout(25000);
    });

    afterAll((done): void => {
        done();
    });

    // run with: npx jest cloudDeviceApi.terminal.spec.ts -t "should make a sync payment request"
    test("should make a sync payment request", async (): Promise<void> => {
        const merchantAccount = ADYEN_MERCHANT_ACCOUNT!;
        const deviceId = ADYEN_TERMINAL_DEVICE_ID!;

        const response: CloudDeviceApiResponse = await cloudDeviceAPI.CloudDeviceApi.sync(
            merchantAccount,
            deviceId,
            createCloudDeviceApiPaymentRequest(deviceId)
        );

        if (response.SaleToPOIResponse) {
            console.log("Received SaleToPOIResponse:", JSON.stringify(response.SaleToPOIResponse, null, 2));
        } else {
            console.log("Received unexpected response structure:", JSON.stringify(response, null, 2));
        }

        expect(response).toBeDefined();
    });

    // run with: npx jest cloudDeviceApi.terminal.spec.ts -t "should make an async payment request"
    test("should make an async payment request", async (): Promise<void> => {
        const merchantAccount = ADYEN_MERCHANT_ACCOUNT!;
        const deviceId = ADYEN_TERMINAL_DEVICE_ID!;

        const response: CloudDeviceApiAsyncResponse = await cloudDeviceAPI.CloudDeviceApi.async(
            merchantAccount,
            deviceId,
            createCloudDeviceApiPaymentRequest(deviceId)
        );

        console.log("Async response:", response);

        expect(response).toBeDefined();
    });

    // run with: npx jest cloudDeviceApi.terminal.spec.ts -t "should get device status"
    test("should get device status", async (): Promise<void> => {
        const merchantAccount = ADYEN_MERCHANT_ACCOUNT!;
        const deviceId = ADYEN_TERMINAL_DEVICE_ID!;

        const response: DeviceStatusResponse = await cloudDeviceAPI.CloudDeviceApi.getDeviceStatus(
            merchantAccount,
            deviceId
        );

        console.log("Device status response:", JSON.stringify(response, null, 2));

        expect(response).toBeDefined();
        expect(response.deviceId).toEqual(deviceId);
    });

    // run with: npx jest cloudDeviceApi.terminal.spec.ts -t "should get connected devices"
    test("should get connected devices", async (): Promise<void> => {
        const merchantAccount = ADYEN_MERCHANT_ACCOUNT!;

        const response: ConnectedDevicesResponse = await cloudDeviceAPI.CloudDeviceApi.getConnectedDevices(
            merchantAccount
        );

        console.log("Connected devices response:", JSON.stringify(response, null, 2));

        expect(response).toBeDefined();
        expect(response.uniqueDeviceIds).toBeDefined();
        expect(Array.isArray(response.uniqueDeviceIds)).toBe(true);
    });

    const createCloudDeviceApiPaymentRequest = (deviceId: string): CloudDeviceApiRequest => {
        const id = Math.floor(Math.random() * 10000000).toString();

        const messageHeader: MessageHeader = new MessageHeader();
        messageHeader.ProtocolVersion = "3.0";
        messageHeader.MessageClass = MessageClass.Service;
        messageHeader.MessageCategory = MessageCategory.Payment;
        messageHeader.MessageType = MessageType.Request;
        messageHeader.SaleID = id;
        messageHeader.ServiceID = id;
        messageHeader.POIID = deviceId;

        const paymentRequest: PaymentRequest = new PaymentRequest();
        paymentRequest.PaymentTransaction = {
            AmountsReq: {
                Currency: "EUR",
                RequestedAmount: 1,
            },
        };
        paymentRequest.SaleData = {
            SaleTransactionID: {
                TransactionID: id,
                TimeStamp: new Date(),
            },
        };

        const saleToPOIRequest: SaleToPOIRequest = new SaleToPOIRequest();
        saleToPOIRequest.MessageHeader = messageHeader;
        saleToPOIRequest.PaymentRequest = paymentRequest;

        const request: CloudDeviceApiRequest = new CloudDeviceApiRequest();
        request.SaleToPOIRequest = saleToPOIRequest;
        return request;
    };
});
