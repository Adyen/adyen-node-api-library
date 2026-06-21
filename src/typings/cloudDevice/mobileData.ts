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


import { ContentInformation } from './contentInformation';
import { Geolocation } from './geolocation';
import { SensitiveMobileData } from './sensitiveMobileData';

export class MobileData {
    'Geolocation'?: Geolocation;
    'MaskedMSISDN'?: string;
    'MobileCountryCode'?: string;
    'MobileNetworkCode'?: string;
    'ProtectedMobileData'?: ContentInformation;
    'SensitiveMobileData'?: SensitiveMobileData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "Geolocation",
            "baseName": "Geolocation",
            "type": "Geolocation"
        },
        {
            "name": "MaskedMSISDN",
            "baseName": "MaskedMSISDN",
            "type": "string"
        },
        {
            "name": "MobileCountryCode",
            "baseName": "MobileCountryCode",
            "type": "string"
        },
        {
            "name": "MobileNetworkCode",
            "baseName": "MobileNetworkCode",
            "type": "string"
        },
        {
            "name": "ProtectedMobileData",
            "baseName": "ProtectedMobileData",
            "type": "ContentInformation"
        },
        {
            "name": "SensitiveMobileData",
            "baseName": "SensitiveMobileData",
            "type": "SensitiveMobileData"
        }    ];

    static getAttributeTypeMap() {
        return MobileData.attributeTypeMap;
    }
}

