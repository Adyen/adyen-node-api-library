/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { EventUrl } from "./eventUrl";
import { Key } from "./key";
import { Notification } from "./notification";
import { NotificationUrl } from "./notificationUrl";


export class Nexo {
    "displayUrls"?: NotificationUrl | null;
    "encryptionKey"?: Key | null;
    "eventUrls"?: EventUrl | null;
    /**
    * One or more URLs to send event messages to when using Terminal API.
    *
	* @deprecated since Management API v1
	* Use `eventUrls` instead.
    */
    "nexoEventUrls"?: Array<string>;
    "notification"?: Notification | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "displayUrls",
            "baseName": "displayUrls",
            "type": "NotificationUrl | null",
            "format": ""
        },
        {
            "name": "encryptionKey",
            "baseName": "encryptionKey",
            "type": "Key | null",
            "format": ""
        },
        {
            "name": "eventUrls",
            "baseName": "eventUrls",
            "type": "EventUrl | null",
            "format": ""
        },
        {
            "name": "nexoEventUrls",
            "baseName": "nexoEventUrls",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "notification",
            "baseName": "notification",
            "type": "Notification | null",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Nexo.attributeTypeMap;
    }

    public constructor() {
    }
}

