/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { BankAccountV3 } from './bankAccountV3';
import { TransferNotificationMerchantData } from './transferNotificationMerchantData';

export class TransferNotificationCounterParty {
    /**
    * Unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).
    */
    'balanceAccountId'?: string;
    'bankAccount'?: BankAccountV3;
    'merchant'?: TransferNotificationMerchantData;
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
            "name": "merchant",
            "baseName": "merchant",
            "type": "TransferNotificationMerchantData"
        },
        {
            "name": "transferInstrumentId",
            "baseName": "transferInstrumentId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TransferNotificationCounterParty.attributeTypeMap;
    }
}

