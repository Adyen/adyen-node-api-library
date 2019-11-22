/**
 * Adyen Payout API
 * A set of API endpoints that allow you to store payout details, confirm, or decline a payout.  For more information, refer to [Online payouts](https://docs.adyen.com/checkout/online-payouts).
 *
 * The version of the OpenAPI document: 51
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class Card {
    /**
    * The [card verification code](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-security-code-cvc-cvv-cid) (1-20 characters). Depending on the card brand, it is known also as: * CVV2/CVC2 – length: 3 digits * CID – length: 4 digits > If you are using [Client-Side Encryption](https://docs.adyen.com/classic-integration/cse-integration-ecommerce), the CVC code is present in the encrypted data. You must never post the card details to the server. > This field must be always present in a [one-click payment request](https://docs.adyen.com/classic-integration/recurring-payments). > When this value is returned in a response, it is always empty because it is not stored.
    */
    'cvc'?: string;
    /**
    * The card expiry month. Format: 2 digits, zero-padded for single digits. For example: * 03 = March * 11 = November
    */
    'expiryMonth': string;
    /**
    * The card expiry year. Format: 4 digits. For example: 2020
    */
    'expiryYear': string;
    /**
    * The name of the cardholder, as printed on the card.
    */
    'holderName': string;
    /**
    * The issue number of the card (for some UK debit cards only).
    */
    'issueNumber'?: string;
    /**
    * The card number (4-19 characters). Do not use any separators. When this value is returned in a response, only the last 4 digits of the card number are returned.
    */
    'number': string;
    /**
    * The month component of the start date (for some UK debit cards only).
    */
    'startMonth'?: string;
    /**
    * The year component of the start date (for some UK debit cards only).
    */
    'startYear'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cvc",
            "baseName": "cvc",
            "type": "string"
        },
        {
            "name": "expiryMonth",
            "baseName": "expiryMonth",
            "type": "string"
        },
        {
            "name": "expiryYear",
            "baseName": "expiryYear",
            "type": "string"
        },
        {
            "name": "holderName",
            "baseName": "holderName",
            "type": "string"
        },
        {
            "name": "issueNumber",
            "baseName": "issueNumber",
            "type": "string"
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string"
        },
        {
            "name": "startMonth",
            "baseName": "startMonth",
            "type": "string"
        },
        {
            "name": "startYear",
            "baseName": "startYear",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Card.attributeTypeMap;
    }
}

