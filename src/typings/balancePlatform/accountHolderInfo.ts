/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AccountHolderCapability } from './accountHolderCapability';
import { ContactDetails } from './contactDetails';

export class AccountHolderInfo {
    /**
    * The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the account holder belongs. Required in the request if your API credentials can be used for multiple balance platforms.
    */
    'balancePlatform'?: string;
    /**
    * Contains key-value pairs that specify the actions that an account holder can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability.
    */
    'capabilities'?: { [key: string]: AccountHolderCapability; };
    'contactDetails'?: ContactDetails;
    /**
    * Your description for the account holder, maximum 300 characters.
    */
    'description'?: string;
    /**
    * The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/legalEntities__resParam_id) associated with the account holder. Adyen performs a verification process against the legal entity of the account holder.  For more information on how to create a legal entity, refer to [Onboard and verify account holders](https://docs.adyen.com/issuing/kyc-verification).
    */
    'legalEntityId': string;
    /**
    * Your reference for the account holder, maximum 150 characters.
    */
    'reference'?: string;
    /**
    * The [time zone](https://www.iana.org/time-zones) of the account holder. For example, **Europe/Amsterdam**. If not set, the time zone of the balance account will be used. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
    */
    'timeZone'?: string;

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
            "type": "ContactDetails"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "legalEntityId",
            "baseName": "legalEntityId",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "timeZone",
            "baseName": "timeZone",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AccountHolderInfo.attributeTypeMap;
    }
}
