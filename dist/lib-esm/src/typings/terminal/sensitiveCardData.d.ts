import { TrackData } from './trackData';
export declare class SensitiveCardData {
    'cardSeqNumb'?: string;
    'expiryDate'?: string;
    'pAN'?: string;
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
