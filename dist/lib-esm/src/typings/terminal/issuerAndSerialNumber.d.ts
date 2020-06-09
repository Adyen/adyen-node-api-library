import { Issuer } from './issuer';
export declare class IssuerAndSerialNumber {
    'issuer': Issuer;
    'serialNumber': number;
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
