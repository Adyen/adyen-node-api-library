/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { CardIdentification } from './cardIdentification';
import { PartyIdentification } from './partyIdentification';

export class Card {
    'cardHolder': PartyIdentification;
    'cardIdentification': CardIdentification;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cardHolder",
            "baseName": "cardHolder",
            "type": "PartyIdentification"
        },
        {
            "name": "cardIdentification",
            "baseName": "cardIdentification",
            "type": "CardIdentification"
        }    ];

    static getAttributeTypeMap() {
        return Card.attributeTypeMap;
    }
}

