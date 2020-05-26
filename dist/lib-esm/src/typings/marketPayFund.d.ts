declare namespace IMarketPayFund {
    interface AccountDetailBalance {
        accountCode?: string;
        detailBalance?: IMarketPayFund.DetailBalance;
    }
    interface AccountHolderBalanceRequest {
        accountHolderCode: string;
    }
    interface AccountHolderBalanceResponse {
        balancePerAccount?: IMarketPayFund.AccountDetailBalance[];
        invalidFields?: IMarketPayFund.ErrorFieldType[];
        pspReference: string;
        resultCode?: string;
        totalBalance?: IMarketPayFund.DetailBalance;
    }
    interface AccountHolderTransactionListRequest {
        accountHolderCode: string;
        transactionListsPerAccount?: IMarketPayFund.TransactionListForAccount[];
        transactionStatuses?: ("Chargeback" | "ChargebackCorrection" | "ChargebackCorrectionReceived" | "ChargebackReceived" | "ChargebackReversed" | "ChargebackReversedReceived" | "Converted" | "CreditFailed" | "CreditReversed" | "CreditReversedReceived" | "Credited" | "DebitFailed" | "DebitReversedReceived" | "Debited" | "DebitedReversed" | "FundTransfer" | "FundTransferReversed" | "ManualCorrected" | "Payout" | "PayoutReversed" | "PendingCredit" | "PendingDebit" | "PendingFundTransfer" | "SecondChargeback" | "SecondChargebackReceived")[];
    }
    interface AccountHolderTransactionListResponse {
        accountTransactionLists?: IMarketPayFund.AccountTransactionList[];
        invalidFields?: IMarketPayFund.ErrorFieldType[];
        pspReference: string;
        resultCode?: string;
    }
    interface AccountTransactionList {
        accountCode?: string;
        hasNextPage?: boolean;
        transactions?: IMarketPayFund.Transaction[];
    }
    interface Amount {
        currency: string;
        value: number;
    }
    interface BankAccountDetail {
        accountNumber?: string;
        accountType?: string;
        bankAccountName?: string;
        bankAccountReference?: string;
        bankAccountUUID?: string;
        bankBicSwift?: string;
        bankCity?: string;
        bankCode?: string;
        bankName?: string;
        branchCode?: string;
        checkCode?: string;
        countryCode?: string;
        currencyCode?: string;
        iban?: string;
        ownerCity?: string;
        ownerCountryCode?: string;
        ownerDateOfBirth?: string;
        ownerHouseNumberOrName?: string;
        ownerName?: string;
        ownerNationality?: string;
        ownerPostalCode?: string;
        ownerState?: string;
        ownerStreet?: string;
        primaryAccount?: boolean;
        taxId?: string;
        urlForVerification?: string;
    }
    interface DetailBalance {
        balance?: IMarketPayFund.Amount[];
        onHoldBalance?: IMarketPayFund.Amount[];
        pendingBalance?: IMarketPayFund.Amount[];
    }
    interface ErrorFieldType {
        errorCode?: number;
        errorDescription?: string;
        fieldType?: IMarketPayFund.FieldType;
    }
    interface FieldType {
        field?: string;
        fieldName?: "accountCode" | "accountHolderCode" | "accountHolderDetails" | "accountNumber" | "accountStateType" | "accountStatus" | "accountType" | "address" | "bankAccount" | "bankAccountCode" | "bankAccountName" | "bankAccountUUID" | "bankBicSwift" | "bankCity" | "bankCode" | "bankName" | "bankStatement" | "branchCode" | "businessContact" | "cardToken" | "checkCode" | "city" | "country" | "countryCode" | "currency" | "currencyCode" | "dateOfBirth" | "description" | "destinationAccountCode" | "document" | "documentExpirationDate" | "documentIssuerCountry" | "documentIssuerState" | "documentName" | "documentNumber" | "documentType" | "doingBusinessAs" | "drivingLicence" | "drivingLicenceBack" | "drivingLicense" | "email" | "firstName" | "fullPhoneNumber" | "gender" | "hopWebserviceUser" | "houseNumberOrName" | "iban" | "idCard" | "idCardBack" | "idCardFront" | "idNumber" | "identityDocument" | "incorporatedAt" | "individualDetails" | "lastName" | "legalBusinessName" | "legalEntity" | "legalEntityType" | "merchantAccount" | "merchantCategoryCode" | "merchantReference" | "microDeposit" | "name" | "nationality" | "originalReference" | "ownerCity" | "ownerCountryCode" | "ownerHouseNumberOrName" | "ownerName" | "ownerPostalCode" | "ownerState" | "ownerStreet" | "passport" | "passportNumber" | "payoutMethodCode" | "personalData" | "phoneCountryCode" | "phoneNumber" | "postalCode" | "primaryCurrency" | "reason" | "registrationNumber" | "returnUrl" | "schedule" | "shareholder" | "shareholderCode" | "socialSecurityNumber" | "sourceAccountCode" | "stateOrProvince" | "status" | "store" | "storeDetail" | "storeReference" | "street" | "taxId" | "tier" | "tierNumber" | "transferCode" | "unknown" | "value" | "virtualAccount" | "visaNumber" | "webAddress";
        shareholderCode?: string;
    }
    interface PayoutAccountHolderRequest {
        accountCode: string;
        accountHolderCode: string;
        amount: IMarketPayFund.Amount;
        bankAccountUUID?: string;
        description?: string;
        merchantReference?: string;
        payoutMethodCode?: string;
    }
    interface PayoutAccountHolderResponse {
        bankAccountUUID: string;
        invalidFields?: IMarketPayFund.ErrorFieldType[];
        merchantReference?: string;
        pspReference: string;
        resultCode?: string;
    }
    namespace Post {
        type RequestBody = IMarketPayFund.TransferFundsRequest;
        namespace Responses {
            type $200 = IMarketPayFund.TransferFundsResponse;
        }
    }
    interface RefundFundsTransferRequest {
        amount: IMarketPayFund.Amount;
        merchantReference?: string;
        originalReference: string;
    }
    interface RefundFundsTransferResponse {
        invalidFields?: IMarketPayFund.ErrorFieldType[];
        merchantReference?: string;
        message?: string;
        originalReference?: string;
        pspReference: string;
        resultCode?: string;
    }
    interface RefundNotPaidOutTransfersRequest {
        accountCode: string;
        accountHolderCode: string;
    }
    interface RefundNotPaidOutTransfersResponse {
        invalidFields?: IMarketPayFund.ErrorFieldType[];
        pspReference: string;
        resultCode?: string;
    }
    interface SetupBeneficiaryRequest {
        destinationAccountCode: string;
        merchantReference: string;
        sourceAccountCode: string;
    }
    interface SetupBeneficiaryResponse {
        invalidFields?: IMarketPayFund.ErrorFieldType[];
        pspReference: string;
        resultCode?: string;
    }
    interface Transaction {
        amount?: IMarketPayFund.Amount;
        bankAccountDetail?: IMarketPayFund.BankAccountDetail;
        captureMerchantReference?: string;
        capturePspReference?: string;
        creationDate?: string;
        description?: string;
        destinationAccountCode?: string;
        disputePspReference?: string;
        disputeReasonCode?: string;
        merchantReference?: string;
        paymentPspReference?: string;
        payoutPspReference?: string;
        pspReference?: string;
        sourceAccountCode?: string;
        transactionStatus?: "Chargeback" | "ChargebackCorrection" | "ChargebackCorrectionReceived" | "ChargebackReceived" | "ChargebackReversed" | "ChargebackReversedReceived" | "Converted" | "CreditFailed" | "CreditReversed" | "CreditReversedReceived" | "Credited" | "DebitFailed" | "DebitReversedReceived" | "Debited" | "DebitedReversed" | "FundTransfer" | "FundTransferReversed" | "ManualCorrected" | "Payout" | "PayoutReversed" | "PendingCredit" | "PendingDebit" | "PendingFundTransfer" | "SecondChargeback" | "SecondChargebackReceived";
        transferCode?: string;
    }
    interface TransactionListForAccount {
        accountCode: string;
        page: number;
    }
    interface TransferFundsRequest {
        amount: IMarketPayFund.Amount;
        destinationAccountCode: string;
        merchantReference?: string;
        sourceAccountCode: string;
        transferCode: string;
    }
    interface TransferFundsResponse {
        invalidFields?: IMarketPayFund.ErrorFieldType[];
        merchantReference?: string;
        pspReference: string;
        resultCode?: string;
    }
}
