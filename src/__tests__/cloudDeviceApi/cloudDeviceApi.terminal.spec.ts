import Client from "../../client";
import CloudDeviceAPI from "../../services/cloudDevice/cloudDeviceApi";
import { createCloudDeviceApiRequest } from "../../__mocks__/cloudDeviceApi/baseCloudDeviceApi";
import { EnvironmentEnum } from "../../config";
import { CloudDeviceApiRequest, DeviceStatusResponse, ConnectedDevicesResponse, CloudDeviceApiResponse } from "../../typings/cloudDevice/models";
import { EncryptionCredentialDetails } from "../../security/encryptionCredentialDetails";
import { MessageType } from "../../typings/terminal/messageType";

// Verify Terminal integration: tests to send API requests to the Cloud Device API and 
// test the Terminal responds as expected. Don't forget to:
// - Enable the terminal
// - Set 'enableTerminalTest' to true
// - Set required variables (ADYEN_API_KEY, ADYEN_MERCHANT_ACCOUNT, ADYEN_TERMINAL_DEVICE_ID) in .env file
// - Run one test at the time with npm run test:terminal -t "should make a sync payment request"
// - Restore 'enableTerminalTest' to false 

const enableTerminalTest = false; // set to true when you want to test with the Terminal

const { ADYEN_API_KEY, ADYEN_MERCHANT_ACCOUNT, ADYEN_TERMINAL_DEVICE_ID } = process.env;
const hasEnv = !!(ADYEN_API_KEY && ADYEN_MERCHANT_ACCOUNT && ADYEN_TERMINAL_DEVICE_ID);

(enableTerminalTest &&hasEnv ? describe : describe.skip)("Cloud Device API Testing with Terminal", () => {
    let client: Client;
    let cloudDeviceAPI: CloudDeviceAPI;

    beforeAll(() => {
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

        // IMPORTANT: These encryption credentials must match what is configured on your Adyen test terminal.
        // For a real integration test, you would load these securely (e.g., from environment variables or a secrets manager).
        const encryptionCredentialDetails: EncryptionCredentialDetails = {
            AdyenCryptoVersion: 1, 
            KeyIdentifier: "Key123456789crypt", 
            KeyVersion: 1, 
            Passphrase: "P@ssw0rd123456", //"43211234", 
        };

        const response: CloudDeviceApiResponse = await cloudDeviceAPI.sendEncryptedSync(
            merchantAccount,
            deviceId,
            cloudDeviceApiRequest,
            encryptionCredentialDetails
        );

        console.log("Encrypted sync payment response:", JSON.stringify(response, null, 2));

        expect(response).toBeDefined();
        // After decryption by the SDK, the response should be a standard CloudDeviceApiResponse
        expect(response.SaleToPOIResponse).toBeDefined();
        expect(response.SaleToPOIResponse?.MessageHeader).toBeDefined();
        expect(response.SaleToPOIResponse?.MessageHeader.MessageType).toBe(MessageType.Response);
        expect(response.SaleToPOIResponse?.PaymentResponse).toBeDefined();
        // The exact result depends on the terminal state, but we expect a response object.
        // For a basic integration test, just checking for the presence of the response structure is sufficient.
        expect(typeof response.SaleToPOIResponse?.PaymentResponse?.Response?.Result).toBe("string");
        expect(cloudDeviceApiRequest.SaleToPOIRequest.MessageHeader.POIID).toBe(deviceId);
    });
    
});
