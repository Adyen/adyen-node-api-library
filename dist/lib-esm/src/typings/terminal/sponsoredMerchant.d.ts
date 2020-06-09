export declare class SponsoredMerchant {
    'merchantAddress'?: string;
    'merchantCategoryCode': string;
    'merchantCountry': string;
    'merchantName': string;
    'registrationID'?: string;
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
