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



export class DiagnosisRequest {
    'AcquirerID'?: Array<string>;
    'HostDiagnosisFlag'?: boolean;
    'POIID'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AcquirerID",
            "baseName": "AcquirerID",
            "type": "Array<string>"
        },
        {
            "name": "HostDiagnosisFlag",
            "baseName": "HostDiagnosisFlag",
            "type": "boolean"
        },
        {
            "name": "POIID",
            "baseName": "POIID",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DiagnosisRequest.attributeTypeMap;
    }
}

