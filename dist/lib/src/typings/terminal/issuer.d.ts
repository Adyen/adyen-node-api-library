import { RelativeDistinguishedName } from './relativeDistinguishedName';
export declare class Issuer {
    'relativeDistinguishedName': Array<RelativeDistinguishedName>;
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
