/**
 * Adyen Payout API
 * A set of API endpoints that allow you to store payout details, confirm, or decline a payout.  For more information, refer to [Online payouts](https://docs.adyen.com/checkout/online-payouts).
 *
 * The version of the OpenAPI document: 51
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Amount } from './amount';
import { Name } from './name';
import { Recurring } from './recurring';

export class SubmitRequest {
    /**
    * This field contains additional data, which may be required for a particular request.
    */
    'additionalData'?: object;
    'amount': Amount;
    /**
    * The date of birth. Format: ISO-8601; example: YYYY-MM-DD  For Paysafecard it must be the same as used when registering the Paysafecard account.  > This field is mandatory for natural persons.  > This field is required to update the existing `dateOfBirth` that is associated with this recurring contract.
    */
    'dateOfBirth'?: Date;
    /**
    * The type of the entity the payout is processed for.  Allowed values: * NaturalPerson * Company > This field is required to update the existing `entityType` that is associated with this recurring contract.
    */
    'entityType'?: SubmitRequest.EntityTypeEnum;
    /**
    * An integer value that is added to the normal fraud score. The value can be either positive or negative.
    */
    'fraudOffset'?: number;
    /**
    * The merchant account identifier you want to process the transaction request with.
    */
    'merchantAccount': string;
    /**
    * The shopper\'s nationality.  A valid value is an ISO 2-character country code (e.g. \'NL\').  > This field is required to update the existing nationality that is associated with this recurring contract.
    */
    'nationality'?: string;
    'recurring': Recurring;
    /**
    * The merchant reference for this payout. This reference will be used in all communication to the merchant about the status of the payout. Although it is a good idea to make sure it is unique, this is not a requirement.
    */
    'reference': string;
    /**
    * This is the `recurringDetailReference` you want to use for this payout.  You can use the value LATEST to select the most recently used recurring detail.
    */
    'selectedRecurringDetailReference': string;
    /**
    * The shopper\'s email address.
    */
    'shopperEmail': string;
    'shopperName'?: Name;
    /**
    * The shopper\'s reference for the payout transaction.
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

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalData",
            "baseName": "additionalData",
            "type": "object"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "dateOfBirth",
            "baseName": "dateOfBirth",
            "type": "Date"
        },
        {
            "name": "entityType",
            "baseName": "entityType",
            "type": "SubmitRequest.EntityTypeEnum"
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
            "name": "selectedRecurringDetailReference",
            "baseName": "selectedRecurringDetailReference",
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
        }    ];

    static getAttributeTypeMap() {
        return SubmitRequest.attributeTypeMap;
    }
}

export namespace SubmitRequest {
    export enum EntityTypeEnum {
        NaturalPerson = <any> 'NaturalPerson',
        Company = <any> 'Company'
    }
}
