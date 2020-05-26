declare namespace IPlatformsNotifications {
    interface AccountCloseNotification {
        content: IPlatformsNotifications.CloseAccountResponse;
        error?: IPlatformsNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface AccountCreateNotification {
        content: IPlatformsNotifications.CreateAccountResponse;
        error?: IPlatformsNotifications.NotificationErrorContainer;
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
        content: IPlatformsNotifications.CreateAccountHolderResponse;
        error?: IPlatformsNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface AccountHolderDetails {
        address?: IPlatformsNotifications.ViasAddress;
        bankAccountDetails?: IPlatformsNotifications.BankAccountDetail[];
        businessDetails?: IPlatformsNotifications.BusinessDetails;
        email: string;
        fullPhoneNumber: string;
        individualDetails?: IPlatformsNotifications.IndividualDetails;
        merchantCategoryCode?: string;
        metadata?: {};
        payoutMethods?: IPlatformsNotifications.PayoutMethod[];
        webAddress: string;
    }
    interface AccountHolderPayoutNotification {
        content: IPlatformsNotifications.AccountHolderPayoutNotificationContent;
        error?: IPlatformsNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface AccountHolderPayoutNotificationContent {
        accountCode: string;
        accountHolderCode: string;
        amount?: IPlatformsNotifications.Amount;
        amounts?: IPlatformsNotifications.Amount[];
        bankAccountDetail?: IPlatformsNotifications.BankAccountDetail;
        description?: string;
        estimatedArrivalDate?: IPlatformsNotifications.LocalDate;
        invalidFields?: IPlatformsNotifications.ErrorFieldType[];
        merchantReference?: string;
        originalPspReference?: string;
        status?: IPlatformsNotifications.OperationStatus;
    }
    interface AccountHolderStatus {
        events: IPlatformsNotifications.AccountEvent[];
        payoutState: IPlatformsNotifications.AccountPayoutState;
        processingState: IPlatformsNotifications.AccountProcessingState;
        status: "Active" | "Closed" | "Inactive" | "Suspended";
        statusReason: string;
    }
    interface AccountHolderStatusChangeNotification {
        content?: IPlatformsNotifications.AccountHolderStatusChangeNotificationContent;
        error?: IPlatformsNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface AccountHolderStatusChangeNotificationContent {
        accountHolderCode: string;
        invalidFields?: IPlatformsNotifications.ErrorFieldType[];
        newStatus: IPlatformsNotifications.AccountHolderStatus;
        oldStatus: IPlatformsNotifications.AccountHolderStatus;
        reason: string;
    }
    interface AccountHolderStoreStatusChangeNotification {
        content?: IPlatformsNotifications.AccountHolderStoreStatusChangeNotificationContent;
        error?: IPlatformsNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface AccountHolderStoreStatusChangeNotificationContent {
        accountHolderCode: string;
        invalidFields?: IPlatformsNotifications.ErrorFieldType[];
        newStatus: "Active" | "Closed" | "Inactive" | "InactiveWithModifications" | "Pending";
        oldStatus: "Active" | "Closed" | "Inactive" | "InactiveWithModifications" | "Pending";
        reason: string;
        store: string;
        storeReference: string;
    }
    interface AccountHolderUpcomingDeadlineNotification {
        content?: IPlatformsNotifications.AccountHolderUpcomingDeadlineNotificationContent;
        error?: IPlatformsNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface AccountHolderUpcomingDeadlineNotificationContent {
        accountHolderCode?: string;
        event?: "AccessPii" | "CloseAccount" | "CloseStores" | "DeleteBankAccounts" | "DeletePayoutInstrumentTokens" | "DeletePayoutMethods" | "DeleteShareholders" | "InactivateAccount" | "RecalculateAccountStatusAndProcessingTier" | "RefundNotPaidOutTransfers" | "ResolveEvents" | "SaveAccountHolder" | "SaveKYCCheckStatus" | "SuspendAccount" | "UnSuspendAccount" | "UpdateAccountHolderState" | "Verification";
        executionDate?: IPlatformsNotifications.LocalDate;
        reason?: string;
    }
    interface AccountHolderUpdateNotification {
        content: IPlatformsNotifications.UpdateAccountHolderResponse;
        error?: IPlatformsNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface AccountHolderVerificationNotification {
        content: IPlatformsNotifications.AccountHolderVerificationNotificationContent;
        error?: IPlatformsNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface AccountHolderVerificationNotificationContent {
        accountHolderCode: string;
        bankAccountUUID?: string;
        kycCheckStatusData?: IPlatformsNotifications.KYCCheckStatusData;
        shareholderCode?: string;
    }
    interface AccountPayoutState {
        allowPayout: boolean;
        disableReason: string;
        disabled: boolean;
        notAllowedReason: string;
        payoutLimit: IPlatformsNotifications.Amount;
        tierNumber: number;
    }
    interface AccountProcessingState {
        disableReason: string;
        disabled: boolean;
        processedFrom: IPlatformsNotifications.Amount;
        processedTo: IPlatformsNotifications.Amount;
        tierNumber: number;
    }
    interface AccountUpdateNotification {
        content: IPlatformsNotifications.UpdateAccountResponse;
        error?: IPlatformsNotifications.NotificationErrorContainer;
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
        content: IPlatformsNotifications.BeneficiarySetupNotificationContent;
        error?: IPlatformsNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface BeneficiarySetupNotificationContent {
        destinationAccountCode: string;
        destinationAccountHolderCode: string;
        invalidFields?: IPlatformsNotifications.ErrorFieldType[];
        merchantReference?: string;
        sourceAccountCode: string;
        sourceAccountHolderCode: string;
        transferDate: string;
    }
    interface BusinessDetails {
        doingBusinessAs?: string;
        legalBusinessName?: string;
        registrationNumber?: string;
        shareholders?: IPlatformsNotifications.ShareholderContact[];
        taxId?: string;
    }
    interface CloseAccountResponse {
        accountCode?: string;
        invalidFields?: IPlatformsNotifications.ErrorFieldType[];
        pspReference: string;
        resultCode?: string;
        status: "Active" | "Closed" | "Inactive" | "Suspended";
    }
    interface CompensateNegativeBalanceNotification {
        content?: IPlatformsNotifications.CompensateNegativeBalanceNotificationContent;
        error?: IPlatformsNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface CompensateNegativeBalanceNotificationContent {
        records: IPlatformsNotifications.CompensateNegativeBalanceNotificationRecord[];
    }
    interface CompensateNegativeBalanceNotificationRecord {
        accountCode: string;
        amount: IPlatformsNotifications.Amount;
        transferDate: string;
    }
    interface CreateAccountHolderResponse {
        accountCode?: string;
        accountHolderCode: string;
        accountHolderDetails: IPlatformsNotifications.AccountHolderDetails;
        accountHolderStatus: IPlatformsNotifications.AccountHolderStatus;
        description?: string;
        invalidFields?: IPlatformsNotifications.ErrorFieldType[];
        legalEntity: "Business" | "Individual" | "NonProfit" | "Partnership" | "PublicCompany";
        primaryCurrency?: string;
        pspReference: string;
        resultCode?: string;
        verification: IPlatformsNotifications.KYCVerificationResult;
    }
    interface CreateAccountResponse {
        accountCode: string;
        accountHolderCode: string;
        description?: string;
        invalidFields?: IPlatformsNotifications.ErrorFieldType[];
        metadata?: {
            [name: string]: string;
        };
        payoutSchedule?: IPlatformsNotifications.PayoutScheduleResponse;
        pspReference: string;
        resultCode?: string;
        status: "Active" | "Closed" | "Inactive" | "Suspended";
    }
    interface DirectDebitInitiatedNotification {
        content?: IPlatformsNotifications.DirectDebitInitiatedNotificationContent;
        error?: IPlatformsNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface DirectDebitInitiatedNotificationContent {
        accountCode: string;
        amount: IPlatformsNotifications.Amount;
        debitInitiationDate?: IPlatformsNotifications.LocalDate;
        merchantAccountCode: string;
        status?: IPlatformsNotifications.OperationStatus;
    }
    interface ErrorFieldType {
        errorCode?: number;
        errorDescription?: string;
        fieldType?: IPlatformsNotifications.FieldType;
    }
    interface FieldType {
        field?: string;
        fieldName?: "accountCode" | "accountHolderCode" | "accountHolderDetails" | "accountNumber" | "accountStateType" | "accountStatus" | "accountType" | "address" | "bankAccount" | "bankAccountCode" | "bankAccountName" | "bankAccountUUID" | "bankBicSwift" | "bankCity" | "bankCode" | "bankName" | "bankStatement" | "branchCode" | "businessContact" | "cardToken" | "checkCode" | "city" | "companyRegistration" | "country" | "countryCode" | "currency" | "currencyCode" | "dateOfBirth" | "description" | "destinationAccountCode" | "document" | "documentExpirationDate" | "documentIssuerCountry" | "documentIssuerState" | "documentName" | "documentNumber" | "documentType" | "doingBusinessAs" | "drivingLicence" | "drivingLicenceBack" | "drivingLicense" | "email" | "firstName" | "fullPhoneNumber" | "gender" | "hopWebserviceUser" | "houseNumberOrName" | "iban" | "idCard" | "idCardBack" | "idCardFront" | "idNumber" | "identityDocument" | "individualDetails" | "lastName" | "legalBusinessName" | "legalEntity" | "legalEntityType" | "merchantAccount" | "merchantCategoryCode" | "merchantReference" | "microDeposit" | "name" | "nationality" | "originalReference" | "ownerCity" | "ownerCountryCode" | "ownerHouseNumberOrName" | "ownerName" | "ownerPostalCode" | "ownerState" | "ownerStreet" | "passport" | "passportNumber" | "payoutMethodCode" | "personalData" | "phoneCountryCode" | "phoneNumber" | "postalCode" | "primaryCurrency" | "reason" | "registrationNumber" | "returnUrl" | "schedule" | "shareholder" | "shareholderCode" | "socialSecurityNumber" | "sourceAccountCode" | "stateOrProvince" | "status" | "store" | "storeDetail" | "storeName" | "storeReference" | "street" | "taxId" | "tier" | "tierNumber" | "transferCode" | "unknown" | "value" | "virtualAccount" | "visaNumber" | "webAddress";
        shareholderCode?: string;
    }
    interface IndividualDetails {
        name?: IPlatformsNotifications.ViasName;
        personalData?: IPlatformsNotifications.ViasPersonalData;
    }
    interface KYCBankAccountCheckResult {
        bankAccountUUID: string;
        checks: IPlatformsNotifications.KYCCheckStatusData[];
    }
    interface KYCCheckResult {
        checks: IPlatformsNotifications.KYCCheckStatusData[];
    }
    interface KYCCheckStatusData {
        requiredFields: string[];
        status: "AWAITING_DATA" | "DATA_PROVIDED" | "FAILED" | "INVALID_DATA" | "PASSED" | "PENDING" | "PENDING_REVIEW" | "RETRY_LIMIT_REACHED" | "UNCHECKED";
        summary: IPlatformsNotifications.KYCCheckSummary;
        type: "BANK_ACCOUNT_VERIFICATION" | "COMPANY_VERIFICATION" | "IDENTITY_VERIFICATION" | "NONPROFIT_VERIFICATION" | "PASSPORT_VERIFICATION";
    }
    interface KYCCheckSummary {
        kycCheckCode?: number;
        kycCheckDescription?: string;
    }
    interface KYCShareholderCheckResult {
        checks: IPlatformsNotifications.KYCCheckStatusData[];
        shareholderCode: string;
    }
    interface KYCVerificationResult {
        accountHolder: IPlatformsNotifications.KYCCheckResult;
        bankAccounts: IPlatformsNotifications.KYCBankAccountCheckResult[];
        shareholders: IPlatformsNotifications.KYCShareholderCheckResult[];
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
        message?: IPlatformsNotifications.Message;
        statusCode?: string;
    }
    interface PaymentFailureNotification {
        content: IPlatformsNotifications.PaymentFailureNotificationContent;
        error?: IPlatformsNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface PaymentFailureNotificationContent {
        errorFields: IPlatformsNotifications.ErrorFieldType[];
        errorMessage: IPlatformsNotifications.Message;
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
        schedule: "BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT" | "BIWEEKLY_ON_1ST_AND_15TH_AT_NOON" | "DAILY" | "DAILY_6PM" | "DAILY_AU" | "DAILY_EU" | "DAILY_US" | "DEFAULT" | "EVERY_6_HOURS_FROM_MIDNIGHT" | "HOLD" | "MONTHLY" | "WEEKLY" | "WEEKLY_ON_TUE_FRI_MIDNIGHT" | "YEARLY";
    }
    interface PersonalDocumentData {
        expirationDate?: string;
        issuerCountry?: string;
        issuerState?: string;
        number: string;
        type: "DRIVINGLICENSE" | "ID" | "PASSPORT" | "SOCIALSECURITY" | "VISA";
    }
    namespace Post {
        type RequestBody = IPlatformsNotifications.TransferFundsNotification;
        namespace Responses {
            type $200 = IPlatformsNotifications.NotificationResponse;
        }
    }
    interface RefundFundsTransferNotification {
        content: IPlatformsNotifications.RefundFundsTransferNotificationContent;
        error?: IPlatformsNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface RefundFundsTransferNotificationContent {
        amount: IPlatformsNotifications.Amount;
        invalidFields?: IPlatformsNotifications.ErrorFieldType[];
        merchantReference?: string;
        originalReference: string;
        status?: IPlatformsNotifications.OperationStatus;
    }
    interface RefundResult {
        originalTransaction: IPlatformsNotifications.Transaction;
        pspReference: string;
        response?: string;
    }
    interface ReportAvailableNotification {
        content: IPlatformsNotifications.ReportAvailableNotificationContent;
        error?: IPlatformsNotifications.NotificationErrorContainer;
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
        content: IPlatformsNotifications.ScheduledRefundsNotificationContent;
        error?: IPlatformsNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface ScheduledRefundsNotificationContent {
        accountCode: string;
        accountHolderCode: string;
        invalidFields?: IPlatformsNotifications.ErrorFieldType[];
        lastPayout: IPlatformsNotifications.Transaction;
        refundResults: IPlatformsNotifications.RefundResult[];
    }
    interface ShareholderContact {
        address?: IPlatformsNotifications.ViasAddress;
        email?: string;
        fullPhoneNumber?: string;
        name?: IPlatformsNotifications.ViasName;
        personalData?: IPlatformsNotifications.ViasPersonalData;
        phoneNumber?: IPlatformsNotifications.ViasPhoneNumber;
        shareholderCode?: string;
        shareholderReference?: string;
        webAddress?: string;
    }
    interface Transaction {
        amount?: IPlatformsNotifications.Amount;
        bankAccountDetail?: IPlatformsNotifications.BankAccountDetail;
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
        transactionStatus?: "Chargeback" | "ChargebackCorrection" | "ChargebackCorrectionReceived" | "ChargebackReceived" | "ChargebackReversed" | "ChargebackReversedReceived" | "Converted" | "CreditFailed" | "CreditReversed" | "CreditReversedReceived" | "Credited" | "DebitFailed" | "DebitReversedReceived" | "Debited" | "DebitedReversed" | "Fee" | "FundTransfer" | "FundTransferReversed" | "ManualCorrected" | "Payout" | "PayoutReversed" | "PendingCredit" | "PendingDebit" | "PendingFundTransfer" | "SecondChargeback" | "SecondChargebackReceived";
        transferCode?: string;
    }
    interface TransferFundsNotification {
        content: IPlatformsNotifications.TransferFundsNotificationContent;
        error?: IPlatformsNotifications.NotificationErrorContainer;
        eventDate: string;
        eventType: string;
        executingUserKey: string;
        live: boolean;
        pspReference: string;
    }
    interface TransferFundsNotificationContent {
        amount: IPlatformsNotifications.Amount;
        destinationAccountCode: string;
        invalidFields?: IPlatformsNotifications.ErrorFieldType[];
        merchantReference?: string;
        sourceAccountCode: string;
        status?: IPlatformsNotifications.OperationStatus;
        transferCode: string;
    }
    interface UpdateAccountHolderResponse {
        accountHolderCode?: string;
        accountHolderDetails?: IPlatformsNotifications.AccountHolderDetails;
        accountHolderStatus: IPlatformsNotifications.AccountHolderStatus;
        description?: string;
        invalidFields?: IPlatformsNotifications.ErrorFieldType[];
        legalEntity: "Business" | "Individual" | "NonProfit" | "Partnership" | "PublicCompany";
        primaryCurrency?: string;
        pspReference: string;
        resultCode?: string;
        verification: IPlatformsNotifications.KYCVerificationResult;
    }
    interface UpdateAccountResponse {
        accountCode: string;
        description?: string;
        invalidFields?: IPlatformsNotifications.ErrorFieldType[];
        metadata?: {
            [name: string]: string;
        };
        payoutSchedule: IPlatformsNotifications.PayoutScheduleResponse;
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
        documentData?: IPlatformsNotifications.PersonalDocumentData[];
        nationality?: string;
    }
    interface ViasPhoneNumber {
        phoneCountryCode: string;
        phoneNumber: string;
        phoneType?: "Fax" | "Landline" | "Mobile" | "SIP";
    }
}
