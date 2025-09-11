import Client from "../../client";
import CloudDeviceAPI from "../../services/cloudDevice/cloudDeviceApi";
import { createCloudDeviceApiRequest } from "../../__mocks__/cloudDeviceApi/baseCloudDeviceApi";
import { EnvironmentEnum } from "../../config";
import { CloudDeviceApiRequest, DeviceStatusResponse, ConnectedDevicesResponse, CloudDeviceApiResponse } from "../../typings/cloudDevice/models";
import { EncryptionCredentialDetails } from "../../security/encryptionCredentialDetails";
import { MessageType } from "../../typings/terminal/messageType";

/*
Verify Terminal integration: tests to send API requests to the Cloud Device API and test the Terminal responds as expected. 

Don't forget to:
- Enable the terminal
- Set 'enableTerminalTest' to true
- Set required variables (ADYEN_API_KEY, ADYEN_MERCHANT_ACCOUNT, ADYEN_TERMINAL_DEVICE_ID) creating the .env file in root of the repository:

# Adyen Test Credentials
ADYEN_API_KEY=#####
ADYEN_MERCHANT_ACCOUNT=MyMerchantAccount
ADYEN_TERMINAL_DEVICE_ID=V400m-1234567890

# Terminal configuration
ADYEN_TERMINAL_DEVICE_KEY_IDENTIFIER==#####
ADYEN_TERMINAL_DEVICE_PASSPHRASE==#####

- Run one test at the time with npm run test:terminal -t "should make a sync payment request"
- Restore 'enableTerminalTest' value to false 

*/

const enableTerminalTest = true; // set to true when you want to test with the Terminal

// Cloud Device API env settings
const { ADYEN_API_KEY, ADYEN_MERCHANT_ACCOUNT, ADYEN_TERMINAL_DEVICE_ID } = process.env;
// env setting for Terminal encryption
const { ADYEN_TERMINAL_DEVICE_KEY_IDENTIFIER, ADYEN_TERMINAL_DEVICE_PASSPHRASE } = process.env;

const hasEnv = !!(ADYEN_API_KEY && ADYEN_MERCHANT_ACCOUNT && ADYEN_TERMINAL_DEVICE_ID);
(enableTerminalTest &&hasEnv ? describe : describe.skip)("Cloud Device API Testing with Terminal", () => {
    let client: Client;
    let cloudDeviceAPI: CloudDeviceAPI;

    beforeAll(() => {
        console.log("*** Testing with Terminal enabled ****");

        client = new Client({
            apiKey: ADYEN_API_KEY,
            environment: EnvironmentEnum.TEST,
        });
        cloudDeviceAPI = new CloudDeviceAPI(client);
        jest.setTimeout(250000); // Set timeout to 25s 
    });

    afterAll((done) => {
        // Calling `done()` in `afterAll` helps Jest to gracefully exit after all async operations are complete.
        done();
    });

    // run with: npx jest cloudDeviceApi.terminal.spec.ts -t "should make a sync payment request"
    test("should make a sync payment request", async () => {
        const merchantAccount = ADYEN_MERCHANT_ACCOUNT!;
        const deviceId = ADYEN_TERMINAL_DEVICE_ID!;

        const cloudDeviceApiRequest: CloudDeviceApiRequest = createCloudDeviceApiRequest();

        const response = await cloudDeviceAPI.sendSync(
            merchantAccount,
            deviceId,
            cloudDeviceApiRequest
        );

        // Log outcome
        if (response.SaleToPOIRequest?.EventNotification) {
            console.log("Received EventNotification:", JSON.stringify(response.SaleToPOIRequest.EventNotification, null, 2));
        } else if (response.SaleToPOIResponse) {
            console.log("Received SaleToPOIResponse:", JSON.stringify(response.SaleToPOIResponse, null, 2));
        } else {
            console.log("Received unexpected response structure:", JSON.stringify(response, null, 2));
        }

        expect(response).toBeDefined();

    });

    // run with: npx jest cloudDeviceApi.terminal.spec.ts -t "should make an async payment request"
    test("should make an async payment request", async () => {
        const merchantAccount = ADYEN_MERCHANT_ACCOUNT!;
        const deviceId = ADYEN_TERMINAL_DEVICE_ID!;

        const cloudDeviceApiRequest: CloudDeviceApiRequest = createCloudDeviceApiRequest();

        const response = await cloudDeviceAPI.sendAsync(
            merchantAccount,
            deviceId,
            cloudDeviceApiRequest
        );

        // Log outcome        
        console.log("response:", response); // should be 'ok'

        expect(response).toBeDefined();

    });

    // run with: npx jest cloudDeviceApi.terminal.spec.ts -t "should get device status"
    test("should get device status", async () => {
        const merchantAccount = ADYEN_MERCHANT_ACCOUNT!;
        const deviceId = ADYEN_TERMINAL_DEVICE_ID!;

        const response: DeviceStatusResponse = await cloudDeviceAPI.getDeviceStatus(
            merchantAccount,
            deviceId
        );

        console.log("Device status response:", JSON.stringify(response, null, 2));

        expect(response).toBeDefined();
        expect(response.deviceId).toEqual(deviceId);
    });

    // run with: npx jest cloudDeviceApi.terminal.spec.ts -t "should get connected devices"
    test("should get connected devices", async () => {
        const merchantAccount = ADYEN_MERCHANT_ACCOUNT!;

        const response: ConnectedDevicesResponse = await cloudDeviceAPI.getConnectedDevices(
            merchantAccount
        );

        console.log("Connected devices response:", JSON.stringify(response, null, 2));

        expect(response).toBeDefined();
        expect(response.uniqueDeviceIds).toBeDefined();
        expect(Array.isArray(response.uniqueDeviceIds)).toBe(true);

    });

    // run with: npx jest cloudDeviceApi.terminal.spec.ts -t "should make an encrypted sync payment request"
    test("should make an encrypted sync payment request", async () => {
        const merchantAccount = ADYEN_MERCHANT_ACCOUNT!;
        const deviceId = ADYEN_TERMINAL_DEVICE_ID!;

        const cloudDeviceApiRequest = createCloudDeviceApiRequest();

        // IMPORTANT: Encryption credentials must match the Terminal configuration on CA
        const encryptionCredentialDetails: EncryptionCredentialDetails = {
            AdyenCryptoVersion: 1, 
            KeyIdentifier: ADYEN_TERMINAL_DEVICE_KEY_IDENTIFIER ?? "n/a", 
            KeyVersion: 1, 
            Passphrase: ADYEN_TERMINAL_DEVICE_PASSPHRASE ?? "n/a", 
        };

        const response: CloudDeviceApiResponse = await cloudDeviceAPI.sendEncryptedSync(
            merchantAccount,
            deviceId,
            cloudDeviceApiRequest,
            encryptionCredentialDetails
        );

        // Log outcome        
        console.log("response:", response); 

        expect(response).toBeDefined();
        // After decryption by the SDK, the response should be a standard CloudDeviceApiResponse
        expect(response.SaleToPOIResponse).toBeDefined();
        expect(response.SaleToPOIResponse?.MessageHeader).toBeDefined();
        expect(response.SaleToPOIResponse?.MessageHeader.MessageType).toBe(MessageType.Response);
        expect(response.SaleToPOIResponse?.PaymentResponse).toBeDefined();
    });
    
    // run with: npx jest cloudDeviceApi.terminal.spec.ts -t "should make an encrypted async payment request"
    test("should make an encrypted async payment request", async () => {
        const merchantAccount = ADYEN_MERCHANT_ACCOUNT!;
        const deviceId = ADYEN_TERMINAL_DEVICE_ID!;

        const cloudDeviceApiRequest = createCloudDeviceApiRequest();

        // IMPORTANT: Encryption credentials must match the Terminal configuration on CA
        const encryptionCredentialDetails: EncryptionCredentialDetails = {
            AdyenCryptoVersion: 1, 
            KeyIdentifier: ADYEN_TERMINAL_DEVICE_KEY_IDENTIFIER ?? "n/a", 
            KeyVersion: 1, 
            Passphrase: ADYEN_TERMINAL_DEVICE_PASSPHRASE ?? "n/a", 
        };

        const response = await cloudDeviceAPI.sendEncryptedAsync(
            merchantAccount,
            deviceId,
            cloudDeviceApiRequest,
            encryptionCredentialDetails
        );

        // Log outcome        
        console.log("response:", response); // should be 'ok'

        expect(response).toBeDefined();
    });
});
