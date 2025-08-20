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
import { EventToNotifyType } from './eventToNotifyType';

export class EventNotification {
    'CustomerLanguage'?: string;
    'DisplayOutput'?: DisplayOutput;
    'EventDetails'?: string;
    'EventToNotify': EventToNotifyType;
    'MaintenanceRequiredFlag'?: boolean;
    'RejectedMessage'?: any | null;
    'TimeStamp': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "CustomerLanguage",
            "baseName": "CustomerLanguage",
            "type": "string"
        },
        {
            "name": "DisplayOutput",
            "baseName": "DisplayOutput",
            "type": "DisplayOutput"
        },
        {
            "name": "EventDetails",
            "baseName": "EventDetails",
            "type": "string"
        },
        {
            "name": "EventToNotify",
            "baseName": "EventToNotify",
            "type": "EventToNotifyType"
        },
        {
            "name": "MaintenanceRequiredFlag",
            "baseName": "MaintenanceRequiredFlag",
            "type": "boolean"
        },
        {
            "name": "RejectedMessage",
            "baseName": "RejectedMessage",
            "type": "any"
        },
        {
            "name": "TimeStamp",
            "baseName": "TimeStamp",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return EventNotification.attributeTypeMap;
    }
}

