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


export class OutputText {
    'Alignment'?: OutputText.AlignmentEnum;
    'CharacterHeight'?: OutputText.CharacterHeightEnum;
    'CharacterSet'?: number;
    'CharacterStyle'?: OutputText.CharacterStyleEnum;
    'CharacterWidth'?: OutputText.CharacterWidthEnum;
    'Color'?: OutputText.ColorEnum;
    'EndOfLineFlag'?: boolean;
    'Font'?: string;
    'StartColumn'?: number;
    'StartRow'?: number;
    'Text'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "Alignment",
            "baseName": "Alignment",
            "type": "OutputText.AlignmentEnum"
        },
        {
            "name": "CharacterHeight",
            "baseName": "CharacterHeight",
            "type": "OutputText.CharacterHeightEnum"
        },
        {
            "name": "CharacterSet",
            "baseName": "CharacterSet",
            "type": "number"
        },
        {
            "name": "CharacterStyle",
            "baseName": "CharacterStyle",
            "type": "OutputText.CharacterStyleEnum"
        },
        {
            "name": "CharacterWidth",
            "baseName": "CharacterWidth",
            "type": "OutputText.CharacterWidthEnum"
        },
        {
            "name": "Color",
            "baseName": "Color",
            "type": "OutputText.ColorEnum"
        },
        {
            "name": "EndOfLineFlag",
            "baseName": "EndOfLineFlag",
            "type": "boolean"
        },
        {
            "name": "Font",
            "baseName": "Font",
            "type": "string"
        },
        {
            "name": "StartColumn",
            "baseName": "StartColumn",
            "type": "number"
        },
        {
            "name": "StartRow",
            "baseName": "StartRow",
            "type": "number"
        },
        {
            "name": "Text",
            "baseName": "Text",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OutputText.attributeTypeMap;
    }
}

export namespace OutputText {
    export enum AlignmentEnum {
        Centred = <any> 'Centred',
        Justified = <any> 'Justified',
        Left = <any> 'Left',
        Right = <any> 'Right'
    }
    export enum CharacterHeightEnum {
        DoubleHeight = <any> 'DoubleHeight',
        HalfHeight = <any> 'HalfHeight',
        SingleHeight = <any> 'SingleHeight'
    }
    export enum CharacterStyleEnum {
        Bold = <any> 'Bold',
        Italic = <any> 'Italic',
        Normal = <any> 'Normal',
        Underlined = <any> 'Underlined'
    }
    export enum CharacterWidthEnum {
        DoubleWidth = <any> 'DoubleWidth',
        SingleWidth = <any> 'SingleWidth'
    }
    export enum ColorEnum {
        Black = <any> 'Black',
        Blue = <any> 'Blue',
        Cyan = <any> 'Cyan',
        Green = <any> 'Green',
        Magenta = <any> 'Magenta',
        Red = <any> 'Red',
        White = <any> 'White',
        Yellow = <any> 'Yellow'
    }
}
