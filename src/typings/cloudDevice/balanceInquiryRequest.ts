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


import { LoyaltyAccountReq } from './loyaltyAccountReq';
import { PaymentAccountReq } from './paymentAccountReq';

export class BalanceInquiryRequest {
    'LoyaltyAccountReq'?: LoyaltyAccountReq;
    'PaymentAccountReq'?: PaymentAccountReq;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "LoyaltyAccountReq",
            "baseName": "LoyaltyAccountReq",
            "type": "LoyaltyAccountReq"
        },
        {
            "name": "PaymentAccountReq",
            "baseName": "PaymentAccountReq",
            "type": "PaymentAccountReq"
        }    ];

    static getAttributeTypeMap() {
        return BalanceInquiryRequest.attributeTypeMap;
    }
}

