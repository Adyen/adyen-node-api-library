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
 * Copyright (c) 2021 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

import nock from "nock";
import { createClient, createTerminalAPIPaymentRequest } from "../__mocks__/base";
import { localEncRes, wrongEncRes } from "../__mocks__/terminalApi/local";
import Client from "../client";
import TerminalLocalAPI from "../services/terminalLocalAPI";
import { SecurityKey, TerminalApiResponse } from "../typings/terminal/models";
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

const isCI = process.env.CI === "true" || (typeof process.env.CI === "boolean" && process.env.CI);

describe("Terminal Local API", (): void => {
    test.each([isCI, true])("should make a local payment, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        scope.post("/").reply(200, localEncRes);
        const terminalAPIPaymentRequest = createTerminalAPIPaymentRequest();

        const securityKey: SecurityKey = {
            AdyenCryptoVersion: 0,
            KeyIdentifier: "CryptoKeyIdentifier12345",
            KeyVersion: 0,
            Passphrase: "p@ssw0rd123456",
        };

        const terminalApiResponse: TerminalApiResponse =
            await terminalLocalAPI.request(terminalAPIPaymentRequest, securityKey);

        expect(terminalApiResponse.SaleToPOIResponse?.PaymentResponse).toBeDefined();
        expect(terminalApiResponse.SaleToPOIResponse?.MessageHeader).toBeDefined();
    });

    test.each([isCI, true])("should return NexoCryptoException, isMock: %p", async (isMock: boolean): Promise<void> => {
        !isMock && nock.restore();
        scope.post("/").reply(200, wrongEncRes);
        const terminalAPIPaymentRequest = createTerminalAPIPaymentRequest();

        const securityKey: SecurityKey = {
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
