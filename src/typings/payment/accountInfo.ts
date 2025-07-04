/*
 * The version of the OpenAPI document: v68
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class AccountInfo {
    /**
    * Indicator for the length of time since this shopper account was created in the merchant\'s environment. Allowed values: * notApplicable * thisTransaction * lessThan30Days * from30To60Days * moreThan60Days
    */
    "accountAgeIndicator"?: AccountInfo.AccountAgeIndicatorEnum;
    /**
    * Date when the shopper\'s account was last changed.
    */
    "accountChangeDate"?: Date;
    /**
    * Indicator for the length of time since the shopper\'s account was last updated. Allowed values: * thisTransaction * lessThan30Days * from30To60Days * moreThan60Days
    */
    "accountChangeIndicator"?: AccountInfo.AccountChangeIndicatorEnum;
    /**
    * Date when the shopper\'s account was created.
    */
    "accountCreationDate"?: Date;
    /**
    * Indicates the type of account. For example, for a multi-account card product. Allowed values: * notApplicable * credit * debit
    */
    "accountType"?: AccountInfo.AccountTypeEnum;
    /**
    * Number of attempts the shopper tried to add a card to their account in the last day.
    */
    "addCardAttemptsDay"?: number;
    /**
    * Date the selected delivery address was first used.
    */
    "deliveryAddressUsageDate"?: Date;
    /**
    * Indicator for the length of time since this delivery address was first used. Allowed values: * thisTransaction * lessThan30Days * from30To60Days * moreThan60Days
    */
    "deliveryAddressUsageIndicator"?: AccountInfo.DeliveryAddressUsageIndicatorEnum;
    /**
    * Shopper\'s home phone number (including the country code).
    *
	* @deprecated since Adyen Payment API v68
	* Use `ThreeDS2RequestData.homePhone` instead.
    */
    "homePhone"?: string;
    /**
    * Shopper\'s mobile phone number (including the country code).
    *
	* @deprecated since Adyen Payment API v68
	* Use `ThreeDS2RequestData.mobilePhone` instead.
    */
    "mobilePhone"?: string;
    /**
    * Date when the shopper last changed their password.
    */
    "passwordChangeDate"?: Date;
    /**
    * Indicator when the shopper has changed their password. Allowed values: * notApplicable * thisTransaction * lessThan30Days * from30To60Days * moreThan60Days
    */
    "passwordChangeIndicator"?: AccountInfo.PasswordChangeIndicatorEnum;
    /**
    * Number of all transactions (successful and abandoned) from this shopper in the past 24 hours.
    */
    "pastTransactionsDay"?: number;
    /**
    * Number of all transactions (successful and abandoned) from this shopper in the past year.
    */
    "pastTransactionsYear"?: number;
    /**
    * Date this payment method was added to the shopper\'s account.
    */
    "paymentAccountAge"?: Date;
    /**
    * Indicator for the length of time since this payment method was added to this shopper\'s account. Allowed values: * notApplicable * thisTransaction * lessThan30Days * from30To60Days * moreThan60Days
    */
    "paymentAccountIndicator"?: AccountInfo.PaymentAccountIndicatorEnum;
    /**
    * Number of successful purchases in the last six months.
    */
    "purchasesLast6Months"?: number;
    /**
    * Whether suspicious activity was recorded on this account.
    */
    "suspiciousActivity"?: boolean;
    /**
    * Shopper\'s work phone number (including the country code).
    *
	* @deprecated since Adyen Payment API v68
	* Use `ThreeDS2RequestData.workPhone` instead.
    */
    "workPhone"?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accountAgeIndicator",
            "baseName": "accountAgeIndicator",
            "type": "AccountInfo.AccountAgeIndicatorEnum",
            "format": ""
        },
        {
            "name": "accountChangeDate",
            "baseName": "accountChangeDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "accountChangeIndicator",
            "baseName": "accountChangeIndicator",
            "type": "AccountInfo.AccountChangeIndicatorEnum",
            "format": ""
        },
        {
            "name": "accountCreationDate",
            "baseName": "accountCreationDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "accountType",
            "baseName": "accountType",
            "type": "AccountInfo.AccountTypeEnum",
            "format": ""
        },
        {
            "name": "addCardAttemptsDay",
            "baseName": "addCardAttemptsDay",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "deliveryAddressUsageDate",
            "baseName": "deliveryAddressUsageDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "deliveryAddressUsageIndicator",
            "baseName": "deliveryAddressUsageIndicator",
            "type": "AccountInfo.DeliveryAddressUsageIndicatorEnum",
            "format": ""
        },
        {
            "name": "homePhone",
            "baseName": "homePhone",
            "type": "string",
            "format": ""
        },
        {
            "name": "mobilePhone",
            "baseName": "mobilePhone",
            "type": "string",
            "format": ""
        },
        {
            "name": "passwordChangeDate",
            "baseName": "passwordChangeDate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "passwordChangeIndicator",
            "baseName": "passwordChangeIndicator",
            "type": "AccountInfo.PasswordChangeIndicatorEnum",
            "format": ""
        },
        {
            "name": "pastTransactionsDay",
            "baseName": "pastTransactionsDay",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "pastTransactionsYear",
            "baseName": "pastTransactionsYear",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "paymentAccountAge",
            "baseName": "paymentAccountAge",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "paymentAccountIndicator",
            "baseName": "paymentAccountIndicator",
            "type": "AccountInfo.PaymentAccountIndicatorEnum",
            "format": ""
        },
        {
            "name": "purchasesLast6Months",
            "baseName": "purchasesLast6Months",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "suspiciousActivity",
            "baseName": "suspiciousActivity",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "workPhone",
            "baseName": "workPhone",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AccountInfo.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace AccountInfo {
    export enum AccountAgeIndicatorEnum {
        NotApplicable = 'notApplicable',
        ThisTransaction = 'thisTransaction',
        LessThan30Days = 'lessThan30Days',
        From30To60Days = 'from30To60Days',
        MoreThan60Days = 'moreThan60Days'
    }
    export enum AccountChangeIndicatorEnum {
        ThisTransaction = 'thisTransaction',
        LessThan30Days = 'lessThan30Days',
        From30To60Days = 'from30To60Days',
        MoreThan60Days = 'moreThan60Days'
    }
    export enum AccountTypeEnum {
        NotApplicable = 'notApplicable',
        Credit = 'credit',
        Debit = 'debit'
    }
    export enum DeliveryAddressUsageIndicatorEnum {
        ThisTransaction = 'thisTransaction',
        LessThan30Days = 'lessThan30Days',
        From30To60Days = 'from30To60Days',
        MoreThan60Days = 'moreThan60Days'
    }
    export enum PasswordChangeIndicatorEnum {
        NotApplicable = 'notApplicable',
        ThisTransaction = 'thisTransaction',
        LessThan30Days = 'lessThan30Days',
        From30To60Days = 'from30To60Days',
        MoreThan60Days = 'moreThan60Days'
    }
    export enum PaymentAccountIndicatorEnum {
        NotApplicable = 'notApplicable',
        ThisTransaction = 'thisTransaction',
        LessThan30Days = 'lessThan30Days',
        From30To60Days = 'from30To60Days',
        MoreThan60Days = 'moreThan60Days'
    }
}
