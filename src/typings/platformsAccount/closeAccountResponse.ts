/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { ErrorFieldType } from './errorFieldType';

export class CloseAccountResponse {
    /**
    * The account code of the account that is closed.
    */
    'accountCode'?: string;
    /**
    * Contains field validation errors that would prevent requests from being processed.
    */
    'invalidFields'?: Array<ErrorFieldType>;
    /**
    * The reference of a request. Can be used to uniquely identify the request.
    */
    'pspReference'?: string;
    /**
    * The result code.
    */
    'resultCode'?: string;
    /**
    * The new status of the account. >Permitted values: `Active`, `Inactive`, `Suspended`, `Closed`.
    */
    'status'?: CloseAccountResponse.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountCode",
            "baseName": "accountCode",
            "type": "string"
        },
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
            "name": "resultCode",
            "baseName": "resultCode",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "CloseAccountResponse.StatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return CloseAccountResponse.attributeTypeMap;
    }
}

export namespace CloseAccountResponse {
    export enum StatusEnum {
        Active = 'Active',
        Closed = 'Closed',
        Inactive = 'Inactive',
        Suspended = 'Suspended'
    }
}
