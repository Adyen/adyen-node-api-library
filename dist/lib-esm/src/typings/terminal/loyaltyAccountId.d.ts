import { IdentificationType } from './identificationType';
export declare class LoyaltyAccountId {
    'entryMode': Array<LoyaltyAccountId.EntryModeEnum>;
    'identificationSupport'?: LoyaltyAccountId.IdentificationSupportEnum;
    'identificationType': IdentificationType;
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
export declare namespace LoyaltyAccountId {
    enum EntryModeEnum {
        Contactless,
        File,
        ICC,
        Keyed,
        MagStripe,
        Manual,
        Mobile,
        RFID,
        Scanned,
        SynchronousICC,
        Tapped
    }
    enum IdentificationSupportEnum {
        HybridCard,
        LinkedCard,
        LoyaltyCard,
        NoCard
    }
}
