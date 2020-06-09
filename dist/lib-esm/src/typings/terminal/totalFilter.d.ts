export declare class TotalFilter {
    'operatorID'?: string;
    'pOIID'?: string;
    'saleID'?: string;
    'shiftNumber'?: string;
    'totalsGroupID'?: string;
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
