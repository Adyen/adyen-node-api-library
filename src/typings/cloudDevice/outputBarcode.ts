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


export class OutputBarcode {
    'BarcodeType'?: OutputBarcode.BarcodeTypeEnum;
    'BarcodeValue'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "BarcodeType",
            "baseName": "BarcodeType",
            "type": "OutputBarcode.BarcodeTypeEnum"
        },
        {
            "name": "BarcodeValue",
            "baseName": "BarcodeValue",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return OutputBarcode.attributeTypeMap;
    }
}

export namespace OutputBarcode {
    export enum BarcodeTypeEnum {
        Code128 = <any> 'Code128',
        Code25 = <any> 'Code25',
        Ean13 = <any> 'EAN13',
        Ean8 = <any> 'EAN8',
        Pdf417 = <any> 'PDF417',
        Qrcode = <any> 'QRCode',
        Upca = <any> 'UPCA'
    }
}
