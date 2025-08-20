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


import { DocumentQualifierType } from './documentQualifierType';
import { OutputContent } from './outputContent';
import { ResponseModeType } from './responseModeType';

export class PrintOutput {
    'DocumentQualifier': DocumentQualifierType;
    'IntegratedPrintFlag'?: boolean;
    'OutputContent': OutputContent;
    'OutputSignature'?: any | null;
    'RequiredSignatureFlag'?: boolean;
    'ResponseMode': ResponseModeType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "DocumentQualifier",
            "baseName": "DocumentQualifier",
            "type": "DocumentQualifierType"
        },
        {
            "name": "IntegratedPrintFlag",
            "baseName": "IntegratedPrintFlag",
            "type": "boolean"
        },
        {
            "name": "OutputContent",
            "baseName": "OutputContent",
            "type": "OutputContent"
        },
        {
            "name": "OutputSignature",
            "baseName": "OutputSignature",
            "type": "any"
        },
        {
            "name": "RequiredSignatureFlag",
            "baseName": "RequiredSignatureFlag",
            "type": "boolean"
        },
        {
            "name": "ResponseMode",
            "baseName": "ResponseMode",
            "type": "ResponseModeType"
        }    ];

    static getAttributeTypeMap() {
        return PrintOutput.attributeTypeMap;
    }
}

