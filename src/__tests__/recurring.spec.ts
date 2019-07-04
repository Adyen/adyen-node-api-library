import { createMockClientFromResponse } from "../__mocks__/base";
import { disableSuccess } from "../__mocks__/recurring/disableSuccess";
import { listRecurringDetailsSuccess } from "../__mocks__/recurring/listRecurringDetailsSuccess";
import Recurring from "../service/recurring";
import { DisableRequest, RecurringDetailsRequest } from "../typings/recurring";

const createRecurringDetailsRequest = (): RecurringDetailsRequest => {
    return {
        merchantAccount: "MerchantAccount",
        recurring: {contract: "ONECLICK"},
        shopperReference: "test-123",
    };
};

describe("Recurring", (): void => {
    it("should test have recurring details list", async (): Promise<void> => {
        const client = createMockClientFromResponse(listRecurringDetailsSuccess);
        const recurring = new Recurring(client);
        const request = createRecurringDetailsRequest();
        const result = await recurring.listRecurringDetails(request);
        expect(result.details).toHaveLength(2);

        const [recurringDetail] = result.details;
        expect(recurringDetail.recurringDetailReference).toEqual("recurringReference");
        expect(recurringDetail.alias).toEqual("cardAlias");
        expect(recurringDetail.card.number).toEqual("1111");
    });

    it("should disable", async (): Promise<void> => {
        const client = createMockClientFromResponse(disableSuccess);
        const recurring = new Recurring(client);
        const request: DisableRequest = {
            merchantAccount: "MerchantAccount",
            recurringDetailReference: "reference",
            shopperReference: "test-123",
        };
        const result = await recurring.disable(request);
        expect(result.response).toEqual("[detail-successfully-disabled]");
    });
});
