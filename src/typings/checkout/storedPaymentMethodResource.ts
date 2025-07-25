/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class StoredPaymentMethodResource {
    /**
    * The brand of the card.
    */
    "brand"?: string;
    /**
    * The month the card expires.
    */
    "expiryMonth"?: string;
    /**
    * The last two digits of the year the card expires. For example, **22** for the year 2022.
    */
    "expiryYear"?: string;
    /**
    * The response code returned by an external system (for example after a provisioning operation).
    */
    "externalResponseCode"?: string;
    /**
    * The token reference of a linked token in an external system (for example a network token reference).
    */
    "externalTokenReference"?: string;
    /**
    * The unique payment method code.
    */
    "holderName"?: string;
    /**
    * The IBAN of the bank account.
    */
    "iban"?: string;
    /**
    * A unique identifier of this stored payment method.
    */
    "id"?: string;
    /**
    * The name of the issuer of token or card.
    */
    "issuerName"?: string;
    /**
    * The last four digits of the PAN.
    */
    "lastFour"?: string;
    /**
    * The display name of the stored payment method.
    */
    "name"?: string;
    /**
    * Returned in the response if you are not tokenizing with Adyen and are using the Merchant-initiated transactions (MIT) framework from Mastercard or Visa.  This contains either the Mastercard Trace ID or the Visa Transaction ID.
    */
    "networkTxReference"?: string;
    /**
    * The name of the bank account holder.
    */
    "ownerName"?: string;
    /**
    * The shopper’s email address.
    */
    "shopperEmail"?: string;
    /**
    * Your reference to uniquely identify this shopper, for example user ID or account ID. The value is case-sensitive and must be at least three characters. > Your reference must not include personally identifiable information (PII) such as name or email address.
    */
    "shopperReference"?: string;
    /**
    * Defines a recurring payment type. Allowed values: * `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule. * `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction. * `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder\'s balance drops below a certain amount.
    */
    "supportedRecurringProcessingModels"?: Array<string>;
    /**
    * The type of payment method.
    */
    "type"?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "brand",
            "baseName": "brand",
            "type": "string",
            "format": ""
        },
        {
            "name": "expiryMonth",
            "baseName": "expiryMonth",
            "type": "string",
            "format": ""
        },
        {
            "name": "expiryYear",
            "baseName": "expiryYear",
            "type": "string",
            "format": ""
        },
        {
            "name": "externalResponseCode",
            "baseName": "externalResponseCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "externalTokenReference",
            "baseName": "externalTokenReference",
            "type": "string",
            "format": ""
        },
        {
            "name": "holderName",
            "baseName": "holderName",
            "type": "string",
            "format": ""
        },
        {
            "name": "iban",
            "baseName": "iban",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "issuerName",
            "baseName": "issuerName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastFour",
            "baseName": "lastFour",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "networkTxReference",
            "baseName": "networkTxReference",
            "type": "string",
            "format": ""
        },
        {
            "name": "ownerName",
            "baseName": "ownerName",
            "type": "string",
            "format": ""
        },
        {
            "name": "shopperEmail",
            "baseName": "shopperEmail",
            "type": "string",
            "format": ""
        },
        {
            "name": "shopperReference",
            "baseName": "shopperReference",
            "type": "string",
            "format": ""
        },
        {
            "name": "supportedRecurringProcessingModels",
            "baseName": "supportedRecurringProcessingModels",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StoredPaymentMethodResource.attributeTypeMap;
    }

    public constructor() {
    }
}

