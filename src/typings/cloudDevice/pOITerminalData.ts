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


import { POIProfile } from './pOIProfile';
import { TerminalEnvironmentType } from './terminalEnvironmentType';

export class POITerminalData {
    'POICapabilities': Array<POITerminalData.POICapabilitiesEnum>;
    'POIProfile'?: POIProfile;
    'POISerialNumber': string;
    'TerminalEnvironment': TerminalEnvironmentType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "POICapabilities",
            "baseName": "POICapabilities",
            "type": "Array<POITerminalData.POICapabilitiesEnum>"
        },
        {
            "name": "POIProfile",
            "baseName": "POIProfile",
            "type": "POIProfile"
        },
        {
            "name": "POISerialNumber",
            "baseName": "POISerialNumber",
            "type": "string"
        },
        {
            "name": "TerminalEnvironment",
            "baseName": "TerminalEnvironment",
            "type": "TerminalEnvironmentType"
        }    ];

    static getAttributeTypeMap() {
        return POITerminalData.attributeTypeMap;
    }
}

export namespace POITerminalData {
    export enum POICapabilitiesEnum {
        CashHandling = <any> 'CashHandling',
        CashierDisplay = <any> 'CashierDisplay',
        CashierError = <any> 'CashierError',
        CashierInput = <any> 'CashierInput',
        CustomerDisplay = <any> 'CustomerDisplay',
        CustomerError = <any> 'CustomerError',
        CustomerInput = <any> 'CustomerInput',
        EmvContactless = <any> 'EMVContactless',
        Icc = <any> 'ICC',
        MagStripe = <any> 'MagStripe',
        PrinterDocument = <any> 'PrinterDocument',
        PrinterReceipt = <any> 'PrinterReceipt',
        PrinterVoucher = <any> 'PrinterVoucher'
    }
}
