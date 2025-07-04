/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class Mandate {
    /**
    * The billing amount (in minor units) of the recurring transactions.
    */
    "amount": string;
    /**
    * The limitation rule of the billing amount.  Possible values:  * **max**: The transaction amount can not exceed the `amount`.   * **exact**: The transaction amount should be the same as the `amount`.  
    */
    "amountRule"?: Mandate.AmountRuleEnum;
    /**
    * The rule to specify the period, within which the recurring debit can happen, relative to the mandate recurring date.  Possible values:   * **on**: On a specific date.   * **before**:  Before and on a specific date.   * **after**: On and after a specific date.  
    */
    "billingAttemptsRule"?: Mandate.BillingAttemptsRuleEnum;
    /**
    * The number of the day, on which the recurring debit can happen. Should be within the same calendar month as the mandate recurring date.  Possible values: 1-31 based on the `frequency`.
    */
    "billingDay"?: string;
    /**
    * The number of transactions that can be performed within the given frequency.
    */
    "count"?: string;
    /**
    * End date of the billing plan, in YYYY-MM-DD format.
    */
    "endsAt": string;
    /**
    * The frequency with which a shopper should be charged.  Possible values: **adhoc**, **daily**, **weekly**, **biWeekly**, **monthly**, **quarterly**, **halfYearly**, **yearly**.
    */
    "frequency": Mandate.FrequencyEnum;
    /**
    * The message shown by UPI to the shopper on the approval screen.
    */
    "remarks"?: string;
    /**
    * Start date of the billing plan, in YYYY-MM-DD format. By default, the transaction date.
    */
    "startsAt"?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "amountRule",
            "baseName": "amountRule",
            "type": "Mandate.AmountRuleEnum",
            "format": ""
        },
        {
            "name": "billingAttemptsRule",
            "baseName": "billingAttemptsRule",
            "type": "Mandate.BillingAttemptsRuleEnum",
            "format": ""
        },
        {
            "name": "billingDay",
            "baseName": "billingDay",
            "type": "string",
            "format": ""
        },
        {
            "name": "count",
            "baseName": "count",
            "type": "string",
            "format": ""
        },
        {
            "name": "endsAt",
            "baseName": "endsAt",
            "type": "string",
            "format": ""
        },
        {
            "name": "frequency",
            "baseName": "frequency",
            "type": "Mandate.FrequencyEnum",
            "format": ""
        },
        {
            "name": "remarks",
            "baseName": "remarks",
            "type": "string",
            "format": ""
        },
        {
            "name": "startsAt",
            "baseName": "startsAt",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Mandate.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace Mandate {
    export enum AmountRuleEnum {
        Max = 'max',
        Exact = 'exact'
    }
    export enum BillingAttemptsRuleEnum {
        On = 'on',
        Before = 'before',
        After = 'after'
    }
    export enum FrequencyEnum {
        Adhoc = 'adhoc',
        Daily = 'daily',
        Weekly = 'weekly',
        BiWeekly = 'biWeekly',
        Monthly = 'monthly',
        Quarterly = 'quarterly',
        HalfYearly = 'halfYearly',
        Yearly = 'yearly'
    }
}
