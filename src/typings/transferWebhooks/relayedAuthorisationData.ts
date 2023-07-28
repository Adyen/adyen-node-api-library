/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class RelayedAuthorisationData {
    /**
    * Contains key-value pairs of your references and descriptions, for example, `customId`:`your-own-custom-field-12345`.
    */
    'metadata'?: { [key: string]: string; };
    /**
    * Your reference for the relayed authorisation data.
    */
    'reference'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return RelayedAuthorisationData.attributeTypeMap;
    }
}
