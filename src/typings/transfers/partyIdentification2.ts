/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Address2 } from './address2';

export class PartyIdentification2 {
    'address'?: Address2;
    /**
    * The date of birth of the individual in [ISO-8601](https://www.w3.org/TR/NOTE-datetime) format. For example, **YYYY-MM-DD**. Should not be before January 1, 1900.  Allowed only when `type` is **individual**.
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
    * A unique reference to identify the party or counterparty involved in transfers. This identifier ensures consistency and uniqueness throughout all transactions initiated to and from the same party. For example, your client\'s unique wallet or payee ID.
    */
    'reference'?: string;
    /**
    * The type of entity that owns the bank account.   Possible values: **individual**, **organization**, or **unknown**.
    */
    'type'?: PartyIdentification2.TypeEnum;

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
            "type": "PartyIdentification2.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PartyIdentification2.attributeTypeMap;
    }
}

export namespace PartyIdentification2 {
    export enum TypeEnum {
        Individual = 'individual',
        Organization = 'organization',
        Unknown = 'unknown'
    }
}
