/*
 * The version of the OpenAPI document: v6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { ErrorFieldType } from './errorFieldType';

export class GetPciUrlResponse {
    /**
    * Information about any invalid fields.
    */
    'invalidFields'?: Array<ErrorFieldType>;
    /**
    * The reference of a request. Can be used to uniquely identify the request.
    */
    'pspReference'?: string;
    /**
    * The URL to the PCI compliance questionnaire where you should redirect your account holder. This URL must be used within 30 seconds and can only be used once.
    */
    'redirectUrl'?: string;
    /**
    * The result code.
    */
    'resultCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "invalidFields",
            "baseName": "invalidFields",
            "type": "Array<ErrorFieldType>"
        },
        {
            "name": "pspReference",
            "baseName": "pspReference",
            "type": "string"
        },
        {
            "name": "redirectUrl",
            "baseName": "redirectUrl",
            "type": "string"
        },
        {
            "name": "resultCode",
            "baseName": "resultCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetPciUrlResponse.attributeTypeMap;
    }
}

