/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class DetailsRequestAuthenticationData {
    /**
    * If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation. Default: *false**.
    */
    "authenticationOnly"?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "authenticationOnly",
            "baseName": "authenticationOnly",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DetailsRequestAuthenticationData.attributeTypeMap;
    }

    public constructor() {
    }
}

