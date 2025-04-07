/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';

export class CapabilitySettings {
    /**
    * The maximum amount a card holder can spend per industry.
    */
    'amountPerIndustry'?: { [key: string]: Amount; };
    /**
    * The number of card holders who can use the card.
    */
    'authorizedCardUsers'?: boolean;
    /**
    * The funding source of the card, for example **debit**.
    */
    'fundingSource'?: Array<CapabilitySettings.FundingSourceEnum>;
    /**
    * The period when the rule conditions apply.
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
        Credit = <any> 'credit',
        Debit = <any> 'debit',
        Prepaid = <any> 'prepaid'
    }
    export enum IntervalEnum {
        Daily = <any> 'daily',
        Monthly = <any> 'monthly',
        Weekly = <any> 'weekly'
    }
}
