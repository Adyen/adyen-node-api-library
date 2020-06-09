import { IssuerAndSerialNumber } from './issuerAndSerialNumber';
export declare class SignerIdentifier {
    'issuerAndSerialNumber': IssuerAndSerialNumber;
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
