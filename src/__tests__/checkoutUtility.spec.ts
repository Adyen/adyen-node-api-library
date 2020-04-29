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
import { createClient } from "../__mocks__/base";
import {originKeysSuccess} from "../__mocks__/checkoutUtility/originkeysSuccess";
import CheckoutUtility from "../services/checkoutUtility";
import Client from "../client";

describe("Checkout Utility", (): void => {
    test.each([false,true])("should get origin keys. isMock: %p", async (isMock): Promise<void> => {
        !isMock && nock.restore();
        const client = createClient();
        const checkoutUtility = new CheckoutUtility(client);
        const originKeysRequest: ICheckoutUtility.CheckoutUtilityRequest = {
            originDomains: ["https://www.your-domain.com"],
        };

        nock(`${client.config.checkoutEndpoint}`)
            .post(`/${Client.CHECKOUT_UTILITY_API_VERSION}/originKeys`)
            .reply(200, originKeysSuccess);

        const originKeysResponse = await checkoutUtility.originKeys(originKeysRequest);
        if (originKeysResponse.originKeys) {
            return expect(originKeysResponse.originKeys["https://www.your-domain.com"].startsWith("pub.v2")).toBeTruthy();
        }
        fail("Error: originKeysResponse.originKeys is empty");
    });
});
