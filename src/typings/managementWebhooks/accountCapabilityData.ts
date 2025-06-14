/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { CapabilityProblem } from "./capabilityProblem";


export class AccountCapabilityData {
    /**
    * Indicates whether the capability is allowed. Adyen sets this to **true** if the verification is successful.
    */
    "allowed"?: boolean;
    /**
    * The allowed level of the capability. Some capabilities have different levels which correspond to thresholds. Higher levels may require additional checks and increased monitoring.Possible values: **notApplicable**, **low**, **medium**, **high**.
    */
    "allowedLevel"?: string;
    /**
    * The name of the capability. For example, **sendToTransferInstrument**.
    */
    "capability"?: string;
    /**
    * List of entities that has problems with verification. The information includes the details of the errors and the actions that you can take to resolve them.
    */
    "problems"?: Array<CapabilityProblem>;
    /**
    * Indicates whether you requested the capability.
    */
    "requested": boolean;
    /**
    * The level that you requested for the capability. Some capabilities have different levels which correspond to thresholds. Higher levels may require additional checks and increased monitoring.Possible values: **notApplicable**, **low**, **medium**, **high**.
    */
    "requestedLevel": string;
    /**
    * The verification deadline for the capability that will be disallowed if verification errors are not resolved.
    */
    "verificationDeadline"?: Date;
    /**
    * The status of the verification checks for the capability.  Possible values:  * **pending**: Adyen is running the verification.  * **invalid**: The verification failed. Check if the `errors` array contains more information.  * **valid**: The verification was successful.  * **rejected**: Adyen checked the information and found reasons to not allow the capability. 
    */
    "verificationStatus"?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "allowed",
            "baseName": "allowed",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "allowedLevel",
            "baseName": "allowedLevel",
            "type": "string",
            "format": ""
        },
        {
            "name": "capability",
            "baseName": "capability",
            "type": "string",
            "format": ""
        },
        {
            "name": "problems",
            "baseName": "problems",
            "type": "Array<CapabilityProblem>",
            "format": ""
        },
        {
            "name": "requested",
            "baseName": "requested",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "requestedLevel",
            "baseName": "requestedLevel",
            "type": "string",
            "format": ""
        },
        {
            "name": "verificationDeadline",
            "baseName": "verificationDeadline",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "verificationStatus",
            "baseName": "verificationStatus",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AccountCapabilityData.attributeTypeMap;
    }

    public constructor() {
    }
}

