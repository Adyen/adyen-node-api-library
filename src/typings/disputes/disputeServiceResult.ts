/*
 * The version of the OpenAPI document: v30
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class DisputeServiceResult {
    /**
    * The general error message.
    */
    'errorMessage'?: string;
    /**
    * Indicates whether the request succeeded.
    */
    'success': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errorMessage",
            "baseName": "errorMessage",
            "type": "string"
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return DisputeServiceResult.attributeTypeMap;
    }
}

