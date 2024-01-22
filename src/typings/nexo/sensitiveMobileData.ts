/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class SensitiveMobileData {
    'MSISDN': number;
    'ISMI'?: number;
    'IMEI'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "MSISDN",
            "baseName": "MSISDN",
            "type": "number"
        },
        {
            "name": "ISMI",
            "baseName": "ISMI",
            "type": "number"
        },
        {
            "name": "IMEI",
            "baseName": "IMEI",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SensitiveMobileData.attributeTypeMap;
    }
}
