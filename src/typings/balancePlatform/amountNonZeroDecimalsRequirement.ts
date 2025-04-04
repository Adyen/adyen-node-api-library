/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class AmountNonZeroDecimalsRequirement {
    /**
    * Specifies for which routes the amount in a transfer request must have no non-zero decimal places, so the transfer can only be processed if the amount consists of round numbers.
    */
    'description'?: string;
    /**
    * **amountNonZeroDecimalsRequirement**
    */
    'type': AmountNonZeroDecimalsRequirement.TypeEnum = AmountNonZeroDecimalsRequirement.TypeEnum.AmountNonZeroDecimalsRequirement;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "AmountNonZeroDecimalsRequirement.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return AmountNonZeroDecimalsRequirement.attributeTypeMap;
    }
}

export namespace AmountNonZeroDecimalsRequirement {
    export enum TypeEnum {
        AmountNonZeroDecimalsRequirement = <any> 'amountNonZeroDecimalsRequirement'
    }
}
