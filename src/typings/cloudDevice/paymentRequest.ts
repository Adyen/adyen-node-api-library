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


import { LoyaltyData } from './loyaltyData';
import { PaymentData } from './paymentData';
import { PaymentTransaction } from './paymentTransaction';
import { SaleData } from './saleData';

export class PaymentRequest {
    'LoyaltyData'?: Array<LoyaltyData>;
    'PaymentData'?: PaymentData;
    'PaymentTransaction': PaymentTransaction;
    'SaleData': SaleData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "LoyaltyData",
            "baseName": "LoyaltyData",
            "type": "Array<LoyaltyData>"
        },
        {
            "name": "PaymentData",
            "baseName": "PaymentData",
            "type": "PaymentData"
        },
        {
            "name": "PaymentTransaction",
            "baseName": "PaymentTransaction",
            "type": "PaymentTransaction"
        },
        {
            "name": "SaleData",
            "baseName": "SaleData",
            "type": "SaleData"
        }    ];

    static getAttributeTypeMap() {
        return PaymentRequest.attributeTypeMap;
    }
}

