/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class Hardware {
    /**
    * The brightness of the display when the terminal is being used, expressed as a percentage.
    */
    'displayMaximumBackLight'?: number;
    /**
    * The hour of the day when the terminal is set to reset the Totals report. By default, the reset hour is at 6:00 AM in the timezone of the terminal. Minimum value: 0, maximum value: 23.
    */
    'resetTotalsHour'?: number;
    /**
    * The hour of the day when the terminal is set to reboot to apply the configuration and software updates. By default, the restart hour is at 6:00 AM in the timezone of the terminal. Minimum value: 0, maximum value: 23.
    */
    'restartHour'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "displayMaximumBackLight",
            "baseName": "displayMaximumBackLight",
            "type": "number"
        },
        {
            "name": "resetTotalsHour",
            "baseName": "resetTotalsHour",
            "type": "number"
        },
        {
            "name": "restartHour",
            "baseName": "restartHour",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Hardware.attributeTypeMap;
    }
}

