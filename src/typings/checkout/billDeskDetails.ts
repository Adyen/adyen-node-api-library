/*
 * The version of the OpenAPI document: v69
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class BillDeskDetails {
    /**
    * The issuer id of the shopper\'s selected bank.
    */
    'issuer': string;
    /**
    * **billdesk**
    */
    'type': BillDeskDetails.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "issuer",
            "baseName": "issuer",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "BillDeskDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return BillDeskDetails.attributeTypeMap;
    }
}

export namespace BillDeskDetails {
    export enum TypeEnum {
        BilldeskOnline = <any> 'billdesk_online',
        BilldeskWallet = <any> 'billdesk_wallet',
        OnlinebankingIn = <any> 'onlinebanking_IN',
        WalletIn = <any> 'wallet_IN'
    }
}
