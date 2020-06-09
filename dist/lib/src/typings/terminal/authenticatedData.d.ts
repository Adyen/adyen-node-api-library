import { AlgorithmIdentifier } from './algorithmIdentifier';
import { AnyType } from './anyType';
import { EncapsulatedContent } from './encapsulatedContent';
export declare class AuthenticatedData {
    'encapsulatedContent': EncapsulatedContent;
    'keyTransportOrKEK'?: Array<AnyType>;
    'mAC': AnyType;
    'mACAlgorithm': AlgorithmIdentifier;
    'version'?: AuthenticatedData.VersionEnum;
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
export declare namespace AuthenticatedData {
    enum VersionEnum {
        V0,
        V1,
        V2,
        V3,
        V4,
        V5
    }
}
