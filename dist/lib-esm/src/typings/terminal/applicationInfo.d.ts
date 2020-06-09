import { CommonField } from './commonField';
import { ExternalPlatform } from './externalPlatform';
import { MerchantDevice } from './merchantDevice';
import { ShopperInteractionDevice } from './shopperInteractionDevice';
export declare class ApplicationInfo {
    'adyenLibrary'?: CommonField;
    'adyenPaymentSource'?: CommonField;
    'externalPlatform'?: ExternalPlatform;
    'merchantApplication'?: CommonField;
    'merchantDevice'?: MerchantDevice;
    'paymentDetailsSource'?: CommonField;
    'shopperInteractionDevice'?: ShopperInteractionDevice;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
