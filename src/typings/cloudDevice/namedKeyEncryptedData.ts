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

export class NamedKeyEncryptedData {
    'EncryptedContent': EncryptedContent;
    'KeyName'?: string;
    'Version'?: NamedKeyEncryptedData.VersionEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "EncryptedContent",
            "baseName": "EncryptedContent",
            "type": "EncryptedContent"
        },
        {
            "name": "KeyName",
            "baseName": "KeyName",
            "type": "string"
        },
        {
            "name": "Version",
            "baseName": "Version",
            "type": "NamedKeyEncryptedData.VersionEnum"
        }    ];

    static getAttributeTypeMap() {
        return NamedKeyEncryptedData.attributeTypeMap;
    }
}

export namespace NamedKeyEncryptedData {
    export enum VersionEnum {
        V0 = <any> 'V0',
        V1 = <any> 'V1',
        V2 = <any> 'V2',
        V3 = <any> 'V3',
        V4 = <any> 'V4',
        V5 = <any> 'V5'
    }
}
