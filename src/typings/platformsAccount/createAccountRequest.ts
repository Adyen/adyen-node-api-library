/*
 * The version of the OpenAPI document: v6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class CreateAccountRequest {
    /**
    * The code of Account Holder under which to create the account.
    */
    'accountHolderCode': string;
    /**
    * The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder.
    */
    'bankAccountUUID'?: string;
    /**
    * A description of the account, maximum 256 characters. You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores `_`.
    */
    'description'?: string;
    /**
    * A set of key and value pairs for general use by the merchant. The keys do not have specific names and may be used for storing miscellaneous data as desired. > Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.
    */
    'metadata'?: { [key: string]: string; };
    /**
    * The payout method code held by the account holder to couple the account with. Scheduled card payouts will be sent using this payout method code.
    */
    'payoutMethodCode'?: string;
    /**
    * The payout schedule of the prospective account. >Permitted values: `DEFAULT`, `HOLD`, `DAILY`, `WEEKLY`, `MONTHLY`.
    */
    'payoutSchedule'?: CreateAccountRequest.PayoutScheduleEnum;
    /**
    * The reason for the payout schedule choice. >Required if the payoutSchedule is `HOLD`.
    */
    'payoutScheduleReason'?: string;
    /**
    * Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.
    */
    'payoutSpeed'?: CreateAccountRequest.PayoutSpeedEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolderCode",
            "baseName": "accountHolderCode",
            "type": "string"
        },
        {
            "name": "bankAccountUUID",
            "baseName": "bankAccountUUID",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "payoutMethodCode",
            "baseName": "payoutMethodCode",
            "type": "string"
        },
        {
            "name": "payoutSchedule",
            "baseName": "payoutSchedule",
            "type": "CreateAccountRequest.PayoutScheduleEnum"
        },
        {
            "name": "payoutScheduleReason",
            "baseName": "payoutScheduleReason",
            "type": "string"
        },
        {
            "name": "payoutSpeed",
            "baseName": "payoutSpeed",
            "type": "CreateAccountRequest.PayoutSpeedEnum"
        }    ];

    static getAttributeTypeMap() {
        return CreateAccountRequest.attributeTypeMap;
    }
}

export namespace CreateAccountRequest {
    export enum PayoutScheduleEnum {
        BiweeklyOn1StAnd15ThAtMidnight = 'BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT',
        Daily = 'DAILY',
        DailyAu = 'DAILY_AU',
        DailyEu = 'DAILY_EU',
        DailySg = 'DAILY_SG',
        DailyUs = 'DAILY_US',
        Hold = 'HOLD',
        Monthly = 'MONTHLY',
        Weekly = 'WEEKLY',
        WeeklyMonToFriAu = 'WEEKLY_MON_TO_FRI_AU',
        WeeklyMonToFriEu = 'WEEKLY_MON_TO_FRI_EU',
        WeeklyMonToFriUs = 'WEEKLY_MON_TO_FRI_US',
        WeeklyOnTueFriMidnight = 'WEEKLY_ON_TUE_FRI_MIDNIGHT',
        WeeklySunToThuAu = 'WEEKLY_SUN_TO_THU_AU',
        WeeklySunToThuUs = 'WEEKLY_SUN_TO_THU_US'
    }
    export enum PayoutSpeedEnum {
        Instant = 'INSTANT',
        SameDay = 'SAME_DAY',
        Standard = 'STANDARD'
    }
}
