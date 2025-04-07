/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class CheckoutRedirectAction {
    /**
    * When the redirect URL must be accessed via POST, use this data to post to the redirect URL.
    */
    'data'?: { [key: string]: string; };
    /**
    * Specifies the HTTP method, for example GET or POST.
    */
    'method'?: string;
    /**
    * Specifies the payment method.
    */
    'paymentMethodType'?: string;
    /**
    * **redirect**
    */
    'type': string;
    /**
    * Specifies the URL to redirect to.
    */
    'url'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "string"
        },
        {
            "name": "paymentMethodType",
            "baseName": "paymentMethodType",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CheckoutRedirectAction.TypeEnum"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CheckoutRedirectAction.attributeTypeMap;
    }
}

