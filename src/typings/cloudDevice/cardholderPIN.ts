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


import { ContentInformation } from './contentInformation';
import { PINFormatType } from './pINFormatType';

export class CardholderPIN {
    'AdditionalInput'?: string;
    'EncrPINBlock': ContentInformation;
    'PINFormat': PINFormatType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AdditionalInput",
            "baseName": "AdditionalInput",
            "type": "string"
        },
        {
            "name": "EncrPINBlock",
            "baseName": "EncrPINBlock",
            "type": "ContentInformation"
        },
        {
            "name": "PINFormat",
            "baseName": "PINFormat",
            "type": "PINFormatType"
        }    ];

    static getAttributeTypeMap() {
        return CardholderPIN.attributeTypeMap;
    }
}

