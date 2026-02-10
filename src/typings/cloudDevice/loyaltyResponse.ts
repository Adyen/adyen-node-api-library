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


import { LoyaltyResult } from './loyaltyResult';
import { POIData } from './pOIData';
import { PaymentReceipt } from './paymentReceipt';
import { Response } from './response';
import { SaleData } from './saleData';

export class LoyaltyResponse {
    'LoyaltyResult'?: Array<LoyaltyResult>;
    'PaymentReceipt'?: Array<PaymentReceipt>;
    'POIData': POIData;
    'Response': Response;
    'SaleData': SaleData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "LoyaltyResult",
            "baseName": "LoyaltyResult",
            "type": "Array<LoyaltyResult>"
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
            "name": "SaleData",
            "baseName": "SaleData",
            "type": "SaleData"
        }    ];

    static getAttributeTypeMap() {
        return LoyaltyResponse.attributeTypeMap;
    }
}

