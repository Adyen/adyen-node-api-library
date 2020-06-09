import { CardholderPIN } from './cardholderPIN';
import { PINRequestType } from './pINRequestType';
export declare class PINRequest {
    'additionalInput'?: string;
    'cardholderPIN'?: CardholderPIN;
    'keyReference'?: string;
    'maxWaitingTime'?: number;
    'pINEncAlgorithm'?: string;
    'pINFormat'?: PINRequest.PINFormatEnum;
    'pINRequestType': PINRequestType;
    'pINVerifMethod'?: string;
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
export declare namespace PINRequest {
    enum PINFormatEnum {
        ISO0,
        ISO1,
        ISO2,
        ISO3
    }
}
