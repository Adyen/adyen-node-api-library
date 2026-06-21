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


import { AlgorithmIdentifier } from './algorithmIdentifier';
import { EncapsulatedContent } from './encapsulatedContent';

export class DigestedData {
    'Digest': any | null;
    'DigestAlgorithm': AlgorithmIdentifier;
    'EncapsulatedContent': EncapsulatedContent;
    'Version'?: DigestedData.VersionEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "Digest",
            "baseName": "Digest",
            "type": "any"
        },
        {
            "name": "DigestAlgorithm",
            "baseName": "DigestAlgorithm",
            "type": "AlgorithmIdentifier"
        },
        {
            "name": "EncapsulatedContent",
            "baseName": "EncapsulatedContent",
            "type": "EncapsulatedContent"
        },
        {
            "name": "Version",
            "baseName": "Version",
            "type": "DigestedData.VersionEnum"
        }    ];

    static getAttributeTypeMap() {
        return DigestedData.attributeTypeMap;
    }
}

export namespace DigestedData {
    export enum VersionEnum {
        V0 = <any> 'V0',
        V1 = <any> 'V1',
        V2 = <any> 'V2',
        V3 = <any> 'V3',
        V4 = <any> 'V4',
        V5 = <any> 'V5'
    }
}
