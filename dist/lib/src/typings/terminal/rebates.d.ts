import { SaleItemRebate } from './saleItemRebate';
export declare class Rebates {
    'rebateLabel'?: string;
    'saleItemRebate'?: Array<SaleItemRebate>;
    'totalRebate'?: number;
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
