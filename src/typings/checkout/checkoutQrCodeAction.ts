/*
 * The version of the OpenAPI document: v69
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class CheckoutQrCodeAction {
    /**
    * Expiry time of the QR code.
    */
    'expiresAt'?: string;
    /**
    * A value that must be submitted to the `/payments/details` endpoint to verify this payment.
    */
    'paymentData'?: string;
    /**
    * Specifies the payment method.
    */
    'paymentMethodType'?: string;
    /**
    * The contents of the QR code as a UTF8 string.
    */
    'qrCodeData'?: string;
    /**
    * **qrCode**
    */
    'type': CheckoutQrCodeAction.TypeEnum;
    /**
    * Specifies the URL to redirect to.
    */
    'url'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "string"
        },
        {
            "name": "paymentData",
            "baseName": "paymentData",
            "type": "string"
        },
        {
            "name": "paymentMethodType",
            "baseName": "paymentMethodType",
            "type": "string"
        },
        {
            "name": "qrCodeData",
            "baseName": "qrCodeData",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CheckoutQrCodeAction.TypeEnum"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CheckoutQrCodeAction.attributeTypeMap;
    }
}

export namespace CheckoutQrCodeAction {
    export enum TypeEnum {
        QrCode = <any> 'qrCode'
    }
}
