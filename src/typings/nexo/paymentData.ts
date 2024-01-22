/*
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { CustomerOrder } from './customerOrder';
import { Instalment } from './instalment';
import { PaymentInstrumentData } from './paymentInstrumentData';
import { PaymentType } from './paymentType';
import { TransactionIDType } from './transactionIDType';

export class PaymentData {
    'PaymentType'?: PaymentType;
    'SplitPaymentFlag'?: boolean;
    'RequestedValidityDate'?: string;
    'CardAcquisitionReference'?: TransactionIDType;
    'Instalment'?: Instalment;
    'CustomerOrder'?: CustomerOrder;
    'PaymentInstrumentData'?: PaymentInstrumentData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "PaymentType",
            "baseName": "PaymentType",
            "type": "PaymentType"
        },
        {
            "name": "SplitPaymentFlag",
            "baseName": "SplitPaymentFlag",
            "type": "boolean"
        },
        {
            "name": "RequestedValidityDate",
            "baseName": "RequestedValidityDate",
            "type": "string"
        },
        {
            "name": "CardAcquisitionReference",
            "baseName": "CardAcquisitionReference",
            "type": "TransactionIDType"
        },
        {
            "name": "Instalment",
            "baseName": "Instalment",
            "type": "Instalment"
        },
        {
            "name": "CustomerOrder",
            "baseName": "CustomerOrder",
            "type": "CustomerOrder"
        },
        {
            "name": "PaymentInstrumentData",
            "baseName": "PaymentInstrumentData",
            "type": "PaymentInstrumentData"
        }    ];

    static getAttributeTypeMap() {
        return PaymentData.attributeTypeMap;
    }
}
