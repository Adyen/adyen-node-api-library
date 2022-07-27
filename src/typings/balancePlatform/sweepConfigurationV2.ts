/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';
import { SweepCounterparty } from './sweepCounterparty';
import { SweepSchedule } from './sweepSchedule';

export class SweepConfigurationV2 {
    'counterparty': SweepCounterparty;
    /**
    * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) in uppercase. For example, **EUR**.  The sweep currency must match any of the [balances currencies](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__resParam_balances).
    */
    'currency': string;
    /**
    * The unique identifier of the sweep.
    */
    'id': string;
    'schedule': SweepSchedule;
    /**
    * The status of the sweep. If not provided, by default, this is set to **active**.  Possible values:    * **active**:  the sweep is enabled and funds will be pulled in or pushed out based on the defined configuration.    * **inactive**: the sweep is disabled and cannot be triggered.   
    */
    'status'?: SweepConfigurationV2.StatusEnum;
    'sweepAmount'?: Amount;
    'targetAmount'?: Amount;
    'triggerAmount'?: Amount;
    /**
    * The direction of sweep, whether pushing out or pulling in funds to the balance account. If not provided, by default, this is set to **push**.  Possible values:   * **push**: _push out funds_ to a destination balance account or transfer instrument.   * **pull**: _pull in funds_ from a source merchant account, transfer instrument, or balance account.
    */
    'type'?: SweepConfigurationV2.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "counterparty",
            "baseName": "counterparty",
            "type": "SweepCounterparty"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "schedule",
            "baseName": "schedule",
            "type": "SweepSchedule"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "SweepConfigurationV2.StatusEnum"
        },
        {
            "name": "sweepAmount",
            "baseName": "sweepAmount",
            "type": "Amount"
        },
        {
            "name": "targetAmount",
            "baseName": "targetAmount",
            "type": "Amount"
        },
        {
            "name": "triggerAmount",
            "baseName": "triggerAmount",
            "type": "Amount"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SweepConfigurationV2.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return SweepConfigurationV2.attributeTypeMap;
    }
}

export namespace SweepConfigurationV2 {
    export enum StatusEnum {
        Active = <any> 'active',
        Inactive = <any> 'inactive'
    }
    export enum TypeEnum {
        Pull = <any> 'pull',
        Push = <any> 'push'
    }
}
