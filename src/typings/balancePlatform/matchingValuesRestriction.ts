/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class MatchingValuesRestriction {
    /**
    * Defines how the condition must be evaluated.
    */
    'operation': string;
    'value'?: Array<MatchingValuesRestriction.ValueEnum>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "operation",
            "baseName": "operation",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "Array<MatchingValuesRestriction.ValueEnum>"
        }    ];

    static getAttributeTypeMap() {
        return MatchingValuesRestriction.attributeTypeMap;
    }
}

export namespace MatchingValuesRestriction {
    export enum ValueEnum {
        AcquirerId = <any> 'acquirerId',
        Amount = <any> 'amount',
        Currency = <any> 'currency',
        MerchantId = <any> 'merchantId',
        MerchantName = <any> 'merchantName'
    }
}
