import { ReconciliationType } from './reconciliationType';
import { Response } from './response';
import { TransactionTotals } from './transactionTotals';
export declare class ReconciliationResponse {
    'pOIReconciliationID'?: string;
    'reconciliationType': ReconciliationType;
    'response': Response;
    'transactionTotals'?: Array<TransactionTotals>;
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
