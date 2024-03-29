/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class TransactionRuleEntityKey {
    /**
    * The unique identifier of the resource.
    */
    'entityReference'?: string;
    /**
    * The type of resource.  Possible values: **balancePlatform**, **paymentInstrumentGroup**, **accountHolder**, **balanceAccount**, or **paymentInstrument**.
    */
    'entityType'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "entityReference",
            "baseName": "entityReference",
            "type": "string"
        },
        {
            "name": "entityType",
            "baseName": "entityType",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TransactionRuleEntityKey.attributeTypeMap;
    }
}

