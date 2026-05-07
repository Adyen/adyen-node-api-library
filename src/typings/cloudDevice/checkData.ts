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

export class CheckData {
    'AccountNumber'?: string;
    'BankID'?: string;
    'CheckCardNumber'?: string;
    'CheckNumber'?: string;
    'Country'?: string;
    'TrackData'?: TrackData;
    'TypeCode'?: CheckData.TypeCodeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AccountNumber",
            "baseName": "AccountNumber",
            "type": "string"
        },
        {
            "name": "BankID",
            "baseName": "BankID",
            "type": "string"
        },
        {
            "name": "CheckCardNumber",
            "baseName": "CheckCardNumber",
            "type": "string"
        },
        {
            "name": "CheckNumber",
            "baseName": "CheckNumber",
            "type": "string"
        },
        {
            "name": "Country",
            "baseName": "Country",
            "type": "string"
        },
        {
            "name": "TrackData",
            "baseName": "TrackData",
            "type": "TrackData"
        },
        {
            "name": "TypeCode",
            "baseName": "TypeCode",
            "type": "CheckData.TypeCodeEnum"
        }    ];

    static getAttributeTypeMap() {
        return CheckData.attributeTypeMap;
    }
}

export namespace CheckData {
    export enum TypeCodeEnum {
        Company = <any> 'Company',
        Personal = <any> 'Personal'
    }
}
