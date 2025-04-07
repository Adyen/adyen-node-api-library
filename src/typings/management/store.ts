/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Links } from './links';
import { StoreLocation } from './storeLocation';
import { StoreSplitConfiguration } from './storeSplitConfiguration';

export class Store {
    '_links'?: Links;
    'address'?: StoreLocation;
    /**
    * The unique identifiers of the [business lines](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/businesslines__resParam_id) that the store is associated with.  If not specified, the business line of the merchant account is used. Required when there are multiple business lines under the merchant account.
    */
    'businessLineIds'?: Array<string>;
    /**
    * The description of the store.
    */
    'description'?: string;
    /**
    * The unique identifier of the store, used by certain payment methods and tax authorities.  Required for CNPJ in Brazil, in the format 00.000.000/0000-00 separated by dots, slashes, hyphens, or without separators.  Optional for SIRET in France, up to 14 digits.  Optional for Zip in Australia, up to 50 digits.  
    */
    'externalReferenceId'?: string;
    /**
    * The unique identifier of the store. This value is generated by Adyen.
    */
    'id'?: string;
    /**
    * The unique identifier of the merchant account that the store belongs to.
    */
    'merchantId'?: string;
    /**
    * The phone number of the store, including \'+\' and country code in the [E.164](https://en.wikipedia.org/wiki/E.164) format. If passed in a different format, we convert and validate the phone number against E.164. 
    */
    'phoneNumber'?: string;
    /**
    * A reference to recognize the store by. Also known as the store code.  Allowed characters: lowercase and uppercase letters without diacritics, numbers 0 through 9, hyphen (-), and underscore (_)
    */
    'reference'?: string;
    /**
    * The store name shown on the shopper\'s bank or credit card statement and on the shopper receipt.
    */
    'shopperStatement'?: string;
    'splitConfiguration'?: StoreSplitConfiguration;
    /**
    * The status of the store. Possible values are:  - **active**. This value is assigned automatically when a store is created.  - **inactive**. The terminals under the store are blocked from accepting new transactions, but capturing outstanding transactions is still possible. - **closed**. This status is irreversible. The terminals under the store are reassigned to the merchant inventory.
    */
    'status'?: Store.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "_links",
            "baseName": "_links",
            "type": "Links"
        },
        {
            "name": "address",
            "baseName": "address",
            "type": "StoreLocation"
        },
        {
            "name": "businessLineIds",
            "baseName": "businessLineIds",
            "type": "Array<string>"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "externalReferenceId",
            "baseName": "externalReferenceId",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "merchantId",
            "baseName": "merchantId",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "shopperStatement",
            "baseName": "shopperStatement",
            "type": "string"
        },
        {
            "name": "splitConfiguration",
            "baseName": "splitConfiguration",
            "type": "StoreSplitConfiguration"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Store.StatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return Store.attributeTypeMap;
    }
}

export namespace Store {
    export enum StatusEnum {
        Active = <any> 'active',
        Closed = <any> 'closed',
        Inactive = <any> 'inactive'
    }
}
