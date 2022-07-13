/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { ApiCredential } from './apiCredential';
import { PaginationLinks } from './paginationLinks';

export class ListMerchantApiCredentialsResponse {
    'links'?: PaginationLinks;
    /**
    * The list of API credentials.
    */
    'data'?: Array<ApiCredential>;
    /**
    * Total number of items.
    */
    'itemsTotal': number;
    /**
    * Total number of pages.
    */
    'pagesTotal': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "links",
            "baseName": "_links",
            "type": "PaginationLinks"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<ApiCredential>"
        },
        {
            "name": "itemsTotal",
            "baseName": "itemsTotal",
            "type": "number"
        },
        {
            "name": "pagesTotal",
            "baseName": "pagesTotal",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return ListMerchantApiCredentialsResponse.attributeTypeMap;
    }
}

