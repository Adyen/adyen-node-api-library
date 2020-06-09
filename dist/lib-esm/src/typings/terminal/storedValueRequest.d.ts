import { SaleData } from './saleData';
import { StoredValueData } from './storedValueData';
export declare class StoredValueRequest {
    'customerLanguage'?: string;
    'saleData': SaleData;
    'storedValueData': Array<StoredValueData>;
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
