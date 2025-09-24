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



export class SoundContent {
    'Language'?: string;
    'ReferenceID'?: string;
    'SoundFormat'?: SoundContent.SoundFormatEnum;
    'Value'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "Language",
            "baseName": "Language",
            "type": "string"
        },
        {
            "name": "ReferenceID",
            "baseName": "ReferenceID",
            "type": "string"
        },
        {
            "name": "SoundFormat",
            "baseName": "SoundFormat",
            "type": "SoundContent.SoundFormatEnum"
        },
        {
            "name": "Value",
            "baseName": "Value",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SoundContent.attributeTypeMap;
    }
}

export namespace SoundContent {
    export enum SoundFormatEnum {
        MessageRef = <any> 'MessageRef',
        SoundRef = <any> 'SoundRef',
        Text = <any> 'Text'
    }
}
