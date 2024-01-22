/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { ReconciliationType } from './reconciliationType';

/**
* It conveys Information related to the Reconciliation requested by the Sale System. Content of the Reconciliation Request message.
*/
export class ReconciliationRequest {
    'ReconciliationType': ReconciliationType;
    'AcquirerID'?: Array<number>;
    /**
    * Absent if ReconciliationType is not PreviousReconciliation.
    */
    'POIReconciliationID'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ReconciliationType",
            "baseName": "ReconciliationType",
            "type": "ReconciliationType"
        },
        {
            "name": "AcquirerID",
            "baseName": "AcquirerID",
            "type": "Array<number>"
        },
        {
            "name": "POIReconciliationID",
            "baseName": "POIReconciliationID",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ReconciliationRequest.attributeTypeMap;
    }
}
