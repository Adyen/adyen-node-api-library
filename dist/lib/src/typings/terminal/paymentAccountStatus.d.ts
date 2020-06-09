import { LoyaltyAccountStatus } from './loyaltyAccountStatus';
import { PaymentAcquirerData } from './paymentAcquirerData';
import { PaymentInstrumentData } from './paymentInstrumentData';
export declare class PaymentAccountStatus {
    'currency'?: string;
    'currentBalance'?: number;
    'loyaltyAccountStatus'?: LoyaltyAccountStatus;
    'paymentAcquirerData'?: PaymentAcquirerData;
    'paymentInstrumentData'?: PaymentInstrumentData;
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
