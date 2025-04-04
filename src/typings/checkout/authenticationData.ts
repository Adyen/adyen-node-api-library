/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { ThreeDSRequestData } from './threeDSRequestData';

export class AuthenticationData {
    /**
    * Indicates when 3D Secure authentication should be attempted. This overrides all other rules, including [Dynamic 3D Secure settings](https://docs.adyen.com/risk-management/dynamic-3d-secure).  Possible values:  * **always**: Perform 3D Secure authentication. * **never**: Don\'t perform 3D Secure authentication. If PSD2 SCA or other national regulations require authentication, the transaction gets declined.
    */
    'attemptAuthentication'?: AuthenticationData.AttemptAuthenticationEnum;
    /**
    * If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation. Default: **false**.
    */
    'authenticationOnly'?: boolean;
    'threeDSRequestData'?: ThreeDSRequestData | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attemptAuthentication",
            "baseName": "attemptAuthentication",
            "type": "AuthenticationData.AttemptAuthenticationEnum"
        },
        {
            "name": "authenticationOnly",
            "baseName": "authenticationOnly",
            "type": "boolean"
        },
        {
            "name": "threeDSRequestData",
            "baseName": "threeDSRequestData",
            "type": "ThreeDSRequestData | null"
        }    ];

    static getAttributeTypeMap() {
        return AuthenticationData.attributeTypeMap;
    }
}

export namespace AuthenticationData {
    export enum AttemptAuthenticationEnum {
        Always = 'always',
        Never = 'never'
    }
}
