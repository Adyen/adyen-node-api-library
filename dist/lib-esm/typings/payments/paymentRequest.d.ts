/**
 * Adyen Payment Service
 * A set of API endpoints that allow you to initiate, settle, and modify payments on the Adyen payments platform. You can use the API to accept card payments (including One-Click and 3D Secure), bank transfers, ewallets, and many other payment methods.  To learn more about the API, visit [Classic integration](https://docs.adyen.com/classic-integration).  ## Authentication To connect to the Payments API, you must use your basic authentication credentials. For this, create your web service user, as described in [How to get the WS user password](https://docs.adyen.com/user-management/how-to-get-the-web-service-ws-user-password). Then use its credentials to authenticate your request, for example:  ``` curl -U \"ws@Company.YourCompany\":\"YourWsPassword\" \\ -H \"Content-Type: application/json\" \\ ... ``` Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Payments API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://pal-test.adyen.com/pal/servlet/Payment/v46/authorise ```
 *
 * OpenAPI spec version: 46
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */ import { AccountInfo } from './accountInfo';
import { Address } from './address';
import { Amount } from './amount';
import { BankAccount } from './bankAccount';
import { BrowserInfo } from './browserInfo';
import { Card } from './card';
import { ForexQuote } from './forexQuote';
import { Installments } from './installments';
import { MerchantRiskIndicator } from './merchantRiskIndicator';
import { Name } from './name';
import { Recurring } from './recurring';
import { Split } from './split';
import { ThreeDS2RequestData } from './threeDS2RequestData';
import { ThreeDSecureData } from './threeDSecureData';
export interface PaymentRequest {
    accountInfo?: AccountInfo;
    additionalAmount?: Amount;
    /**
     * This field contains additional data, which may be required for a particular payment request.
     */
    additionalData?: any;
    amount: Amount;
    bankAccount?: BankAccount;
    billingAddress?: Address;
    browserInfo?: BrowserInfo;
    /**
     * The delay between the authorisation and scheduled auto-capture, specified in hours.
     */
    captureDelayHours?: number;
    card?: Card;
    /**
     * The shopper's date of birth.  Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD
     */
    dateOfBirth?: Date;
    dccQuote?: ForexQuote;
    deliveryAddress?: Address;
    /**
     * The date and time the purchased goods should be delivered.  Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD  Example: 2017-07-17T13:42:40.428+01:00
     */
    deliveryDate?: Date;
    /**
     * A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).
     */
    deviceFingerprint?: string;
    /**
     * The type of the entity the payment is processed for.
     */
    entityType?: PaymentRequest.EntityTypeEnum;
    /**
     * An integer value that is added to the normal fraud score. The value can be either positive or negative.
     */
    fraudOffset?: number;
    installments?: Installments;
    /**
     * The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.
     */
    mcc?: string;
    /**
     * The merchant account identifier, with which you want to process the transaction.
     */
    merchantAccount: string;
    /**
     * This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle. The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations. > We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`.
     */
    merchantOrderReference?: string;
    merchantRiskIndicator?: MerchantRiskIndicator;
    /**
     * Metadata consists of entries, each of which includes a key and a value. Limitations: Error \"177\", \"Metadata size exceeds limit\"
     */
    metadata?: any;
    mpiData?: ThreeDSecureData;
    /**
     * The two-character country code of the shopper's nationality.
     */
    nationality?: string;
    /**
     * When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead.
     */
    orderReference?: string;
    recurring?: Recurring;
    /**
     * Defines a recurring payment type. Allowed values: * `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule. * `CardOnFile` – Card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction. * `UnscheduledCardOnFile` – A transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.
     */
    recurringProcessingModel?: PaymentRequest.RecurringProcessingModelEnum;
    /**
     * The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement. If you need to provide multiple references for a transaction, separate them with hyphens (\"-\"). Maximum length: 80 characters.
     */
    reference: string;
    /**
     * Some payment methods require defining a value for this field to specify how to process the transaction.  For the Bancontact payment method, it can be set to: * `maestro` (default), to be processed like a Maestro card, or * `bcmc`, to be processed like a Bancontact card.
     */
    selectedBrand?: string;
    /**
     * The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used to select the most recently stored recurring detail.
     */
    selectedRecurringDetailReference?: string;
    /**
     * A session ID used to identify a payment session.
     */
    sessionId?: string;
    /**
     * The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks. > For 3D Secure 2 transactions, schemes require the `shopperEmail` for both `deviceChannel` **browser** and **app**.
     */
    shopperEmail?: string;
    /**
     * The shopper's IP address. We recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks). > This field is mandatory for some merchants depending on your business model. For more information, [contact Support](https://support.adyen.com/hc/en-us/requests/new).
     */
    shopperIP?: string;
    /**
     * Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer. For the web service API, Adyen assumes Ecommerce shopper interaction by default.  This field has the following possible values: * `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request. * `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment). * `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone. * `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.
     */
    shopperInteraction?: PaymentRequest.ShopperInteractionEnum;
    /**
     * The combination of a language code and a country code to specify the language to be used in the payment.
     */
    shopperLocale?: string;
    shopperName?: Name;
    /**
     * The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID). > This field is required for recurring payments.
     */
    shopperReference?: string;
    /**
     * The text to appear on the shopper's bank statement.
     */
    shopperStatement?: string;
    /**
     * The shopper's social security number.
     */
    socialSecurityNumber?: string;
    /**
     * The details of how the payment should be split when distributing a payment to a MarketPay Marketplace and its Accounts.
     */
    splits?: Split[];
    /**
     * The physical store, for which this payment is processed.
     */
    store?: string;
    /**
     * The shopper's telephone number.
     */
    telephoneNumber?: string;
    threeDS2RequestData?: ThreeDS2RequestData;
    /**
     * The reference value to aggregate sales totals in reporting. When not specified, the store field is used (if available).
     */
    totalsGroup?: string;
    /**
     * Set to true if the payment should be routed to a trusted MID.
     */
    trustedShopper?: boolean;
}
export declare namespace PaymentRequest {
    type EntityTypeEnum = 'NaturalPerson' | 'CompanyName';
    const EntityTypeEnum: {
        NaturalPerson: import("../checkout").PaymentRequest.EntityTypeEnum;
        CompanyName: import("../checkout").PaymentRequest.EntityTypeEnum;
    };
    type RecurringProcessingModelEnum = 'CardOnFile' | 'Subscription' | 'UnscheduledCardOnFile';
    const RecurringProcessingModelEnum: {
        CardOnFile: import("../checkout").PaymentRequest.RecurringProcessingModelEnum;
        Subscription: import("../checkout").PaymentRequest.RecurringProcessingModelEnum;
        UnscheduledCardOnFile: import("../checkout").PaymentRequest.RecurringProcessingModelEnum;
    };
    type ShopperInteractionEnum = 'Ecommerce' | 'ContAuth' | 'Moto' | 'POS';
    const ShopperInteractionEnum: {
        Ecommerce: import("../checkout").PaymentRequest.ShopperInteractionEnum;
        ContAuth: import("../checkout").PaymentRequest.ShopperInteractionEnum;
        Moto: import("../checkout").PaymentRequest.ShopperInteractionEnum;
        POS: import("../checkout").PaymentRequest.ShopperInteractionEnum;
    };
}
