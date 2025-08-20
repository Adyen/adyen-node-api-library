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


import { MessageCategoryType } from './messageCategoryType';
import { MessageClassType } from './messageClassType';
import { MessageType } from './messageType';

export class MessageHeader {
    'DeviceID'?: string;
    'MessageCategory': MessageCategoryType;
    'MessageClass': MessageClassType;
    'MessageType': MessageType;
    'POIID': string;
    'ProtocolVersion'?: string;
    'SaleID'?: string;
    'ServiceID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "DeviceID",
            "baseName": "DeviceID",
            "type": "string"
        },
        {
            "name": "MessageCategory",
            "baseName": "MessageCategory",
            "type": "MessageCategoryType"
        },
        {
            "name": "MessageClass",
            "baseName": "MessageClass",
            "type": "MessageClassType"
        },
        {
            "name": "MessageType",
            "baseName": "MessageType",
            "type": "MessageType"
        },
        {
            "name": "POIID",
            "baseName": "POIID",
            "type": "string"
        },
        {
            "name": "ProtocolVersion",
            "baseName": "ProtocolVersion",
            "type": "string"
        },
        {
            "name": "SaleID",
            "baseName": "SaleID",
            "type": "string"
        },
        {
            "name": "ServiceID",
            "baseName": "ServiceID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MessageHeader.attributeTypeMap;
    }
}

