import { AllowedProduct } from './allowedProduct';
import { ContentInformation } from './contentInformation';
import { CustomerOrder } from './customerOrder';
import { PaymentToken } from './paymentToken';
import { SensitiveCardData } from './sensitiveCardData';
export declare class CardData {
    'allowedProduct'?: Array<AllowedProduct>;
    'allowedProductCode'?: Array<string>;
    'cardCountryCode'?: string;
    'customerOrder'?: Array<CustomerOrder>;
    'entryMode'?: Array<CardData.EntryModeEnum>;
    'maskedPAN'?: string;
    'paymentAccountRef'?: string;
    'paymentBrand'?: string;
    'paymentToken'?: PaymentToken;
    'protectedCardData'?: ContentInformation;
    'sensitiveCardData'?: SensitiveCardData;
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
export declare namespace CardData {
    enum EntryModeEnum {
        Contactless,
        File,
        ICC,
        Keyed,
        MagStripe,
        Manual,
        Mobile,
        RFID,
        Scanned,
        SynchronousICC,
        Tapped
    }
}
