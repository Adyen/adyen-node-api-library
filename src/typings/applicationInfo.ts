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

// Generated using typescript-generator version 2.14.505 on 2019-06-11 10:28:22.

import Client from "../client";

export class ApplicationInfo {
    adyenLibrary?: CommonField;
    adyenPaymentSource?: CommonField;
    externalPlatform?: ExternalPlatform;
    merchantApplication?: CommonField;
    merchantDevice?: MerchantDevice;
    paymentDetailsSource?: CommonField;
    shopperInteractionDevice?: ShopperInteractionDevice;

    constructor() {
        this.adyenLibrary = {
            name: Client.LIB_NAME,
            version: Client.LIB_VERSION,
        };
    }
}

declare interface CommonField {
    name?: string;
    version?: string;
}

declare interface ExternalPlatform extends CommonField {
    integrator?: string;
}

declare interface MerchantDevice {
    os?: string;
    osVersion?: string;
    reference?: string;
}

declare interface ShopperInteractionDevice {
    os?: string;
    osVersion?: string;
    locale?: string;
}