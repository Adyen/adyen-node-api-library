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


import { ApplicationInfo } from './applicationInfo';

export class SaleToAcquirerData {
    'applicationInfo'?: ApplicationInfo;
    'shopperEmail'?: string;
    'shopperReference'?: string;
    'recurringContract'?: string;
    'shopperStatement'?: string;
    'recurringDetailName'?: string;
    'store'?: string;
    'merchantAccount'?: string;
    'currency'?: string;
    'tenderOption'?: string;
    'additionalData'?: object;
    'metadata'?: { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "applicationInfo",
            "baseName": "applicationInfo",
            "type": "ApplicationInfo"
        },
        {
            "name": "shopperEmail",
            "baseName": "shopperEmail",
            "type": "string"
        },
        {
            "name": "shopperReference",
            "baseName": "shopperReference",
            "type": "string"
        },
        {
            "name": "recurringContract",
            "baseName": "recurringContract",
            "type": "string"
        },
        {
            "name": "shopperStatement",
            "baseName": "shopperStatement",
            "type": "string"
        },
        {
            "name": "recurringDetailName",
            "baseName": "recurringDetailName",
            "type": "string"
        },
        {
            "name": "store",
            "baseName": "store",
            "type": "string"
        },
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "tenderOption",
            "baseName": "tenderOption",
            "type": "string"
        },
        {
            "name": "additionalData",
            "baseName": "additionalData",
            "type": "object"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        }];

    static getAttributeTypeMap() {
        return SaleToAcquirerData.attributeTypeMap;
    }
}

