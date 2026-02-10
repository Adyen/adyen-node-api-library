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


import { AuthenticatedData } from './authenticatedData';
import { ContentType } from './contentType';
import { DigestedData } from './digestedData';
import { EnvelopedData } from './envelopedData';
import { NamedKeyEncryptedData } from './namedKeyEncryptedData';
import { SignedData } from './signedData';

export class ContentInformation {
    'AuthenticatedData'?: AuthenticatedData;
    'ContentType': ContentType;
    'DigestedData'?: DigestedData;
    'EnvelopedData'?: EnvelopedData;
    'NamedKeyEncryptedData'?: NamedKeyEncryptedData;
    'SignedData'?: SignedData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AuthenticatedData",
            "baseName": "AuthenticatedData",
            "type": "AuthenticatedData"
        },
        {
            "name": "ContentType",
            "baseName": "ContentType",
            "type": "ContentType"
        },
        {
            "name": "DigestedData",
            "baseName": "DigestedData",
            "type": "DigestedData"
        },
        {
            "name": "EnvelopedData",
            "baseName": "EnvelopedData",
            "type": "EnvelopedData"
        },
        {
            "name": "NamedKeyEncryptedData",
            "baseName": "NamedKeyEncryptedData",
            "type": "NamedKeyEncryptedData"
        },
        {
            "name": "SignedData",
            "baseName": "SignedData",
            "type": "SignedData"
        }    ];

    static getAttributeTypeMap() {
        return ContentInformation.attributeTypeMap;
    }
}

