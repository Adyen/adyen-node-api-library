import { AlgorithmIdentifier } from './algorithmIdentifier';
import { AnyType } from './anyType';
import { EncapsulatedContent } from './encapsulatedContent';
import { Signer } from './signer';
export declare class SignedData {
    'certificate'?: Array<AnyType>;
    'digestAlgorithm': Array<AlgorithmIdentifier>;
    'encapsulatedContent': EncapsulatedContent;
    'signer': Array<Signer>;
    'version'?: SignedData.VersionEnum;
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
export declare namespace SignedData {
    enum VersionEnum {
        V0,
        V1,
        V2,
        V3,
        V4,
        V5
    }
}
