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


import { SaleItemRebate } from './saleItemRebate';

export class Rebates {
    'RebateLabel'?: string;
    'SaleItemRebate'?: Array<SaleItemRebate>;
    'TotalRebate'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "RebateLabel",
            "baseName": "RebateLabel",
            "type": "string"
        },
        {
            "name": "SaleItemRebate",
            "baseName": "SaleItemRebate",
            "type": "Array<SaleItemRebate>"
        },
        {
            "name": "TotalRebate",
            "baseName": "TotalRebate",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Rebates.attributeTypeMap;
    }
}

