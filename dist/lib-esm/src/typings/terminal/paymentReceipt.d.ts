import { DocumentQualifierType } from './documentQualifierType';
import { OutputContent } from './outputContent';
export declare class PaymentReceipt {
    'documentQualifier': DocumentQualifierType;
    'integratedPrintFlag'?: boolean;
    'outputContent': OutputContent;
    'requiredSignatureFlag'?: boolean;
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
