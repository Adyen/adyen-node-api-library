import { ReconciliationType } from './reconciliationType';
export declare class ReconciliationRequest {
    'acquirerID'?: Array<string>;
    'pOIReconciliationID'?: string;
    'reconciliationType': ReconciliationType;
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
