/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { TransactionDescriptionInfo } from './transactionDescriptionInfo';

export class NyceInfo {
    /**
    * The type of transactions processed over this payment method.  Allowed values: - **pos** for in-person payments.  - **billpay** for subscription payments, both the initial payment and the later recurring payments. These transactions have `recurringProcessingModel` **Subscription**.  - **ecom** for all other card not present transactions. This includes non-recurring transactions and transactions with `recurringProcessingModel` **CardOnFile** or **UnscheduledCardOnFile**. 
    */
    'processingType': NyceInfo.ProcessingTypeEnum;
    'transactionDescription'?: TransactionDescriptionInfo;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "processingType",
            "baseName": "processingType",
            "type": "NyceInfo.ProcessingTypeEnum"
        },
        {
            "name": "transactionDescription",
            "baseName": "transactionDescription",
            "type": "TransactionDescriptionInfo"
        }    ];

    static getAttributeTypeMap() {
        return NyceInfo.attributeTypeMap;
    }
}

export namespace NyceInfo {
    export enum ProcessingTypeEnum {
        Billpay = <any> 'billpay',
        Ecom = <any> 'ecom',
        Pos = <any> 'pos'
    }
}
