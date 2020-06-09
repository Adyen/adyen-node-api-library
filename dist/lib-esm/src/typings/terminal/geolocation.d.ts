import { GeographicCoordinates } from './geographicCoordinates';
import { UTMCoordinates } from './uTMCoordinates';
export declare class Geolocation {
    'geographicCoordinates'?: GeographicCoordinates;
    'uTMCoordinates'?: UTMCoordinates;
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
