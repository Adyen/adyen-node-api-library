/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { DisplayOutput } from './displayOutput';
import { MessageReference } from './messageReference';

/**
* It conveys Information requested for identification of the message request carrying the transaction to abort. A message to display on the CustomerError Device could be sent by the Sale System (DisplayOutput). Body of the Abort Request message.
*/
export class AbortRequest {
    'MessageReference': MessageReference;
    /**
    * Reason of aborting a transaction.
    */
    'AbortReason': string;
    'DisplayOutput'?: DisplayOutput;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "MessageReference",
            "baseName": "MessageReference",
            "type": "MessageReference"
        },
        {
            "name": "AbortReason",
            "baseName": "AbortReason",
            "type": "string"
        },
        {
            "name": "DisplayOutput",
            "baseName": "DisplayOutput",
            "type": "DisplayOutput"
        }    ];

    static getAttributeTypeMap() {
        return AbortRequest.attributeTypeMap;
    }
}

