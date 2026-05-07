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

export class AuthenticatedData {
    'EncapsulatedContent': EncapsulatedContent;
    'KeyTransportOrKEK'?: Array<any>;
    'MAC': any | null;
    'MACAlgorithm': AlgorithmIdentifier;
    'Version'?: AuthenticatedData.VersionEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "EncapsulatedContent",
            "baseName": "EncapsulatedContent",
            "type": "EncapsulatedContent"
        },
        {
            "name": "KeyTransportOrKEK",
            "baseName": "KeyTransportOrKEK",
            "type": "Array<any>"
        },
        {
            "name": "MAC",
            "baseName": "MAC",
            "type": "any"
        },
        {
            "name": "MACAlgorithm",
            "baseName": "MACAlgorithm",
            "type": "AlgorithmIdentifier"
        },
        {
            "name": "Version",
            "baseName": "Version",
            "type": "AuthenticatedData.VersionEnum"
        }    ];

    static getAttributeTypeMap() {
        return AuthenticatedData.attributeTypeMap;
    }
}

export namespace AuthenticatedData {
    export enum VersionEnum {
        V0 = <any> 'V0',
        V1 = <any> 'V1',
        V2 = <any> 'V2',
        V3 = <any> 'V3',
        V4 = <any> 'V4',
        V5 = <any> 'V5'
    }
}
