import { createMockClientFromResponse } from "../__mocks__/base";
import {originKeysSuccess} from "../__mocks__/checkoutUtility/originkeysSuccess";
import CheckoutUtility from "../service/checkoutUtility";
import {CheckoutUtilityRequest} from "../typings/checkoutUtility";

describe("Checkout Utility", (): void => {
    it("should get origin keys", async (): Promise<void> => {
        const client = createMockClientFromResponse(originKeysSuccess);
        const checkoutUtility = new CheckoutUtility(client);
        const originKeysRequest: CheckoutUtilityRequest = {
            originDomains: ["www.test.com", "https://www.your-domain2.com"],
        };
        const originKeysResponse = await checkoutUtility.originKeys(originKeysRequest);
        expect(originKeysResponse.originKeys["https://www.your-domain1.com"])
            .toEqual("pub.v2.7814286629520534.aHR0cHM6Ly93d3cueW91ci1kb21haW4xLmNvbQ.UEwIBmW9-c_uXo5wSEr2w8Hz8hVIpujXPHjpcEse3xI");
    });
});
