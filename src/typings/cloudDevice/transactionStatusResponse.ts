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


import { MessageReference } from './messageReference';
import { RepeatedMessageResponse } from './repeatedMessageResponse';
import { Response } from './response';

export class TransactionStatusResponse {
    'MessageReference'?: MessageReference;
    'RepeatedMessageResponse'?: RepeatedMessageResponse;
    'Response': Response;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "MessageReference",
            "baseName": "MessageReference",
            "type": "MessageReference"
        },
        {
            "name": "RepeatedMessageResponse",
            "baseName": "RepeatedMessageResponse",
            "type": "RepeatedMessageResponse"
        },
        {
            "name": "Response",
            "baseName": "Response",
            "type": "Response"
        }    ];

    static getAttributeTypeMap() {
        return TransactionStatusResponse.attributeTypeMap;
    }
}

