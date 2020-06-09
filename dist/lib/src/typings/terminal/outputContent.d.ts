import { AnyType } from './anyType';
import { OutputBarcode } from './outputBarcode';
import { OutputFormatType } from './outputFormatType';
import { OutputText } from './outputText';
import { PredefinedContent } from './predefinedContent';
export declare class OutputContent {
    'outputBarcode'?: OutputBarcode;
    'outputFormat': OutputFormatType;
    'outputText'?: Array<OutputText>;
    'outputXHTML'?: AnyType;
    'predefinedContent'?: PredefinedContent;
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
