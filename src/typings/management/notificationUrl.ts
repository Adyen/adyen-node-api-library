/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Url } from './url';

export class NotificationUrl {
    /**
    * One or more local URLs to send notifications to when using Terminal API.
    */
    'localUrls'?: Array<Url>;
    /**
    * One or more public URLs to send notifications to when using Terminal API.
    */
    'publicUrls'?: Array<Url>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "localUrls",
            "baseName": "localUrls",
            "type": "Array<Url>"
        },
        {
            "name": "publicUrls",
            "baseName": "publicUrls",
            "type": "Array<Url>"
        }    ];

    static getAttributeTypeMap() {
        return NotificationUrl.attributeTypeMap;
    }
}

