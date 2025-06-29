/*
 * The version of the OpenAPI document: v68
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from "./amount";


export class NotifyShopperRequest {
    "amount": Amount;
    /**
    * Date on which the subscription amount will be debited from the shopper. In YYYY-MM-DD format
    */
    "billingDate"?: string;
    /**
    * Sequence of the debit. Depends on Frequency and Billing Attempts Rule.
    */
    "billingSequenceNumber"?: string;
    /**
    * Reference of Pre-debit notification that is displayed to the shopper. Optional field. Maps to reference if missing
    */
    "displayedReference"?: string;
    /**
    * The merchant account identifier with which you want to process the transaction.
    */
    "merchantAccount": string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    "recurringDetailReference"?: string;
    /**
    * Pre-debit notification reference sent by the merchant. This is a mandatory field
    */
    "reference": string;
    /**
    * The ID that uniquely identifies the shopper.  This `shopperReference` must be the same as the `shopperReference` used in the initial payment.
    */
    "shopperReference": string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    "storedPaymentMethodId"?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount",
            "format": ""
        },
        {
            "name": "billingDate",
            "baseName": "billingDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "billingSequenceNumber",
            "baseName": "billingSequenceNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayedReference",
            "baseName": "displayedReference",
            "type": "string",
            "format": ""
        },
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string",
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
            "name": "shopperReference",
            "baseName": "shopperReference",
            "type": "string",
            "format": ""
        },
        {
            "name": "storedPaymentMethodId",
            "baseName": "storedPaymentMethodId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NotifyShopperRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

