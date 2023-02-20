/*
 * The version of the OpenAPI document: v70
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AcctInfo } from './acctInfo';
import { DeviceRenderOptions } from './deviceRenderOptions';
import { Phone } from './phone';
import { SDKEphemPubKey } from './sDKEphemPubKey';
import { ThreeDSRequestorAuthenticationInfo } from './threeDSRequestorAuthenticationInfo';
import { ThreeDSRequestorPriorAuthenticationInfo } from './threeDSRequestorPriorAuthenticationInfo';

export class ThreeDS2RequestData {
    'acctInfo'?: AcctInfo;
    /**
    * Indicates the type of account. For example, for a multi-account card product. Length: 2 characters. Allowed values: * **01** — Not applicable * **02** — Credit * **03** — Debit
    */
    'acctType'?: ThreeDS2RequestData.AcctTypeEnum;
    /**
    * Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only). The acquiring BIN enrolled for 3D Secure 2. This string should match the value that you will use in the authorisation. Use 123456 on the Test platform.
    */
    'acquirerBIN'?: string;
    /**
    * Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only). The merchantId that is enrolled for 3D Secure 2 by the merchant\'s acquirer. This string should match the value that you will use in the authorisation. Use 123456 on the Test platform.
    */
    'acquirerMerchantID'?: string;
    /**
    * Indicates whether the Cardholder Shipping Address and Cardholder Billing Address are the same. Allowed values: * **Y** — Shipping Address matches Billing Address. * **N** — Shipping Address does not match Billing Address.
    */
    'addrMatch'?: ThreeDS2RequestData.AddrMatchEnum;
    /**
    * If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation.
    */
    'authenticationOnly'?: boolean;
    /**
    * Possibility to specify a preference for receiving a challenge from the issuer. Allowed values: * `noPreference` * `requestNoChallenge` * `requestChallenge` * `requestChallengeAsMandate` 
    */
    'challengeIndicator'?: ThreeDS2RequestData.ChallengeIndicatorEnum;
    /**
    * The environment of the shopper. Allowed values: * `app` * `browser`
    */
    'deviceChannel': string;
    'deviceRenderOptions'?: DeviceRenderOptions;
    'homePhone'?: Phone;
    /**
    * Required for merchants that have been enrolled for 3D Secure 2 by another party than Adyen, mostly [authentication-only integrations](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only). The `mcc` is a four-digit code with which the previously given `acquirerMerchantID` is registered at the scheme.
    */
    'mcc'?: string;
    /**
    * Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only). The merchant name that the issuer presents to the shopper if they get a challenge. We recommend to use the same value that you will use in the authorization. Maximum length is 40 characters. > Optional for a [full 3D Secure 2 integration](https://docs.adyen.com/online-payments/3d-secure/native-3ds2/api-integration). Use this field if you are enrolled for 3D Secure 2 with us and want to override the merchant name already configured on your account.
    */
    'merchantName'?: string;
    /**
    * The `messageVersion` value indicating the 3D Secure 2 protocol version.
    */
    'messageVersion'?: string;
    'mobilePhone'?: Phone;
    /**
    * URL to where the issuer should send the `CRes`. Required if you are not using components for `channel` **Web** or if you are using classic integration `deviceChannel` **browser**.
    */
    'notificationURL'?: string;
    /**
    * Value **true** indicates that the transaction was de-tokenised prior to being received by the ACS.
    */
    'payTokenInd'?: boolean;
    /**
    * Indicates the type of payment for which an authentication is requested (message extension)
    */
    'paymentAuthenticationUseCase'?: string;
    /**
    * Indicates the maximum number of authorisations permitted for instalment payments. Length: 1–3 characters.
    */
    'purchaseInstalData'?: string;
    /**
    * Date after which no further authorisations shall be performed. Format: YYYYMMDD
    */
    'recurringExpiry'?: string;
    /**
    * Indicates the minimum number of days between authorisations. Maximum length: 4 characters.
    */
    'recurringFrequency'?: string;
    /**
    * The `sdkAppID` value as received from the 3D Secure 2 SDK. Required for `deviceChannel` set to **app**.
    */
    'sdkAppID'?: string;
    /**
    * The `sdkEncData` value as received from the 3D Secure 2 SDK. Required for `deviceChannel` set to **app**.
    */
    'sdkEncData'?: string;
    'sdkEphemPubKey'?: SDKEphemPubKey;
    /**
    * The maximum amount of time in minutes for the 3D Secure 2 authentication process. Optional and only for `deviceChannel` set to **app**. Defaults to **60** minutes.
    */
    'sdkMaxTimeout'?: number;
    /**
    * The `sdkReferenceNumber` value as received from the 3D Secure 2 SDK. Only for `deviceChannel` set to **app**.
    */
    'sdkReferenceNumber'?: string;
    /**
    * The `sdkTransID` value as received from the 3D Secure 2 SDK. Only for `deviceChannel` set to **app**.
    */
    'sdkTransID'?: string;
    /**
    * Version of the 3D Secure 2 mobile SDK.  Only for `deviceChannel` set to **app**.
    */
    'sdkVersion'?: string;
    /**
    * Completion indicator for the device fingerprinting.
    */
    'threeDSCompInd'?: string;
    /**
    * Indicates the type of Authentication request.
    */
    'threeDSRequestorAuthenticationInd'?: string;
    'threeDSRequestorAuthenticationInfo'?: ThreeDSRequestorAuthenticationInfo;
    /**
    * Indicates whether a challenge is requested for this transaction. Possible values: * **01** — No preference * **02** — No challenge requested * **03** — Challenge requested (3DS Requestor preference) * **04** — Challenge requested (Mandate) * **05** — No challenge (transactional risk analysis is already performed) * **06** — Data Only
    */
    'threeDSRequestorChallengeInd'?: ThreeDS2RequestData.ThreeDSRequestorChallengeIndEnum;
    /**
    * Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only) for Visa. Unique 3D Secure requestor identifier assigned by the Directory Server when you enrol for 3D Secure 2.
    */
    'threeDSRequestorID'?: string;
    /**
    * Required for [authentication-only integration](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only) for Visa. Unique 3D Secure requestor name assigned by the Directory Server when you enrol for 3D Secure 2.
    */
    'threeDSRequestorName'?: string;
    'threeDSRequestorPriorAuthenticationInfo'?: ThreeDSRequestorPriorAuthenticationInfo;
    /**
    * URL of the (customer service) website that will be shown to the shopper in case of technical errors during the 3D Secure 2 process.
    */
    'threeDSRequestorURL'?: string;
    /**
    * Identifies the type of transaction being authenticated. Length: 2 characters. Allowed values: * **01** — Goods/Service Purchase * **03** — Check Acceptance * **10** — Account Funding * **11** — Quasi-Cash Transaction * **28** — Prepaid Activation and Load
    */
    'transType'?: ThreeDS2RequestData.TransTypeEnum;
    /**
    * Identify the type of the transaction being authenticated.
    */
    'transactionType'?: ThreeDS2RequestData.TransactionTypeEnum;
    /**
    * The `whiteListStatus` value returned from a previous 3D Secure 2 transaction, only applicable for 3D Secure 2 protocol version 2.2.0.
    */
    'whiteListStatus'?: string;
    'workPhone'?: Phone;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acctInfo",
            "baseName": "acctInfo",
            "type": "AcctInfo"
        },
        {
            "name": "acctType",
            "baseName": "acctType",
            "type": "ThreeDS2RequestData.AcctTypeEnum"
        },
        {
            "name": "acquirerBIN",
            "baseName": "acquirerBIN",
            "type": "string"
        },
        {
            "name": "acquirerMerchantID",
            "baseName": "acquirerMerchantID",
            "type": "string"
        },
        {
            "name": "addrMatch",
            "baseName": "addrMatch",
            "type": "ThreeDS2RequestData.AddrMatchEnum"
        },
        {
            "name": "authenticationOnly",
            "baseName": "authenticationOnly",
            "type": "boolean"
        },
        {
            "name": "challengeIndicator",
            "baseName": "challengeIndicator",
            "type": "ThreeDS2RequestData.ChallengeIndicatorEnum"
        },
        {
            "name": "deviceChannel",
            "baseName": "deviceChannel",
            "type": "string"
        },
        {
            "name": "deviceRenderOptions",
            "baseName": "deviceRenderOptions",
            "type": "DeviceRenderOptions"
        },
        {
            "name": "homePhone",
            "baseName": "homePhone",
            "type": "Phone"
        },
        {
            "name": "mcc",
            "baseName": "mcc",
            "type": "string"
        },
        {
            "name": "merchantName",
            "baseName": "merchantName",
            "type": "string"
        },
        {
            "name": "messageVersion",
            "baseName": "messageVersion",
            "type": "string"
        },
        {
            "name": "mobilePhone",
            "baseName": "mobilePhone",
            "type": "Phone"
        },
        {
            "name": "notificationURL",
            "baseName": "notificationURL",
            "type": "string"
        },
        {
            "name": "payTokenInd",
            "baseName": "payTokenInd",
            "type": "boolean"
        },
        {
            "name": "paymentAuthenticationUseCase",
            "baseName": "paymentAuthenticationUseCase",
            "type": "string"
        },
        {
            "name": "purchaseInstalData",
            "baseName": "purchaseInstalData",
            "type": "string"
        },
        {
            "name": "recurringExpiry",
            "baseName": "recurringExpiry",
            "type": "string"
        },
        {
            "name": "recurringFrequency",
            "baseName": "recurringFrequency",
            "type": "string"
        },
        {
            "name": "sdkAppID",
            "baseName": "sdkAppID",
            "type": "string"
        },
        {
            "name": "sdkEncData",
            "baseName": "sdkEncData",
            "type": "string"
        },
        {
            "name": "sdkEphemPubKey",
            "baseName": "sdkEphemPubKey",
            "type": "SDKEphemPubKey"
        },
        {
            "name": "sdkMaxTimeout",
            "baseName": "sdkMaxTimeout",
            "type": "number"
        },
        {
            "name": "sdkReferenceNumber",
            "baseName": "sdkReferenceNumber",
            "type": "string"
        },
        {
            "name": "sdkTransID",
            "baseName": "sdkTransID",
            "type": "string"
        },
        {
            "name": "sdkVersion",
            "baseName": "sdkVersion",
            "type": "string"
        },
        {
            "name": "threeDSCompInd",
            "baseName": "threeDSCompInd",
            "type": "string"
        },
        {
            "name": "threeDSRequestorAuthenticationInd",
            "baseName": "threeDSRequestorAuthenticationInd",
            "type": "string"
        },
        {
            "name": "threeDSRequestorAuthenticationInfo",
            "baseName": "threeDSRequestorAuthenticationInfo",
            "type": "ThreeDSRequestorAuthenticationInfo"
        },
        {
            "name": "threeDSRequestorChallengeInd",
            "baseName": "threeDSRequestorChallengeInd",
            "type": "ThreeDS2RequestData.ThreeDSRequestorChallengeIndEnum"
        },
        {
            "name": "threeDSRequestorID",
            "baseName": "threeDSRequestorID",
            "type": "string"
        },
        {
            "name": "threeDSRequestorName",
            "baseName": "threeDSRequestorName",
            "type": "string"
        },
        {
            "name": "threeDSRequestorPriorAuthenticationInfo",
            "baseName": "threeDSRequestorPriorAuthenticationInfo",
            "type": "ThreeDSRequestorPriorAuthenticationInfo"
        },
        {
            "name": "threeDSRequestorURL",
            "baseName": "threeDSRequestorURL",
            "type": "string"
        },
        {
            "name": "transType",
            "baseName": "transType",
            "type": "ThreeDS2RequestData.TransTypeEnum"
        },
        {
            "name": "transactionType",
            "baseName": "transactionType",
            "type": "ThreeDS2RequestData.TransactionTypeEnum"
        },
        {
            "name": "whiteListStatus",
            "baseName": "whiteListStatus",
            "type": "string"
        },
        {
            "name": "workPhone",
            "baseName": "workPhone",
            "type": "Phone"
        }    ];

    static getAttributeTypeMap() {
        return ThreeDS2RequestData.attributeTypeMap;
    }
}

export namespace ThreeDS2RequestData {
    export enum AcctTypeEnum {
        _01 = '01',
        _02 = '02',
        _03 = '03'
    }
    export enum AddrMatchEnum {
        Y = 'Y',
        N = 'N'
    }
    export enum ChallengeIndicatorEnum {
        NoPreference = 'noPreference',
        RequestNoChallenge = 'requestNoChallenge',
        RequestChallenge = 'requestChallenge',
        RequestChallengeAsMandate = 'requestChallengeAsMandate'
    }
    export enum ThreeDSRequestorChallengeIndEnum {
        _01 = '01',
        _02 = '02',
        _03 = '03',
        _04 = '04',
        _05 = '05',
        _06 = '06'
    }
    export enum TransTypeEnum {
        _01 = '01',
        _03 = '03',
        _10 = '10',
        _11 = '11',
        _28 = '28'
    }
    export enum TransactionTypeEnum {
        GoodsOrServicePurchase = 'goodsOrServicePurchase',
        CheckAcceptance = 'checkAcceptance',
        AccountFunding = 'accountFunding',
        QuasiCashTransaction = 'quasiCashTransaction',
        PrepaidActivationAndLoad = 'prepaidActivationAndLoad'
    }
}
