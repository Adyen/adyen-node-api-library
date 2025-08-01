/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { ScheduleTerminalActionsRequestActionDetails } from "./scheduleTerminalActionsRequestActionDetails";
import { TerminalActionScheduleDetail } from "./terminalActionScheduleDetail";


export class ScheduleTerminalActionsResponse {
    "actionDetails"?: ScheduleTerminalActionsRequestActionDetails | null;
    /**
    * A list containing a terminal ID and an action ID for each terminal that the action was scheduled for.
    */
    "items"?: Array<TerminalActionScheduleDetail>;
    /**
    * The date and time when the action should happen.  Format: [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339), but without the **Z** before the time offset. For example, **2021-11-15T12:16:21+0100**  The action is sent with the first [maintenance call](https://docs.adyen.com/point-of-sale/automating-terminal-management/terminal-actions-api#when-actions-take-effect) after the specified date and time in the time zone of the terminal.  An empty value causes the action to be sent as soon as possible: at the next maintenance call.
    */
    "scheduledAt"?: string;
    /**
    * The unique ID of the [store](https://docs.adyen.com/api-explorer/#/ManagementService/latest/get/stores). If present, all terminals in the `terminalIds` list must be assigned to this store.
    */
    "storeId"?: string;
    /**
    * The validation errors that occurred in the list of terminals, and for each error the IDs of the terminals that the error applies to.
    */
    "terminalsWithErrors"?: { [key: string]: Array<string>; };
    /**
    * The number of terminals for which scheduling the action failed.
    */
    "totalErrors"?: number;
    /**
    * The number of terminals for which the action was successfully scheduled. This doesn\'t mean the action has happened yet.
    */
    "totalScheduled"?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "actionDetails",
            "baseName": "actionDetails",
            "type": "ScheduleTerminalActionsRequestActionDetails | null",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<TerminalActionScheduleDetail>",
            "format": ""
        },
        {
            "name": "scheduledAt",
            "baseName": "scheduledAt",
            "type": "string",
            "format": ""
        },
        {
            "name": "storeId",
            "baseName": "storeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "terminalsWithErrors",
            "baseName": "terminalsWithErrors",
            "type": "{ [key: string]: Array<string>; }",
            "format": ""
        },
        {
            "name": "totalErrors",
            "baseName": "totalErrors",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "totalScheduled",
            "baseName": "totalScheduled",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return ScheduleTerminalActionsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

