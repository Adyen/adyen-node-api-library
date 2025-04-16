/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class PatchableTarget {
    /**
    * The unique identifier of the `target.type`. This can be the ID of your:  * balance platform * account holder * account holder\'s balance account
    */
    'id'?: string;
    /**
    * The resource for which you want to receive notifications. Possible values:  * **balancePlatform**: receive notifications about balance changes in your entire balance platform.  * **accountHolder**: receive notifications about balance changes of a specific user.  * **balanceAccount**: receive notifications about balance changes in a specific balance account.
    */
    'type'?: PatchableTarget.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PatchableTarget.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PatchableTarget.attributeTypeMap;
    }
}

export namespace PatchableTarget {
    export enum TypeEnum {
        BalanceAccount = 'balanceAccount',
        AccountHolder = 'accountHolder',
        BalancePlatform = 'balancePlatform'
    }
}
