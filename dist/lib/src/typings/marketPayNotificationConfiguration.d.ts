declare namespace IMarketPayNotificationConfiguration {
    interface CreateNotificationConfigurationRequest {
        /**
         * Details of the prospective notification subscription configuration.
         */
        configurationDetails: IMarketPayNotificationConfiguration.NotificationConfigurationDetails;
    }
    interface DeleteNotificationConfigurationRequest {
        /**
         * A list of IDs of the notification subscription configurations to be deleted.
         */
        notificationIds: number[];
    }
    type EmptyRequest = any;
    interface ErrorFieldType {
        /**
         * The validation error code.
         */
        errorCode?: number;
        /**
         * A description of the validation error.
         */
        errorDescription?: string;
        /**
         * The type of error field.
         */
        fieldType?: IMarketPayNotificationConfiguration.FieldType;
    }
    interface ExchangeMessage {
        messageCode?: string;
        messageDescription?: string;
    }
    interface FieldType {
        /**
         * The full name of the property.
         */
        field?: string;
        /**
         * The type of the field.
         */
        fieldName?: "accountCode" | "accountHolderCode" | "accountHolderDetails" | "accountNumber" | "accountStateType" | "accountStatus" | "accountType" | "address" | "bankAccount" | "bankAccountCode" | "bankAccountName" | "bankAccountUUID" | "bankBicSwift" | "bankCity" | "bankCode" | "bankName" | "bankStatement" | "branchCode" | "businessContact" | "cardToken" | "checkCode" | "city" | "country" | "countryCode" | "currency" | "currencyCode" | "dateOfBirth" | "description" | "destinationAccountCode" | "document" | "documentExpirationDate" | "documentIssuerCountry" | "documentIssuerState" | "documentName" | "documentNumber" | "documentType" | "doingBusinessAs" | "drivingLicence" | "drivingLicenceBack" | "drivingLicense" | "email" | "firstName" | "fullPhoneNumber" | "gender" | "hopWebserviceUser" | "houseNumberOrName" | "iban" | "idCard" | "idCardBack" | "idCardFront" | "idNumber" | "identityDocument" | "individualDetails" | "lastName" | "legalBusinessName" | "legalEntity" | "legalEntityType" | "merchantAccount" | "merchantCategoryCode" | "merchantReference" | "microDeposit" | "name" | "nationality" | "originalReference" | "ownerCity" | "ownerCountryCode" | "ownerHouseNumberOrName" | "ownerName" | "ownerPostalCode" | "ownerState" | "ownerStreet" | "passport" | "passportNumber" | "payoutMethodCode" | "personalData" | "phoneCountryCode" | "phoneNumber" | "postalCode" | "primaryCurrency" | "reason" | "registrationNumber" | "returnUrl" | "schedule" | "shareholder" | "shareholderCode" | "socialSecurityNumber" | "sourceAccountCode" | "stateOrProvince" | "status" | "store" | "storeDetail" | "storeName" | "storeReference" | "street" | "taxId" | "tier" | "tierNumber" | "transferCode" | "unknown" | "value" | "virtualAccount" | "visaNumber" | "webAddress";
        /**
         * The code of the shareholder that the field belongs to. If empty, the field belongs to an account holder.
         */
        shareholderCode?: string;
    }
    interface GenericResponse {
        /**
         * Contains field validation errors that would prevent requests from being processed.
         */
        invalidFields?: IMarketPayNotificationConfiguration.ErrorFieldType[];
        /**
         * The reference of a request.  Can be used to uniquely identify the request.
         */
        pspReference: string;
        /**
         * The result code.
         */
        resultCode?: string;
    }
    interface GetNotificationConfigurationListResponse {
        /**
         * Details of the notification subscription configurations.
         */
        configurations: IMarketPayNotificationConfiguration.NotificationConfigurationDetails[];
        /**
         * Contains field validation errors that would prevent requests from being processed.
         */
        invalidFields?: IMarketPayNotificationConfiguration.ErrorFieldType[];
        /**
         * The reference of a request.  Can be used to uniquely identify the request.
         */
        pspReference: string;
        /**
         * The result code.
         */
        resultCode?: string;
    }
    interface GetNotificationConfigurationRequest {
        /**
         * The ID of the notification subscription configuration whose details are to be retrieved.
         */
        notificationId: number;
    }
    interface GetNotificationConfigurationResponse {
        /**
         * Details of the notification subscription configuration.
         */
        configurationDetails: IMarketPayNotificationConfiguration.NotificationConfigurationDetails;
        /**
         * Contains field validation errors that would prevent requests from being processed.
         */
        invalidFields?: IMarketPayNotificationConfiguration.ErrorFieldType[];
        /**
         * The reference of a request.  Can be used to uniquely identify the request.
         */
        pspReference: string;
        /**
         * The result code.
         */
        resultCode?: string;
    }
    interface NotificationConfigurationDetails {
        /**
         * Indicates whether the notification subscription is active.
         */
        active?: boolean;
        /**
         * The API version of the notification to send.
         */
        apiVersion?: number;
        /**
         * A description of the notification subscription configuration.
         * >Required when creating a configuration, forbidden when updating a configuration.
         */
        description?: string;
        /**
         * The types of events whose notifications apply to this configuration.
         */
        eventConfigs: IMarketPayNotificationConfiguration.NotificationEventConfiguration[];
        /**
         * A string with which to salt the notification(s) before hashing. If this field is provided, a hash value will be included under the notification header `HmacSignature` and the hash protocol will be included under the notification header `Protocol`. A notification body along with its `hmacSignatureKey` and `Protocol` can be used to calculate a hash value; matching this hash value with the `HmacSignature` will ensure that the notification body has not been tampered with or corrupted.
         *
         * >Must be a 32-byte hex-encoded string (i.e. a string containing 64 hexadecimal characters; e.g. "b0ea55c2fe60d4d1d605e9c385e0e7f7e6cafbb939ce07010f31a327a0871f27").
         *
         * The omission of this field will preclude the provision of the `HmacSignature` and `Protocol` headers in notification(s).
         */
        hmacSignatureKey?: string;
        /**
         * The ID of the configuration.
         * >Required if updating an existing configuration, ignored during the creation of a configuration.
         */
        notificationId?: number;
        /**
         * The password to use when accessing the notifyURL with the specified username.
         */
        notifyPassword?: string;
        /**
         * The URL to which the notifications are to be sent.
         */
        notifyURL: string;
        /**
         * The username to use when accessing the notifyURL.
         */
        notifyUsername?: string;
        /**
         * The SSL protocol employed by the endpoint.
         * >Permitted values: `SSL`, `SSLInsecureCiphers`, `TLS`, `TLSv10`, `TLSv10InsecureCiphers`, `TLSv11`, `TLSv12`.
         */
        sslProtocol?: "SSL" | "SSLInsecureCiphers" | "TLS" | "TLSv10" | "TLSv10InsecureCiphers" | "TLSv11" | "TLSv12";
    }
    interface NotificationEventConfiguration {
        /**
         * The type of event triggering the notification.
         * >Permitted values: `ACCOUNT_HOLDER_CREATED`, `ACCOUNT_CREATED`, `ACCOUNT_UPDATED`, `ACCOUNT_HOLDER_UPDATED`, `ACCOUNT_HOLDER_STATUS_CHANGE`, `ACCOUNT_HOLDER_STORE_STATUS_CHANGE`, `ACCOUNT_HOLDER_VERIFICATION`, `ACCOUNT_HOLDER_LIMIT_REACHED`, `ACCOUNT_HOLDER_PAYOUT`, `PAYMENT_FAILURE`, `SCHEDULED_REFUNDS`, `REPORT_AVAILABLE`, `TRANSFER_FUNDS`, `BENEFICIARY_SETUP`, `COMPENSATE_NEGATIVE_BALANCE`.
         */
        eventType: "ACCOUNT_CLOSED" | "ACCOUNT_CREATED" | "ACCOUNT_HOLDER_CREATED" | "ACCOUNT_HOLDER_LIMIT_REACHED" | "ACCOUNT_HOLDER_PAYOUT" | "ACCOUNT_HOLDER_STATUS_CHANGE" | "ACCOUNT_HOLDER_STORE_STATUS_CHANGE" | "ACCOUNT_HOLDER_UPCOMING_DEADLINE" | "ACCOUNT_HOLDER_UPDATED" | "ACCOUNT_HOLDER_VERIFICATION" | "ACCOUNT_UPDATED" | "BENEFICIARY_SETUP" | "COMPENSATE_NEGATIVE_BALANCE" | "DIRECT_DEBIT_INITIATED" | "PAYMENT_FAILURE" | "REPORT_AVAILABLE" | "SCHEDULED_REFUNDS" | "TRANSFER_FUNDS" | "TRANSFER_FUNDS_REFUND";
        /**
         * Indicates whether the specified eventType is to be sent to the endpoint or all events other than the specified eventType (and other specified eventTypes) are to be sent.
         * >Permitted values: `INCLUDE`, `EXCLUDE`.
         * >- `INCLUDE`: send the specified eventType.
         * >- `EXCLUDE`: send all eventTypes other than the specified eventType (and other eventTypes marked with `EXCLUDE`).
         */
        includeMode: "EXCLUDE" | "INCLUDE";
    }
    namespace Post {
        type RequestBody = IMarketPayNotificationConfiguration.UpdateNotificationConfigurationRequest;
        namespace Responses {
            type $200 = IMarketPayNotificationConfiguration.GetNotificationConfigurationResponse;
        }
    }
    interface TestNotificationConfigurationRequest {
        /**
         * The event types to test.  If left blank, then all of the configured event types will be tested.
         * >Permitted values: `ACCOUNT_HOLDER_CREATED`, `ACCOUNT_CREATED`, `ACCOUNT_UPDATED`, `ACCOUNT_HOLDER_UPDATED`, `ACCOUNT_HOLDER_STATUS_CHANGE`, `ACCOUNT_HOLDER_STORE_STATUS_CHANGE` `ACCOUNT_HOLDER_VERIFICATION`, `ACCOUNT_HOLDER_LIMIT_REACHED`, `ACCOUNT_HOLDER_PAYOUT`, `PAYMENT_FAILURE`, `SCHEDULED_REFUNDS`, `REPORT_AVAILABLE`, `TRANSFER_FUNDS`, `BENEFICIARY_SETUP`, `COMPENSATE_NEGATIVE_BALANCE`.
         */
        eventTypes?: ("ACCOUNT_CLOSED" | "ACCOUNT_CREATED" | "ACCOUNT_HOLDER_CREATED" | "ACCOUNT_HOLDER_LIMIT_REACHED" | "ACCOUNT_HOLDER_PAYOUT" | "ACCOUNT_HOLDER_STATUS_CHANGE" | "ACCOUNT_HOLDER_STORE_STATUS_CHANGE" | "ACCOUNT_HOLDER_UPCOMING_DEADLINE" | "ACCOUNT_HOLDER_UPDATED" | "ACCOUNT_HOLDER_VERIFICATION" | "ACCOUNT_UPDATED" | "BENEFICIARY_SETUP" | "COMPENSATE_NEGATIVE_BALANCE" | "DIRECT_DEBIT_INITIATED" | "PAYMENT_FAILURE" | "REPORT_AVAILABLE" | "SCHEDULED_REFUNDS" | "TRANSFER_FUNDS" | "TRANSFER_FUNDS_REFUND")[];
        /**
         * The ID of the notification subscription configuration to be tested.
         */
        notificationId: number;
    }
    interface TestNotificationConfigurationResponse {
        /**
         * Any error messages encountered.
         */
        errorMessages?: string[];
        /**
         * The event types that were tested.
         * >Permitted values: `ACCOUNT_HOLDER_CREATED`, `ACCOUNT_CREATED`, `ACCOUNT_UPDATED`, `ACCOUNT_HOLDER_UPDATED`, `ACCOUNT_HOLDER_STATUS_CHANGE`, `ACCOUNT_HOLDER_STORE_STATUS_CHANGE` `ACCOUNT_HOLDER_VERIFICATION`, `ACCOUNT_HOLDER_LIMIT_REACHED`, `ACCOUNT_HOLDER_PAYOUT`, `PAYMENT_FAILURE`, `SCHEDULED_REFUNDS`, `REPORT_AVAILABLE`, `TRANSFER_FUNDS`, `BENEFICIARY_SETUP`, `COMPENSATE_NEGATIVE_BALANCE`.
         */
        eventTypes: ("ACCOUNT_CLOSED" | "ACCOUNT_CREATED" | "ACCOUNT_HOLDER_CREATED" | "ACCOUNT_HOLDER_LIMIT_REACHED" | "ACCOUNT_HOLDER_PAYOUT" | "ACCOUNT_HOLDER_STATUS_CHANGE" | "ACCOUNT_HOLDER_STORE_STATUS_CHANGE" | "ACCOUNT_HOLDER_UPCOMING_DEADLINE" | "ACCOUNT_HOLDER_UPDATED" | "ACCOUNT_HOLDER_VERIFICATION" | "ACCOUNT_UPDATED" | "BENEFICIARY_SETUP" | "COMPENSATE_NEGATIVE_BALANCE" | "DIRECT_DEBIT_INITIATED" | "PAYMENT_FAILURE" | "REPORT_AVAILABLE" | "SCHEDULED_REFUNDS" | "TRANSFER_FUNDS" | "TRANSFER_FUNDS_REFUND")[];
        /**
         * The notification message and related response messages.
         */
        exchangeMessages: IMarketPayNotificationConfiguration.ExchangeMessage[];
        /**
         * Contains field validation errors that would prevent requests from being processed.
         */
        invalidFields?: IMarketPayNotificationConfiguration.ErrorFieldType[];
        /**
         * The ID of the notification subscription configuration.
         */
        notificationId: number;
        /**
         * A list of messages describing the testing steps.
         */
        okMessages: string[];
        /**
         * The reference of a request.  Can be used to uniquely identify the request.
         */
        pspReference: string;
        /**
         * The result code.
         */
        resultCode?: string;
    }
    interface UpdateNotificationConfigurationRequest {
        /**
         * Details of the notification subscription configuration to be updated.
         */
        configurationDetails: IMarketPayNotificationConfiguration.NotificationConfigurationDetails;
    }
}
