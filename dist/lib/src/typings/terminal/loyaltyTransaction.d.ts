import { LoyaltyTransactionType } from './loyaltyTransactionType';
import { OriginalPOITransaction } from './originalPOITransaction';
import { SaleItem } from './saleItem';
import { TransactionConditions } from './transactionConditions';
export declare class LoyaltyTransaction {
    'currency'?: string;
    'loyaltyTransactionType': LoyaltyTransactionType;
    'originalPOITransaction'?: OriginalPOITransaction;
    'saleItem'?: Array<SaleItem>;
    'totalAmount'?: number;
    'transactionConditions'?: TransactionConditions;
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
