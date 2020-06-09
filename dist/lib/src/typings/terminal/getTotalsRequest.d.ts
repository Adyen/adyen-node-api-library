import { TotalFilter } from './totalFilter';
export declare class GetTotalsRequest {
    'totalDetails'?: Array<GetTotalsRequest.TotalDetailsEnum>;
    'totalFilter'?: TotalFilter;
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
export declare namespace GetTotalsRequest {
    enum TotalDetailsEnum {
        OperatorID,
        POIID,
        SaleID,
        ShiftNumber,
        TotalsGroupID
    }
}
