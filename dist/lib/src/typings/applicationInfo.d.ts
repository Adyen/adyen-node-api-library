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
export {};
