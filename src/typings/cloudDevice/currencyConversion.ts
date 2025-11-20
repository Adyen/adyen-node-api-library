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


import { Amount } from './amount';

export class CurrencyConversion {
    'Commission'?: number;
    'ConvertedAmount': Amount;
    'CustomerApprovedFlag'?: boolean;
    'Declaration'?: string;
    'Markup'?: number;
    'Rate'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "Commission",
            "baseName": "Commission",
            "type": "number"
        },
        {
            "name": "ConvertedAmount",
            "baseName": "ConvertedAmount",
            "type": "Amount"
        },
        {
            "name": "CustomerApprovedFlag",
            "baseName": "CustomerApprovedFlag",
            "type": "boolean"
        },
        {
            "name": "Declaration",
            "baseName": "Declaration",
            "type": "string"
        },
        {
            "name": "Markup",
            "baseName": "Markup",
            "type": "number"
        },
        {
            "name": "Rate",
            "baseName": "Rate",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return CurrencyConversion.attributeTypeMap;
    }
}

