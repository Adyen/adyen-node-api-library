/*
 * The version of the OpenAPI document: v68
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class PlatformChargebackLogic {
    'behavior'?: PlatformChargebackLogic.BehaviorEnum;
    'targetAccount'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "behavior",
            "baseName": "behavior",
            "type": "PlatformChargebackLogic.BehaviorEnum"
        },
        {
            "name": "targetAccount",
            "baseName": "targetAccount",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PlatformChargebackLogic.attributeTypeMap;
    }
}

export namespace PlatformChargebackLogic {
    export enum BehaviorEnum {
        DeductAccordingToSplitRatio = 'deductAccordingToSplitRatio',
        DeductFromLiableAccount = 'deductFromLiableAccount',
        DeductFromOneBalanceAccount = 'deductFromOneBalanceAccount'
    }
}
