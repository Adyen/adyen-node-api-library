/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class IssuingTransactionData {
    /**
    * captureCycleId associated with transfer event.
    */
    "captureCycleId"?: string;
    /**
    * The type of events data.   Possible values:    - **issuingTransactionData**: issuing transaction data
    */
    "type": IssuingTransactionData.TypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "captureCycleId",
            "baseName": "captureCycleId",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "IssuingTransactionData.TypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IssuingTransactionData.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace IssuingTransactionData {
    export enum TypeEnum {
        IssuingTransactionData = 'issuingTransactionData'
    }
}
