/*
 * The version of the OpenAPI document: v68
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class SplitAmount {
    /**
    * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).  If this value is not provided, the currency in which the payment is made will be used.
    */
    'currency'?: string;
    /**
    * The amount in [minor units](https://docs.adyen.com/development-resources/currency-codes).
    */
    'value': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SplitAmount.attributeTypeMap;
    }
}

