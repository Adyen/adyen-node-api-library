/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Currency } from './currency';

export class Configuration {
    /**
    * Payment method, like **eftpos_australia** or **mc**. See the [possible values](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api). 
    */
    'brand': string;
    /**
    * Countries, to filter different surcharge amounts for domestic or international cards.
    */
    'country'?: Array<string>;
    /**
    * Currency, and surcharge percentage or amount.
    */
    'currencies': Array<Currency>;
    /**
    * Funding source. Possible values: * **Credit** * **Debit**
    */
    'sources'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "brand",
            "baseName": "brand",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "Array<string>"
        },
        {
            "name": "currencies",
            "baseName": "currencies",
            "type": "Array<Currency>"
        },
        {
            "name": "sources",
            "baseName": "sources",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return Configuration.attributeTypeMap;
    }
}

