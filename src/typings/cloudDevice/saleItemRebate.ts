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



export class SaleItemRebate {
    'EanUpc'?: string;
    'ItemAmount'?: number;
    'ItemID': number;
    'ProductCode': string;
    'Quantity'?: number;
    'RebateLabel'?: string;
    'UnitOfMeasure'?: SaleItemRebate.UnitOfMeasureEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "EanUpc",
            "baseName": "EanUpc",
            "type": "string"
        },
        {
            "name": "ItemAmount",
            "baseName": "ItemAmount",
            "type": "number"
        },
        {
            "name": "ItemID",
            "baseName": "ItemID",
            "type": "number"
        },
        {
            "name": "ProductCode",
            "baseName": "ProductCode",
            "type": "string"
        },
        {
            "name": "Quantity",
            "baseName": "Quantity",
            "type": "number"
        },
        {
            "name": "RebateLabel",
            "baseName": "RebateLabel",
            "type": "string"
        },
        {
            "name": "UnitOfMeasure",
            "baseName": "UnitOfMeasure",
            "type": "SaleItemRebate.UnitOfMeasureEnum"
        }    ];

    static getAttributeTypeMap() {
        return SaleItemRebate.attributeTypeMap;
    }
}

export namespace SaleItemRebate {
    export enum UnitOfMeasureEnum {
        Case = <any> 'Case',
        Centilitre = <any> 'Centilitre',
        Centimetre = <any> 'Centimetre',
        Foot = <any> 'Foot',
        Gram = <any> 'Gram',
        Inch = <any> 'Inch',
        Kilogram = <any> 'Kilogram',
        Kilometre = <any> 'Kilometre',
        Litre = <any> 'Litre',
        Meter = <any> 'Meter',
        Mile = <any> 'Mile',
        Other = <any> 'Other',
        Ounce = <any> 'Ounce',
        Pint = <any> 'Pint',
        Pound = <any> 'Pound',
        Quart = <any> 'Quart',
        UkGallon = <any> 'UKGallon',
        UsGallon = <any> 'USGallon',
        Yard = <any> 'Yard'
    }
}
