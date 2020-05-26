declare namespace ICheckout {
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
        adyenLibrary?: ICheckout.CommonField;
        adyenPaymentSource?: ICheckout.CommonField;
        externalPlatform?: ICheckout.ExternalPlatform;
        merchantApplication?: ICheckout.CommonField;
        merchantDevice?: ICheckout.MerchantDevice;
        shopperInteractionDevice?: ICheckout.ShopperInteractionDevice;
    }
    interface Avs {
        addressEditable?: boolean;
        enabled?: "yes" | "no" | "automatic";
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
    interface CheckoutPaymentsAction {
        alternativeReference?: string;
        data?: {};
        downloadUrl?: string;
        entity?: string;
        expiresAt?: string;
        initialAmount?: ICheckout.Amount;
        instructionsUrl?: string;
        issuer?: string;
        maskedTelephoneNumber?: string;
        merchantName?: string;
        merchantReference?: string;
        method?: string;
        paymentData?: string;
        paymentMethodType?: string;
        qrCodeData?: string;
        reference?: string;
        shopperEmail?: string;
        shopperName?: string;
        surcharge?: ICheckout.Amount;
        token?: string;
        totalAmount?: ICheckout.Amount;
        type?: "await" | "donate" | "qrCode" | "redirect" | "sdk" | "threeDS2Challenge" | "threeDS2Fingerprint" | "voucher" | "wechatpaySDK";
        url?: string;
    }
    interface CommonField {
        name?: string;
        version?: string;
    }
    interface Company {
        homepage?: string;
        name?: string;
        registrationNumber?: string;
        registryLocation?: string;
        taxId?: string;
        type?: string;
    }
    interface Configuration {
        avs?: ICheckout.Avs;
        cardHolderName?: "NONE" | "OPTIONAL" | "REQUIRED";
        installments?: ICheckout.Installments;
        shopperInput?: ICheckout.ShopperInput;
    }
    interface CreatePaymentLinkRequest {
        allowedPaymentMethods?: string[];
        amount: ICheckout.Amount;
        billingAddress?: ICheckout.Address;
        blockedPaymentMethods?: string[];
        countryCode: string;
        deliveryAddress?: ICheckout.Address;
        description?: string;
        expiresAt?: string;
        merchantAccount: string;
        reference: string;
        returnUrl?: string;
        shopperEmail?: string;
        shopperLocale?: string;
        shopperReference?: string;
        storePaymentMethod?: boolean;
    }
    interface CreatePaymentLinkResponse {
        amount?: ICheckout.Amount;
        expiresAt: string;
        reference: string;
        url: string;
    }
    interface DetailsRequest {
        details: {};
        paymentData?: string;
        threeDSAuthenticationOnly?: boolean;
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
        baseAmount?: ICheckout.Amount;
        basePoints: number;
        buy?: ICheckout.Amount;
        interbank?: ICheckout.Amount;
        reference?: string;
        sell?: ICheckout.Amount;
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
        results?: ICheckout.FraudCheckResult[];
    }
    interface InputDetail {
        configuration?: {};
        details?: ICheckout.SubInputDetail[];
        inputDetails?: ICheckout.SubInputDetail[];
        itemSearchUrl?: string;
        items?: ICheckout.Item[];
        key?: string;
        optional?: boolean;
        type?: string;
        value?: string;
    }
    interface Installments {
        value: number;
    }
    interface Item {
        id?: string;
        name?: string;
    }
    interface LineItem {
        amountExcludingTax?: number;
        amountIncludingTax?: number;
        description?: string;
        id?: string;
        quantity?: number;
        taxAmount?: number;
        taxCategory?: "High" | "Low" | "None" | "Zero";
        taxPercentage?: number;
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
        giftCardAmount?: ICheckout.Amount;
        giftCardCount?: number;
        preOrderDate?: string;
        preOrderPurchase?: boolean;
        reorderItems?: boolean;
    }
    interface Name {
        firstName: string;
        gender: "MALE" | "FEMALE" | "UNKNOWN";
        infix?: string;
        lastName: string;
    }
    interface PaymentMethod {
        brands?: string[];
        configuration?: {};
        details?: ICheckout.InputDetail[];
        group?: ICheckout.PaymentMethodGroup;
        inputDetails?: ICheckout.InputDetail[];
        name?: string;
        paymentMethodData?: string;
        supportsRecurring?: boolean;
        type?: string;
    }
    interface PaymentMethodACH {
        type: string;
        bankAccount: string;
    }
    interface PaymentMethodAmazonPay {
        type: string;
        amazonPayToken: string;
    }
    interface PaymentMethodAndroidPay {
        type: string;
        "androidpay.token": string;
    }
    interface PaymentMethodApplePay {
        type: string;
        "applepay.token": string;
    }
    interface PaymentMethodCard {
        type: string;
        cvc?: string;
        expiryMonth: string;
        expiryYear: string;
        holderName: string;
        number: string;
    }
    interface PaymentMethodDotpay {
        type: string;
        issuer: string;
    }
    interface PaymentMethodDragonpayEBanking {
        type: string;
        issuer: string;
    }
    interface PaymentMethodDragonpayOtcBanking {
        type: string;
        issuer: string;
    }
    interface PaymentMethodDragonpayOtcNonBanking {
        type: string;
        issuer: string;
    }
    interface PaymentMethodDragonpayOtcPhilippines {
        type: string;
        issuer: string;
    }
    interface PaymentMethodGiropay {
        type: string;
        bic: string;
    }
    interface PaymentMethodGroup {
        name?: string;
        paymentMethodData?: string;
        type?: string;
    }
    interface PaymentMethodIDeal {
        type: string;
        issuer: string;
    }
    interface PaymentMethodLianLianPayEbankingCredit {
        type: string;
        telephoneNumber: string;
    }
    interface PaymentMethodLianLianPayEbankingDebit {
        type: string;
        telephoneNumber: string;
    }
    interface PaymentMethodLianLianPayEbankingEnterprise {
        type: string;
        telephoneNumber: string;
    }
    interface PaymentMethodMOLpayEBankingMalaysia {
        type: string;
        issuer: string;
    }
    interface PaymentMethodMOLpayEBankingThailand {
        type: string;
        issuer: string;
    }
    interface PaymentMethodMOLpayEBankingVietnam {
        type: string;
        issuer: string;
    }
    interface PaymentMethodPayWithGoogle {
        type?: string;
        "paywithgoogle.token": string;
        googlePayToken: string;
        googlePayCardNetwork: string;
    }
    interface PaymentMethodQIWIWallet {
        type: string;
        "qiwiwallet.telephoneNumberPrefix": string;
        "qiwiwallet.telephoneNumber": string;
    }
    interface PaymentMethodSamsungpay {
        type: string;
        "samsungpay.token": string;
    }
    interface PaymentMethodSchemeGiftCard {
        type: string;
        cvc?: string;
        expiryMonth: string;
        expiryYear: string;
        holderName: string;
        number: string;
        encryptedSecurityCode: string;
        encryptedExpiryMonth: string;
        encryptedExpiryYear: string;
        encryptedCardNumber: string;
    }
    interface PaymentMethodSepaDirectDebit {
        type: string;
        "sepa.ibanNumber": string;
        "sepa.ownerName": string;
    }
    interface PaymentMethodVipps {
        type: string;
        telephoneNumber: string;
    }
    interface PaymentMethodsGroup {
        groupType?: string;
        name?: string;
        types?: string[];
    }
    interface PaymentMethodsRequest {
        additionalData?: ICheckout.AdditionalDataCommon | ICheckout.AdditionalData3DSecure | ICheckout.AdditionalDataAirline | ICheckout.AdditionalDataCarRental | ICheckout.AdditionalDataLevel23 | ICheckout.AdditionalDataLodging | ICheckout.AdditionalDataOpenInvoice | ICheckout.AdditionalDataRatepay | ICheckout.AdditionalDataRetry | ICheckout.AdditionalDataRisk | ICheckout.AdditionalDataRiskStandalone | ICheckout.AdditionalDataTemporaryServices;
        allowedPaymentMethods?: string[];
        amount?: ICheckout.Amount;
        blockedPaymentMethods?: string[];
        channel?: "iOS" | "Android" | "Web";
        countryCode?: string;
        enableRealTimeUpdate?: boolean;
        merchantAccount: string;
        shopperLocale?: string;
        shopperReference?: string;
        threeDSAuthenticationOnly?: boolean;
    }
    interface PaymentMethodsResponse {
        groups?: ICheckout.PaymentMethodsGroup[];
        oneClickPaymentMethods?: ICheckout.RecurringDetail[];
        paymentMethods?: ICheckout.PaymentMethod[];
        storedPaymentMethods?: ICheckout.StoredPaymentMethod[];
    }
    interface PaymentRequest {
        accountInfo?: ICheckout.AccountInfo;
        additionalData?: ICheckout.AdditionalDataCommon | ICheckout.AdditionalData3DSecure | ICheckout.AdditionalDataAirline | ICheckout.AdditionalDataCarRental | ICheckout.AdditionalDataLevel23 | ICheckout.AdditionalDataLodging | ICheckout.AdditionalDataOpenInvoice | ICheckout.AdditionalDataRatepay | ICheckout.AdditionalDataRetry | ICheckout.AdditionalDataRisk | ICheckout.AdditionalDataRiskStandalone | ICheckout.AdditionalDataTemporaryServices;
        amount: ICheckout.Amount;
        applicationInfo?: ICheckout.ApplicationInfo;
        billingAddress?: ICheckout.Address;
        browserInfo?: ICheckout.BrowserInfo;
        captureDelayHours?: number;
        channel?: "iOS" | "Android" | "Web";
        company?: ICheckout.Company;
        conversionId?: string;
        countryCode?: string;
        dateOfBirth?: string;
        dccQuote?: ICheckout.ForexQuote;
        deliveryAddress?: ICheckout.Address;
        deliveryDate?: string;
        deviceFingerprint?: string;
        enableOneClick?: boolean;
        enablePayOut?: boolean;
        enableRealTimeUpdate?: boolean;
        enableRecurring?: boolean;
        entityType?: "NaturalPerson" | "CompanyName";
        fraudOffset?: number;
        installments?: ICheckout.Installments;
        lineItems?: ICheckout.LineItem[];
        mcc?: string;
        merchantAccount: string;
        merchantOrderReference?: string;
        merchantRiskIndicator?: ICheckout.MerchantRiskIndicator;
        metadata?: {};
        mpiData?: ICheckout.ThreeDSecureData;
        orderReference?: string;
        origin?: string;
        paymentMethod: {};
        recurringExpiry?: string;
        recurringFrequency?: string;
        recurringProcessingModel?: "CardOnFile" | "Subscription" | "UnscheduledCardOnFile";
        redirectFromIssuerMethod?: string;
        redirectToIssuerMethod?: string;
        reference: string;
        returnUrl: string;
        riskData?: ICheckout.RiskData;
        sessionValidity?: string;
        shopperEmail?: string;
        shopperIP?: string;
        shopperInteraction?: "Ecommerce" | "ContAuth" | "Moto" | "POS";
        shopperLocale?: string;
        shopperName?: ICheckout.Name;
        shopperReference?: string;
        shopperStatement?: string;
        socialSecurityNumber?: string;
        splits?: ICheckout.Split[];
        storePaymentMethod?: boolean;
        telephoneNumber?: string;
        threeDS2RequestData?: ICheckout.ThreeDS2RequestData;
        threeDSAuthenticationOnly?: boolean;
        trustedShopper?: boolean;
    }
    interface PaymentResponse {
        action?: ICheckout.CheckoutPaymentsAction;
        additionalData?: ICheckout.ResponseAdditionalDataCommon | ICheckout.ResponseAdditionalDataBillingAddress | ICheckout.ResponseAdditionalDataCard | ICheckout.ResponseAdditionalDataDeliveryAddress | ICheckout.ResponseAdditionalDataInstallments | ICheckout.ResponseAdditionalDataNetworkTokens | ICheckout.ResponseAdditionalDataPayPal | ICheckout.ResponseAdditionalDataSepa;
        amount?: ICheckout.Amount;
        authentication?: {};
        details?: ICheckout.InputDetail[];
        fraudResult?: ICheckout.FraudResult;
        merchantReference?: string;
        outputDetails?: {};
        paymentData?: string;
        pspReference?: string;
        redirect?: ICheckout.Redirect;
        refusalReason?: string;
        refusalReasonCode?: string;
        resultCode?: "AuthenticationFinished" | "Authorised" | "Cancelled" | "ChallengeShopper" | "Error" | "IdentifyShopper" | "Pending" | "PresentToShopper" | "Received" | "RedirectShopper" | "Refused";
    }
    interface PaymentSetupRequest {
        additionalData?: ICheckout.AdditionalDataCommon | ICheckout.AdditionalData3DSecure | ICheckout.AdditionalDataAirline | ICheckout.AdditionalDataCarRental | ICheckout.AdditionalDataLevel23 | ICheckout.AdditionalDataLodging | ICheckout.AdditionalDataOpenInvoice | ICheckout.AdditionalDataRatepay | ICheckout.AdditionalDataRetry | ICheckout.AdditionalDataRisk | ICheckout.AdditionalDataRiskStandalone | ICheckout.AdditionalDataTemporaryServices;
        allowedPaymentMethods?: string[];
        amount: ICheckout.Amount;
        applicationInfo?: ICheckout.ApplicationInfo;
        billingAddress?: ICheckout.Address;
        blockedPaymentMethods?: string[];
        captureDelayHours?: number;
        channel?: "iOS" | "Android" | "Web";
        company?: ICheckout.Company;
        configuration?: ICheckout.Configuration;
        conversionId?: string;
        countryCode: string;
        dateOfBirth?: string;
        dccQuote?: ICheckout.ForexQuote;
        deliveryAddress?: ICheckout.Address;
        deliveryDate?: string;
        enableOneClick?: boolean;
        enablePayOut?: boolean;
        enableRealTimeUpdate?: boolean;
        enableRecurring?: boolean;
        entityType?: "NaturalPerson" | "CompanyName";
        fraudOffset?: number;
        installments?: ICheckout.Installments;
        lineItems?: ICheckout.LineItem[];
        mcc?: string;
        merchantAccount: string;
        merchantOrderReference?: string;
        metadata?: {};
        orderReference?: string;
        origin?: string;
        recurringExpiry?: string;
        recurringFrequency?: string;
        reference: string;
        returnUrl: string;
        riskData?: ICheckout.RiskData;
        sdkVersion?: string;
        sessionValidity?: string;
        shopperEmail?: string;
        shopperIP?: string;
        shopperInteraction?: "Ecommerce" | "ContAuth" | "Moto" | "POS";
        shopperLocale?: string;
        shopperName?: ICheckout.Name;
        shopperReference?: string;
        shopperStatement?: string;
        socialSecurityNumber?: string;
        splits?: ICheckout.Split[];
        storePaymentMethod?: boolean;
        telephoneNumber?: string;
        threeDSAuthenticationOnly?: boolean;
        token?: string;
        trustedShopper?: boolean;
    }
    interface PaymentSetupResponse {
        paymentSession?: string;
        recurringDetails?: ICheckout.RecurringDetail[];
    }
    interface PaymentVerificationRequest {
        payload: string;
    }
    interface PaymentVerificationResponse {
        additionalData?: ICheckout.ResponseAdditionalDataCommon | ICheckout.ResponseAdditionalDataBillingAddress | ICheckout.ResponseAdditionalDataCard | ICheckout.ResponseAdditionalDataDeliveryAddress | ICheckout.ResponseAdditionalDataInstallments | ICheckout.ResponseAdditionalDataNetworkTokens | ICheckout.ResponseAdditionalDataPayPal | ICheckout.ResponseAdditionalDataSepa;
        fraudResult?: ICheckout.FraudResult;
        merchantReference: string;
        paymentMethod: string;
        pspReference?: string;
        refusalReason?: string;
        refusalReasonCode?: string;
        resultCode?: "AuthenticationFinished" | "Authorised" | "Cancelled" | "ChallengeShopper" | "Error" | "IdentifyShopper" | "Pending" | "PresentToShopper" | "Received" | "RedirectShopper" | "Refused";
        serviceError?: ICheckout.ServiceError;
        shopperLocale: string;
    }
    namespace Post {
        type RequestBody = ICheckout.PaymentVerificationRequest;
        namespace Responses {
            type $200 = ICheckout.PaymentVerificationResponse;
        }
    }
    interface Recurring {
        contract?: "ONECLICK" | "RECURRING" | "PAYOUT";
        recurringDetailName?: string;
        recurringExpiry?: string;
        recurringFrequency?: string;
        tokenService?: "VISATOKENSERVICE" | "MCTOKENSERVICE";
    }
    interface RecurringDetail {
        brands?: string[];
        configuration?: {};
        details?: ICheckout.InputDetail[];
        group?: ICheckout.PaymentMethodGroup;
        inputDetails?: ICheckout.InputDetail[];
        name?: string;
        paymentMethodData?: string;
        recurringDetailReference?: string;
        storedDetails?: ICheckout.StoredDetails;
        supportsRecurring?: boolean;
        type?: string;
    }
    interface Redirect {
        data?: {};
        method?: "GET" | "POST";
        url?: string;
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
    interface RiskData {
        clientData?: string;
    }
    interface SDKEphemPubKey {
        crv?: string;
        kty?: string;
        x?: string;
        y?: string;
    }
    interface ServiceError {
        errorCode?: string;
        errorType?: string;
        message?: string;
    }
    interface ShopperInput {
        billingAddress?: "editable" | "hidden" | "readOnly";
        deliveryAddress?: "editable" | "hidden" | "readOnly";
        personalDetails?: "editable" | "hidden" | "readOnly";
    }
    interface ShopperInteractionDevice {
        locale?: string;
        os?: string;
        osVersion?: string;
    }
    interface Split {
        account?: string;
        amount: ICheckout.SplitAmount;
        description?: string;
        reference?: string;
        type: "BalanceAccount" | "Commission" | "Default" | "MarketPlace" | "PaymentFee" | "VAT" | "Verification";
    }
    interface SplitAmount {
        currency?: string;
        value: number;
    }
    interface StoredDetails {
        bank?: ICheckout.BankAccount;
        card?: ICheckout.Card;
        emailAddress?: string;
    }
    interface StoredPaymentMethod {
        brand?: string;
        expiryMonth?: string;
        expiryYear?: string;
        holderName?: string;
        id?: string;
        lastFour?: string;
        name?: string;
        shopperEmail?: string;
        supportedShopperInteractions?: string[];
        type?: string;
    }
    interface SubInputDetail {
        configuration?: {};
        items?: ICheckout.Item[];
        key?: string;
        optional?: boolean;
        type?: string;
        value?: string;
    }
    interface ThreeDS2RequestData {
        acquirerBIN?: string;
        acquirerMerchantID?: string;
        authenticationOnly?: boolean;
        challengeIndicator?: "noPreference" | "requestNoChallenge" | "requestChallenge" | "requestChallengeAsMandate";
        deviceChannel: string;
        deviceRenderOptions?: ICheckout.DeviceRenderOptions;
        mcc?: string;
        merchantName?: string;
        messageVersion?: string;
        notificationURL?: string;
        sdkAppID?: string;
        sdkEncData?: string;
        sdkEphemPubKey?: ICheckout.SDKEphemPubKey;
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
