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


import { MessageHeader } from './messageHeader';
import { SecurityTrailer } from './securityTrailer';

export class SaleToPOISecuredMessage {
    'MessageHeader': MessageHeader;
    'NexoBlob': string;
    'SecurityTrailer': SecurityTrailer;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "MessageHeader",
            "baseName": "MessageHeader",
            "type": "MessageHeader"
        },
        {
            "name": "NexoBlob",
            "baseName": "NexoBlob",
            "type": "string"
        },
        {
            "name": "SecurityTrailer",
            "baseName": "SecurityTrailer",
            "type": "SecurityTrailer"
        }    ];

    static getAttributeTypeMap() {
        return SaleToPOISecuredMessage.attributeTypeMap;
    }
}

