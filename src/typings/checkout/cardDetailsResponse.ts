/*
 * The version of the OpenAPI document: v70
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { CardBrandDetails } from './cardBrandDetails';

export class CardDetailsResponse {
    /**
    * The list of brands identified for the card.
    */
    'brands'?: Array<CardBrandDetails>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "brands",
            "baseName": "brands",
            "type": "Array<CardBrandDetails>"
        }    ];

    static getAttributeTypeMap() {
        return CardDetailsResponse.attributeTypeMap;
    }
}

