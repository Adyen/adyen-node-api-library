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
import { RepeatedResponseMessageBody } from './repeatedResponseMessageBody';

export class RepeatedMessageResponse {
    'MessageHeader': MessageHeader;
    'RepeatedResponseMessageBody': RepeatedResponseMessageBody;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "MessageHeader",
            "baseName": "MessageHeader",
            "type": "MessageHeader"
        },
        {
            "name": "RepeatedResponseMessageBody",
            "baseName": "RepeatedResponseMessageBody",
            "type": "RepeatedResponseMessageBody"
        }    ];

    static getAttributeTypeMap() {
        return RepeatedMessageResponse.attributeTypeMap;
    }
}

