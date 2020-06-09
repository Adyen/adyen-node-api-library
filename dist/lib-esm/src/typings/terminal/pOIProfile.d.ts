export declare class POIProfile {
    'genericProfile'?: POIProfile.GenericProfileEnum;
    'serviceProfiles'?: Array<POIProfile.ServiceProfilesEnum>;
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
export declare namespace POIProfile {
    enum GenericProfileEnum {
        Basic,
        Extended,
        Standard
    }
    enum ServiceProfilesEnum {
        Batch,
        CardReader,
        Communication,
        Loyalty,
        OneTimeRes,
        PIN,
        Reservation,
        Sound,
        StoredValue,
        Synchro
    }
}
