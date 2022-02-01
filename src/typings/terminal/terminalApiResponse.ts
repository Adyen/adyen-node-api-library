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
 * Copyright (c) 2022 Adyen N.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

/**
 * Terminal API
 * Definition of Terminal API Schema
 *
 */


import { SaleToPOIResponse } from './saleToPOIResponse';
import {SaleToPOIRequest} from "./saleToPOIRequest";

export class TerminalApiResponse {
    'SaleToPOIResponse'?: SaleToPOIResponse;
    'SaleToPOIRequest'?: SaleToPOIRequest;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "SaleToPOIResponse",
            "baseName": "SaleToPOIResponse",
            "type": "SaleToPOIResponse"
        },
        {
            "name": "SaleToPOIRequest",
            "baseName": "SaleToPOIRequest",
            "type": "SaleToPOIRequest"
        }];

    static getAttributeTypeMap() {
        return TerminalApiResponse.attributeTypeMap;
    }
}

