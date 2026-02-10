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


import { IssuerAndSerialNumber } from './issuerAndSerialNumber';

export class SignerIdentifier {
    'IssuerAndSerialNumber': IssuerAndSerialNumber;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "IssuerAndSerialNumber",
            "baseName": "IssuerAndSerialNumber",
            "type": "IssuerAndSerialNumber"
        }    ];

    static getAttributeTypeMap() {
        return SignerIdentifier.attributeTypeMap;
    }
}

