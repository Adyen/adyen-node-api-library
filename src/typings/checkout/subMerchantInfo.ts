/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';
import { BillingAddress } from './billingAddress';

export class SubMerchantInfo {
    'address'?: BillingAddress;
    'amount'?: Amount;
    /**
    * Required for transactions performed by registered payment facilitators. The email associated with the sub-merchant\'s account.
    */
    'email'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. A unique identifier that you create for the sub-merchant, used by schemes to identify the sub-merchant.  * Format: Alphanumeric * Maximum length: 15 characters
    */
    'id'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The sub-merchant\'s 4-digit Merchant Category Code (MCC).  * Format: Numeric * Fixed length: 4 digits
    */
    'mcc'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The name of the sub-merchant. Based on scheme specifications, this value will overwrite the shopper statement that will appear in the card statement. * Format: Alphanumeric * Maximum length: 22 characters
    */
    'name'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The phone number associated with the sub-merchant\'s account.
    */
    'phoneNumber'?: string;
    'registeredSince'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The tax ID of the sub-merchant. * Format: Numeric * Fixed length: 11 digits for the CPF or 14 digits for the CNPJ
    */
    'taxId'?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The sub-merchant\'s URL on the platform, i.e. the sub-merchant\'s shop.
    */
    'url'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "BillingAddress"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "mcc",
            "baseName": "mcc",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        },
        {
            "name": "registeredSince",
            "baseName": "registeredSince",
            "type": "string"
        },
        {
            "name": "taxId",
            "baseName": "taxId",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SubMerchantInfo.attributeTypeMap;
    }
}

