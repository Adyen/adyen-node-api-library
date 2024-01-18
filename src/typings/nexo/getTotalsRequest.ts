/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { TotalFilter } from './totalFilter';

/**
* It conveys information from the Sale System related to the scope and the format of the totals to be computed by the POI System. Content of the Get Totals Request message.
*/
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
        OperatorId = 'OperatorID',
        Poiid = 'POIID',
        SaleId = 'SaleID',
        ShiftNumber = 'ShiftNumber',
        TotalsGroupId = 'TotalsGroupID'
    }
}
