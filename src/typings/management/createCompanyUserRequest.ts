/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Name } from './name';

export class CreateCompanyUserRequest {
    /**
    * The list of [account groups](https://docs.adyen.com/account/account-structure#account-groups) associated with this user.
    */
    'accountGroups'?: Array<string>;
    /**
    * The list of [merchant accounts](https://docs.adyen.com/account/account-structure#merchant-accounts) associated with this user.
    */
    'associatedMerchantAccounts'?: Array<string>;
    /**
    * The email address of the user.
    */
    'email': string;
    'name': Name;
    /**
    * The list of [roles](https://docs.adyen.com/account/user-roles) for this user.
    */
    'roles'?: Array<string>;
    /**
    * The [tz database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) of the time zone of the user. For example, **Europe/Amsterdam**.
    */
    'timeZoneCode'?: string;
    /**
    * The username for this user. Allowed length: 255 alphanumeric characters.
    */
    'username': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountGroups",
            "baseName": "accountGroups",
            "type": "Array<string>"
        },
        {
            "name": "associatedMerchantAccounts",
            "baseName": "associatedMerchantAccounts",
            "type": "Array<string>"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "Name"
        },
        {
            "name": "roles",
            "baseName": "roles",
            "type": "Array<string>"
        },
        {
            "name": "timeZoneCode",
            "baseName": "timeZoneCode",
            "type": "string"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateCompanyUserRequest.attributeTypeMap;
    }
}

