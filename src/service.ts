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
            return url;
        }

        if (url.includes("pal-")) {
            return url.replace("https://pal-test.adyen.com/pal/servlet/",
                    `https://${this.client.liveEndpointUrlPrefix}-pal-live.adyenpayments.com/pal/servlet/`);
        }

        if (url.includes("checkout-")) {
            return url.replace("https://checkout-test.adyen.com/",
                    `https://${this.client.liveEndpointUrlPrefix}-checkout-live.adyenpayments.com/checkout/`);
        }

        return url.replace("-test", "-live");
    }
}

export default Service;
