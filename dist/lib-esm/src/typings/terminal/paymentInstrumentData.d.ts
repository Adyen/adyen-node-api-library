import { CardData } from './cardData';
import { CheckData } from './checkData';
import { MobileData } from './mobileData';
import { PaymentInstrumentType } from './paymentInstrumentType';
export declare class PaymentInstrumentData {
    'cardData'?: CardData;
    'checkData'?: CheckData;
    'mobileData'?: MobileData;
    'paymentInstrumentType': PaymentInstrumentType;
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
