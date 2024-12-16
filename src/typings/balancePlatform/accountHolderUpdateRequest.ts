/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AccountHolderCapability } from './accountHolderCapability';
import { ContactDetails } from './contactDetails';
import { VerificationDeadline } from './verificationDeadline';

export class AccountHolderUpdateRequest {
    /**
    * The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the account holder belongs. Required in the request if your API credentials can be used for multiple balance platforms.
    */
    'balancePlatform'?: string;
    /**
    * Contains key-value pairs that specify the actions that an account holder can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability.
    */
    'capabilities'?: { [key: string]: AccountHolderCapability; };
    /**
	* @deprecated 
    */
    'contactDetails'?: ContactDetails | null;
    /**
    * Your description for the account holder.
    */
    'description'?: string;
    /**
    * A set of key and value pairs for general use. The keys do not have specific names and may be used for storing miscellaneous data as desired. > Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.
    */
    'metadata'?: { [key: string]: string; };
    /**
    * The unique identifier of the migrated account holder in the classic integration.
    */
    'migratedAccountHolderCode'?: string;
    /**
    * The ID of the account holder\'s primary balance account. By default, this is set to the first balance account that you create for the account holder. To assign a different balance account, send a PATCH request.
    */
    'primaryBalanceAccount'?: string;
    /**
    * Your reference for the account holder.
    */
    'reference'?: string;
    /**
    * The status of the account holder.  Possible values:    * **active**: The account holder is active. This is the default status when creating an account holder.    * **suspended**: The account holder is permanently deactivated by Adyen. This action cannot be undone.   * **closed**: The account holder is permanently deactivated by you. This action cannot be undone.
    */
    'status'?: AccountHolderUpdateRequest.StatusEnum;
    /**
    * The time zone of the account holder. For example, **Europe/Amsterdam**. Defaults to the time zone of the balance platform if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
    */
    'timeZone'?: string;
    /**
    * List of verification deadlines and the capabilities that will be disallowed if verification errors are not resolved.
    */
    'verificationDeadlines'?: Array<VerificationDeadline>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "balancePlatform",
            "baseName": "balancePlatform",
            "type": "string"
        },
        {
            "name": "capabilities",
            "baseName": "capabilities",
            "type": "{ [key: string]: AccountHolderCapability; }"
        },
        {
            "name": "contactDetails",
            "baseName": "contactDetails",
            "type": "ContactDetails | null"
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
            "name": "migratedAccountHolderCode",
            "baseName": "migratedAccountHolderCode",
            "type": "string"
        },
        {
            "name": "primaryBalanceAccount",
            "baseName": "primaryBalanceAccount",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "AccountHolderUpdateRequest.StatusEnum"
        },
        {
            "name": "timeZone",
            "baseName": "timeZone",
            "type": "string"
        },
        {
            "name": "verificationDeadlines",
            "baseName": "verificationDeadlines",
            "type": "Array<VerificationDeadline>"
        }    ];

    static getAttributeTypeMap() {
        return AccountHolderUpdateRequest.attributeTypeMap;
    }
}

export namespace AccountHolderUpdateRequest {
    export enum StatusEnum {
        Active = 'active',
        Closed = 'closed',
        Suspended = 'suspended'
    }
}
