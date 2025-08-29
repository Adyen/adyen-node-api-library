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


import { LoyaltyRequest } from './loyaltyRequest';
import { PaymentRequest } from './paymentRequest';
import { ReversalRequest } from './reversalRequest';

export class TransactionToPerform {
    'LoyaltyRequest'?: LoyaltyRequest;
    'PaymentRequest'?: PaymentRequest;
    'ReversalRequest'?: ReversalRequest;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "LoyaltyRequest",
            "baseName": "LoyaltyRequest",
            "type": "LoyaltyRequest"
        },
        {
            "name": "PaymentRequest",
            "baseName": "PaymentRequest",
            "type": "PaymentRequest"
        },
        {
            "name": "ReversalRequest",
            "baseName": "ReversalRequest",
            "type": "ReversalRequest"
        }    ];

    static getAttributeTypeMap() {
        return TransactionToPerform.attributeTypeMap;
    }
}

