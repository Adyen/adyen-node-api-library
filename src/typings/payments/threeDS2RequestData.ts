/**
 * Adyen Payment API
 * A set of API endpoints that allow you to initiate, settle, and modify payments on the Adyen payments platform. You can use the API to accept card payments (including One-Click and 3D Secure), bank transfers, ewallets, and many other payment methods.  To learn more about the API, visit [Classic integration](https://docs.adyen.com/classic-integration).  ## Authentication To connect to the Payments API, you must use your basic authentication credentials. For this, create your web service user, as described in [How to get the WS user password](https://docs.adyen.com/user-management/how-to-get-the-web-service-ws-user-password). Then use its credentials to authenticate your request, for example:  ``` curl -U \"ws@Company.YourCompany\":\"YourWsPassword\" \\ -H \"Content-Type: application/json\" \\ ... ``` Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Payments API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://pal-test.adyen.com/pal/servlet/Payment/v51/authorise ```
 *
 * The version of the OpenAPI document: 51
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DeviceRenderOptions } from './deviceRenderOptions';
import { SDKEphemPubKey } from './sDKEphemPubKey';

export class ThreeDS2RequestData {
    /**
    * Required for [authentication-only integration](https://docs.adyen.com/checkout/3d-secure/other-3ds-flows/authentication-only). The acquiring BIN enrolled for 3D Secure 2. This string should match the value that you will use in the authorisation. Use 123456 on the Test platform.
    */
    'acquirerBIN'?: string;
    /**
    * Required for [authentication-only integration](https://docs.adyen.com/checkout/3d-secure/other-3ds-flows/authentication-only). The merchantId that is enrolled for 3D Secure 2 by the merchant\'s acquirer. This string should match the value that you will use in the authorisation. Use 123456 on the Test platform.
    */
    'acquirerMerchantID'?: string;
    /**
    * If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/checkout/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation.
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
    /**
    * Required for merchants that have been enrolled for 3D Secure 2 by another party than Adyen, mostly [authentication-only integrations](https://docs.adyen.com/checkout/3d-secure/other-3ds-flows/authentication-only). The `mcc` is a four-digit code with which the previously given `acquirerMerchantID` is registered at the scheme.
    */
    'mcc'?: string;
    /**
    * Required for [authentication-only integration](https://docs.adyen.com/checkout/3d-secure/other-3ds-flows/authentication-only). The merchant name that the issuer presents to the shopper if they get a challenge. We recommend to use the same value that you will use in the authorization. Maximum length is 40 characters. > Optional for a [full 3D Secure 2 integration](https://docs.adyen.com/checkout/3d-secure/native-3ds2/api-integration). Use this field if you are enrolled for 3D Secure 2 with us and want to override the merchant name already configured on your account.
    */
    'merchantName'?: string;
    /**
    * The `messageVersion` value indicating the 3D Secure 2 protocol version.
    */
    'messageVersion'?: string;
    /**
    * URL to where the issuer should send the `CRes`. Required if you are not using components for `channel` **Web** or if you are using classic integration `deviceChannel` **browser**.
    */
    'notificationURL'?: string;
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
    * Completion indicator for the device fingerprinting.
    */
    'threeDSCompInd'?: string;
    /**
    * Required for [authentication-only integration](https://docs.adyen.com/checkout/3d-secure/other-3ds-flows/authentication-only) for Visa. Unique 3D Secure requestor identifier assigned by the Directory Server when you enrol for 3D Secure 2.
    */
    'threeDSRequestorID'?: string;
    /**
    * Required for [authentication-only integration](https://docs.adyen.com/checkout/3d-secure/other-3ds-flows/authentication-only) for Visa. Unique 3D Secure requestor name assigned by the Directory Server when you enrol for 3D Secure 2.
    */
    'threeDSRequestorName'?: string;
    /**
    * URL of the (customer service) website that will be shown to the shopper in case of technical errors during the 3D Secure 2 process.
    */
    'threeDSRequestorURL'?: string;
    /**
    * Identify the type of the transaction being authenticated.
    */
    'transactionType'?: ThreeDS2RequestData.TransactionTypeEnum;
    /**
    * The `whiteListStatus` value returned from a previous 3D Secure 2 transaction, only applicable for 3D Secure 2 protocol version 2.2.0.
    */
    'whiteListStatus'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
            "name": "notificationURL",
            "baseName": "notificationURL",
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
            "name": "threeDSCompInd",
            "baseName": "threeDSCompInd",
            "type": "string"
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
            "name": "threeDSRequestorURL",
            "baseName": "threeDSRequestorURL",
            "type": "string"
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
        }    ];

    static getAttributeTypeMap() {
        return ThreeDS2RequestData.attributeTypeMap;
    }
}

export namespace ThreeDS2RequestData {
    export enum ChallengeIndicatorEnum {
        NoPreference = <any> 'noPreference',
        RequestNoChallenge = <any> 'requestNoChallenge',
        RequestChallenge = <any> 'requestChallenge',
        RequestChallengeAsMandate = <any> 'requestChallengeAsMandate'
    }
    export enum TransactionTypeEnum {
        GoodsOrServicePurchase = <any> 'goodsOrServicePurchase',
        CheckAcceptance = <any> 'checkAcceptance',
        AccountFunding = <any> 'accountFunding',
        QuasiCashTransaction = <any> 'quasiCashTransaction',
        PrepaidActivationAndLoad = <any> 'prepaidActivationAndLoad'
    }
}
