export declare class OutputBarcode {
    'barcodeType'?: OutputBarcode.BarcodeTypeEnum;
    'barcodeValue'?: string;
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
export declare namespace OutputBarcode {
    enum BarcodeTypeEnum {
        Code128,
        Code25,
        EAN13,
        EAN8,
        PDF417,
        QRCode,
        UPCA
    }
}
