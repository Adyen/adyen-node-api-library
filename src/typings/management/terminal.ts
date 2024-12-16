/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { TerminalAssignment } from './terminalAssignment';
import { TerminalConnectivity } from './terminalConnectivity';

export class Terminal {
    'assignment'?: TerminalAssignment | null;
    'connectivity'?: TerminalConnectivity | null;
    /**
    * The software release currently in use on the terminal.
    */
    'firmwareVersion'?: string;
    /**
    * The unique identifier of the terminal.
    */
    'id'?: string;
    /**
    * Date and time of the last activity on the terminal. Not included when the last activity was more than 14 days ago.
    */
    'lastActivityAt'?: Date;
    /**
    * Date and time of the last transaction on the terminal. Not included when the last transaction was more than 14 days ago.
    */
    'lastTransactionAt'?: Date;
    /**
    * The model name of the terminal.
    */
    'model'?: string;
    /**
    * The exact time of the terminal reboot, in the timezone of the terminal in **HH:mm** format.
    */
    'restartLocalTime'?: string;
    /**
    * The serial number of the terminal.
    */
    'serialNumber'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "assignment",
            "baseName": "assignment",
            "type": "TerminalAssignment | null"
        },
        {
            "name": "connectivity",
            "baseName": "connectivity",
            "type": "TerminalConnectivity | null"
        },
        {
            "name": "firmwareVersion",
            "baseName": "firmwareVersion",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "lastActivityAt",
            "baseName": "lastActivityAt",
            "type": "Date"
        },
        {
            "name": "lastTransactionAt",
            "baseName": "lastTransactionAt",
            "type": "Date"
        },
        {
            "name": "model",
            "baseName": "model",
            "type": "string"
        },
        {
            "name": "restartLocalTime",
            "baseName": "restartLocalTime",
            "type": "string"
        },
        {
            "name": "serialNumber",
            "baseName": "serialNumber",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Terminal.attributeTypeMap;
    }
}

