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


import { CardAcquisitionResponse } from './cardAcquisitionResponse';
import { CardReaderAPDUResponse } from './cardReaderAPDUResponse';
import { LoyaltyResponse } from './loyaltyResponse';
import { PaymentResponse } from './paymentResponse';
import { ReversalResponse } from './reversalResponse';
import { StoredValueResponse } from './storedValueResponse';

export class RepeatedResponseMessageBody {
    'CardAcquisitionResponse'?: CardAcquisitionResponse;
    'CardReaderAPDUResponse'?: CardReaderAPDUResponse;
    'LoyaltyResponse'?: LoyaltyResponse;
    'PaymentResponse'?: PaymentResponse;
    'ReversalResponse'?: ReversalResponse;
    'StoredValueResponse'?: StoredValueResponse;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "CardAcquisitionResponse",
            "baseName": "CardAcquisitionResponse",
            "type": "CardAcquisitionResponse"
        },
        {
            "name": "CardReaderAPDUResponse",
            "baseName": "CardReaderAPDUResponse",
            "type": "CardReaderAPDUResponse"
        },
        {
            "name": "LoyaltyResponse",
            "baseName": "LoyaltyResponse",
            "type": "LoyaltyResponse"
        },
        {
            "name": "PaymentResponse",
            "baseName": "PaymentResponse",
            "type": "PaymentResponse"
        },
        {
            "name": "ReversalResponse",
            "baseName": "ReversalResponse",
            "type": "ReversalResponse"
        },
        {
            "name": "StoredValueResponse",
            "baseName": "StoredValueResponse",
            "type": "StoredValueResponse"
        }    ];

    static getAttributeTypeMap() {
        return RepeatedResponseMessageBody.attributeTypeMap;
    }
}

