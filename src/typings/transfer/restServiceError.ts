/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { InvalidField } from './invalidField';
import { JSONObject } from './jSONObject';

export class RestServiceError {
    /**
    * A human-readable explanation specific to this occurrence of the problem.
    */
    'detail': string;
    /**
    * A code that identifies the problem type.
    */
    'errorCode': string;
    /**
    * A unique URI that identifies the specific occurrence of the problem.
    */
    'instance'?: string;
    /**
    * Detailed explanation of each validation error, when applicable.
    */
    'invalidFields'?: Array<InvalidField>;
    /**
    * A unique reference for the request, essentially the same as `pspReference`.
    */
    'requestId'?: string;
    'response'?: JSONObject;
    /**
    * The HTTP status code.
    */
    'status': number;
    /**
    * A short, human-readable summary of the problem type.
    */
    'title': string;
    /**
    * A URI that identifies the problem type, pointing to human-readable documentation on this problem type.
    */
    'type': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "detail",
            "baseName": "detail",
            "type": "string"
        },
        {
            "name": "errorCode",
            "baseName": "errorCode",
            "type": "string"
        },
        {
            "name": "instance",
            "baseName": "instance",
            "type": "string"
        },
        {
            "name": "invalidFields",
            "baseName": "invalidFields",
            "type": "Array<InvalidField>"
        },
        {
            "name": "requestId",
            "baseName": "requestId",
            "type": "string"
        },
        {
            "name": "response",
            "baseName": "response",
            "type": "JSONObject"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "number"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RestServiceError.attributeTypeMap;
    }
}

