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


import { TotalFilter } from './totalFilter';

export class GetTotalsRequest {
    'TotalDetails'?: Array<GetTotalsRequest.TotalDetailsEnum>;
    'TotalFilter'?: TotalFilter;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "TotalDetails",
            "baseName": "TotalDetails",
            "type": "Array<GetTotalsRequest.TotalDetailsEnum>"
        },
        {
            "name": "TotalFilter",
            "baseName": "TotalFilter",
            "type": "TotalFilter"
        }    ];

    static getAttributeTypeMap() {
        return GetTotalsRequest.attributeTypeMap;
    }
}

export namespace GetTotalsRequest {
    export enum TotalDetailsEnum {
        OperatorId = <any> 'OperatorID',
        Poiid = <any> 'POIID',
        SaleId = <any> 'SaleID',
        ShiftNumber = <any> 'ShiftNumber',
        TotalsGroupId = <any> 'TotalsGroupID'
    }
}
