/*
 * The version of the OpenAPI document: v70
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class SepaDirectDebitDetails {
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * The International Bank Account Number (IBAN).
    */
    'iban': string;
    /**
    * The name of the bank account holder.
    */
    'ownerName': string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'recurringDetailReference'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    /**
    * **sepadirectdebit**
    */
    'type'?: SepaDirectDebitDetails.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checkoutAttemptId",
            "baseName": "checkoutAttemptId",
            "type": "string"
        },
        {
            "name": "iban",
            "baseName": "iban",
            "type": "string"
        },
        {
            "name": "ownerName",
            "baseName": "ownerName",
            "type": "string"
        },
        {
            "name": "recurringDetailReference",
            "baseName": "recurringDetailReference",
            "type": "string"
        },
        {
            "name": "storedPaymentMethodId",
            "baseName": "storedPaymentMethodId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SepaDirectDebitDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return SepaDirectDebitDetails.attributeTypeMap;
    }
}

export namespace SepaDirectDebitDetails {
    export enum TypeEnum {
        Sepadirectdebit = 'sepadirectdebit',
        SepadirectdebitAmazonpay = 'sepadirectdebit_amazonpay'
    }
}
