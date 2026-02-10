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
import { InputCommandType } from './inputCommandType';

export class Input {
    'ConfirmedFlag'?: boolean;
    'DigitInput'?: string;
    'FunctionKey'?: string;
    'InputCommand': InputCommandType;
    'MenuEntryNumber'?: number;
    'Password'?: ContentInformation;
    'TextInput'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ConfirmedFlag",
            "baseName": "ConfirmedFlag",
            "type": "boolean"
        },
        {
            "name": "DigitInput",
            "baseName": "DigitInput",
            "type": "string"
        },
        {
            "name": "FunctionKey",
            "baseName": "FunctionKey",
            "type": "string"
        },
        {
            "name": "InputCommand",
            "baseName": "InputCommand",
            "type": "InputCommandType"
        },
        {
            "name": "MenuEntryNumber",
            "baseName": "MenuEntryNumber",
            "type": "number"
        },
        {
            "name": "Password",
            "baseName": "Password",
            "type": "ContentInformation"
        },
        {
            "name": "TextInput",
            "baseName": "TextInput",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Input.attributeTypeMap;
    }
}

