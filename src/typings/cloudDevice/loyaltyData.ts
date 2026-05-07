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


import { LoyaltyAccountId } from './loyaltyAccountId';
import { LoyaltyAmount } from './loyaltyAmount';
import { TransactionIdentification } from './transactionIdentification';

export class LoyaltyData {
    'CardAcquisitionReference'?: TransactionIdentification;
    'LoyaltyAccountID'?: LoyaltyAccountId;
    'LoyaltyAmount'?: LoyaltyAmount;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "CardAcquisitionReference",
            "baseName": "CardAcquisitionReference",
            "type": "TransactionIdentification"
        },
        {
            "name": "LoyaltyAccountID",
            "baseName": "LoyaltyAccountID",
            "type": "LoyaltyAccountId"
        },
        {
            "name": "LoyaltyAmount",
            "baseName": "LoyaltyAmount",
            "type": "LoyaltyAmount"
        }    ];

    static getAttributeTypeMap() {
        return LoyaltyData.attributeTypeMap;
    }
}

