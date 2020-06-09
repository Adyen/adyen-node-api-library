import { TransactionIdentification } from './transactionIdentification';
export declare class POIData {
    'pOIReconciliationID'?: string;
    'pOITransactionID': TransactionIdentification;
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
