/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2025 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
 
/**
 * Cloud Device API
 * Definition of Cloud Device API Schema
 *
 */


import { POISoftware } from './pOISoftware';
import { POIStatus } from './pOIStatus';
import { POITerminalData } from './pOITerminalData';

export class POISystemData {
    'DateTime': { [key: string]: any; };
    'POISoftware': POISoftware;
    'POIStatus'?: POIStatus;
    'POITerminalData'?: POITerminalData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "DateTime",
            "baseName": "DateTime",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "POISoftware",
            "baseName": "POISoftware",
            "type": "POISoftware"
        },
        {
            "name": "POIStatus",
            "baseName": "POIStatus",
            "type": "POIStatus"
        },
        {
            "name": "POITerminalData",
            "baseName": "POITerminalData",
            "type": "POITerminalData"
        }    ];

    static getAttributeTypeMap() {
        return POISystemData.attributeTypeMap;
    }
}

