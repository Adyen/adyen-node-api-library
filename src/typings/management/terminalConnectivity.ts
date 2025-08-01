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
    "bluetooth"?: TerminalConnectivityBluetooth | null;
    "cellular"?: TerminalConnectivityCellular | null;
    "ethernet"?: TerminalConnectivityEthernet | null;
    "wifi"?: TerminalConnectivityWifi | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bluetooth",
            "baseName": "bluetooth",
            "type": "TerminalConnectivityBluetooth | null",
            "format": ""
        },
        {
            "name": "cellular",
            "baseName": "cellular",
            "type": "TerminalConnectivityCellular | null",
            "format": ""
        },
        {
            "name": "ethernet",
            "baseName": "ethernet",
            "type": "TerminalConnectivityEthernet | null",
            "format": ""
        },
        {
            "name": "wifi",
            "baseName": "wifi",
            "type": "TerminalConnectivityWifi | null",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TerminalConnectivity.attributeTypeMap;
    }

    public constructor() {
    }
}

