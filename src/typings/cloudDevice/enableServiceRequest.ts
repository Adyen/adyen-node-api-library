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


import { DisplayOutput } from './displayOutput';
import { TransactionActionType } from './transactionActionType';

export class EnableServiceRequest {
    'DisplayOutput'?: DisplayOutput;
    'ServicesEnabled'?: Array<EnableServiceRequest.ServicesEnabledEnum>;
    'TransactionAction': TransactionActionType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "DisplayOutput",
            "baseName": "DisplayOutput",
            "type": "DisplayOutput"
        },
        {
            "name": "ServicesEnabled",
            "baseName": "ServicesEnabled",
            "type": "Array<EnableServiceRequest.ServicesEnabledEnum>"
        },
        {
            "name": "TransactionAction",
            "baseName": "TransactionAction",
            "type": "TransactionActionType"
        }    ];

    static getAttributeTypeMap() {
        return EnableServiceRequest.attributeTypeMap;
    }
}

export namespace EnableServiceRequest {
    export enum ServicesEnabledEnum {
        CardAcquisition = <any> 'CardAcquisition',
        Loyalty = <any> 'Loyalty',
        Payment = <any> 'Payment'
    }
}
