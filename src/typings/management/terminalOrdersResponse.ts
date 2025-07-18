/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { TerminalOrder } from "./terminalOrder";


export class TerminalOrdersResponse {
    /**
    * List of orders for payment terminal packages and parts.
    */
    "data"?: Array<TerminalOrder>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<TerminalOrder>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TerminalOrdersResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

