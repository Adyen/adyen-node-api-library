/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { NetworkToken } from './networkToken';

export class ListNetworkTokensResponse {
    /**
    * List of network tokens.
    */
    'networkTokens'?: Array<NetworkToken>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "networkTokens",
            "baseName": "networkTokens",
            "type": "Array<NetworkToken>"
        }    ];

    static getAttributeTypeMap() {
        return ListNetworkTokensResponse.attributeTypeMap;
    }
}
