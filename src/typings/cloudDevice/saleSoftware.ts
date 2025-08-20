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



export class SaleSoftware {
    'ApplicationName': string;
    'CertificationCode': string;
    'ManufacturerID'?: string;
    'SoftwareVersion': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ApplicationName",
            "baseName": "ApplicationName",
            "type": "string"
        },
        {
            "name": "CertificationCode",
            "baseName": "CertificationCode",
            "type": "string"
        },
        {
            "name": "ManufacturerID",
            "baseName": "ManufacturerID",
            "type": "string"
        },
        {
            "name": "SoftwareVersion",
            "baseName": "SoftwareVersion",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SaleSoftware.attributeTypeMap;
    }
}

