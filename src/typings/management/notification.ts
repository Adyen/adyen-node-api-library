/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class Notification {
    /**
    * Shows or hides the event notification button on the terminal screen.
    */
    'showButton'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "showButton",
            "baseName": "showButton",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Notification.attributeTypeMap;
    }
}

