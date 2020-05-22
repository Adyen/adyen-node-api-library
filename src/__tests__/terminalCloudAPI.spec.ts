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
import {createClient, createTerminalAPIPaymentRequest, createTerminalAPIRefundRequest} from "../__mocks__/base";
import {asyncRes} from "../__mocks__/terminalApi/async";
import {syncRefund, syncRes} from "../__mocks__/terminalApi/sync";
import Client from "../client";
import TerminalCloudAPI from "../services/terminalCloudAPI";
import {Convert, TerminalApiResponse} from "../typings/terminal";

let client: Client;
let terminalCloudAPI: TerminalCloudAPI;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()){
        nock.activate();
    }
    client = createClient(process.env.ADYEN_TERMINAL_APIKEY);
    client.config.merchantAccount = process.env.ADYEN_TERMINAL_MERCHANT;

    terminalCloudAPI = new TerminalCloudAPI(client);
    scope = nock(`${client.config.terminalApiCloudEndpoint}`);
});

afterEach((): void => {
    nock.cleanAll();
});

const isCI = process.env.CI === "true" || (typeof process.env.CI === "boolean" && process.env.CI);
describe("Terminal Cloud API", (): void => {
    test.each([isCI, true])("should make an async payment request, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        scope.post("/async").reply(200, asyncRes);

        const terminalAPIPaymentRequest = createTerminalAPIPaymentRequest();

        const requestResponse: string = await terminalCloudAPI.async(terminalAPIPaymentRequest);

        expect(requestResponse).toEqual("ok");
    });

    test.each([isCI, true])("should make a sync payment request, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        const response = Convert.toTerminalApiResponse(syncRes);
        scope.post("/sync").reply(200, response);

        const terminalAPIPaymentRequest = createTerminalAPIPaymentRequest();
        const terminalAPIResponse: TerminalApiResponse = await terminalCloudAPI.sync(terminalAPIPaymentRequest);

        expect(terminalAPIResponse.saleToPoiResponse?.paymentResponse).toBeDefined();
        expect(terminalAPIResponse.saleToPoiResponse?.messageHeader).toBeDefined();
    });

    test.each([isCI, true])("should make an async refund request, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        const response = Convert.toTerminalApiResponse(syncRes);
        scope.post("/sync").reply(200, response);

        const terminalAPIPaymentRequest = createTerminalAPIPaymentRequest();
        const terminalAPIResponse: TerminalApiResponse = await terminalCloudAPI.sync(terminalAPIPaymentRequest);

        const refundResponse = Convert.toTerminalApiResponse(syncRefund);
        scope.post("/sync").reply(200, refundResponse);

        const terminalAPIRefundRequest = createTerminalAPIRefundRequest(terminalAPIResponse.saleToPoiResponse?.paymentResponse?.poiData.poiTransactionId!);
        const terminalAPIRefundResponse = await terminalCloudAPI.sync(terminalAPIRefundRequest);

        expect(terminalAPIRefundResponse.saleToPoiResponse?.reversalResponse).toBeDefined();
    });
});
