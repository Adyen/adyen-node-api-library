/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


/**
* It conveys Information related to the predefined message. Reference of a predefined message to display or print.
*/
export class PredefinedContent {
    /**
    * Identification of a predefined message to display or print.
    */
    'ReferenceID': string;
    /**
    * Identification of a language.
    */
    'Language'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ReferenceID",
            "baseName": "ReferenceID",
            "type": "string"
        },
        {
            "name": "Language",
            "baseName": "Language",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PredefinedContent.attributeTypeMap;
    }
}

