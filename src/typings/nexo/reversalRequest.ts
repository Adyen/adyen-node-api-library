/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { CustomerOrder } from './customerOrder';
import { OriginalPOITransaction } from './originalPOITransaction';
import { ReversalReason } from './reversalReason';
import { SaleData } from './saleData';

/**
* It conveys Information related to the reversal of a previous payment or a loyalty transaction. Content of the Reversal Request message.
*/
export class ReversalRequest {
    'SaleData'?: SaleData;
    'OriginalPOITransaction': OriginalPOITransaction;
    /**
    * ReversedAmount is implicitely the AuthorizedAmount if absent.
    */
    'ReversedAmount'?: number;
    'ReversalReason': ReversalReason;
    'CustomerOrder'?: CustomerOrder;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "SaleData",
            "baseName": "SaleData",
            "type": "SaleData"
        },
        {
            "name": "OriginalPOITransaction",
            "baseName": "OriginalPOITransaction",
            "type": "OriginalPOITransaction"
        },
        {
            "name": "ReversedAmount",
            "baseName": "ReversedAmount",
            "type": "number"
        },
        {
            "name": "ReversalReason",
            "baseName": "ReversalReason",
            "type": "ReversalReason"
        },
        {
            "name": "CustomerOrder",
            "baseName": "CustomerOrder",
            "type": "CustomerOrder"
        }    ];

    static getAttributeTypeMap() {
        return ReversalRequest.attributeTypeMap;
    }
}
