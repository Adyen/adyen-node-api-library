import { LoyaltyResult } from './loyaltyResult';
import { POIData } from './pOIData';
import { PaymentReceipt } from './paymentReceipt';
import { Response } from './response';
import { SaleData } from './saleData';
export declare class LoyaltyResponse {
    'loyaltyResult'?: Array<LoyaltyResult>;
    'paymentReceipt'?: Array<PaymentReceipt>;
    'pOIData': POIData;
    'response': Response;
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
