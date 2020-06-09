export declare class SaleItem {
    'additionalProductInfo'?: string;
    'eanUpc'?: string;
    'itemAmount': number;
    'itemID': number;
    'productCode': string;
    'productLabel'?: string;
    'quantity'?: number;
    'saleChannel'?: string;
    'taxCode'?: string;
    'unitOfMeasure'?: SaleItem.UnitOfMeasureEnum;
    'unitPrice'?: number;
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
export declare namespace SaleItem {
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
