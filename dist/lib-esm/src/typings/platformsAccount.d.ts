declare namespace IPlatformsAccount {
    interface Account {
        accountCode?: string;
        beneficiaryAccount?: string;
        beneficiaryMerchantReference?: string;
        description?: string;
        metadata?: {};
        payoutSchedule?: IPlatformsAccount.PayoutScheduleResponse;
        status?: string;
    }
    interface AccountEvent {
        event: "InactivateAccount" | "RefundNotPaidOutTransfers";
        executionDate: string;
        reason: string;
    }
    interface AccountHolderDetails {
        address?: IPlatformsAccount.ViasAddress;
        bankAccountDetails?: IPlatformsAccount.BankAccountDetail[];
        businessDetails?: IPlatformsAccount.BusinessDetails;
        email: string;
        fullPhoneNumber: string;
        individualDetails?: IPlatformsAccount.IndividualDetails;
        merchantCategoryCode?: string;
        metadata?: {};
        payoutMethods?: IPlatformsAccount.PayoutMethod[];
        webAddress: string;
    }
    interface AccountHolderStatus {
        events: IPlatformsAccount.AccountEvent[];
        payoutState: IPlatformsAccount.AccountPayoutState;
        processingState: IPlatformsAccount.AccountProcessingState;
        status: "Active" | "Closed" | "Inactive" | "Suspended";
        statusReason: string;
    }
    interface AccountPayoutState {
        allowPayout: boolean;
        disableReason: string;
        disabled: boolean;
        notAllowedReason: string;
        payoutLimit: IPlatformsAccount.Amount;
        tierNumber: number;
    }
    interface AccountProcessingState {
        disableReason: string;
        disabled: boolean;
        processedFrom: IPlatformsAccount.Amount;
        processedTo: IPlatformsAccount.Amount;
        tierNumber: number;
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
    interface BusinessDetails {
        doingBusinessAs?: string;
        legalBusinessName?: string;
        registrationNumber?: string;
        shareholders?: IPlatformsAccount.ShareholderContact[];
        taxId?: string;
    }
    interface CloseAccountHolderRequest {
        accountHolderCode: string;
    }
    interface CloseAccountHolderResponse {
        accountHolderStatus: IPlatformsAccount.AccountHolderStatus;
        invalidFields?: IPlatformsAccount.ErrorFieldType[];
        pspReference: string;
        resultCode?: string;
    }
    interface CloseAccountRequest {
        accountCode: string;
    }
    interface CloseAccountResponse {
        accountCode?: string;
        invalidFields?: IPlatformsAccount.ErrorFieldType[];
        pspReference: string;
        resultCode?: string;
        status: "Active" | "Closed" | "Inactive" | "Suspended";
    }
    interface CreateAccountHolderRequest {
        accountHolderCode: string;
        accountHolderDetails: IPlatformsAccount.AccountHolderDetails;
        createDefaultAccount?: boolean;
        description?: string;
        legalEntity: "Business" | "Individual" | "NonProfit" | "Partnership" | "PublicCompany";
        primaryCurrency?: string;
        processingTier?: number;
    }
    interface CreateAccountHolderResponse {
        accountCode?: string;
        accountHolderCode: string;
        accountHolderDetails: IPlatformsAccount.AccountHolderDetails;
        accountHolderStatus: IPlatformsAccount.AccountHolderStatus;
        description?: string;
        invalidFields?: IPlatformsAccount.ErrorFieldType[];
        legalEntity: "Business" | "Individual" | "NonProfit" | "Partnership" | "PublicCompany";
        primaryCurrency?: string;
        pspReference: string;
        resultCode?: string;
        verification: IPlatformsAccount.KYCVerificationResult;
    }
    interface CreateAccountRequest {
        accountHolderCode: string;
        description?: string;
        metadata?: {};
        payoutSchedule?: "BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT" | "BIWEEKLY_ON_1ST_AND_15TH_AT_NOON" | "DAILY" | "DAILY_6PM" | "DAILY_AU" | "DAILY_EU" | "DAILY_US" | "DEFAULT" | "EVERY_6_HOURS_FROM_MIDNIGHT" | "HOLD" | "MONTHLY" | "WEEKLY" | "WEEKLY_ON_TUE_FRI_MIDNIGHT" | "YEARLY";
        payoutScheduleReason?: string;
    }
    interface CreateAccountResponse {
        accountCode: string;
        accountHolderCode: string;
        description?: string;
        invalidFields?: IPlatformsAccount.ErrorFieldType[];
        metadata?: {
            [name: string]: string;
        };
        payoutSchedule?: IPlatformsAccount.PayoutScheduleResponse;
        pspReference: string;
        resultCode?: string;
        status: "Active" | "Closed" | "Inactive" | "Suspended";
    }
    interface DeleteBankAccountRequest {
        accountHolderCode: string;
        bankAccountUUIDs: string[];
    }
    interface DeletePayoutMethodRequest {
        accountHolderCode: string;
        payoutMethodCodes: string[];
    }
    interface DeleteShareholderRequest {
        accountHolderCode: string;
        shareholderCodes: string[];
    }
    interface DocumentDetail {
        accountHolderCode: string;
        bankAccountUUID?: string;
        description?: string;
        documentType: "BANK_STATEMENT" | "BSN" | "COMPANY_REGISTRATION_SCREENING" | "DRIVING_LICENCE" | "DRIVING_LICENCE_BACK" | "DRIVING_LICENCE_FRONT" | "ID_CARD" | "ID_CARD_BACK" | "ID_CARD_FRONT" | "PASSPORT" | "SSN" | "SUPPORTING_DOCUMENTS";
        filename: string;
        shareholderCode?: string;
    }
    interface ErrorFieldType {
        errorCode?: number;
        errorDescription?: string;
        fieldType?: IPlatformsAccount.FieldType;
    }
    interface FieldType {
        field?: string;
        fieldName?: "accountCode" | "accountHolderCode" | "accountHolderDetails" | "accountNumber" | "accountStateType" | "accountStatus" | "accountType" | "address" | "bankAccount" | "bankAccountCode" | "bankAccountName" | "bankAccountUUID" | "bankBicSwift" | "bankCity" | "bankCode" | "bankName" | "bankStatement" | "branchCode" | "businessContact" | "cardToken" | "checkCode" | "city" | "companyRegistration" | "country" | "countryCode" | "currency" | "currencyCode" | "dateOfBirth" | "description" | "destinationAccountCode" | "document" | "documentExpirationDate" | "documentIssuerCountry" | "documentIssuerState" | "documentName" | "documentNumber" | "documentType" | "doingBusinessAs" | "drivingLicence" | "drivingLicenceBack" | "drivingLicense" | "email" | "firstName" | "fullPhoneNumber" | "gender" | "hopWebserviceUser" | "houseNumberOrName" | "iban" | "idCard" | "idCardBack" | "idCardFront" | "idNumber" | "identityDocument" | "individualDetails" | "lastName" | "legalBusinessName" | "legalEntity" | "legalEntityType" | "merchantAccount" | "merchantCategoryCode" | "merchantReference" | "microDeposit" | "name" | "nationality" | "originalReference" | "ownerCity" | "ownerCountryCode" | "ownerHouseNumberOrName" | "ownerName" | "ownerPostalCode" | "ownerState" | "ownerStreet" | "passport" | "passportNumber" | "payoutMethodCode" | "personalData" | "phoneCountryCode" | "phoneNumber" | "postalCode" | "primaryCurrency" | "reason" | "registrationNumber" | "returnUrl" | "schedule" | "shareholder" | "shareholderCode" | "socialSecurityNumber" | "sourceAccountCode" | "stateOrProvince" | "status" | "store" | "storeDetail" | "storeName" | "storeReference" | "street" | "taxId" | "tier" | "tierNumber" | "transferCode" | "unknown" | "value" | "virtualAccount" | "visaNumber" | "webAddress";
        shareholderCode?: string;
    }
    interface GenericResponse {
        invalidFields?: IPlatformsAccount.ErrorFieldType[];
        pspReference: string;
        resultCode?: string;
    }
    interface GetAccountHolderRequest {
        accountCode?: string;
        accountHolderCode?: string;
        showDetails?: boolean;
    }
    interface GetAccountHolderResponse {
        accountHolderCode: string;
        accountHolderDetails: IPlatformsAccount.AccountHolderDetails;
        accountHolderStatus: IPlatformsAccount.AccountHolderStatus;
        accounts?: IPlatformsAccount.Account[];
        description?: string;
        invalidFields?: IPlatformsAccount.ErrorFieldType[];
        legalEntity: "Business" | "Individual" | "NonProfit" | "Partnership" | "PublicCompany";
        primaryCurrency?: string;
        pspReference: string;
        resultCode?: string;
        systemUpToDateTime?: string;
        verification: IPlatformsAccount.KYCVerificationResult;
    }
    interface GetAccountHolderStatusResponse {
        accountHolderCode: string;
        accountHolderStatus: IPlatformsAccount.AccountHolderStatus;
        invalidFields?: IPlatformsAccount.ErrorFieldType[];
        pspReference: string;
        resultCode?: string;
    }
    interface GetUploadedDocumentsRequest {
        accountHolderCode: string;
        bankAccountUUID?: string;
        shareholderCode?: string;
    }
    interface GetUploadedDocumentsResponse {
        documentDetails?: IPlatformsAccount.DocumentDetail[];
        invalidFields?: IPlatformsAccount.ErrorFieldType[];
        pspReference: string;
        resultCode?: string;
    }
    interface IndividualDetails {
        name?: IPlatformsAccount.ViasName;
        personalData?: IPlatformsAccount.ViasPersonalData;
    }
    interface KYCBankAccountCheckResult {
        bankAccountUUID: string;
        checks: IPlatformsAccount.KYCCheckStatusData[];
    }
    interface KYCCheckResult {
        checks: IPlatformsAccount.KYCCheckStatusData[];
    }
    interface KYCCheckStatusData {
        requiredFields: string[];
        status: "AWAITING_DATA" | "DATA_PROVIDED" | "FAILED" | "INVALID_DATA" | "PASSED" | "PENDING" | "PENDING_REVIEW" | "RETRY_LIMIT_REACHED" | "UNCHECKED";
        summary: IPlatformsAccount.KYCCheckSummary;
        type: "BANK_ACCOUNT_VERIFICATION" | "COMPANY_VERIFICATION" | "IDENTITY_VERIFICATION" | "NONPROFIT_VERIFICATION" | "PASSPORT_VERIFICATION";
    }
    interface KYCCheckSummary {
        kycCheckCode?: number;
        kycCheckDescription?: string;
    }
    interface KYCShareholderCheckResult {
        checks: IPlatformsAccount.KYCCheckStatusData[];
        shareholderCode: string;
    }
    interface KYCVerificationResult {
        accountHolder: IPlatformsAccount.KYCCheckResult;
        bankAccounts: IPlatformsAccount.KYCBankAccountCheckResult[];
        shareholders: IPlatformsAccount.KYCShareholderCheckResult[];
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
    interface PerformVerificationRequest {
        accountHolderCode: string;
        accountStateType: "LimitedPayout" | "LimitedProcessing" | "LimitlessPayout" | "LimitlessProcessing" | "Payout" | "Processing";
        tier: number;
    }
    interface PersonalDocumentData {
        expirationDate?: string;
        issuerCountry?: string;
        issuerState?: string;
        number: string;
        type: "DRIVINGLICENSE" | "ID" | "PASSPORT" | "SOCIALSECURITY" | "VISA";
    }
    namespace Post {
        type RequestBody = IPlatformsAccount.UploadDocumentRequest;
        namespace Responses {
            type $200 = IPlatformsAccount.UpdateAccountHolderResponse;
        }
    }
    interface ShareholderContact {
        address?: IPlatformsAccount.ViasAddress;
        email?: string;
        fullPhoneNumber?: string;
        name?: IPlatformsAccount.ViasName;
        personalData?: IPlatformsAccount.ViasPersonalData;
        phoneNumber?: IPlatformsAccount.ViasPhoneNumber;
        shareholderCode?: string;
        shareholderReference?: string;
        webAddress?: string;
    }
    interface SuspendAccountHolderRequest {
        accountHolderCode: string;
    }
    interface SuspendAccountHolderResponse {
        accountHolderStatus: IPlatformsAccount.AccountHolderStatus;
        invalidFields?: IPlatformsAccount.ErrorFieldType[];
        pspReference: string;
        resultCode?: string;
    }
    interface UnSuspendAccountHolderRequest {
        accountHolderCode: string;
    }
    interface UnSuspendAccountHolderResponse {
        accountHolderStatus: IPlatformsAccount.AccountHolderStatus;
        invalidFields?: IPlatformsAccount.ErrorFieldType[];
        pspReference: string;
        resultCode?: string;
    }
    interface UpdateAccountHolderRequest {
        accountHolderCode: string;
        accountHolderDetails?: IPlatformsAccount.AccountHolderDetails;
        description?: string;
        legalEntity?: "Business" | "Individual" | "NonProfit" | "Partnership" | "PublicCompany";
        primaryCurrency?: string;
        processingTier?: number;
    }
    interface UpdateAccountHolderResponse {
        accountHolderCode?: string;
        accountHolderDetails?: IPlatformsAccount.AccountHolderDetails;
        accountHolderStatus: IPlatformsAccount.AccountHolderStatus;
        description?: string;
        invalidFields?: IPlatformsAccount.ErrorFieldType[];
        legalEntity: "Business" | "Individual" | "NonProfit" | "Partnership" | "PublicCompany";
        primaryCurrency?: string;
        pspReference: string;
        resultCode?: string;
        verification: IPlatformsAccount.KYCVerificationResult;
    }
    interface UpdateAccountHolderStateRequest {
        accountHolderCode: string;
        disable: boolean;
        reason?: string;
        stateType: "LimitedPayout" | "LimitedProcessing" | "LimitlessPayout" | "LimitlessProcessing" | "Payout" | "Processing";
    }
    interface UpdateAccountRequest {
        accountCode: string;
        description?: string;
        metadata?: {};
        payoutSchedule?: IPlatformsAccount.UpdatePayoutScheduleRequest;
    }
    interface UpdateAccountResponse {
        accountCode: string;
        description?: string;
        invalidFields?: IPlatformsAccount.ErrorFieldType[];
        metadata?: {
            [name: string]: string;
        };
        payoutSchedule: IPlatformsAccount.PayoutScheduleResponse;
        pspReference: string;
        resultCode?: string;
    }
    interface UpdateAccountHolderStateResponse {
        accountHolderCode: string;
        accountHolderStatus: string;
        invalidFields?: IPlatformsAccount.ErrorFieldType[];
        pspReference: string;
        resultCode?: string;
    }
    interface UpdatePayoutScheduleRequest {
        action?: "CLOSE" | "NOTHING" | "UPDATE";
        reason?: string;
        schedule: "BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT" | "BIWEEKLY_ON_1ST_AND_15TH_AT_NOON" | "DAILY" | "DAILY_6PM" | "DAILY_AU" | "DAILY_EU" | "DAILY_US" | "DEFAULT" | "EVERY_6_HOURS_FROM_MIDNIGHT" | "HOLD" | "MONTHLY" | "WEEKLY" | "WEEKLY_ON_TUE_FRI_MIDNIGHT" | "YEARLY";
    }
    interface UploadDocumentRequest {
        documentContent: string;
        documentDetail: IPlatformsAccount.DocumentDetail;
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
        documentData?: IPlatformsAccount.PersonalDocumentData[];
        nationality?: string;
    }
    interface ViasPhoneNumber {
        phoneCountryCode: string;
        phoneNumber: string;
        phoneType?: "Fax" | "Landline" | "Mobile" | "SIP";
    }
}
