/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class AmountsResp {
    'Currency'?: string;
    'AuthorizedAmount': number;
    'TotalRebatesAmount'?: number;
    'TotalFeesAmount'?: number;
    'CashBackAmount'?: number;
    'TipAmount'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "Currency",
            "baseName": "Currency",
            "type": "string"
        },
        {
            "name": "AuthorizedAmount",
            "baseName": "AuthorizedAmount",
            "type": "number"
        },
        {
            "name": "TotalRebatesAmount",
            "baseName": "TotalRebatesAmount",
            "type": "number"
        },
        {
            "name": "TotalFeesAmount",
            "baseName": "TotalFeesAmount",
            "type": "number"
        },
        {
            "name": "CashBackAmount",
            "baseName": "CashBackAmount",
            "type": "number"
        },
        {
            "name": "TipAmount",
            "baseName": "TipAmount",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return AmountsResp.attributeTypeMap;
    }
}
