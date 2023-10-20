/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { BcmcInfo } from './bcmcInfo';
import { CartesBancairesInfo } from './cartesBancairesInfo';
import { GenericPmWithTdiInfo } from './genericPmWithTdiInfo';

export class UpdatePaymentMethodInfo {
    'bcmc'?: BcmcInfo;
    'cartesBancaires'?: CartesBancairesInfo;
    /**
    * The list of countries where a payment method is available. By default, all countries supported by the payment method.
    */
    'countries'?: Array<string>;
    'cup'?: GenericPmWithTdiInfo;
    /**
    * The list of currencies that a payment method supports. By default, all currencies supported by the payment method.
    */
    'currencies'?: Array<string>;
    'diners'?: GenericPmWithTdiInfo;
    'discover'?: GenericPmWithTdiInfo;
    'eftpos_australia'?: GenericPmWithTdiInfo;
    /**
    * Indicates whether the payment method is enabled (**true**) or disabled (**false**).
    */
    'enabled'?: boolean;
    'girocard'?: GenericPmWithTdiInfo;
    'ideal'?: GenericPmWithTdiInfo;
    'interac_card'?: GenericPmWithTdiInfo;
    'jcb'?: GenericPmWithTdiInfo;
    'maestro'?: GenericPmWithTdiInfo;
    'mc'?: GenericPmWithTdiInfo;
    /**
    * The list of stores for this payment method
    */
    'storeIds'?: Array<string>;
    'visa'?: GenericPmWithTdiInfo;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bcmc",
            "baseName": "bcmc",
            "type": "BcmcInfo"
        },
        {
            "name": "cartesBancaires",
            "baseName": "cartesBancaires",
            "type": "CartesBancairesInfo"
        },
        {
            "name": "countries",
            "baseName": "countries",
            "type": "Array<string>"
        },
        {
            "name": "cup",
            "baseName": "cup",
            "type": "GenericPmWithTdiInfo"
        },
        {
            "name": "currencies",
            "baseName": "currencies",
            "type": "Array<string>"
        },
        {
            "name": "diners",
            "baseName": "diners",
            "type": "GenericPmWithTdiInfo"
        },
        {
            "name": "discover",
            "baseName": "discover",
            "type": "GenericPmWithTdiInfo"
        },
        {
            "name": "eftpos_australia",
            "baseName": "eftpos_australia",
            "type": "GenericPmWithTdiInfo"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "girocard",
            "baseName": "girocard",
            "type": "GenericPmWithTdiInfo"
        },
        {
            "name": "ideal",
            "baseName": "ideal",
            "type": "GenericPmWithTdiInfo"
        },
        {
            "name": "interac_card",
            "baseName": "interac_card",
            "type": "GenericPmWithTdiInfo"
        },
        {
            "name": "jcb",
            "baseName": "jcb",
            "type": "GenericPmWithTdiInfo"
        },
        {
            "name": "maestro",
            "baseName": "maestro",
            "type": "GenericPmWithTdiInfo"
        },
        {
            "name": "mc",
            "baseName": "mc",
            "type": "GenericPmWithTdiInfo"
        },
        {
            "name": "storeIds",
            "baseName": "storeIds",
            "type": "Array<string>"
        },
        {
            "name": "visa",
            "baseName": "visa",
            "type": "GenericPmWithTdiInfo"
        }    ];

    static getAttributeTypeMap() {
        return UpdatePaymentMethodInfo.attributeTypeMap;
    }
}

