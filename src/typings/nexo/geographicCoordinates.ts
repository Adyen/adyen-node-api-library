/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class GeographicCoordinates {
    'Latitude': string;
    'Longitude': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "Latitude",
            "baseName": "Latitude",
            "type": "string"
        },
        {
            "name": "Longitude",
            "baseName": "Longitude",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GeographicCoordinates.attributeTypeMap;
    }
}
