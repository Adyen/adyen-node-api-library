/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class TargetUpdate {
    /**
    * The unique identifier of the `target.type`. This can be the ID of your:  * balance platform * account holder * account holder\'s balance account
    */
    "id"?: string;
    /**
    * The resource for which you want to receive notifications. Possible values:  * **balancePlatform**: receive notifications about balance changes in your entire balance platform.  * **accountHolder**: receive notifications about balance changes of a specific user.  * **balanceAccount**: receive notifications about balance changes in a specific balance account.
    */
    "type"?: TargetUpdate.TypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "TargetUpdate.TypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TargetUpdate.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace TargetUpdate {
    export enum TypeEnum {
        BalanceAccount = 'balanceAccount',
        AccountHolder = 'accountHolder',
        BalancePlatform = 'balancePlatform'
    }
}
