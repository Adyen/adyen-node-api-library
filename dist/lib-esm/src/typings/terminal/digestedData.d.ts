import { AlgorithmIdentifier } from './algorithmIdentifier';
import { AnyType } from './anyType';
import { EncapsulatedContent } from './encapsulatedContent';
export declare class DigestedData {
    'digest': AnyType;
    'digestAlgorithm': AlgorithmIdentifier;
    'encapsulatedContent': EncapsulatedContent;
    'version'?: DigestedData.VersionEnum;
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
export declare namespace DigestedData {
    enum VersionEnum {
        V0,
        V1,
        V2,
        V3,
        V4,
        V5
    }
}
