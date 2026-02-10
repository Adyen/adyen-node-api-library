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
import { PaymentAcquirerData } from './paymentAcquirerData';
import { PaymentInstrumentData } from './paymentInstrumentData';

export class PaymentAccountStatus {
    'Currency'?: string;
    'CurrentBalance'?: number;
    'LoyaltyAccountStatus'?: LoyaltyAccountStatus;
    'PaymentAcquirerData'?: PaymentAcquirerData;
    'PaymentInstrumentData'?: PaymentInstrumentData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "Currency",
            "baseName": "Currency",
            "type": "string"
        },
        {
            "name": "CurrentBalance",
            "baseName": "CurrentBalance",
            "type": "number"
        },
        {
            "name": "LoyaltyAccountStatus",
            "baseName": "LoyaltyAccountStatus",
            "type": "LoyaltyAccountStatus"
        },
        {
            "name": "PaymentAcquirerData",
            "baseName": "PaymentAcquirerData",
            "type": "PaymentAcquirerData"
        },
        {
            "name": "PaymentInstrumentData",
            "baseName": "PaymentInstrumentData",
            "type": "PaymentInstrumentData"
        }    ];

    static getAttributeTypeMap() {
        return PaymentAccountStatus.attributeTypeMap;
    }
}

