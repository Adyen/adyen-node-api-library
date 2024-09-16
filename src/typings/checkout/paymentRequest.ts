/*
 * The version of the OpenAPI document: v71
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { AccountInfo } from './accountInfo';
import { AchDetails } from './achDetails';
import { AfterpayDetails } from './afterpayDetails';
import { AmazonPayDetails } from './amazonPayDetails';
import { Amount } from './amount';
import { AncvDetails } from './ancvDetails';
import { AndroidPayDetails } from './androidPayDetails';
import { ApplePayDetails } from './applePayDetails';
import { ApplicationInfo } from './applicationInfo';
import { AuthenticationData } from './authenticationData';
import { BacsDirectDebitDetails } from './bacsDirectDebitDetails';
import { BillDeskDetails } from './billDeskDetails';
import { BillingAddress } from './billingAddress';
import { BlikDetails } from './blikDetails';
import { BrowserInfo } from './browserInfo';
import { CardDetails } from './cardDetails';
import { CashAppDetails } from './cashAppDetails';
import { CellulantDetails } from './cellulantDetails';
import { Company } from './company';
import { DeliveryAddress } from './deliveryAddress';
import { DokuDetails } from './dokuDetails';
import { DotpayDetails } from './dotpayDetails';
import { DragonpayDetails } from './dragonpayDetails';
import { EcontextVoucherDetails } from './econtextVoucherDetails';
import { EftDetails } from './eftDetails';
import { EncryptedOrderData } from './encryptedOrderData';
import { ForexQuote } from './forexQuote';
import { FundOrigin } from './fundOrigin';
import { FundRecipient } from './fundRecipient';
import { GenericIssuerPaymentMethodDetails } from './genericIssuerPaymentMethodDetails';
import { GiropayDetails } from './giropayDetails';
import { GooglePayDetails } from './googlePayDetails';
import { IdealDetails } from './idealDetails';
import { Installments } from './installments';
import { KlarnaDetails } from './klarnaDetails';
import { LineItem } from './lineItem';
import { Mandate } from './mandate';
import { MasterpassDetails } from './masterpassDetails';
import { MbwayDetails } from './mbwayDetails';
import { MerchantRiskIndicator } from './merchantRiskIndicator';
import { MobilePayDetails } from './mobilePayDetails';
import { MolPayDetails } from './molPayDetails';
import { Name } from './name';
import { OpenInvoiceDetails } from './openInvoiceDetails';
import { PayByBankDetails } from './payByBankDetails';
import { PayPalDetails } from './payPalDetails';
import { PayToDetails } from './payToDetails';
import { PayUUpiDetails } from './payUUpiDetails';
import { PayWithGoogleDetails } from './payWithGoogleDetails';
import { PaymentDetails } from './paymentDetails';
import { PlatformChargebackLogic } from './platformChargebackLogic';
import { RatepayDetails } from './ratepayDetails';
import { RiskData } from './riskData';
import { SamsungPayDetails } from './samsungPayDetails';
import { SepaDirectDebitDetails } from './sepaDirectDebitDetails';
import { Split } from './split';
import { StoredPaymentMethodDetails } from './storedPaymentMethodDetails';
import { SubMerchantInfo } from './subMerchantInfo';
import { ThreeDS2RequestFields } from './threeDS2RequestFields';
import { ThreeDSecureData } from './threeDSecureData';
import { UpiCollectDetails } from './upiCollectDetails';
import { UpiIntentDetails } from './upiIntentDetails';
import { VippsDetails } from './vippsDetails';
import { VisaCheckoutDetails } from './visaCheckoutDetails';
import { WeChatPayDetails } from './weChatPayDetails';
import { WeChatPayMiniProgramDetails } from './weChatPayMiniProgramDetails';
import { ZipDetails } from './zipDetails';

export class PaymentRequest {
    'accountInfo'?: AccountInfo;
    'additionalAmount'?: Amount;
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
    * The delay between the authorisation and scheduled auto-capture, specified in hours.
    */
    'captureDelayHours'?: number;
    /**
    * The platform where a payment transaction takes place. This field is optional for filtering out payment methods that are only available on specific platforms. If this value is not set, then we will try to infer it from the `sdkVersion` or `token`.  Possible values: * iOS * Android * Web
    */
    'channel'?: PaymentRequest.ChannelEnum;
    /**
    * Checkout attempt ID that corresponds to the Id generated by the client SDK for tracking user payment journey.
    */
    'checkoutAttemptId'?: string;
    'company'?: Company;
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
    'dccQuote'?: ForexQuote;
    /**
    * The date and time the purchased goods should be delivered.  Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD  Example: 2017-07-17T13:42:40.428+01:00
    */
    'deliverAt'?: Date;
    'deliveryAddress'?: DeliveryAddress;
    /**
    * The date and time the purchased goods should be delivered.  Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD  Example: 2017-07-17T13:42:40.428+01:00
    */
    'deliveryDate'?: Date;
    /**
    * A string containing the shopper\'s device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).
    */
    'deviceFingerprint'?: string;
    /**
    * When true and `shopperReference` is provided, the shopper will be asked if the payment details should be stored for future [one-click payments](https://docs.adyen.com/get-started-with-adyen/payment-glossary/#one-click-payments-definition).
    */
    'enableOneClick'?: boolean;
    /**
    * When true and `shopperReference` is provided, the payment details will be tokenized for payouts.
    */
    'enablePayOut'?: boolean;
    /**
    * When true and `shopperReference` is provided, the payment details will be stored for [recurring payments](https://docs.adyen.com/online-payments/tokenization/#recurring-payment-types) where the shopper is not present, such as subscription or automatic top-up payments.
    */
    'enableRecurring'?: boolean;
    /**
    * The type of the entity the payment is processed for.
    */
    'entityType'?: PaymentRequest.EntityTypeEnum;
    /**
    * An integer value that is added to the normal fraud score. The value can be either positive or negative.
    */
    'fraudOffset'?: number;
    'fundOrigin'?: FundOrigin;
    'fundRecipient'?: FundRecipient;
    /**
    * The reason for the amount update. Possible values:  * **delayedCharge**  * **noShow**  * **installment**
    */
    'industryUsage'?: PaymentRequest.IndustryUsageEnum;
    'installments'?: Installments;
    /**
    * Price and product information about the purchased items, to be included on the invoice sent to the shopper. > This field is required for 3x 4x Oney, Affirm, Afterpay, Clearpay, Klarna, Ratepay, and Zip.
    */
    'lineItems'?: Array<LineItem>;
    /**
    * The `localizedShopperStatement` field lets you use dynamic values for your shopper statement in a local character set. If not supplied, left empty, or for cross-border transactions, **shopperStatement** is used.  Adyen currently supports the ja-Kana character set for Visa and Mastercard payments in Japan using Japanese cards. This character set supports:  * UTF-8 based Katakana, capital letters, numbers and special characters.  * Half-width or full-width characters.
    */
    'localizedShopperStatement'?: { [key: string]: string; };
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
    'merchantRiskIndicator'?: MerchantRiskIndicator;
    /**
    * Metadata consists of entries, each of which includes a key and a value. Limits: * Maximum 20 key-value pairs per request. When exceeding, the \"177\" error occurs: \"Metadata size exceeds limit\". * Maximum 20 characters per key. * Maximum 80 characters per value. 
    */
    'metadata'?: { [key: string]: string; };
    'mpiData'?: ThreeDSecureData;
    'order'?: EncryptedOrderData;
    /**
    * When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead.
    */
    'orderReference'?: string;
    /**
    * Required for the 3D Secure 2 `channel` **Web** integration.  Set this parameter to the origin URL of the page that you are loading the 3D Secure Component from.
    */
    'origin'?: string;
    /**
    * The type and required details of a payment method to use.
    */
    'paymentMethod': AchDetails | AfterpayDetails | AmazonPayDetails | AncvDetails | AndroidPayDetails | ApplePayDetails | BacsDirectDebitDetails | BillDeskDetails | BlikDetails | CardDetails | CashAppDetails | CellulantDetails | DokuDetails | DotpayDetails | DragonpayDetails | EcontextVoucherDetails | EftDetails | GenericIssuerPaymentMethodDetails | GiropayDetails | GooglePayDetails | IdealDetails | KlarnaDetails | MasterpassDetails | MbwayDetails | MobilePayDetails | MolPayDetails | OpenInvoiceDetails | PayByBankDetails | PayPalDetails | PayToDetails | PayUUpiDetails | PayWithGoogleDetails | PaymentDetails | RatepayDetails | SamsungPayDetails | SepaDirectDebitDetails | StoredPaymentMethodDetails | UpiCollectDetails | UpiIntentDetails | VippsDetails | VisaCheckoutDetails | WeChatPayDetails | WeChatPayMiniProgramDetails | ZipDetails | null;
    'platformChargebackLogic'?: PlatformChargebackLogic;
    /**
    * Date after which no further authorisations shall be performed. Only for 3D Secure 2.
    */
    'recurringExpiry'?: string;
    /**
    * Minimum number of days between authorisations. Only for 3D Secure 2.
    */
    'recurringFrequency'?: string;
    /**
    * Defines a recurring payment type. Required when creating a token to store payment details or using stored payment details. Allowed values: * `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule. * `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction. * `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder\'s balance drops below a certain amount. 
    */
    'recurringProcessingModel'?: PaymentRequest.RecurringProcessingModelEnum;
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
    * The URL to return to in case of a redirection. The format depends on the channel.  * For web, include the protocol `http://` or `https://`. You can also include your own additional query parameters, for example, shopper ID or order reference number. Example: `https://your-company.com/checkout?shopperOrder=12xy` * For iOS, use the custom URL for your app. To know more about setting custom URL schemes, refer to the [Apple Developer documentation](https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app). Example: `my-app://` * For Android, use a custom URL handled by an Activity on your app. You can configure it with an [intent filter](https://developer.android.com/guide/components/intents-filters). Example: `my-app://your.package.name` If the URL to return to includes non-ASCII characters, like spaces or special letters, URL encode the value. > The URL must not include personally identifiable information (PII), for example name or email address.
    */
    'returnUrl': string;
    'riskData'?: RiskData;
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
    'shopperInteraction'?: PaymentRequest.ShopperInteractionEnum;
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
    * An array of objects specifying how to split a payment when using [Adyen for Platforms](https://docs.adyen.com/platforms/process-payments#providing-split-information), [Classic Platforms integration](https://docs.adyen.com/classic-platforms/processing-payments#providing-split-information), or [Issuing](https://docs.adyen.com/issuing/manage-funds#split).
    */
    'splits'?: Array<Split>;
    /**
    * Required for Adyen for Platforms integrations if you are a platform model. This is your [reference](https://docs.adyen.com/api-explorer/Management/3/post/merchants/(merchantId)/stores#request-reference) (on [balance platform](https://docs.adyen.com/platforms)) or the [storeReference](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccountHolder#request-accountHolderDetails-storeDetails-storeReference) (in the [classic integration](https://docs.adyen.com/classic-platforms/processing-payments/route-payment-to-store/#route-a-payment-to-a-store)) for the ecommerce or point-of-sale store that is processing the payment.
    */
    'store'?: string;
    /**
    * When true and `shopperReference` is provided, the payment details will be stored for future [recurring payments](https://docs.adyen.com/online-payments/tokenization/#recurring-payment-types).
    */
    'storePaymentMethod'?: boolean;
    /**
    * This field contains additional information on the submerchant, who is onboarded to an acquirer through a payment facilitator or aggregator
    */
    'subMerchants'?: Array<SubMerchantInfo>;
    /**
    * The shopper\'s telephone number.
    */
    'telephoneNumber'?: string;
    'threeDS2RequestData'?: ThreeDS2RequestFields;
    /**
    * If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/online-payments/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation.
    */
    'threeDSAuthenticationOnly'?: boolean;
    /**
    * Set to true if the payment should be routed to a trusted MID.
    */
    'trustedShopper'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountInfo",
            "baseName": "accountInfo",
            "type": "AccountInfo"
        },
        {
            "name": "additionalAmount",
            "baseName": "additionalAmount",
            "type": "Amount"
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
            "name": "captureDelayHours",
            "baseName": "captureDelayHours",
            "type": "number"
        },
        {
            "name": "channel",
            "baseName": "channel",
            "type": "PaymentRequest.ChannelEnum"
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
            "name": "deliveryDate",
            "baseName": "deliveryDate",
            "type": "Date"
        },
        {
            "name": "deviceFingerprint",
            "baseName": "deviceFingerprint",
            "type": "string"
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
            "type": "PaymentRequest.EntityTypeEnum"
        },
        {
            "name": "fraudOffset",
            "baseName": "fraudOffset",
            "type": "number"
        },
        {
            "name": "fundOrigin",
            "baseName": "fundOrigin",
            "type": "FundOrigin"
        },
        {
            "name": "fundRecipient",
            "baseName": "fundRecipient",
            "type": "FundRecipient"
        },
        {
            "name": "industryUsage",
            "baseName": "industryUsage",
            "type": "PaymentRequest.IndustryUsageEnum"
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
            "name": "localizedShopperStatement",
            "baseName": "localizedShopperStatement",
            "type": "{ [key: string]: string; }"
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
            "name": "order",
            "baseName": "order",
            "type": "EncryptedOrderData"
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
            "name": "paymentMethod",
            "baseName": "paymentMethod",
            "type": "AchDetails | AfterpayDetails | AmazonPayDetails | AncvDetails | AndroidPayDetails | ApplePayDetails | BacsDirectDebitDetails | BillDeskDetails | BlikDetails | CardDetails | CashAppDetails | CellulantDetails | DokuDetails | DotpayDetails | DragonpayDetails | EcontextVoucherDetails | EftDetails | GenericIssuerPaymentMethodDetails | GiropayDetails | GooglePayDetails | IdealDetails | KlarnaDetails | MasterpassDetails | MbwayDetails | MobilePayDetails | MolPayDetails | OpenInvoiceDetails | PayByBankDetails | PayPalDetails | PayToDetails | PayUUpiDetails | PayWithGoogleDetails | PaymentDetails | RatepayDetails | SamsungPayDetails | SepaDirectDebitDetails | StoredPaymentMethodDetails | UpiCollectDetails | UpiIntentDetails | VippsDetails | VisaCheckoutDetails | WeChatPayDetails | WeChatPayMiniProgramDetails | ZipDetails | null"
        },
        {
            "name": "platformChargebackLogic",
            "baseName": "platformChargebackLogic",
            "type": "PlatformChargebackLogic"
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
            "name": "recurringProcessingModel",
            "baseName": "recurringProcessingModel",
            "type": "PaymentRequest.RecurringProcessingModelEnum"
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
            "name": "riskData",
            "baseName": "riskData",
            "type": "RiskData"
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
            "type": "PaymentRequest.ShopperInteractionEnum"
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
            "name": "subMerchants",
            "baseName": "subMerchants",
            "type": "Array<SubMerchantInfo>"
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
        },
        {
            "name": "trustedShopper",
            "baseName": "trustedShopper",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return PaymentRequest.attributeTypeMap;
    }
}

export namespace PaymentRequest {
    export enum ChannelEnum {
        IOs = 'iOS',
        Android = 'Android',
        Web = 'Web'
    }
    export enum EntityTypeEnum {
        NaturalPerson = 'NaturalPerson',
        CompanyName = 'CompanyName'
    }
    export enum IndustryUsageEnum {
        DelayedCharge = 'delayedCharge',
        Installment = 'installment',
        NoShow = 'noShow'
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
