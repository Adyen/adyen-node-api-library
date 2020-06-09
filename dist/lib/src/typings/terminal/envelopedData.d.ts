import { AnyType } from './anyType';
import { EncryptedContent } from './encryptedContent';
export declare class EnvelopedData {
    'encryptedContent': EncryptedContent;
    'keyTransportOrKEK'?: Array<AnyType>;
    'version'?: EnvelopedData.VersionEnum;
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
export declare namespace EnvelopedData {
    enum VersionEnum {
        V0,
        V1,
        V2,
        V3,
        V4,
        V5
    }
}
