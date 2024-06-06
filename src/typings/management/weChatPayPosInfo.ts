/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class WeChatPayPosInfo {
    /**
    * The name of the contact person from merchant support.
    */
    'contactPersonName': string;
    /**
    * The email address of merchant support.
    */
    'email': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "contactPersonName",
            "baseName": "contactPersonName",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return WeChatPayPosInfo.attributeTypeMap;
    }
}

