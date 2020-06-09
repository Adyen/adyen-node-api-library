import { ICCResetData } from './iCCResetData';
import { Response } from './response';
import { TrackData } from './trackData';
export declare class CardReaderInitResponse {
    'entryMode'?: Array<CardReaderInitResponse.EntryModeEnum>;
    'iCCResetData'?: ICCResetData;
    'response': Response;
    'trackData'?: Array<TrackData>;
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
export declare namespace CardReaderInitResponse {
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
