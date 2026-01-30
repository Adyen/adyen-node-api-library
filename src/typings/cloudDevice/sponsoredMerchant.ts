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



export class SponsoredMerchant {
    'MerchantAddress'?: string;
    'MerchantCategoryCode': string;
    'MerchantCountry': string;
    'MerchantName': string;
    'RegistrationID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "MerchantAddress",
            "baseName": "MerchantAddress",
            "type": "string"
        },
        {
            "name": "MerchantCategoryCode",
            "baseName": "MerchantCategoryCode",
            "type": "string"
        },
        {
            "name": "MerchantCountry",
            "baseName": "MerchantCountry",
            "type": "string"
        },
        {
            "name": "MerchantName",
            "baseName": "MerchantName",
            "type": "string"
        },
        {
            "name": "RegistrationID",
            "baseName": "RegistrationID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SponsoredMerchant.attributeTypeMap;
    }
}

