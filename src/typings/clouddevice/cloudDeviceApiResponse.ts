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
import { SaleToPOIResponse } from "../tapi/saleToPOIResponse";

export class CloudDeviceApiResponse {
    "SaleToPOIResponse"?: SaleToPOIResponse;
    "SaleToPOIRequest"?: SaleToPOIRequest;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "SaleToPOIResponse",
            "baseName": "SaleToPOIResponse",
            "type": "SaleToPOIResponse",
            "format": ""
        },
        {
            "name": "SaleToPOIRequest",
            "baseName": "SaleToPOIRequest",
            "type": "SaleToPOIRequest",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CloudDeviceApiResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
