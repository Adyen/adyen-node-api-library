/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { SweepConfigurationV2 } from "./sweepConfigurationV2";


export class SweepConfigurationNotificationData {
    /**
    * The unique identifier of the balance account for which the sweep was configured.
    */
    "accountId"?: string;
    /**
    * The unique identifier of the balance platform.
    */
    "balancePlatform"?: string;
    "sweep"?: SweepConfigurationV2 | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string",
            "format": ""
        },
        {
            "name": "balancePlatform",
            "baseName": "balancePlatform",
            "type": "string",
            "format": ""
        },
        {
            "name": "sweep",
            "baseName": "sweep",
            "type": "SweepConfigurationV2 | null",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SweepConfigurationNotificationData.attributeTypeMap;
    }

    public constructor() {
    }
}

