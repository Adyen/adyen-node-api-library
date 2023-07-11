/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class Standalone {
    /**
    * The default currency of the standalone payment terminal as an [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code.
    */
    'currencyCode'?: string;
    /**
    * Enable standalone mode.
    */
    'enableStandalone'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currencyCode",
            "baseName": "currencyCode",
            "type": "string"
        },
        {
            "name": "enableStandalone",
            "baseName": "enableStandalone",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Standalone.attributeTypeMap;
    }
}

