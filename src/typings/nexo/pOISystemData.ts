/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { POISoftware } from './pOISoftware';
import { POIStatus } from './pOIStatus';
import { POITerminalData } from './pOITerminalData';

export class POISystemData {
    'DateTime': Date;
    'POISoftware': POISoftware;
    'POITerminalData'?: POITerminalData;
    'POIStatus'?: POIStatus;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "DateTime",
            "baseName": "DateTime",
            "type": "Date"
        },
        {
            "name": "POISoftware",
            "baseName": "POISoftware",
            "type": "POISoftware"
        },
        {
            "name": "POITerminalData",
            "baseName": "POITerminalData",
            "type": "POITerminalData"
        },
        {
            "name": "POIStatus",
            "baseName": "POIStatus",
            "type": "POIStatus"
        }    ];

    static getAttributeTypeMap() {
        return POISystemData.attributeTypeMap;
    }
}

