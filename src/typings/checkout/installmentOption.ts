/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class InstallmentOption {
    /**
    * The maximum number of installments offered for this payment method.
    */
    'maxValue'?: number;
    /**
    * Defines the type of installment plan. If not set, defaults to **regular**.  Possible values: * **regular** * **revolving**
    */
    'plans'?: Array<InstallmentOption.PlansEnum>;
    /**
    * Preselected number of installments offered for this payment method.
    */
    'preselectedValue'?: number;
    /**
    * An array of the number of installments that the shopper can choose from. For example, **[2,3,5]**. This cannot be specified simultaneously with `maxValue`.
    */
    'values'?: Array<number>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "maxValue",
            "baseName": "maxValue",
            "type": "number"
        },
        {
            "name": "plans",
            "baseName": "plans",
            "type": "Array<InstallmentOption.PlansEnum>"
        },
        {
            "name": "preselectedValue",
            "baseName": "preselectedValue",
            "type": "number"
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<number>"
        }    ];

    static getAttributeTypeMap() {
        return InstallmentOption.attributeTypeMap;
    }
}

export namespace InstallmentOption {
    export enum PlansEnum {
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
