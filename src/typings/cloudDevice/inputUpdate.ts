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


import { MenuEntry } from './menuEntry';
import { MessageReference } from './messageReference';
import { OutputContent } from './outputContent';

export class InputUpdate {
    'MaxDecimalLength'?: number;
    'MaxLength'?: number;
    'MenuEntry'?: Array<MenuEntry>;
    'MessageReference': MessageReference;
    'MinLength'?: number;
    'OutputContent': OutputContent;
    'OutputSignature'?: any | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "MaxDecimalLength",
            "baseName": "MaxDecimalLength",
            "type": "number"
        },
        {
            "name": "MaxLength",
            "baseName": "MaxLength",
            "type": "number"
        },
        {
            "name": "MenuEntry",
            "baseName": "MenuEntry",
            "type": "Array<MenuEntry>"
        },
        {
            "name": "MessageReference",
            "baseName": "MessageReference",
            "type": "MessageReference"
        },
        {
            "name": "MinLength",
            "baseName": "MinLength",
            "type": "number"
        },
        {
            "name": "OutputContent",
            "baseName": "OutputContent",
            "type": "OutputContent"
        },
        {
            "name": "OutputSignature",
            "baseName": "OutputSignature",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return InputUpdate.attributeTypeMap;
    }
}

