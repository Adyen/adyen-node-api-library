/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { PaymentAcquirerData } from './paymentAcquirerData';
import { PaymentInstrumentData } from './paymentInstrumentData';

export class PaymentAccountStatus {
    'PaymentInstrumentData'?: PaymentInstrumentData;
    'CurrentBalance'?: number;
    'Currency'?: string;
    'PaymentAcquirerData'?: PaymentAcquirerData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "PaymentInstrumentData",
            "baseName": "PaymentInstrumentData",
            "type": "PaymentInstrumentData"
        },
        {
            "name": "CurrentBalance",
            "baseName": "CurrentBalance",
            "type": "number"
        },
        {
            "name": "Currency",
            "baseName": "Currency",
            "type": "string"
        },
        {
            "name": "PaymentAcquirerData",
            "baseName": "PaymentAcquirerData",
            "type": "PaymentAcquirerData"
        }    ];

    static getAttributeTypeMap() {
        return PaymentAccountStatus.attributeTypeMap;
    }
}

