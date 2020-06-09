import { MessageHeader } from './messageHeader';
import { SecurityTrailer } from './securityTrailer';
export declare class SaleToPOISecuredMessage {
    'messageHeader': MessageHeader;
    'nexoBlob': string;
    'securityTrailer': SecurityTrailer;
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
