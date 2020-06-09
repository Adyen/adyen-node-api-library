import { TransactionIdentification } from './transactionIdentification';
export declare class OriginalPOITransaction {
    'acquirerID'?: string;
    'approvalCode'?: string;
    'customerLanguage'?: string;
    'hostTransactionID'?: TransactionIdentification;
    'pOIID'?: string;
    'pOITransactionID'?: TransactionIdentification;
    'reuseCardDataFlag'?: boolean;
    'saleID'?: string;
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
