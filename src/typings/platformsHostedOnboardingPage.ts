
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
 * Version of Platforms Hosted Onboarding Page: v6
 *
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */


declare namespace IPlatformsHostedOnboardingPage {
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
    export interface GetOnboardingUrlRequest {
        /**
         * The account holder code you provided when you created the account holder.
         */
        accountHolderCode: string;
        /**
         * Allows editing checks even if all the checks have passed.
         */
        editMode?: boolean;
        /**
         * The platform name which will show up in the welcome page.
         */
        platformName?: string;
        /**
         * The URL where the sub-merchant will be redirected back to after they complete the onboarding, or if their session times out. Maximum length of 500 characters. If you don't provide this, the sub-merchant will be redirected back to the default return URL configured in your platform account.
         */
        returnUrl?: string;
        /**
         * The language to be used in the page, specified by a combination of a language and country code. For example, **pt-BR**.   If not specified in the request or if the language is not supported, the page uses the browser language. If the browser language is not supported, the page uses **en-US** by default.  For a list supported languages, refer to [Change the page language](https://docs.adyen.com/platforms/hosted-onboarding-page#change-page-language).
         */
        shopperLocale?: string;
    }
    export interface GetOnboardingUrlResponse {
        /**
         * Contains field validation errors that would prevent requests from being processed.
         */
        invalidFields?: ErrorFieldType[];
        /**
         * The reference of a request. Can be used to uniquely identify the request.
         */
        pspReference?: string;
        /**
         * The URL to the Hosted Onboarding Page where you should redirect your sub-merchant. This URL must be used within 15 seconds and can only be used once.
         */
        redirectUrl?: string;
        /**
         * The result code.
         */
        resultCode?: string;
    }
}
declare namespace Paths {
    namespace PostGetOnboardingUrl {
        export type RequestBody = IPlatformsHostedOnboardingPage.GetOnboardingUrlRequest;
        namespace Responses {
            export type $200 = IPlatformsHostedOnboardingPage.GetOnboardingUrlResponse;
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
