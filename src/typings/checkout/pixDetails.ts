/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { PixRecurring } from './pixRecurring';

export class PixDetails {
    /**
    * The checkout attempt identifier.
    */
    'checkoutAttemptId'?: string;
    'pixRecurring'?: PixRecurring | null;
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
    * The payment method type.
    */
    'type'?: PixDetails.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "checkoutAttemptId",
            "baseName": "checkoutAttemptId",
            "type": "string"
        },
        {
            "name": "pixRecurring",
            "baseName": "pixRecurring",
            "type": "PixRecurring | null"
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
            "type": "PixDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PixDetails.attributeTypeMap;
    }
}

export namespace PixDetails {
    export enum TypeEnum {
        Pix = 'pix'
    }
}
