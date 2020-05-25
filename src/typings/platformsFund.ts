
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


declare namespace IPlatformsFund {
    export interface AccountDetailBalance {
        /**
         * The code of the account that holds the balance.
         */
        accountCode?: string;
        /**
         * Details of the balance held by the account.
         */
        detailBalance?: IPlatformsFund.DetailBalance;
    }
    export interface AccountHolderBalanceRequest {
        /**
         * The code of the Account Holder of which to retrieve the balance.
         */
        accountHolderCode: string;
    }
    export interface AccountHolderBalanceResponse {
        /**
         * A list of each account and their balances.
         */
        balancePerAccount?: IPlatformsFund.AccountDetailBalance[];
        /**
         * Contains field validation errors that would prevent requests from being processed.
         */
        invalidFields?: IPlatformsFund.ErrorFieldType[];
        /**
         * The reference of a request.  Can be used to uniquely identify the request.
         */
        pspReference: string;
        /**
         * The result code.
         */
        resultCode?: string;
        /**
         * The total balance of the account holder.
         */
        totalBalance?: IPlatformsFund.DetailBalance;
    }
    export interface AccountHolderTransactionListRequest {
        /**
         * The code of the account holder that owns the account(s) of which retrieve the transaction list.
         */
        accountHolderCode: string;
        /**
         * A list of accounts to include in the transaction list. If left blank, the last fifty (50) transactions for all accounts of the account holder will be included.
         */
        transactionListsPerAccount?: IPlatformsFund.TransactionListForAccount[];
        /**
         * A list of statuses to include in the transaction list. If left blank, all transactions will be included.
         * >Permitted values:
         * >* `PendingCredit` - a pending balance credit.
         * >* `CreditFailed` - a pending credit failure; the balance will not be credited.
         * >* `Credited` - a credited balance.
         * >* `PendingDebit` - a pending balance debit (e.g., a refund).
         * >* `DebitFailed` - a pending debit failure; the balance will not be debited.
         * >* `Debited` - a debited balance (e.g., a refund).
         * >* `DebitReversedReceived` - a pending refund reversal.
         * >* `DebitedReversed` - a reversed refund.
         * >* `ChargebackReceived` - a received chargeback request.
         * >* `Chargeback` - a processed chargeback.
         * >* `ChargebackReversedReceived` - a pending chargeback reversal.
         * >* `ChargebackReversed` - a reversed chargeback.
         * >* `Converted` - converted.
         * >* `ManualCorrected` - manual booking/adjustment by Adyen.
         * >* `Payout` - a payout.
         * >* `PayoutReversed` - a reversed payout.
         * >* `PendingFundTransfer` - a pending transfer of funds from one account to another.
         * >* `FundTransfer` - a transfer of funds from one account to another.
         */
        transactionStatuses?: ("Chargeback" | "ChargebackCorrection" | "ChargebackCorrectionReceived" | "ChargebackReceived" | "ChargebackReversed" | "ChargebackReversedReceived" | "Converted" | "CreditFailed" | "CreditReversed" | "CreditReversedReceived" | "Credited" | "DebitFailed" | "DebitReversedReceived" | "Debited" | "DebitedReversed" | "Fee" | "FundTransfer" | "FundTransferReversed" | "ManualCorrected" | "Payout" | "PayoutReversed" | "PendingCredit" | "PendingDebit" | "PendingFundTransfer" | "SecondChargeback" | "SecondChargebackReceived")[];
    }
    export interface AccountHolderTransactionListResponse {
        /**
         * A list of the transactions.
         */
        accountTransactionLists?: IPlatformsFund.AccountTransactionList[];
        /**
         * Contains field validation errors that would prevent requests from being processed.
         */
        invalidFields?: IPlatformsFund.ErrorFieldType[];
        /**
         * The reference of a request.  Can be used to uniquely identify the request.
         */
        pspReference: string;
        /**
         * The result code.
         */
        resultCode?: string;
    }
    export interface AccountTransactionList {
        /**
         * The code of the account.
         */
        accountCode?: string;
        /**
         * Indicates whether there is a next page of transactions available.
         */
        hasNextPage?: boolean;
        /**
         * The list of transactions.
         */
        transactions?: IPlatformsFund.Transaction[];
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
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        accountNumber?: string;
        /**
         * The type of bank account.
         * Only applicable to bank accounts held in the USA.
         * The permitted values are: `checking`, `savings`.
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
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
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        bankBicSwift?: string;
        /**
         * The city in which the bank branch is located.
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        bankCity?: string;
        /**
         * The bank code of the banking institution with which the bank account is registered.
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        bankCode?: string;
        /**
         * The name of the banking institution with which the bank account is held.
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        bankName?: string;
        /**
         * The branch code of the branch under which the bank account is registered. The value to be specified in this parameter depends on the country of the bank account:
         * * United States - Routing number
         * * United Kingdom - Sort code
         * * Germany - Bankleitzahl
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        branchCode?: string;
        /**
         * The check code of the bank account.
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        checkCode?: string;
        /**
         * The two-letter country code in which the bank account is registered.
         * >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        countryCode?: string;
        /**
         * The currency in which the bank account deals.
         * >The permitted currency codes are defined in ISO-4217 (e.g. 'EUR').
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        currencyCode?: string;
        /**
         * The international bank account number.
         * >The IBAN standard is defined in ISO-13616.
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        iban?: string;
        /**
         * The city of residence of the bank account owner.
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        ownerCity?: string;
        /**
         * The country code of the country of residence of the bank account owner.
         * >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        ownerCountryCode?: string;
        /**
         * The date of birth of the bank account owner.
         *
         */
        ownerDateOfBirth?: string;
        /**
         * The house name or number of the residence of the bank account owner.
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        ownerHouseNumberOrName?: string;
        /**
         * The name of the bank account owner.
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        ownerName?: string;
        /**
         * The country code of the country of nationality of the bank account owner.
         * >The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        ownerNationality?: string;
        /**
         * The postal code of the residence of the bank account owner.
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        ownerPostalCode?: string;
        /**
         * The state of residence of the bank account owner.
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        ownerState?: string;
        /**
         * The street name of the residence of the bank account owner.
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        ownerStreet?: string;
        /**
         * If set to true, the bank account is a primary account.
         */
        primaryAccount?: boolean;
        /**
         * The tax ID number.
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        taxId?: string;
        /**
         * The URL to be used for bank account verification.
         * This may be generated on bank account creation.
         *
         * >Refer to the [Onboarding and verification](https://docs.adyen.com/marketpay/onboarding-and-verification) section for details on field requirements.
         */
        urlForVerification?: string;
    }
    export interface DetailBalance {
        /**
         * The list of balances held by the account.
         */
        balance?: IPlatformsFund.Amount[];
        /**
         * The list of on hold balances held by the account.
         */
        onHoldBalance?: IPlatformsFund.Amount[];
        /**
         * The list of pending balances held by the account.
         */
        pendingBalance?: IPlatformsFund.Amount[];
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
        fieldType?: IPlatformsFund.FieldType;
    }
    export interface FieldType {
        /**
         * The full name of the property.
         */
        field?: string;
        /**
         * The type of the field.
         */
        fieldName?: "accountCode" | "accountHolderCode" | "accountHolderDetails" | "accountNumber" | "accountStateType" | "accountStatus" | "accountType" | "address" | "bankAccount" | "bankAccountCode" | "bankAccountName" | "bankAccountUUID" | "bankBicSwift" | "bankCity" | "bankCode" | "bankName" | "bankStatement" | "branchCode" | "businessContact" | "cardToken" | "checkCode" | "city" | "companyRegistration" | "country" | "countryCode" | "currency" | "currencyCode" | "dateOfBirth" | "description" | "destinationAccountCode" | "document" | "documentExpirationDate" | "documentIssuerCountry" | "documentIssuerState" | "documentName" | "documentNumber" | "documentType" | "doingBusinessAs" | "drivingLicence" | "drivingLicenceBack" | "drivingLicense" | "email" | "firstName" | "fullPhoneNumber" | "gender" | "hopWebserviceUser" | "houseNumberOrName" | "iban" | "idCard" | "idCardBack" | "idCardFront" | "idNumber" | "identityDocument" | "individualDetails" | "lastName" | "legalBusinessName" | "legalEntity" | "legalEntityType" | "merchantAccount" | "merchantCategoryCode" | "merchantReference" | "microDeposit" | "name" | "nationality" | "originalReference" | "ownerCity" | "ownerCountryCode" | "ownerHouseNumberOrName" | "ownerName" | "ownerPostalCode" | "ownerState" | "ownerStreet" | "passport" | "passportNumber" | "payoutMethodCode" | "personalData" | "phoneCountryCode" | "phoneNumber" | "postalCode" | "primaryCurrency" | "reason" | "registrationNumber" | "returnUrl" | "schedule" | "shareholder" | "shareholderCode" | "socialSecurityNumber" | "sourceAccountCode" | "stateOrProvince" | "status" | "store" | "storeDetail" | "storeName" | "storeReference" | "street" | "taxId" | "tier" | "tierNumber" | "transferCode" | "unknown" | "value" | "virtualAccount" | "visaNumber" | "webAddress";
        /**
         * The code of the shareholder that the field belongs to. If empty, the field belongs to an account holder.
         */
        shareholderCode?: string;
    }
    export interface PayoutAccountHolderRequest {
        /**
         * The code of the account from which the payout is to be made.
         */
        accountCode: string;
        /**
         * The code of the Account Holder who owns the account from which the payout is to be made.
         * The Account Holder is the party to which the payout will be made.
         */
        accountHolderCode: string;
        /**
         * The amount to pay out.
         */
        amount: IPlatformsFund.Amount;
        /**
         * The unique ID of the Bank Account held by the Account Holder to which the payout is to be made.
         * If left blank, a bank account is automatically selected.
         */
        bankAccountUUID?: string;
        /**
         * A description of the payout. Maximum 35 characters.
         * Allowed: **abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/?:().,'+ ";**
         */
        description?: string;
        /**
         * A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.
         */
        merchantReference?: string;
        /**
         * The unique ID of the payout method held by the Account Holder to which the payout is to be made.
         * If left blank, a payout instrument is automatically selected.
         */
        payoutMethodCode?: string;
    }
    export interface PayoutAccountHolderResponse {
        /**
         * The unique ID of the Bank Account to which the payout was made.
         */
        bankAccountUUID?: string;
        /**
         * Contains field validation errors that would prevent requests from being processed.
         */
        invalidFields?: IPlatformsFund.ErrorFieldType[];
        /**
         * The value supplied by the executing user when initiating the transfer; may be used to link multiple transactions.
         */
        merchantReference?: string;
        /**
         * The reference of a request.  Can be used to uniquely identify the request.
         */
        pspReference: string;
        /**
         * The result code.
         */
        resultCode?: string;
    }
    namespace Post {
        export type RequestBody = IPlatformsFund.TransferFundsRequest;
        namespace Responses {
            export type $200 = IPlatformsFund.TransferFundsResponse;
        }
    }
    export interface RefundFundsTransferRequest {
        /**
         * The amount to be transferred.
         */
        amount: IPlatformsFund.Amount;
        /**
         * A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.
         */
        merchantReference?: string;
        /**
         * A PSP reference of the original fund transfer.
         */
        originalReference: string;
    }
    export interface RefundFundsTransferResponse {
        /**
         * Contains field validation errors that would prevent requests from being processed.
         */
        invalidFields?: IPlatformsFund.ErrorFieldType[];
        /**
         * The value supplied by the executing user when initiating the transfer refund; may be used to link multiple transactions.
         */
        merchantReference?: string;
        message?: string;
        /**
         * A PSP reference of the original fund transfer.
         */
        originalReference?: string;
        /**
         * The reference of a request.  Can be used to uniquely identify the request.
         */
        pspReference: string;
        /**
         * The result code.
         */
        resultCode?: string;
    }
    export interface RefundNotPaidOutTransfersRequest {
        /**
         * The code of the account from which to perform the refund(s).
         */
        accountCode: string;
        /**
         * The code of the Account Holder which owns the account from which to perform the refund(s).
         */
        accountHolderCode: string;
    }
    export interface RefundNotPaidOutTransfersResponse {
        /**
         * Contains field validation errors that would prevent requests from being processed.
         */
        invalidFields?: IPlatformsFund.ErrorFieldType[];
        /**
         * The reference of a request.  Can be used to uniquely identify the request.
         */
        pspReference: string;
        /**
         * The result code.
         */
        resultCode?: string;
    }
    export interface SetupBeneficiaryRequest {
        /**
         * The destination account code.
         */
        destinationAccountCode: string;
        /**
         * A value that can be supplied at the discretion of the executing user.
         */
        merchantReference: string;
        /**
         * The benefactor account.
         */
        sourceAccountCode: string;
    }
    export interface SetupBeneficiaryResponse {
        /**
         * Contains field validation errors that would prevent requests from being processed.
         */
        invalidFields?: IPlatformsFund.ErrorFieldType[];
        /**
         * The reference of a request.  Can be used to uniquely identify the request.
         */
        pspReference: string;
        /**
         * The result code.
         */
        resultCode?: string;
    }
    export interface Transaction {
        /**
         * The amount of the transaction.
         */
        amount?: IPlatformsFund.Amount;
        /**
         * The details of the bank account to where a payout was made.
         */
        bankAccountDetail?: IPlatformsFund.BankAccountDetail;
        /**
         * The merchant reference of a related capture.
         */
        captureMerchantReference?: string;
        /**
         * The psp reference of a related capture.
         */
        capturePspReference?: string;
        /**
         * The date on which the transaction was performed.
         */
        creationDate?: string; // date-time
        /**
         * A description of the transaction.
         */
        description?: string;
        /**
         * The code of the account to which funds were credited during an outgoing fund transfer.
         */
        destinationAccountCode?: string;
        /**
         * The psp reference of the related dispute.
         */
        disputePspReference?: string;
        /**
         * The reason code of a dispute.
         */
        disputeReasonCode?: string;
        /**
         * The merchant reference of a transaction.
         */
        merchantReference?: string;
        /**
         * The psp reference of the related authorisation or transfer.
         */
        paymentPspReference?: string;
        /**
         * The psp reference of the related payout.
         */
        payoutPspReference?: string;
        /**
         * The psp reference of a transaction.
         */
        pspReference?: string;
        /**
         * The code of the account from which funds were debited during an incoming fund transfer.
         */
        sourceAccountCode?: string;
        /**
         * The status of the transaction.
         * >Permitted values: `PendingCredit`, `CreditFailed`, `Credited`, `Converted`, `PendingDebit`, `DebitFailed`, `Debited`, `DebitReversedReceived`, `DebitedReversed`, `ChargebackReceived`, `Chargeback`, `ChargebackReversedReceived`, `ChargebackReversed`, `Payout`, `PayoutReversed`, `FundTransfer`, `PendingFundTransfer`, `ManualCorrected`.
         */
        transactionStatus?: "Chargeback" | "ChargebackCorrection" | "ChargebackCorrectionReceived" | "ChargebackReceived" | "ChargebackReversed" | "ChargebackReversedReceived" | "Converted" | "CreditFailed" | "CreditReversed" | "CreditReversedReceived" | "Credited" | "DebitFailed" | "DebitReversedReceived" | "Debited" | "DebitedReversed" | "Fee" | "FundTransfer" | "FundTransferReversed" | "ManualCorrected" | "Payout" | "PayoutReversed" | "PendingCredit" | "PendingDebit" | "PendingFundTransfer" | "SecondChargeback" | "SecondChargebackReceived";
        /**
         * The transfer code of the transaction.
         */
        transferCode?: string;
    }
    export interface TransactionListForAccount {
        /**
         * The account for which to retrieve the transactions.
         */
        accountCode: string;
        /**
         * The page of transactions to retrieve.
         * Each page lists fifty (50) transactions.  The most recent transactions are included on page 1.
         */
        page: number; // int32
    }
    export interface TransferFundsRequest {
        /**
         * The amount to be transferred.
         */
        amount: IPlatformsFund.Amount;
        /**
         * The code of the account to which the funds are to be credited.
         * >The state of the Account Holder of this account must be Active.
         */
        destinationAccountCode: string;
        /**
         * A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.
         */
        merchantReference?: string;
        /**
         * The code of the account from which the funds are to be debited.
         * >The state of the Account Holder of this account must be Active and allow payouts.
         */
        sourceAccountCode: string;
        /**
         * The code related to the type of transfer being performed.
         * >The permitted codes differ for each platform account and are defined in their service level agreement.
         */
        transferCode: string;
    }
    export interface TransferFundsResponse {
        /**
         * Contains field validation errors that would prevent requests from being processed.
         */
        invalidFields?: IPlatformsFund.ErrorFieldType[];
        /**
         * The value supplied by the executing user when initiating the transfer; may be used to link multiple transactions.
         */
        merchantReference?: string;
        /**
         * The reference of a request.  Can be used to uniquely identify the request.
         */
        pspReference: string;
        /**
         * The result code.
         */
        resultCode?: string;
    }
}
