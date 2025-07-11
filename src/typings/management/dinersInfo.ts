/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { TransactionDescriptionInfo } from "./transactionDescriptionInfo";


export class DinersInfo {
    /**
    * MID (Merchant ID) number. Required for merchants operating in Japan. Format: 14 numeric characters.
    */
    "midNumber"?: string;
    /**
    * Indicates whether the JCB Merchant ID is reused from a previously configured JCB payment method. The default value is **false**. For merchants operating in Japan, this field is required and must be set to **true**.
    */
    "reuseMidNumber": boolean;
    /**
    * Specifies the service level (settlement type) of this payment method. Required for merchants operating in Japan. Possible values:  * **noContract**: Adyen holds the contract with JCB.  * **gatewayContract**: JCB receives the settlement and handles disputes, then pays out to you or your sub-merchant directly.
    */
    "serviceLevel"?: DinersInfo.ServiceLevelEnum;
    "transactionDescription"?: TransactionDescriptionInfo | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "midNumber",
            "baseName": "midNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "reuseMidNumber",
            "baseName": "reuseMidNumber",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "serviceLevel",
            "baseName": "serviceLevel",
            "type": "DinersInfo.ServiceLevelEnum",
            "format": ""
        },
        {
            "name": "transactionDescription",
            "baseName": "transactionDescription",
            "type": "TransactionDescriptionInfo | null",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DinersInfo.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace DinersInfo {
    export enum ServiceLevelEnum {
        NoContract = 'noContract',
        GatewayContract = 'gatewayContract'
    }
}
