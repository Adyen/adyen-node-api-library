import { ContentInformation } from './contentInformation';
import { PINFormatType } from './pINFormatType';
export declare class CardholderPIN {
    'additionalInput'?: string;
    'encrPINBlock': ContentInformation;
    'pINFormat': PINFormatType;
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
