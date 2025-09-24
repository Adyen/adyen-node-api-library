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



export class TotalFilter {
    'OperatorID'?: string;
    'POIID'?: string;
    'SaleID'?: string;
    'ShiftNumber'?: string;
    'TotalsGroupID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "OperatorID",
            "baseName": "OperatorID",
            "type": "string"
        },
        {
            "name": "POIID",
            "baseName": "POIID",
            "type": "string"
        },
        {
            "name": "SaleID",
            "baseName": "SaleID",
            "type": "string"
        },
        {
            "name": "ShiftNumber",
            "baseName": "ShiftNumber",
            "type": "string"
        },
        {
            "name": "TotalsGroupID",
            "baseName": "TotalsGroupID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TotalFilter.attributeTypeMap;
    }
}

