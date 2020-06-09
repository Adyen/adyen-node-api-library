import { CustomerOrder } from './customerOrder';
import { LoyaltyAccount } from './loyaltyAccount';
import { POIData } from './pOIData';
import { PaymentInstrumentData } from './paymentInstrumentData';
import { Response } from './response';
import { SaleData } from './saleData';
export declare class CardAcquisitionResponse {
    'customerOrder'?: Array<CustomerOrder>;
    'loyaltyAccount'?: Array<LoyaltyAccount>;
    'paymentBrand'?: Array<string>;
    'paymentInstrumentData'?: PaymentInstrumentData;
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
