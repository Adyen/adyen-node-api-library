import { AlgorithmIdentifier } from './algorithmIdentifier';
import { AnyType } from './anyType';
import { ContentType } from './contentType';
export declare class EncryptedContent {
    'contentEncryptionAlgorithm': AlgorithmIdentifier;
    'contentType': ContentType;
    'encryptedData': AnyType;
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
