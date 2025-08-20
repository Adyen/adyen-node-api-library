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


import { LoyaltyAccount } from './loyaltyAccount';
import { LoyaltyAcquirerData } from './loyaltyAcquirerData';
import { LoyaltyAmount } from './loyaltyAmount';
import { Rebates } from './rebates';

export class LoyaltyResult {
    'CurrentBalance'?: number;
    'LoyaltyAccount': LoyaltyAccount;
    'LoyaltyAcquirerData'?: LoyaltyAcquirerData;
    'LoyaltyAmount'?: LoyaltyAmount;
    'Rebates'?: Rebates;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "CurrentBalance",
            "baseName": "CurrentBalance",
            "type": "number"
        },
        {
            "name": "LoyaltyAccount",
            "baseName": "LoyaltyAccount",
            "type": "LoyaltyAccount"
        },
        {
            "name": "LoyaltyAcquirerData",
            "baseName": "LoyaltyAcquirerData",
            "type": "LoyaltyAcquirerData"
        },
        {
            "name": "LoyaltyAmount",
            "baseName": "LoyaltyAmount",
            "type": "LoyaltyAmount"
        },
        {
            "name": "Rebates",
            "baseName": "Rebates",
            "type": "Rebates"
        }    ];

    static getAttributeTypeMap() {
        return LoyaltyResult.attributeTypeMap;
    }
}

