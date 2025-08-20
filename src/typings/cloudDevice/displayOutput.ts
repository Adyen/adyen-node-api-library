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


import { DeviceType } from './deviceType';
import { InfoQualifyType } from './infoQualifyType';
import { MenuEntry } from './menuEntry';
import { OutputContent } from './outputContent';

export class DisplayOutput {
    'Device': DeviceType;
    'InfoQualify': InfoQualifyType;
    'MenuEntry'?: Array<MenuEntry>;
    'MinimumDisplayTime'?: number;
    'OutputContent': OutputContent;
    'OutputSignature'?: any | null;
    'ResponseRequiredFlag'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "Device",
            "baseName": "Device",
            "type": "DeviceType"
        },
        {
            "name": "InfoQualify",
            "baseName": "InfoQualify",
            "type": "InfoQualifyType"
        },
        {
            "name": "MenuEntry",
            "baseName": "MenuEntry",
            "type": "Array<MenuEntry>"
        },
        {
            "name": "MinimumDisplayTime",
            "baseName": "MinimumDisplayTime",
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
        },
        {
            "name": "ResponseRequiredFlag",
            "baseName": "ResponseRequiredFlag",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return DisplayOutput.attributeTypeMap;
    }
}

