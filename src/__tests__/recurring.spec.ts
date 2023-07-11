import nock from "nock";
import { createClient } from "../__mocks__/base";
import { disableSuccess } from "../__mocks__/recurring/disableSuccess";
import { listRecurringDetailsSuccess } from "../__mocks__/recurring/listRecurringDetailsSuccess";
import { notifyShopperSuccess } from "../__mocks__/recurring/notifyShopperSuccess";
import RecurringService from "../services/recurringApi";
import Client from "../client";
import { recurring } from "../typings";
import {Permit} from "../typings/recurring/permit";
import {CreatePermitRequest} from "../typings/recurring/createPermitRequest";
import {ObjectSerializer} from "../typings/recurring/models";

const createRecurringDetailsRequest = (): recurring.RecurringDetailsRequest => {
    return {
        merchantAccount: process.env.ADYEN_MERCHANT!,
        recurring: { contract: recurring.Recurring.ContractEnum.Recurring },
        shopperReference: "shopperReference",
    };
};

let client: Client;
let recurringService: RecurringService;
let scope: nock.Scope;

beforeEach((): void => {
    if (!nock.isActive()) {
        nock.activate();
    }
    client = createClient();
    recurringService = new RecurringService(client);
    scope = nock("https://pal-test.adyen.com/pal/servlet/Recurring/v68");
});

afterEach(() => {
    nock.cleanAll();
});

describe("Recurring", (): void => {
    test("should list recurring details", async (): Promise<void> => {
        scope.post("/listRecurringDetails")
            .reply(200, listRecurringDetailsSuccess);
        const request = createRecurringDetailsRequest();
        
        const result = await recurringService.listRecurringDetails(request);
        
        expect(result).toBeTruthy();
        if(result.details) {
            expect(result?.details[0]?.RecurringDetail?.recurringDetailReference).toBe("HW9LL9ML73M84H82");
        } else {
            fail("result did not contain any details");
        }
    });

    test("should disable", async (): Promise<void> => {
        scope.post("/disable")
            .reply(200, disableSuccess);

        const request: recurring.DisableRequest = {
            merchantAccount: process.env.ADYEN_MERCHANT!,
            shopperReference: "shopperReference",
            recurringDetailReference: "recurring.recurringDetailReference",
        };

        try {
            const result = await recurringService.disable(request);
            expect(result).toBeTruthy();
        } catch (e) {
            fail(e);
        }
    });

    test("should send pre-debit Notification", async (): Promise<void> => {
        scope.post("/notifyShopper")
            .reply(200, notifyShopperSuccess);

        const notifyShopperRequest: recurring.NotifyShopperRequest = {
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
            const result = await recurringService.notifyShopper(notifyShopperRequest);
            expect(result).toBeTruthy();
        } catch (e) {
            fail(e);
        }
    });


    test("should schedule account updater", async (): Promise<void> => {
        const scheduleAccountUpdaterSuccess: recurring.ScheduleAccountUpdaterResult = {
            pspReference: "mocked_psp",
            result: "SUCCESS"
        };

        scope.post("/scheduleAccountUpdater")
            .reply(200, scheduleAccountUpdaterSuccess);

        const request: recurring.ScheduleAccountUpdaterRequest = {
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
            const result = await recurringService.scheduleAccountUpdater(request);
            expect(result).toBeTruthy();
        } catch (e) {
            fail(e);
        }
    });

    test("should do a createPermit request", async (): Promise<void> => {
        const createPermitResultSuccess: recurring.CreatePermitResult = {
            pspReference: "1234567890"
        };

        scope.post("/createPermit")
            .reply(200, createPermitResultSuccess);

        const permit: Permit = {
            validTillDate: new Date("2022-03-25"),
            partnerId: "partnerID"
        };

        const request: recurring.CreatePermitRequest = {
            permits: [permit],
            merchantAccount: process.env.ADYEN_MERCHANT!,
            shopperReference: "shopperRef",
            recurringDetailReference: "recurringRef",
        };

        const serializedRequest: CreatePermitRequest = ObjectSerializer.serialize(request, "CreatePermitRequest");
        expect(serializedRequest.permits[0].validTillDate?.toString()).toBe("2022-03-25T00:00:00.000Z");

        try {
            const result = await recurringService.createPermit(request);
            expect(result).toBeTruthy();
        } catch (e) {
            fail(e);
        }
    });

    test("should do a disablePermit request", async (): Promise<void> => {
        const disablePermitResultSuccess: recurring.DisablePermitResult = {
            pspReference: "1234567890",
            status: "disabled",
        };

        scope.post("/disablePermit")
            .reply(200, disablePermitResultSuccess);

        const request: recurring.DisablePermitRequest = {
            merchantAccount: process.env.ADYEN_MERCHANT!,
            token: "permitToken"
        };

        try {
            const result = await recurringService.disablePermit(request);
            expect(result).toBeTruthy();
        } catch (e) {
            fail(e);
        }
    });
});
