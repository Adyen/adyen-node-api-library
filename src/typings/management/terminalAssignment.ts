/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { TerminalReassignmentTarget } from './terminalReassignmentTarget';

export class TerminalAssignment {
    /**
    * The unique identifier of the company account to which terminal is assigned.
    */
    'companyId': string;
    /**
    * The unique identifier of the merchant account to which terminal is assigned.
    */
    'merchantId'?: string;
    'reassignmentTarget'?: TerminalReassignmentTarget;
    /**
    * The status of the reassignment. Possible values:   * `reassignmentInProgress`: the terminal was boarded and is now scheduled to remove the configuration. Wait for the terminal to synchronize with the Adyen platform.  * `deployed`: the terminal is deployed and reassigned.   * `inventory`: the terminal is in inventory and cannot process transactions.   * `boarded`: the terminal is boarded to a store, or a merchant account representing a store, and can process transactions.  
    */
    'status': TerminalAssignment.StatusEnum;
    /**
    * The unique identifier of the store to which terminal is assigned.
    */
    'storeId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "companyId",
            "baseName": "companyId",
            "type": "string"
        },
        {
            "name": "merchantId",
            "baseName": "merchantId",
            "type": "string"
        },
        {
            "name": "reassignmentTarget",
            "baseName": "reassignmentTarget",
            "type": "TerminalReassignmentTarget"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "TerminalAssignment.StatusEnum"
        },
        {
            "name": "storeId",
            "baseName": "storeId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return TerminalAssignment.attributeTypeMap;
    }
}

export namespace TerminalAssignment {
    export enum StatusEnum {
        Boarded = 'boarded',
        Deployed = 'deployed',
        Inventory = 'inventory',
        ReassignmentInProgress = 'reassignmentInProgress'
    }
}
