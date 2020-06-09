import { LoyaltyAccount } from './loyaltyAccount';
import { LoyaltyAcquirerData } from './loyaltyAcquirerData';
import { LoyaltyAmount } from './loyaltyAmount';
import { Rebates } from './rebates';
export declare class LoyaltyResult {
    'currentBalance'?: number;
    'loyaltyAccount': LoyaltyAccount;
    'loyaltyAcquirerData'?: LoyaltyAcquirerData;
    'loyaltyAmount'?: LoyaltyAmount;
    'rebates'?: Rebates;
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
