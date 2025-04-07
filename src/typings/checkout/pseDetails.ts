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
    'bank': string;
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * The client type.
    */
    'clientType': string;
    /**
    * The identification code.
    */
    'identification': string;
    /**
    * The identification type.
    */
    'identificationType': string;
    /**
    * The payment method type.
    */
    'type'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bank",
            "baseName": "bank",
            "type": "string"
        },
        {
            "name": "checkoutAttemptId",
            "baseName": "checkoutAttemptId",
            "type": "string"
        },
        {
            "name": "clientType",
            "baseName": "clientType",
            "type": "string"
        },
        {
            "name": "identification",
            "baseName": "identification",
            "type": "string"
        },
        {
            "name": "identificationType",
            "baseName": "identificationType",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PseDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PseDetails.attributeTypeMap;
    }
}

export namespace PseDetails {
    export enum TypeEnum {
        PsePayulatam = <any> 'pse_payulatam'
    }
}
