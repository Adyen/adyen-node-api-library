/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';

export class PixRecurring {
    /**
    * The date on which the shopper\'s payment method will be charged, in YYYY-MM-DD format.
    */
    'billingDate'?: string;
    /**
    * End date of the billing plan, in YYYY-MM-DD format. The end date must align with the frequency and the start date of the billing plan. If left blank, the subscription will continue indefinitely unless it is cancelled by the shopper.
    */
    'endsAt'?: string;
    /**
    * The frequency at which the shopper will be charged.
    */
    'frequency'?: string;
    'minAmount'?: Amount;
    /**
    * The pspReference for the failed recurring payment. Find this in AUTHORISATION webhook you received after the billing date.
    */
    'originalPspReference'?: string;
    'recurringAmount'?: Amount;
    /**
    * The text that that will be shown on the shopper\'s bank statement for the recurring payments. We recommend to add a descriptive text about the subscription to let your shoppers recognize your recurring payments. Maximum length: 35 characters.
    */
    'recurringStatement'?: string;
    /**
    * When set to true, you can retry for failed recurring payments. The default value is true.
    */
    'retryPolicy'?: boolean;
    /**
    * Start date of the billing plan, in YYYY-MM-DD format. The default value is the transaction date.
    */
    'startsAt'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "billingDate",
            "baseName": "billingDate",
            "type": "string"
        },
        {
            "name": "endsAt",
            "baseName": "endsAt",
            "type": "string"
        },
        {
            "name": "frequency",
            "baseName": "frequency",
            "type": "PixRecurring.FrequencyEnum"
        },
        {
            "name": "minAmount",
            "baseName": "minAmount",
            "type": "Amount"
        },
        {
            "name": "originalPspReference",
            "baseName": "originalPspReference",
            "type": "string"
        },
        {
            "name": "recurringAmount",
            "baseName": "recurringAmount",
            "type": "Amount"
        },
        {
            "name": "recurringStatement",
            "baseName": "recurringStatement",
            "type": "string"
        },
        {
            "name": "retryPolicy",
            "baseName": "retryPolicy",
            "type": "boolean"
        },
        {
            "name": "startsAt",
            "baseName": "startsAt",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PixRecurring.attributeTypeMap;
    }
}

