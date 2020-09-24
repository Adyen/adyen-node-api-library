
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
 *
 * Adyen NodeJS API Library
 *
 * Version of Platforms Account: v6
 *
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
 

declare namespace IPlatformsAccount {
    export interface Account {
        /**
         * The code of the account.
         */
        accountCode?: string;
        /**
         * The beneficiary of the account.
         */
        beneficiaryAccount?: string;
        /**
         * The reason that a beneficiary has been set up for this account. This may have been supplied during the setup of a beneficiary at the discretion of the executing user.
         */
        beneficiaryMerchantReference?: string;
        /**
         * A description of the account.
         */
        description?: string;
        /**
         * A set of key and value pairs for general use by the merchant.
         * The keys do not have specific names and may be used for storing miscellaneous data as desired.
         * > Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.
         */
        metadata?: {
            [name: string]: string;
        };
        /**
         * The account's payout schedule.
         */
        payoutSchedule?: PayoutScheduleResponse;
        /**
         * Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.
         */
        payoutSpeed?: "SAME_DAY" | "STANDARD";
        /**
         * The status of the account. Possible values: `Active`, `Inactive`, `Suspended`, `Closed`.
         */
        status?: string;
    }
    export interface AccountEvent {
        /**
         * The event.
         * >Permitted values: `InactivateAccount`, `RefundNotPaidOutTransfers`.
         * For more information, refer to [Verification checks](https://docs.adyen.com/platforms/onboarding-and-verification/verification-checks).
         */
        event: "InactivateAccount" | "RefundNotPaidOutTransfers";
        /**
         * The date on which the event will take place.
         */
        executionDate: string; // date-time
        /**
         * The reason why this event has been created.
         */
        reason: string;
    }
    export interface AccountHolderDetails {
        /**
         * The address of the account holder.
         */
        address?: ViasAddress;
        /**
         * Each of the bank accounts associated with the account holder.
         * > Each array entry should represent one bank account.
         * > For comprehensive detail regarding the required `BankAccountDetail` fields, please refer to the [KYC Verification documentation](https://docs.adyen.com/platforms/onboarding-and-verification/verification-checks).
         */
        bankAccountDetails?: BankAccountDetail[];
        /**
         * The opaque reference value returned by the Adyen API during bank account login.
         */
        bankAggregatorDataReference?: string;
        /**
         * Details applicable to `Business` legal entities.
         * Populated only if the account holder's legal entity is of type `Business`.
         * > Required when being used in a `/createAccountHolder` request in which the legal entity is `Business`.
         */
        businessDetails?: BusinessDetails;
        /**
         * The email address of the account holder.
         */
        email: string;
        /**
         * The phone number of the account holder provided as a single string. It will be handled as a landline phone.
         * **Examples:** "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"
         */
        fullPhoneNumber: string;
        /**
         * Details applicable to `Individual` legal entities.
         * Populated only if the account holder's legal entity is of type `Individual`.
         * > Required when being used in a `/createAccountHolder` request in which the legal entity is `Individual`.
         */
        individualDetails?: IndividualDetails;
        /**
         * The Merchant Category Code of the account holder.
         * > If not specified in the request, this will be derived from the platform account (which is configured by Adyen).
         */
        merchantCategoryCode?: string;
        /**
         * A set of key and value pairs for general use by the account holder or merchant.
         * The keys do not have specific names and may be used for storing miscellaneous data as desired.
         * > The values being stored have a maximum length of eighty (80) characters and will be truncated if necessary.
         * > Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.
         */
        metadata?: {
            [name: string]: string;
        };
        /**
         * Each of the card tokens associated with the account holder.
         * > Each array entry should represent one card token.
         * > For comprehensive detail regarding the required `CardToken` fields, please refer to the [KYC Verification documentation](https://docs.adyen.com/platforms/onboarding-and-verification/verification-checks).
         */
        payoutMethods?: PayoutMethod[];
        /**
         * The URL of the website of the account holder.
         */
        webAddress: string;
    }
    export interface AccountHolderStatus {
        /**
         * A list of events scheduled for the account holder.
         */
        events?: AccountEvent[];
        /**
         * The payout state of the account holder.
         */
        payoutState?: AccountPayoutState;
        /**
         * The processing state of the account holder.
         */
        processingState?: AccountProcessingState;
        /**
         * The status of the account holder.
         * >Permitted values: `Active`, `Inactive`, `Suspended`, `Closed`.
         */
        status: "Active" | "Closed" | "Inactive" | "Suspended";
        /**
         * The reason why the status was assigned to the account holder.
         */
        statusReason?: string;
    }
    export interface AccountPayoutState {
        /**
         * Indicates whether payouts are allowed. This field is the overarching payout status, and is the aggregate of multiple conditions (e.g., KYC status, disabled flag, etc). If this field is false, no payouts will be permitted for any of the account holder's accounts. If this field is true, payouts will be permitted for any of the account holder's accounts.
         */
        allowPayout?: boolean;
        /**
         * The reason why payouts (to all of the account holder's accounts) have been disabled (by the platform). If the `disabled` field is true, this field can be used to explain why.
         */
        disableReason?: string;
        /**
         * Indicates whether payouts have been disabled (by the platform) for all of the account holder's accounts. A platform may enable and disable this field at their discretion. If this field is true, `allowPayout` will be false and no payouts will be permitted for any of the account holder's accounts. If this field is false, `allowPayout` may or may not be enabled, depending on other factors.
         */
        disabled?: boolean;
        /**
         * The reason why payouts (to all of the account holder's accounts) have been disabled (by Adyen). If payouts have been disabled by Adyen, this field will explain why. If this field is blank, payouts have not been disabled by Adyen.
         */
        notAllowedReason?: string;
        /**
         * The maximum amount that payouts are limited to. Only applies if payouts are allowed but limited.
         */
        payoutLimit?: Amount;
        /**
         * The payout tier that the account holder occupies.
         */
        tierNumber?: number; // int32
    }
    export interface AccountProcessingState {
        /**
         * The reason why processing has been disabled.
         */
        disableReason?: string;
        /**
         * Indicates whether the processing of payments is allowed.
         */
        disabled?: boolean;
        /**
         * The lower bound of the processing tier (i.e., an account holder must have processed at least this amount of money in order to be placed into this tier).
         */
        processedFrom?: Amount;
        /**
         * The upper bound of the processing tier (i.e., an account holder must have processed less than this amount of money in order to be placed into this tier).
         */
        processedTo?: Amount;
        /**
         * The processing tier that the account holder occupies.
         */
        tierNumber?: number; // int32
    }
    export interface Amount {
        /**
         * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).
         */
        currency: string;
        /**
         * The payable amount that can be charged for the transaction.
         *
         * The transaction amount needs to be represented in minor units according to the [following table](https://docs.adyen.com/development-resources/currency-codes).
         */
        value: number; // int64
    }
    export interface BankAccountDetail {
        /**
         * The bank account number (without separators).
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/platforms/onboarding-and-verification) section for details on field requirements.
         */
        accountNumber?: string;
        /**
         * The type of bank account.
         * Only applicable to bank accounts held in the USA.
         * The permitted values are: `checking`, `savings`.
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/platforms/onboarding-and-verification) section for details on field requirements.
         */
        accountType?: string;
        /**
         * The name of the bank account.
         */
        bankAccountName?: string;
        /**
         * Merchant reference to the bank account.
         */
        bankAccountReference?: string;
        /**
         * The unique identifier (UUID) of the Bank Account.
         * >If, during an account holder create or update request, this field is left blank (but other fields provided), a new Bank Account will be created with a procedurally-generated UUID.
         *
         * >If, during an account holder create request, a UUID is provided, the creation of the Bank Account will fail while the creation of the account holder will continue.
         *
         * >If, during an account holder update request, a UUID that is not correlated with an existing Bank Account is provided, the update of the account holder will fail.
         *
         * >If, during an account holder update request, a UUID that is correlated with an existing Bank Account is provided, the existing Bank Account will be updated.
         *
         */
        bankAccountUUID?: string;
        /**
         * The bank identifier code.
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/platforms/onboarding-and-verification) section for details on field requirements.
         */
        bankBicSwift?: string;
        /**
         * The city in which the bank branch is located.
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/platforms/onboarding-and-verification) section for details on field requirements.
         */
        bankCity?: string;
        /**
         * The bank code of the banking institution with which the bank account is registered.
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/platforms/onboarding-and-verification) section for details on field requirements.
         */
        bankCode?: string;
        /**
         * The name of the banking institution with which the bank account is held.
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/platforms/onboarding-and-verification) section for details on field requirements.
         */
        bankName?: string;
        /**
         * The branch code of the branch under which the bank account is registered. The value to be specified in this parameter depends on the country of the bank account:
         * * United States - Routing number
         * * United Kingdom - Sort code
         * * Germany - Bankleitzahl
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/platforms/onboarding-and-verification) section for details on field requirements.
         */
        branchCode?: string;
        /**
         * The check code of the bank account.
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/platforms/onboarding-and-verification) section for details on field requirements.
         */
        checkCode?: string;
        /**
         * The two-letter country code in which the bank account is registered.
         * >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/platforms/onboarding-and-verification) section for details on field requirements.
         */
        countryCode?: string;
        /**
         * The currency in which the bank account deals.
         * >The permitted currency codes are defined in ISO-4217 (e.g. 'EUR').
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/platforms/onboarding-and-verification) section for details on field requirements.
         */
        currencyCode?: string;
        /**
         * The international bank account number.
         * >The IBAN standard is defined in ISO-13616.
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/platforms/onboarding-and-verification) section for details on field requirements.
         */
        iban?: string;
        /**
         * The city of residence of the bank account owner.
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/platforms/onboarding-and-verification) section for details on field requirements.
         */
        ownerCity?: string;
        /**
         * The country code of the country of residence of the bank account owner.
         * >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/platforms/onboarding-and-verification) section for details on field requirements.
         */
        ownerCountryCode?: string;
        /**
         * The date of birth of the bank account owner.
         *
         */
        ownerDateOfBirth?: string;
        /**
         * The house name or number of the residence of the bank account owner.
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/platforms/onboarding-and-verification) section for details on field requirements.
         */
        ownerHouseNumberOrName?: string;
        /**
         * The name of the bank account owner.
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/platforms/onboarding-and-verification) section for details on field requirements.
         */
        ownerName?: string;
        /**
         * The country code of the country of nationality of the bank account owner.
         * >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/platforms/onboarding-and-verification) section for details on field requirements.
         */
        ownerNationality?: string;
        /**
         * The postal code of the residence of the bank account owner.
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/platforms/onboarding-and-verification) section for details on field requirements.
         */
        ownerPostalCode?: string;
        /**
         * The state of residence of the bank account owner.
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/platforms/onboarding-and-verification) section for details on field requirements.
         */
        ownerState?: string;
        /**
         * The street name of the residence of the bank account owner.
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/platforms/onboarding-and-verification) section for details on field requirements.
         */
        ownerStreet?: string;
        /**
         * If set to true, the bank account is a primary account.
         */
        primaryAccount?: boolean;
        /**
         * The tax ID number.
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/platforms/onboarding-and-verification) section for details on field requirements.
         */
        taxId?: string;
        /**
         * The URL to be used for bank account verification.
         * This may be generated on bank account creation.
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/platforms/onboarding-and-verification) section for details on field requirements.
         */
        urlForVerification?: string;
    }
    export interface BusinessDetails {
        /**
         * The registered name of the company (if it differs from the legal name of the company).
         */
        doingBusinessAs?: string;
        /**
         * The legal name of the company.
         */
        legalBusinessName?: string;
        /**
         * The registration number of the company.
         */
        registrationNumber?: string;
        /**
         * Each of the shareholders associated with the company.
         * Each array entry should represent one shareholder.
         */
        shareholders?: ShareholderContact[];
        /**
         * Market Identifier Code (MIC).
         */
        stockExchange?: string;
        /**
         * International Securities Identification Number (ISIN).
         */
        stockNumber?: string;
        /**
         * Stock Ticker symbol.
         */
        stockTicker?: string;
        /**
         * The tax ID of the company.
         */
        taxId?: string;
    }
    export interface CloseAccountHolderRequest {
        /**
         * The code of the Account Holder to be closed.
         */
        accountHolderCode: string;
    }
    export interface CloseAccountHolderResponse {
        /**
         * The new status of the Account Holder.
         */
        accountHolderStatus: AccountHolderStatus;
        /**
         * Contains field validation errors that would prevent requests from being processed.
         */
        invalidFields?: ErrorFieldType[];
        /**
         * The reference of a request. Can be used to uniquely identify the request.
         */
        pspReference?: string;
        /**
         * The result code.
         */
        resultCode?: string;
    }
    export interface CloseAccountRequest {
        /**
         * The code of account to be closed.
         */
        accountCode: string;
    }
    export interface CloseAccountResponse {
        /**
         * The account code of the account that is closed.
         */
        accountCode?: string;
        /**
         * Contains field validation errors that would prevent requests from being processed.
         */
        invalidFields?: ErrorFieldType[];
        /**
         * The reference of a request. Can be used to uniquely identify the request.
         */
        pspReference?: string;
        /**
         * The result code.
         */
        resultCode?: string;
        /**
         * The new status of the account.
         * >Permitted values: `Active`, `Inactive`, `Suspended`, `Closed`.
         */
        status: "Active" | "Closed" | "Inactive" | "Suspended";
    }
    export interface CreateAccountHolderRequest {
        /**
         * The desired code of the prospective account holder.
         * > Must be between three (3) and fifty (50) characters long. Only letters, digits, and hyphens (-) are permitted.
         */
        accountHolderCode: string;
        /**
         * The details of the prospective account holder.
         */
        accountHolderDetails: AccountHolderDetails;
        /**
         * If set to true, an account with the default options is created for this account holder.
         * **Default Value:** true
         */
        createDefaultAccount?: boolean;
        /**
         * A description of the prospective account holder.
         */
        description?: string;
        /**
         * The entity type.
         * Permitted values: `Business`, `Individual`
         *
         * If an account holder is 'Business', then `accountHolderDetails.businessDetails` must be provided, as well as at least one entry in the `accountHolderDetails.businessDetails.shareholders` list.
         *
         * If an account holder is 'Individual', then `accountHolderDetails.individualDetails` must be provided.
         */
        legalEntity: "Business" | "Individual" | "NonProfit" | "Partnership" | "PublicCompany";
        /**
         * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals.
         */
        primaryCurrency?: string;
        /**
         * The starting [processing tier](https://docs.adyen.com/platforms/onboarding-and-verification/precheck-kyc-information) for the prospective account holder.
         */
        processingTier?: number; // int32
        /**
         * The identifier of the profile that applies to this entity.
         */
        verificationProfile?: string;
    }
    export interface CreateAccountHolderResponse {
        /**
         * The code of a new account created for the account holder.
         */
        accountCode?: string;
        /**
         * The code of the new account holder.
         */
        accountHolderCode: string;
        /**
         * Details of the new account holder.
         */
        accountHolderDetails: AccountHolderDetails;
        /**
         * The status of the new account holder.
         */
        accountHolderStatus: AccountHolderStatus;
        /**
         * The description of the new account holder.
         */
        description?: string;
        /**
         * A list of fields that caused the `/createAccountHolder` request to fail.
         */
        invalidFields?: ErrorFieldType[];
        /**
         * The type of legal entity of the new account holder.
         */
        legalEntity: "Business" | "Individual" | "NonProfit" | "Partnership" | "PublicCompany";
        /**
         * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals.
         */
        primaryCurrency?: string;
        /**
         * The reference of a request. Can be used to uniquely identify the request.
         */
        pspReference?: string;
        /**
         * The result code.
         */
        resultCode?: string;
        /**
         * The details of KYC Verification of the account holder.
         */
        verification: KYCVerificationResult;
        /**
         * The identifier of the profile that applies to this entity.
         */
        verificationProfile?: string;
    }
    export interface CreateAccountRequest {
        /**
         * The code of Account Holder under which to create the account.
         */
        accountHolderCode: string;
        /**
         * The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder.
         */
        bankAccountUUID?: string;
        /**
         * A description of the account.
         */
        description?: string;
        /**
         * A set of key and value pairs for general use by the merchant.
         * The keys do not have specific names and may be used for storing miscellaneous data as desired.
         * > Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.
         */
        metadata?: {
            [name: string]: string;
        };
        /**
         * The payout schedule of the prospective account.
         * >Permitted values: `DEFAULT`, `HOLD`, `DAILY`, `WEEKLY`, `MONTHLY`.
         */
        payoutSchedule?: "BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT" | "BIWEEKLY_ON_1ST_AND_15TH_AT_NOON" | "DAILY" | "DAILY_6PM" | "DAILY_AU" | "DAILY_EU" | "DAILY_US" | "DEFAULT" | "EVERY_6_HOURS_FROM_MIDNIGHT" | "HOLD" | "MONTHLY" | "WEEKLY" | "WEEKLY_ON_TUE_FRI_MIDNIGHT" | "YEARLY";
        /**
         * The reason for the payout schedule choice.
         * >Required if the payoutSchedule is `HOLD`.
         */
        payoutScheduleReason?: string;
        /**
         * Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.
         */
        payoutSpeed?: "SAME_DAY" | "STANDARD";
    }
    export interface CreateAccountResponse {
        /**
         * The code of the new account.
         */
        accountCode: string;
        /**
         * The code of the account holder.
         */
        accountHolderCode: string;
        /**
         * The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder.
         */
        bankAccountUUID?: string;
        /**
         * The description of the account.
         */
        description?: string;
        /**
         * A list of fields that caused the `/createAccount` request to fail.
         */
        invalidFields?: ErrorFieldType[];
        metadata?: {
            [name: string]: string;
        };
        /**
         * The payout schedule of the account.
         */
        payoutSchedule?: PayoutScheduleResponse;
        /**
         * Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.
         */
        payoutSpeed?: "SAME_DAY" | "STANDARD";
        /**
         * The reference of a request. Can be used to uniquely identify the request.
         */
        pspReference?: string;
        /**
         * The result code.
         */
        resultCode?: string;
        /**
         * The status of the account.
         * >Permitted values: `Active`.
         */
        status: "Active" | "Closed" | "Inactive" | "Suspended";
    }
    export interface DeleteBankAccountRequest {
        /**
         * The code of the Account Holder from which to delete the Bank Account(s).
         */
        accountHolderCode: string;
        /**
         * The code(s) of the Bank Accounts to be deleted.
         */
        bankAccountUUIDs: string[];
    }
    export interface DeletePayoutMethodRequest {
        /**
         * The code of the account holder, from which to delete the payout methods.
         */
        accountHolderCode: string;
        /**
         * The codes of the payout methods to be deleted.
         */
        payoutMethodCodes: string[];
    }
    export interface DeleteShareholderRequest {
        /**
         * The code of the Account Holder from which to delete the Shareholders.
         */
        accountHolderCode: string;
        /**
         * The code(s) of the Shareholders to be deleted.
         */
        shareholderCodes: string[];
    }
    export interface DocumentDetail {
        /**
         * The code of account holder, to which the document applies.
         */
        accountHolderCode: string;
        /**
         * The unique ID of the Bank Account to which the document applies.
         * >Required if the documentType is `BANK_STATEMENT` (i.e., a document is being submitted in order to verify a bank account).
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/platforms/onboarding-and-verification) section for details on when a document should be submitted in order to verify a bank account.
         */
        bankAccountUUID?: string;
        /**
         * Description of the document.
         */
        description?: string;
        /**
         * The type of a document. Permitted values:
         * * `BANK_STATEMENT` denotes an image containing a bank statement or other document proving ownership of a specific bank account.
         * * `PASSPORT` denotes an image containing the identity page(s) of a passport.
         * * `ID_CARD_FRONT` denotes an image containing only the front of the ID card. In order for a document to be usable, both the `ID_CARD_FRONT` and `ID_CARD_BACK` must be submitted.
         * * `ID_CARD_BACK` denotes an image containing only the back of the ID card. In order for a document to be usable, both the `ID_CARD_FRONT` and `ID_CARD_BACK` must be submitted.
         * * `DRIVING_LICENCE_FRONT` denotes an image containing only the front of the driving licence. In order for a document to be usable, both the `DRIVING_LICENCE_FRONT` and `DRIVING_LICENCE_BACK` must be submitted.
         * * `DRIVING_LICENCE_BACK` denotes an image containing only the back of the driving licence. In order for a document to be usable, both the `DRIVING_LICENCE_FRONT` and `DRIVING_LICENCE_FRONT` must be submitted.
         *
         * >Please refer to [Verification checks](https://docs.adyen.com/platforms/onboarding-and-verification/verification-checks) for details on when each document type should be submitted.
         */
        documentType: "BANK_STATEMENT" | "BSN" | "COMPANY_REGISTRATION_SCREENING" | "DRIVING_LICENCE" | "DRIVING_LICENCE_BACK" | "DRIVING_LICENCE_FRONT" | "ID_CARD" | "ID_CARD_BACK" | "ID_CARD_FRONT" | "PASSPORT" | "SSN" | "SUPPORTING_DOCUMENTS";
        /**
         * Filename of the document.
         */
        filename: string;
        /**
         * The code of the shareholder, to which the document applies.
         * >Required if the account holder referred to by the `accountHolderCode` has a `legalEntity` of type `Business` and the `documentType` is either `PASSPORT`, `ID_CARD_FRONT`, `ID_CARD_BACK`, `DRIVING_LICENCE_FRONT`, `DRIVING_LICENCE_BACK` (i.e. a document is being submitted in order to verify a shareholder).
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/platforms/onboarding-and-verification) section for details on when a document should be submitted in order to verify a shareholder.
         */
        shareholderCode?: string;
    }
    export interface ErrorFieldType {
        /**
         * The validation error code.
         */
        errorCode?: number; // int32
        /**
         * A description of the validation error.
         */
        errorDescription?: string;
        /**
         * The type of error field.
         */
        fieldType?: FieldType;
    }
    export interface FieldType {
        /**
         * The full name of the property.
         */
        field?: string;
        /**
         * The type of the field.
         */
        fieldName?: "accountCode" | "accountHolderCode" | "accountHolderDetails" | "accountNumber" | "accountStateType" | "accountStatus" | "accountType" | "address" | "bankAccount" | "bankAccountCode" | "bankAccountName" | "bankAccountUUID" | "bankBicSwift" | "bankCity" | "bankCode" | "bankName" | "bankStatement" | "branchCode" | "businessContact" | "cardToken" | "checkCode" | "city" | "companyRegistration" | "country" | "countryCode" | "currency" | "currencyCode" | "dateOfBirth" | "description" | "destinationAccountCode" | "document" | "documentExpirationDate" | "documentIssuerCountry" | "documentIssuerState" | "documentName" | "documentNumber" | "documentType" | "doingBusinessAs" | "drivingLicence" | "drivingLicenceBack" | "drivingLicense" | "email" | "firstName" | "fullPhoneNumber" | "gender" | "hopWebserviceUser" | "houseNumberOrName" | "iban" | "idCard" | "idCardBack" | "idCardFront" | "idNumber" | "identityDocument" | "individualDetails" | "lastName" | "legalBusinessName" | "legalEntity" | "legalEntityType" | "merchantAccount" | "merchantCategoryCode" | "merchantReference" | "microDeposit" | "name" | "nationality" | "originalReference" | "ownerCity" | "ownerCountryCode" | "ownerHouseNumberOrName" | "ownerName" | "ownerPostalCode" | "ownerState" | "ownerStreet" | "passport" | "passportNumber" | "payoutMethodCode" | "personalData" | "phoneCountryCode" | "phoneNumber" | "postalCode" | "primaryCurrency" | "reason" | "registrationNumber" | "returnUrl" | "schedule" | "shareholder" | "shareholderCode" | "socialSecurityNumber" | "sourceAccountCode" | "stateOrProvince" | "status" | "stockExchange" | "stockNumber" | "stockTicker" | "store" | "storeDetail" | "storeName" | "storeReference" | "street" | "taxId" | "tier" | "tierNumber" | "transferCode" | "unknown" | "value" | "virtualAccount" | "visaNumber" | "webAddress";
        /**
         * The code of the shareholder that the field belongs to. If empty, the field belongs to an account holder.
         */
        shareholderCode?: string;
    }
    export interface GenericResponse {
        /**
         * Contains field validation errors that would prevent requests from being processed.
         */
        invalidFields?: ErrorFieldType[];
        /**
         * The reference of a request. Can be used to uniquely identify the request.
         */
        pspReference?: string;
        /**
         * The result code.
         */
        resultCode?: string;
    }
    export interface GetAccountHolderRequest {
        /**
         * The code of the account of which to retrieve the details.
         * > Required if no `accountHolderCode` is provided.
         */
        accountCode?: string;
        /**
         * The code of the account holder of which to retrieve the details.
         * > Required if no `accountCode` is provided.
         */
        accountHolderCode?: string;
        /**
         * True if the request should return the account holder details
         */
        showDetails?: boolean;
    }
    export interface GetAccountHolderResponse {
        /**
         * The code of the account holder.
         */
        accountHolderCode: string;
        /**
         * Details of the account holder.
         */
        accountHolderDetails: AccountHolderDetails;
        /**
         * The status of the account holder.
         */
        accountHolderStatus: AccountHolderStatus;
        /**
         * A list of the accounts under the account holder.
         */
        accounts?: Account[];
        /**
         * The description of the account holder.
         */
        description?: string;
        /**
         * Contains field validation errors that would prevent requests from being processed.
         */
        invalidFields?: ErrorFieldType[];
        /**
         * The legal entity of the account holder.
         */
        legalEntity: "Business" | "Individual" | "NonProfit" | "Partnership" | "PublicCompany";
        /**
         * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals.
         */
        primaryCurrency?: string;
        /**
         * The reference of a request. Can be used to uniquely identify the request.
         */
        pspReference?: string;
        /**
         * The result code.
         */
        resultCode?: string;
        /**
         * The time that shows how up to date is the information in the response.
         */
        systemUpToDateTime?: string; // date-time
        /**
         * The details of KYC Verification of the account holder.
         */
        verification: KYCVerificationResult;
        /**
         * The identifier of the profile that applies to this entity.
         */
        verificationProfile?: string;
    }
    export interface GetAccountHolderStatusResponse {
        /**
         * The code of the Account Holder.
         */
        accountHolderCode: string;
        /**
         * The status of the Account Holder.
         */
        accountHolderStatus: AccountHolderStatus;
        /**
         * Contains field validation errors that would prevent requests from being processed.
         */
        invalidFields?: ErrorFieldType[];
        /**
         * The reference of a request. Can be used to uniquely identify the request.
         */
        pspReference?: string;
        /**
         * The result code.
         */
        resultCode?: string;
    }
    export interface GetUploadedDocumentsRequest {
        /**
         * The code of the Account Holder for which to retrieve the documents.
         */
        accountHolderCode: string;
        /**
         * The code of the Bank Account for which to retrieve the documents.
         */
        bankAccountUUID?: string;
        /**
         * The code of the Shareholder for which to retrieve the documents.
         */
        shareholderCode?: string;
    }
    export interface GetUploadedDocumentsResponse {
        /**
         * A list of the documents and their details.
         */
        documentDetails?: DocumentDetail[];
        /**
         * Contains field validation errors that would prevent requests from being processed.
         */
        invalidFields?: ErrorFieldType[];
        /**
         * The reference of a request. Can be used to uniquely identify the request.
         */
        pspReference?: string;
        /**
         * The result code.
         */
        resultCode?: string;
    }
    export interface IndividualDetails {
        /**
         * The name of the individual.
         * >Make sure your account holder registers using the name shown on their Photo ID.
         */
        name?: ViasName;
        /**
         * Personal information of the individual.
         */
        personalData?: ViasPersonalData;
    }
    export interface KYCCheckResult {
        /**
         * A list of the checks and their statuses.
         */
        checks?: KYCCheckStatusData[];
    }
    export interface KYCCheckStatusData {
        /**
         * A list of the fields required for execution of the check.
         */
        requiredFields?: string[];
        /**
         * The status of the check.
         * >Permitted Values: `DATA_PROVIDED`, `PASSED`, `PENDING`, `AWAITING_DATA`, `RETRY_LIMIT_REACHED`, `INVALID_DATA`, `FAILED`.
         */
        status: "AWAITING_DATA" | "DATA_PROVIDED" | "FAILED" | "INVALID_DATA" | "PASSED" | "PENDING" | "PENDING_REVIEW" | "RETRY_LIMIT_REACHED" | "UNCHECKED";
        /**
         * A summary of the execution of the check.
         */
        summary?: KYCCheckSummary;
        /**
         * The type of check.
         * >Permitted Values: `COMPANY_VERIFICATION`, `IDENTITY_VERIFICATION`, `PASSPORT_VERIFICATION`, `BANK_ACCOUNT_VERIFICATION`, `NONPROFIT_VERIFICATION`, `CARD_VERIFICATION`.
         */
        type: "BANK_ACCOUNT_VERIFICATION" | "CARD_VERIFICATION" | "COMPANY_VERIFICATION" | "IDENTITY_VERIFICATION" | "NONPROFIT_VERIFICATION" | "PASSPORT_VERIFICATION" | "PAYOUT_METHOD_VERIFICATION";
    }
    export interface KYCCheckSummary {
        /**
         * The code of the check.
         */
        kycCheckCode?: number; // int32
        /**
         * A description of the check.
         */
        kycCheckDescription?: string;
    }
    export interface KYCPayoutMethodCheckResult {
        /**
         * A list of the checks and their statuses.
         */
        checks?: KYCCheckStatusData[];
        /**
         * The unique ID of the payoput method to which the check applies.
         */
        payoutMethodCode?: string;
    }
    export interface KYCShareholderCheckResult {
        /**
         * A list of the checks and their statuses.
         */
        checks?: KYCCheckStatusData[];
        /**
         * The code of the shareholder to which the check applies.
         */
        shareholderCode?: string;
    }
    export interface KYCVerificationResult {
        /**
         * The result(s) of the checks on the account holder.
         */
        accountHolder?: KYCCheckResult;
        /**
         * The result(s) of the checks on the payout method(s).
         */
        payoutMethods?: KYCPayoutMethodCheckResult[];
        /**
         * The result(s) of the checks on the shareholder(s).
         */
        shareholders?: KYCShareholderCheckResult[];
    }
    export interface PayoutMethod {
        merchantAccount: string;
        payoutMethodCode?: string;
        payoutMethodType?: "CardToken";
        recurringDetailReference: string;
        shopperReference: string;
    }
    export interface PayoutScheduleResponse {
        /**
         * The date of the next scheduled payout.
         */
        nextScheduledPayout: string; // date-time
        /**
         * The payout schedule of the account.
         * >Permitted values: `DEFAULT`, `HOLD`, `DAILY`, `WEEKLY`, `MONTHLY`.
         */
        schedule: "BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT" | "BIWEEKLY_ON_1ST_AND_15TH_AT_NOON" | "DAILY" | "DAILY_6PM" | "DAILY_AU" | "DAILY_EU" | "DAILY_US" | "DEFAULT" | "EVERY_6_HOURS_FROM_MIDNIGHT" | "HOLD" | "MONTHLY" | "WEEKLY" | "WEEKLY_ON_TUE_FRI_MIDNIGHT" | "YEARLY";
    }
    export interface PerformVerificationRequest {
        /**
         * The code of the account holder to verify.
         */
        accountHolderCode: string;
        /**
         * The state required for the account holder.
         * > Permitted values: `Processing`, `Payout`.
         */
        accountStateType: "LimitedPayout" | "LimitedProcessing" | "LimitlessPayout" | "LimitlessProcessing" | "Payout" | "Processing";
        /**
         * The tier required for the account holder.
         */
        tier: number; // int32
    }
    export interface PersonalDocumentData {
        /**
         * The expiration date of the document.
         * The date should be in ISO-8601 format yyyy-mm-dd (e.g. 2000-01-31).
         */
        expirationDate?: string;
        /**
         * The two-character country code of the issuer.
         * >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
         */
        issuerCountry?: string;
        /**
         * The state issued the document (if applicable)
         */
        issuerState?: string;
        /**
         * The number of the document. Delete the given type if the value empty.
         */
        number?: string;
        /**
         * The type of the document. More then one item pert type does not allowed.
         * Valid values: ID, PASSPORT, VISA, DRIVINGLICENSE
         */
        type: "DRIVINGLICENSE" | "ID" | "PASSPORT" | "SOCIALSECURITY" | "VISA";
    }
    export interface ShareholderContact {
        /**
         * The address of the contact.
         */
        address?: ViasAddress;
        /**
         * The e-mail address of the contact.
         */
        email?: string;
        /**
         * The phone number of the contact provided as a single string.  It will be handled as a landline phone.
         * **Examples:** "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"
         */
        fullPhoneNumber?: string;
        /**
         * The name of the contact.
         */
        name?: ViasName;
        /**
         * Personal data of the Shareholder.
         */
        personalData?: ViasPersonalData;
        /**
         * The phone number of the contact.
         */
        phoneNumber?: ViasPhoneNumber;
        /**
         * The unique identifier (UUID) of the Shareholder.
         * >**If, during an Account Holder create or update request, this field is left blank (but other fields provided), a new Shareholder will be created with a procedurally-generated UUID.**
         *
         * >**If, during an Account Holder create request, a UUID is provided, the creation of the Shareholder will fail while the creation of the Account Holder will continue.**
         *
         * >**If, during an Account Holder update request, a UUID that is not correlated with an existing Shareholder is provided, the update of the Shareholder will fail.**
         *
         * >**If, during an Account Holder update request, a UUID that is correlated with an existing Shareholder is provided, the existing Shareholder will be updated.**
         *
         */
        shareholderCode?: string;
        /**
         * Merchant reference to the Shareholder.
         */
        shareholderReference?: string;
        /**
         * The URL of the website of the contact.
         */
        webAddress?: string;
    }
    export interface SuspendAccountHolderRequest {
        /**
         * The code of the account holder to be suspended.
         */
        accountHolderCode: string;
    }
    export interface SuspendAccountHolderResponse {
        /**
         * The new status of the Account Holder.
         */
        accountHolderStatus: AccountHolderStatus;
        /**
         * Contains field validation errors that would prevent requests from being processed.
         */
        invalidFields?: ErrorFieldType[];
        /**
         * The reference of a request. Can be used to uniquely identify the request.
         */
        pspReference?: string;
        /**
         * The result code.
         */
        resultCode?: string;
    }
    export interface UnSuspendAccountHolderRequest {
        /**
         * The code of the account holder to be reinstated.
         */
        accountHolderCode: string;
    }
    export interface UnSuspendAccountHolderResponse {
        /**
         * The new status of the Account Holder.
         */
        accountHolderStatus: AccountHolderStatus;
        /**
         * Contains field validation errors that would prevent requests from being processed.
         */
        invalidFields?: ErrorFieldType[];
        /**
         * The reference of a request. Can be used to uniquely identify the request.
         */
        pspReference?: string;
        /**
         * The result code.
         */
        resultCode?: string;
    }
    export interface UpdateAccountHolderRequest {
        /**
         * The code of the Account Holder to be updated.
         */
        accountHolderCode: string;
        /**
         * The details to which the Account Holder should be updated.
         *
         * Required if a processingTier is not provided.
         */
        accountHolderDetails?: AccountHolderDetails;
        /**
         * The description to which the Account Holder should be updated.
         */
        description?: string;
        /**
         * The entity type.
         * Permitted values: `Business`, `Individual`
         *
         * If an account holder is 'Business', then `accountHolderDetails.businessDetails` must be provided, as well as at least one entry in the `accountHolderDetails.businessDetails.shareholders` list.
         *
         * If an account holder is 'Individual', then `accountHolderDetails.individualDetails` must be provided.
         */
        legalEntity?: "Business" | "Individual" | "NonProfit" | "Partnership" | "PublicCompany";
        /**
         * The primary three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), to which the account holder should be updated.
         */
        primaryCurrency?: string;
        /**
         * The processing tier to which the Account Holder should be updated.
         * >The processing tier can not be lowered through this request.
         *
         * >Required if accountHolderDetails are not provided.
         */
        processingTier?: number; // int32
        /**
         * The identifier of the profile that applies to this entity.
         */
        verificationProfile?: string;
    }
    export interface UpdateAccountHolderResponse {
        /**
         * The code of the account holder.
         */
        accountHolderCode?: string;
        /**
         * Details of the account holder.
         */
        accountHolderDetails?: AccountHolderDetails;
        /**
         * The new status of the account holder.
         */
        accountHolderStatus: AccountHolderStatus;
        /**
         * The description of the account holder.
         */
        description?: string;
        /**
         * in case the account holder has not been updated, contains account holder fields, that did not pass the validation.
         */
        invalidFields?: ErrorFieldType[];
        /**
         * The legal entity of the account holder.
         */
        legalEntity: "Business" | "Individual" | "NonProfit" | "Partnership" | "PublicCompany";
        /**
         * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals.
         */
        primaryCurrency?: string;
        /**
         * The reference of a request. Can be used to uniquely identify the request.
         */
        pspReference?: string;
        /**
         * The result code.
         */
        resultCode?: string;
        /**
         * The details of KYC Verification of the account holder.
         */
        verification: KYCVerificationResult;
        /**
         * The identifier of the profile that applies to this entity.
         */
        verificationProfile?: string;
    }
    export interface UpdateAccountHolderStateRequest {
        /**
         * The code of the Account Holder on which to update the state.
         */
        accountHolderCode: string;
        /**
         * If true, disable the requested state.  If false, enable the requested state.
         */
        disable: boolean;
        /**
         * The reason that the state is being updated.
         * >Required if the state is being disabled.
         */
        reason?: string;
        /**
         * The state to be updated.
         * >Permitted values are: `Processing`, `Payout`
         */
        stateType: "LimitedPayout" | "LimitedProcessing" | "LimitlessPayout" | "LimitlessProcessing" | "Payout" | "Processing";
    }
    export interface UpdateAccountRequest {
        /**
         * The code of the account to update.
         */
        accountCode: string;
        /**
         * The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder.
         */
        bankAccountUUID?: string;
        /**
         * A description of the account.
         */
        description?: string;
        /**
         * A set of key and value pairs for general use by the merchant.
         * The keys do not have specific names and may be used for storing miscellaneous data as desired.
         * > Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.
         */
        metadata?: {
            [name: string]: string;
        };
        /**
         * The details of the payout schedule, to which the account should be updated.
         */
        payoutSchedule?: UpdatePayoutScheduleRequest;
        /**
         * Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.
         */
        payoutSpeed?: "SAME_DAY" | "STANDARD";
    }
    export interface UpdateAccountResponse {
        /**
         * The code of the account.
         */
        accountCode: string;
        /**
         * The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder.
         */
        bankAccountUUID?: string;
        /**
         * The description of the account.
         */
        description?: string;
        /**
         * A list of fields that caused the `/updateAccount` request to fail.
         */
        invalidFields?: ErrorFieldType[];
        metadata?: {
            [name: string]: string;
        };
        /**
         * The payout schedule of the account.
         */
        payoutSchedule?: PayoutScheduleResponse;
        /**
         * Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.
         */
        payoutSpeed?: "SAME_DAY" | "STANDARD";
        /**
         * The reference of a request. Can be used to uniquely identify the request.
         */
        pspReference?: string;
        /**
         * The result code.
         */
        resultCode?: string;
    }
    export interface UpdatePayoutScheduleRequest {
        /**
         * Direction on how to handle any payouts that have already been scheduled.
         * Permitted values:
         * * `CLOSE` will close the existing batch of payouts.
         * * `UPDATE` will reschedule the existing batch to the new schedule.
         * * `NOTHING` (**default**) will allow the payout to proceed.
         */
        action?: "CLOSE" | "NOTHING" | "UPDATE";
        /**
         * The reason for the payout schedule update.
         * > This field is required when the `schedule` parameter is set to `HOLD`.
         */
        reason?: string;
        /**
         * The payout schedule to which the account is to be updated.
         * Permitted values: `DEFAULT`, `HOLD`, `DAILY`, `WEEKLY`, `MONTHLY`.
         * `HOLD` will prevent scheduled payouts from happening but will still allow manual payouts to occur.
         */
        schedule: "BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT" | "BIWEEKLY_ON_1ST_AND_15TH_AT_NOON" | "DAILY" | "DAILY_6PM" | "DAILY_AU" | "DAILY_EU" | "DAILY_US" | "DEFAULT" | "EVERY_6_HOURS_FROM_MIDNIGHT" | "HOLD" | "MONTHLY" | "WEEKLY" | "WEEKLY_ON_TUE_FRI_MIDNIGHT" | "YEARLY";
    }
    export interface UploadDocumentRequest {
        /**
         * The content of the document as represented by a Base64-encoded string.
         *
         * To learn about requirements, see [Bank account check](https://docs.adyen.com/platforms/onboarding-and-verification/verification-checks/bank-account-check#requirements) and [Photo ID check](https://docs.adyen.com/platforms/onboarding-and-verification/verification-checks/photo-id-check#requirements).
         */
        documentContent: string; // byte
        /**
         * Details of the document being submitted.
         */
        documentDetail: DocumentDetail;
    }
    export interface ViasAddress {
        /**
         * The name of the city.
         * >Required if either `houseNumberOrName`, `street`, `postalCode`, or `stateOrProvince` are provided.
         */
        city?: string;
        /**
         * The two-character country code of the address. The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
         * > If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.
         */
        country: string;
        /**
         * The number or name of the house.
         */
        houseNumberOrName?: string;
        /**
         * The postal code.
         * >A maximum of five (5) digits for an address in the USA, or a maximum of ten (10) characters for an address in all other countries.
         * >Required if either `houseNumberOrName`, `street`, `city`, or `stateOrProvince` are provided.
         */
        postalCode?: string;
        /**
         * The abbreviation of the state or province.
         * >Two (2) characters for an address in the USA or Canada, or a maximum of three (3) characters for an address in all other countries.
         * >Required for an address in the USA or Canada if either `houseNumberOrName`, `street`, `city`, or `postalCode` are provided.
         */
        stateOrProvince?: string;
        /**
         * The name of the street.
         * >The house number should not be included in this field; it should be separately provided via `houseNumberOrName`.
         * >Required if either `houseNumberOrName`, `city`, `postalCode`, or `stateOrProvince` are provided.
         */
        street?: string;
    }
    export interface ViasName {
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
    export interface ViasPersonalData {
        /**
         * The date of birth of the person.
         * The date should be in ISO-8601 format yyyy-mm-dd (e.g. 2000-01-31).
         */
        dateOfBirth?: string;
        /**
         * Key value pairs of document type and identify numbers
         */
        documentData?: PersonalDocumentData[];
        /**
         * The nationality of the person represented by a two-character country code.
         * >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
         */
        nationality?: string;
    }
    export interface ViasPhoneNumber {
        /**
         * The two-character country code of the phone number.
         * >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
         */
        phoneCountryCode: string;
        /**
         * The phone number.
         * >The inclusion of the phone number country code is not necessary.
         */
        phoneNumber: string;
        /**
         * The type of the phone number.
         * >The following values are permitted: `Landline`, `Mobile`, `SIP`, `Fax`.
         */
        phoneType?: "Fax" | "Landline" | "Mobile" | "SIP";
    }
}
declare namespace Paths {
    namespace PostCheckAccountHolder {
        export type RequestBody = IPlatformsAccount.PerformVerificationRequest;
        namespace Responses {
            export type $200 = IPlatformsAccount.GenericResponse;
            export interface $400 {
            }
            export interface $401 {
            }
            export interface $403 {
            }
            export interface $422 {
            }
            export interface $500 {
            }
        }
    }
    namespace PostCloseAccount {
        export type RequestBody = IPlatformsAccount.CloseAccountRequest;
        namespace Responses {
            export type $200 = IPlatformsAccount.CloseAccountResponse;
            export interface $400 {
            }
            export interface $401 {
            }
            export interface $403 {
            }
            export interface $422 {
            }
            export interface $500 {
            }
        }
    }
    namespace PostCloseAccountHolder {
        export type RequestBody = IPlatformsAccount.CloseAccountHolderRequest;
        namespace Responses {
            export type $200 = IPlatformsAccount.CloseAccountHolderResponse;
            export interface $400 {
            }
            export interface $401 {
            }
            export interface $403 {
            }
            export interface $422 {
            }
            export interface $500 {
            }
        }
    }
    namespace PostCreateAccount {
        export type RequestBody = IPlatformsAccount.CreateAccountRequest;
        namespace Responses {
            export type $200 = IPlatformsAccount.CreateAccountResponse;
            export interface $400 {
            }
            export interface $401 {
            }
            export interface $403 {
            }
            export interface $422 {
            }
            export interface $500 {
            }
        }
    }
    namespace PostCreateAccountHolder {
        export type RequestBody = IPlatformsAccount.CreateAccountHolderRequest;
        namespace Responses {
            export type $200 = IPlatformsAccount.CreateAccountHolderResponse;
            export interface $400 {
            }
            export interface $401 {
            }
            export interface $403 {
            }
            export interface $422 {
            }
            export interface $500 {
            }
        }
    }
    namespace PostDeleteBankAccounts {
        export type RequestBody = IPlatformsAccount.DeleteBankAccountRequest;
        namespace Responses {
            export type $200 = IPlatformsAccount.GenericResponse;
            export interface $400 {
            }
            export interface $401 {
            }
            export interface $403 {
            }
            export interface $422 {
            }
            export interface $500 {
            }
        }
    }
    namespace PostDeletePayoutMethods {
        export type RequestBody = IPlatformsAccount.DeletePayoutMethodRequest;
        namespace Responses {
            export type $200 = IPlatformsAccount.GenericResponse;
            export interface $400 {
            }
            export interface $401 {
            }
            export interface $403 {
            }
            export interface $422 {
            }
            export interface $500 {
            }
        }
    }
    namespace PostDeleteShareholders {
        export type RequestBody = IPlatformsAccount.DeleteShareholderRequest;
        namespace Responses {
            export type $200 = IPlatformsAccount.GenericResponse;
            export interface $400 {
            }
            export interface $401 {
            }
            export interface $403 {
            }
            export interface $422 {
            }
            export interface $500 {
            }
        }
    }
    namespace PostGetAccountHolder {
        export type RequestBody = IPlatformsAccount.GetAccountHolderRequest;
        namespace Responses {
            export type $200 = IPlatformsAccount.GetAccountHolderResponse;
            export interface $400 {
            }
            export interface $401 {
            }
            export interface $403 {
            }
            export interface $422 {
            }
            export interface $500 {
            }
        }
    }
    namespace PostGetUploadedDocuments {
        export type RequestBody = IPlatformsAccount.GetUploadedDocumentsRequest;
        namespace Responses {
            export type $200 = IPlatformsAccount.GetUploadedDocumentsResponse;
            export interface $400 {
            }
            export interface $401 {
            }
            export interface $403 {
            }
            export interface $422 {
            }
            export interface $500 {
            }
        }
    }
    namespace PostSuspendAccountHolder {
        export type RequestBody = IPlatformsAccount.SuspendAccountHolderRequest;
        namespace Responses {
            export type $200 = IPlatformsAccount.SuspendAccountHolderResponse;
            export interface $400 {
            }
            export interface $401 {
            }
            export interface $403 {
            }
            export interface $422 {
            }
            export interface $500 {
            }
        }
    }
    namespace PostUnSuspendAccountHolder {
        export type RequestBody = IPlatformsAccount.UnSuspendAccountHolderRequest;
        namespace Responses {
            export type $200 = IPlatformsAccount.UnSuspendAccountHolderResponse;
            export interface $400 {
            }
            export interface $401 {
            }
            export interface $403 {
            }
            export interface $422 {
            }
            export interface $500 {
            }
        }
    }
    namespace PostUpdateAccount {
        export type RequestBody = IPlatformsAccount.UpdateAccountRequest;
        namespace Responses {
            export type $200 = IPlatformsAccount.UpdateAccountResponse;
            export interface $400 {
            }
            export interface $401 {
            }
            export interface $403 {
            }
            export interface $422 {
            }
            export interface $500 {
            }
        }
    }
    namespace PostUpdateAccountHolder {
        export type RequestBody = IPlatformsAccount.UpdateAccountHolderRequest;
        namespace Responses {
            export type $200 = IPlatformsAccount.UpdateAccountHolderResponse;
            export interface $400 {
            }
            export interface $401 {
            }
            export interface $403 {
            }
            export interface $422 {
            }
            export interface $500 {
            }
        }
    }
    namespace PostUpdateAccountHolderState {
        export type RequestBody = IPlatformsAccount.UpdateAccountHolderStateRequest;
        namespace Responses {
            export type $200 = IPlatformsAccount.GetAccountHolderStatusResponse;
            export interface $400 {
            }
            export interface $401 {
            }
            export interface $403 {
            }
            export interface $422 {
            }
            export interface $500 {
            }
        }
    }
    namespace PostUploadDocument {
        export type RequestBody = IPlatformsAccount.UploadDocumentRequest;
        namespace Responses {
            export type $200 = IPlatformsAccount.UpdateAccountHolderResponse;
            export interface $400 {
            }
            export interface $401 {
            }
            export interface $403 {
            }
            export interface $422 {
            }
            export interface $500 {
            }
        }
    }
}
