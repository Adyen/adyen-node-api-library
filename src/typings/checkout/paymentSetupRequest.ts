/*
 * The version of the OpenAPI document: v69
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { Address } from './address';
import { Amount } from './amount';
import { ApplicationInfo } from './applicationInfo';
import { Company } from './company';
import { Configuration } from './configuration';
import { ForexQuote } from './forexQuote';
import { Installments } from './installments';
import { LineItem } from './lineItem';
import { Mandate } from './mandate';
import { Name } from './name';
import { RiskData } from './riskData';
import { Split } from './split';

export class PaymentSetupRequest {
    /**
    * This field contains additional data, which may be required for a particular payment request.  The `additionalData` object consists of entries, each of which includes the key and value.
    */
    'additionalData'?: { [key: string]: string; };
    /**
    * List of payment methods to be presented to the shopper. To refer to payment methods, use their `paymentMethod.type`from [Payment methods overview](https://docs.adyen.com/payment-methods).  Example: `\"allowedPaymentMethods\":[\"ideal\",\"giropay\"]`
    */
    'allowedPaymentMethods'?: Array<string>;
    'amount': Amount;
    'applicationInfo'?: ApplicationInfo;
    'billingAddress'?: Address;
    /**
    * List of payment methods to be hidden from the shopper. To refer to payment methods, use their `paymentMethod.type`from [Payment methods overview](https://docs.adyen.com/payment-methods).  Example: `\"blockedPaymentMethods\":[\"ideal\",\"giropay\"]`
    */
    'blockedPaymentMethods'?: Array<string>;
    /**
    * The delay between the authorisation and scheduled auto-capture, specified in hours.
    */
    'captureDelayHours'?: number;
    /**
    * The platform where a payment transaction takes place. This field is optional for filtering out payment methods that are only available on specific platforms. If this value is not set, then we will try to infer it from the `sdkVersion` or `token`.  Possible values: * iOS * Android * Web
    */
    'channel'?: PaymentSetupRequest.ChannelEnum;
    /**
    * Checkout attempt ID that corresponds to the Id generated for tracking user payment journey.
    */
    'checkoutAttemptId'?: string;
    'company'?: Company;
    'configuration'?: Configuration;
    /**
    * Conversion ID that corresponds to the Id generated for tracking user payment journey.
    */
    'conversionId'?: string;
    /**
    * The shopper country.  Format: [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) Example: NL or DE
    */
    'countryCode': string;
    /**
    * The shopper\'s date of birth.  Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD
    */
    'dateOfBirth'?: Date;
    'dccQuote'?: ForexQuote;
    'deliveryAddress'?: Address;
    /**
    * The date and time the purchased goods should be delivered.  Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD  Example: 2017-07-17T13:42:40.428+01:00
    */
    'deliveryDate'?: Date;
    /**
    * When true and `shopperReference` is provided, the shopper will be asked if the payment details should be stored for future one-click payments.
    */
    'enableOneClick'?: boolean;
    /**
    * When true and `shopperReference` is provided, the payment details will be tokenized for payouts.
    */
    'enablePayOut'?: boolean;
    /**
    * When true and `shopperReference` is provided, the payment details will be tokenized for recurring payments.
    */
    'enableRecurring'?: boolean;
    /**
    * The type of the entity the payment is processed for.
    */
    'entityType'?: PaymentSetupRequest.EntityTypeEnum;
    /**
    * An integer value that is added to the normal fraud score. The value can be either positive or negative.
    */
    'fraudOffset'?: number;
    'installments'?: Installments;
    /**
    * Price and product information about the purchased items, to be included on the invoice sent to the shopper. > This field is required for 3x 4x Oney, Affirm, Afterpay, Clearpay, Klarna, Ratepay, Zip and Atome.
    */
    'lineItems'?: Array<LineItem>;
    'mandate'?: Mandate;
    /**
    * The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.
    */
    'mcc'?: string;
    /**
    * The merchant account identifier, with which you want to process the transaction.
    */
    'merchantAccount': string;
    /**
    * This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle. The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations. > We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`.
    */
    'merchantOrderReference'?: string;
    /**
    * Metadata consists of entries, each of which includes a key and a value. Limits: * Maximum 20 key-value pairs per request. When exceeding, the \"177\" error occurs: \"Metadata size exceeds limit\". * Maximum 20 characters per key. * Maximum 80 characters per value. 
    */
    'metadata'?: { [key: string]: string; };
    /**
    * When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead.
    */
    'orderReference'?: string;
    /**
    * Required for the Web integration.  Set this parameter to the origin URL of the page that you are loading the SDK from.
    */
    'origin'?: string;
    /**
    * Date after which no further authorisations shall be performed. Only for 3D Secure 2.
    */
    'recurringExpiry'?: string;
    /**
    * Minimum number of days between authorisations. Only for 3D Secure 2.
    */
    'recurringFrequency'?: string;
    /**
    * The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement. If you need to provide multiple references for a transaction, separate them with hyphens (\"-\"). Maximum length: 80 characters.
    */
    'reference': string;
    /**
    * The URL to return to in case of a redirection. The format depends on the channel. This URL can have a maximum of 1024 characters. * For web, include the protocol `http://` or `https://`. You can also include your own additional query parameters, for example, shopper ID or order reference number. Example: `https://your-company.com/checkout?shopperOrder=12xy` * For iOS, use the custom URL for your app. To know more about setting custom URL schemes, refer to the [Apple Developer documentation](https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app). Example: `my-app://` * For Android, use a custom URL handled by an Activity on your app. You can configure it with an [intent filter](https://developer.android.com/guide/components/intents-filters). Example: `my-app://your.package.name`
    */
    'returnUrl': string;
    'riskData'?: RiskData;
    /**
    * The version of the SDK you are using (for Web SDK integrations only).
    */
    'sdkVersion'?: string;
    /**
    * The date and time until when the session remains valid, in [ISO 8601](https://www.w3.org/TR/NOTE-datetime) format.  For example: 2020-07-18T15:42:40.428+01:00
    */
    'sessionValidity'?: string;
    /**
    * The shopper\'s email address. We recommend that you provide this data, as it is used in velocity fraud checks. > For 3D Secure 2 transactions, schemes require `shopperEmail` for all browser-based and mobile implementations.
    */
    'shopperEmail'?: string;
    /**
    * The shopper\'s IP address. In general, we recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks). > For 3D Secure 2 transactions, schemes require `shopperIP` for all browser-based implementations. This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://support.adyen.com/hc/en-us/requests/new).
    */
    'shopperIP'?: string;
    /**
    * Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer. For the web service API, Adyen assumes Ecommerce shopper interaction by default.  This field has the following possible values: * `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request. * `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment). * `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone. * `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.
    */
    'shopperInteraction'?: PaymentSetupRequest.ShopperInteractionEnum;
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
    * The text to be shown on the shopper\'s bank statement.  We recommend sending a maximum of 22 characters, otherwise banks might truncate the string.  Allowed characters: **a-z**, **A-Z**, **0-9**, spaces, and special characters **. , \' _ - ? + * /_**.
    */
    'shopperStatement'?: string;
    /**
    * The shopper\'s social security number.
    */
    'socialSecurityNumber'?: string;
    /**
    * An array of objects specifying how the payment should be split when using [Adyen for Platforms](https://docs.adyen.com/platforms/processing-payments#providing-split-information) or [Issuing](https://docs.adyen.com/issuing/manage-funds#split).
    */
    'splits'?: Array<Split>;
    /**
    * The ecommerce or point-of-sale store that is processing the payment. Used in [partner arrangement integrations](https://docs.adyen.com/platforms/platforms-for-partners#route-payments) for Adyen for Platforms.
    */
    'store'?: string;
    /**
    * When true and `shopperReference` is provided, the payment details will be stored.
    */
    'storePaymentMethod'?: boolean;
    /**
    * The shopper\'s telephone number.
    */
    'telephoneNumber'?: string;
    /**
    * If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation.
    */
    'threeDSAuthenticationOnly'?: boolean;
    /**
    * The token obtained when initializing the SDK.  > This parameter is required for iOS and Android; not required for Web.
    */
    'token'?: string;
    /**
    * Set to true if the payment should be routed to a trusted MID.
    */
    'trustedShopper'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "additionalData",
            "baseName": "additionalData",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "allowedPaymentMethods",
            "baseName": "allowedPaymentMethods",
            "type": "Array<string>"
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
            "name": "billingAddress",
            "baseName": "billingAddress",
            "type": "Address"
        },
        {
            "name": "blockedPaymentMethods",
            "baseName": "blockedPaymentMethods",
            "type": "Array<string>"
        },
        {
            "name": "captureDelayHours",
            "baseName": "captureDelayHours",
            "type": "number"
        },
        {
            "name": "channel",
            "baseName": "channel",
            "type": "PaymentSetupRequest.ChannelEnum"
        },
        {
            "name": "checkoutAttemptId",
            "baseName": "checkoutAttemptId",
            "type": "string"
        },
        {
            "name": "company",
            "baseName": "company",
            "type": "Company"
        },
        {
            "name": "configuration",
            "baseName": "configuration",
            "type": "Configuration"
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
            "name": "dccQuote",
            "baseName": "dccQuote",
            "type": "ForexQuote"
        },
        {
            "name": "deliveryAddress",
            "baseName": "deliveryAddress",
            "type": "Address"
        },
        {
            "name": "deliveryDate",
            "baseName": "deliveryDate",
            "type": "Date"
        },
        {
            "name": "enableOneClick",
            "baseName": "enableOneClick",
            "type": "boolean"
        },
        {
            "name": "enablePayOut",
            "baseName": "enablePayOut",
            "type": "boolean"
        },
        {
            "name": "enableRecurring",
            "baseName": "enableRecurring",
            "type": "boolean"
        },
        {
            "name": "entityType",
            "baseName": "entityType",
            "type": "PaymentSetupRequest.EntityTypeEnum"
        },
        {
            "name": "fraudOffset",
            "baseName": "fraudOffset",
            "type": "number"
        },
        {
            "name": "installments",
            "baseName": "installments",
            "type": "Installments"
        },
        {
            "name": "lineItems",
            "baseName": "lineItems",
            "type": "Array<LineItem>"
        },
        {
            "name": "mandate",
            "baseName": "mandate",
            "type": "Mandate"
        },
        {
            "name": "mcc",
            "baseName": "mcc",
            "type": "string"
        },
        {
            "name": "merchantAccount",
            "baseName": "merchantAccount",
            "type": "string"
        },
        {
            "name": "merchantOrderReference",
            "baseName": "merchantOrderReference",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "orderReference",
            "baseName": "orderReference",
            "type": "string"
        },
        {
            "name": "origin",
            "baseName": "origin",
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
            "name": "riskData",
            "baseName": "riskData",
            "type": "RiskData"
        },
        {
            "name": "sdkVersion",
            "baseName": "sdkVersion",
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
            "type": "PaymentSetupRequest.ShopperInteractionEnum"
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
            "name": "shopperStatement",
            "baseName": "shopperStatement",
            "type": "string"
        },
        {
            "name": "socialSecurityNumber",
            "baseName": "socialSecurityNumber",
            "type": "string"
        },
        {
            "name": "splits",
            "baseName": "splits",
            "type": "Array<Split>"
        },
        {
            "name": "store",
            "baseName": "store",
            "type": "string"
        },
        {
            "name": "storePaymentMethod",
            "baseName": "storePaymentMethod",
            "type": "boolean"
        },
        {
            "name": "telephoneNumber",
            "baseName": "telephoneNumber",
            "type": "string"
        },
        {
            "name": "threeDSAuthenticationOnly",
            "baseName": "threeDSAuthenticationOnly",
            "type": "boolean"
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "string"
        },
        {
            "name": "trustedShopper",
            "baseName": "trustedShopper",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return PaymentSetupRequest.attributeTypeMap;
    }
}

export namespace PaymentSetupRequest {
    export enum ChannelEnum {
        IOs = <any> 'iOS',
        Android = <any> 'Android',
        Web = <any> 'Web'
    }
    export enum EntityTypeEnum {
        NaturalPerson = <any> 'NaturalPerson',
        CompanyName = <any> 'CompanyName'
    }
    export enum ShopperInteractionEnum {
        Ecommerce = <any> 'Ecommerce',
        ContAuth = <any> 'ContAuth',
        Moto = <any> 'Moto',
        Pos = <any> 'POS'
    }
}
