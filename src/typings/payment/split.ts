/*
 * The version of the OpenAPI document: v68
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { SplitAmount } from './splitAmount';

export class Split {
    /**
    * Unique identifier of the account where the split amount should be sent. This is required if `type` is **MarketPlace** or **BalanceAccount**.  
    */
    'account'?: string;
    'amount': SplitAmount;
    /**
    * A description of this split.
    */
    'description'?: string;
    /**
    * Your reference for the split, which you can use to link the split to other operations such as captures and refunds.  This is required if `type` is **MarketPlace** or **BalanceAccount**. For the other types, we also recommend sending a reference so you can reconcile the split and the associated payment in the transaction overview and in the reports. If the reference is not provided, the split is reported as part of the aggregated [TransferBalance record type](https://docs.adyen.com/reporting/marketpay-payments-accounting-report) in Adyen for Platforms.
    */
    'reference'?: string;
    /**
    * The type of split. Possible values: **Default**, **PaymentFee**, **VAT**, **Commission**, **MarketPlace**, **BalanceAccount**, **Remainder**, **Surcharge**, **Tip**.
    */
    'type': Split.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "SplitAmount"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "Split.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return Split.attributeTypeMap;
    }
}

export namespace Split {
    export enum TypeEnum {
        BalanceAccount = 'BalanceAccount',
        Commission = 'Commission',
        Default = 'Default',
        MarketPlace = 'MarketPlace',
        PaymentFee = 'PaymentFee',
        PaymentFeeAcquiring = 'PaymentFeeAcquiring',
        PaymentFeeAdyen = 'PaymentFeeAdyen',
        PaymentFeeAdyenCommission = 'PaymentFeeAdyenCommission',
        PaymentFeeAdyenMarkup = 'PaymentFeeAdyenMarkup',
        PaymentFeeInterchange = 'PaymentFeeInterchange',
        PaymentFeeSchemeFee = 'PaymentFeeSchemeFee',
        Remainder = 'Remainder',
        Surcharge = 'Surcharge',
        Tip = 'Tip',
        Vat = 'VAT',
        Verification = 'Verification'
    }
}
