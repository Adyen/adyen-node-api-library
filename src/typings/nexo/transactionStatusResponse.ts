/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { MessageReference } from './messageReference';
import { RepeatedMessageResponse } from './repeatedMessageResponse';
import { Response } from './response';

/**
* It conveys Information related to the status of the last or current Payment, Loyalty or Reversal transaction. Content of the TransactionStatus Response message.
*/
export class TransactionStatusResponse {
    'Response': Response;
    'MessageReference'?: MessageReference;
    'RepeatedMessageResponse'?: RepeatedMessageResponse;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "Response",
            "baseName": "Response",
            "type": "Response"
        },
        {
            "name": "MessageReference",
            "baseName": "MessageReference",
            "type": "MessageReference"
        },
        {
            "name": "RepeatedMessageResponse",
            "baseName": "RepeatedMessageResponse",
            "type": "RepeatedMessageResponse"
        }    ];

    static getAttributeTypeMap() {
        return TransactionStatusResponse.attributeTypeMap;
    }
}
