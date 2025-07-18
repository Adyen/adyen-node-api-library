/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from "./amount";
import { BillingAddress } from "./billingAddress";


export class SubMerchantInfo {
    "address"?: BillingAddress | null;
    "amount"?: Amount | null;
    /**
    * Required for transactions performed by registered payment facilitators. The email associated with the sub-merchant\'s account.
    */
    "email"?: string;
    /**
    * Required for transactions performed by registered payment facilitators. A unique identifier that you create for the sub-merchant, used by schemes to identify the sub-merchant.  * Format: Alphanumeric * Maximum length: 15 characters
    */
    "id"?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The sub-merchant\'s 4-digit Merchant Category Code (MCC).  * Format: Numeric * Fixed length: 4 digits
    */
    "mcc"?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The name of the sub-merchant. Based on scheme specifications, this value will overwrite the shopper statement that will appear in the card statement. Exception: for acquirers in Brazil, this value does not overwrite the shopper statement. * Format: Alphanumeric * Maximum length: 22 characters
    */
    "name"?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The phone number associated with the sub-merchant\'s account.
    */
    "phoneNumber"?: string;
    "registeredSince"?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The tax ID of the sub-merchant. * Format: Numeric * Fixed length: 11 digits for the CPF or 14 digits for the CNPJ
    */
    "taxId"?: string;
    /**
    * Required for transactions performed by registered payment facilitators. The sub-merchant\'s URL on the platform, i.e. the sub-merchant\'s shop.
    */
    "url"?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "BillingAddress | null",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount | null",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "mcc",
            "baseName": "mcc",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "registeredSince",
            "baseName": "registeredSince",
            "type": "string",
            "format": ""
        },
        {
            "name": "taxId",
            "baseName": "taxId",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubMerchantInfo.attributeTypeMap;
    }

    public constructor() {
    }
}

