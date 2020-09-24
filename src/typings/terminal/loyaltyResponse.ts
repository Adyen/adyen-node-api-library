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
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

/**
 * Terminal API
 * Definition of Terminal API Schema
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { LoyaltyResult } from "./loyaltyResult";
import { POIData } from "./pOIData";
import { PaymentReceipt } from "./paymentReceipt";
import { Response } from "./response";
import { SaleData } from "./saleData";

export class LoyaltyResponse {
    "loyaltyResult"?: LoyaltyResult[];
    "paymentReceipt"?: PaymentReceipt[];
    "pOIData": POIData;
    "response": Response;
    "saleData": SaleData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: {name: string, baseName: string, type: string}[] = [
        {
            "name": "loyaltyResult",
            "baseName": "LoyaltyResult",
            "type": "Array<LoyaltyResult>"
        },
        {
            "name": "paymentReceipt",
            "baseName": "PaymentReceipt",
            "type": "Array<PaymentReceipt>"
        },
        {
            "name": "pOIData",
            "baseName": "POIData",
            "type": "POIData"
        },
        {
            "name": "response",
            "baseName": "Response",
            "type": "Response"
        },
        {
            "name": "saleData",
            "baseName": "SaleData",
            "type": "SaleData"
        }    ];

    static getAttributeTypeMap() {
        return LoyaltyResponse.attributeTypeMap;
    }
}

