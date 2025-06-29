/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { TerminalConnectivityBluetooth } from "./terminalConnectivityBluetooth";
import { TerminalConnectivityCellular } from "./terminalConnectivityCellular";
import { TerminalConnectivityEthernet } from "./terminalConnectivityEthernet";
import { TerminalConnectivityWifi } from "./terminalConnectivityWifi";


export class TerminalConnectivity {
    "bluetooth"?: TerminalConnectivityBluetooth;
    "cellular"?: TerminalConnectivityCellular;
    "ethernet"?: TerminalConnectivityEthernet;
    "wifi"?: TerminalConnectivityWifi;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bluetooth",
            "baseName": "bluetooth",
            "type": "TerminalConnectivityBluetooth",
            "format": ""
        },
        {
            "name": "cellular",
            "baseName": "cellular",
            "type": "TerminalConnectivityCellular",
            "format": ""
        },
        {
            "name": "ethernet",
            "baseName": "ethernet",
            "type": "TerminalConnectivityEthernet",
            "format": ""
        },
        {
            "name": "wifi",
            "baseName": "wifi",
            "type": "TerminalConnectivityWifi",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TerminalConnectivity.attributeTypeMap;
    }

    public constructor() {
    }
}

