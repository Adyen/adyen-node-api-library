/*
 * The version of the OpenAPI document: v68
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class Installments {
    /**
    * Defines the bonus percentage, refund percentage or if the transaction is Buy now Pay later. Used for [card installments in Mexico](https://docs.adyen.com/payment-methods/cards/credit-card-installments/#getting-paid-mexico) 
    */
    "extra"?: number;
    /**
    * The installment plan, used for [card installments in Japan](https://docs.adyen.com/payment-methods/cards/credit-card-installments#make-a-payment-japan). and [Mexico](https://docs.adyen.com/payment-methods/cards/credit-card-installments/#getting-paid-mexico). By default, this is set to **regular**. 
    */
    "plan"?: Installments.PlanEnum;
    /**
    * Defines the number of installments. Usually, the maximum allowed number of installments is capped. For example, it may not be possible to split a payment in more than 24 installments. The acquirer sets this upper limit, so its value may vary. This value can be zero for Installments processed in Mexico.
    */
    "value": number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "extra",
            "baseName": "extra",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "plan",
            "baseName": "plan",
            "type": "Installments.PlanEnum",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return Installments.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace Installments {
    export enum PlanEnum {
        Bonus = 'bonus',
        BuynowPaylater = 'buynow_paylater',
        InteresRefundPrctg = 'interes_refund_prctg',
        InterestBonus = 'interest_bonus',
        NointeresRefundPrctg = 'nointeres_refund_prctg',
        NointerestBonus = 'nointerest_bonus',
        RefundPrctg = 'refund_prctg',
        Regular = 'regular',
        Revolving = 'revolving',
        WithInterest = 'with_interest'
    }
}
