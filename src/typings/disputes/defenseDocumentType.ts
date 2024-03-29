/*
 * The version of the OpenAPI document: v30
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class DefenseDocumentType {
    /**
    * When **true**, you\'ve successfully uploaded this type of defense document. When **false**, you haven\'t uploaded this defense document type.
    */
    'available': boolean;
    /**
    * The document type code of the defense document.
    */
    'defenseDocumentTypeCode': string;
    /**
    * Indicates to what extent the defense document is required in the defense process.  Possible values:   * **Required**: You must supply the document.   * **OneOrMore**: You must supply at least one of the documents with this label.  * **Optional**: You can choose to supply the document.  * **AlternativeRequired**: You must supply a generic defense document. To enable this functionality, contact our Support Team. When enabled, you can supply a generic defense document for all schemes.
    */
    'requirementLevel': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "available",
            "baseName": "available",
            "type": "boolean"
        },
        {
            "name": "defenseDocumentTypeCode",
            "baseName": "defenseDocumentTypeCode",
            "type": "string"
        },
        {
            "name": "requirementLevel",
            "baseName": "requirementLevel",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DefenseDocumentType.attributeTypeMap;
    }
}

