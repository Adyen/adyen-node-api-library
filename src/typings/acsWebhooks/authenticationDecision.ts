/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class AuthenticationDecision {
    /**
    * The status of the authentication.   Possible values:   * **refused**   * **proceed**   For more information, refer to [Authenticate cardholders using the Authentication SDK](https://docs.adyen.com/issuing/3d-secure/oob-auth-sdk/authenticate-cardholders/).
    */
    "status": AuthenticationDecision.StatusEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "AuthenticationDecision.StatusEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AuthenticationDecision.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace AuthenticationDecision {
    export enum StatusEnum {
        Proceed = 'proceed',
        Refused = 'refused'
    }
}
