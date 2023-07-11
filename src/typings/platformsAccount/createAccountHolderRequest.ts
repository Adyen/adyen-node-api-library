/*
 * The version of the OpenAPI document: v6
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AccountHolderDetails } from './accountHolderDetails';

export class CreateAccountHolderRequest {
    /**
    * Your unique identifier for the prospective account holder. The length must be between three (3) and fifty (50) characters long. Only letters, digits, and hyphens (-) are allowed.
    */
    'accountHolderCode': string;
    'accountHolderDetails': AccountHolderDetails;
    /**
    * If set to **true**, an account with the default options is automatically created for the account holder. By default, this field is set to **true**.
    */
    'createDefaultAccount'?: boolean;
    /**
    * A description of the prospective account holder, maximum 256 characters. You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores `_`.
    */
    'description'?: string;
    /**
    * The legal entity type of the account holder. This determines the information that should be provided in the request.  Possible values: **Business**, **Individual**, or **NonProfit**.  * If set to **Business** or **NonProfit**, then `accountHolderDetails.businessDetails` must be provided, with at least one entry in the `accountHolderDetails.businessDetails.shareholders` list.  * If set to **Individual**, then `accountHolderDetails.individualDetails` must be provided.
    */
    'legalEntity': CreateAccountHolderRequest.LegalEntityEnum;
    /**
    * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals.
    */
    'primaryCurrency'?: string;
    /**
    * The starting [processing tier](https://docs.adyen.com/marketplaces-and-platforms/classic/onboarding-and-verification/precheck-kyc-information) for the prospective account holder.
    */
    'processingTier'?: number;
    /**
    * The identifier of the profile that applies to this entity.
    */
    'verificationProfile'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolderCode",
            "baseName": "accountHolderCode",
            "type": "string"
        },
        {
            "name": "accountHolderDetails",
            "baseName": "accountHolderDetails",
            "type": "AccountHolderDetails"
        },
        {
            "name": "createDefaultAccount",
            "baseName": "createDefaultAccount",
            "type": "boolean"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "legalEntity",
            "baseName": "legalEntity",
            "type": "CreateAccountHolderRequest.LegalEntityEnum"
        },
        {
            "name": "primaryCurrency",
            "baseName": "primaryCurrency",
            "type": "string"
        },
        {
            "name": "processingTier",
            "baseName": "processingTier",
            "type": "number"
        },
        {
            "name": "verificationProfile",
            "baseName": "verificationProfile",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateAccountHolderRequest.attributeTypeMap;
    }
}

export namespace CreateAccountHolderRequest {
    export enum LegalEntityEnum {
        Business = 'Business',
        Individual = 'Individual',
        NonProfit = 'NonProfit',
        Partnership = 'Partnership',
        PublicCompany = 'PublicCompany'
    }
}
