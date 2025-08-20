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
import { SignerIdentifier } from './signerIdentifier';

export class Signer {
    'DigestAlgorithm': AlgorithmIdentifier;
    'Signature': any | null;
    'SignatureAlgorithm': AlgorithmIdentifier;
    'SignerIdentifier': SignerIdentifier;
    'Version'?: Signer.VersionEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "DigestAlgorithm",
            "baseName": "DigestAlgorithm",
            "type": "AlgorithmIdentifier"
        },
        {
            "name": "Signature",
            "baseName": "Signature",
            "type": "any"
        },
        {
            "name": "SignatureAlgorithm",
            "baseName": "SignatureAlgorithm",
            "type": "AlgorithmIdentifier"
        },
        {
            "name": "SignerIdentifier",
            "baseName": "SignerIdentifier",
            "type": "SignerIdentifier"
        },
        {
            "name": "Version",
            "baseName": "Version",
            "type": "Signer.VersionEnum"
        }    ];

    static getAttributeTypeMap() {
        return Signer.attributeTypeMap;
    }
}

export namespace Signer {
    export enum VersionEnum {
        V0 = <any> 'V0',
        V1 = <any> 'V1',
        V2 = <any> 'V2',
        V3 = <any> 'V3',
        V4 = <any> 'V4',
        V5 = <any> 'V5'
    }
}
