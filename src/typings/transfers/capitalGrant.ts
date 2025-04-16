/*
 * The version of the OpenAPI document: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';
import { CapitalBalance } from './capitalBalance';
import { Counterparty } from './counterparty';
import { Fee } from './fee';
import { Repayment } from './repayment';

export class CapitalGrant {
    'amount'?: Amount | null;
    'balances': CapitalBalance;
    'counterparty'?: Counterparty | null;
    'fee'?: Fee | null;
    /**
    * The identifier of the grant account used for the grant.
    */
    'grantAccountId': string;
    /**
    * The identifier of the grant offer that has been selected and from which the grant details will be used.
    */
    'grantOfferId': string;
    /**
    * The identifier of the grant reference.
    */
    'id': string;
    'repayment'?: Repayment | null;
    /**
    * The current status of the grant. Possible values: **Pending**, **Active**, **Repaid**, **WrittenOff**, **Failed**, **Revoked**.
    */
    'status': CapitalGrant.StatusEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount | null"
        },
        {
            "name": "balances",
            "baseName": "balances",
            "type": "CapitalBalance"
        },
        {
            "name": "counterparty",
            "baseName": "counterparty",
            "type": "Counterparty | null"
        },
        {
            "name": "fee",
            "baseName": "fee",
            "type": "Fee | null"
        },
        {
            "name": "grantAccountId",
            "baseName": "grantAccountId",
            "type": "string"
        },
        {
            "name": "grantOfferId",
            "baseName": "grantOfferId",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "repayment",
            "baseName": "repayment",
            "type": "Repayment | null"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "CapitalGrant.StatusEnum"
        }    ];

    static getAttributeTypeMap() {
        return CapitalGrant.attributeTypeMap;
    }
}

export namespace CapitalGrant {
    export enum StatusEnum {
        Pending = 'Pending',
        Active = 'Active',
        Repaid = 'Repaid',
        Failed = 'Failed',
        WrittenOff = 'WrittenOff',
        Revoked = 'Revoked'
    }
}
