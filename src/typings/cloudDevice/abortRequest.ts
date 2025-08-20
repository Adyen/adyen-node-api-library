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


import { DisplayOutput } from './displayOutput';
import { MessageReference } from './messageReference';

export class AbortRequest {
    'AbortReason': string;
    'DisplayOutput'?: DisplayOutput;
    'MessageReference': MessageReference;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AbortReason",
            "baseName": "AbortReason",
            "type": "string"
        },
        {
            "name": "DisplayOutput",
            "baseName": "DisplayOutput",
            "type": "DisplayOutput"
        },
        {
            "name": "MessageReference",
            "baseName": "MessageReference",
            "type": "MessageReference"
        }    ];

    static getAttributeTypeMap() {
        return AbortRequest.attributeTypeMap;
    }
}

