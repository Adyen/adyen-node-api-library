export declare class SaleProfile {
    'genericProfile'?: SaleProfile.GenericProfileEnum;
    'serviceProfiles'?: Array<SaleProfile.ServiceProfilesEnum>;
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
export declare namespace SaleProfile {
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
