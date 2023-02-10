/*
 * The version of the OpenAPI document: v70
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class AccountInfo {
    /**
    * Indicator for the length of time since this shopper account was created in the merchant\'s environment. Allowed values: * notApplicable * thisTransaction * lessThan30Days * from30To60Days * moreThan60Days
    */
    'accountAgeIndicator'?: AccountInfo.AccountAgeIndicatorEnum;
    /**
    * Date when the shopper\'s account was last changed.
    */
    'accountChangeDate'?: Date;
    /**
    * Indicator for the length of time since the shopper\'s account was last updated. Allowed values: * thisTransaction * lessThan30Days * from30To60Days * moreThan60Days
    */
    'accountChangeIndicator'?: AccountInfo.AccountChangeIndicatorEnum;
    /**
    * Date when the shopper\'s account was created.
    */
    'accountCreationDate'?: Date;
    /**
    * Indicates the type of account. For example, for a multi-account card product. Allowed values: * notApplicable * credit * debit
    */
    'accountType'?: AccountInfo.AccountTypeEnum;
    /**
    * Number of attempts the shopper tried to add a card to their account in the last day.
    */
    'addCardAttemptsDay'?: number;
    /**
    * Date the selected delivery address was first used.
    */
    'deliveryAddressUsageDate'?: Date;
    /**
    * Indicator for the length of time since this delivery address was first used. Allowed values: * thisTransaction * lessThan30Days * from30To60Days * moreThan60Days
    */
    'deliveryAddressUsageIndicator'?: AccountInfo.DeliveryAddressUsageIndicatorEnum;
    /**
    * Shopper\'s home phone number (including the country code).
    */
    'homePhone'?: string;
    /**
    * Shopper\'s mobile phone number (including the country code).
    */
    'mobilePhone'?: string;
    /**
    * Date when the shopper last changed their password.
    */
    'passwordChangeDate'?: Date;
    /**
    * Indicator when the shopper has changed their password. Allowed values: * notApplicable * thisTransaction * lessThan30Days * from30To60Days * moreThan60Days
    */
    'passwordChangeIndicator'?: AccountInfo.PasswordChangeIndicatorEnum;
    /**
    * Number of all transactions (successful and abandoned) from this shopper in the past 24 hours.
    */
    'pastTransactionsDay'?: number;
    /**
    * Number of all transactions (successful and abandoned) from this shopper in the past year.
    */
    'pastTransactionsYear'?: number;
    /**
    * Date this payment method was added to the shopper\'s account.
    */
    'paymentAccountAge'?: Date;
    /**
    * Indicator for the length of time since this payment method was added to this shopper\'s account. Allowed values: * notApplicable * thisTransaction * lessThan30Days * from30To60Days * moreThan60Days
    */
    'paymentAccountIndicator'?: AccountInfo.PaymentAccountIndicatorEnum;
    /**
    * Number of successful purchases in the last six months.
    */
    'purchasesLast6Months'?: number;
    /**
    * Whether suspicious activity was recorded on this account.
    */
    'suspiciousActivity'?: boolean;
    /**
    * Shopper\'s work phone number (including the country code).
    */
    'workPhone'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountAgeIndicator",
            "baseName": "accountAgeIndicator",
            "type": "AccountInfo.AccountAgeIndicatorEnum"
        },
        {
            "name": "accountChangeDate",
            "baseName": "accountChangeDate",
            "type": "Date"
        },
        {
            "name": "accountChangeIndicator",
            "baseName": "accountChangeIndicator",
            "type": "AccountInfo.AccountChangeIndicatorEnum"
        },
        {
            "name": "accountCreationDate",
            "baseName": "accountCreationDate",
            "type": "Date"
        },
        {
            "name": "accountType",
            "baseName": "accountType",
            "type": "AccountInfo.AccountTypeEnum"
        },
        {
            "name": "addCardAttemptsDay",
            "baseName": "addCardAttemptsDay",
            "type": "number"
        },
        {
            "name": "deliveryAddressUsageDate",
            "baseName": "deliveryAddressUsageDate",
            "type": "Date"
        },
        {
            "name": "deliveryAddressUsageIndicator",
            "baseName": "deliveryAddressUsageIndicator",
            "type": "AccountInfo.DeliveryAddressUsageIndicatorEnum"
        },
        {
            "name": "homePhone",
            "baseName": "homePhone",
            "type": "string"
        },
        {
            "name": "mobilePhone",
            "baseName": "mobilePhone",
            "type": "string"
        },
        {
            "name": "passwordChangeDate",
            "baseName": "passwordChangeDate",
            "type": "Date"
        },
        {
            "name": "passwordChangeIndicator",
            "baseName": "passwordChangeIndicator",
            "type": "AccountInfo.PasswordChangeIndicatorEnum"
        },
        {
            "name": "pastTransactionsDay",
            "baseName": "pastTransactionsDay",
            "type": "number"
        },
        {
            "name": "pastTransactionsYear",
            "baseName": "pastTransactionsYear",
            "type": "number"
        },
        {
            "name": "paymentAccountAge",
            "baseName": "paymentAccountAge",
            "type": "Date"
        },
        {
            "name": "paymentAccountIndicator",
            "baseName": "paymentAccountIndicator",
            "type": "AccountInfo.PaymentAccountIndicatorEnum"
        },
        {
            "name": "purchasesLast6Months",
            "baseName": "purchasesLast6Months",
            "type": "number"
        },
        {
            "name": "suspiciousActivity",
            "baseName": "suspiciousActivity",
            "type": "boolean"
        },
        {
            "name": "workPhone",
            "baseName": "workPhone",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AccountInfo.attributeTypeMap;
    }
}

export namespace AccountInfo {
    export enum AccountAgeIndicatorEnum {
        NotApplicable = <any> 'notApplicable',
        ThisTransaction = <any> 'thisTransaction',
        LessThan30Days = <any> 'lessThan30Days',
        From30To60Days = <any> 'from30To60Days',
        MoreThan60Days = <any> 'moreThan60Days'
    }
    export enum AccountChangeIndicatorEnum {
        ThisTransaction = <any> 'thisTransaction',
        LessThan30Days = <any> 'lessThan30Days',
        From30To60Days = <any> 'from30To60Days',
        MoreThan60Days = <any> 'moreThan60Days'
    }
    export enum AccountTypeEnum {
        NotApplicable = <any> 'notApplicable',
        Credit = <any> 'credit',
        Debit = <any> 'debit'
    }
    export enum DeliveryAddressUsageIndicatorEnum {
        ThisTransaction = <any> 'thisTransaction',
        LessThan30Days = <any> 'lessThan30Days',
        From30To60Days = <any> 'from30To60Days',
        MoreThan60Days = <any> 'moreThan60Days'
    }
    export enum PasswordChangeIndicatorEnum {
        NotApplicable = <any> 'notApplicable',
        ThisTransaction = <any> 'thisTransaction',
        LessThan30Days = <any> 'lessThan30Days',
        From30To60Days = <any> 'from30To60Days',
        MoreThan60Days = <any> 'moreThan60Days'
    }
    export enum PaymentAccountIndicatorEnum {
        NotApplicable = <any> 'notApplicable',
        ThisTransaction = <any> 'thisTransaction',
        LessThan30Days = <any> 'lessThan30Days',
        From30To60Days = <any> 'from30To60Days',
        MoreThan60Days = <any> 'moreThan60Days'
    }
}
