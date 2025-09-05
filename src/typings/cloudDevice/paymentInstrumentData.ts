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


import { CardData } from './cardData';
import { CheckData } from './checkData';
import { MobileData } from './mobileData';
import { PaymentInstrumentType } from './paymentInstrumentType';

export class PaymentInstrumentData {
    'CardData'?: CardData;
    'CheckData'?: CheckData;
    'MobileData'?: MobileData;
    'PaymentInstrumentType': PaymentInstrumentType;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "CardData",
            "baseName": "CardData",
            "type": "CardData"
        },
        {
            "name": "CheckData",
            "baseName": "CheckData",
            "type": "CheckData"
        },
        {
            "name": "MobileData",
            "baseName": "MobileData",
            "type": "MobileData"
        },
        {
            "name": "PaymentInstrumentType",
            "baseName": "PaymentInstrumentType",
            "type": "PaymentInstrumentType"
        }    ];

    static getAttributeTypeMap() {
        return PaymentInstrumentData.attributeTypeMap;
    }
}

