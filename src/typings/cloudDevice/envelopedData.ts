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


import { EncryptedContent } from './encryptedContent';

export class EnvelopedData {
    'EncryptedContent': EncryptedContent;
    'KeyTransportOrKEK'?: Array<any>;
    'Version'?: EnvelopedData.VersionEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "EncryptedContent",
            "baseName": "EncryptedContent",
            "type": "EncryptedContent"
        },
        {
            "name": "KeyTransportOrKEK",
            "baseName": "KeyTransportOrKEK",
            "type": "Array<any>"
        },
        {
            "name": "Version",
            "baseName": "Version",
            "type": "EnvelopedData.VersionEnum"
        }    ];

    static getAttributeTypeMap() {
        return EnvelopedData.attributeTypeMap;
    }
}

export namespace EnvelopedData {
    export enum VersionEnum {
        V0 = <any> 'V0',
        V1 = <any> 'V1',
        V2 = <any> 'V2',
        V3 = <any> 'V3',
        V4 = <any> 'V4',
        V5 = <any> 'V5'
    }
}
