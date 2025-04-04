/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';
import { Fee } from './fee';
import { Repayment } from './repayment';

export class GrantOffer {
    /**
    * The identifier of the account holder to which the grant is offered.
    */
    'accountHolderId': string;
    'amount'?: Amount;
    /**
    * The contract type of the grant offer. Possible value: **cashAdvance**, **loan**.
    */
    'contractType'?: GrantOffer.ContractTypeEnum;
    /**
    * The end date of the grant offer validity period.
    */
    'expiresAt'?: Date;
    'fee'?: Fee;
    /**
    * The unique identifier of the grant offer.
    */
    'id'?: string;
    'repayment'?: Repayment;
    /**
    * The starting date of the grant offer validity period.
    */
    'startsAt'?: Date;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountHolderId",
            "baseName": "accountHolderId",
            "type": "string"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "contractType",
            "baseName": "contractType",
            "type": "GrantOffer.ContractTypeEnum"
        },
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "Date"
        },
        {
            "name": "fee",
            "baseName": "fee",
            "type": "Fee"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "repayment",
            "baseName": "repayment",
            "type": "Repayment"
        },
        {
            "name": "startsAt",
            "baseName": "startsAt",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return GrantOffer.attributeTypeMap;
    }
}

export namespace GrantOffer {
    export enum ContractTypeEnum {
        CashAdvance = <any> 'cashAdvance',
        Loan = <any> 'loan'
    }
}
