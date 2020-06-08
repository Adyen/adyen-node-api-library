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
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

import nock from "nock";
import {createClient, createTerminalAPIPaymentRequest} from "../__mocks__/base";
import {localEncRes, wrongEncRes} from "../__mocks__/terminalApi/local";
import Client from "../client";
import TerminalLocalAPI from "../services/terminalLocalAPI";
import {SecurityKey, TerminalApiResponse} from "../typings/terminal/models";
import NexoCryptoException from "../services/exception/nexoCryptoException";

let client: Client;
let terminalLocalAPI: TerminalLocalAPI;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()){
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
    test.each([isCI, true])("should make a local payment", async (isMock: boolean): Promise<void> => {
        !isMock && nock.restore();
        scope.post("/").reply(200, localEncRes);
        const terminalAPIPaymentRequest = createTerminalAPIPaymentRequest();

        const securityKey: SecurityKey = {
            adyenCryptoVersion: 1,
            keyIdentifier: "CryptoKeyIdentifier12345",
            keyVersion: 1,
            passphrase: "p@ssw0rd123456",
        };

        const terminalApiResponse: TerminalApiResponse =
            await terminalLocalAPI.request(terminalAPIPaymentRequest, securityKey);

        expect(terminalApiResponse.saleToPOIResponse?.paymentResponse).toBeDefined();
        expect(terminalApiResponse.saleToPOIResponse?.messageHeader).toBeDefined();
    });

    test.each([isCI, true])("should return NexoCryptoException", async (isMock: boolean): Promise<void> => {
        !isMock && nock.restore();
        scope.post("/").reply(200, wrongEncRes);
        const terminalAPIPaymentRequest = createTerminalAPIPaymentRequest();

        const securityKey: SecurityKey = {
            adyenCryptoVersion: 1,
            keyIdentifier: "CryptoKeyIdentifier12345",
            keyVersion: 1,
            passphrase: "p@ssw0rd123456",
        };

        try {
            await terminalLocalAPI.request(terminalAPIPaymentRequest, securityKey);
        } catch (e) {
            expect(e instanceof NexoCryptoException);
            expect(e.message).toEqual("Hmac validation failed");
        }
    });
});
