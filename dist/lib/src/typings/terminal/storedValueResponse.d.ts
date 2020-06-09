import { POIData } from './pOIData';
import { Response } from './response';
import { SaleData } from './saleData';
import { StoredValueResult } from './storedValueResult';
export declare class StoredValueResponse {
    'pOIData': POIData;
    'response': Response;
    'saleData': SaleData;
    'storedValueResult'?: Array<StoredValueResult>;
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
