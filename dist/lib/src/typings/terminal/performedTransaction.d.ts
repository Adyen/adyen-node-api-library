import { LoyaltyResult } from './loyaltyResult';
import { POIData } from './pOIData';
import { PaymentResult } from './paymentResult';
import { Response } from './response';
import { SaleData } from './saleData';
export declare class PerformedTransaction {
    'loyaltyResult'?: Array<LoyaltyResult>;
    'paymentResult'?: PaymentResult;
    'pOIData': POIData;
    'response': Response;
    'reversedAmount'?: number;
    'saleData'?: SaleData;
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
