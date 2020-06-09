import { TransactionToPerform } from './transactionToPerform';
export declare class BatchRequest {
    'removeAllFlag'?: boolean;
    'transactionToPerform'?: Array<TransactionToPerform>;
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
