export declare class AmountsResp {
    'authorizedAmount': number;
    'cashBackAmount'?: number;
    'currency'?: string;
    'tipAmount'?: number;
    'totalFeesAmount'?: number;
    'totalRebatesAmount'?: number;
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
