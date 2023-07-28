/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class Balance {
    /**
    * The remaining amount available for spending.
    */
    'available': number;
    /**
    * The total amount in the balance.
    */
    'balance': number;
    /**
    * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance.
    */
    'currency': string;
    /**
    * The amount reserved for payments that have been authorised, but have not been captured yet.
    */
    'reserved': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "available",
            "baseName": "available",
            "type": "number"
        },
        {
            "name": "balance",
            "baseName": "balance",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "reserved",
            "baseName": "reserved",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Balance.attributeTypeMap;
    }
}
