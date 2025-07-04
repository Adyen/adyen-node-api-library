/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { CapitalBalance } from "./capitalBalance";
import { GrantLimit } from "./grantLimit";


export class CapitalGrantAccount {
    /**
    * The balances of the grant account.
    */
    "balances"?: Array<CapitalBalance>;
    /**
    * The unique identifier of the balance account used to fund the grant.
    */
    "fundingBalanceAccountId"?: string;
    /**
    * The identifier of the grant account.
    */
    "id"?: string;
    /**
    * The limits of the grant account.
    */
    "limits"?: Array<GrantLimit>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "balances",
            "baseName": "balances",
            "type": "Array<CapitalBalance>",
            "format": ""
        },
        {
            "name": "fundingBalanceAccountId",
            "baseName": "fundingBalanceAccountId",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "limits",
            "baseName": "limits",
            "type": "Array<GrantLimit>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CapitalGrantAccount.attributeTypeMap;
    }

    public constructor() {
    }
}

