/*
 * The version of the OpenAPI document: v68
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';
import { FraudResult } from './fraudResult';

export class PayoutResponse {
    /**
    * Contains additional information about the payment. Some data fields are included only if you select them first: Go to **Customer Area** > **Account** > **API URLs** > **Additional data settings**.
    */
    'additionalData'?: { [key: string]: string; };
    /**
    * Authorisation code: * When the payment is authorised successfully, this field holds the authorisation code for the payment. * When the payment is not authorised, this field is empty.
    */
    'authCode'?: string;
    'dccAmount'?: Amount;
    /**
    * Cryptographic signature used to verify `dccQuote`. > This value only applies if you have implemented Dynamic Currency Conversion. For more information, [contact Support](https://support.adyen.com/hc/en-us/requests/new).
    */
    'dccSignature'?: string;
    'fraudResult'?: FraudResult;
    /**
    * The URL to direct the shopper to. > In case of SecurePlus, do not redirect a shopper to this URL.
    */
    'issuerUrl'?: string;
    /**
    * The payment session.
    */
    'md'?: string;
    /**
    * The 3D request data for the issuer.  If the value is **CUPSecurePlus-CollectSMSVerificationCode**, collect an SMS code from the shopper and pass it in the `/authorise3D` request. For more information, see [3D Secure](https://docs.adyen.com/classic-integration/3d-secure).
    */
    'paRequest'?: string;
    /**
    * Adyen\'s 16-character reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.
    */
    'pspReference'?: string;
    /**
    * If the payment\'s authorisation is refused or an error occurs during authorisation, this field holds Adyen\'s mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.  For more information, see [Refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons).
    */
    'refusalReason'?: string;
    /**
    * The result of the payment. For more information, see [Result codes](https://docs.adyen.com/online-payments/payment-result-codes).  Possible values:  * **AuthenticationFinished** – The payment has been successfully authenticated with 3D Secure 2. Returned for 3D Secure 2 authentication-only transactions. * **AuthenticationNotRequired** – The transaction does not require 3D Secure authentication. Returned for [standalone authentication-only integrations](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only). * **Authorised** – The payment was successfully authorised. This state serves as an indicator to proceed with the delivery of goods and services. This is a final state. * **Cancelled** – Indicates the payment has been cancelled (either by the shopper or the merchant) before processing was completed. This is a final state. * **ChallengeShopper** – The issuer requires further shopper interaction before the payment can be authenticated. Returned for 3D Secure 2 transactions. * **Error** – There was an error when the payment was being processed. The reason is given in the `refusalReason` field. This is a final state. * **IdentifyShopper** – The issuer requires the shopper\'s device fingerprint before the payment can be authenticated. Returned for 3D Secure 2 transactions. * **Pending** – Indicates that it is not possible to obtain the final status of the payment. This can happen if the systems providing final status information for the payment are unavailable, or if the shopper needs to take further action to complete the payment. * **PresentToShopper** – Indicates that the response contains additional information that you need to present to a shopper, so that they can use it to complete a payment. * **Received** – Indicates the payment has successfully been received by Adyen, and will be processed. This is the initial state for all payments. * **RedirectShopper** – Indicates the shopper should be redirected to an external web page or app to complete the authorisation. * **Refused** – Indicates the payment was refused. The reason is given in the `refusalReason` field. This is a final state.
    */
    'resultCode'?: PayoutResponse.ResultCodeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalData",
            "baseName": "additionalData",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "authCode",
            "baseName": "authCode",
            "type": "string"
        },
        {
            "name": "dccAmount",
            "baseName": "dccAmount",
            "type": "Amount"
        },
        {
            "name": "dccSignature",
            "baseName": "dccSignature",
            "type": "string"
        },
        {
            "name": "fraudResult",
            "baseName": "fraudResult",
            "type": "FraudResult"
        },
        {
            "name": "issuerUrl",
            "baseName": "issuerUrl",
            "type": "string"
        },
        {
            "name": "md",
            "baseName": "md",
            "type": "string"
        },
        {
            "name": "paRequest",
            "baseName": "paRequest",
            "type": "string"
        },
        {
            "name": "pspReference",
            "baseName": "pspReference",
            "type": "string"
        },
        {
            "name": "refusalReason",
            "baseName": "refusalReason",
            "type": "string"
        },
        {
            "name": "resultCode",
            "baseName": "resultCode",
            "type": "PayoutResponse.ResultCodeEnum"
        }    ];

    static getAttributeTypeMap() {
        return PayoutResponse.attributeTypeMap;
    }
}

export namespace PayoutResponse {
    export enum ResultCodeEnum {
        AuthenticationFinished = <any> 'AuthenticationFinished',
        Authorised = <any> 'Authorised',
        Cancelled = <any> 'Cancelled',
        ChallengeShopper = <any> 'ChallengeShopper',
        Error = <any> 'Error',
        IdentifyShopper = <any> 'IdentifyShopper',
        Pending = <any> 'Pending',
        PresentToShopper = <any> 'PresentToShopper',
        Received = <any> 'Received',
        RedirectShopper = <any> 'RedirectShopper',
        Refused = <any> 'Refused',
        Success = <any> 'Success'
    }
}
