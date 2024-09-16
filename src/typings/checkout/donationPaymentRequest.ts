/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AccountInfo } from './accountInfo';
import { Amount } from './amount';
import { ApplePayDonations } from './applePayDonations';
import { ApplicationInfo } from './applicationInfo';
import { AuthenticationData } from './authenticationData';
import { BillingAddress } from './billingAddress';
import { BrowserInfo } from './browserInfo';
import { CardDonations } from './cardDonations';
import { DeliveryAddress } from './deliveryAddress';
import { GooglePayDonations } from './googlePayDonations';
import { IdealDonations } from './idealDonations';
import { LineItem } from './lineItem';
import { MerchantRiskIndicator } from './merchantRiskIndicator';
import { Name } from './name';
import { PayWithGoogleDonations } from './payWithGoogleDonations';
import { ThreeDS2RequestFields } from './threeDS2RequestFields';
import { ThreeDSecureData } from './threeDSecureData';

export class DonationPaymentRequest {
    'accountInfo'?: AccountInfo;
    /**
    * This field contains additional data, which may be required for a particular payment request.  The `additionalData` object consists of entries, each of which includes the key and value.
    */
    'additionalData'?: { [key: string]: string; };
    'amount': Amount;
    'applicationInfo'?: ApplicationInfo;
    'authenticationData'?: AuthenticationData;
    'billingAddress'?: BillingAddress;
    'browserInfo'?: BrowserInfo;
    /**
    * The platform where a payment transaction takes place. This field is optional for filtering out payment methods that are only available on specific platforms. If this value is not set, then we will try to infer it from the `sdkVersion` or `token`.  Possible values: * iOS * Android * Web
    */
    'channel'?: DonationPaymentRequest.ChannelEnum;
    /**
    * Checkout attempt ID that corresponds to the Id generated by the client SDK for tracking user payment journey.
    */
    'checkoutAttemptId'?: string;
    /**
    * Conversion ID that corresponds to the Id generated by the client SDK for tracking user payment journey.
    */
    'conversionId'?: string;
    /**
    * The shopper country.  Format: [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) Example: NL or DE
    */
    'countryCode'?: string;
    /**
    * The shopper\'s date of birth.  Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD
    */
    'dateOfBirth'?: Date;
    /**
    * The date and time the purchased goods should be delivered.  Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD  Example: 2017-07-17T13:42:40.428+01:00
    */
    'deliverAt'?: Date;
    'deliveryAddress'?: DeliveryAddress;
    /**
    * A string containing the shopper\'s device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).
    */
    'deviceFingerprint'?: string;
    /**
    * Donation account to which the transaction is credited.
    */
    'donationAccount'?: string;
    /**
    * The donation campaign ID received in the `/donationCampaigns` call.
    */
    'donationCampaignId'?: string;
    /**
    * PSP reference of the transaction from which the donation token is generated. Required when `donationToken` is provided.
    */
    'donationOriginalPspReference'?: string;
    /**
    * Donation token received in the `/payments` call.
    */
    'donationToken'?: string;
    /**
    * Price and product information about the purchased items, to be included on the invoice sent to the shopper. > This field is required for 3x 4x Oney, Affirm, Afterpay, Clearpay, Klarna, Ratepay, and Zip.
    */
    'lineItems'?: Array<LineItem>;
    /**
    * The merchant account identifier, with which you want to process the transaction.
    */
    'merchantAccount': string;
    'merchantRiskIndicator'?: MerchantRiskIndicator;
    /**
    * Metadata consists of entries, each of which includes a key and a value. Limits: * Maximum 20 key-value pairs per request. When exceeding, the \"177\" error occurs: \"Metadata size exceeds limit\". * Maximum 20 characters per key. * Maximum 80 characters per value. 
    */
    'metadata'?: { [key: string]: string; };
    'mpiData'?: ThreeDSecureData;
    /**
    * Required for the 3D Secure 2 `channel` **Web** integration.  Set this parameter to the origin URL of the page that you are loading the 3D Secure Component from.
    */
    'origin'?: string;
    /**
    * The type and required details of a payment method to use.
    */
    'paymentMethod': ApplePayDonations | CardDonations | GooglePayDonations | IdealDonations | PayWithGoogleDonations | null;
    /**
    * Defines a recurring payment type. Required when creating a token to store payment details or using stored payment details. Allowed values: * `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule. * `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction. * `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder\'s balance drops below a certain amount. 
    */
    'recurringProcessingModel'?: DonationPaymentRequest.RecurringProcessingModelEnum;
    /**
    * Specifies the redirect method (GET or POST) when redirecting back from the issuer.
    */
    'redirectFromIssuerMethod'?: string;
    /**
    * Specifies the redirect method (GET or POST) when redirecting to the issuer.
    */
    'redirectToIssuerMethod'?: string;
    /**
    * The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement. If you need to provide multiple references for a transaction, separate them with hyphens (\"-\"). Maximum length: 80 characters.
    */
    'reference': string;
    /**
    * The URL to return to in case of a redirection. The format depends on the channel. This URL can have a maximum of 1024 characters. * For web, include the protocol `http://` or `https://`. You can also include your own additional query parameters, for example, shopper ID or order reference number. Example: `https://your-company.com/checkout?shopperOrder=12xy` * For iOS, use the custom URL for your app. To know more about setting custom URL schemes, refer to the [Apple Developer documentation](https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app). Example: `my-app://` * For Android, use a custom URL handled by an Activity on your app. You can configure it with an [intent filter](https://developer.android.com/guide/components/intents-filters). Example: `my-app://your.package.name`If the URL to return to includes non-ASCII characters, like spaces or special letters, URL encode the value. > The URL must not include personally identifiable information (PII), for example name or email address.
    */
    'returnUrl': string;
    /**
    * The date and time until when the session remains valid, in [ISO 8601](https://www.w3.org/TR/NOTE-datetime) format.  For example: 2020-07-18T15:42:40.428+01:00
    */
    'sessionValidity'?: string;
    /**
    * The shopper\'s email address. We recommend that you provide this data, as it is used in velocity fraud checks. > For 3D Secure 2 transactions, schemes require `shopperEmail` for all browser-based and mobile implementations.
    */
    'shopperEmail'?: string;
    /**
    * The shopper\'s IP address. In general, we recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks). > For 3D Secure 2 transactions, schemes require `shopperIP` for all browser-based implementations. This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://www.adyen.help/hc/en-us/requests/new).
    */
    'shopperIP'?: string;
    /**
    * Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer. For the web service API, Adyen assumes Ecommerce shopper interaction by default.  This field has the following possible values: * `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request. * `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment). * `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone. * `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.
    */
    'shopperInteraction'?: DonationPaymentRequest.ShopperInteractionEnum;
    /**
    * The combination of a language code and a country code to specify the language to be used in the payment.
    */
    'shopperLocale'?: string;
    'shopperName'?: Name;
    /**
    * Required for recurring payments.  Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters. > Your reference must not include personally identifiable information (PII), for example name or email address.
    */
    'shopperReference'?: string;
    /**
    * The shopper\'s social security number.
    */
    'socialSecurityNumber'?: string;
    /**
    * The shopper\'s telephone number.
    */
    'telephoneNumber'?: string;
    'threeDS2RequestData'?: ThreeDS2RequestFields;
    /**
    * If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation.
    */
    'threeDSAuthenticationOnly'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountInfo",
            "baseName": "accountInfo",
            "type": "AccountInfo"
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
            "name": "applicationInfo",
            "baseName": "applicationInfo",
            "type": "ApplicationInfo"
        },
        {
            "name": "authenticationData",
            "baseName": "authenticationData",
            "type": "AuthenticationData"
        },
        {
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "BillingAddress"
        },
        {
            "name": "browserInfo",
            "baseName": "browserInfo",
            "type": "BrowserInfo"
        },
        {
            "name": "channel",
            "baseName": "channel",
            "type": "DonationPaymentRequest.ChannelEnum"
        },
        {
            "name": "checkoutAttemptId",
            "baseName": "checkoutAttemptId",
            "type": "string"
        },
        {
            "name": "conversionId",
            "baseName": "conversionId",
            "type": "string"
        },
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string"
        },
        {
            "name": "dateOfBirth",
            "baseName": "dateOfBirth",
            "type": "Date"
        },
        {
            "name": "deliverAt",
            "baseName": "deliverAt",
            "type": "Date"
        },
        {
            "name": "deliveryAddress",
            "baseName": "deliveryAddress",
            "type": "DeliveryAddress"
        },
        {
            "name": "deviceFingerprint",
            "baseName": "deviceFingerprint",
            "type": "string"
        },
        {
            "name": "donationAccount",
            "baseName": "donationAccount",
            "type": "string"
        },
        {
            "name": "donationCampaignId",
            "baseName": "donationCampaignId",
            "type": "string"
        },
        {
            "name": "donationOriginalPspReference",
            "baseName": "donationOriginalPspReference",
            "type": "string"
        },
        {
            "name": "donationToken",
            "baseName": "donationToken",
            "type": "string"
        },
        {
            "name": "lineItems",
            "baseName": "lineItems",
            "type": "Array<LineItem>"
        },
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string"
        },
        {
            "name": "merchantRiskIndicator",
            "baseName": "merchantRiskIndicator",
            "type": "MerchantRiskIndicator"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "mpiData",
            "baseName": "mpiData",
            "type": "ThreeDSecureData"
        },
        {
            "name": "origin",
            "baseName": "origin",
            "type": "string"
        },
        {
            "name": "paymentMethod",
            "baseName": "paymentMethod",
            "type": "ApplePayDonations | CardDonations | GooglePayDonations | IdealDonations | PayWithGoogleDonations | null"
        },
        {
            "name": "recurringProcessingModel",
            "baseName": "recurringProcessingModel",
            "type": "DonationPaymentRequest.RecurringProcessingModelEnum"
        },
        {
            "name": "redirectFromIssuerMethod",
            "baseName": "redirectFromIssuerMethod",
            "type": "string"
        },
        {
            "name": "redirectToIssuerMethod",
            "baseName": "redirectToIssuerMethod",
            "type": "string"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "returnUrl",
            "baseName": "returnUrl",
            "type": "string"
        },
        {
            "name": "sessionValidity",
            "baseName": "sessionValidity",
            "type": "string"
        },
        {
            "name": "shopperEmail",
            "baseName": "shopperEmail",
            "type": "string"
        },
        {
            "name": "shopperIP",
            "baseName": "shopperIP",
            "type": "string"
        },
        {
            "name": "shopperInteraction",
            "baseName": "shopperInteraction",
            "type": "DonationPaymentRequest.ShopperInteractionEnum"
        },
        {
            "name": "shopperLocale",
            "baseName": "shopperLocale",
            "type": "string"
        },
        {
            "name": "shopperName",
            "baseName": "shopperName",
            "type": "Name"
        },
        {
            "name": "shopperReference",
            "baseName": "shopperReference",
            "type": "string"
        },
        {
            "name": "socialSecurityNumber",
            "baseName": "socialSecurityNumber",
            "type": "string"
        },
        {
            "name": "telephoneNumber",
            "baseName": "telephoneNumber",
            "type": "string"
        },
        {
            "name": "threeDS2RequestData",
            "baseName": "threeDS2RequestData",
            "type": "ThreeDS2RequestFields"
        },
        {
            "name": "threeDSAuthenticationOnly",
            "baseName": "threeDSAuthenticationOnly",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return DonationPaymentRequest.attributeTypeMap;
    }
}

export namespace DonationPaymentRequest {
    export enum ChannelEnum {
        IOs = 'iOS',
        Android = 'Android',
        Web = 'Web'
    }
    export enum RecurringProcessingModelEnum {
        CardOnFile = 'CardOnFile',
        Subscription = 'Subscription',
        UnscheduledCardOnFile = 'UnscheduledCardOnFile'
    }
    export enum ShopperInteractionEnum {
        Ecommerce = 'Ecommerce',
        ContAuth = 'ContAuth',
        Moto = 'Moto',
        Pos = 'POS'
    }
}
