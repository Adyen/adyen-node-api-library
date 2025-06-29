/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class IbanAccountIdentificationRequirement {
    /**
    * Specifies the allowed prefixes for the international bank account number as defined in the ISO-13616 standard.
    */
    "description"?: string;
    /**
    * Contains the list of allowed prefixes for international bank accounts. For example: NL, US, UK.
    */
    "ibanPrefixes"?: Array<string>;
    /**
    * **ibanAccountIdentificationRequirement**
    */
    "type": IbanAccountIdentificationRequirement.TypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "ibanPrefixes",
            "baseName": "ibanPrefixes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "IbanAccountIdentificationRequirement.TypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IbanAccountIdentificationRequirement.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace IbanAccountIdentificationRequirement {
    export enum TypeEnum {
        IbanAccountIdentificationRequirement = 'ibanAccountIdentificationRequirement'
    }
}
