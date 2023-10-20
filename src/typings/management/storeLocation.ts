/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class StoreLocation {
    /**
    * The name of the city.
    */
    'city'?: string;
    /**
    * The two-letter country code in [ISO_3166-1_alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format.
    */
    'country': string;
    /**
    * The street address.
    */
    'line1'?: string;
    /**
    * Second address line.
    */
    'line2'?: string;
    /**
    * Third address line.
    */
    'line3'?: string;
    /**
    * The postal code.
    */
    'postalCode'?: string;
    /**
    * The state or province code as defined in [ISO 3166-2](https://www.iso.org/standard/72483.html). For example, **ON** for Ontario, Canada.  Required for the following countries:  - Australia - Brazil - Canada - India - Mexico - New Zealand - United States
    */
    'stateOrProvince'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "city",
            "baseName": "city",
            "type": "string"
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "line1",
            "baseName": "line1",
            "type": "string"
        },
        {
            "name": "line2",
            "baseName": "line2",
            "type": "string"
        },
        {
            "name": "line3",
            "baseName": "line3",
            "type": "string"
        },
        {
            "name": "postalCode",
            "baseName": "postalCode",
            "type": "string"
        },
        {
            "name": "stateOrProvince",
            "baseName": "stateOrProvince",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StoreLocation.attributeTypeMap;
    }
}

