import { DisplayOutput } from './displayOutput';
import { InputData } from './inputData';
export declare class InputRequest {
    'displayOutput'?: DisplayOutput;
    'inputData': InputData;
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
