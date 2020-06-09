import { AnyType } from './anyType';
import { DocumentQualifierType } from './documentQualifierType';
import { OutputContent } from './outputContent';
import { ResponseModeType } from './responseModeType';
export declare class PrintOutput {
    'documentQualifier': DocumentQualifierType;
    'integratedPrintFlag'?: boolean;
    'outputContent': OutputContent;
    'outputSignature'?: AnyType;
    'requiredSignatureFlag'?: boolean;
    'responseMode': ResponseModeType;
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
