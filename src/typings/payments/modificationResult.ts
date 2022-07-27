/*
 * The version of the OpenAPI document: v68
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class ModificationResult {
    /**
    * This field contains additional data, which may be returned in a particular modification response.
    */
    'additionalData'?: { [key: string]: string; };
    /**
    * Adyen\'s 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.
    */
    'pspReference': string;
    /**
    * Indicates if the modification request has been received for processing.
    */
    'response': ModificationResult.ResponseEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalData",
            "baseName": "additionalData",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "pspReference",
            "baseName": "pspReference",
            "type": "string"
        },
        {
            "name": "response",
            "baseName": "response",
            "type": "ModificationResult.ResponseEnum"
        }    ];

    static getAttributeTypeMap() {
        return ModificationResult.attributeTypeMap;
    }
}

export namespace ModificationResult {
    export enum ResponseEnum {
        CaptureReceived = <any> '[capture-received]',
        CancelReceived = <any> '[cancel-received]',
        RefundReceived = <any> '[refund-received]',
        CancelOrRefundReceived = <any> '[cancelOrRefund-received]',
        AdjustAuthorisationReceived = <any> '[adjustAuthorisation-received]',
        DonationReceived = <any> '[donation-received]',
        TechnicalCancelReceived = <any> '[technical-cancel-received]',
        VoidPendingRefundReceived = <any> '[voidPendingRefund-received]'
    }
}
