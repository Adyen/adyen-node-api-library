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


import { OutputFormatType } from './outputFormatType';
import { OutputText } from './outputText';
import { PredefinedContent } from './predefinedContent';

export class MenuEntry {
    'DefaultSelectedFlag'?: boolean;
    'MenuEntryTag'?: MenuEntry.MenuEntryTagEnum;
    'OutputFormat': OutputFormatType;
    'OutputText'?: Array<OutputText>;
    'OutputXHTML'?: any | null;
    'PredefinedContent'?: PredefinedContent;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "DefaultSelectedFlag",
            "baseName": "DefaultSelectedFlag",
            "type": "boolean"
        },
        {
            "name": "MenuEntryTag",
            "baseName": "MenuEntryTag",
            "type": "MenuEntry.MenuEntryTagEnum"
        },
        {
            "name": "OutputFormat",
            "baseName": "OutputFormat",
            "type": "OutputFormatType"
        },
        {
            "name": "OutputText",
            "baseName": "OutputText",
            "type": "Array<OutputText>"
        },
        {
            "name": "OutputXHTML",
            "baseName": "OutputXHTML",
            "type": "any"
        },
        {
            "name": "PredefinedContent",
            "baseName": "PredefinedContent",
            "type": "PredefinedContent"
        }    ];

    static getAttributeTypeMap() {
        return MenuEntry.attributeTypeMap;
    }
}

export namespace MenuEntry {
    export enum MenuEntryTagEnum {
        NonSelectable = <any> 'NonSelectable',
        NonSelectableSubMenu = <any> 'NonSelectableSubMenu',
        Selectable = <any> 'Selectable',
        SubMenu = <any> 'SubMenu'
    }
}
