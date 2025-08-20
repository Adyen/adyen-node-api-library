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


export class TransmitRequest {
    'DestinationAddress': string;
    'MaximumTransmitTime': number;
    'Message': any | null;
    'WaitResponseFlag'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "DestinationAddress",
            "baseName": "DestinationAddress",
            "type": "string"
        },
        {
            "name": "MaximumTransmitTime",
            "baseName": "MaximumTransmitTime",
            "type": "number"
        },
        {
            "name": "Message",
            "baseName": "Message",
            "type": "any"
        },
        {
            "name": "WaitResponseFlag",
            "baseName": "WaitResponseFlag",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return TransmitRequest.attributeTypeMap;
    }
}

