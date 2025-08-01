/*
 * The version of the OpenAPI document: v46
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from "./amount";


export class StoredValueStatusChangeRequest {
    "amount"?: Amount | null;
    /**
    * The merchant account identifier, with which you want to process the transaction.
    */
    "merchantAccount": string;
    /**
    * The collection that contains the type of the payment method and its specific information if available
    */
    "paymentMethod": { [key: string]: string; };
    "recurringDetailReference"?: string;
    /**
    * The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement. If you need to provide multiple references for a transaction, separate them with hyphens (\"-\"). Maximum length: 80 characters.
    */
    "reference": string;
    /**
    * Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer. For the web service API, Adyen assumes Ecommerce shopper interaction by default.  This field has the following possible values: * `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request. * `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment). * `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone. * `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.
    */
    "shopperInteraction"?: StoredValueStatusChangeRequest.ShopperInteractionEnum;
    "shopperReference"?: string;
    /**
    * The status you want to change to
    */
    "status": StoredValueStatusChangeRequest.StatusEnum;
    /**
    * The physical store, for which this payment is processed.
    */
    "store"?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount | null",
            "format": ""
        },
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string",
            "format": ""
        },
        {
            "name": "paymentMethod",
            "baseName": "paymentMethod",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "recurringDetailReference",
            "baseName": "recurringDetailReference",
            "type": "string",
            "format": ""
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string",
            "format": ""
        },
        {
            "name": "shopperInteraction",
            "baseName": "shopperInteraction",
            "type": "StoredValueStatusChangeRequest.ShopperInteractionEnum",
            "format": ""
        },
        {
            "name": "shopperReference",
            "baseName": "shopperReference",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "StoredValueStatusChangeRequest.StatusEnum",
            "format": ""
        },
        {
            "name": "store",
            "baseName": "store",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StoredValueStatusChangeRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace StoredValueStatusChangeRequest {
    export enum ShopperInteractionEnum {
        Ecommerce = 'Ecommerce',
        ContAuth = 'ContAuth',
        Moto = 'Moto',
        Pos = 'POS'
    }
    export enum StatusEnum {
        Active = 'active',
        Inactive = 'inactive'
    }
}
