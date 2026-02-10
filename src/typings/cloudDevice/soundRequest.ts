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


import { SoundActionType } from './soundActionType';
import { SoundContent } from './soundContent';

export class SoundRequest {
    'ResponseMode'?: SoundRequest.ResponseModeEnum;
    'SoundAction': SoundActionType;
    'SoundContent': SoundContent;
    'SoundVolume'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "ResponseMode",
            "baseName": "ResponseMode",
            "type": "SoundRequest.ResponseModeEnum"
        },
        {
            "name": "SoundAction",
            "baseName": "SoundAction",
            "type": "SoundActionType"
        },
        {
            "name": "SoundContent",
            "baseName": "SoundContent",
            "type": "SoundContent"
        },
        {
            "name": "SoundVolume",
            "baseName": "SoundVolume",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return SoundRequest.attributeTypeMap;
    }
}

export namespace SoundRequest {
    export enum ResponseModeEnum {
        Immediate = <any> 'Immediate',
        NotRequired = <any> 'NotRequired',
        PrintEnd = <any> 'PrintEnd',
        SoundEnd = <any> 'SoundEnd'
    }
}
