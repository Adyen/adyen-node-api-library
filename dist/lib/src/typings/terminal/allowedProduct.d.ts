export declare class AllowedProduct {
    'additionalProductInfo'?: string;
    'eanUpc'?: string;
    'productCode': string;
    'productLabel'?: string;
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
