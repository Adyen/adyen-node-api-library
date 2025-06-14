/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class SourceOfFunds {
    /**
    * The unique identifier of the business line that is the source of funds.This must be a business line for a **receivePayments** or **receiveFromPlatformPayments** capability.
    *
	* @deprecated since Legal Entity Management API v3
	* This field will be removed in v4.
    */
    "acquiringBusinessLineId"?: string;
    /**
    * Indicates whether the funds are coming from transactions processed by Adyen. If **false**, a `description` is required.
    */
    "adyenProcessedFunds"?: boolean;
    /**
    * Text describing the source of funds. For example, for `type` **business**, provide a description of where the business transactions come from, such as payments through bank transfer. Required when `adyenProcessedFunds` is **false**.
    */
    "description"?: string;
    /**
    * The type of the source of funds. Possible value: **business**.
    */
    "type"?: SourceOfFunds.TypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "acquiringBusinessLineId",
            "baseName": "acquiringBusinessLineId",
            "type": "string",
            "format": ""
        },
        {
            "name": "adyenProcessedFunds",
            "baseName": "adyenProcessedFunds",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SourceOfFunds.TypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SourceOfFunds.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace SourceOfFunds {
    export enum TypeEnum {
        Business = 'business'
    }
}
