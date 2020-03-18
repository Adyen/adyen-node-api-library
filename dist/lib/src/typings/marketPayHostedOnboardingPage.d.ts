declare namespace IMarketPayHostedOnboardingPage {
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
        fieldType?: IMarketPayHostedOnboardingPage.FieldType;
    }
    interface FieldType {
        /**
         * The full name of the property.
         */
        field?: string;
        /**
         * The type of the field.
         */
        fieldName?: "accountCode" | "accountHolderCode" | "accountHolderDetails" | "accountNumber" | "accountStateType" | "accountStatus" | "accountType" | "address" | "bankAccount" | "bankAccountCode" | "bankAccountName" | "bankAccountUUID" | "bankBicSwift" | "bankCity" | "bankCode" | "bankName" | "bankStatement" | "branchCode" | "businessContact" | "cardToken" | "checkCode" | "city" | "country" | "countryCode" | "currency" | "currencyCode" | "dateOfBirth" | "description" | "destinationAccountCode" | "document" | "documentExpirationDate" | "documentIssuerCountry" | "documentIssuerState" | "documentName" | "documentNumber" | "documentType" | "doingBusinessAs" | "drivingLicence" | "drivingLicenceBack" | "drivingLicense" | "email" | "firstName" | "fullPhoneNumber" | "gender" | "hopWebserviceUser" | "houseNumberOrName" | "iban" | "idCard" | "idCardBack" | "idCardFront" | "idNumber" | "identityDocument" | "incorporatedAt" | "individualDetails" | "lastName" | "legalBusinessName" | "legalEntity" | "legalEntityType" | "merchantAccount" | "merchantCategoryCode" | "merchantReference" | "microDeposit" | "name" | "nationality" | "originalReference" | "ownerCity" | "ownerCountryCode" | "ownerHouseNumberOrName" | "ownerName" | "ownerPostalCode" | "ownerState" | "ownerStreet" | "passport" | "passportNumber" | "payoutMethodCode" | "personalData" | "phoneCountryCode" | "phoneNumber" | "postalCode" | "primaryCurrency" | "reason" | "registrationNumber" | "returnUrl" | "schedule" | "shareholder" | "shareholderCode" | "socialSecurityNumber" | "sourceAccountCode" | "stateOrProvince" | "status" | "store" | "storeDetail" | "storeReference" | "street" | "taxId" | "tier" | "tierNumber" | "transferCode" | "unknown" | "value" | "virtualAccount" | "visaNumber" | "webAddress";
        /**
         * The code of the shareholder that the field belongs to. If empty, the field belongs to an account holder.
         */
        shareholderCode?: string;
    }
    interface GetOnboardingUrlRequest {
        /**
         * The account holder code you provided when you created the account holder.
         */
        accountHolderCode: string;
        /**
         * The URL where the sub-merchant will be redirected back to after they complete the onboarding, or if their session times out. Maximum length of 500 characters. If you don't provide this, the sub-merchant will be redirected back to the default return URL configured in your platform account.
         */
        returnUrl?: string;
    }
    interface GetOnboardingUrlResponse {
        /**
         * Contains field validation errors that would prevent requests from being processed.
         */
        invalidFields?: IMarketPayHostedOnboardingPage.ErrorFieldType[];
        /**
         * The reference of a request.  Can be used to uniquely identify the request.
         */
        pspReference: string;
        /**
         * The URL to the Hosted Onboarding Page where you should redirect your sub-merchant. This URL must be used within 15 seconds and can only be used once.
         */
        redirectUrl?: string;
        /**
         * The result code.
         */
        resultCode?: string;
        /**
         * Indicates whether the request is processed synchronously or asynchronously.  Depending on the request's platform settings, the following scenarios may be applied:
         * * **sync:** The processing of the request is immediately attempted; it may result in an error if the providing service is unavailable.
         * * **async:** The request is queued and will be executed when the providing service is available in the order in which the requests are received.
         * * **asyncOnError:** The processing of the request is immediately attempted, but if the providing service is unavailable, the request is scheduled in a queue.
         */
        submittedAsync: boolean;
    }
    namespace Post {
        type RequestBody = IMarketPayHostedOnboardingPage.GetOnboardingUrlRequest;
        namespace Responses {
            type $200 = IMarketPayHostedOnboardingPage.GetOnboardingUrlResponse;
        }
    }
}
