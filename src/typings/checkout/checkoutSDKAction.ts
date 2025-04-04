/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class CheckoutSDKAction {
    /**
    * Encoded payment data.
    */
    'paymentData'?: string;
    /**
    * Specifies the payment method.
    */
    'paymentMethodType'?: string;
    /**
    * The data to pass to the SDK.
    */
    'sdkData'?: { [key: string]: string; };
    /**
    * The type of the action.
    */
    'type': CheckoutSDKAction.TypeEnum;
    /**
    * Specifies the URL to redirect to.
    */
    'url'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "sdkData",
            "baseName": "sdkData",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CheckoutSDKAction.TypeEnum"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CheckoutSDKAction.attributeTypeMap;
    }
}

export namespace CheckoutSDKAction {
    export enum TypeEnum {
        Sdk = <any> 'sdk',
        WechatpaySdk = <any> 'wechatpaySDK'
    }
}
