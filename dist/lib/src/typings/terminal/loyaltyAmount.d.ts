export declare class LoyaltyAmount {
    'currency'?: string;
    'loyaltyUnit'?: LoyaltyAmount.LoyaltyUnitEnum;
    'value'?: number;
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
export declare namespace LoyaltyAmount {
    enum LoyaltyUnitEnum {
        Monetary,
        Point
    }
}
