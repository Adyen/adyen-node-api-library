/*
 * The version of the OpenAPI document: v68
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';
import { PlatformChargebackLogic } from './platformChargebackLogic';

export class DonationRequest {
    /**
    * The Adyen account name of the charity.
    */
    'donationAccount': string;
    /**
    * The merchant account that is used to process the payment.
    */
    'merchantAccount': string;
    'modificationAmount': Amount;
    /**
    * The original pspReference of the payment to modify. This reference is returned in: * authorisation response * authorisation notification  
    */
    'originalReference'?: string;
    'platformChargebackLogic'?: PlatformChargebackLogic;
    /**
    * Your reference for the payment modification. This reference is visible in Customer Area and in reports. Maximum length: 80 characters.
    */
    'reference'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "donationAccount",
            "baseName": "donationAccount",
            "type": "string"
        },
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string"
        },
        {
            "name": "modificationAmount",
            "baseName": "modificationAmount",
            "type": "Amount"
        },
        {
            "name": "originalReference",
            "baseName": "originalReference",
            "type": "string"
        },
        {
            "name": "platformChargebackLogic",
            "baseName": "platformChargebackLogic",
            "type": "PlatformChargebackLogic"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DonationRequest.attributeTypeMap;
    }
}

