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


export class AmountsReq {
    'CashBackAmount'?: number;
    'Currency': string;
    'MaximumCashBackAmount'?: number;
    'MinimumAmountToDeliver'?: number;
    'MinimumSplitAmount'?: number;
    'PaidAmount'?: number;
    'RequestedAmount'?: number;
    'TipAmount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "MaximumCashBackAmount",
            "baseName": "MaximumCashBackAmount",
            "type": "number"
        },
        {
            "name": "MinimumAmountToDeliver",
            "baseName": "MinimumAmountToDeliver",
            "type": "number"
        },
        {
            "name": "MinimumSplitAmount",
            "baseName": "MinimumSplitAmount",
            "type": "number"
        },
        {
            "name": "PaidAmount",
            "baseName": "PaidAmount",
            "type": "number"
        },
        {
            "name": "RequestedAmount",
            "baseName": "RequestedAmount",
            "type": "number"
        },
        {
            "name": "TipAmount",
            "baseName": "TipAmount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AmountsReq.attributeTypeMap;
    }
}

