import { ContentInformation } from './contentInformation';
import { Geolocation } from './geolocation';
import { SensitiveMobileData } from './sensitiveMobileData';
export declare class MobileData {
    'geolocation'?: Geolocation;
    'maskedMSISDN'?: string;
    'mobileCountryCode'?: string;
    'mobileNetworkCode'?: string;
    'protectedMobileData'?: ContentInformation;
    'sensitiveMobileData'?: SensitiveMobileData;
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
