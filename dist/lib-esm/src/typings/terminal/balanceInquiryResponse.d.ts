import { LoyaltyAccountStatus } from './loyaltyAccountStatus';
import { PaymentAccountStatus } from './paymentAccountStatus';
import { Response } from './response';
export declare class BalanceInquiryResponse {
    'loyaltyAccountStatus'?: LoyaltyAccountStatus;
    'paymentAccountStatus'?: PaymentAccountStatus;
    'response': Response;
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
