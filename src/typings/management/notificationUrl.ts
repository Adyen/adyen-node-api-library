/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Url } from "./url";


export class NotificationUrl {
    /**
    * One or more local URLs to send notifications to when using Terminal API.
    */
    "localUrls"?: Array<Url>;
    /**
    * One or more public URLs to send notifications to when using Terminal API.
    */
    "publicUrls"?: Array<Url>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "localUrls",
            "baseName": "localUrls",
            "type": "Array<Url>",
            "format": ""
        },
        {
            "name": "publicUrls",
            "baseName": "publicUrls",
            "type": "Array<Url>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NotificationUrl.attributeTypeMap;
    }

    public constructor() {
    }
}

