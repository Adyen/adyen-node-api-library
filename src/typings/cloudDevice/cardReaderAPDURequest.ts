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



export class CardReaderAPDURequest {
    'APDUClass': any | null;
    'APDUData'?: any | null;
    'APDUExpectedLength'?: any | null;
    'APDUInstruction': any | null;
    'APDUPar1': any | null;
    'APDUPar2': any | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "APDUClass",
            "baseName": "APDUClass",
            "type": "any"
        },
        {
            "name": "APDUData",
            "baseName": "APDUData",
            "type": "any"
        },
        {
            "name": "APDUExpectedLength",
            "baseName": "APDUExpectedLength",
            "type": "any"
        },
        {
            "name": "APDUInstruction",
            "baseName": "APDUInstruction",
            "type": "any"
        },
        {
            "name": "APDUPar1",
            "baseName": "APDUPar1",
            "type": "any"
        },
        {
            "name": "APDUPar2",
            "baseName": "APDUPar2",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return CardReaderAPDURequest.attributeTypeMap;
    }
}

