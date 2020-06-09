import { AnyType } from './anyType';
import { POISoftware } from './pOISoftware';
import { POIStatus } from './pOIStatus';
import { POITerminalData } from './pOITerminalData';
export declare class POISystemData {
    'dateTime': {
        [key: string]: AnyType;
    };
    'pOISoftware': POISoftware;
    'pOIStatus'?: POIStatus;
    'pOITerminalData'?: POITerminalData;
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
