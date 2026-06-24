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
 * Copyright (c) 2026 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

import { SaleToPOIRequest } from "../tapi/saleToPOIRequest";

/**
 * Response of the /async endpoint. When successful the `Result` contains `ok`.
 * In case of failure the `SaleToPOIRequest` contains the EventNotification details.
 */
export class CloudDeviceApiAsyncResponse {
    "Result"?: string;
    "SaleToPOIRequest"?: SaleToPOIRequest;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "Result",
            "baseName": "Result",
            "type": "string",
            "format": ""
        },
        {
            "name": "SaleToPOIRequest",
            "baseName": "SaleToPOIRequest",
            "type": "SaleToPOIRequest",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CloudDeviceApiAsyncResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
