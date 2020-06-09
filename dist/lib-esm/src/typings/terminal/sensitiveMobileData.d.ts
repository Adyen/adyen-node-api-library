export declare class SensitiveMobileData {
    'iMEI'?: string;
    'iMSI'?: string;
    'mSISDN': string;
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
