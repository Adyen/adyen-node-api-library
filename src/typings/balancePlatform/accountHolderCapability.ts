/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AccountSupportingEntityCapability } from "./accountSupportingEntityCapability";
import { CapabilityProblem } from "./capabilityProblem";
import { CapabilitySettings } from "./capabilitySettings";


export class AccountHolderCapability {
    /**
    * Indicates whether the capability is allowed. Adyen sets this to **true** if the verification is successful and the account holder is permitted to use the capability.
    */
    "allowed"?: boolean;
    /**
    * The capability level that is allowed for the account holder.  Possible values: **notApplicable**, **low**, **medium**, **high**.
    */
    "allowedLevel"?: AccountHolderCapability.AllowedLevelEnum;
    "allowedSettings"?: CapabilitySettings | null;
    /**
    * Indicates whether the capability is enabled. If **false**, the capability is temporarily disabled for the account holder.
    */
    "enabled"?: boolean;
    /**
    * Contains verification errors and the actions that you can take to resolve them.
    */
    "problems"?: Array<CapabilityProblem>;
    /**
    * Indicates whether the capability is requested. To check whether the account holder is permitted to use the capability, refer to the `allowed` field.
    */
    "requested"?: boolean;
    /**
    * The requested level of the capability. Some capabilities, such as those used in [card issuing](https://docs.adyen.com/issuing/add-capabilities#capability-levels), have different levels. Levels increase the capability, but also require additional checks and increased monitoring.  Possible values: **notApplicable**, **low**, **medium**, **high**.
    */
    "requestedLevel"?: AccountHolderCapability.RequestedLevelEnum;
    "requestedSettings"?: CapabilitySettings | null;
    /**
    * Contains the status of the transfer instruments associated with this capability. 
    */
    "transferInstruments"?: Array<AccountSupportingEntityCapability>;
    /**
    * The status of the verification checks for the capability.  Possible values:  * **pending**: Adyen is running the verification.  * **invalid**: The verification failed. Check if the `errors` array contains more information.  * **valid**: The verification has been successfully completed.  * **rejected**: Adyen has verified the information, but found reasons to not allow the capability. 
    */
    "verificationStatus"?: AccountHolderCapability.VerificationStatusEnum;

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
            "type": "AccountHolderCapability.AllowedLevelEnum",
            "format": ""
        },
        {
            "name": "allowedSettings",
            "baseName": "allowedSettings",
            "type": "CapabilitySettings | null",
            "format": ""
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
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
            "type": "AccountHolderCapability.RequestedLevelEnum",
            "format": ""
        },
        {
            "name": "requestedSettings",
            "baseName": "requestedSettings",
            "type": "CapabilitySettings | null",
            "format": ""
        },
        {
            "name": "transferInstruments",
            "baseName": "transferInstruments",
            "type": "Array<AccountSupportingEntityCapability>",
            "format": ""
        },
        {
            "name": "verificationStatus",
            "baseName": "verificationStatus",
            "type": "AccountHolderCapability.VerificationStatusEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AccountHolderCapability.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace AccountHolderCapability {
    export enum AllowedLevelEnum {
        High = 'high',
        Low = 'low',
        Medium = 'medium',
        NotApplicable = 'notApplicable'
    }
    export enum RequestedLevelEnum {
        High = 'high',
        Low = 'low',
        Medium = 'medium',
        NotApplicable = 'notApplicable'
    }
    export enum VerificationStatusEnum {
        Invalid = 'invalid',
        Pending = 'pending',
        Rejected = 'rejected',
        Valid = 'valid'
    }
}
