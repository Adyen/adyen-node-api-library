import { IdentificationType } from './identificationType';
import { StoredValueAccountType } from './storedValueAccountType';
export declare class StoredValueAccountId {
    'entryMode': Array<StoredValueAccountId.EntryModeEnum>;
    'expiryDate'?: string;
    'identificationType': IdentificationType;
    'ownerName'?: string;
    'storedValueAccountType': StoredValueAccountType;
    'storedValueProvider'?: string;
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
export declare namespace StoredValueAccountId {
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
}
