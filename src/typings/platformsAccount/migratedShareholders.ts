/*
 * The version of the OpenAPI document: v6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class MigratedShareholders {
    /**
    * The unique identifier of the legal entity of that shareholder in the balance platform.
    */
    'legalEntityCode'?: string;
    /**
    * The unique identifier of the account of the migrated shareholder in the classic integration.
    */
    'shareholderCode'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "legalEntityCode",
            "baseName": "legalEntityCode",
            "type": "string"
        },
        {
            "name": "shareholderCode",
            "baseName": "shareholderCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MigratedShareholders.attributeTypeMap;
    }
}

