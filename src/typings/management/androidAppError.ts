/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class AndroidAppError {
    /**
    * The error code of the Android app with the `status` of either **error** or **invalid**.
    */
    'errorCode'?: string;
    /**
    * The list of payment terminal models to which the returned `errorCode` applies.
    */
    'terminalModels'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "errorCode",
            "baseName": "errorCode",
            "type": "string"
        },
        {
            "name": "terminalModels",
            "baseName": "terminalModels",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return AndroidAppError.attributeTypeMap;
    }
}

