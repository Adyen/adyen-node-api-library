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


import { TrackData } from './trackData';

export class SensitiveCardData {
    'CardSeqNumb'?: string;
    'ExpiryDate'?: string;
    'PAN'?: string;
    'TrackData'?: Array<TrackData>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "CardSeqNumb",
            "baseName": "CardSeqNumb",
            "type": "string"
        },
        {
            "name": "ExpiryDate",
            "baseName": "ExpiryDate",
            "type": "string"
        },
        {
            "name": "PAN",
            "baseName": "PAN",
            "type": "string"
        },
        {
            "name": "TrackData",
            "baseName": "TrackData",
            "type": "Array<TrackData>"
        }    ];

    static getAttributeTypeMap() {
        return SensitiveCardData.attributeTypeMap;
    }
}

