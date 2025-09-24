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


import { TokenRequestedType } from './tokenRequestedType';

export class PaymentToken {
    'ExpiryDateTime'?: { [key: string]: any; };
    'TokenRequestedType': TokenRequestedType;
    'TokenValue': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ExpiryDateTime",
            "baseName": "ExpiryDateTime",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "TokenRequestedType",
            "baseName": "TokenRequestedType",
            "type": "TokenRequestedType"
        },
        {
            "name": "TokenValue",
            "baseName": "TokenValue",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentToken.attributeTypeMap;
    }
}

