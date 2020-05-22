
/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */


declare namespace IRecurring {
    export interface Address {
        /**
         * The name of the city.
         */
        city: string;
        /**
         * The two-character country code as defined in ISO-3166-1 alpha-2. For example, **US**.
         * > If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.
         */
        country: string;
        /**
         * The number or name of the house.
         */
        houseNumberOrName: string;
        /**
         * A maximum of five digits for an address in the US, or a maximum of ten characters for an address in all other countries.
         */
        postalCode: string;
        /**
         * State or province codes as defined in ISO 3166-2. For example, **CA** in the US or **ON** in Canada.
         * > Required for the US and Canada.
         */
        stateOrProvince?: string;
        /**
         * The name of the street.
         * > The house number should not be included in this field; it should be separately provided via `houseNumberOrName`.
         */
        street: string;
    }
    export interface BankAccount {
        /**
         * The bank account number (without separators).
         */
        bankAccountNumber?: string;
        /**
         * The bank city.
         */
        bankCity?: string;
        /**
         * The location id of the bank. The field value is `nil` in most cases.
         */
        bankLocationId?: string;
        /**
         * The name of the bank.
         */
        bankName?: string;
        /**
         * The [Business Identifier Code](https://en.wikipedia.org/wiki/ISO_9362) (BIC) is the SWIFT address assigned to a bank. The field value is `nil` in most cases.
         */
        bic?: string;
        /**
         * Country code where the bank is located.
         *
         * A valid value is an ISO two-character country code (e.g. 'NL').
         */
        countryCode?: string;
        /**
         * The [International Bank Account Number](https://en.wikipedia.org/wiki/International_Bank_Account_Number) (IBAN).
         */
        iban?: string;
        /**
         * The name of the bank account holder.
         * If you submit a name with non-Latin characters, we automatically replace some of them with corresponding Latin characters to meet the FATF recommendations. For example:
         * * χ12 is converted to ch12.
         * * üA is converted to euA.
         * * Peter Møller is converted to Peter Mller, because banks don't accept 'ø'.
         * After replacement, the ownerName must have at least three alphanumeric characters (A-Z, a-z, 0-9), and at least one of them must be a valid Latin character (A-Z, a-z). For example:
         * * John17 - allowed.
         * * J17 - allowed.
         * * 171 - not allowed.
         * * John-7 - allowed.
         * > If provided details don't match the required format, the response returns the error message: 203 'Invalid bank account holder name'.
         */
        ownerName?: string;
        /**
         * The bank account holder's tax ID.
         */
        taxId?: string;
    }
    export interface Card {
        /**
         * The [card verification code](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-security-code-cvc-cvv-cid) (1-20 characters). Depending on the card brand, it is known also as:
         * * CVV2/CVC2 – length: 3 digits
         * * CID – length: 4 digits
         * > If you are using [Client-Side Encryption](https://docs.adyen.com/classic-integration/cse-integration-ecommerce), the CVC code is present in the encrypted data. You must never post the card details to the server.
         * > This field must be always present in a [one-click payment request](https://docs.adyen.com/classic-integration/recurring-payments).
         * > When this value is returned in a response, it is always empty because it is not stored.
         */
        cvc?: string;
        /**
         * The card expiry month.
         * Format: 2 digits, zero-padded for single digits. For example:
         * * 03 = March
         * * 11 = November
         */
        expiryMonth: string;
        /**
         * The card expiry year.
         * Format: 4 digits. For example: 2020
         */
        expiryYear: string;
        /**
         * The name of the cardholder, as printed on the card.
         */
        holderName: string;
        /**
         * The issue number of the card (for some UK debit cards only).
         */
        issueNumber?: string;
        /**
         * The card number (4-19 characters). Do not use any separators.
         * When this value is returned in a response, only the last 4 digits of the card number are returned.
         */
        number: string;
        /**
         * The month component of the start date (for some UK debit cards only).
         */
        startMonth?: string;
        /**
         * The year component of the start date (for some UK debit cards only).
         */
        startYear?: string;
    }
    export interface DisableRequest {
        /**
         * Specify the contract if you only want to disable a specific use.
         *
         * This field can be set to one of the following values, or to their combination (comma-separated):
         * * ONECLICK
         * * RECURRING
         * * PAYOUT
         */
        contract?: string;
        /**
         * The merchant account identifier with which you want to process the transaction.
         */
        merchantAccount: string;
        /**
         * The ID that uniquely identifies the recurring detail reference.
         *
         * If it is not provided, the whole recurring contract of the `shopperReference` will be disabled, which includes all recurring details.
         */
        recurringDetailReference?: string;
        /**
         * The ID that uniquely identifies the shopper.
         *
         * This `shopperReference` must be the same as the `shopperReference` used in the initial payment.
         */
        shopperReference: string;
    }
    export interface DisableResult {
        /**
         * Depending on whether a specific recurring detail was in the request, result is either [detail-successfully-disabled] or [all-details-successfully-disabled].
         */
        response?: string;
    }
    export interface Name {
        /**
         * The first name.
         */
        firstName: string;
        /**
         * The gender.
         * >The following values are permitted: `MALE`, `FEMALE`, `UNKNOWN`.
         */
        gender: "MALE" | "FEMALE" | "UNKNOWN";
        /**
         * The name's infix, if applicable.
         * >A maximum length of twenty (20) characters is imposed.
         */
        infix?: string;
        /**
         * The last name.
         */
        lastName: string;
    }
    namespace Post {
        export type RequestBody = IRecurring.ScheduleAccountUpdaterRequest;
        namespace Responses {
            export type $200 = IRecurring.ScheduleAccountUpdaterResult;
        }
    }
    export interface Recurring {
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
        recurringExpiry?: string; // date-time
        /**
         * Minimum number of days between authorisations. Only for 3D Secure 2.
         */
        recurringFrequency?: string;
        /**
         * The name of the token service.
         */
        tokenService?: "VISATOKENSERVICE" | "MCTOKENSERVICE";
    }
    export interface RecurringDetail {
        /**
         * This field contains additional data, which may be returned in a particular response.
         *
         * The additionalData object consists of entries, each of which includes the key and value.
         */
        additionalData?: {
        };
        /**
         * The alias of the credit card number.
         *
         * Applies only to recurring contracts storing credit card details
         */
        alias?: string;
        /**
         * The alias type of the credit card number.
         *
         * Applies only to recurring contracts storing credit card details.
         */
        aliasType?: string;
        /**
         * A container for bank account data.
         */
        bank?: IRecurring.BankAccount;
        /**
         * The billing address.
         */
        billingAddress?: IRecurring.Address;
        /**
         * A container for card data.
         */
        card?: IRecurring.Card;
        /**
         * Types of recurring contracts.
         */
        contractTypes?: string[];
        /**
         * The date when the recurring details were created.
         */
        creationDate?: string; // date-time
        /**
         * The `pspReference` of the first recurring payment that created the recurring detail.
         */
        firstPspReference?: string;
        /**
         * An optional descriptive name for this recurring detail.
         */
        name?: string;
        /**
         * The  type or sub-brand of a payment method used, e.g. Visa Debit, Visa Corporate, etc. For more information, refer to [PaymentMethodVariant](https://docs.adyen.com/development-resources/paymentmethodvariant).
         */
        paymentMethodVariant?: string;
        /**
         * The reference that uniquely identifies the recurring detail.
         */
        recurringDetailReference: string;
        /**
         * The name of the shopper.
         */
        shopperName?: IRecurring.Name;
        /**
         * A shopper's social security number (only in countries where it is legal to collect).
         */
        socialSecurityNumber?: string;
        /**
         * The payment method, such as “mc", "visa", "ideal", "paypal".
         */
        variant: string;
    }
    export interface RecurringDetailsRequest {
        /**
         * The merchant account identifier you want to process the (transaction) request with.
         */
        merchantAccount: string;
        /**
         * A container for the type of a recurring contract to be retrieved.
         *
         * The contract value needs to match the contract value submitted in the payment transaction used to create a recurring contract.
         * However, if `ONECLICK,RECURRING` is the original contract definition in the initial payment, then `contract` should take either `ONECLICK` or `RECURRING`, depending on whether or not you want the shopper to enter their card's security code when they finalize their purchase.
         */
        recurring?: IRecurring.Recurring;
        /**
         * The reference you use to uniquely identify the shopper (e.g. user ID or account ID).
         */
        shopperReference: string;
    }
    export interface RecurringDetailsResult {
        /**
         * The date when the recurring details were created.
         */
        creationDate?: string; // date-time
        /**
         * Payment details stored for recurring payments.
         */
        details?: IRecurring.RecurringDetail[];
        /**
         * The most recent email for this shopper (if available).
         */
        lastKnownShopperEmail?: string;
        /**
         * The reference you use to uniquely identify the shopper (e.g. user ID or account ID).
         */
        shopperReference?: string;
    }
    export interface ScheduleAccountUpdaterRequest {
        /**
         * This field contains additional data, which may be required for a particular request.
         */
        additionalData?: {
        };
        /**
         * A container for credit card data.
         *
         * Optional if `shopperReference` and `selectedRecurringDetailReference` are provided.
         */
        card?: IRecurring.Card;
        /**
         * Account of the merchant.
         */
        merchantAccount: string;
        /**
         * A reference that merchants can apply for the call.
         */
        reference: string;
        /**
         * The selected detail recurring reference.
         *
         * Optional if `card` is provided.
         */
        selectedRecurringDetailReference?: string;
        /**
         * The reference of the shopper that owns the recurring contract.
         *
         * Optional if `card` is provided.
         */
        shopperReference?: string;
    }
    export interface ScheduleAccountUpdaterResult {
        /**
         * Adyen's 16-character unique reference associated with the transaction. This value is globally unique; quote it when communicating with us about this request.
         */
        pspReference: string;
        /**
         * The result of scheduling an Account Updater. If scheduling was successful, this field returns **Success**; otherwise it contains the error message.
         */
        result: string;
    }
}
