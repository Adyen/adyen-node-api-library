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


import { ReconciliationType } from './reconciliationType';
import { Response } from './response';
import { TransactionTotals } from './transactionTotals';

export class ReconciliationResponse {
    'POIReconciliationID'?: string;
    'ReconciliationType': ReconciliationType;
    'Response': Response;
    'TransactionTotals'?: Array<TransactionTotals>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "POIReconciliationID",
            "baseName": "POIReconciliationID",
            "type": "string"
        },
        {
            "name": "ReconciliationType",
            "baseName": "ReconciliationType",
            "type": "ReconciliationType"
        },
        {
            "name": "Response",
            "baseName": "Response",
            "type": "Response"
        },
        {
            "name": "TransactionTotals",
            "baseName": "TransactionTotals",
            "type": "Array<TransactionTotals>"
        }    ];

    static getAttributeTypeMap() {
        return ReconciliationResponse.attributeTypeMap;
    }
}

