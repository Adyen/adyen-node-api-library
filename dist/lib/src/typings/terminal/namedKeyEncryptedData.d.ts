import { EncryptedContent } from './encryptedContent';
export declare class NamedKeyEncryptedData {
    'encryptedContent': EncryptedContent;
    'keyName'?: string;
    'version'?: NamedKeyEncryptedData.VersionEnum;
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
export declare namespace NamedKeyEncryptedData {
    enum VersionEnum {
        V0,
        V1,
        V2,
        V3,
        V4,
        V5
    }
}
