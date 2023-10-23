/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { TransactionDescriptionInfo } from './transactionDescriptionInfo';

export class CartesBancairesInfo {
    /**
    * Cartes Bancaires SIRET. Format: 14 digits.
    */
    'siret': string;
    'transactionDescription'?: TransactionDescriptionInfo;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "siret",
            "baseName": "siret",
            "type": "string"
        },
        {
            "name": "transactionDescription",
            "baseName": "transactionDescription",
            "type": "TransactionDescriptionInfo"
        }    ];

    static getAttributeTypeMap() {
        return CartesBancairesInfo.attributeTypeMap;
    }
}

