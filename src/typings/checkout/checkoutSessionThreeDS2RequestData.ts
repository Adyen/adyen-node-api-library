/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Phone } from './phone';

export class CheckoutSessionThreeDS2RequestData {
    'homePhone'?: Phone;
    'mobilePhone'?: Phone;
    /**
    * Indicates whether a challenge is requested for this transaction. Possible values: * **01** — No preference * **02** — No challenge requested * **03** — Challenge requested (3DS Requestor preference) * **04** — Challenge requested (Mandate) * **05** — No challenge (transactional risk analysis is already performed) * **06** — Data Only
    */
    'threeDSRequestorChallengeInd'?: CheckoutSessionThreeDS2RequestData.ThreeDSRequestorChallengeIndEnum;
    'workPhone'?: Phone;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "homePhone",
            "baseName": "homePhone",
            "type": "Phone"
        },
        {
            "name": "mobilePhone",
            "baseName": "mobilePhone",
            "type": "Phone"
        },
        {
            "name": "threeDSRequestorChallengeInd",
            "baseName": "threeDSRequestorChallengeInd",
            "type": "CheckoutSessionThreeDS2RequestData.ThreeDSRequestorChallengeIndEnum"
        },
        {
            "name": "workPhone",
            "baseName": "workPhone",
            "type": "Phone"
        }    ];

    static getAttributeTypeMap() {
        return CheckoutSessionThreeDS2RequestData.attributeTypeMap;
    }
}

export namespace CheckoutSessionThreeDS2RequestData {
    export enum ThreeDSRequestorChallengeIndEnum {
        _01 = <any> '01',
        _02 = <any> '02',
        _03 = <any> '03',
        _04 = <any> '04',
        _05 = <any> '05',
        _06 = <any> '06'
    }
}
