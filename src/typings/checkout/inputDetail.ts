/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Item } from "./item";
import { SubInputDetail } from "./subInputDetail";


export class InputDetail {
    /**
    * Configuration parameters for the required input.
    */
    "configuration"?: { [key: string]: string; };
    /**
    * Input details can also be provided recursively.
    */
    "details"?: Array<SubInputDetail>;
    /**
    * Input details can also be provided recursively (deprecated).
    *
	* @deprecated 
    */
    "inputDetails"?: Array<SubInputDetail>;
    /**
    * In case of a select, the URL from which to query the items.
    */
    "itemSearchUrl"?: string;
    /**
    * In case of a select, the items to choose from.
    */
    "items"?: Array<Item>;
    /**
    * The value to provide in the result.
    */
    "key"?: string;
    /**
    * True if this input value is optional.
    */
    "optional"?: boolean;
    /**
    * The type of the required input.
    */
    "type"?: string;
    /**
    * The value can be pre-filled, if available.
    */
    "value"?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "configuration",
            "baseName": "configuration",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "Array<SubInputDetail>",
            "format": ""
        },
        {
            "name": "inputDetails",
            "baseName": "inputDetails",
            "type": "Array<SubInputDetail>",
            "format": ""
        },
        {
            "name": "itemSearchUrl",
            "baseName": "itemSearchUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<Item>",
            "format": ""
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "optional",
            "baseName": "optional",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InputDetail.attributeTypeMap;
    }

    public constructor() {
    }
}

