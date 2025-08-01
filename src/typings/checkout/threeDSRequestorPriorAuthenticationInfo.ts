/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class ThreeDSRequestorPriorAuthenticationInfo {
    /**
    * Data that documents and supports a specific authentication process. Maximum length: 2048 bytes.
    */
    "threeDSReqPriorAuthData"?: string;
    /**
    * Mechanism used by the Cardholder to previously authenticate to the 3DS Requestor. Allowed values: * **01** — Frictionless authentication occurred by ACS. * **02** — Cardholder challenge occurred by ACS. * **03** — AVS verified. * **04** — Other issuer methods.
    */
    "threeDSReqPriorAuthMethod"?: ThreeDSRequestorPriorAuthenticationInfo.ThreeDSReqPriorAuthMethodEnum;
    /**
    * Date and time in UTC of the prior cardholder authentication. Format: YYYYMMDDHHMM
    */
    "threeDSReqPriorAuthTimestamp"?: string;
    /**
    * This data element provides additional information to the ACS to determine the best approach for handing a request. This data element contains an ACS Transaction ID for a prior authenticated transaction. For example, the first recurring transaction that was authenticated with the cardholder. Length: 30 characters.
    */
    "threeDSReqPriorRef"?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "threeDSReqPriorAuthData",
            "baseName": "threeDSReqPriorAuthData",
            "type": "string",
            "format": ""
        },
        {
            "name": "threeDSReqPriorAuthMethod",
            "baseName": "threeDSReqPriorAuthMethod",
            "type": "ThreeDSRequestorPriorAuthenticationInfo.ThreeDSReqPriorAuthMethodEnum",
            "format": ""
        },
        {
            "name": "threeDSReqPriorAuthTimestamp",
            "baseName": "threeDSReqPriorAuthTimestamp",
            "type": "string",
            "format": ""
        },
        {
            "name": "threeDSReqPriorRef",
            "baseName": "threeDSReqPriorRef",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ThreeDSRequestorPriorAuthenticationInfo.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace ThreeDSRequestorPriorAuthenticationInfo {
    export enum ThreeDSReqPriorAuthMethodEnum {
        _01 = '01',
        _02 = '02',
        _03 = '03',
        _04 = '04'
    }
}
