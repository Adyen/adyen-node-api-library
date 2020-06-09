import { DisplayOutput } from './displayOutput';
export declare class CardReaderInitRequest {
    'displayOutput'?: DisplayOutput;
    'forceEntryMode'?: Array<Array<CardReaderInitRequest.ForceEntryModeEnum>>;
    'leaveCardFlag'?: boolean;
    'maxWaitingTime'?: number;
    'warmResetFlag'?: boolean;
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
export declare namespace CardReaderInitRequest {
    enum ForceEntryModeEnum {
        CheckReader,
        Contactless,
        File,
        ICC,
        Keyed,
        MagStripe,
        Manual,
        RFID,
        Scanned,
        SynchronousICC,
        Tapped
    }
}
