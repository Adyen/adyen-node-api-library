// Generated using typescript-generator version 2.14.505 on 2019-06-11 10:28:22.

import LibraryConstants from "../constants/libraryConstants";

/**
 * @deprecated Use typings declared through 'Types' instead. See [README](https://github.com/Adyen/adyen-node-api-library?tab=readme-ov-file#usage-in-typescript) for details
 */
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
            name: LibraryConstants.LIB_NAME,
            version: LibraryConstants.LIB_VERSION,
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