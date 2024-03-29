/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { TerminalConnectivityBluetooth } from './terminalConnectivityBluetooth';
import { TerminalConnectivityCellular } from './terminalConnectivityCellular';
import { TerminalConnectivityEthernet } from './terminalConnectivityEthernet';
import { TerminalConnectivityWifi } from './terminalConnectivityWifi';

export class TerminalConnectivity {
    'bluetooth'?: TerminalConnectivityBluetooth;
    'cellular'?: TerminalConnectivityCellular;
    'ethernet'?: TerminalConnectivityEthernet;
    'wifi'?: TerminalConnectivityWifi;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bluetooth",
            "baseName": "bluetooth",
            "type": "TerminalConnectivityBluetooth"
        },
        {
            "name": "cellular",
            "baseName": "cellular",
            "type": "TerminalConnectivityCellular"
        },
        {
            "name": "ethernet",
            "baseName": "ethernet",
            "type": "TerminalConnectivityEthernet"
        },
        {
            "name": "wifi",
            "baseName": "wifi",
            "type": "TerminalConnectivityWifi"
        }    ];

    static getAttributeTypeMap() {
        return TerminalConnectivity.attributeTypeMap;
    }
}

