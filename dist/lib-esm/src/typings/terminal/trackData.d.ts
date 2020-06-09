export declare class TrackData {
    'trackFormat'?: TrackData.TrackFormatEnum;
    'trackNumb'?: number;
    'value'?: string;
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
export declare namespace TrackData {
    enum TrackFormatEnum {
        AAMVA,
        CMC7,
        E13B,
        ISO,
        JISI,
        JISII
    }
}
