/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';

export class CapabilitySettings {
    /**
    * 
    */
    'amountPerIndustry'?: { [key: string]: Amount; };
    /**
    * 
    */
    'authorizedCardUsers'?: boolean;
    /**
    * 
    */
    'fundingSource'?: Array<CapabilitySettings.FundingSourceEnum>;
    /**
    * 
    */
    'interval'?: CapabilitySettings.IntervalEnum;
    'maxAmount'?: Amount;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amountPerIndustry",
            "baseName": "amountPerIndustry",
            "type": "{ [key: string]: Amount; }"
        },
        {
            "name": "authorizedCardUsers",
            "baseName": "authorizedCardUsers",
            "type": "boolean"
        },
        {
            "name": "fundingSource",
            "baseName": "fundingSource",
            "type": "Array<CapabilitySettings.FundingSourceEnum>"
        },
        {
            "name": "interval",
            "baseName": "interval",
            "type": "CapabilitySettings.IntervalEnum"
        },
        {
            "name": "maxAmount",
            "baseName": "maxAmount",
            "type": "Amount"
        }    ];

    static getAttributeTypeMap() {
        return CapabilitySettings.attributeTypeMap;
    }
}

export namespace CapabilitySettings {
    export enum FundingSourceEnum {
        Credit = 'credit',
        Debit = 'debit',
        Prepaid = 'prepaid'
    }
    export enum IntervalEnum {
        Daily = 'daily',
        Monthly = 'monthly',
        Weekly = 'weekly'
    }
}
