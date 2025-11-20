/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2025 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
 
/**
 * Cloud Device API
 * Definition of Cloud Device API Schema
 *
 */


import { AmountsReq } from './amountsReq';
import { OriginalPOITransaction } from './originalPOITransaction';
import { SaleItem } from './saleItem';
import { TransactionConditions } from './transactionConditions';

export class PaymentTransaction {
    'AmountsReq': AmountsReq;
    'OriginalPOITransaction'?: OriginalPOITransaction;
    'SaleItem'?: Array<SaleItem>;
    'TransactionConditions'?: TransactionConditions;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AmountsReq",
            "baseName": "AmountsReq",
            "type": "AmountsReq"
        },
        {
            "name": "OriginalPOITransaction",
            "baseName": "OriginalPOITransaction",
            "type": "OriginalPOITransaction"
        },
        {
            "name": "SaleItem",
            "baseName": "SaleItem",
            "type": "Array<SaleItem>"
        },
        {
            "name": "TransactionConditions",
            "baseName": "TransactionConditions",
            "type": "TransactionConditions"
        }    ];

    static getAttributeTypeMap() {
        return PaymentTransaction.attributeTypeMap;
    }
}

