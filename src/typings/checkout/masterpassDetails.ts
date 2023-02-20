/*
 * The version of the OpenAPI document: v70
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class MasterpassDetails {
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**.
    */
    'fundingSource'?: MasterpassDetails.FundingSourceEnum;
    /**
    * The Masterpass transaction ID.
    */
    'masterpassTransactionId': string;
    /**
    * **masterpass**
    */
    'type'?: MasterpassDetails.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checkoutAttemptId",
            "baseName": "checkoutAttemptId",
            "type": "string"
        },
        {
            "name": "fundingSource",
            "baseName": "fundingSource",
            "type": "MasterpassDetails.FundingSourceEnum"
        },
        {
            "name": "masterpassTransactionId",
            "baseName": "masterpassTransactionId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "MasterpassDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return MasterpassDetails.attributeTypeMap;
    }
}

export namespace MasterpassDetails {
    export enum FundingSourceEnum {
        Debit = 'debit'
    }
    export enum TypeEnum {
        Masterpass = 'masterpass'
    }
}
