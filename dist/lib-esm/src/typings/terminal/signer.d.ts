import { AlgorithmIdentifier } from './algorithmIdentifier';
import { AnyType } from './anyType';
import { SignerIdentifier } from './signerIdentifier';
export declare class Signer {
    'digestAlgorithm': AlgorithmIdentifier;
    'signature': AnyType;
    'signatureAlgorithm': AlgorithmIdentifier;
    'signerIdentifier': SignerIdentifier;
    'version'?: Signer.VersionEnum;
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
export declare namespace Signer {
    enum VersionEnum {
        V0,
        V1,
        V2,
        V3,
        V4,
        V5
    }
}
