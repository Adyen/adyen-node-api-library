import { TransactionIdentification } from './transactionIdentification';
export declare class LoyaltyAcquirerData {
    'approvalCode'?: string;
    'hostReconciliationID'?: string;
    'loyaltyAcquirerID'?: string;
    'loyaltyTransactionID'?: TransactionIdentification;
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
