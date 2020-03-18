declare namespace IBinLookup {
    interface Amount {
        /**
         * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).
         */
        currency: string;
        /**
         * The payable amount that can be charged for the transaction.
         *
         * The transaction amount needs to be represented in minor units according to the [following table](https://docs.adyen.com/development-resources/currency-codes).
         */
        value: number;
    }
    interface BinDetail {
        /**
         * The country where the card was issued.
         */
        issuerCountry?: string;
    }
    interface CardBin {
        /**
         * The first 6 digit of the card number. Enable this field via merchant account settings.
         */
        bin?: string;
        /**
         * If true, it indicates a commercial card. Enable this field via merchant account settings.
         */
        commercial?: boolean;
        /**
         * The card funding source. Valid values are:
         * * CHARGE
         * * CREDIT
         * * DEBIT
         * * DEFERRED_DEBIT
         * * PREPAID
         * * PREPAID_RELOADABLE
         * * PREPAID_NONRELOADABLE
         * > Enable this field via merchant account settings.
         */
        fundingSource?: string;
        /**
         * Indicates availability of funds.
         *
         * Visa:
         * * "I" (fast funds are supported)
         * * "N" (otherwise)
         *
         * Mastercard:
         * * "I" (product type is Prepaid or Debit, or issuing country is in CEE/HGEM list)
         * * "N" (otherwise)
         * > Returned when you verify a card BIN or estimate costs, and only if `payoutEligible` is different from "N" or "U".
         */
        fundsAvailability?: string;
        /**
         * The issuing bank of the card.
         */
        issuingBank?: string;
        /**
         * The country where the card was issued from.
         */
        issuingCountry?: string;
        /**
         * The currency of the card.
         */
        issuingCurrency?: string;
        /**
         * The payment method associated with the card (e.g. visa, mc, or amex).
         */
        paymentMethod?: string;
        /**
         * Indicates whether a payout is eligible or not for this card.
         *
         * Visa:
         * * "Y"
         * * "N"
         *
         * Mastercard:
         * * "Y" (domestic and cross-border)
         * * "D" (only domestic)
         * * "N" (no MoneySend)
         * * "U" (unknown)
         * > Returned when you verify a card BIN or estimate costs, and only if `payoutEligible` is different from "N" or "U".
         */
        payoutEligible?: string;
        /**
         * The last four digits of the card number.
         */
        summary?: string;
    }
    interface CostEstimateAssumptions {
        /**
         * If true, the cardholder is expected to successfully authorise via 3D Secure.
         */
        assume3DSecureAuthenticated?: boolean;
        /**
         * If true, the transaction is expected to have valid Level 3 data.
         */
        assumeLevel3Data?: boolean;
        /**
         * If not zero, the number of installments.
         */
        installments?: number;
    }
    interface CostEstimateRequest {
        /**
         * The transaction amount used as a base for the cost estimation.
         */
        amount: IBinLookup.Amount;
        /**
         * Assumptions made for the expected characteristics of the transaction, for which the charges are being estimated.
         */
        assumptions?: IBinLookup.CostEstimateAssumptions;
        /**
         * The card number (4-19 characters) for PCI compliant use cases. Do not use any separators.
         *
         * > Either the `cardNumber` or `encryptedCard` field must be provided in a payment request.
         */
        cardNumber?: string;
        /**
         * Encrypted data that stores card information for non PCI-compliant use cases. The encrypted data must be created with the Checkout Card Component or Secured Fields Component, and must contain the `encryptedCardNumber` field.
         *
         * > Either the `cardNumber` or `encryptedCard` field must be provided in a payment request.
         */
        encryptedCard?: string;
        /**
         * The merchant account identifier you want to process the (transaction) request with.
         */
        merchantAccount: string;
        /**
         * Additional data for merchants who don't use Adyen as the payment authorisation gateway.
         */
        merchantDetails?: IBinLookup.MerchantDetails;
        /**
         * The recurring settings for the payment. Use this property when you want to enable [recurring payments](https://docs.adyen.com/checkout/tokenization).
         */
        recurring?: IBinLookup.Recurring;
        /**
         * The `recurringDetailReference` you want to use for this cost estimate. The value `LATEST` can be used to select the most recently stored recurring detail.
         */
        selectedRecurringDetailReference?: string;
        /**
         * Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.
         * For the web service API, Adyen assumes Ecommerce shopper interaction by default.
         *
         * This field has the following possible values:
         * * `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.
         * * `ContAuth` - Card on file and/or subscription transactions, where the card holder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).
         * * `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.
         * * `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.
         */
        shopperInteraction?: "Ecommerce" | "ContAuth" | "Moto" | "POS";
        /**
         * The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID).
         * > This field is required for recurring payments.
         */
        shopperReference?: string;
    }
    interface CostEstimateResponse {
        /**
         * Card BIN details.
         */
        cardBin?: IBinLookup.CardBin;
        /**
         * The estimated cost (scheme fee + interchange) in the settlement currency. If the settlement currency cannot be determined, the fee in EUR is returned.
         */
        costEstimateAmount?: IBinLookup.Amount;
        /**
         * The result of the cost estimation.
         */
        resultCode?: string;
        /**
         * Indicates the way the charges can be passed on to the cardholder. The following values are possible:
         * * `ZERO` - the charges are not allowed to pass on
         * * `PASSTHROUGH` - the charges can be passed on
         * * `UNLIMITED` - there is no limit on how much surcharge is passed on
         */
        surchargeType?: string;
    }
    interface DSPublicKeyDetail {
        /**
         * Card brand.
         */
        brand?: string;
        /**
         * Directory Server (DS) identifier.
         */
        directoryServerId?: string;
        /**
         * Public key. The 3D Secure 2 SDK encrypts the device information by using the DS public key.
         */
        publicKey?: string;
    }
    interface MerchantDetails {
        /**
         * 2-letter ISO 3166 country code of the card acceptor location.
         * > This parameter is required for the merchants who don't use Adyen as the payment authorisation gateway.
         */
        countryCode?: string;
        /**
         * If true, indicates that the merchant is enrolled in 3D Secure for the card network.
         */
        enrolledIn3DSecure?: boolean;
        /**
         * The merchant category code (MCC) is a four-digit number which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.
         *
         * The list of MCCs can be found [here](https://en.wikipedia.org/wiki/Merchant_category_code).
         */
        mcc?: string;
    }
    namespace Post {
        type RequestBody = IBinLookup.CostEstimateRequest;
        namespace Responses {
            type $200 = IBinLookup.CostEstimateResponse;
        }
    }
    interface Recurring {
        /**
         * The type of recurring contract to be used.
         * Possible values:
         * * `ONECLICK` – Payment details can be used to initiate a one-click payment, where the shopper enters the [card security code (CVC/CVV)](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-security-code-cvc-cvv-cid).
         * * `RECURRING` – Payment details can be used without the card security code to initiate [card-not-present transactions](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-not-present-cnp).
         * * `ONECLICK,RECURRING` – Payment details can be used regardless of whether the shopper is on your site or not.
         * * `PAYOUT` – Payment details can be used to [make a payout](https://docs.adyen.com/checkout/online-payouts).
         */
        contract?: "ONECLICK" | "RECURRING" | "PAYOUT";
        /**
         * A descriptive name for this detail.
         */
        recurringDetailName?: string;
        /**
         * Date after which no further authorisations shall be performed. Only for 3D Secure 2.
         */
        recurringExpiry?: string;
        /**
         * Minimum number of days between authorisations. Only for 3D Secure 2.
         */
        recurringFrequency?: string;
        /**
         * The name of the token service.
         */
        tokenService?: "VISATOKENSERVICE" | "MCTOKENSERVICE";
    }
    interface ThreeDS2CardRangeDetail {
        /**
         * Card brand.
         */
        brandCode?: string;
        /**
         * BIN end range.
         */
        endRange?: string;
        /**
         * BIN start range.
         */
        startRange?: string;
        /**
         * 3D Secure protocol version.
         */
        threeDS2Version?: string;
        /**
         * In a 3D Secure 2 browser-based flow, this is the URL where you should send the device fingerprint to.
         */
        threeDSMethodURL?: string;
    }
    interface ThreeDSAvailabilityRequest {
        /**
         * This field contains additional data, which may be required for a particular request.
         *
         * The `additionalData` object consists of entries, each of which includes the key and value.
         */
        additionalData?: {};
        /**
         * List of brands.
         */
        brands: string[];
        /**
         * Card number or BIN.
         */
        cardNumber?: string;
        /**
         * The merchant account identifier.
         */
        merchantAccount: string;
        /**
         * A recurring detail reference corresponding to a card.
         */
        recurringDetailReference?: string;
        /**
         * The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID).
         */
        shopperReference?: string;
    }
    interface ThreeDSAvailabilityResponse {
        /**
         * Bin Group Details
         */
        binDetails?: IBinLookup.BinDetail;
        /**
         * List of Directory Server (DS) public keys.
         */
        dsPublicKeys?: IBinLookup.DSPublicKeyDetail[];
        /**
         * Indicator if 3D Secure 1 is supported.
         */
        threeDS1Supported?: boolean;
        /**
         * List of brand and card range pairs.
         */
        threeDS2CardRangeDetails?: IBinLookup.ThreeDS2CardRangeDetail[];
        /**
         * Indicator if 3D Secure 2 is supported.
         */
        threeDS2supported?: boolean;
    }
}
