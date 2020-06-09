import { AlgorithmType } from './algorithmType';
import { Parameter } from './parameter';
export declare class AlgorithmIdentifier {
    'algorithm': AlgorithmType;
    'parameter'?: Parameter;
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
