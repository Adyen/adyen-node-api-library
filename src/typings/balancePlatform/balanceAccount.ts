/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Balance } from './balance';
import { PlatformPaymentConfiguration } from './platformPaymentConfiguration';

export class BalanceAccount {
    /**
    * The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/accountHolders__resParam_id) associated with the balance account.
    */
    'accountHolderId': string;
    /**
    * List of balances with the amount and currency.
    */
    'balances'?: Array<Balance>;
    /**
    * The default three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance account. The default value is **EUR**. > After a balance account is created, you cannot change its default currency.
    */
    'defaultCurrencyCode'?: string;
    /**
    * A human-readable description of the balance account, maximum 300 characters. You can use this parameter to distinguish between multiple balance accounts under an account holder.
    */
    'description'?: string;
    /**
    * The unique identifier of the balance account.
    */
    'id': string;
    /**
    * A set of key and value pairs for general use. The keys do not have specific names and may be used for storing miscellaneous data as desired. > Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.
    */
    'metadata'?: { [key: string]: string; };
    /**
    * The unique identifier of the account of the migrated account holder in the classic integration.
    */
    'migratedAccountCode'?: string;
    'platformPaymentConfiguration'?: PlatformPaymentConfiguration;
    /**
    * Your reference for the balance account, maximum 150 characters.
    */
    'reference'?: string;
    /**
    * The status of the balance account, set to **active** by default.  
    */
    'status'?: BalanceAccount.StatusEnum;
    /**
    * The time zone of the balance account. For example, **Europe/Amsterdam**. Defaults to the time zone of the account holder if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
    */
    'timeZone'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolderId",
            "baseName": "accountHolderId",
            "type": "string"
        },
        {
            "name": "balances",
            "baseName": "balances",
            "type": "Array<Balance>"
        },
        {
            "name": "defaultCurrencyCode",
            "baseName": "defaultCurrencyCode",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "migratedAccountCode",
            "baseName": "migratedAccountCode",
            "type": "string"
        },
        {
            "name": "platformPaymentConfiguration",
            "baseName": "platformPaymentConfiguration",
            "type": "PlatformPaymentConfiguration"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "BalanceAccount.StatusEnum"
        },
        {
            "name": "timeZone",
            "baseName": "timeZone",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BalanceAccount.attributeTypeMap;
    }
}

export namespace BalanceAccount {
    export enum StatusEnum {
        Active = 'active',
        Closed = 'closed',
        Inactive = 'inactive',
        Suspended = 'suspended'
    }
}
