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


import { CustomerOrder } from './customerOrder';
import { OriginalPOITransaction } from './originalPOITransaction';
import { ReversalReasonType } from './reversalReasonType';
import { SaleData } from './saleData';

export class ReversalRequest {
    'SaleData'?: SaleData;
    'OriginalPOITransaction': OriginalPOITransaction;
    'ReversedAmount'?: number;
    'ReversalReason': ReversalReasonType;
    'CustomerOrder'?: CustomerOrder;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "SaleData",
            "baseName": "SaleData",
            "type": "SaleData",
        },
        {
            "name": "OriginalPOITransaction",
            "baseName": "OriginalPOITransaction",
            "type": "OriginalPOITransaction"
        },
        {
            "name": "ReversalReason",
            "baseName": "ReversalReason",
            "type": "ReversalReasonType"
        },
        {
            "name": "ReversedAmount",
            "baseName": "ReversedAmount",
            "type": "number"
        },
        {
            "name": "CustomerOrder",
            "baseName": "CustomerOrder",
            "type": "CustomerOrder"
        }    ];

    static getAttributeTypeMap() {
        return ReversalRequest.attributeTypeMap;
    }
}

