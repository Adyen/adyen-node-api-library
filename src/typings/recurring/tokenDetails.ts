/*
 * The version of the OpenAPI document: v68
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class TokenDetails {
    'tokenData'?: { [key: string]: string; };
    'tokenDataType'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "tokenData",
            "baseName": "tokenData",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "tokenDataType",
            "baseName": "tokenDataType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TokenDetails.attributeTypeMap;
    }
}

