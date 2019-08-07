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
 *
 * Adyen NodeJS API Library
 *
 * Copyright (c) 2019 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

import nock from "nock";
import { createMockClientFromResponse } from "../__mocks__/base";
import {originKeysSuccess} from "../__mocks__/checkoutUtility/originkeysSuccess";
import CheckoutUtility from "../services/checkoutUtility";
import {CheckoutUtilityRequest} from "../typings/checkoutUtility";
import Client from "../client";

describe("Checkout Utility", (): void => {
    it("should get origin keys", async (): Promise<void> => {
        const client = createMockClientFromResponse();
        const checkoutUtility = new CheckoutUtility(client);
        const originKeysRequest: CheckoutUtilityRequest = {
            originDomains: ["www.test.com", "https://www.your-domain2.com"],
        };

        nock(`${client.config.checkoutEndpoint}`)
            .post(`/${Client.CHECKOUT_UTILITY_API_VERSION}/originKeys`)
            .reply(200, originKeysSuccess);

        const originKeysResponse = await checkoutUtility.originKeys(originKeysRequest);
        expect(originKeysResponse.originKeys["https://www.your-domain1.com"])
            .toEqual("pub.v2.7814286629520534.aHR0cHM6Ly93d3cueW91ci1kb21haW4xLmNvbQ.UEwIBmW9-c_uXo5wSEr2w8Hz8hVIpujXPHjpcEse3xI");
    });
});
