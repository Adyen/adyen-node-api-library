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



export class LoyaltyAmount {
    'Currency'?: string;
    'LoyaltyUnit'?: LoyaltyAmount.LoyaltyUnitEnum;
    'Value'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "Currency",
            "baseName": "Currency",
            "type": "string"
        },
        {
            "name": "LoyaltyUnit",
            "baseName": "LoyaltyUnit",
            "type": "LoyaltyAmount.LoyaltyUnitEnum"
        },
        {
            "name": "Value",
            "baseName": "Value",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return LoyaltyAmount.attributeTypeMap;
    }
}

export namespace LoyaltyAmount {
    export enum LoyaltyUnitEnum {
        Monetary = <any> 'Monetary',
        Point = <any> 'Point'
    }
}
