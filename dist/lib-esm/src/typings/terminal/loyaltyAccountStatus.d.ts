import { LoyaltyAccount } from './loyaltyAccount';
export declare class LoyaltyAccountStatus {
    'currency'?: string;
    'currentBalance'?: number;
    'loyaltyAccount': LoyaltyAccount;
    'loyaltyUnit'?: LoyaltyAccountStatus.LoyaltyUnitEnum;
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
export declare namespace LoyaltyAccountStatus {
    enum LoyaltyUnitEnum {
        Monetary,
        Point
    }
}
