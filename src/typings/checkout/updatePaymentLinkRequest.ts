/*
 * The version of the OpenAPI document: v70
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class UpdatePaymentLinkRequest {
    /**
    * Status of the payment link. Possible values: * **expired**
    */
    'status': UpdatePaymentLinkRequest.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "UpdatePaymentLinkRequest.StatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return UpdatePaymentLinkRequest.attributeTypeMap;
    }
}

export namespace UpdatePaymentLinkRequest {
    export enum StatusEnum {
        Expired = 'expired'
    }
}
