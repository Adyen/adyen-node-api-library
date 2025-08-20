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


import { AlgorithmType } from './algorithmType';
import { Parameter } from './parameter';

export class AlgorithmIdentifier {
    'Algorithm': AlgorithmType;
    'Parameter'?: Parameter;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "Algorithm",
            "baseName": "Algorithm",
            "type": "AlgorithmType"
        },
        {
            "name": "Parameter",
            "baseName": "Parameter",
            "type": "Parameter"
        }    ];

    static getAttributeTypeMap() {
        return AlgorithmIdentifier.attributeTypeMap;
    }
}

