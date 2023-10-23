/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class Timeouts {
    /**
    * Indicates the number of seconds of inactivity after which the terminal display goes into sleep mode.
    */
    'fromActiveToSleep'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fromActiveToSleep",
            "baseName": "fromActiveToSleep",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Timeouts.attributeTypeMap;
    }
}

