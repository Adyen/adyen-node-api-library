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
import { Signer } from './signer';

export class SignedData {
    'Certificate'?: Array<any>;
    'DigestAlgorithm': Array<AlgorithmIdentifier>;
    'EncapsulatedContent': EncapsulatedContent;
    'Signer': Array<Signer>;
    'Version'?: SignedData.VersionEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "Certificate",
            "baseName": "Certificate",
            "type": "Array<any>"
        },
        {
            "name": "DigestAlgorithm",
            "baseName": "DigestAlgorithm",
            "type": "Array<AlgorithmIdentifier>"
        },
        {
            "name": "EncapsulatedContent",
            "baseName": "EncapsulatedContent",
            "type": "EncapsulatedContent"
        },
        {
            "name": "Signer",
            "baseName": "Signer",
            "type": "Array<Signer>"
        },
        {
            "name": "Version",
            "baseName": "Version",
            "type": "SignedData.VersionEnum"
        }    ];

    static getAttributeTypeMap() {
        return SignedData.attributeTypeMap;
    }
}

export namespace SignedData {
    export enum VersionEnum {
        V0 = <any> 'V0',
        V1 = <any> 'V1',
        V2 = <any> 'V2',
        V3 = <any> 'V3',
        V4 = <any> 'V4',
        V5 = <any> 'V5'
    }
}
