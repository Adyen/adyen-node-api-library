import { LoyaltyAccountId } from './loyaltyAccountId';
import { TransactionIdentification } from './transactionIdentification';
export declare class LoyaltyAccountReq {
    'cardAcquisitionReference'?: TransactionIdentification;
    'loyaltyAccountID'?: LoyaltyAccountId;
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
