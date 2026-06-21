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


import { CommonField } from './commonField';
import { ExternalPlatform } from './externalPlatform';
import { MerchantDevice } from './merchantDevice';
import { ShopperInteractionDevice } from './shopperInteractionDevice';

export class ApplicationInfo {
    'adyenLibrary'?: CommonField;
    'adyenPaymentSource'?: CommonField;
    'externalPlatform'?: ExternalPlatform;
    'merchantApplication'?: CommonField;
    'merchantDevice'?: MerchantDevice;
    'paymentDetailsSource'?: CommonField;
    'shopperInteractionDevice'?: ShopperInteractionDevice;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "adyenLibrary",
            "baseName": "adyenLibrary",
            "type": "CommonField"
        },
        {
            "name": "adyenPaymentSource",
            "baseName": "adyenPaymentSource",
            "type": "CommonField"
        },
        {
            "name": "externalPlatform",
            "baseName": "externalPlatform",
            "type": "ExternalPlatform"
        },
        {
            "name": "merchantApplication",
            "baseName": "merchantApplication",
            "type": "CommonField"
        },
        {
            "name": "merchantDevice",
            "baseName": "merchantDevice",
            "type": "MerchantDevice"
        },
        {
            "name": "paymentDetailsSource",
            "baseName": "paymentDetailsSource",
            "type": "CommonField"
        },
        {
            "name": "shopperInteractionDevice",
            "baseName": "shopperInteractionDevice",
            "type": "ShopperInteractionDevice"
        }    ];

    static getAttributeTypeMap() {
        return ApplicationInfo.attributeTypeMap;
    }
}

