declare namespace IPayments {
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
        "airline.passenger_name": string;
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
        adyenLibrary?: IPayments.CommonField;
        adyenPaymentSource?: IPayments.CommonField;
        externalPlatform?: IPayments.ExternalPlatform;
        merchantApplication?: IPayments.CommonField;
        merchantDevice?: IPayments.MerchantDevice;
        shopperInteractionDevice?: IPayments.ShopperInteractionDevice;
    }
    interface AuthenticationResultRequest {
        merchantAccount: string;
        pspReference: string;
    }
    interface AuthenticationResultResponse {
        threeDS1Result?: IPayments.ThreeDS1Result;
        threeDS2Result?: IPayments.ThreeDS2Result;
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
        baseAmount?: IPayments.Amount;
        basePoints: number;
        buy?: IPayments.Amount;
        interbank?: IPayments.Amount;
        reference?: string;
        sell?: IPayments.Amount;
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
        results?: IPayments.FraudCheckResult[];
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
        giftCardAmount?: IPayments.Amount;
        giftCardCount?: number;
        preOrderDate?: string;
        preOrderPurchase?: boolean;
        reorderItems?: boolean;
    }
    interface ModificationRequest {
        additionalData?: IPayments.AdditionalDataCommon | IPayments.AdditionalDataModifications | IPayments.AdditionalData3DSecure | IPayments.AdditionalDataAirline | IPayments.AdditionalDataCarRental | IPayments.AdditionalDataLevel23 | IPayments.AdditionalDataLodging | IPayments.AdditionalDataOpenInvoice | IPayments.AdditionalDataRatepay | IPayments.AdditionalDataRetry | IPayments.AdditionalDataRisk | IPayments.AdditionalDataRiskStandalone | IPayments.AdditionalDataTemporaryServices | IPayments.AdditionalDataWallets;
        merchantAccount: string;
        modificationAmount?: IPayments.Amount;
        mpiData?: IPayments.ThreeDSecureData;
        originalMerchantReference?: string;
        originalReference: string;
        reference?: string;
        splits?: IPayments.Split[];
        tenderReference?: string;
        uniqueTerminalId?: string;
    }
    interface ModificationResult {
        additionalData?: {};
        pspReference?: string;
        response?: "[capture-received]" | "[cancel-received]" | "[refund-received]" | "[cancelOrRefund-received]" | "[adjustAuthorisation-received]" | "[technical-cancel-received]" | "[voidPendingRefund-received]";
    }
    interface Name {
        firstName: string;
        gender: "MALE" | "FEMALE" | "UNKNOWN";
        infix?: string;
        lastName: string;
    }
    interface PaymentRequest {
        accountInfo?: IPayments.AccountInfo;
        additionalAmount?: IPayments.Amount;
        additionalData?: IPayments.AdditionalDataCommon | IPayments.AdditionalData3DSecure | IPayments.AdditionalDataAirline | IPayments.AdditionalDataCarRental | IPayments.AdditionalDataLevel23 | IPayments.AdditionalDataLodging | IPayments.AdditionalDataOpenInvoice | IPayments.AdditionalDataRatepay | IPayments.AdditionalDataRetry | IPayments.AdditionalDataRisk | IPayments.AdditionalDataRiskStandalone | IPayments.AdditionalDataTemporaryServices | IPayments.AdditionalDataWallets;
        amount: IPayments.Amount;
        applicationInfo?: IPayments.ApplicationInfo;
        bankAccount?: IPayments.BankAccount;
        billingAddress?: IPayments.Address;
        browserInfo?: IPayments.BrowserInfo;
        captureDelayHours?: number;
        card?: IPayments.Card;
        dateOfBirth?: string;
        dccQuote?: IPayments.ForexQuote;
        deliveryAddress?: IPayments.Address;
        deliveryDate?: string;
        deviceFingerprint?: string;
        enableRealTimeUpdate?: boolean;
        entityType?: "NaturalPerson" | "CompanyName";
        fraudOffset?: number;
        fundingSource?: "debit" | "credit";
        installments?: IPayments.Installments;
        mcc?: string;
        merchantAccount: string;
        merchantOrderReference?: string;
        merchantRiskIndicator?: IPayments.MerchantRiskIndicator;
        metadata?: {};
        mpiData?: IPayments.ThreeDSecureData;
        nationality?: string;
        orderReference?: string;
        recurring?: IPayments.Recurring;
        recurringProcessingModel?: "CardOnFile" | "Subscription" | "UnscheduledCardOnFile";
        reference: string;
        selectedBrand?: string;
        selectedRecurringDetailReference?: string;
        sessionId?: string;
        shopperEmail?: string;
        shopperIP?: string;
        shopperInteraction?: "Ecommerce" | "ContAuth" | "Moto" | "POS";
        shopperLocale?: string;
        shopperName?: IPayments.Name;
        shopperReference?: string;
        shopperStatement?: string;
        socialSecurityNumber?: string;
        splits?: IPayments.Split[];
        store?: string;
        telephoneNumber?: string;
        threeDS2RequestData?: IPayments.ThreeDS2RequestData;
        threeDSAuthenticationOnly?: boolean;
        totalsGroup?: string;
        trustedShopper?: boolean;
    }
    interface PaymentRequest3d {
        accountInfo?: IPayments.AccountInfo;
        additionalAmount?: IPayments.Amount;
        additionalData?: IPayments.AdditionalDataCommon | IPayments.AdditionalData3DSecure | IPayments.AdditionalDataAirline | IPayments.AdditionalDataCarRental | IPayments.AdditionalDataLevel23 | IPayments.AdditionalDataLodging | IPayments.AdditionalDataOpenInvoice | IPayments.AdditionalDataRatepay | IPayments.AdditionalDataRetry | IPayments.AdditionalDataRisk | IPayments.AdditionalDataRiskStandalone | IPayments.AdditionalDataTemporaryServices | IPayments.AdditionalDataWallets;
        amount?: IPayments.Amount;
        applicationInfo?: IPayments.ApplicationInfo;
        billingAddress?: IPayments.Address;
        browserInfo?: IPayments.BrowserInfo;
        captureDelayHours?: number;
        dateOfBirth?: string;
        dccQuote?: IPayments.ForexQuote;
        deliveryAddress?: IPayments.Address;
        deliveryDate?: string;
        deviceFingerprint?: string;
        enableRealTimeUpdate?: boolean;
        fraudOffset?: number;
        installments?: IPayments.Installments;
        mcc?: string;
        md: string;
        merchantAccount: string;
        merchantOrderReference?: string;
        merchantRiskIndicator?: IPayments.MerchantRiskIndicator;
        metadata?: {};
        orderReference?: string;
        paResponse: string;
        recurring?: IPayments.Recurring;
        recurringProcessingModel?: "CardOnFile" | "Subscription" | "UnscheduledCardOnFile";
        reference?: string;
        selectedBrand?: string;
        selectedRecurringDetailReference?: string;
        sessionId?: string;
        shopperEmail?: string;
        shopperIP?: string;
        shopperInteraction?: "Ecommerce" | "ContAuth" | "Moto" | "POS";
        shopperLocale?: string;
        shopperName?: IPayments.Name;
        shopperReference?: string;
        shopperStatement?: string;
        socialSecurityNumber?: string;
        splits?: IPayments.Split[];
        store?: string;
        telephoneNumber?: string;
        threeDS2RequestData?: IPayments.ThreeDS2RequestData;
        threeDSAuthenticationOnly?: boolean;
        totalsGroup?: string;
        trustedShopper?: boolean;
    }
    interface PaymentRequest3ds2 {
        accountInfo?: IPayments.AccountInfo;
        additionalAmount?: IPayments.Amount;
        additionalData?: IPayments.AdditionalDataCommon | IPayments.AdditionalData3DSecure | IPayments.AdditionalDataAirline | IPayments.AdditionalDataCarRental | IPayments.AdditionalDataLevel23 | IPayments.AdditionalDataLodging | IPayments.AdditionalDataOpenInvoice | IPayments.AdditionalDataRatepay | IPayments.AdditionalDataRetry | IPayments.AdditionalDataRisk | IPayments.AdditionalDataRiskStandalone | IPayments.AdditionalDataTemporaryServices | IPayments.AdditionalDataWallets;
        amount: IPayments.Amount;
        applicationInfo?: IPayments.ApplicationInfo;
        billingAddress?: IPayments.Address;
        browserInfo?: IPayments.BrowserInfo;
        captureDelayHours?: number;
        dateOfBirth?: string;
        dccQuote?: IPayments.ForexQuote;
        deliveryAddress?: IPayments.Address;
        deliveryDate?: string;
        deviceFingerprint?: string;
        enableRealTimeUpdate?: boolean;
        fraudOffset?: number;
        installments?: IPayments.Installments;
        mcc?: string;
        merchantAccount: string;
        merchantOrderReference?: string;
        merchantRiskIndicator?: IPayments.MerchantRiskIndicator;
        metadata?: {};
        orderReference?: string;
        recurring?: IPayments.Recurring;
        recurringProcessingModel?: "CardOnFile" | "Subscription" | "UnscheduledCardOnFile";
        reference: string;
        selectedBrand?: string;
        selectedRecurringDetailReference?: string;
        sessionId?: string;
        shopperEmail?: string;
        shopperIP?: string;
        shopperInteraction?: "Ecommerce" | "ContAuth" | "Moto" | "POS";
        shopperLocale?: string;
        shopperName?: IPayments.Name;
        shopperReference?: string;
        shopperStatement?: string;
        socialSecurityNumber?: string;
        splits?: IPayments.Split[];
        store?: string;
        telephoneNumber?: string;
        threeDS2RequestData?: IPayments.ThreeDS2RequestData;
        threeDS2Result?: IPayments.ThreeDS2Result;
        threeDS2Token?: string;
        threeDSAuthenticationOnly?: boolean;
        totalsGroup?: string;
        trustedShopper?: boolean;
    }
    interface PaymentResult {
        additionalData?: IPayments.ResponseAdditionalDataCommon | IPayments.ResponseAdditionalDataBillingAddress | IPayments.ResponseAdditionalDataCard | IPayments.ResponseAdditionalDataDeliveryAddress | IPayments.ResponseAdditionalDataInstallments | IPayments.ResponseAdditionalDataNetworkTokens | IPayments.ResponseAdditionalDataPayPal | IPayments.ResponseAdditionalDataSepa;
        authCode?: string;
        dccAmount?: IPayments.Amount;
        dccSignature?: string;
        fraudResult?: IPayments.FraudResult;
        issuerUrl?: string;
        md?: string;
        paRequest?: string;
        pspReference?: string;
        refusalReason?: string;
        resultCode?: "AuthenticationFinished" | "Authorised" | "Cancelled" | "ChallengeShopper" | "Error" | "IdentifyShopper" | "Pending" | "PresentToShopper" | "Received" | "RedirectShopper" | "Refused";
    }
    namespace Post {
        type RequestBody = IPayments.ModificationRequest;
        namespace Responses {
            type $200 = IPayments.ModificationResult;
        }
    }
    interface Recurring {
        contract?: "ONECLICK" | "RECURRING" | "PAYOUT";
        recurringDetailName?: string;
        recurringExpiry?: string;
        recurringFrequency?: string;
        tokenService?: "VISATOKENSERVICE" | "MCTOKENSERVICE";
    }
    interface ResponseAdditionalDataBillingAddress {
        "billingAddress.city"?: string;
        "billingAddress.country"?: string;
        "billingAddress.houseNumberOrName"?: string;
        "billingAddress.postalCode"?: string;
        "billingAddress.stateOrProvince"?: string;
        "billingAddress.street"?: string;
    }
    interface ResponseAdditionalDataCard {
        cardBin?: string;
        cardHolderName?: string;
        cardIssuingBank?: string;
        cardIssuingCountry?: string;
        cardIssuingCurrency?: string;
        cardPaymentMethod?: string;
        cardSummary?: string;
    }
    interface ResponseAdditionalDataCommon {
        acquirerAccountCode?: string;
        acquirerCode?: string;
        acquirerReference?: string;
        alias?: string;
        aliasType?: string;
        authCode?: string;
        authorisedAmountCurrency?: string;
        authorisedAmountValue?: string;
        avsResult?: string;
        avsResultRaw?: string;
        bic?: string;
        dsTransID?: string;
        eci?: string;
        expiryDate?: string;
        extraCostsCurrency?: string;
        extraCostsValue?: string;
        "fraudCheck-[itemNr]-[FraudCheckname]"?: string;
        fundingSource?: string;
        fundsAvailability?: string;
        inferredRefusalReason?: string;
        issuerCountry?: string;
        mcBankNetReferenceNumber?: string;
        networkTxReference?: string;
        ownerName?: string;
        paymentAccountReference?: string;
        paymentMethodVariant?: string;
        payoutEligible?: string;
        realtimeAccountUpdaterStatus?: string;
        receiptFreeText?: string;
        "recurring.firstPspReference"?: string;
        "recurring.recurringDetailReference"?: string;
        referred?: string;
        refusalReasonRaw?: string;
        shopperInteraction?: string;
        shopperReference?: string;
        terminalId?: string;
        threeDAuthenticated?: string;
        threeDAuthenticatedResponse?: string;
        threeDOffered?: string;
        threeDOfferedResponse?: string;
        threeDSVersion?: string;
        visaTransactionId?: string;
        xid?: string;
    }
    interface ResponseAdditionalDataDeliveryAddress {
        "deliveryAddress.city"?: string;
        "deliveryAddress.country"?: string;
        "deliveryAddress.houseNumberOrName"?: string;
        "deliveryAddress.postalCode"?: string;
        "deliveryAddress.stateOrProvince"?: string;
        "deliveryAddress.street"?: string;
    }
    interface ResponseAdditionalDataInstallments {
        "installments.value"?: string;
        "installmentPaymentData.installmentType"?: string;
        "installmentPaymentData.paymentOptions"?: string;
        "installmentPaymentData.option[itemNr].numberOfInstallments"?: string;
        "installmentPaymentData.option[itemNr].interestRate"?: string;
        "installmentPaymentData.option[itemNr].installmentFee"?: string;
        "installmentPaymentData.option[itemNr].annualPercentageRate"?: string;
        "installmentPaymentData.option[itemNr].firstInstallmentAmount"?: string;
        "installmentPaymentData.option[itemNr].subsequentInstallmentAmount"?: string;
        "installmentPaymentData.option[itemNr].minimumNumberOfInstallments"?: string;
        "installmentPaymentData.option[itemNr].maximumNumberOfInstallments"?: string;
        "installmentPaymentData.option[itemNr].totalAmountDue"?: string;
    }
    interface ResponseAdditionalDataNetworkTokens {
        "networkToken.available"?: string;
        "networkToken.bin"?: string;
        "networkToken.tokenSummary"?: string;
    }
    interface ResponseAdditionalDataPayPal {
        paypalPayerStatus?: string;
        paypalPayerResidenceCountry?: string;
        paypalPayerId?: string;
        paypalEmail?: string;
        paypalProtectionEligibility?: string;
    }
    interface ResponseAdditionalDataSepa {
        "sepadirectdebit.dateOfSignature"?: string;
        "sepadirectdebit.mandateId"?: string;
        "sepadirectdebit.sequenceType"?: string;
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
        amount: IPayments.SplitAmount;
        description?: string;
        reference?: string;
        type: "BalanceAccount" | "Commission" | "Default" | "MarketPlace" | "PaymentFee" | "VAT" | "Verification";
    }
    interface SplitAmount {
        currency?: string;
        value: number;
    }
    interface ThreeDS1Result {
        cavv?: string;
        cavvAlgorithm?: string;
        eci?: string;
        threeDAuthenticatedResponse?: string;
        threeDOfferedResponse?: string;
        xid?: string;
    }
    interface ThreeDS2RequestData {
        acquirerBIN?: string;
        acquirerMerchantID?: string;
        authenticationOnly?: boolean;
        challengeIndicator?: "noPreference" | "requestNoChallenge" | "requestChallenge" | "requestChallengeAsMandate";
        deviceChannel: string;
        deviceRenderOptions?: IPayments.DeviceRenderOptions;
        mcc?: string;
        merchantName?: string;
        messageVersion?: string;
        notificationURL?: string;
        sdkAppID?: string;
        sdkEncData?: string;
        sdkEphemPubKey?: IPayments.SDKEphemPubKey;
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
    interface ThreeDS2Result {
        authenticationValue?: string;
        cavvAlgorithm?: string;
        dsTransID?: string;
        eci?: string;
        messageVersion?: string;
        threeDSServerTransID?: string;
        timestamp?: string;
        transStatus?: string;
        transStatusReason?: string;
        whiteListStatus?: string;
    }
    interface ThreeDS2ResultRequest {
        merchantAccount: string;
        pspReference: string;
    }
    interface ThreeDS2ResultResponse {
        threeDS2Result?: IPayments.ThreeDS2Result;
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
