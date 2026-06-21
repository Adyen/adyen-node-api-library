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

export class DeviceStatusResponse {
    /**
    * The id of the device
    */
    'deviceId'?: string;

    /**
    * The status of the device
    */
    'status'?: DeviceStatusResponse.StatusEnum;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "deviceId",
            "baseName": "deviceId",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "DeviceStatusResponse.StatusEnum"
        }
    ];

    static getAttributeTypeMap() {
        return DeviceStatusResponse.attributeTypeMap;
    }
}

export namespace DeviceStatusResponse {
    export enum StatusEnum {
        ONLINE = <any> "ONLINE",
        OFFLINE = <any> "OFFLINE"
    }
}