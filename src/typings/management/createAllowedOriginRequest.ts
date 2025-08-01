/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Links } from "./links";


export class CreateAllowedOriginRequest {
    "_links"?: Links | null;
    /**
    * Domain of the allowed origin.
    */
    "domain": string;
    /**
    * Unique identifier of the allowed origin.
    */
    "id"?: string;

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
            "name": "domain",
            "baseName": "domain",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateAllowedOriginRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

