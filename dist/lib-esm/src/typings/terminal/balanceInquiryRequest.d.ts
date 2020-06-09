import { LoyaltyAccountReq } from './loyaltyAccountReq';
import { PaymentAccountReq } from './paymentAccountReq';
export declare class BalanceInquiryRequest {
    'loyaltyAccountReq'?: LoyaltyAccountReq;
    'paymentAccountReq'?: PaymentAccountReq;
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
