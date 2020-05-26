declare namespace IPayouts {
    interface AccountInfo {
        accountAgeIndicator?: "notApplicable" | "thisTransaction" | "lessThan30Days" | "from30To60Days" | "moreThan60Days";
        accountChangeDate?: string;
        accountChangeIndicator?: "thisTransaction" | "lessThan30Days" | "from30To60Days" | "moreThan60Days";
        accountCreationDate?: string;
        accountType?: "notApplicable" | "credit" | "debit";
        addCardAttemptsDay?: number;
        deliveryAddressUsageDate?: string;
        deliveryAddressUsageIndicator?: "thisTransaction" | "lessThan30Days" | "from30To60Days" | "moreThan60Days";
        homePhone?: string;
        mobilePhone?: string;
        passwordChangeDate?: string;
        passwordChangeIndicator?: "notApplicable" | "thisTransaction" | "lessThan30Days" | "from30To60Days" | "moreThan60Days";
        pastTransactionsDay?: number;
        pastTransactionsYear?: number;
        paymentAccountAge?: string;
        paymentAccountIndicator?: "notApplicable" | "thisTransaction" | "lessThan30Days" | "from30To60Days" | "moreThan60Days";
        purchasesLast6Months?: number;
        suspiciousActivity?: boolean;
        workPhone?: string;
    }
    interface AdditionalData3DSecure {
        allow3DS2?: string;
        executeThreeD?: string;
        mpiImplementationType?: string;
        scaExemption?: string;
    }
    interface AdditionalDataAirline {
        "airline.passenger_name"?: string;
        "airline.computerized_reservation_system"?: string;
        "airline.airline_code"?: string;
        "airline.ticket_number"?: string;
        "airline.flight_date"?: string;
        "airline.customer_reference_number"?: string;
        "airline.ticket_issue_address"?: string;
        "airline.airline_designator_code"?: string;
        "airline.travel_agency_code"?: string;
        "airline.travel_agency_name"?: string;
        "airline.agency_plan_name"?: string;
        "airline.agency_invoice_number"?: string;
        "airline.boarding_fee"?: string;
        "airline.document_type"?: string;
        "airline.leg.depart_airport"?: string;
        "airline.leg.flight_number"?: string;
        "airline.leg.carrier_code"?: string;
        "airline.leg.fare_base_code"?: string;
        "airline.leg.class_of_travel"?: string;
        "airline.leg.stop_over_code"?: string;
        "airline.leg.destination_code"?: string;
        "airline.leg.date_of_travel"?: string;
        "airline.leg.depart_tax"?: string;
        "airline.passenger.first_name"?: string;
        "airline.passenger.last_name"?: string;
        "airline.passenger.traveller_type"?: string;
        "airline.passenger.telephone_number"?: string;
        "airline.passenger.date_of_birth"?: string;
    }
    interface AdditionalDataCarRental {
        "carRental.rentalAgreementNumber"?: string;
        "carRental.renterName"?: string;
        "carRental.returnCity"?: string;
        "carRental.returnStateProvince"?: string;
        "carRental.returnCountry"?: string;
        "carRental.returnLocationId"?: string;
        "carRental.returnDate"?: string;
        "carRental.checkOutDate"?: string;
        "carRental.customerServiceTollFreeNumber"?: string;
        "carRental.rate"?: string;
        "carRental.rateIndicator"?: string;
        "carRental.locationCity"?: string;
        "carRental.locationStateProvince"?: string;
        "carRental.locationCountry"?: string;
        "carRental.rentalClassId"?: string;
        "carRental.daysRented"?: string;
        "carRental.taxExemptIndicator"?: string;
        "travelEntertainmentAuthData.market"?: string;
        "travelEntertainmentAuthData.duration"?: string;
        "carRental.fuelCharges"?: string;
        "carRental.insuranceCharges"?: string;
        "carRental.noShowIndicator"?: string;
        "carRental.oneWayDropOffCharges"?: string;
    }
    interface AdditionalDataCommon {
        authorisationType?: string;
        customRoutingFlag?: string;
        networkTxReference?: string;
        overwriteBrand?: string;
        RequestedTestErrorResponseCode?: string;
        subMerchantID?: string;
    }
    interface AdditionalDataLevel23 {
        "enhancedSchemeData.customerReference"?: string;
        "enhancedSchemeData.totalTaxAmount"?: number;
        "enhancedSchemeData.freightAmount"?: number;
        "enhancedSchemeData.dutyAmount"?: number;
        "enhancedSchemeData.destinationPostalCode"?: string;
        "enhancedSchemeData.destinationStateProvinceCode"?: string;
        "enhancedSchemeData.shipFromPostalCode"?: string;
        "enhancedSchemeData.destinationCountryCode"?: string;
        "enhancedSchemeData.orderDate"?: string;
        "enhancedSchemeData.itemDetailLine[itemNr].commodityCode"?: string;
        "enhancedSchemeData.itemDetailLine[itemNr].description"?: string;
        "enhancedSchemeData.itemDetailLine[itemNr].productCode"?: string;
        "enhancedSchemeData.itemDetailLine[itemNr].quantity"?: number;
        "enhancedSchemeData.itemDetailLine[itemNr].unitOfMeasure"?: string;
        "enhancedSchemeData.itemDetailLine[itemNr].unitPrice"?: number;
        "enhancedSchemeData.itemDetailLine[itemNr].discountAmount"?: number;
        "enhancedSchemeData.itemDetailLine[itemNr].totalAmount"?: number;
    }
    interface AdditionalDataLodging {
        "lodging.customerServiceTollFreeNumber"?: string;
        "lodging.checkInDate"?: string;
        "lodging.checkOutDate"?: string;
        "lodging.folioNumber"?: string;
        "lodging.propertyPhoneNumber"?: string;
        "lodging.room1.rate"?: string;
        "lodging.room1.tax"?: string;
        "lodging.room1.numberOfNights"?: string;
        "lodging.fireSafetyActIndicator"?: string;
        "travelEntertainmentAuthData.market"?: string;
        "travelEntertainmentAuthData.duration"?: string;
        "lodging.folioCashAdvances"?: string;
        "lodging.foodBeverageCharges"?: string;
        "lodging.noShowIndicator"?: string;
        "lodging.prepaidExpenses"?: string;
        "lodging.totalTax"?: string;
        "lodging.totalRoomTax"?: string;
    }
    interface AdditionalDataModifications {
        "installmentPaymentData.selectedInstallmentOption"?: string;
    }
    interface AdditionalDataOpenInvoice {
        "openinvoicedata.numberOfLines"?: number;
        "openinvoicedata.merchantData"?: string;
        "openinvoicedata.line[itemNr].currencyCode"?: string;
        "openinvoicedata.line[itemNr].description"?: string;
        "openinvoicedata.line[itemNr].itemAmount"?: number;
        "openinvoicedata.line[itemNr].itemVatAmount"?: number;
        "openinvoicedata.line[itemNr].itemVatPercentage"?: number;
        "openinvoicedata.line[itemNr].itemId"?: string;
        "openinvoicedata.line[itemNr].numberOfItems"?: number;
        "openinvoicedata.line[itemNr].vatCategory"?: string;
    }
    interface AdditionalDataRatepay {
        "ratepay.installmentAmount"?: number;
        "ratepay.lastInstallmentAmount"?: number;
        "ratepay.interestRate"?: number;
        "ratepay.paymentFirstday"?: number;
        "ratepaydata.invoiceId"?: string;
        "ratepaydata.invoiceDate"?: string;
        "ratepaydata.deliveryDate"?: string;
        "ratepaydata.dueDate"?: string;
    }
    interface AdditionalDataRetry {
        "retry.chainAttemptNumber"?: number;
        "retry.orderAttemptNumber"?: number;
        "retry.skipRetry"?: boolean;
    }
    interface AdditionalDataRisk {
        "riskdata.[customFieldName]"?: string;
        "riskdata.basket.item[itemNr].itemID"?: string;
        "riskdata.basket.item[itemNr].productTitle"?: string;
        "riskdata.basket.item[itemNr].amountPerItem"?: string;
        "riskdata.basket.item[itemNr].currency"?: string;
        "riskdata.basket.item[itemNr].upc"?: string;
        "riskdata.basket.item[itemNr].sku"?: string;
        "riskdata.basket.item[itemNr].brand"?: string;
        "riskdata.basket.item[itemNr].manufacturer"?: string;
        "riskdata.basket.item[itemNr].category"?: string;
        "riskdata.basket.item[itemNr].color"?: string;
        "riskdata.basket.item[itemNr].size"?: string;
        "riskdata.basket.item[itemNr].quantity"?: string;
        "riskdata.basket.item[itemNr].receiverEmail"?: string;
        "riskdata.promotions.promotion[itemNr].promotionCode"?: string;
        "riskdata.promotions.promotion[itemNr].promotionName"?: string;
        "riskdata.promotions.promotion[itemNr].promotionDiscountAmount"?: string;
        "riskdata.promotions.promotion[itemNr].promotionDiscountCurrency"?: string;
        "riskdata.promotions.promotion[itemNr].promotionDiscountPercentage"?: string;
    }
    interface AdditionalDataRiskStandalone {
        avsResultRaw?: string;
        bin?: string;
        cvcResultRaw?: string;
        "risk.token"?: string;
        threeDAuthenticated?: string;
        threeDOffered?: string;
        tokenDataType?: string;
        "PayPal.ProtectionEligibility"?: string;
        "PayPal.PayerId"?: string;
        "PayPal.TransactionId"?: string;
        "PayPal.CountryCode"?: string;
        "PayPal.FirstName"?: string;
        "PayPal.LastName"?: string;
        "PayPal.Phone"?: string;
        "PayPal.EmailId"?: string;
    }
    interface AdditionalDataTemporaryServices {
        "enhancedSchemeData.customerReference"?: string;
        "enhancedSchemeData.totalTaxAmount"?: string;
        "enhancedSchemeData.employeeName"?: string;
        "enhancedSchemeData.jobDescription"?: string;
        "enhancedSchemeData.tempStartDate"?: string;
        "enhancedSchemeData.tempWeekEnding"?: string;
        "enhancedSchemeData.requestName"?: string;
        "enhancedSchemeData.regularHoursWorked"?: string;
        "enhancedSchemeData.regularHoursRate"?: string;
    }
    interface AdditionalDataWallets {
        "androidpay.token"?: string;
        "masterpass.transactionId"?: string;
        "payment.token"?: string;
        "paywithgoogle.token"?: string;
        "samsungpay.token"?: string;
        "visacheckout.callId"?: string;
    }
    interface Address {
        city: string;
        country: string;
        houseNumberOrName: string;
        postalCode: string;
        stateOrProvince?: string;
        street: string;
    }
    interface Amount {
        currency: string;
        value: number;
    }
    interface ApplicationInfo {
        adyenLibrary?: IPayouts.CommonField;
        adyenPaymentSource?: IPayouts.CommonField;
        externalPlatform?: IPayouts.ExternalPlatform;
        merchantApplication?: IPayouts.CommonField;
        merchantDevice?: IPayouts.MerchantDevice;
        shopperInteractionDevice?: IPayouts.ShopperInteractionDevice;
    }
    interface BankAccount {
        bankAccountNumber?: string;
        bankCity?: string;
        bankLocationId?: string;
        bankName?: string;
        bic?: string;
        countryCode?: string;
        iban?: string;
        ownerName?: string;
        taxId?: string;
    }
    interface BrowserInfo {
        acceptHeader: string;
        colorDepth: number;
        javaEnabled: boolean;
        javaScriptEnabled?: boolean;
        language: string;
        screenHeight: number;
        screenWidth: number;
        timeZoneOffset: number;
        userAgent: string;
    }
    interface Card {
        cvc?: string;
        expiryMonth: string;
        expiryYear: string;
        holderName: string;
        issueNumber?: string;
        number: string;
        startMonth?: string;
        startYear?: string;
    }
    interface CommonField {
        name?: string;
        version?: string;
    }
    interface DeviceRenderOptions {
        sdkInterface?: "Html" | "Native" | "both";
        sdkUiType?: ("multiSelect" | "otherHtml" | "outOfBand" | "singleSelect" | "text")[];
    }
    interface ExternalPlatform {
        integrator?: string;
        name?: string;
        version?: string;
    }
    interface ForexQuote {
        account?: string;
        accountType?: string;
        baseAmount?: IPayouts.Amount;
        basePoints: number;
        buy?: IPayouts.Amount;
        interbank?: IPayouts.Amount;
        reference?: string;
        sell?: IPayouts.Amount;
        signature?: string;
        source?: string;
        type?: string;
        validTill: string;
    }
    interface FraudCheckResult {
        accountScore: number;
        checkId: number;
        name: string;
    }
    interface FraudResult {
        accountScore: number;
        results?: IPayouts.FraudCheckResult[];
    }
    interface FundSource {
        additionalData?: {};
        billingAddress?: IPayouts.Address;
        card?: IPayouts.Card;
        shopperEmail?: string;
        shopperName?: IPayouts.Name;
        telephoneNumber?: string;
    }
    interface Installments {
        value: number;
    }
    interface MerchantDevice {
        os?: string;
        osVersion?: string;
        reference?: string;
    }
    interface MerchantRiskIndicator {
        addressMatch?: boolean;
        deliveryAddressIndicator?: "shipToBillingAddress" | "shipToVerifiedAddress" | "shipToNewAddress" | "shipToStore" | "digitalGoods" | "goodsNotShipped" | "other";
        deliveryEmail?: string;
        deliveryTimeframe?: "electronicDelivery" | "sameDayShipping" | "overnightShipping" | "twoOrMoreDaysShipping";
        giftCardAmount?: IPayouts.Amount;
        giftCardCount?: number;
        preOrderDate?: string;
        preOrderPurchase?: boolean;
        reorderItems?: boolean;
    }
    interface ModifyRequest {
        additionalData?: {};
        merchantAccount: string;
        originalReference: string;
    }
    interface ModifyResponse {
        additionalData?: {};
        pspReference: string;
        response: string;
    }
    interface Name {
        firstName: string;
        gender: "MALE" | "FEMALE" | "UNKNOWN";
        infix?: string;
        lastName: string;
    }
    interface PayoutRequest {
        accountInfo?: IPayouts.AccountInfo;
        additionalAmount?: IPayouts.Amount;
        additionalData?: IPayouts.AdditionalDataCommon | IPayouts.AdditionalDataModifications | IPayouts.AdditionalData3DSecure | IPayouts.AdditionalDataAirline | IPayouts.AdditionalDataCarRental | IPayouts.AdditionalDataLevel23 | IPayouts.AdditionalDataLodging | IPayouts.AdditionalDataOpenInvoice | IPayouts.AdditionalDataRatepay | IPayouts.AdditionalDataRetry | IPayouts.AdditionalDataRisk | IPayouts.AdditionalDataRiskStandalone | IPayouts.AdditionalDataTemporaryServices | IPayouts.AdditionalDataWallets;
        amount: IPayouts.Amount;
        applicationInfo?: IPayouts.ApplicationInfo;
        bankAccount?: IPayouts.BankAccount;
        billingAddress?: IPayouts.Address;
        browserInfo?: IPayouts.BrowserInfo;
        captureDelayHours?: number;
        card?: IPayouts.Card;
        dateOfBirth?: string;
        dccQuote?: IPayouts.ForexQuote;
        deliveryAddress?: IPayouts.Address;
        deliveryDate?: string;
        deviceFingerprint?: string;
        enableRealTimeUpdate?: boolean;
        entityType?: "NaturalPerson" | "CompanyName";
        fraudOffset?: number;
        fundSource?: IPayouts.FundSource;
        fundingSource?: "debit" | "credit";
        installments?: IPayouts.Installments;
        mcc?: string;
        merchantAccount: string;
        merchantOrderReference?: string;
        merchantRiskIndicator?: IPayouts.MerchantRiskIndicator;
        metadata?: {};
        mpiData?: IPayouts.ThreeDSecureData;
        nationality?: string;
        orderReference?: string;
        recurring?: IPayouts.Recurring;
        recurringProcessingModel?: "CardOnFile" | "Subscription" | "UnscheduledCardOnFile";
        reference: string;
        selectedBrand?: string;
        selectedRecurringDetailReference?: string;
        sessionId?: string;
        shopperEmail?: string;
        shopperIP?: string;
        shopperInteraction?: "Ecommerce" | "ContAuth" | "Moto" | "POS";
        shopperLocale?: string;
        shopperName?: IPayouts.Name;
        shopperReference?: string;
        shopperStatement?: string;
        socialSecurityNumber?: string;
        splits?: IPayouts.Split[];
        store?: string;
        telephoneNumber?: string;
        threeDS2RequestData?: IPayouts.ThreeDS2RequestData;
        threeDSAuthenticationOnly?: boolean;
        totalsGroup?: string;
        trustedShopper?: boolean;
    }
    interface PayoutResponse {
        additionalData?: {};
        authCode?: string;
        dccAmount?: IPayouts.Amount;
        dccSignature?: string;
        fraudResult?: IPayouts.FraudResult;
        issuerUrl?: string;
        md?: string;
        paRequest?: string;
        pspReference?: string;
        refusalReason?: string;
        resultCode?: "AuthenticationFinished" | "Authorised" | "Cancelled" | "ChallengeShopper" | "Error" | "IdentifyShopper" | "Pending" | "PresentToShopper" | "Received" | "RedirectShopper" | "Refused";
    }
    namespace Post {
        type RequestBody = IPayouts.SubmitRequest;
        namespace Responses {
            type $200 = IPayouts.SubmitResponse;
        }
    }
    interface Recurring {
        contract?: "ONECLICK" | "RECURRING" | "PAYOUT";
        recurringDetailName?: string;
        recurringExpiry?: string;
        recurringFrequency?: string;
        tokenService?: "VISATOKENSERVICE" | "MCTOKENSERVICE";
    }
    interface SDKEphemPubKey {
        crv?: string;
        kty?: string;
        x?: string;
        y?: string;
    }
    interface ShopperInteractionDevice {
        locale?: string;
        os?: string;
        osVersion?: string;
    }
    interface Split {
        account?: string;
        amount: IPayouts.SplitAmount;
        description?: string;
        reference?: string;
        type: "BalanceAccount" | "Commission" | "Default" | "MarketPlace" | "PaymentFee" | "VAT" | "Verification";
    }
    interface SplitAmount {
        currency?: string;
        value: number;
    }
    interface StoreDetailAndSubmitRequest {
        additionalData?: {};
        amount: IPayouts.Amount;
        bank?: IPayouts.BankAccount;
        billingAddress?: IPayouts.Address;
        card?: IPayouts.Card;
        dateOfBirth: string;
        entityType: "NaturalPerson" | "Company";
        fraudOffset?: number;
        merchantAccount: string;
        nationality: string;
        recurring: IPayouts.Recurring;
        reference: string;
        selectedBrand?: string;
        shopperEmail: string;
        shopperName?: IPayouts.Name;
        shopperReference: string;
        shopperStatement?: string;
        socialSecurityNumber?: string;
        telephoneNumber?: string;
    }
    interface StoreDetailAndSubmitResponse {
        additionalData?: {};
        pspReference: string;
        refusalReason?: string;
        resultCode: string;
    }
    interface StoreDetailRequest {
        additionalData?: {};
        bank?: IPayouts.BankAccount;
        billingAddress?: IPayouts.Address;
        card?: IPayouts.Card;
        dateOfBirth: string;
        entityType: "NaturalPerson" | "Company";
        fraudOffset?: number;
        merchantAccount: string;
        nationality: string;
        recurring: IPayouts.Recurring;
        selectedBrand?: string;
        shopperEmail: string;
        shopperName?: IPayouts.Name;
        shopperReference: string;
        socialSecurityNumber?: string;
        telephoneNumber?: string;
    }
    interface StoreDetailResponse {
        additionalData?: {};
        pspReference: string;
        recurringDetailReference: string;
        resultCode: string;
    }
    interface SubmitRequest {
        additionalData?: {};
        amount: IPayouts.Amount;
        dateOfBirth?: string;
        entityType?: "NaturalPerson" | "Company";
        fraudOffset?: number;
        merchantAccount: string;
        nationality?: string;
        recurring: IPayouts.Recurring;
        reference: string;
        selectedRecurringDetailReference: string;
        shopperEmail: string;
        shopperName?: IPayouts.Name;
        shopperReference: string;
        shopperStatement?: string;
        socialSecurityNumber?: string;
    }
    interface SubmitResponse {
        additionalData?: {};
        pspReference: string;
        refusalReason?: string;
        resultCode: string;
    }
    interface ThreeDS2RequestData {
        acquirerBIN?: string;
        acquirerMerchantID?: string;
        authenticationOnly?: boolean;
        challengeIndicator?: "noPreference" | "requestNoChallenge" | "requestChallenge" | "requestChallengeAsMandate";
        deviceChannel: string;
        deviceRenderOptions?: IPayouts.DeviceRenderOptions;
        mcc?: string;
        merchantName?: string;
        messageVersion?: string;
        notificationURL?: string;
        sdkAppID?: string;
        sdkEncData?: string;
        sdkEphemPubKey?: IPayouts.SDKEphemPubKey;
        sdkMaxTimeout?: number;
        sdkReferenceNumber?: string;
        sdkTransID?: string;
        threeDSCompInd?: string;
        threeDSRequestorID?: string;
        threeDSRequestorName?: string;
        threeDSRequestorURL?: string;
        transactionType?: "goodsOrServicePurchase" | "checkAcceptance" | "accountFunding" | "quasiCashTransaction" | "prepaidActivationAndLoad";
        whiteListStatus?: string;
    }
    interface ThreeDSecureData {
        authenticationResponse?: "Y" | "N" | "U" | "A";
        cavv?: string;
        cavvAlgorithm?: string;
        directoryResponse?: "A" | "C" | "D" | "I" | "N" | "R" | "U" | "Y";
        dsTransID?: string;
        eci?: string;
        threeDSVersion?: string;
        xid?: string;
    }
}
