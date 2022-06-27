/*
 * The version of the OpenAPI document: v69
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Amount } from './amount';
import { CheckoutAwaitAction } from './checkoutAwaitAction';
import { CheckoutBankTransferAction } from './checkoutBankTransferAction';
import { CheckoutDonationAction } from './checkoutDonationAction';
import { CheckoutOneTimePasscodeAction } from './checkoutOneTimePasscodeAction';
import { CheckoutOrderResponse } from './checkoutOrderResponse';
import { CheckoutQrCodeAction } from './checkoutQrCodeAction';
import { CheckoutRedirectAction } from './checkoutRedirectAction';
import { CheckoutSDKAction } from './checkoutSDKAction';
import { CheckoutThreeDS2Action } from './checkoutThreeDS2Action';
import { CheckoutVoucherAction } from './checkoutVoucherAction';
import { FraudResult } from './fraudResult';
import { ResponsePaymentMethod } from './responsePaymentMethod';
import { ThreeDS2ResponseData } from './threeDS2ResponseData';
import { ThreeDS2Result } from './threeDS2Result';

export class PaymentResponse {
    /**
    * Action to be taken for completing the payment.
    */
    'action'?: CheckoutAwaitAction | CheckoutBankTransferAction | CheckoutDonationAction | CheckoutOneTimePasscodeAction | CheckoutQrCodeAction | CheckoutRedirectAction | CheckoutSDKAction | CheckoutThreeDS2Action | CheckoutVoucherAction;
    /**
    * Contains additional information about the payment. Some data fields are included only if you select them first: Go to **Customer Area** > **Account** > **API URLs** > **Additional data settings**.
    */
    'additionalData'?: { [key: string]: string; };
    'amount'?: Amount;
    /**
    * Donation Token containing payment details for Adyen Giving.
    */
    'donationToken'?: string;
    'fraudResult'?: FraudResult;
    /**
    * The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement. If you need to provide multiple references for a transaction, separate them with hyphens (\"-\"). Maximum length: 80 characters.
    */
    'merchantReference'?: string;
    'order'?: CheckoutOrderResponse;
    'paymentMethod'?: ResponsePaymentMethod;
    /**
    * Adyen\'s 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.  > For payment methods that require a redirect or additional action, you will get this value in the `/payments/details` response.
    */
    'pspReference'?: string;
    /**
    * If the payment\'s authorisation is refused or an error occurs during authorisation, this field holds Adyen\'s mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.  For more information, see [Refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons).
    */
    'refusalReason'?: string;
    /**
    * Code that specifies the refusal reason. For more information, see [Authorisation refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons).
    */
    'refusalReasonCode'?: string;
    /**
    * The result of the payment. For more information, see [Result codes](https://docs.adyen.com/online-payments/payment-result-codes).  Possible values:  * **AuthenticationFinished** – The payment has been successfully authenticated with 3D Secure 2. Returned for 3D Secure 2 authentication-only transactions. * **AuthenticationNotRequired** – The transaction does not require 3D Secure authentication. Returned for [standalone authentication-only integrations](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only). * **Authorised** – The payment was successfully authorised. This state serves as an indicator to proceed with the delivery of goods and services. This is a final state. * **Cancelled** – Indicates the payment has been cancelled (either by the shopper or the merchant) before processing was completed. This is a final state. * **ChallengeShopper** – The issuer requires further shopper interaction before the payment can be authenticated. Returned for 3D Secure 2 transactions. * **Error** – There was an error when the payment was being processed. The reason is given in the `refusalReason` field. This is a final state. * **IdentifyShopper** – The issuer requires the shopper\'s device fingerprint before the payment can be authenticated. Returned for 3D Secure 2 transactions. * **Pending** – Indicates that it is not possible to obtain the final status of the payment. This can happen if the systems providing final status information for the payment are unavailable, or if the shopper needs to take further action to complete the payment. * **PresentToShopper** – Indicates that the response contains additional information that you need to present to a shopper, so that they can use it to complete a payment. * **Received** – Indicates the payment has successfully been received by Adyen, and will be processed. This is the initial state for all payments. * **RedirectShopper** – Indicates the shopper should be redirected to an external web page or app to complete the authorisation. * **Refused** – Indicates the payment was refused. The reason is given in the `refusalReason` field. This is a final state.
    */
    'resultCode'?: PaymentResponse.ResultCodeEnum;
    'threeDS2ResponseData'?: ThreeDS2ResponseData;
    'threeDS2Result'?: ThreeDS2Result;
    /**
    * When non-empty, contains a value that you must submit to the `/payments/details` endpoint as `paymentData`.
    */
    'threeDSPaymentData'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "CheckoutAwaitAction | CheckoutBankTransferAction | CheckoutDonationAction | CheckoutOneTimePasscodeAction | CheckoutQrCodeAction | CheckoutRedirectAction | CheckoutSDKAction | CheckoutThreeDS2Action | CheckoutVoucherAction"
        },
        {
            "name": "additionalData",
            "baseName": "additionalData",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Amount"
        },
        {
            "name": "donationToken",
            "baseName": "donationToken",
            "type": "string"
        },
        {
            "name": "fraudResult",
            "baseName": "fraudResult",
            "type": "FraudResult"
        },
        {
            "name": "merchantReference",
            "baseName": "merchantReference",
            "type": "string"
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "CheckoutOrderResponse"
        },
        {
            "name": "paymentMethod",
            "baseName": "paymentMethod",
            "type": "ResponsePaymentMethod"
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
            "name": "refusalReasonCode",
            "baseName": "refusalReasonCode",
            "type": "string"
        },
        {
            "name": "resultCode",
            "baseName": "resultCode",
            "type": "PaymentResponse.ResultCodeEnum"
        },
        {
            "name": "threeDS2ResponseData",
            "baseName": "threeDS2ResponseData",
            "type": "ThreeDS2ResponseData"
        },
        {
            "name": "threeDS2Result",
            "baseName": "threeDS2Result",
            "type": "ThreeDS2Result"
        },
        {
            "name": "threeDSPaymentData",
            "baseName": "threeDSPaymentData",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return PaymentResponse.attributeTypeMap;
    }
}

export namespace PaymentResponse {
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
