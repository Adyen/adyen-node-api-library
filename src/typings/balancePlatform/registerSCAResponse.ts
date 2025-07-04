/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class RegisterSCAResponse {
    /**
    * The unique identifier of the SCA device you are registering.
    */
    "id"?: string;
    /**
    * The unique identifier of the payment instrument for which you are registering the SCA device.
    */
    "paymentInstrumentId"?: string;
    /**
    * A string that you must pass to the authentication SDK to continue with the registration process.
    */
    "sdkInput"?: string;
    /**
    * Specifies if the registration was initiated successfully.
    */
    "success"?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentInstrumentId",
            "baseName": "paymentInstrumentId",
            "type": "string",
            "format": ""
        },
        {
            "name": "sdkInput",
            "baseName": "sdkInput",
            "type": "string",
            "format": ""
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RegisterSCAResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

