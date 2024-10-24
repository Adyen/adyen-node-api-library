/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class BacsDirectDebitDetails {
    /**
    * The bank account number (without separators).
    */
    'bankAccountNumber'?: string;
    /**
    * The bank routing number of the account.
    */
    'bankLocationId'?: string;
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    /**
    * The name of the bank account holder.
    */
    'holderName'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    *
	* @deprecated since Adyen Checkout API v49
	* Use `storedPaymentMethodId` instead.
    */
    'recurringDetailReference'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    /**
    * The unique identifier of your user\'s verified transfer instrument, which you can use to top up their balance accounts.
    */
    'transferInstrumentId'?: string;
    /**
    * **directdebit_GB**
    */
    'type'?: BacsDirectDebitDetails.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bankAccountNumber",
            "baseName": "bankAccountNumber",
            "type": "string"
        },
        {
            "name": "bankLocationId",
            "baseName": "bankLocationId",
            "type": "string"
        },
        {
            "name": "checkoutAttemptId",
            "baseName": "checkoutAttemptId",
            "type": "string"
        },
        {
            "name": "holderName",
            "baseName": "holderName",
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
            "name": "transferInstrumentId",
            "baseName": "transferInstrumentId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "BacsDirectDebitDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return BacsDirectDebitDetails.attributeTypeMap;
    }
}

export namespace BacsDirectDebitDetails {
    export enum TypeEnum {
        DirectdebitGb = 'directdebit_GB'
    }
}
