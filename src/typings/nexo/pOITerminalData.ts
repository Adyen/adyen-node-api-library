/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { POIProfile } from './pOIProfile';
import { TerminalEnvironment } from './terminalEnvironment';

export class POITerminalData {
    'TerminalEnvironment': TerminalEnvironment;
    'POICapabilities': Array<POITerminalData.POICapabilitiesEnum>;
    'POIProfile'?: POIProfile;
    'POISerialNumber': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "TerminalEnvironment",
            "baseName": "TerminalEnvironment",
            "type": "TerminalEnvironment"
        },
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
        }    ];

    static getAttributeTypeMap() {
        return POITerminalData.attributeTypeMap;
    }
}

export namespace POITerminalData {
    export enum POICapabilitiesEnum {
        CashHandling = 'CashHandling',
        CashierDisplay = 'CashierDisplay',
        CashierError = 'CashierError',
        CashierInput = 'CashierInput',
        CustomerDisplay = 'CustomerDisplay',
        CustomerError = 'CustomerError',
        CustomerInput = 'CustomerInput',
        EmvContactless = 'EMVContactless',
        Icc = 'ICC',
        MagStripe = 'MagStripe',
        PrinterDocument = 'PrinterDocument',
        PrinterReceipt = 'PrinterReceipt',
        PrinterVoucher = 'PrinterVoucher'
    }
}
