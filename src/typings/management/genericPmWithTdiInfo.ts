/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { TransactionDescriptionInfo } from "./transactionDescriptionInfo";


export class GenericPmWithTdiInfo {
    "transactionDescription"?: TransactionDescriptionInfo | null;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "transactionDescription",
            "baseName": "transactionDescription",
            "type": "TransactionDescriptionInfo | null",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GenericPmWithTdiInfo.attributeTypeMap;
    }

    public constructor() {
    }
}

