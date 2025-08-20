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



export class TrackData {
    'TrackFormat'?: TrackData.TrackFormatEnum;
    'TrackNumb'?: number;
    'Value'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "TrackFormat",
            "baseName": "TrackFormat",
            "type": "TrackData.TrackFormatEnum"
        },
        {
            "name": "TrackNumb",
            "baseName": "TrackNumb",
            "type": "number"
        },
        {
            "name": "Value",
            "baseName": "Value",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TrackData.attributeTypeMap;
    }
}

export namespace TrackData {
    export enum TrackFormatEnum {
        Aamva = <any> 'AAMVA',
        Cmc7 = <any> 'CMC-7',
        E13B = <any> 'E-13B',
        Iso = <any> 'ISO',
        JisI = <any> 'JIS-I',
        JisIi = <any> 'JIS-II'
    }
}
