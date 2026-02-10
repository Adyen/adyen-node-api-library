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


import { GeographicCoordinates } from './geographicCoordinates';
import { UTMCoordinates } from './uTMCoordinates';

export class Geolocation {
    'GeographicCoordinates'?: GeographicCoordinates;
    'UTMCoordinates'?: UTMCoordinates;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "GeographicCoordinates",
            "baseName": "GeographicCoordinates",
            "type": "GeographicCoordinates"
        },
        {
            "name": "UTMCoordinates",
            "baseName": "UTMCoordinates",
            "type": "UTMCoordinates"
        }    ];

    static getAttributeTypeMap() {
        return Geolocation.attributeTypeMap;
    }
}

