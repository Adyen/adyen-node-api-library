/*
 * The version of the OpenAPI document: v71
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
    'extra'?: number;
    /**
    * The installment plan, used for [card installments in Japan](https://docs.adyen.com/payment-methods/cards/credit-card-installments#make-a-payment-japan). and [Mexico](https://docs.adyen.com/payment-methods/cards/credit-card-installments/#getting-paid-mexico). By default, this is set to **regular**. 
    */
    'plan'?: Installments.PlanEnum;
    /**
    * Defines the number of installments. Usually, the maximum allowed number of installments is capped. For example, it may not be possible to split a payment in more than 24 installments. The acquirer sets this upper limit, so its value may vary. This value can be zero for Installments processed in Mexico.
    */
    'value': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "extra",
            "baseName": "extra",
            "type": "number"
        },
        {
            "name": "plan",
            "baseName": "plan",
            "type": "Installments.PlanEnum"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return Installments.attributeTypeMap;
    }
}

export namespace Installments {
    export enum PlanEnum {
        Bonus = <any> 'bonus',
        BuynowPaylater = <any> 'buynow_paylater',
        InteresRefundPrctg = <any> 'interes_refund_prctg',
        InterestBonus = <any> 'interest_bonus',
        NointeresRefundPrctg = <any> 'nointeres_refund_prctg',
        NointerestBonus = <any> 'nointerest_bonus',
        RefundPrctg = <any> 'refund_prctg',
        Regular = <any> 'regular',
        Revolving = <any> 'revolving',
        WithInterest = <any> 'with_interest'
    }
}
