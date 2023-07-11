/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Address2 } from './address2';

export class UltimatePartyIdentification {
    'address'?: Address2;
    /**
    * The date of birth of the individual in [ISO-8601](https://www.w3.org/TR/NOTE-datetime) format. For example, **YYYY-MM-DD**. Should not be before 1st January 1900.  Allowed only when `type` is **individual**.
    */
    'dateOfBirth'?: string;
    /**
    * First name of the individual.  Allowed only when `type` is **individual**.
    */
    'firstName'?: string;
    /**
    * The name of the entity.
    */
    'fullName': string;
    /**
    * Last name of the individual.  Allowed only when `type` is **individual**.
    */
    'lastName'?: string;
    /**
    * Your unique reference of the party. This should be consistent for all transfers initiated to/from the same party/counterparty. e.g Your client\'s unique wallet or payee ID
    */
    'reference'?: string;
    /**
    * The type of entity that owns the bank account.   Possible values: **individual**, **organization**, or **unknown**.
    */
    'type'?: UltimatePartyIdentification.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "Address2"
        },
        {
            "name": "dateOfBirth",
            "baseName": "dateOfBirth",
            "type": "string"
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "fullName",
            "baseName": "fullName",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "UltimatePartyIdentification.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return UltimatePartyIdentification.attributeTypeMap;
    }
}

export namespace UltimatePartyIdentification {
    export enum TypeEnum {
        Individual = 'individual',
        Organization = 'organization',
        Unknown = 'unknown'
    }
}
