/*
 * The version of the OpenAPI document: v68
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Address } from './address';
import { Amount } from './amount';
import { BankAccount } from './bankAccount';
import { Card } from './card';
import { Name } from './name';
import { Recurring } from './recurring';

export class StoreDetailAndSubmitRequest {
    /**
    * This field contains additional data, which may be required for a particular request.
    */
    'additionalData'?: { [key: string]: string; };
    'amount': Amount;
    'bank'?: BankAccount;
    'billingAddress'?: Address;
    'card'?: Card;
    /**
    * The date of birth. Format: [ISO-8601](https://www.w3.org/TR/NOTE-datetime); example: YYYY-MM-DD For Paysafecard it must be the same as used when registering the Paysafecard account. > This field is mandatory for natural persons.
    */
    'dateOfBirth': Date;
    /**
    * The type of the entity the payout is processed for.
    */
    'entityType': StoreDetailAndSubmitRequest.EntityTypeEnum;
    /**
    * An integer value that is added to the normal fraud score. The value can be either positive or negative.
    */
    'fraudOffset'?: number;
    /**
    * The merchant account identifier, with which you want to process the transaction.
    */
    'merchantAccount': string;
    /**
    * The shopper\'s nationality.  A valid value is an ISO 2-character country code (e.g. \'NL\').
    */
    'nationality': string;
    'recurring': Recurring;
    /**
    * The merchant reference for this payment. This reference will be used in all communication to the merchant about the status of the payout. Although it is a good idea to make sure it is unique, this is not a requirement.
    */
    'reference': string;
    /**
    * The name of the brand to make a payout to.  For Paysafecard it must be set to `paysafecard`.
    */
    'selectedBrand'?: string;
    /**
    * The shopper\'s email address.
    */
    'shopperEmail': string;
    'shopperName'?: Name;
    /**
    * The shopper\'s reference for the payment transaction.
    */
    'shopperReference': string;
    /**
    * The description of this payout. This description is shown on the bank statement of the shopper (if this is supported by the chosen payment method).
    */
    'shopperStatement'?: string;
    /**
    * The shopper\'s social security number.
    */
    'socialSecurityNumber'?: string;
    /**
    * The shopper\'s phone number.
    */
    'telephoneNumber'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalData",
            "baseName": "additionalData",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "bank",
            "baseName": "bank",
            "type": "BankAccount"
        },
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "Address"
        },
        {
            "name": "card",
            "baseName": "card",
            "type": "Card"
        },
        {
            "name": "dateOfBirth",
            "baseName": "dateOfBirth",
            "type": "Date"
        },
        {
            "name": "entityType",
            "baseName": "entityType",
            "type": "StoreDetailAndSubmitRequest.EntityTypeEnum"
        },
        {
            "name": "fraudOffset",
            "baseName": "fraudOffset",
            "type": "number"
        },
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string"
        },
        {
            "name": "nationality",
            "baseName": "nationality",
            "type": "string"
        },
        {
            "name": "recurring",
            "baseName": "recurring",
            "type": "Recurring"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "selectedBrand",
            "baseName": "selectedBrand",
            "type": "string"
        },
        {
            "name": "shopperEmail",
            "baseName": "shopperEmail",
            "type": "string"
        },
        {
            "name": "shopperName",
            "baseName": "shopperName",
            "type": "Name"
        },
        {
            "name": "shopperReference",
            "baseName": "shopperReference",
            "type": "string"
        },
        {
            "name": "shopperStatement",
            "baseName": "shopperStatement",
            "type": "string"
        },
        {
            "name": "socialSecurityNumber",
            "baseName": "socialSecurityNumber",
            "type": "string"
        },
        {
            "name": "telephoneNumber",
            "baseName": "telephoneNumber",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StoreDetailAndSubmitRequest.attributeTypeMap;
    }
}

export namespace StoreDetailAndSubmitRequest {
    export enum EntityTypeEnum {
        NaturalPerson = <any> 'NaturalPerson',
        Company = <any> 'Company'
    }
}
