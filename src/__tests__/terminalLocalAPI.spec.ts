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
import {localEncRes, localSecuredRes, wrongEncRes} from "../__mocks__/terminalApi/local";
import Client from "../client";
import TerminalLocalAPI from "../services/terminalLocalAPI";
import {Convert, SecurityKey, TerminalApiResponse} from "../typings/terminal";
import NexoCryptoException from "../services/exception/nexoCryptoException";

let client: Client;
let terminalLocalAPI: TerminalLocalAPI;
let scope: nock.Scope;

beforeEach((): void => {
    client = createClient();
    terminalLocalAPI = new TerminalLocalAPI(client);
    scope = nock(client.config.terminalApiLocalEndpoint + ":8443/nexo");
});

describe("Terminal Local API", (): void => {
    it("should make a local payment", async (): Promise<void> => {
        const securedResponse = Convert.toTerminalApiSecuredResponse(localEncRes);
        const response = Convert.toTerminalApiResponse(localSecuredRes);

        scope.post("/").reply(200, securedResponse);
        const terminalAPIPaymentRequest = createTerminalAPIPaymentRequest();

        const securityKey: SecurityKey = {
            adyenCryptoVersion: 1,
            keyIdentifier: "CryptoKeyIdentifier12345",
            keyVersion: 1,
            passphrase: "p@ssw0rd123456",
        };

        const terminalApiResponse: TerminalApiResponse =
            await terminalLocalAPI.request(terminalAPIPaymentRequest, securityKey);

        expect(response).toEqual(terminalApiResponse);
    });

    it("should return NexoCryptoException", async (): Promise<void> => {
        const securedResponse = Convert.toTerminalApiSecuredResponse(wrongEncRes);

        scope.post("/").reply(200, securedResponse);
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
