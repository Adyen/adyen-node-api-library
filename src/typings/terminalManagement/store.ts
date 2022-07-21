/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Address } from './address';

export class Store {
    'address'?: Address;
    /**
    * The store description
    */
    'description'?: string;
    /**
    * List of unique terminal IDs assigned to this store
    */
    'inStoreTerminals'?: Array<string>;
    /**
    * Merchant account code
    */
    'merchantAccountCode'?: string;
    /**
    * Store status. Possible values:   - `PreActive`: The store has been created, but not yet activated.   - `Active`: The store has been activated. This means you can process payments over the store.   - `Inactive`: The store is currently not active.   - `InactiveWithModifications`: The store is currently not active, but payment modifications such as refunds are still allowed.   - `Closed`: The store has been closed. 
    */
    'status'?: string;
    /**
    * The store code of the store.
    */
    'store': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "Address"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "inStoreTerminals",
            "baseName": "inStoreTerminals",
            "type": "Array<string>"
        },
        {
            "name": "merchantAccountCode",
            "baseName": "merchantAccountCode",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "store",
            "baseName": "store",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Store.attributeTypeMap;
    }
}

