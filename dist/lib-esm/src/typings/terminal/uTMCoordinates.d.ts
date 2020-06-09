export declare class UTMCoordinates {
    'uTMEastward': string;
    'uTMNorthward': string;
    'uTMZone': string;
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
