/*
 * The version of the OpenAPI document: v69
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class BlikDetails {
    /**
    * BLIK code consisting of 6 digits.
    */
    'blikCode'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'recurringDetailReference'?: string;
    /**
    * This is the `recurringDetailReference` returned in the response when you created the token.
    */
    'storedPaymentMethodId'?: string;
    /**
    * **blik**
    */
    'type'?: BlikDetails.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "blikCode",
            "baseName": "blikCode",
            "type": "string"
        },
        {
            "name": "recurringDetailReference",
            "baseName": "recurringDetailReference",
            "type": "string"
        },
        {
            "name": "storedPaymentMethodId",
            "baseName": "storedPaymentMethodId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "BlikDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return BlikDetails.attributeTypeMap;
    }
}

export namespace BlikDetails {
    export enum TypeEnum {
        Blik = <any> 'blik'
    }
}
