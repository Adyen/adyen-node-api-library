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
import { disableSuccess } from "../__mocks__/recurring/disableSuccess";
import { listRecurringDetailsSuccess } from "../__mocks__/recurring/listRecurringDetailsSuccess";
import { notifyShopperSuccess } from "../__mocks__/recurring/notifyShopperSuccess";
import RecurringService from "../services/recurring";
import Client from "../client";
import { paymentsSuccess } from "../__mocks__/checkout/paymentsSuccess";
import { createPaymentsCheckoutRequest } from "./checkout.spec";
import Checkout from "../services/checkout";
import { PaymentRequest } from "../typings/checkout/models";
import {
    ScheduleAccountUpdaterRequest,
    ScheduleAccountUpdaterResult,
    DisableRequest,
    RecurringDetailsRequest,
    Recurring,
    NotifyShopperRequest
} from "../typings/recurring/models";

const createRecurringDetailsRequest = (): RecurringDetailsRequest => {
    return {
        merchantAccount: process.env.ADYEN_MERCHANT!,
        recurring: { contract: Recurring.ContractEnum.Recurring },
        shopperReference: "shopperReference",
    };
};
const isCI = process.env.CI === "true" || (typeof process.env.CI === "boolean" && process.env.CI);

let client: Client;
let recurring: RecurringService;
let checkout: Checkout;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    recurring = new RecurringService(client);
    checkout = new Checkout(client);
    scope = nock(`${client.config.endpoint}/pal/servlet/Recurring/${Client.RECURRING_API_VERSION}`);
});

afterEach(() => {
    nock.cleanAll();
});

describe("Recurring", (): void => {
    test("should list recurring details ", async (): Promise<void> => {
        scope.post("/listRecurringDetails")
            .reply(200, listRecurringDetailsSuccess);
        const request = createRecurringDetailsRequest();
        
        const result = await recurring.listRecurringDetails(request);
        
        expect(result).toBeTruthy();
        expect(result.details?.[0].RecurringDetail.recurringDetailReference).toBe('recurringReference');
    });

    test.each([isCI, true])("should disable, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        scope.post("/payments")
            .reply(200, paymentsSuccess);

        const paymentsRequest: PaymentRequest = createPaymentsCheckoutRequest();
        const res = await checkout.payments(paymentsRequest);

        scope.post("/disable")
            .reply(200, disableSuccess);

        const request: DisableRequest = {
            merchantAccount: process.env.ADYEN_MERCHANT!,
            shopperReference: "shopperReference",
            recurringDetailReference: res.additionalData!["recurring.recurringDetailReference"]
        };

        try {
            const result = await recurring.disable(request);
            expect(result).toBeTruthy();
        } catch (e: any) {
            fail(e.message);
        }
    });

    test.each([isCI, true])("should send pre-debit Notification, isMock %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        scope.post("/notifyShopper")
            .reply(200, notifyShopperSuccess);

        const notifyShopperRequest: NotifyShopperRequest = {
            merchantAccount: process.env.ADYEN_MERCHANT!,
            shopperReference: "shopperReference",
            storedPaymentMethodId: "8415995487234100",
            amount: {
                currency: "INR",
                value: 1000
            },
            billingDate: "2021-03-16",
            reference: "Example reference",
            displayedReference: "Example displayed reference"
        };

        try {
            const result = await recurring.notifyShopper(notifyShopperRequest);
            expect(result).toBeTruthy();
        } catch (e: any) {
            fail(e.message);
        }
    });


    // TODO: register account for AccountUpdater and unmock test
    test.each([true])("should schedule account updater, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        const scheduleAccountUpdaterSuccess: ScheduleAccountUpdaterResult = {
            pspReference: "mocked_psp",
            result: "SUCCESS"
        };

        scope.post("/scheduleAccountUpdater")
            .reply(200, scheduleAccountUpdaterSuccess);

        const request: ScheduleAccountUpdaterRequest = {
            merchantAccount: process.env.ADYEN_MERCHANT!,
            reference: "ref",
            card: {
                expiryMonth: "03",
                expiryYear: "2030",
                holderName: "John Smith",
                number: "4111111111111111"
            }
        };

        try {
            const result = await recurring.scheduleAccountUpdater(request);
            expect(result).toBeTruthy();
        } catch (e: any) {
            fail(e.message);
        }
    });
});
