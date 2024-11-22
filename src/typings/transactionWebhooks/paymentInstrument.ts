/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class PaymentInstrument {
    /**
    * The description of the resource.
    */
    'description'?: string;
    /**
    * The unique identifier of the resource.
    */
    'id'?: string;
    /**
    * The reference for the resource.
    */
    'reference'?: string;
    /**
    * The type of wallet that the network token is associated with.
    */
    'tokenType'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "tokenType",
            "baseName": "tokenType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentInstrument.attributeTypeMap;
    }
}
