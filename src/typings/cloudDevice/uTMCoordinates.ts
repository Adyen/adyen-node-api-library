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


export class UTMCoordinates {
    'UTMEastward': string;
    'UTMNorthward': string;
    'UTMZone': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "UTMEastward",
            "baseName": "UTMEastward",
            "type": "string"
        },
        {
            "name": "UTMNorthward",
            "baseName": "UTMNorthward",
            "type": "string"
        },
        {
            "name": "UTMZone",
            "baseName": "UTMZone",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return UTMCoordinates.attributeTypeMap;
    }
}

