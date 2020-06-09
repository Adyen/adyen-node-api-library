import { LoyaltyAccountId } from './loyaltyAccountId';
import { LoyaltyAmount } from './loyaltyAmount';
import { TransactionIdentification } from './transactionIdentification';
export declare class LoyaltyData {
    'cardAcquisitionReference'?: TransactionIdentification;
    'loyaltyAccountID'?: LoyaltyAccountId;
    'loyaltyAmount'?: LoyaltyAmount;
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
