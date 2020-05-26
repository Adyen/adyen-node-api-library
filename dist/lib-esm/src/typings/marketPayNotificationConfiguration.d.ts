declare namespace IMarketPayNotificationConfiguration {
    interface CreateNotificationConfigurationRequest {
        configurationDetails: IMarketPayNotificationConfiguration.NotificationConfigurationDetails;
    }
    interface DeleteNotificationConfigurationRequest {
        notificationIds: number[];
    }
    type EmptyRequest = any;
    interface ErrorFieldType {
        errorCode?: number;
        errorDescription?: string;
        fieldType?: IMarketPayNotificationConfiguration.FieldType;
    }
    interface ExchangeMessage {
        messageCode?: string;
        messageDescription?: string;
    }
    interface FieldType {
        field?: string;
        fieldName?: "accountCode" | "accountHolderCode" | "accountHolderDetails" | "accountNumber" | "accountStateType" | "accountStatus" | "accountType" | "address" | "bankAccount" | "bankAccountCode" | "bankAccountName" | "bankAccountUUID" | "bankBicSwift" | "bankCity" | "bankCode" | "bankName" | "bankStatement" | "branchCode" | "businessContact" | "cardToken" | "checkCode" | "city" | "country" | "countryCode" | "currency" | "currencyCode" | "dateOfBirth" | "description" | "destinationAccountCode" | "document" | "documentExpirationDate" | "documentIssuerCountry" | "documentIssuerState" | "documentName" | "documentNumber" | "documentType" | "doingBusinessAs" | "drivingLicence" | "drivingLicenceBack" | "drivingLicense" | "email" | "firstName" | "fullPhoneNumber" | "gender" | "hopWebserviceUser" | "houseNumberOrName" | "iban" | "idCard" | "idCardBack" | "idCardFront" | "idNumber" | "identityDocument" | "individualDetails" | "lastName" | "legalBusinessName" | "legalEntity" | "legalEntityType" | "merchantAccount" | "merchantCategoryCode" | "merchantReference" | "microDeposit" | "name" | "nationality" | "originalReference" | "ownerCity" | "ownerCountryCode" | "ownerHouseNumberOrName" | "ownerName" | "ownerPostalCode" | "ownerState" | "ownerStreet" | "passport" | "passportNumber" | "payoutMethodCode" | "personalData" | "phoneCountryCode" | "phoneNumber" | "postalCode" | "primaryCurrency" | "reason" | "registrationNumber" | "returnUrl" | "schedule" | "shareholder" | "shareholderCode" | "socialSecurityNumber" | "sourceAccountCode" | "stateOrProvince" | "status" | "store" | "storeDetail" | "storeName" | "storeReference" | "street" | "taxId" | "tier" | "tierNumber" | "transferCode" | "unknown" | "value" | "virtualAccount" | "visaNumber" | "webAddress";
        shareholderCode?: string;
    }
    interface GenericResponse {
        invalidFields?: IMarketPayNotificationConfiguration.ErrorFieldType[];
        pspReference: string;
        resultCode?: string;
    }
    interface GetNotificationConfigurationListResponse {
        configurations: IMarketPayNotificationConfiguration.NotificationConfigurationDetails[];
        invalidFields?: IMarketPayNotificationConfiguration.ErrorFieldType[];
        pspReference: string;
        resultCode?: string;
    }
    interface GetNotificationConfigurationRequest {
        notificationId: number;
    }
    interface GetNotificationConfigurationResponse {
        configurationDetails: IMarketPayNotificationConfiguration.NotificationConfigurationDetails;
        invalidFields?: IMarketPayNotificationConfiguration.ErrorFieldType[];
        pspReference: string;
        resultCode?: string;
    }
    interface NotificationConfigurationDetails {
        active?: boolean;
        apiVersion?: number;
        description?: string;
        eventConfigs: IMarketPayNotificationConfiguration.NotificationEventConfiguration[];
        hmacSignatureKey?: string;
        notificationId?: number;
        notifyPassword?: string;
        notifyURL: string;
        notifyUsername?: string;
        sslProtocol?: "SSL" | "SSLInsecureCiphers" | "TLS" | "TLSv10" | "TLSv10InsecureCiphers" | "TLSv11" | "TLSv12";
    }
    interface NotificationEventConfiguration {
        eventType: "ACCOUNT_CLOSED" | "ACCOUNT_CREATED" | "ACCOUNT_HOLDER_CREATED" | "ACCOUNT_HOLDER_LIMIT_REACHED" | "ACCOUNT_HOLDER_PAYOUT" | "ACCOUNT_HOLDER_STATUS_CHANGE" | "ACCOUNT_HOLDER_STORE_STATUS_CHANGE" | "ACCOUNT_HOLDER_UPCOMING_DEADLINE" | "ACCOUNT_HOLDER_UPDATED" | "ACCOUNT_HOLDER_VERIFICATION" | "ACCOUNT_UPDATED" | "BENEFICIARY_SETUP" | "COMPENSATE_NEGATIVE_BALANCE" | "DIRECT_DEBIT_INITIATED" | "PAYMENT_FAILURE" | "REPORT_AVAILABLE" | "SCHEDULED_REFUNDS" | "TRANSFER_FUNDS" | "TRANSFER_FUNDS_REFUND";
        includeMode: "EXCLUDE" | "INCLUDE";
    }
    namespace Post {
        type RequestBody = IMarketPayNotificationConfiguration.UpdateNotificationConfigurationRequest;
        namespace Responses {
            type $200 = IMarketPayNotificationConfiguration.GetNotificationConfigurationResponse;
        }
    }
    interface TestNotificationConfigurationRequest {
        eventTypes?: ("ACCOUNT_CLOSED" | "ACCOUNT_CREATED" | "ACCOUNT_HOLDER_CREATED" | "ACCOUNT_HOLDER_LIMIT_REACHED" | "ACCOUNT_HOLDER_PAYOUT" | "ACCOUNT_HOLDER_STATUS_CHANGE" | "ACCOUNT_HOLDER_STORE_STATUS_CHANGE" | "ACCOUNT_HOLDER_UPCOMING_DEADLINE" | "ACCOUNT_HOLDER_UPDATED" | "ACCOUNT_HOLDER_VERIFICATION" | "ACCOUNT_UPDATED" | "BENEFICIARY_SETUP" | "COMPENSATE_NEGATIVE_BALANCE" | "DIRECT_DEBIT_INITIATED" | "PAYMENT_FAILURE" | "REPORT_AVAILABLE" | "SCHEDULED_REFUNDS" | "TRANSFER_FUNDS" | "TRANSFER_FUNDS_REFUND")[];
        notificationId: number;
    }
    interface TestNotificationConfigurationResponse {
        errorMessages?: string[];
        eventTypes: ("ACCOUNT_CLOSED" | "ACCOUNT_CREATED" | "ACCOUNT_HOLDER_CREATED" | "ACCOUNT_HOLDER_LIMIT_REACHED" | "ACCOUNT_HOLDER_PAYOUT" | "ACCOUNT_HOLDER_STATUS_CHANGE" | "ACCOUNT_HOLDER_STORE_STATUS_CHANGE" | "ACCOUNT_HOLDER_UPCOMING_DEADLINE" | "ACCOUNT_HOLDER_UPDATED" | "ACCOUNT_HOLDER_VERIFICATION" | "ACCOUNT_UPDATED" | "BENEFICIARY_SETUP" | "COMPENSATE_NEGATIVE_BALANCE" | "DIRECT_DEBIT_INITIATED" | "PAYMENT_FAILURE" | "REPORT_AVAILABLE" | "SCHEDULED_REFUNDS" | "TRANSFER_FUNDS" | "TRANSFER_FUNDS_REFUND")[];
        exchangeMessages: IMarketPayNotificationConfiguration.ExchangeMessage[];
        invalidFields?: IMarketPayNotificationConfiguration.ErrorFieldType[];
        notificationId: number;
        okMessages: string[];
        pspReference: string;
        resultCode?: string;
    }
    interface UpdateNotificationConfigurationRequest {
        configurationDetails: IMarketPayNotificationConfiguration.NotificationConfigurationDetails;
    }
}
