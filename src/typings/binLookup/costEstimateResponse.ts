/*
 * The version of the OpenAPI document: v54
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';
import { CardBin } from './cardBin';

export class CostEstimateResponse {
    'cardBin'?: CardBin;
    'costEstimateAmount'?: Amount;
    /**
    * Adyen\'s 16-character reference associated with the request.
    */
    'costEstimateReference'?: string;
    /**
    * The result of the cost estimation.
    */
    'resultCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cardBin",
            "baseName": "cardBin",
            "type": "CardBin"
        },
        {
            "name": "costEstimateAmount",
            "baseName": "costEstimateAmount",
            "type": "Amount"
        },
        {
            "name": "costEstimateReference",
            "baseName": "costEstimateReference",
            "type": "string"
        },
        {
            "name": "resultCode",
            "baseName": "resultCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CostEstimateResponse.attributeTypeMap;
    }
}

