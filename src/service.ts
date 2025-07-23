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

/**
 * Base Service class for all API services.
 * Handles the setup of the endpoint URL for the API requests.
 */
class Service {
    public apiKeyRequired = false;
    public client: Client;

    protected constructor(client: Client) {
        this.client = client;
    }

    /**
     * Constructs the base URL for API requests based on environment and endpoint type.
     * - For non-LIVE environments, replaces '-live' with '-test'.
     * - For LIVE environment, requires a liveEndpointUrlPrefix.
     * - Handles special cases for 'pal-' and 'checkout-' endpoints.
     * @param url - The original endpoint URL.
     * @returns The formatted endpoint URL.
     * @throws Error if liveEndpointUrlPrefix is missing for LIVE environment.
     */    
    protected createBaseUrl(url: string): string {
        const config: Config = this.client.config;

        if (config.environment !== "LIVE") {
            return url.replace("-live", "-test");
        }

        if(config.environment === "LIVE") {
            if(config.liveEndpointUrlPrefix === undefined || config.liveEndpointUrlPrefix === "") {
                throw new Error("Live endpoint URL prefix must be provided for LIVE environment.");
            }
        }

        if (url.includes("pal-")) {
            return url.replace("https://pal-test.adyen.com/pal/servlet/",
                    `https://${this.client.config.liveEndpointUrlPrefix}-pal-live.adyenpayments.com/pal/servlet/`);
        }

        if (url.includes("checkout-")) {
            if (url.includes("/possdk/v68")) {
                return url.replace("https://checkout-test.adyen.com/",
                  `https://${this.client.config.liveEndpointUrlPrefix}-checkout-live.adyenpayments.com/`);
            }

            return url.replace("https://checkout-test.adyen.com/",
                    `https://${this.client.config.liveEndpointUrlPrefix}-checkout-live.adyenpayments.com/checkout/`);
        }

        return url.replace("-test", "-live");
    }
}

export default Service;
