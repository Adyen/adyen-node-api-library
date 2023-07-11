/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { BankAccountV3 } from './bankAccountV3';

export class CounterpartyInfoV3 {
    /**
    * Unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).
    */
    'balanceAccountId'?: string;
    'bankAccount'?: BankAccountV3;
    /**
    * Unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).
    */
    'transferInstrumentId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "balanceAccountId",
            "baseName": "balanceAccountId",
            "type": "string"
        },
        {
            "name": "bankAccount",
            "baseName": "bankAccount",
            "type": "BankAccountV3"
        },
        {
            "name": "transferInstrumentId",
            "baseName": "transferInstrumentId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return CounterpartyInfoV3.attributeTypeMap;
    }
}

