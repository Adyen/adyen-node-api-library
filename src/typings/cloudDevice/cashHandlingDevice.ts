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


import { CoinsOrBills } from './coinsOrBills';

export class CashHandlingDevice {
    'CashHandlingOkFlag': boolean;
    'CoinsOrBills': Array<CoinsOrBills>;
    'Currency': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "CashHandlingOkFlag",
            "baseName": "CashHandlingOkFlag",
            "type": "boolean"
        },
        {
            "name": "CoinsOrBills",
            "baseName": "CoinsOrBills",
            "type": "Array<CoinsOrBills>"
        },
        {
            "name": "Currency",
            "baseName": "Currency",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CashHandlingDevice.attributeTypeMap;
    }
}

