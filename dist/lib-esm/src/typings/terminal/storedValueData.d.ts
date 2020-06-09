import { OriginalPOITransaction } from './originalPOITransaction';
import { StoredValueAccountId } from './storedValueAccountId';
import { StoredValueTransactionType } from './storedValueTransactionType';
export declare class StoredValueData {
    'currency': string;
    'eanUpc'?: string;
    'itemAmount': number;
    'originalPOITransaction'?: OriginalPOITransaction;
    'productCode'?: string;
    'storedValueAccountID'?: StoredValueAccountId;
    'storedValueProvider'?: string;
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
