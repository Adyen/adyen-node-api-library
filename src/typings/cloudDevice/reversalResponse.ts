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


import { OriginalPOITransaction } from './originalPOITransaction';
import { POIData } from './pOIData';
import { PaymentReceipt } from './paymentReceipt';
import { Response } from './response';

export class ReversalResponse {
    'CustomerOrderID'?: string;
    'OriginalPOITransaction'?: OriginalPOITransaction;
    'PaymentReceipt'?: Array<PaymentReceipt>;
    'POIData'?: POIData;
    'Response': Response;
    'ReversedAmount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "CustomerOrderID",
            "baseName": "CustomerOrderID",
            "type": "string"
        },
        {
            "name": "OriginalPOITransaction",
            "baseName": "OriginalPOITransaction",
            "type": "OriginalPOITransaction"
        },
        {
            "name": "PaymentReceipt",
            "baseName": "PaymentReceipt",
            "type": "Array<PaymentReceipt>"
        },
        {
            "name": "POIData",
            "baseName": "POIData",
            "type": "POIData"
        },
        {
            "name": "Response",
            "baseName": "Response",
            "type": "Response"
        },
        {
            "name": "ReversedAmount",
            "baseName": "ReversedAmount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ReversalResponse.attributeTypeMap;
    }
}

