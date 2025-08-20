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



export class CustomerOrder {
    'AccessedBy'?: string;
    'AdditionalInformation'?: string;
    'Currency'?: string;
    'CurrentAmount': number;
    'CustomerOrderID': string;
    'EndDate'?: { [key: string]: any; };
    'ForecastedAmount': number;
    'OpenOrderState'?: boolean;
    'StartDate': { [key: string]: any; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AccessedBy",
            "baseName": "AccessedBy",
            "type": "string"
        },
        {
            "name": "AdditionalInformation",
            "baseName": "AdditionalInformation",
            "type": "string"
        },
        {
            "name": "Currency",
            "baseName": "Currency",
            "type": "string"
        },
        {
            "name": "CurrentAmount",
            "baseName": "CurrentAmount",
            "type": "number"
        },
        {
            "name": "CustomerOrderID",
            "baseName": "CustomerOrderID",
            "type": "string"
        },
        {
            "name": "EndDate",
            "baseName": "EndDate",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "ForecastedAmount",
            "baseName": "ForecastedAmount",
            "type": "number"
        },
        {
            "name": "OpenOrderState",
            "baseName": "OpenOrderState",
            "type": "boolean"
        },
        {
            "name": "StartDate",
            "baseName": "StartDate",
            "type": "{ [key: string]: any; }"
        }    ];

    static getAttributeTypeMap() {
        return CustomerOrder.attributeTypeMap;
    }
}

