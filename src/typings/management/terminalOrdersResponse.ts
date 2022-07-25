/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { TerminalOrder } from './terminalOrder';

export class TerminalOrdersResponse {
    /**
    * List of orders for payment terminal packages and parts.
    */
    'data'?: Array<TerminalOrder>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<TerminalOrder>"
        }    ];

    static getAttributeTypeMap() {
        return TerminalOrdersResponse.attributeTypeMap;
    }
}

