/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class InternationalTransactionRestriction {
    /**
    * Defines how the condition must be evaluated.
    */
    'operation': string;
    /**
    * Boolean indicating whether transaction is an international transaction.  Possible values:  - **true**: The transaction is an international transaction.  - **false**: The transaction is a domestic transaction.  
    */
    'value'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "operation",
            "baseName": "operation",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return InternationalTransactionRestriction.attributeTypeMap;
    }
}

