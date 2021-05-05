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
import { createClient } from "../__mocks__/base";
import Modification from "../services/modification";
import Client from "../client";

const modificationResult: IPayouts.ModifyResponse = {
    pspReference: "1234567890987654",
    response: "[refund-received]"
};

const createModificationRequest = (): IPayments.ModificationRequest => {
    return {
        merchantAccount: process.env.ADYEN_MERCHANT!,
        originalReference: "862615382016087C",
        modificationAmount: {
            value: 500 ,
            currency: "EUR"
        }
    };
};

const createCancelRequest = (): IPayments.ModificationRequest => {
    return {
        merchantAccount: process.env.ADYEN_MERCHANT!,
        originalReference: "862615382016087C"
    };
};
const isCI = process.env.CI === "true" || (typeof process.env.CI === "boolean" && process.env.CI);

let client: Client;
let modification: Modification;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    modification = new Modification(client);
    scope = nock(`${client.config.endpoint}/pal/servlet/Payment/${Client.API_VERSION}`);
});

afterEach(() => {
    nock.cleanAll();
});

describe("Modification", (): void => {
    test.each([isCI, true])("should perform a refund, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        scope.post("/refund")
            .reply(200, modificationResult);

        const request = createModificationRequest();
        try {
            const result = await modification.refund(request);
            expect(result).toBeTruthy();
        } catch (e) {
            fail(e.message);
        }
    });

    test.each([isCI, true])("should perform a capture, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        scope.post("/capture")
            .reply(200, modificationResult);

        const request = createModificationRequest();
        try {
            const result = await modification.capture(request);
            expect(result).toBeTruthy();
        } catch (e) {
            fail(e.message);
        }
    });

    test.each([isCI, true])("should perform a cancelOrRefund, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        scope.post("/cancelOrRefund")
            .reply(200, modificationResult);

        const request = createCancelRequest();
        try {
            const result = await modification.cancelOrRefund(request);
            expect(result).toBeTruthy();
        } catch (e) {
            fail(e.message);
        }
    });

    test.each([isCI, true])("should perform a cancel, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        scope.post("/cancel")
            .reply(200, modificationResult);

        const request = createCancelRequest();
        try {
            const result = await modification.cancel(request);
            expect(result).toBeTruthy();
        } catch (e) {
            fail(e.message);
        }
    });

    test.each([isCI, true])("should perform a technicalCancel, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        scope.post("/technicalCancel")
            .reply(200, modificationResult);

        const request = createCancelRequest();
        try {
            const result = await modification.technicalCancel(request);
            expect(result).toBeTruthy();
        } catch (e) {
            fail(e.message);
        }
    });

    test.each([isCI, true])("should perform a adjustAuthorisation, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        scope.post("/adjustAuthorisation")
            .reply(200, modificationResult);

        const request = createModificationRequest();
        try {
            const result = await modification.adjustAuthorisation(request);
            expect(result).toBeTruthy();
        } catch (e) {
            fail(e.message);
        }
    });
});
