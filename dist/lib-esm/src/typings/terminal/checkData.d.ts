import { TrackData } from './trackData';
export declare class CheckData {
    'accountNumber'?: string;
    'bankID'?: string;
    'checkCardNumber'?: string;
    'checkNumber'?: string;
    'country'?: string;
    'trackData'?: TrackData;
    'typeCode'?: CheckData.TypeCodeEnum;
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
export declare namespace CheckData {
    enum TypeCodeEnum {
        Company,
        Personal
    }
}
