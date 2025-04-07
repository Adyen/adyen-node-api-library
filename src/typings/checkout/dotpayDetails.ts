/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class DotpayDetails {
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * The Dotpay issuer value of the shopper\'s selected bank. Set this to an **id** of a Dotpay issuer to preselect it.
    */
    'issuer': string;
    /**
    * **dotpay**
    */
    'type'?: DotpayDetails.TypeEnum = DotpayDetails.TypeEnum.Dotpay;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checkoutAttemptId",
            "baseName": "checkoutAttemptId",
            "type": "string"
        },
        {
            "name": "issuer",
            "baseName": "issuer",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "DotpayDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return DotpayDetails.attributeTypeMap;
    }
}

export namespace DotpayDetails {
    export enum TypeEnum {
        Dotpay = <any> 'dotpay'
    }
}
