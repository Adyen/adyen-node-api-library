/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AccelInfo } from "./accelInfo";
import { BcmcInfo } from "./bcmcInfo";
import { CartesBancairesInfo } from "./cartesBancairesInfo";
import { GenericPmWithTdiInfo } from "./genericPmWithTdiInfo";
import { NyceInfo } from "./nyceInfo";
import { PayByBankPlaidInfo } from "./payByBankPlaidInfo";
import { PulseInfo } from "./pulseInfo";
import { StarInfo } from "./starInfo";


export class UpdatePaymentMethodInfo {
    "accel"?: AccelInfo;
    "bcmc"?: BcmcInfo;
    "cartesBancaires"?: CartesBancairesInfo;
    /**
    * The list of countries where a payment method is available. By default, all countries supported by the payment method.
    */
    "countries"?: Array<string>;
    "cup"?: GenericPmWithTdiInfo;
    /**
    * The list of currencies that a payment method supports. By default, all currencies supported by the payment method.
    */
    "currencies"?: Array<string>;
    /**
    * Custom routing flags for acquirer routing.
    */
    "customRoutingFlags"?: Array<string>;
    "diners"?: GenericPmWithTdiInfo;
    "discover"?: GenericPmWithTdiInfo;
    "eft_directdebit_CA"?: GenericPmWithTdiInfo;
    "eftpos_australia"?: GenericPmWithTdiInfo;
    /**
    * Indicates whether the payment method is enabled (**true**) or disabled (**false**).
    */
    "enabled"?: boolean;
    "girocard"?: GenericPmWithTdiInfo;
    "ideal"?: GenericPmWithTdiInfo;
    "interac_card"?: GenericPmWithTdiInfo;
    "jcb"?: GenericPmWithTdiInfo;
    "maestro"?: GenericPmWithTdiInfo;
    "mc"?: GenericPmWithTdiInfo;
    "nyce"?: NyceInfo;
    "paybybank_plaid"?: PayByBankPlaidInfo;
    "pulse"?: PulseInfo;
    "star"?: StarInfo;
    /**
    * The store for this payment method
    */
    "storeId"?: string;
    /**
    * The list of stores for this payment method
    *
	* @deprecated since Management API v3
	* Use `storeId` instead. Only one store per payment method is allowed.
    */
    "storeIds"?: Array<string>;
    "visa"?: GenericPmWithTdiInfo;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accel",
            "baseName": "accel",
            "type": "AccelInfo",
            "format": ""
        },
        {
            "name": "bcmc",
            "baseName": "bcmc",
            "type": "BcmcInfo",
            "format": ""
        },
        {
            "name": "cartesBancaires",
            "baseName": "cartesBancaires",
            "type": "CartesBancairesInfo",
            "format": ""
        },
        {
            "name": "countries",
            "baseName": "countries",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "cup",
            "baseName": "cup",
            "type": "GenericPmWithTdiInfo",
            "format": ""
        },
        {
            "name": "currencies",
            "baseName": "currencies",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "customRoutingFlags",
            "baseName": "customRoutingFlags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "diners",
            "baseName": "diners",
            "type": "GenericPmWithTdiInfo",
            "format": ""
        },
        {
            "name": "discover",
            "baseName": "discover",
            "type": "GenericPmWithTdiInfo",
            "format": ""
        },
        {
            "name": "eft_directdebit_CA",
            "baseName": "eft_directdebit_CA",
            "type": "GenericPmWithTdiInfo",
            "format": ""
        },
        {
            "name": "eftpos_australia",
            "baseName": "eftpos_australia",
            "type": "GenericPmWithTdiInfo",
            "format": ""
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "girocard",
            "baseName": "girocard",
            "type": "GenericPmWithTdiInfo",
            "format": ""
        },
        {
            "name": "ideal",
            "baseName": "ideal",
            "type": "GenericPmWithTdiInfo",
            "format": ""
        },
        {
            "name": "interac_card",
            "baseName": "interac_card",
            "type": "GenericPmWithTdiInfo",
            "format": ""
        },
        {
            "name": "jcb",
            "baseName": "jcb",
            "type": "GenericPmWithTdiInfo",
            "format": ""
        },
        {
            "name": "maestro",
            "baseName": "maestro",
            "type": "GenericPmWithTdiInfo",
            "format": ""
        },
        {
            "name": "mc",
            "baseName": "mc",
            "type": "GenericPmWithTdiInfo",
            "format": ""
        },
        {
            "name": "nyce",
            "baseName": "nyce",
            "type": "NyceInfo",
            "format": ""
        },
        {
            "name": "paybybank_plaid",
            "baseName": "paybybank_plaid",
            "type": "PayByBankPlaidInfo",
            "format": ""
        },
        {
            "name": "pulse",
            "baseName": "pulse",
            "type": "PulseInfo",
            "format": ""
        },
        {
            "name": "star",
            "baseName": "star",
            "type": "StarInfo",
            "format": ""
        },
        {
            "name": "storeId",
            "baseName": "storeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "storeIds",
            "baseName": "storeIds",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "visa",
            "baseName": "visa",
            "type": "GenericPmWithTdiInfo",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UpdatePaymentMethodInfo.attributeTypeMap;
    }

    public constructor() {
    }
}

