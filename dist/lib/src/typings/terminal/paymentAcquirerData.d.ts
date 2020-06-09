import { TransactionIdentification } from './transactionIdentification';
export declare class PaymentAcquirerData {
    'acquirerID'?: string;
    'acquirerPOIID': string;
    'acquirerTransactionID'?: TransactionIdentification;
    'approvalCode'?: string;
    'merchantID': string;
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
