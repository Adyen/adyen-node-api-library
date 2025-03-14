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

import Client from "./client";
import Config from "./config";


class Service {
    public apiKeyRequired = false;
    public client: Client;

    protected constructor(client: Client) {
        this.client = client;
    }

    protected createBaseUrl(url: string): string {
        const config: Config = this.client.config;

        if (config.environment !== "LIVE") {
            return url.replace("-live", "-test");
        }

        if (url.includes("pal-")) {
            if (this.client.liveEndpointUrlPrefix === "")
            {
                throw new Error("Please provide your unique live url prefix on the setEnvironment() call on the Client.");
            }
            return url.replace("https://pal-test.adyen.com/pal/servlet/",
                    `https://${this.client.liveEndpointUrlPrefix}-pal-live.adyenpayments.com/pal/servlet/`);
        }

        if (url.includes("checkout-")) {
            if (this.client.liveEndpointUrlPrefix === "")
            {
                throw new Error("Please provide your unique live url prefix on the setEnvironment() call on the Client.");
            }

            if (url.includes('/possdk/v68')) {
                return url.replace("https://checkout-test.adyen.com/",
                  `https://${this.client.liveEndpointUrlPrefix}-checkout-live.adyenpayments.com/`);
            }

            return url.replace("https://checkout-test.adyen.com/",
                    `https://${this.client.liveEndpointUrlPrefix}-checkout-live.adyenpayments.com/checkout/`);
        }

        return url.replace("-test", "-live");
    }
}

export default Service;
