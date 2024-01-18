/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


/**
* Information related to the software of the Sale System which manages the NEXO Sale to POI protocol.
*/
export class SaleSoftware {
    'ManufacturerID': string;
    'ApplicationName': string;
    'SoftwareVersion': string;
    'CertificationCode': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ManufacturerID",
            "baseName": "ManufacturerID",
            "type": "string"
        },
        {
            "name": "ApplicationName",
            "baseName": "ApplicationName",
            "type": "string"
        },
        {
            "name": "SoftwareVersion",
            "baseName": "SoftwareVersion",
            "type": "string"
        },
        {
            "name": "CertificationCode",
            "baseName": "CertificationCode",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SaleSoftware.attributeTypeMap;
    }
}

