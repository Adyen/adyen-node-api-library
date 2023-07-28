/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Store } from './store';

export class GetStoresUnderAccountResponse {
    /**
    * Array that returns a list of all stores for the specified merchant account, or for all merchant accounts under the company account.
    */
    'stores'?: Array<Store>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "stores",
            "baseName": "stores",
            "type": "Array<Store>"
        }    ];

    static getAttributeTypeMap() {
        return GetStoresUnderAccountResponse.attributeTypeMap;
    }
}

