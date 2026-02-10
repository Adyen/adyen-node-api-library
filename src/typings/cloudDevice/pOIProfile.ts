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



export class POIProfile {
    'GenericProfile'?: POIProfile.GenericProfileEnum;
    'ServiceProfiles'?: Array<POIProfile.ServiceProfilesEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "GenericProfile",
            "baseName": "GenericProfile",
            "type": "POIProfile.GenericProfileEnum"
        },
        {
            "name": "ServiceProfiles",
            "baseName": "ServiceProfiles",
            "type": "Array<POIProfile.ServiceProfilesEnum>"
        }    ];

    static getAttributeTypeMap() {
        return POIProfile.attributeTypeMap;
    }
}

export namespace POIProfile {
    export enum GenericProfileEnum {
        Basic = <any> 'Basic',
        Extended = <any> 'Extended',
        Standard = <any> 'Standard'
    }
    export enum ServiceProfilesEnum {
        Batch = <any> 'Batch',
        CardReader = <any> 'CardReader',
        Communication = <any> 'Communication',
        Loyalty = <any> 'Loyalty',
        OneTimeRes = <any> 'OneTimeRes',
        Pin = <any> 'PIN',
        Reservation = <any> 'Reservation',
        Sound = <any> 'Sound',
        StoredValue = <any> 'StoredValue',
        Synchro = <any> 'Synchro'
    }
}
