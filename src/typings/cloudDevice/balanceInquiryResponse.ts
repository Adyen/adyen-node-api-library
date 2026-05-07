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


import { LoyaltyAccountStatus } from './loyaltyAccountStatus';
import { PaymentAccountStatus } from './paymentAccountStatus';
import { Response } from './response';

export class BalanceInquiryResponse {
    'LoyaltyAccountStatus'?: LoyaltyAccountStatus;
    'PaymentAccountStatus'?: PaymentAccountStatus;
    'Response': Response;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "LoyaltyAccountStatus",
            "baseName": "LoyaltyAccountStatus",
            "type": "LoyaltyAccountStatus"
        },
        {
            "name": "PaymentAccountStatus",
            "baseName": "PaymentAccountStatus",
            "type": "PaymentAccountStatus"
        },
        {
            "name": "Response",
            "baseName": "Response",
            "type": "Response"
        }    ];

    static getAttributeTypeMap() {
        return BalanceInquiryResponse.attributeTypeMap;
    }
}

