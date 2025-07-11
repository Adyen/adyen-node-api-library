/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class PseDetails {
    /**
    * The shopper\'s bank.
    */
    "bank": string;
    /**
    * The checkout attempt identifier.
    */
    "checkoutAttemptId"?: string;
    /**
    * The client type.
    */
    "clientType": string;
    /**
    * The identification code.
    */
    "identification": string;
    /**
    * The identification type.
    */
    "identificationType": string;
    /**
    * The payment method type.
    */
    "type"?: PseDetails.TypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bank",
            "baseName": "bank",
            "type": "string",
            "format": ""
        },
        {
            "name": "checkoutAttemptId",
            "baseName": "checkoutAttemptId",
            "type": "string",
            "format": ""
        },
        {
            "name": "clientType",
            "baseName": "clientType",
            "type": "string",
            "format": ""
        },
        {
            "name": "identification",
            "baseName": "identification",
            "type": "string",
            "format": ""
        },
        {
            "name": "identificationType",
            "baseName": "identificationType",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PseDetails.TypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PseDetails.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace PseDetails {
    export enum TypeEnum {
        PsePayulatam = 'pse_payulatam'
    }
}
