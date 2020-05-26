declare namespace IMarketPayNotifications {
    interface AccountCloseNotification {
        content: IMarketPayNotifications.CloseAccountResponse;
        error?: IMarketPayNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface AccountCreateNotification {
        content: IMarketPayNotifications.CreateAccountResponse;
        error?: IMarketPayNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface AccountEvent {
        event: "InactivateAccount" | "RefundNotPaidOutTransfers";
        executionDate: string;
        reason: string;
    }
    interface AccountHolderCreateNotification {
        content: IMarketPayNotifications.CreateAccountHolderResponse;
        error?: IMarketPayNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface AccountHolderDetails {
        address?: IMarketPayNotifications.ViasAddress;
        bankAccountDetails?: IMarketPayNotifications.BankAccountDetail[];
        businessDetails?: IMarketPayNotifications.BusinessDetails;
        email: string;
        fullPhoneNumber: string;
        individualDetails?: IMarketPayNotifications.IndividualDetails;
        merchantCategoryCode?: string;
        metadata?: {};
        payoutMethods?: IMarketPayNotifications.PayoutMethod[];
        webAddress: string;
    }
    interface AccountHolderPayoutNotification {
        content: IMarketPayNotifications.AccountHolderPayoutNotificationContent;
        error?: IMarketPayNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface AccountHolderPayoutNotificationContent {
        accountCode: string;
        accountHolderCode: string;
        amount?: IMarketPayNotifications.Amount;
        amounts?: IMarketPayNotifications.Amount[];
        bankAccountDetail?: IMarketPayNotifications.BankAccountDetail;
        description?: string;
        estimatedArrivalDate?: IMarketPayNotifications.LocalDate;
        invalidFields?: IMarketPayNotifications.ErrorFieldType[];
        merchantReference?: string;
        status?: IMarketPayNotifications.OperationStatus;
    }
    interface AccountHolderStatus {
        events: IMarketPayNotifications.AccountEvent[];
        payoutState: IMarketPayNotifications.AccountPayoutState;
        processingState: IMarketPayNotifications.AccountProcessingState;
        status: "Active" | "Closed" | "Inactive" | "Suspended";
        statusReason: string;
    }
    interface AccountHolderStatusChangeNotification {
        content?: IMarketPayNotifications.AccountHolderStatusChangeNotificationContent;
        error?: IMarketPayNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface AccountHolderStatusChangeNotificationContent {
        accountHolderCode: string;
        invalidFields?: IMarketPayNotifications.ErrorFieldType[];
        newStatus: IMarketPayNotifications.AccountHolderStatus;
        oldStatus: IMarketPayNotifications.AccountHolderStatus;
        reason: string;
    }
    interface AccountHolderStoreStatusChangeNotification {
        content?: IMarketPayNotifications.AccountHolderStoreStatusChangeNotificationContent;
        error?: IMarketPayNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface AccountHolderStoreStatusChangeNotificationContent {
        accountHolderCode: string;
        invalidFields?: IMarketPayNotifications.ErrorFieldType[];
        newStatus: "Active" | "Closed" | "Inactive" | "InactiveWithModifications" | "Pending";
        oldStatus: "Active" | "Closed" | "Inactive" | "InactiveWithModifications" | "Pending";
        reason: string;
        store: string;
        storeReference: string;
    }
    interface AccountHolderUpcomingDeadlineNotification {
        content?: IMarketPayNotifications.AccountHolderUpcomingDeadlineNotificationContent;
        error?: IMarketPayNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface AccountHolderUpcomingDeadlineNotificationContent {
        accountHolderCode?: string;
        event?: "AccessPii" | "CloseAccount" | "CloseStores" | "DeleteBankAccounts" | "DeletePayoutInstrumentTokens" | "DeletePayoutMethods" | "DeleteShareholders" | "InactivateAccount" | "RecalculateAccountStatusAndProcessingTier" | "RefundNotPaidOutTransfers" | "ResolveEvents" | "SaveAccountHolder" | "SaveKYCCheckStatus" | "SuspendAccount" | "UnSuspendAccount" | "UpdateAccountHolderState" | "Verification";
        executionDate?: IMarketPayNotifications.LocalDate;
        reason?: string;
    }
    interface AccountHolderUpdateNotification {
        content: IMarketPayNotifications.UpdateAccountHolderResponse;
        error?: IMarketPayNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface AccountHolderVerificationNotification {
        content: IMarketPayNotifications.AccountHolderVerificationNotificationContent;
        error?: IMarketPayNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface AccountHolderVerificationNotificationContent {
        accountHolderCode: string;
        bankAccountUUID?: string;
        kycCheckStatusData?: IMarketPayNotifications.KYCCheckStatusData;
        shareholderCode?: string;
    }
    interface AccountPayoutState {
        allowPayout: boolean;
        disableReason: string;
        disabled: boolean;
        notAllowedReason: string;
        payoutLimit: IMarketPayNotifications.Amount;
        tierNumber: number;
    }
    interface AccountProcessingState {
        disableReason: string;
        disabled: boolean;
        processedFrom: IMarketPayNotifications.Amount;
        processedTo: IMarketPayNotifications.Amount;
        tierNumber: number;
    }
    interface AccountUpdateNotification {
        content: IMarketPayNotifications.UpdateAccountResponse;
        error?: IMarketPayNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
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
    interface BeneficiarySetupNotification {
        content: IMarketPayNotifications.BeneficiarySetupNotificationContent;
        error?: IMarketPayNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface BeneficiarySetupNotificationContent {
        destinationAccountCode: string;
        destinationAccountHolderCode: string;
        invalidFields?: IMarketPayNotifications.ErrorFieldType[];
        merchantReference?: string;
        sourceAccountCode: string;
        sourceAccountHolderCode: string;
        transferDate: string;
    }
    interface BusinessDetails {
        doingBusinessAs?: string;
        incorporatedAt?: string;
        legalBusinessName?: string;
        registrationNumber?: string;
        shareholders?: IMarketPayNotifications.ShareholderContact[];
        taxId?: string;
    }
    interface CloseAccountResponse {
        invalidFields?: IMarketPayNotifications.ErrorFieldType[];
        pspReference: string;
        resultCode?: string;
        status: "Active" | "Closed" | "Inactive" | "Suspended";
    }
    interface CompensateNegativeBalanceNotification {
        content?: IMarketPayNotifications.CompensateNegativeBalanceNotificationContent;
        error?: IMarketPayNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface CompensateNegativeBalanceNotificationContent {
        records: IMarketPayNotifications.CompensateNegativeBalanceNotificationRecord[];
    }
    interface CompensateNegativeBalanceNotificationRecord {
        accountCode: string;
        amount: IMarketPayNotifications.Amount;
        transferDate: string;
    }
    interface CreateAccountHolderResponse {
        accountCode?: string;
        accountHolderCode: string;
        accountHolderDetails: IMarketPayNotifications.AccountHolderDetails;
        accountHolderStatus: IMarketPayNotifications.AccountHolderStatus;
        description?: string;
        invalidFields?: IMarketPayNotifications.ErrorFieldType[];
        legalEntity: "Business" | "Individual" | "NonProfit" | "PublicCompany";
        primaryCurrency?: string;
        pspReference: string;
        resultCode?: string;
        verification: IMarketPayNotifications.KYCVerificationResult;
    }
    interface CreateAccountResponse {
        accountCode: string;
        accountHolderCode: string;
        description?: string;
        invalidFields?: IMarketPayNotifications.ErrorFieldType[];
        metadata?: {
            [name: string]: string;
        };
        payoutSchedule?: IMarketPayNotifications.PayoutScheduleResponse;
        pspReference: string;
        resultCode?: string;
        status: "Active" | "Closed" | "Inactive" | "Suspended";
    }
    interface DirectDebitInitiatedNotification {
        content?: IMarketPayNotifications.DirectDebitInitiatedNotificationContent;
        error?: IMarketPayNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface DirectDebitInitiatedNotificationContent {
        accountCode: string;
        amount: IMarketPayNotifications.Amount;
        debitInitiationDate?: IMarketPayNotifications.LocalDate;
        merchantAccountCode: string;
        status?: IMarketPayNotifications.OperationStatus;
    }
    interface ErrorFieldType {
        errorCode?: number;
        errorDescription?: string;
        fieldType?: IMarketPayNotifications.FieldType;
    }
    interface FieldType {
        field?: string;
        fieldName?: "accountCode" | "accountHolderCode" | "accountHolderDetails" | "accountNumber" | "accountStateType" | "accountStatus" | "accountType" | "address" | "bankAccount" | "bankAccountCode" | "bankAccountName" | "bankAccountUUID" | "bankBicSwift" | "bankCity" | "bankCode" | "bankName" | "bankStatement" | "branchCode" | "businessContact" | "cardToken" | "checkCode" | "city" | "country" | "countryCode" | "currency" | "currencyCode" | "dateOfBirth" | "description" | "destinationAccountCode" | "document" | "documentExpirationDate" | "documentIssuerCountry" | "documentIssuerState" | "documentName" | "documentNumber" | "documentType" | "doingBusinessAs" | "drivingLicence" | "drivingLicenceBack" | "drivingLicense" | "email" | "firstName" | "fullPhoneNumber" | "gender" | "hopWebserviceUser" | "houseNumberOrName" | "iban" | "idCard" | "idCardBack" | "idCardFront" | "idNumber" | "identityDocument" | "incorporatedAt" | "individualDetails" | "lastName" | "legalBusinessName" | "legalEntity" | "legalEntityType" | "merchantAccount" | "merchantCategoryCode" | "merchantReference" | "microDeposit" | "name" | "nationality" | "originalReference" | "ownerCity" | "ownerCountryCode" | "ownerHouseNumberOrName" | "ownerName" | "ownerPostalCode" | "ownerState" | "ownerStreet" | "passport" | "passportNumber" | "payoutMethodCode" | "personalData" | "phoneCountryCode" | "phoneNumber" | "postalCode" | "primaryCurrency" | "reason" | "registrationNumber" | "returnUrl" | "schedule" | "shareholder" | "shareholderCode" | "socialSecurityNumber" | "sourceAccountCode" | "stateOrProvince" | "status" | "store" | "storeDetail" | "storeReference" | "street" | "taxId" | "tier" | "tierNumber" | "transferCode" | "unknown" | "value" | "virtualAccount" | "visaNumber" | "webAddress";
        shareholderCode?: string;
    }
    interface IndividualDetails {
        name?: IMarketPayNotifications.ViasName;
        personalData?: IMarketPayNotifications.ViasPersonalData;
    }
    interface KYCBankAccountCheckResult {
        bankAccountUUID: string;
        checks: IMarketPayNotifications.KYCCheckStatusData[];
    }
    interface KYCCheckResult {
        checks: IMarketPayNotifications.KYCCheckStatusData[];
    }
    interface KYCCheckStatusData {
        requiredFields: string[];
        status: "AWAITING_DATA" | "DATA_PROVIDED" | "FAILED" | "INVALID_DATA" | "PASSED" | "PENDING" | "PENDING_REVIEW" | "RETRY_LIMIT_REACHED" | "UNCHECKED";
        summary: IMarketPayNotifications.KYCCheckSummary;
        type: "BANK_ACCOUNT_VERIFICATION" | "COMPANY_VERIFICATION" | "IDENTITY_VERIFICATION" | "NONPROFIT_VERIFICATION" | "PASSPORT_VERIFICATION";
    }
    interface KYCCheckSummary {
        kycCheckCode?: number;
        kycCheckDescription?: string;
    }
    interface KYCShareholderCheckResult {
        checks: IMarketPayNotifications.KYCCheckStatusData[];
        shareholderCode: string;
    }
    interface KYCVerificationResult {
        accountHolder: IMarketPayNotifications.KYCCheckResult;
        bankAccounts: IMarketPayNotifications.KYCBankAccountCheckResult[];
        shareholders: IMarketPayNotifications.KYCShareholderCheckResult[];
    }
    interface LocalDate {
        month?: number;
        year?: number;
    }
    interface Message {
        code?: string;
        text?: string;
    }
    interface NotificationErrorContainer {
        errorCode?: string;
        message?: string;
    }
    interface NotificationResponse {
        notificationResponse: string;
    }
    interface OperationStatus {
        message?: IMarketPayNotifications.Message;
        statusCode?: string;
    }
    interface PaymentFailureNotification {
        content: IMarketPayNotifications.PaymentFailureNotificationContent;
        error?: IMarketPayNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface PaymentFailureNotificationContent {
        errorFields: IMarketPayNotifications.ErrorFieldType[];
        errorMessage: IMarketPayNotifications.Message;
    }
    interface PayoutMethod {
        merchantAccount: string;
        payoutMethodCode?: string;
        payoutMethodType?: "CardToken";
        recurringDetailReference: string;
        shopperReference: string;
    }
    interface PayoutScheduleResponse {
        nextScheduledPayout: string;
        schedule: "BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT" | "BIWEEKLY_ON_1ST_AND_15TH_AT_NOON" | "DAILY" | "DAILY_6PM" | "DAILY_US" | "DEFAULT" | "EVERY_6_HOURS_FROM_MIDNIGHT" | "HOLD" | "MONTHLY" | "WEEKLY" | "WEEKLY_ON_TUE_FRI_MIDNIGHT" | "YEARLY";
    }
    interface PersonalDocumentData {
        expirationDate?: string;
        issuerCountry?: string;
        issuerState?: string;
        number: string;
        type: "DRIVINGLICENSE" | "ID" | "PASSPORT" | "SOCIALSECURITY" | "VISA";
    }
    namespace Post {
        type RequestBody = IMarketPayNotifications.TransferFundsNotification;
        namespace Responses {
            type $200 = IMarketPayNotifications.NotificationResponse;
        }
    }
    interface RefundFundsTransferNotification {
        content: IMarketPayNotifications.RefundFundsTransferNotificationContent;
        error?: IMarketPayNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface RefundFundsTransferNotificationContent {
        amount: IMarketPayNotifications.Amount;
        invalidFields?: IMarketPayNotifications.ErrorFieldType[];
        merchantReference?: string;
        originalReference: string;
        status?: IMarketPayNotifications.OperationStatus;
    }
    interface RefundResult {
        originalTransaction: IMarketPayNotifications.Transaction;
        pspReference: string;
        response?: string;
    }
    interface ReportAvailableNotification {
        content: IMarketPayNotifications.ReportAvailableNotificationContent;
        error?: IMarketPayNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface ReportAvailableNotificationContent {
        accountCode?: string;
        accountType?: string;
        eventDate?: string;
        remoteAccessUrl?: string;
        success?: boolean;
    }
    interface ScheduledRefundsNotification {
        content: IMarketPayNotifications.ScheduledRefundsNotificationContent;
        error?: IMarketPayNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface ScheduledRefundsNotificationContent {
        accountCode: string;
        accountHolderCode: string;
        invalidFields?: IMarketPayNotifications.ErrorFieldType[];
        lastPayout: IMarketPayNotifications.Transaction;
        refundResults: IMarketPayNotifications.RefundResult[];
    }
    interface ShareholderContact {
        address?: IMarketPayNotifications.ViasAddress;
        email?: string;
        fullPhoneNumber?: string;
        name?: IMarketPayNotifications.ViasName;
        personalData?: IMarketPayNotifications.ViasPersonalData;
        phoneNumber?: IMarketPayNotifications.ViasPhoneNumber;
        shareholderCode?: string;
        shareholderReference?: string;
        webAddress?: string;
    }
    interface Transaction {
        amount?: IMarketPayNotifications.Amount;
        bankAccountDetail?: IMarketPayNotifications.BankAccountDetail;
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
    interface TransferFundsNotification {
        content: IMarketPayNotifications.TransferFundsNotificationContent;
        error?: IMarketPayNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface TransferFundsNotificationContent {
        amount: IMarketPayNotifications.Amount;
        destinationAccountCode: string;
        invalidFields?: IMarketPayNotifications.ErrorFieldType[];
        merchantReference?: string;
        sourceAccountCode: string;
        status?: IMarketPayNotifications.OperationStatus;
        transferCode: string;
    }
    interface UpdateAccountHolderResponse {
        accountHolderCode?: string;
        accountHolderDetails?: IMarketPayNotifications.AccountHolderDetails;
        accountHolderStatus: IMarketPayNotifications.AccountHolderStatus;
        description?: string;
        invalidFields?: IMarketPayNotifications.ErrorFieldType[];
        legalEntity: "Business" | "Individual" | "NonProfit" | "PublicCompany";
        primaryCurrency?: string;
        pspReference: string;
        resultCode?: string;
        verification: IMarketPayNotifications.KYCVerificationResult;
    }
    interface UpdateAccountResponse {
        accountCode: string;
        description?: string;
        invalidFields?: IMarketPayNotifications.ErrorFieldType[];
        metadata?: {
            [name: string]: string;
        };
        payoutSchedule: IMarketPayNotifications.PayoutScheduleResponse;
        pspReference: string;
        resultCode?: string;
    }
    interface ViasAddress {
        city?: string;
        country: string;
        houseNumberOrName?: string;
        postalCode?: string;
        stateOrProvince?: string;
        street?: string;
    }
    interface ViasName {
        firstName: string;
        gender: "MALE" | "FEMALE" | "UNKNOWN";
        infix?: string;
        lastName: string;
    }
    interface ViasPersonalData {
        dateOfBirth?: string;
        documentData?: IMarketPayNotifications.PersonalDocumentData[];
        nationality?: string;
    }
    interface ViasPhoneNumber {
        phoneCountryCode: string;
        phoneNumber: string;
        phoneType?: "Fax" | "Landline" | "Mobile" | "SIP";
    }
}
