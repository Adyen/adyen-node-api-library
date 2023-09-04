/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class AccountNotificationResponse {
    /**
    * Respond with **HTTP 200 OK** and `[accepted]` in the response body to [accept the webhook](https://docs.adyen.com/development-resources/webhooks#accept-notifications).
    */
    'notificationResponse'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "notificationResponse",
            "baseName": "notificationResponse",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AccountNotificationResponse.attributeTypeMap;
    }
}

