/*
 * The version of the OpenAPI document: v70
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class WeChatPayMiniProgramDetails {
    'appId'?: string;
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    'openid'?: string;
    /**
    * **wechatpayMiniProgram**
    */
    'type'?: WeChatPayMiniProgramDetails.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "appId",
            "baseName": "appId",
            "type": "string"
        },
        {
            "name": "checkoutAttemptId",
            "baseName": "checkoutAttemptId",
            "type": "string"
        },
        {
            "name": "openid",
            "baseName": "openid",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "WeChatPayMiniProgramDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return WeChatPayMiniProgramDetails.attributeTypeMap;
    }
}

export namespace WeChatPayMiniProgramDetails {
    export enum TypeEnum {
        WechatpayMiniProgram = <any> 'wechatpayMiniProgram'
    }
}
