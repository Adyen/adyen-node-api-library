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
        }
    }
}

export interface CommonField {
    name?: string;
    version?: string;
}

export interface ExternalPlatform extends CommonField {
    integrator?: string;
}

export interface MerchantDevice {
    os?: string;
    osVersion?: string;
    reference?: string;
}

export interface ShopperInteractionDevice {
    os?: string;
    osVersion?: string;
    locale?: string;
}