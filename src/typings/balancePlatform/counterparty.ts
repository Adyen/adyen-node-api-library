/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { BankAccount } from './bankAccount';

export class Counterparty {
    'bankAccount'?: BankAccount | null;
    /**
    * The unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).
    */
    'transferInstrumentId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bankAccount",
            "baseName": "bankAccount",
            "type": "BankAccount | null"
        },
        {
            "name": "transferInstrumentId",
            "baseName": "transferInstrumentId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Counterparty.attributeTypeMap;
    }
}

