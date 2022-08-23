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
 * Copyright (c) 2022 Adyen N.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

import nock from "nock";
import { createClient, createTerminalAPIPaymentRequest, createTerminalAPIRefundRequest } from "../__mocks__/base";
import { asyncRes } from "../__mocks__/terminalApi/async";
import { syncRefund, syncRes, syncResEventNotification } from "../__mocks__/terminalApi/sync";
import Client from "../client";
import TerminalCloudAPI from "../services/terminalCloudAPI";
import { SaleToAcquirerData, TerminalApiResponse } from "../typings/terminal/models";

let client: Client;
let terminalCloudAPI: TerminalCloudAPI;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
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
    test.each([isCI])("should make an async payment request, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        scope.post("/async").reply(200, asyncRes);

        const terminalAPIPaymentRequest = createTerminalAPIPaymentRequest();

        const requestResponse: string = await terminalCloudAPI.async(terminalAPIPaymentRequest);

        expect(requestResponse).toEqual("ok");
    });

    test.each([isCI])("should make a sync payment request, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        scope.post("/sync").reply(200, syncRes);

        const terminalAPIPaymentRequest = createTerminalAPIPaymentRequest();
        const terminalAPIResponse: TerminalApiResponse = await terminalCloudAPI.sync(terminalAPIPaymentRequest);

        expect(terminalAPIResponse.SaleToPOIResponse?.PaymentResponse).toBeDefined();
        expect(terminalAPIResponse.SaleToPOIResponse?.MessageHeader).toBeDefined();
    });

    test.each([isCI])("should return event notification if response contains it, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();

        const terminalAPIPaymentRequest = createTerminalAPIPaymentRequest();
        scope.post("/sync").reply(200, syncResEventNotification);

        const terminalAPIResponse = await terminalCloudAPI.sync(terminalAPIPaymentRequest);

        expect(terminalAPIResponse.SaleToPOIRequest?.EventNotification).toBeDefined();
    });

    test.each([isCI])("should make an async refund request, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        scope.post("/sync").reply(200, syncRes);

        const terminalAPIPaymentRequest = createTerminalAPIPaymentRequest();
        const terminalAPIResponse: TerminalApiResponse = await terminalCloudAPI.sync(terminalAPIPaymentRequest);

        const pOITransactionId = terminalAPIResponse.SaleToPOIResponse!.PaymentResponse!.POIData!.POITransactionID;
        expect(pOITransactionId).toBeTruthy();

        scope.post("/sync").reply(200, syncRefund);

        const terminalAPIRefundRequest = createTerminalAPIRefundRequest(pOITransactionId);
        const id = Math.floor(Math.random() * Math.floor(10000000)).toString();
        terminalAPIRefundRequest.SaleToPOIRequest.MessageHeader.ServiceID = id;
        const saleToAcquirerData: SaleToAcquirerData = new SaleToAcquirerData();
        saleToAcquirerData.currency = "EUR";
        terminalAPIRefundRequest.SaleToPOIRequest.ReversalRequest!.SaleData!.SaleToAcquirerData = saleToAcquirerData;
        const terminalAPIRefundResponse = await terminalCloudAPI.sync(terminalAPIRefundRequest);

        expect(terminalAPIRefundResponse.SaleToPOIResponse?.ReversalResponse?.Response.Result).toBe("Success");
    }, 20000);
});
