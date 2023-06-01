/*
 * The version of the OpenAPI document: v68
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class ThreeDSRequestorAuthenticationInfo {
    /**
    * Data that documents and supports a specific authentication process. Maximum length: 2048 bytes.
    */
    'threeDSReqAuthData'?: string;
    /**
    * Mechanism used by the Cardholder to authenticate to the 3DS Requestor. Allowed values: * **01** — No 3DS Requestor authentication occurred (for example, cardholder “logged in” as guest). * **02** — Login to the cardholder account at the 3DS Requestor system using 3DS Requestor’s own credentials. * **03** — Login to the cardholder account at the 3DS Requestor system using federated ID. * **04** — Login to the cardholder account at the 3DS Requestor system using issuer credentials. * **05** — Login to the cardholder account at the 3DS Requestor system using third-party authentication. * **06** — Login to the cardholder account at the 3DS Requestor system using FIDO Authenticator.
    */
    'threeDSReqAuthMethod'?: ThreeDSRequestorAuthenticationInfo.ThreeDSReqAuthMethodEnum;
    /**
    * Date and time in UTC of the cardholder authentication. Format: YYYYMMDDHHMM
    */
    'threeDSReqAuthTimestamp'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "threeDSReqAuthData",
            "baseName": "threeDSReqAuthData",
            "type": "string"
        },
        {
            "name": "threeDSReqAuthMethod",
            "baseName": "threeDSReqAuthMethod",
            "type": "ThreeDSRequestorAuthenticationInfo.ThreeDSReqAuthMethodEnum"
        },
        {
            "name": "threeDSReqAuthTimestamp",
            "baseName": "threeDSReqAuthTimestamp",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ThreeDSRequestorAuthenticationInfo.attributeTypeMap;
    }
}

export namespace ThreeDSRequestorAuthenticationInfo {
    export enum ThreeDSReqAuthMethodEnum {
        _01 = '01',
        _02 = '02',
        _03 = '03',
        _04 = '04',
        _05 = '05',
        _06 = '06'
    }
}
