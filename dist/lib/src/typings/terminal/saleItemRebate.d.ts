export declare class SaleItemRebate {
    'eanUpc'?: string;
    'itemAmount'?: number;
    'itemID': number;
    'productCode': string;
    'quantity'?: number;
    'rebateLabel'?: string;
    'unitOfMeasure'?: SaleItemRebate.UnitOfMeasureEnum;
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
export declare namespace SaleItemRebate {
    enum UnitOfMeasureEnum {
        Case,
        Centilitre,
        Centimetre,
        Foot,
        Gram,
        Inch,
        Kilogram,
        Kilometre,
        Litre,
        Meter,
        Mile,
        Other,
        Ounce,
        Pint,
        Pound,
        Quart,
        UKGallon,
        USGallon,
        Yard
    }
}
