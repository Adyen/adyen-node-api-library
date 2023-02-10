/*
 * The version of the OpenAPI document: v70
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { BankAccount } from './bankAccount';
import { Card } from './card';

export class StoredDetails {
    'bank'?: BankAccount;
    'card'?: Card;
    /**
    * The email associated with stored payment details.
    */
    'emailAddress'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bank",
            "baseName": "bank",
            "type": "BankAccount"
        },
        {
            "name": "card",
            "baseName": "card",
            "type": "Card"
        },
        {
            "name": "emailAddress",
            "baseName": "emailAddress",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StoredDetails.attributeTypeMap;
    }
}

