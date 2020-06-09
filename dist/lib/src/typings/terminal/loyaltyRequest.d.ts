import { LoyaltyData } from './loyaltyData';
import { LoyaltyTransaction } from './loyaltyTransaction';
import { SaleData } from './saleData';
export declare class LoyaltyRequest {
    'loyaltyData'?: Array<LoyaltyData>;
    'loyaltyTransaction': LoyaltyTransaction;
    'saleData': SaleData;
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
