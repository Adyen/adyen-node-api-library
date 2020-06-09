import { InputResult } from './inputResult';
import { OutputResult } from './outputResult';
export declare class InputResponse {
    'inputResult': InputResult;
    'outputResult'?: OutputResult;
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
