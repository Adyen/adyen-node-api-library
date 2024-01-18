/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { MessageHeader } from './messageHeader';
import { RepeatedResponseMessageBody } from './repeatedResponseMessageBody';

export class RepeatedMessageResponse {
    'MessageHeader': MessageHeader;
    'RepeatedResponseMessageBody': RepeatedResponseMessageBody;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "MessageHeader",
            "baseName": "MessageHeader",
            "type": "MessageHeader"
        },
        {
            "name": "RepeatedResponseMessageBody",
            "baseName": "RepeatedResponseMessageBody",
            "type": "RepeatedResponseMessageBody"
        }    ];

    static getAttributeTypeMap() {
        return RepeatedMessageResponse.attributeTypeMap;
    }
}

