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


export class AmountsResp {
    'AuthorizedAmount': number;
    'CashBackAmount'?: number;
    'Currency'?: string;
    'TipAmount'?: number;
    'TotalFeesAmount'?: number;
    'TotalRebatesAmount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AuthorizedAmount",
            "baseName": "AuthorizedAmount",
            "type": "number"
        },
        {
            "name": "CashBackAmount",
            "baseName": "CashBackAmount",
            "type": "number"
        },
        {
            "name": "Currency",
            "baseName": "Currency",
            "type": "string"
        },
        {
            "name": "TipAmount",
            "baseName": "TipAmount",
            "type": "number"
        },
        {
            "name": "TotalFeesAmount",
            "baseName": "TotalFeesAmount",
            "type": "number"
        },
        {
            "name": "TotalRebatesAmount",
            "baseName": "TotalRebatesAmount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AmountsResp.attributeTypeMap;
    }
}

