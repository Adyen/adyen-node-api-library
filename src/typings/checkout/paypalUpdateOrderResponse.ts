/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class PaypalUpdateOrderResponse {
    /**
    * The updated paymentData.
    */
    "paymentData": string;
    /**
    * The status of the request. This indicates whether the order was successfully updated with PayPal.
    */
    "status": PaypalUpdateOrderResponse.StatusEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "paymentData",
            "baseName": "paymentData",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PaypalUpdateOrderResponse.StatusEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PaypalUpdateOrderResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace PaypalUpdateOrderResponse {
    export enum StatusEnum {
        Error = 'error',
        Success = 'success'
    }
}
