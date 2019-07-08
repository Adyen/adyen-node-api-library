export declare class ApplicationInfo {
    adyenLibrary?: CommonField;
    adyenPaymentSource?: CommonField;
    externalPlatform?: ExternalPlatform;
    merchantApplication?: CommonField;
    merchantDevice?: MerchantDevice;
    paymentDetailsSource?: CommonField;
    shopperInteractionDevice?: ShopperInteractionDevice;
    constructor();
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
