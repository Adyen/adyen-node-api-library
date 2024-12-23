/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { CardholderReceipt } from './cardholderReceipt';
import { Connectivity } from './connectivity';
import { Gratuity } from './gratuity';
import { Hardware } from './hardware';
import { Localization } from './localization';
import { Nexo } from './nexo';
import { OfflineProcessing } from './offlineProcessing';
import { Opi } from './opi';
import { Passcodes } from './passcodes';
import { PayAtTable } from './payAtTable';
import { Payment } from './payment';
import { ReceiptOptions } from './receiptOptions';
import { ReceiptPrinting } from './receiptPrinting';
import { Refunds } from './refunds';
import { Signature } from './signature';
import { Standalone } from './standalone';
import { StoreAndForward } from './storeAndForward';
import { Surcharge } from './surcharge';
import { TapToPay } from './tapToPay';
import { TerminalInstructions } from './terminalInstructions';
import { Timeouts } from './timeouts';
import { WifiProfiles } from './wifiProfiles';

export class TerminalSettings {
    'cardholderReceipt'?: CardholderReceipt;
    'connectivity'?: Connectivity;
    /**
    * Settings for tipping with or without predefined options to choose from. The maximum number of predefined options is four, or three plus the option to enter a custom tip.
    */
    'gratuities'?: Array<Gratuity> | null;
    'hardware'?: Hardware; | null;
    'localization'?: Localization; | null;
    'nexo'?: Nexo; | null;
    'offlineProcessing'?: OfflineProcessing; | null;
    'opi'?: Opi; | null;
    'passcodes'?: Passcodes; | null;
    'payAtTable'?: PayAtTable; | null;
    'payment'?: Payment; | null;
    'receiptOptions'?: ReceiptOptions; | null;
    'receiptPrinting'?: ReceiptPrinting; | null;
    'refunds'?: Refunds; | null;
    'signature'?: Signature; | null;
    'standalone'?: Standalone; | null;
    'storeAndForward'?: StoreAndForward; | null;
    'surcharge'?: Surcharge; | null;
    'tapToPay'?: TapToPay; | null;
    'terminalInstructions'?: TerminalInstructions; | null;
    'timeouts'?: Timeouts; | null;
    'wifiProfiles'?: WifiProfiles; | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cardholderReceipt",
            "baseName": "cardholderReceipt",
            "type": "CardholderReceipt"
        },
        {
            "name": "connectivity",
            "baseName": "connectivity",
            "type": "Connectivity"
        },
        {
            "name": "gratuities",
            "baseName": "gratuities",
            "type": "Array<Gratuity> | null"
        },
        {
            "name": "hardware",
            "baseName": "hardware",
            "type": "Hardware"
        },
        {
            "name": "localization",
            "baseName": "localization",
            "type": "Localization"
        },
        {
            "name": "nexo",
            "baseName": "nexo",
            "type": "Nexo"
        },
        {
            "name": "offlineProcessing",
            "baseName": "offlineProcessing",
            "type": "OfflineProcessing"
        },
        {
            "name": "opi",
            "baseName": "opi",
            "type": "Opi"
        },
        {
            "name": "passcodes",
            "baseName": "passcodes",
            "type": "Passcodes"
        },
        {
            "name": "payAtTable",
            "baseName": "payAtTable",
            "type": "PayAtTable"
        },
        {
            "name": "payment",
            "baseName": "payment",
            "type": "Payment"
        },
        {
            "name": "receiptOptions",
            "baseName": "receiptOptions",
            "type": "ReceiptOptions"
        },
        {
            "name": "receiptPrinting",
            "baseName": "receiptPrinting",
            "type": "ReceiptPrinting"
        },
        {
            "name": "refunds",
            "baseName": "refunds",
            "type": "Refunds"
        },
        {
            "name": "signature",
            "baseName": "signature",
            "type": "Signature"
        },
        {
            "name": "standalone",
            "baseName": "standalone",
            "type": "Standalone"
        },
        {
            "name": "storeAndForward",
            "baseName": "storeAndForward",
            "type": "StoreAndForward"
        },
        {
            "name": "surcharge",
            "baseName": "surcharge",
            "type": "Surcharge"
        },
        {
            "name": "tapToPay",
            "baseName": "tapToPay",
            "type": "TapToPay"
        },
        {
            "name": "terminalInstructions",
            "baseName": "terminalInstructions",
            "type": "TerminalInstructions"
        },
        {
            "name": "timeouts",
            "baseName": "timeouts",
            "type": "Timeouts"
        },
        {
            "name": "wifiProfiles",
            "baseName": "wifiProfiles",
            "type": "WifiProfiles"
        }    ];

    static getAttributeTypeMap() {
        return TerminalSettings.attributeTypeMap;
    }
}

