/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class SweepCounterparty {
    /**
    * The unique identifier of the destination or source [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).   You can only use this for periodic sweep schedules such as `schedule.type` **daily** or **monthly**.
    */
    'balanceAccountId'?: string;
    /**
    * The merchant account that will be the source of funds.  You can only use this parameter with sweeps of `type` **pull** and `schedule.type` **balance**, and if you are processing payments with Adyen.
    */
    'merchantAccount'?: string;
    /**
    * The unique identifier of the destination or source [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id) depending on the sweep `type`.  To set up automated top-up sweeps to balance accounts in your [marketplace](https://docs.adyen.com/marketplaces/top-up-balance-account/#before-you-begin) or [platform](https://docs.adyen.com/platforms/top-up-balance-account/#before-you-begin), use this parameter in combination with a `merchantAccount` and a sweep `type` of **pull**.  Top-up sweeps start a direct debit request from the source transfer instrument. Contact Adyen Support to enable this feature.
    */
    'transferInstrumentId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "balanceAccountId",
            "baseName": "balanceAccountId",
            "type": "string"
        },
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string"
        },
        {
            "name": "transferInstrumentId",
            "baseName": "transferInstrumentId",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SweepCounterparty.attributeTypeMap;
    }
}

