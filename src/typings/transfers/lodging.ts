/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class Lodging {
    /**
    * The check-in date.
    */
    "checkInDate"?: string;
    /**
    * The total number of nights the room is booked for.
    */
    "numberOfNights"?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "checkInDate",
            "baseName": "checkInDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "numberOfNights",
            "baseName": "numberOfNights",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return Lodging.attributeTypeMap;
    }

    public constructor() {
    }
}

