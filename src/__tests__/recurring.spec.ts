import nock from "nock";
import { createMockClientFromResponse } from "../__mocks__/base";
import { disableSuccess } from "../__mocks__/recurring/disableSuccess";
import { listRecurringDetailsSuccess } from "../__mocks__/recurring/listRecurringDetailsSuccess";
import Recurring from "../service/recurring";
import { DisableRequest, RecurringDetailsRequest } from "../typings/recurring";
import Client from "../client";

const createRecurringDetailsRequest = (): RecurringDetailsRequest => {
    return {
        merchantAccount: "MerchantAccount",
        recurring: {contract: "ONECLICK"},
        shopperReference: "test-123",
    };
};

let client: Client;
let recurring: Recurring;
let scope: nock.Scope;

beforeEach((): void => {
    client = createMockClientFromResponse();
    recurring = new Recurring(client);
    scope = nock(`${client.config.endpoint}/pal/servlet/Recurring/${Client.RECURRING_API_VERSION}`);
});
describe("Recurring", (): void => {
    it("should test have recurring details list", async (): Promise<void> => {
        scope.post("/listRecurringDetails")
            .reply(200, listRecurringDetailsSuccess);

        const request = createRecurringDetailsRequest();
        const result = await recurring.listRecurringDetails(request);

        expect(result).toEqual(listRecurringDetailsSuccess);
    });

    it("should disable", async (): Promise<void> => {
        scope.post("/disable")
            .reply(200, disableSuccess);

        const request: DisableRequest = {
            merchantAccount: "MerchantAccount",
            recurringDetailReference: "reference",
            shopperReference: "test-123",
        };

        const result = await recurring.disable(request);
        expect(result).toEqual(disableSuccess);
    });
});
