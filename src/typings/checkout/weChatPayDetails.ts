/*
 * The version of the OpenAPI document: v70
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class WeChatPayDetails {
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * **wechatpay**
    */
    'type'?: WeChatPayDetails.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checkoutAttemptId",
            "baseName": "checkoutAttemptId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "WeChatPayDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return WeChatPayDetails.attributeTypeMap;
    }
}

export namespace WeChatPayDetails {
    export enum TypeEnum {
        Wechatpay = 'wechatpay',
        WechatpayPos = 'wechatpay_pos'
    }
}
