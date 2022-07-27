/*
 * The version of the OpenAPI document: v6
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AccountHolderDetails } from './accountHolderDetails';
import { AccountHolderStatus } from './accountHolderStatus';
import { ErrorFieldType } from './errorFieldType';
import { KYCVerificationResult } from './kYCVerificationResult';

export class CreateAccountHolderResponse {
    /**
    * The code of a new account created for the account holder.
    */
    'accountCode'?: string;
    /**
    * The code of the new account holder.
    */
    'accountHolderCode': string;
    'accountHolderDetails': AccountHolderDetails;
    'accountHolderStatus': AccountHolderStatus;
    /**
    * The description of the new account holder.
    */
    'description'?: string;
    /**
    * A list of fields that caused the `/createAccountHolder` request to fail.
    */
    'invalidFields'?: Array<ErrorFieldType>;
    /**
    * The type of legal entity of the new account holder.
    */
    'legalEntity': CreateAccountHolderResponse.LegalEntityEnum;
    /**
    * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals.
    */
    'primaryCurrency'?: string;
    /**
    * The reference of a request. Can be used to uniquely identify the request.
    */
    'pspReference'?: string;
    /**
    * The result code.
    */
    'resultCode'?: string;
    'verification': KYCVerificationResult;
    /**
    * The identifier of the profile that applies to this entity.
    */
    'verificationProfile'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountCode",
            "baseName": "accountCode",
            "type": "string"
        },
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
            "name": "accountHolderStatus",
            "baseName": "accountHolderStatus",
            "type": "AccountHolderStatus"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "invalidFields",
            "baseName": "invalidFields",
            "type": "Array<ErrorFieldType>"
        },
        {
            "name": "legalEntity",
            "baseName": "legalEntity",
            "type": "CreateAccountHolderResponse.LegalEntityEnum"
        },
        {
            "name": "primaryCurrency",
            "baseName": "primaryCurrency",
            "type": "string"
        },
        {
            "name": "pspReference",
            "baseName": "pspReference",
            "type": "string"
        },
        {
            "name": "resultCode",
            "baseName": "resultCode",
            "type": "string"
        },
        {
            "name": "verification",
            "baseName": "verification",
            "type": "KYCVerificationResult"
        },
        {
            "name": "verificationProfile",
            "baseName": "verificationProfile",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CreateAccountHolderResponse.attributeTypeMap;
    }
}

export namespace CreateAccountHolderResponse {
    export enum LegalEntityEnum {
        Business = <any> 'Business',
        Individual = <any> 'Individual',
        NonProfit = <any> 'NonProfit',
        Partnership = <any> 'Partnership',
        PublicCompany = <any> 'PublicCompany'
    }
}
