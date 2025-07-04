/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class AdditionalSettingsResponse {
    /**
    * Object containing list of event codes for which the notification will not be sent. 
    */
    "excludeEventCodes"?: Array<string>;
    /**
    * Object containing list of event codes for which the notification will be sent. 
    */
    "includeEventCodes"?: Array<string>;
    /**
    * Object containing boolean key-value pairs. The key can be any [standard webhook additional setting](https://docs.adyen.com/development-resources/webhooks/additional-settings), and the value indicates if the setting is enabled. For example, `captureDelayHours`: **true** means the standard notifications you get will contain the number of hours remaining until the payment will be captured.
    */
    "properties"?: { [key: string]: boolean; };

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "excludeEventCodes",
            "baseName": "excludeEventCodes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "includeEventCodes",
            "baseName": "includeEventCodes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: boolean; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AdditionalSettingsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

