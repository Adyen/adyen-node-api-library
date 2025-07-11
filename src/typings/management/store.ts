/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Links } from "./links";
import { StoreLocation } from "./storeLocation";
import { StoreSplitConfiguration } from "./storeSplitConfiguration";
import { SubMerchantData } from "./subMerchantData";


export class Store {
    "_links"?: Links | null;
    "address"?: StoreLocation | null;
    /**
    * The unique identifiers of the [business lines](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/businesslines__resParam_id) that the store is associated with.  If not specified, the business line of the merchant account is used. Required when there are multiple business lines under the merchant account.
    */
    "businessLineIds"?: Array<string>;
    /**
    * The description of the store.
    */
    "description"?: string;
    /**
    * The unique identifier of the store, used by certain payment methods and tax authorities.  Required for CNPJ in Brazil, in the format 00.000.000/0000-00 separated by dots, slashes, hyphens, or without separators.  Optional for SIRET in France, up to 14 digits.  Optional for Zip in Australia, up to 50 digits.  
    */
    "externalReferenceId"?: string;
    /**
    * The unique identifier of the store. This value is generated by Adyen.
    */
    "id"?: string;
    /**
    * The unique identifier of the merchant account that the store belongs to.
    */
    "merchantId"?: string;
    /**
    * The phone number of the store, including \'+\' and country code in the [E.164](https://en.wikipedia.org/wiki/E.164) format. If passed in a different format, we convert and validate the phone number against E.164. 
    */
    "phoneNumber"?: string;
    /**
    * A reference to recognize the store by. Also known as the store code.  Allowed characters: lowercase and uppercase letters without diacritics, numbers 0 through 9, hyphen (-), and underscore (_)
    */
    "reference"?: string;
    /**
    * The store name shown on the shopper\'s bank or credit card statement and on the shopper receipt.
    */
    "shopperStatement"?: string;
    "splitConfiguration"?: StoreSplitConfiguration | null;
    /**
    * The status of the store. Possible values are:  - **active**. This value is assigned automatically when a store is created.  - **inactive**. The terminals under the store are blocked from accepting new transactions, but capturing outstanding transactions is still possible. - **closed**. This status is irreversible. The terminals under the store are reassigned to the merchant inventory.
    */
    "status"?: Store.StatusEnum;
    "subMerchantData"?: SubMerchantData | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "_links",
            "baseName": "_links",
            "type": "Links | null",
            "format": ""
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "StoreLocation | null",
            "format": ""
        },
        {
            "name": "businessLineIds",
            "baseName": "businessLineIds",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "externalReferenceId",
            "baseName": "externalReferenceId",
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
            "name": "merchantId",
            "baseName": "merchantId",
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
            "name": "reference",
            "baseName": "reference",
            "type": "string",
            "format": ""
        },
        {
            "name": "shopperStatement",
            "baseName": "shopperStatement",
            "type": "string",
            "format": ""
        },
        {
            "name": "splitConfiguration",
            "baseName": "splitConfiguration",
            "type": "StoreSplitConfiguration | null",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Store.StatusEnum",
            "format": ""
        },
        {
            "name": "subMerchantData",
            "baseName": "subMerchantData",
            "type": "SubMerchantData | null",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Store.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace Store {
    export enum StatusEnum {
        Active = 'active',
        Closed = 'closed',
        Inactive = 'inactive'
    }
}
