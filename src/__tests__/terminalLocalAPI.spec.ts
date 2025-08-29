import nock from "nock";
import { createClient } from "../__mocks__/base";
import { createTerminalAPIPaymentRequest } from "../__mocks__/terminalApi/baseTerminalApi";
import { localEncRes, wrongEncRes } from "../__mocks__/terminalApi/local";
import Client from "../client";
import TerminalLocalAPI from "../services/terminalLocalAPI";
import { terminal } from "../typings";
import NexoCryptoException from "../services/exception/nexoCryptoException";

let client: Client;
let terminalLocalAPI: TerminalLocalAPI;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }

    client = createClient();
    terminalLocalAPI = new TerminalLocalAPI(client);
    scope = nock(client.config.terminalApiLocalEndpoint + ":8443/nexo");
});

afterEach((): void => {
    nock.cleanAll();
});

describe("Terminal Local API", (): void => {
    test("should make a local payment", async (): Promise<void> => {
        scope.post("/").reply(200, localEncRes);
        const terminalAPIPaymentRequest = createTerminalAPIPaymentRequest();

        const securityKey: terminal.SecurityKey = {
            AdyenCryptoVersion: 0,
            KeyIdentifier: "CryptoKeyIdentifier12345",
            KeyVersion: 0,
            Passphrase: "p@ssw0rd123456",
        };

        const terminalApiResponse: terminal.TerminalApiResponse =
            await terminalLocalAPI.request(terminalAPIPaymentRequest, securityKey);

        expect(terminalApiResponse.SaleToPOIResponse?.PaymentResponse).toBeDefined();
        expect(terminalApiResponse.SaleToPOIResponse?.MessageHeader).toBeDefined();
    });

    test("should return NexoCryptoException", async (): Promise<void> => {
        scope.post("/").reply(200, wrongEncRes);
        const terminalAPIPaymentRequest = createTerminalAPIPaymentRequest();

        const securityKey: terminal.SecurityKey = {
            AdyenCryptoVersion: 0,
            KeyIdentifier: "CryptoKeyIdentifier12345",
            KeyVersion: 0,
            Passphrase: "p@ssw0rd123456",
        };

        try {
            await terminalLocalAPI.request(terminalAPIPaymentRequest, securityKey);
        } catch (e) {
            if(e instanceof NexoCryptoException) {
                expect(e.message).toEqual("Hmac validation failed");
            } else {
                fail();
            }
            
        }
    });
});
