import { TransactionType } from './transactionType';
export declare class LoyaltyTotals {
    'transactionAmount': number;
    'transactionCount': number;
    'transactionType': TransactionType;
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
