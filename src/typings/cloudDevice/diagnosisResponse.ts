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


import { HostStatus } from './hostStatus';
import { POIStatus } from './pOIStatus';
import { Response } from './response';

export class DiagnosisResponse {
    'HostStatus'?: Array<HostStatus>;
    'LoggedSaleID'?: Array<string>;
    'POIStatus'?: POIStatus;
    'Response': Response;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "HostStatus",
            "baseName": "HostStatus",
            "type": "Array<HostStatus>"
        },
        {
            "name": "LoggedSaleID",
            "baseName": "LoggedSaleID",
            "type": "Array<string>"
        },
        {
            "name": "POIStatus",
            "baseName": "POIStatus",
            "type": "POIStatus"
        },
        {
            "name": "Response",
            "baseName": "Response",
            "type": "Response"
        }    ];

    static getAttributeTypeMap() {
        return DiagnosisResponse.attributeTypeMap;
    }
}

