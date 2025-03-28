/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Item } from './item';
import { SubInputDetail } from './subInputDetail';

export class InputDetail {
    /**
    * Configuration parameters for the required input.
    */
    'configuration'?: { [key: string]: string; };
    /**
    * Input details can also be provided recursively.
    */
    'details'?: Array<SubInputDetail>;
    /**
    * Input details can also be provided recursively (deprecated).
    *
	* @deprecated 
    */
    'inputDetails'?: Array<SubInputDetail>;
    /**
    * In case of a select, the URL from which to query the items.
    */
    'itemSearchUrl'?: string;
    /**
    * In case of a select, the items to choose from.
    */
    'items'?: Array<Item>;
    /**
    * The value to provide in the result.
    */
    'key'?: string;
    /**
    * True if this input value is optional.
    */
    'optional'?: boolean;
    /**
    * The type of the required input.
    */
    'type'?: string;
    /**
    * The value can be pre-filled, if available.
    */
    'value'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "configuration",
            "baseName": "configuration",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "Array<SubInputDetail>"
        },
        {
            "name": "inputDetails",
            "baseName": "inputDetails",
            "type": "Array<SubInputDetail>"
        },
        {
            "name": "itemSearchUrl",
            "baseName": "itemSearchUrl",
            "type": "string"
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<Item>"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "optional",
            "baseName": "optional",
            "type": "boolean"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return InputDetail.attributeTypeMap;
    }
}

