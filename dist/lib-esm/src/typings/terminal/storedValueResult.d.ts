import { StoredValueAccountStatus } from './storedValueAccountStatus';
import { StoredValueTransactionType } from './storedValueTransactionType';
import { TransactionIdentification } from './transactionIdentification';
export declare class StoredValueResult {
    'currency': string;
    'eanUpc'?: string;
    'hostTransactionID'?: TransactionIdentification;
    'itemAmount': number;
    'productCode': string;
    'storedValueAccountStatus': StoredValueAccountStatus;
    'storedValueTransactionType': StoredValueTransactionType;
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
