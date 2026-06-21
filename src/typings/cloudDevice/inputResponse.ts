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


import { InputResult } from './inputResult';
import { OutputResult } from './outputResult';

export class InputResponse {
    'InputResult': InputResult;
    'OutputResult'?: OutputResult;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "InputResult",
            "baseName": "InputResult",
            "type": "InputResult"
        },
        {
            "name": "OutputResult",
            "baseName": "OutputResult",
            "type": "OutputResult"
        }    ];

    static getAttributeTypeMap() {
        return InputResponse.attributeTypeMap;
    }
}

