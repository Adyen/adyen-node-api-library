/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class AuthenticationSessionResponse {
    /**
    * The unique identifier of the session.
    */
    "id"?: string;
    /**
    * The session token created.
    */
    "token"?: string;

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
            "name": "token",
            "baseName": "token",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AuthenticationSessionResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

