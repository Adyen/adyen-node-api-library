import { LoyaltyData } from './loyaltyData';
import { PaymentData } from './paymentData';
import { PaymentTransaction } from './paymentTransaction';
import { SaleData } from './saleData';
export declare class PaymentRequest {
    'loyaltyData'?: Array<LoyaltyData>;
    'paymentData'?: PaymentData;
    'paymentTransaction': PaymentTransaction;
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
