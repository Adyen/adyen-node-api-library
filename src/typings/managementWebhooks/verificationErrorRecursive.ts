/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { RemediatingAction } from "./remediatingAction";


export class VerificationErrorRecursive {
    /**
    * The verification error code.
    */
    "code"?: string;
    /**
    * The verification error message.
    */
    "message"?: string;
    /**
    * The type of verification error.  Possible values: **invalidInput**, **dataMissing**, and **pendingStatus**.
    */
    "type"?: VerificationErrorRecursive.TypeEnum;
    /**
    * The actions that you can take to resolve the verification error.
    */
    "remediatingActions"?: Array<RemediatingAction>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "VerificationErrorRecursive.TypeEnum",
            "format": ""
        },
        {
            "name": "remediatingActions",
            "baseName": "remediatingActions",
            "type": "Array<RemediatingAction>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VerificationErrorRecursive.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace VerificationErrorRecursive {
    export enum TypeEnum {
        DataMissing = 'dataMissing',
        InvalidInput = 'invalidInput',
        PendingStatus = 'pendingStatus'
    }
}
