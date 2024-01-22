/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { TrackFormat } from './trackFormat';

/**
* ISO 7813 - ISO 4909.  Generic data structure for a card track, used when the magstripe card reader is located on the Sale Terminal, or for magstripe Card Reader device request. The data structure is also used to store the line at the bottom of a bank check. Magnetic track or magnetic ink characters line.
*/
export class TrackData {
    'TrackNumb'?: number;
    'TrackFormat'?: TrackFormat;
    'TrackValue': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "TrackNumb",
            "baseName": "TrackNumb",
            "type": "number"
        },
        {
            "name": "TrackFormat",
            "baseName": "TrackFormat",
            "type": "TrackFormat"
        },
        {
            "name": "TrackValue",
            "baseName": "TrackValue",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TrackData.attributeTypeMap;
    }
}
