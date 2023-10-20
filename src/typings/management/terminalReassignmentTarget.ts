/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class TerminalReassignmentTarget {
    /**
    * The unique identifier of the company account to which the terminal is reassigned.
    */
    'companyId'?: string;
    /**
    * Indicates if the terminal is reassigned to the inventory of the merchant account. - If **true**, the terminal is in the inventory of the merchant account and cannot process transactions. - If **false**, the terminal is reassigned directly to the merchant account and can process transactions.
    */
    'inventory': boolean;
    /**
    * The unique identifier of the merchant account to which the terminal is reassigned.
    */
    'merchantId'?: string;
    /**
    * The unique identifier of the store to which the terminal is reassigned.
    */
    'storeId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "companyId",
            "baseName": "companyId",
            "type": "string"
        },
        {
            "name": "inventory",
            "baseName": "inventory",
            "type": "boolean"
        },
        {
            "name": "merchantId",
            "baseName": "merchantId",
            "type": "string"
        },
        {
            "name": "storeId",
            "baseName": "storeId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TerminalReassignmentTarget.attributeTypeMap;
    }
}

