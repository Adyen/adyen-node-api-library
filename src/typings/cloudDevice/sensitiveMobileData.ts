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



export class SensitiveMobileData {
    'IMEI'?: string;
    'IMSI'?: string;
    'MSISDN': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "IMEI",
            "baseName": "IMEI",
            "type": "string"
        },
        {
            "name": "IMSI",
            "baseName": "IMSI",
            "type": "string"
        },
        {
            "name": "MSISDN",
            "baseName": "MSISDN",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SensitiveMobileData.attributeTypeMap;
    }
}

