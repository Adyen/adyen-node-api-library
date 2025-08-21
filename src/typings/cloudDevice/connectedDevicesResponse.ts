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

export class ConnectedDevicesResponse {
    /**
    * The list of connected devices.
    */
    'uniqueDeviceIds'?: string[];

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "uniqueDeviceIds",
            "baseName": "uniqueDeviceIds",
            "type": "Array<string>"
        }
    ];

    static getAttributeTypeMap() {
        return ConnectedDevicesResponse.attributeTypeMap;
    }
}