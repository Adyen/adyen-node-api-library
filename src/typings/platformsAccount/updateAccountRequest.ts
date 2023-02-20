/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { UpdatePayoutScheduleRequest } from './updatePayoutScheduleRequest';

export class UpdateAccountRequest {
    /**
    * The code of the account to update.
    */
    'accountCode': string;
    /**
    * The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder.
    */
    'bankAccountUUID'?: string;
    /**
    * A description of the account, maximum 256 characters.You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores `_`.
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
    'payoutSchedule'?: UpdatePayoutScheduleRequest;
    /**
    * Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.
    */
    'payoutSpeed'?: UpdateAccountRequest.PayoutSpeedEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountCode",
            "baseName": "accountCode",
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
            "type": "UpdatePayoutScheduleRequest"
        },
        {
            "name": "payoutSpeed",
            "baseName": "payoutSpeed",
            "type": "UpdateAccountRequest.PayoutSpeedEnum"
        }    ];

    static getAttributeTypeMap() {
        return UpdateAccountRequest.attributeTypeMap;
    }
}

export namespace UpdateAccountRequest {
    export enum PayoutSpeedEnum {
        Instant = 'INSTANT',
        SameDay = 'SAME_DAY',
        Standard = 'STANDARD'
    }
}
