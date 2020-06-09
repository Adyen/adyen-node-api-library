import { DisplayOutput } from './displayOutput';
export declare class CardReaderPowerOffRequest {
    'displayOutput'?: DisplayOutput;
    'maxWaitingTime'?: number;
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
