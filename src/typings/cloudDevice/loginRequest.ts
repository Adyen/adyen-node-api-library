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


import { SaleSoftware } from './saleSoftware';
import { SaleTerminalData } from './saleTerminalData';

export class LoginRequest {
    'CustomerOrderReq'?: Array<LoginRequest.CustomerOrderReqEnum>;
    'DateTime': { [key: string]: any; };
    'OperatorID'?: string;
    'OperatorLanguage': string;
    'POISerialNumber'?: string;
    'SaleSoftware': SaleSoftware;
    'SaleTerminalData'?: SaleTerminalData;
    'ShiftNumber'?: string;
    'TokenRequestedType'?: LoginRequest.TokenRequestedTypeEnum;
    'TrainingModeFlag'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "CustomerOrderReq",
            "baseName": "CustomerOrderReq",
            "type": "Array<LoginRequest.CustomerOrderReqEnum>"
        },
        {
            "name": "DateTime",
            "baseName": "DateTime",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "OperatorID",
            "baseName": "OperatorID",
            "type": "string"
        },
        {
            "name": "OperatorLanguage",
            "baseName": "OperatorLanguage",
            "type": "string"
        },
        {
            "name": "POISerialNumber",
            "baseName": "POISerialNumber",
            "type": "string"
        },
        {
            "name": "SaleSoftware",
            "baseName": "SaleSoftware",
            "type": "SaleSoftware"
        },
        {
            "name": "SaleTerminalData",
            "baseName": "SaleTerminalData",
            "type": "SaleTerminalData"
        },
        {
            "name": "ShiftNumber",
            "baseName": "ShiftNumber",
            "type": "string"
        },
        {
            "name": "TokenRequestedType",
            "baseName": "TokenRequestedType",
            "type": "LoginRequest.TokenRequestedTypeEnum"
        },
        {
            "name": "TrainingModeFlag",
            "baseName": "TrainingModeFlag",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return LoginRequest.attributeTypeMap;
    }
}

export namespace LoginRequest {
    export enum CustomerOrderReqEnum {
        Both = <any> 'Both',
        Closed = <any> 'Closed',
        Open = <any> 'Open'
    }
    export enum TokenRequestedTypeEnum {
        Customer = <any> 'Customer',
        Transaction = <any> 'Transaction'
    }
}
