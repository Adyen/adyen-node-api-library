/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { ConvertedAmount } from './convertedAmount';

/**
* A currency conversion occurred in the payment, and the merchant needs to know information related to this conversion (e.g. to print on the sale receipt). Information related to a currency conversion.
*/
export class CurrencyConversion {
    /**
    * Notify if the customer has approved something. Indicates if the customer has accepted a currency conversion.
    */
    'CustomerApprovedFlag'?: boolean;
    'ConvertedAmount': ConvertedAmount;
    /**
    * Rate of currency conversion.
    */
    'Rate'?: string;
    /**
    * Markup of a currency conversion amount as a percentage.
    */
    'Markup'?: string;
    /**
    * Commission for a currency conversion.
    */
    'Commission'?: number;
    /**
    * If a declaration has to be presented to the customer.
    */
    'Declaration'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "CustomerApprovedFlag",
            "baseName": "CustomerApprovedFlag",
            "type": "boolean"
        },
        {
            "name": "ConvertedAmount",
            "baseName": "ConvertedAmount",
            "type": "ConvertedAmount"
        },
        {
            "name": "Rate",
            "baseName": "Rate",
            "type": "string"
        },
        {
            "name": "Markup",
            "baseName": "Markup",
            "type": "string"
        },
        {
            "name": "Commission",
            "baseName": "Commission",
            "type": "number"
        },
        {
            "name": "Declaration",
            "baseName": "Declaration",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CurrencyConversion.attributeTypeMap;
    }
}

