import nock from "nock";
import {createClient} from "../__mocks__/base";
import {disableSuccess} from "../__mocks__/recurring/disableSuccess";
import {listRecurringDetailsSuccess} from "../__mocks__/recurring/listRecurringDetailsSuccess";
import Recurring from "../services/recurring";
import Client from "../client";
import {paymentsSuccess} from "../__mocks__/checkout/paymentsSuccess";
import {createPaymentsCheckoutRequest} from "./checkout.spec";
import Checkout from "../services/checkout";

const createRecurringDetailsRequest = (): IRecurring.RecurringDetailsRequest => {
    return {
        merchantAccount: process.env.ADYEN_MERCHANT!,
        recurring: { contract: "RECURRING" },
        shopperReference: "shopperReference",
    };
};

let client: Client;
let recurring: Recurring;
let checkout: Checkout;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()){
        nock.activate();
    }
    client = createClient();
    recurring = new Recurring(client);
    checkout = new Checkout(client);
    scope = nock(`${client.config.endpoint}/pal/servlet/Recurring/${Client.RECURRING_API_VERSION}`);
});

afterEach(() => {
    nock.cleanAll();
});

describe("Recurring", (): void => {
    test.each([false, true])("should test have recurring details list, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        scope.post("/listRecurringDetails")
            .reply(200, listRecurringDetailsSuccess);

        const request = createRecurringDetailsRequest();
        try {
            const result = await recurring.listRecurringDetails(request);
            expect(result).toBeTruthy();
        } catch (e) {
            fail(e.message);
        }
    });

    test.each([false, true])("should disable, isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        scope.post("/payments")
            .reply(200, paymentsSuccess);

        const paymentsRequest: ICheckout.PaymentRequest = createPaymentsCheckoutRequest();
        await checkout.payments(paymentsRequest);

        scope.post("/disable")
            .reply(200, disableSuccess);

        const request: IRecurring.DisableRequest = {
            merchantAccount: process.env.ADYEN_MERCHANT!,
            shopperReference: "shopperReference",
        };

        try {
            const result = await recurring.disable(request);
            expect(result).toBeTruthy();
        } catch (e) {
            fail(e.message);
        }
    });
});
