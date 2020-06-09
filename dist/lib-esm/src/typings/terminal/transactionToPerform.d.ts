import { LoyaltyRequest } from './loyaltyRequest';
import { PaymentRequest } from './paymentRequest';
import { ReversalRequest } from './reversalRequest';
export declare class TransactionToPerform {
    'loyaltyRequest'?: LoyaltyRequest;
    'paymentRequest'?: PaymentRequest;
    'reversalRequest'?: ReversalRequest;
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
