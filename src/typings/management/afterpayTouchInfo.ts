/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class AfterpayTouchInfo {
    /**
    * Support Url
    */
    'supportUrl': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "supportUrl",
            "baseName": "supportUrl",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AfterpayTouchInfo.attributeTypeMap;
    }
}

