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

export class LoyaltyAccountStatus {
    'Currency'?: string;
    'CurrentBalance'?: number;
    'LoyaltyAccount': LoyaltyAccount;
    'LoyaltyUnit'?: LoyaltyAccountStatus.LoyaltyUnitEnum;

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
            "name": "LoyaltyAccount",
            "baseName": "LoyaltyAccount",
            "type": "LoyaltyAccount"
        },
        {
            "name": "LoyaltyUnit",
            "baseName": "LoyaltyUnit",
            "type": "LoyaltyAccountStatus.LoyaltyUnitEnum"
        }    ];

    static getAttributeTypeMap() {
        return LoyaltyAccountStatus.attributeTypeMap;
    }
}

export namespace LoyaltyAccountStatus {
    export enum LoyaltyUnitEnum {
        Monetary = <any> 'Monetary',
        Point = <any> 'Point'
    }
}
