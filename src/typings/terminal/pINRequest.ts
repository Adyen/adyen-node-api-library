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
 * Copyright (c) 2021 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
 
/**
 * Terminal API
 * Definition of Terminal API Schema
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { CardholderPIN } from './cardholderPIN';
import { PINRequestType } from './pINRequestType';

export class PINRequest {
    'AdditionalInput'?: string;
    'CardholderPIN'?: CardholderPIN;
    'KeyReference'?: string;
    'MaxWaitingTime'?: number;
    'PINEncAlgorithm'?: string;
    'PINFormat'?: PINRequest.PINFormatEnum;
    'PINRequestType': PINRequestType;
    'PINVerifMethod'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AdditionalInput",
            "baseName": "AdditionalInput",
            "type": "string"
        },
        {
            "name": "CardholderPIN",
            "baseName": "CardholderPIN",
            "type": "CardholderPIN"
        },
        {
            "name": "KeyReference",
            "baseName": "KeyReference",
            "type": "string"
        },
        {
            "name": "MaxWaitingTime",
            "baseName": "MaxWaitingTime",
            "type": "number"
        },
        {
            "name": "PINEncAlgorithm",
            "baseName": "PINEncAlgorithm",
            "type": "string"
        },
        {
            "name": "PINFormat",
            "baseName": "PINFormat",
            "type": "PINRequest.PINFormatEnum"
        },
        {
            "name": "PINRequestType",
            "baseName": "PINRequestType",
            "type": "PINRequestType"
        },
        {
            "name": "PINVerifMethod",
            "baseName": "PINVerifMethod",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PINRequest.attributeTypeMap;
    }
}

export namespace PINRequest {
    export enum PINFormatEnum {
        Iso0 = <any> 'ISO0',
        Iso1 = <any> 'ISO1',
        Iso2 = <any> 'ISO2',
        Iso3 = <any> 'ISO3'
    }
}