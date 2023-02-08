/*
 * The version of the OpenAPI document: v70
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class ResponseAdditionalDataCommon {
    /**
    * The name of the Adyen acquirer account.  Example: PayPalSandbox_TestAcquirer  > Only relevant for PayPal transactions.
    */
    'acquirerAccountCode'?: string;
    /**
    * The name of the acquirer processing the payment request.  Example: TestPmmAcquirer
    */
    'acquirerCode'?: string;
    /**
    * The reference number that can be used for reconciliation in case a non-Adyen acquirer is used for settlement.  Example: 7C9N3FNBKT9
    */
    'acquirerReference'?: string;
    /**
    * The Adyen alias of the card.  Example: H167852639363479
    */
    'alias'?: string;
    /**
    * The type of the card alias.  Example: Default
    */
    'aliasType'?: string;
    /**
    * Authorisation code: * When the payment is authorised successfully, this field holds the authorisation code for the payment. * When the payment is not authorised, this field is empty.  Example: 58747
    */
    'authCode'?: string;
    /**
    * Merchant ID known by the acquirer.
    */
    'authorisationMid'?: string;
    /**
    * The currency of the authorised amount, as a three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).
    */
    'authorisedAmountCurrency'?: string;
    /**
    * Value of the amount authorised.  This amount is represented in minor units according to the [following table](https://docs.adyen.com/development-resources/currency-codes).
    */
    'authorisedAmountValue'?: string;
    /**
    * The AVS result code of the payment, which provides information about the outcome of the AVS check.  For possible values, see [AVS](https://docs.adyen.com/risk-management/configure-standard-risk-rules/consistency-rules#billing-address-does-not-match-cardholder-address-avs).
    */
    'avsResult'?: string;
    /**
    * Raw AVS result received from the acquirer, where available.  Example: D
    */
    'avsResultRaw'?: string;
    /**
    * BIC of a bank account.  Example: TESTNL01  > Only relevant for SEPA Direct Debit transactions.
    */
    'bic'?: string;
    /**
    * Includes the co-branded card information.
    */
    'coBrandedWith'?: string;
    /**
    * The result of CVC verification.
    */
    'cvcResult'?: string;
    /**
    * The raw result of CVC verification.
    */
    'cvcResultRaw'?: string;
    /**
    * Supported for 3D Secure 2. The unique transaction identifier assigned by the DS to identify a single transaction.
    */
    'dsTransID'?: string;
    /**
    * The Electronic Commerce Indicator returned from the schemes for the 3DS payment session.  Example: 02
    */
    'eci'?: string;
    /**
    * The expiry date on the card.  Example: 6/2016  > Returned only in case of a card payment.
    */
    'expiryDate'?: string;
    /**
    * The currency of the extra amount charged due to additional amounts set in the skin used in the HPP payment request.  Example: EUR
    */
    'extraCostsCurrency'?: string;
    /**
    * The value of the extra amount charged due to additional amounts set in the skin used in the HPP payment request. The amount is in minor units.
    */
    'extraCostsValue'?: string;
    /**
    * The fraud score due to a particular fraud check. The fraud check name is found in the key of the key-value pair.
    */
    'fraudCheckItemNrFraudCheckname'?: string;
    /**
    * Indicates if the payment is sent to manual review.
    */
    'fraudManualReview'?: string;
    /**
    * The fraud result properties of the payment.
    */
    'fraudResultType'?: ResponseAdditionalDataCommon.FraudResultTypeEnum;
    /**
    * Information regarding the funding type of the card. The possible return values are: * CHARGE * CREDIT * DEBIT * PREPAID * PREPAID_RELOADABLE  * PREPAID_NONRELOADABLE * DEFFERED_DEBIT  > This functionality requires additional configuration on Adyen\'s end. To enable it, contact the Support Team.  For receiving this field in the notification, enable **Include Funding Source** in **Notifications** > **Additional settings**.
    */
    'fundingSource'?: string;
    /**
    * Indicates availability of funds.  Visa: * \"I\" (fast funds are supported) * \"N\" (otherwise)  Mastercard: * \"I\" (product type is Prepaid or Debit, or issuing country is in CEE/HGEM list) * \"N\" (otherwise)  > Returned when you verify a card BIN or estimate costs, and only if payoutEligible is \"Y\" or \"D\".
    */
    'fundsAvailability'?: string;
    /**
    * Provides the more granular indication of why a transaction was refused. When a transaction fails with either \"Refused\", \"Restricted Card\", \"Transaction Not Permitted\", \"Not supported\" or \"DeclinedNon Generic\" refusalReason from the issuer, Adyen cross references its PSP-wide data for extra insight into the refusal reason. If an inferred refusal reason is available, the `inferredRefusalReason`, field is populated and the `refusalReason`, is set to \"Not Supported\".  Possible values:  * 3D Secure Mandated * Closed Account * ContAuth Not Supported * CVC Mandated * Ecommerce Not Allowed * Crossborder Not Supported * Card Updated  * Low Authrate Bin * Non-reloadable prepaid card
    */
    'inferredRefusalReason'?: string;
    /**
    * Indicates if the card is used for business purposes only.
    */
    'isCardCommercial'?: string;
    /**
    * The issuing country of the card based on the BIN list that Adyen maintains.  Example: JP
    */
    'issuerCountry'?: string;
    /**
    * A Boolean value indicating whether a liability shift was offered for this payment.
    */
    'liabilityShift'?: string;
    /**
    * The `mcBankNetReferenceNumber`, is a minimum of six characters and a maximum of nine characters long.  > Contact Support Team to enable this field.
    */
    'mcBankNetReferenceNumber'?: string;
    /**
    * The Merchant Advice Code (MAC) can be returned by Mastercard issuers for refused payments. If present, the MAC contains information about why the payment failed, and whether it can be retried.  For more information see [Mastercard Merchant Advice Codes](https://docs.adyen.com/development-resources/raw-acquirer-responses#mastercard-merchant-advice-codes).
    */
    'merchantAdviceCode'?: string;
    /**
    * The reference provided for the transaction.
    */
    'merchantReference'?: string;
    /**
    * Returned in the response if you are not tokenizing with Adyen and are using the Merchant-initiated transactions (MIT) framework from Mastercard or Visa.  This contains either the Mastercard Trace ID or the Visa Transaction ID.
    */
    'networkTxReference'?: string;
    /**
    * The owner name of a bank account.  Only relevant for SEPA Direct Debit transactions.
    */
    'ownerName'?: string;
    /**
    * The Payment Account Reference (PAR) value links a network token with the underlying primary account number (PAN). The PAR value consists of 29 uppercase alphanumeric characters.
    */
    'paymentAccountReference'?: string;
    /**
    * The payment method used in the transaction.
    */
    'paymentMethod'?: string;
    /**
    * The Adyen sub-variant of the payment method used for the payment request.  For more information, refer to [PaymentMethodVariant](https://docs.adyen.com/development-resources/paymentmethodvariant).  Example: mcpro
    */
    'paymentMethodVariant'?: string;
    /**
    * Indicates whether a payout is eligible or not for this card.  Visa: * \"Y\" * \"N\"  Mastercard: * \"Y\" (domestic and cross-border)  * \"D\" (only domestic) * \"N\" (no MoneySend) * \"U\" (unknown)
    */
    'payoutEligible'?: string;
    /**
    * The response code from the Real Time Account Updater service.  Possible return values are: * CardChanged * CardExpiryChanged * CloseAccount  * ContactCardAccountHolder
    */
    'realtimeAccountUpdaterStatus'?: string;
    /**
    * Message to be displayed on the terminal.
    */
    'receiptFreeText'?: string;
    /**
    * The recurring contract types applicable to the transaction.
    */
    'recurringContractTypes'?: string;
    /**
    * The `pspReference`, of the first recurring payment that created the recurring detail.  This functionality requires additional configuration on Adyen\'s end. To enable it, contact the Support Team.
    */
    'recurringFirstPspReference'?: string;
    /**
    * The reference that uniquely identifies the recurring transaction.
    */
    'recurringRecurringDetailReference'?: string;
    /**
    * The provided reference of the shopper for a recurring transaction.
    */
    'recurringShopperReference'?: string;
    /**
    * The processing model used for the recurring transaction.
    */
    'recurringProcessingModel'?: ResponseAdditionalDataCommon.RecurringProcessingModelEnum;
    /**
    * If the payment is referred, this field is set to true.  This field is unavailable if the payment is referred and is usually not returned with ecommerce transactions.  Example: true
    */
    'referred'?: string;
    /**
    * Raw refusal reason received from the acquirer, where available.  Example: AUTHORISED
    */
    'refusalReasonRaw'?: string;
    /**
    * The amount of the payment request.
    */
    'requestAmount'?: string;
    /**
    * The currency of the payment request.
    */
    'requestCurrencyCode'?: string;
    /**
    * The shopper interaction type of the payment request.  Example: Ecommerce
    */
    'shopperInteraction'?: string;
    /**
    * The shopperReference passed in the payment request.  Example: AdyenTestShopperXX
    */
    'shopperReference'?: string;
    /**
    * The terminal ID used in a point-of-sale payment.  Example: 06022622
    */
    'terminalId'?: string;
    /**
    * A Boolean value indicating whether 3DS authentication was completed on this payment.  Example: true
    */
    'threeDAuthenticated'?: string;
    /**
    * The raw 3DS authentication result from the card issuer.  Example: N
    */
    'threeDAuthenticatedResponse'?: string;
    /**
    * A Boolean value indicating whether 3DS was offered for this payment.  Example: true
    */
    'threeDOffered'?: string;
    /**
    * The raw enrollment result from the 3DS directory services of the card schemes.  Example: Y
    */
    'threeDOfferedResponse'?: string;
    /**
    * The 3D Secure 2 version.
    */
    'threeDSVersion'?: string;
    /**
    * The `visaTransactionId`, has a fixed length of 15 numeric characters.  > Contact Support Team to enable this field.
    */
    'visaTransactionId'?: string;
    /**
    * The 3DS transaction ID of the 3DS session sent in notifications. The value is Base64-encoded and is returned for transactions with directoryResponse \'N\' or \'Y\'. If you want to submit the xid in your 3D Secure 1 request, use the `mpiData.xid`, field.  Example: ODgxNDc2MDg2MDExODk5MAAAAAA=
    */
    'xid'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "acquirerAccountCode",
            "baseName": "acquirerAccountCode",
            "type": "string"
        },
        {
            "name": "acquirerCode",
            "baseName": "acquirerCode",
            "type": "string"
        },
        {
            "name": "acquirerReference",
            "baseName": "acquirerReference",
            "type": "string"
        },
        {
            "name": "alias",
            "baseName": "alias",
            "type": "string"
        },
        {
            "name": "aliasType",
            "baseName": "aliasType",
            "type": "string"
        },
        {
            "name": "authCode",
            "baseName": "authCode",
            "type": "string"
        },
        {
            "name": "authorisationMid",
            "baseName": "authorisationMid",
            "type": "string"
        },
        {
            "name": "authorisedAmountCurrency",
            "baseName": "authorisedAmountCurrency",
            "type": "string"
        },
        {
            "name": "authorisedAmountValue",
            "baseName": "authorisedAmountValue",
            "type": "string"
        },
        {
            "name": "avsResult",
            "baseName": "avsResult",
            "type": "string"
        },
        {
            "name": "avsResultRaw",
            "baseName": "avsResultRaw",
            "type": "string"
        },
        {
            "name": "bic",
            "baseName": "bic",
            "type": "string"
        },
        {
            "name": "coBrandedWith",
            "baseName": "coBrandedWith",
            "type": "string"
        },
        {
            "name": "cvcResult",
            "baseName": "cvcResult",
            "type": "string"
        },
        {
            "name": "cvcResultRaw",
            "baseName": "cvcResultRaw",
            "type": "string"
        },
        {
            "name": "dsTransID",
            "baseName": "dsTransID",
            "type": "string"
        },
        {
            "name": "eci",
            "baseName": "eci",
            "type": "string"
        },
        {
            "name": "expiryDate",
            "baseName": "expiryDate",
            "type": "string"
        },
        {
            "name": "extraCostsCurrency",
            "baseName": "extraCostsCurrency",
            "type": "string"
        },
        {
            "name": "extraCostsValue",
            "baseName": "extraCostsValue",
            "type": "string"
        },
        {
            "name": "fraudCheckItemNrFraudCheckname",
            "baseName": "fraudCheck-[itemNr]-[FraudCheckname]",
            "type": "string"
        },
        {
            "name": "fraudManualReview",
            "baseName": "fraudManualReview",
            "type": "string"
        },
        {
            "name": "fraudResultType",
            "baseName": "fraudResultType",
            "type": "ResponseAdditionalDataCommon.FraudResultTypeEnum"
        },
        {
            "name": "fundingSource",
            "baseName": "fundingSource",
            "type": "string"
        },
        {
            "name": "fundsAvailability",
            "baseName": "fundsAvailability",
            "type": "string"
        },
        {
            "name": "inferredRefusalReason",
            "baseName": "inferredRefusalReason",
            "type": "string"
        },
        {
            "name": "isCardCommercial",
            "baseName": "isCardCommercial",
            "type": "string"
        },
        {
            "name": "issuerCountry",
            "baseName": "issuerCountry",
            "type": "string"
        },
        {
            "name": "liabilityShift",
            "baseName": "liabilityShift",
            "type": "string"
        },
        {
            "name": "mcBankNetReferenceNumber",
            "baseName": "mcBankNetReferenceNumber",
            "type": "string"
        },
        {
            "name": "merchantAdviceCode",
            "baseName": "merchantAdviceCode",
            "type": "string"
        },
        {
            "name": "merchantReference",
            "baseName": "merchantReference",
            "type": "string"
        },
        {
            "name": "networkTxReference",
            "baseName": "networkTxReference",
            "type": "string"
        },
        {
            "name": "ownerName",
            "baseName": "ownerName",
            "type": "string"
        },
        {
            "name": "paymentAccountReference",
            "baseName": "paymentAccountReference",
            "type": "string"
        },
        {
            "name": "paymentMethod",
            "baseName": "paymentMethod",
            "type": "string"
        },
        {
            "name": "paymentMethodVariant",
            "baseName": "paymentMethodVariant",
            "type": "string"
        },
        {
            "name": "payoutEligible",
            "baseName": "payoutEligible",
            "type": "string"
        },
        {
            "name": "realtimeAccountUpdaterStatus",
            "baseName": "realtimeAccountUpdaterStatus",
            "type": "string"
        },
        {
            "name": "receiptFreeText",
            "baseName": "receiptFreeText",
            "type": "string"
        },
        {
            "name": "recurringContractTypes",
            "baseName": "recurring.contractTypes",
            "type": "string"
        },
        {
            "name": "recurringFirstPspReference",
            "baseName": "recurring.firstPspReference",
            "type": "string"
        },
        {
            "name": "recurringRecurringDetailReference",
            "baseName": "recurring.recurringDetailReference",
            "type": "string"
        },
        {
            "name": "recurringShopperReference",
            "baseName": "recurring.shopperReference",
            "type": "string"
        },
        {
            "name": "recurringProcessingModel",
            "baseName": "recurringProcessingModel",
            "type": "ResponseAdditionalDataCommon.RecurringProcessingModelEnum"
        },
        {
            "name": "referred",
            "baseName": "referred",
            "type": "string"
        },
        {
            "name": "refusalReasonRaw",
            "baseName": "refusalReasonRaw",
            "type": "string"
        },
        {
            "name": "requestAmount",
            "baseName": "requestAmount",
            "type": "string"
        },
        {
            "name": "requestCurrencyCode",
            "baseName": "requestCurrencyCode",
            "type": "string"
        },
        {
            "name": "shopperInteraction",
            "baseName": "shopperInteraction",
            "type": "string"
        },
        {
            "name": "shopperReference",
            "baseName": "shopperReference",
            "type": "string"
        },
        {
            "name": "terminalId",
            "baseName": "terminalId",
            "type": "string"
        },
        {
            "name": "threeDAuthenticated",
            "baseName": "threeDAuthenticated",
            "type": "string"
        },
        {
            "name": "threeDAuthenticatedResponse",
            "baseName": "threeDAuthenticatedResponse",
            "type": "string"
        },
        {
            "name": "threeDOffered",
            "baseName": "threeDOffered",
            "type": "string"
        },
        {
            "name": "threeDOfferedResponse",
            "baseName": "threeDOfferedResponse",
            "type": "string"
        },
        {
            "name": "threeDSVersion",
            "baseName": "threeDSVersion",
            "type": "string"
        },
        {
            "name": "visaTransactionId",
            "baseName": "visaTransactionId",
            "type": "string"
        },
        {
            "name": "xid",
            "baseName": "xid",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ResponseAdditionalDataCommon.attributeTypeMap;
    }
}

export namespace ResponseAdditionalDataCommon {
    export enum FraudResultTypeEnum {
        Green = <any> 'GREEN',
        Fraud = <any> 'FRAUD'
    }
    export enum RecurringProcessingModelEnum {
        CardOnFile = <any> 'CardOnFile',
        Subscription = <any> 'Subscription',
        UnscheduledCardOnFile = <any> 'UnscheduledCardOnFile'
    }
}
