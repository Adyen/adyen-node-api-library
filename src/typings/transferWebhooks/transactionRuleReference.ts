/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class TransactionRuleReference {
    /**
    * The description of the resource.
    */
    'description'?: string;
    /**
    * The unique identifier of the resource.
    */
    'id'?: string;
    /**
    * The outcome type of the rule.
    */
    'outcomeType'?: string;
    /**
    * The reference for the resource.
    */
    'reference'?: string;
    /**
    * The score of the rule in case it\'s a scoreBased rule.
    */
    'score'?: number;

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
            "name": "outcomeType",
            "baseName": "outcomeType",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "score",
            "baseName": "score",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return TransactionRuleReference.attributeTypeMap;
    }
}

