import { AmountsReq } from './amountsReq';
import { OriginalPOITransaction } from './originalPOITransaction';
import { SaleItem } from './saleItem';
import { TransactionConditions } from './transactionConditions';
export declare class PaymentTransaction {
    'amountsReq': AmountsReq;
    'originalPOITransaction'?: OriginalPOITransaction;
    'saleItem'?: Array<SaleItem>;
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
