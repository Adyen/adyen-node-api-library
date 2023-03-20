/*
 * The version of the OpenAPI document: v68
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Address } from './address';
import { BankAccount } from './bankAccount';
import { Card } from './card';
import { Name } from './name';
import { Recurring } from './recurring';

export class StoreDetailRequest {
    /**
    * This field contains additional data, which may be required for a particular request.
    */
    'additionalData'?: { [key: string]: string; };
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
    'entityType': StoreDetailRequest.EntityTypeEnum;
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
            "type": "StoreDetailRequest.EntityTypeEnum"
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
        return StoreDetailRequest.attributeTypeMap;
    }
}

export namespace StoreDetailRequest {
    export enum EntityTypeEnum {
        NaturalPerson = 'NaturalPerson',
        Company = 'Company'
    }
}
