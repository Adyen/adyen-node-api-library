/*
 * The version of the OpenAPI document: v54
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class ThreeDS2CardRangeDetail {
    /**
    * Provides additional information to the 3DS Server. Possible values: - 01 (Authentication is available at ACS) - 02 (Attempts supported by ACS or DS) - 03 (Decoupled authentication supported) - 04 (Whitelisting supported)
    */
    'acsInfoInd'?: Array<string>;
    /**
    * Card brand.
    */
    'brandCode'?: string;
    /**
    * BIN end range.
    */
    'endRange'?: string;
    /**
    * BIN start range.
    */
    'startRange'?: string;
    /**
    * Supported 3D Secure protocol versions
    */
    'threeDS2Versions'?: Array<string>;
    /**
    * In a 3D Secure 2 browser-based flow, this is the URL where you should send the device fingerprint to.
    */
    'threeDSMethodURL'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acsInfoInd",
            "baseName": "acsInfoInd",
            "type": "Array<string>"
        },
        {
            "name": "brandCode",
            "baseName": "brandCode",
            "type": "string"
        },
        {
            "name": "endRange",
            "baseName": "endRange",
            "type": "string"
        },
        {
            "name": "startRange",
            "baseName": "startRange",
            "type": "string"
        },
        {
            "name": "threeDS2Versions",
            "baseName": "threeDS2Versions",
            "type": "Array<string>"
        },
        {
            "name": "threeDSMethodURL",
            "baseName": "threeDSMethodURL",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ThreeDS2CardRangeDetail.attributeTypeMap;
    }
}

