import { AnyType } from './anyType';
export declare class NexoDerivedKey {
    'cipherKey'?: AnyType;
    'hmacKey'?: AnyType;
    'iv'?: AnyType;
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
