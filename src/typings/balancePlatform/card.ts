/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Authentication } from "./authentication";
import { CardConfiguration } from "./cardConfiguration";
import { DeliveryContact } from "./deliveryContact";
import { Expiry } from "./expiry";


export class Card {
    "authentication"?: Authentication;
    /**
    * The bank identification number (BIN) of the card number.
    */
    "bin"?: string;
    /**
    * The brand of the physical or the virtual card. Possible values: **visa**, **mc**.
    */
    "brand": string;
    /**
    * The brand variant of the physical or the virtual card. For example, **visadebit** or **mcprepaid**. >Reach out to your Adyen contact to get the values relevant for your integration.
    */
    "brandVariant": string;
    /**
    * The name of the cardholder.  Maximum length: 26 characters.
    */
    "cardholderName": string;
    "configuration"?: CardConfiguration;
    /**
    * The CVC2 value of the card. > The CVC2 is not sent by default. This is only returned in the `POST` response for single-use virtual cards.
    */
    "cvc"?: string;
    "deliveryContact"?: DeliveryContact;
    "expiration"?: Expiry;
    /**
    * The form factor of the card. Possible values: **virtual**, **physical**.
    */
    "formFactor": Card.FormFactorEnum;
    /**
    * Last last four digits of the card number.
    */
    "lastFour"?: string;
    /**
    * The primary account number (PAN) of the card. > The PAN is masked by default and returned only for single-use virtual cards.
    */
    "number": string;
    /**
    * Allocates a specific product range for either a physical or a virtual card. Possible values: **fullySupported**, **secureCorporate**. >Reach out to your Adyen contact to get the values relevant for your integration.
    */
    "threeDSecure"?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "authentication",
            "baseName": "authentication",
            "type": "Authentication",
            "format": ""
        },
        {
            "name": "bin",
            "baseName": "bin",
            "type": "string",
            "format": ""
        },
        {
            "name": "brand",
            "baseName": "brand",
            "type": "string",
            "format": ""
        },
        {
            "name": "brandVariant",
            "baseName": "brandVariant",
            "type": "string",
            "format": ""
        },
        {
            "name": "cardholderName",
            "baseName": "cardholderName",
            "type": "string",
            "format": ""
        },
        {
            "name": "configuration",
            "baseName": "configuration",
            "type": "CardConfiguration",
            "format": ""
        },
        {
            "name": "cvc",
            "baseName": "cvc",
            "type": "string",
            "format": ""
        },
        {
            "name": "deliveryContact",
            "baseName": "deliveryContact",
            "type": "DeliveryContact",
            "format": ""
        },
        {
            "name": "expiration",
            "baseName": "expiration",
            "type": "Expiry",
            "format": ""
        },
        {
            "name": "formFactor",
            "baseName": "formFactor",
            "type": "Card.FormFactorEnum",
            "format": ""
        },
        {
            "name": "lastFour",
            "baseName": "lastFour",
            "type": "string",
            "format": ""
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string",
            "format": ""
        },
        {
            "name": "threeDSecure",
            "baseName": "threeDSecure",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Card.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace Card {
    export enum FormFactorEnum {
        Physical = 'physical',
        Unknown = 'unknown',
        Virtual = 'virtual'
    }
}
