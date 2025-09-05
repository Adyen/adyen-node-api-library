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


import { AreaSize } from './areaSize';
import { SignaturePoint } from './signaturePoint';

export class CapturedSignature {
    'AreaSize'?: AreaSize;
    'SignaturePoint': Array<SignaturePoint>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "AreaSize",
            "baseName": "AreaSize",
            "type": "AreaSize"
        },
        {
            "name": "SignaturePoint",
            "baseName": "SignaturePoint",
            "type": "Array<SignaturePoint>"
        }    ];

    static getAttributeTypeMap() {
        return CapturedSignature.attributeTypeMap;
    }
}

