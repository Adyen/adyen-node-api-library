/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class DifferentCurrenciesRestriction {
    /**
    * Defines how the condition must be evaluated.
    */
    'operation': string;
    /**
    * Checks the currency of the payment against the currency of the payment instrument.  Possible values:  - **true**: The currency of the payment is different from the currency of the payment instrument.  - **false**: The currencies are the same.  
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
        return DifferentCurrenciesRestriction.attributeTypeMap;
    }
}
