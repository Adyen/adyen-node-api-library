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


import { IdentificationType } from './identificationType';
import { StoredValueAccountType } from './storedValueAccountType';

export class StoredValueAccountId {
    'EntryMode': Array<StoredValueAccountId.EntryModeEnum>;
    'ExpiryDate'?: string;
    'IdentificationType': IdentificationType;
    'OwnerName'?: string;
    'StoredValueAccountType': StoredValueAccountType;
    'StoredValueProvider'?: string;
    'Value'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "EntryMode",
            "baseName": "EntryMode",
            "type": "Array<StoredValueAccountId.EntryModeEnum>"
        },
        {
            "name": "ExpiryDate",
            "baseName": "ExpiryDate",
            "type": "string"
        },
        {
            "name": "IdentificationType",
            "baseName": "IdentificationType",
            "type": "IdentificationType"
        },
        {
            "name": "OwnerName",
            "baseName": "OwnerName",
            "type": "string"
        },
        {
            "name": "StoredValueAccountType",
            "baseName": "StoredValueAccountType",
            "type": "StoredValueAccountType"
        },
        {
            "name": "StoredValueProvider",
            "baseName": "StoredValueProvider",
            "type": "string"
        },
        {
            "name": "Value",
            "baseName": "Value",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StoredValueAccountId.attributeTypeMap;
    }
}

export namespace StoredValueAccountId {
    export enum EntryModeEnum {
        Contactless = <any> 'Contactless',
        File = <any> 'File',
        Icc = <any> 'ICC',
        Keyed = <any> 'Keyed',
        MagStripe = <any> 'MagStripe',
        Manual = <any> 'Manual',
        Mobile = <any> 'Mobile',
        Rfid = <any> 'RFID',
        Scanned = <any> 'Scanned',
        SynchronousIcc = <any> 'SynchronousICC',
        Tapped = <any> 'Tapped'
    }
}
