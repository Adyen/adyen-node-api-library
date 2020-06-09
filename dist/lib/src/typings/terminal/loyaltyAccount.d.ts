import { LoyaltyAccountId } from './loyaltyAccountId';
export declare class LoyaltyAccount {
    'loyaltyAccountID': LoyaltyAccountId;
    'loyaltyBrand'?: string;
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
