
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
 * Version of Checkout: v64
 *
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */


declare namespace ICheckout {
    export interface AccountInfo {
        /**
         * Indicator for the length of time since this shopper account was created in the merchant's environment.
         * Allowed values:
         * * notApplicable
         * * thisTransaction
         * * lessThan30Days
         * * from30To60Days
         * * moreThan60Days
         */
        accountAgeIndicator?: "notApplicable" | "thisTransaction" | "lessThan30Days" | "from30To60Days" | "moreThan60Days";
        /**
         * Date when the shopper's account was last changed.
         */
        accountChangeDate?: string; // date-time
        /**
         * Indicator for the length of time since the shopper's account was last updated.
         * Allowed values:
         * * thisTransaction
         * * lessThan30Days
         * * from30To60Days
         * * moreThan60Days
         */
        accountChangeIndicator?: "thisTransaction" | "lessThan30Days" | "from30To60Days" | "moreThan60Days";
        /**
         * Date when the shopper's account was created.
         */
        accountCreationDate?: string; // date-time
        /**
         * Indicates the type of account. For example, for a multi-account card product.
         * Allowed values:
         * * notApplicable
         * * credit
         * * debit
         */
        accountType?: "notApplicable" | "credit" | "debit";
        /**
         * Number of attempts the shopper tried to add a card to their account in the last day.
         */
        addCardAttemptsDay?: number; // int32
        /**
         * Date the selected delivery address was first used.
         */
        deliveryAddressUsageDate?: string; // date-time
        /**
         * Indicator for the length of time since this delivery address was first used.
         * Allowed values:
         * * thisTransaction
         * * lessThan30Days
         * * from30To60Days
         * * moreThan60Days
         */
        deliveryAddressUsageIndicator?: "thisTransaction" | "lessThan30Days" | "from30To60Days" | "moreThan60Days";
        /**
         * Shopper's home phone number (including the country code).
         */
        homePhone?: string;
        /**
         * Shopper's mobile phone number (including the country code).
         */
        mobilePhone?: string;
        /**
         * Date when the shopper last changed their password.
         */
        passwordChangeDate?: string; // date-time
        /**
         * Indicator when the shopper has changed their password.
         * Allowed values:
         * * notApplicable
         * * thisTransaction
         * * lessThan30Days
         * * from30To60Days
         * * moreThan60Days
         */
        passwordChangeIndicator?: "notApplicable" | "thisTransaction" | "lessThan30Days" | "from30To60Days" | "moreThan60Days";
        /**
         * Number of all transactions (successful and abandoned) from this shopper in the past 24 hours.
         */
        pastTransactionsDay?: number; // int32
        /**
         * Number of all transactions (successful and abandoned) from this shopper in the past year.
         */
        pastTransactionsYear?: number; // int32
        /**
         * Date this payment method was added to the shopper's account.
         */
        paymentAccountAge?: string; // date-time
        /**
         * Indicator for the length of time since this payment method was added to this shopper's account.
         * Allowed values:
         * * notApplicable
         * * thisTransaction
         * * lessThan30Days
         * * from30To60Days
         * * moreThan60Days
         */
        paymentAccountIndicator?: "notApplicable" | "thisTransaction" | "lessThan30Days" | "from30To60Days" | "moreThan60Days";
        /**
         * Number of successful purchases in the last six months.
         */
        purchasesLast6Months?: number; // int32
        /**
         * Whether suspicious activity was recorded on this account.
         */
        suspiciousActivity?: boolean;
        /**
         * Shopper's work phone number (including the country code).
         */
        workPhone?: string;
    }
    export interface AchDetails {
        /**
         * The bank account number (without separators).
         */
        bankAccountNumber: string;
        /**
         * The bank routing number of the account. The field value is `nil` in most cases.
         */
        bankLocationId?: string;
        /**
         * Encrypted bank account number. The bank account number (without separators).
         */
        encryptedBankAccountNumber?: string;
        /**
         * Encrypted location id. The bank routing number of the account. The field value is `nil` in most cases.
         */
        encryptedBankLocationId?: string;
        /**
         * The name of the bank account holder.
         * If you submit a name with non-Latin characters, we automatically replace some of them with corresponding Latin characters to meet the FATF recommendations. For example:
         * * χ12 is converted to ch12.
         * * üA is converted to euA.
         * * Peter Møller is converted to Peter Mller, because banks don't accept 'ø'.
         * After replacement, the ownerName must have at least three alphanumeric characters (A-Z, a-z, 0-9), and at least one of them must be a valid Latin character (A-Z, a-z). For example:
         * * John17 - allowed.
         * * J17 - allowed.
         * * 171 - not allowed.
         * * John-7 - allowed.
         * > If provided details don't match the required format, the response returns the error message: 203 'Invalid bank account holder name'.
         */
        ownerName?: string;
        /**
         * This is the `recurringDetailReference` returned in the response when you created the token.
         */
        storedPaymentMethodId?: string;
        /**
         * **ach**
         */
        type: string;
    }
    export interface AdditionalData3DSecure {
        /**
         * This parameter indicates that you are able to process 3D Secure 2 transactions natively on your payment page. Send this field when you are using `/payments` endpoint with any of our [native 3D Secure 2 solutions](https://docs.adyen.com/checkout/3d-secure/native-3ds2), such as Components or Drop-in. Possible values:
         * * **true** - Ready to support native 3D Secure 2 authentication. Setting this to true does not mean always applying 3D Secure 2. Adyen still selects the version of 3D Secure based on configuration to optimize authorisation rates and improve the shopper's experience.
         * * **false** – Not ready to support native 3D Secure 2 authentication. Adyen will not offer 3D Secure 2 to your shopper regardless of your configuration.
         * > This parameter only indicates your readiness to support 3D Secure 2 natively on Drop-in or Components. To specify that you want to perform 3D Secure on a transaction, use Dynamic 3D Secure or send the `executeThreeD` parameter.
         */
        allow3DS2?: string;
        /**
         * This parameter indicates if you want to perform 3D Secure authentication on a transaction or not. Allowed values:
         * * **true** – Perform 3D Secure authentication.
         * * **false** – Don't perform 3D Secure authentication.
         * > Alternatively, you can also use Dynamic 3D Secure to configure rules for applying 3D Secure.
         */
        executeThreeD?: string;
        /**
         * In case of Secure+, this field must be set to **CUPSecurePlus**.
         */
        mpiImplementationType?: string;
        /**
         * Indicates the [exemption type](https://docs.adyen.com/payments-fundamentals/psd2-sca-compliance-and-implementation-guide#specifypreferenceinyourapirequest) that you want to request for the transaction. Possible values:
         * * **lowValue**
         * * **secureCorporate**
         * * **trustedBeneficiary**
         * * **transactionRiskAnalysis**
         */
        scaExemption?: string;
    }
    export interface AdditionalDataAirline {
        /**
         * Reference number for the invoice, issued by the agency.
         * * minLength: 1
         * * maxLength: 6
         */
        "airline.agency_invoice_number"?: string;
        /**
         * 2-letter agency plan identifier; alphabetical.
         * * minLength: 2
         * * maxLength: 2
         */
        "airline.agency_plan_name"?: string;
        /**
         * [IATA](https://www.iata.org/services/pages/codes.aspx) 3-digit accounting code (PAX); numeric. It identifies the carrier.
         * * Format: IATA 3-digit accounting code (PAX)
         * * Example: KLM = 074
         * * minLength: 3
         * * maxLength: 3
         */
        "airline.airline_code"?: string;
        /**
         * [IATA](https://www.iata.org/services/pages/codes.aspx) 2-letter accounting code (PAX); alphabetical. It identifies the carrier.
         * * Format: [IATA](https://www.iata.org/services/pages/codes.aspx) 2-letter airline code
         * * Example: KLM = KL
         * * minLength: 2
         * * maxLength: 2
         */
        "airline.airline_designator_code"?: string;
        /**
         * Chargeable amount for boarding the plane.
         * The transaction amount needs to be represented in minor units according to the [following table](https://docs.adyen.com/development-resources/currency-codes).
         * * minLength: 1
         * * maxLength: 18
         */
        "airline.boarding_fee"?: string;
        /**
         * The [CRS](https://en.wikipedia.org/wiki/Computer_reservation_system) used to make the reservation and purchase the ticket.
         * * Format: alphanumeric.
         * * minLength: 4
         * * maxLength: 4
         */
        "airline.computerized_reservation_system"?: string;
        /**
         * Reference number; alphanumeric.
         * * minLength: 0
         * * maxLength: 20
         */
        "airline.customer_reference_number"?: string;
        /**
         * Optional 2-digit code; alphanumeric. It identifies the type of product of the transaction. The description of the code may appear on credit card statements.
         * * Format: 2-digit code
         * * Example: Passenger ticket = 01
         * * minLength: 2
         * * maxLength: 2
         */
        "airline.document_type"?: string;
        /**
         * Flight departure date. Local time `(HH:mm)` is optional.
         * * Date format: `yyyy-MM-dd`
         * * Date and time format: `yyyy-MM-dd HH:mm`
         * * minLength: 10
         * * maxLength: 16
         */
        "airline.flight_date"?: string;
        /**
         * [IATA](https://www.iata.org/services/pages/codes.aspx) 2-letter accounting code (PAX); alphabetical. It identifies the carrier.
         * This field is required/mandatory if the airline data includes leg details.
         * * Format: IATA 2-letter airline code
         * * Example: KLM = KL
         * * minLength: 2
         * * maxLength: 2
         */
        "airline.leg.carrier_code"?: string;
        /**
         * 1-letter travel class identifier; alphabetical. There is no standard; however, the following codes are used rather consistently:
         * * F: first class
         * * J: business class
         * * Y: economy class
         * * W: premium economy
         *
         * Limitations:
         * * minLength: 1
         * * maxLength: 1
         */
        "airline.leg.class_of_travel"?: string;
        /**
         *
         * Date and time of travel. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-compliant.
         * * Format: `yyyy-MM-dd HH:mm`
         * * minLength: 16
         * * maxLength: 16
         */
        "airline.leg.date_of_travel"?: string;
        /**
         * Alphabetical identifier of the departure airport.
         * This field is required if the airline data includes leg details.
         * * Format: [IATA](https://www.iata.org/services/pages/codes.aspx) 3-letter airport code.
         * * Example: Amsterdam = AMS
         * * minLength: 3
         * * maxLength: 3
         */
        "airline.leg.depart_airport"?: string;
        /**
         * [Departure tax](https://en.wikipedia.org/wiki/Departure_tax). Amount charged by a country to an individual upon their leaving. The transaction amount needs to be represented in minor units according to the [following table](https://docs.adyen.com/development-resources/currency-codes).
         * * minLength: 1
         * * maxLength: 12
         */
        "airline.leg.depart_tax"?: string;
        /**
         * Alphabetical identifier of the destination/arrival airport.
         * This field is required/mandatory if the airline data includes leg details.
         * * Format: [IATA](https://www.iata.org/services/pages/codes.aspx) 3-letter airport code.
         * * Example: Amsterdam = AMS
         * * minLength: 3
         * * maxLength: 3
         */
        "airline.leg.destination_code"?: string;
        /**
         * [Fare basis code](https://en.wikipedia.org/wiki/Fare_basis_code); alphanumeric.
         * * minLength: 1
         * * maxLength: 7
         */
        "airline.leg.fare_base_code"?: string;
        /**
         * The flight identifier.
         * * minLength: 1
         * * maxLength: 5
         */
        "airline.leg.flight_number"?: string;
        /**
         * 1-letter code that indicates whether the passenger is entitled to make a stopover. Only two types of characters are allowed:
         * * O: Stopover allowed
         * * X: Stopover not allowed
         *
         * Limitations:
         * * minLength: 1
         * * maxLength: 1
         */
        "airline.leg.stop_over_code"?: string;
        /**
         * Date of birth of the passenger.
         *
         * Date format: `yyyy-MM-dd`
         * * minLength: 10
         * * maxLength: 10
         */
        "airline.passenger.date_of_birth"?: string;
        /**
         * Passenger first name/given name.
         * > This field is required/mandatory if the airline data includes passenger details or leg details.
         */
        "airline.passenger.first_name"?: string;
        /**
         * Passenger last name/family name.
         * > This field is required/mandatory if the airline data includes passenger details or leg details.
         */
        "airline.passenger.last_name"?: string;
        /**
         * Telephone number of the passenger, including country code. This is an alphanumeric field that can include the '+' and '-' signs.
         * * minLength: 3
         * * maxLength: 30
         */
        "airline.passenger.telephone_number"?: string;
        /**
         * Passenger type code (PTC). IATA PTC values are 3-letter alphabetical. Example: ADT, SRC, CNN, INS.
         *
         * However, several carriers use non-standard codes that can be up to 5 alphanumeric characters.
         * * minLength: 3
         * * maxLength: 6
         */
        "airline.passenger.traveller_type"?: string;
        /**
         * Passenger name, initials, and a title.
         * * Format: last name + first name or initials + title.
         * * Example: *FLYER / MARY MS*.
         * * minLength: 1
         * * maxLength: 49
         */
        "airline.passenger_name": string;
        /**
         * Address of the place/agency that issued the ticket.
         * * minLength: 0
         * * maxLength: 16
         */
        "airline.ticket_issue_address"?: string;
        /**
         * The ticket's unique identifier.
         * * minLength: 1
         * * maxLength: 150
         */
        "airline.ticket_number"?: string;
        /**
         * IATA number, also ARC number or ARC/IATA number. Unique identifier number for travel agencies.
         * * minLength: 1
         * * maxLength: 8
         */
        "airline.travel_agency_code"?: string;
        /**
         * The name of the travel agency.
         * * minLength: 1
         * * maxLength: 25
         */
        "airline.travel_agency_name"?: string;
    }
    export interface AdditionalDataCarRental {
        /**
         * Pick-up date.
         * * Date format: `yyyyMMdd`
         */
        "carRental.checkOutDate"?: string;
        /**
         * The customer service phone number of the car rental company.
         * * Format: Alphanumeric
         * * maxLength: 17
         */
        "carRental.customerServiceTollFreeNumber"?: string;
        /**
         * Number of days for which the car is being rented.
         * * Format: Numeric
         * * maxLength: 19
         */
        "carRental.daysRented"?: string;
        /**
         * Any fuel charges associated with the rental.
         * * Format: Numeric
         * * maxLength: 12
         */
        "carRental.fuelCharges"?: string;
        /**
         * Any insurance charges associated with the rental.
         * * Format: Numeric
         * * maxLength: 12
         */
        "carRental.insuranceCharges"?: string;
        /**
         * The city from which the car is rented.
         * * Format: Alphanumeric
         * * maxLength: 18
         */
        "carRental.locationCity"?: string;
        /**
         * The country from which the car is rented.
         * * Format: Alphanumeric
         * * maxLength: 2
         */
        "carRental.locationCountry"?: string;
        /**
         * The state or province from where the car is rented.
         * * Format: Alphanumeric
         * * maxLength: 3
         */
        "carRental.locationStateProvince"?: string;
        /**
         * Indicates if the customer was a "no-show" (neither keeps nor cancels their booking).
         * * Y - Customer was a no show.
         * * N - Not applicable.
         */
        "carRental.noShowIndicator"?: string;
        /**
         * Charge associated with not returning a vehicle to the original rental location.
         */
        "carRental.oneWayDropOffCharges"?: string;
        /**
         * Daily rental rate.
         * * Format: Alphanumeric
         * * maxLength: 12
         */
        "carRental.rate"?: string;
        /**
         * Specifies whether the given rate is applied daily or weekly.
         * * D - Daily rate.
         * * W - Weekly rate.
         */
        "carRental.rateIndicator"?: string;
        /**
         * The rental agreement number associated with this car rental.
         * * Format: Alphanumeric
         * * maxLength: 9
         */
        "carRental.rentalAgreementNumber"?: string;
        /**
         * Daily rental rate.
         * * Format: Alphanumeric
         * * maxLength: 12
         */
        "carRental.rentalClassId"?: string;
        /**
         * The name of the person renting the car.
         * * Format: Alphanumeric
         * * maxLength: 26
         */
        "carRental.renterName"?: string;
        /**
         * The city where the car must be returned.
         * * Format: Alphanumeric
         * * maxLength: 18
         */
        "carRental.returnCity"?: string;
        /**
         * The country where the car must be returned.
         * * Format: Alphanumeric
         * * maxLength: 2
         */
        "carRental.returnCountry"?: string;
        /**
         * The last date to return the car by.
         * * Date format: `yyyyMMdd`
         */
        "carRental.returnDate"?: string;
        /**
         * Agency code, phone number, or address abbreviation
         * * Format: Alphanumeric
         * * maxLength: 10
         */
        "carRental.returnLocationId"?: string;
        /**
         * The state or province where the car must be returned.
         * * Format: Alphanumeric
         * * maxLength: 3
         */
        "carRental.returnStateProvince"?: string;
        /**
         * Indicates whether the goods or services were tax-exempt, or tax was not collected.
         *
         * Values:
         * * Y - Goods or services were tax exempt
         * * N - Tax was not collected
         */
        "carRental.taxExemptIndicator"?: string;
        /**
         * Number of nights.  This should be included in the auth message.
         * * Format: Numeric
         * * maxLength: 2
         */
        "travelEntertainmentAuthData.duration"?: string;
        /**
         * Indicates what market-specific dataset will be submitted or is being submitted. Value should be "A" for Car rental. This should be included in the auth message.
         * * Format: Alphanumeric
         * * maxLength: 1
         */
        "travelEntertainmentAuthData.market"?: string;
    }
    export interface AdditionalDataCommon {
        /**
         * Triggers test scenarios that allow to replicate certain communication errors.
         *
         * Allowed values:
         * * **NO_CONNECTION_AVAILABLE** – There wasn't a connection available to service the outgoing communication.
         * This is a transient, retriable error since no messaging could be initiated to an issuing system (or third-party acquiring system). Therefore, the header Transient-Error: true is returned in the response. A subsequent request using the same idempotency key will be processed as if it was the first request.
         * * **IOEXCEPTION_RECEIVED** – Something went wrong during transmission of the message or receiving the response.
         * This is a classified as non-transient because the message could have been received by the issuing party and been acted upon. No transient error header is returned. If using idempotency, the (error) response is stored as the final result for the idempotency key. Subsequent messages with the same idempotency key not be processed beyond returning the stored response.
         */
        RequestedTestErrorResponseCode?: string;
        /**
         * Flags a card payment request for either pre-authorisation or final authorisation. For more information, refer to [Authorisation types](https://docs.adyen.com/checkout/adjust-authorisation#authorisation-types).
         *
         * Allowed values:
         * * **PreAuth** – flags the payment request to be handled as a pre-authorisation.
         * * **FinalAuth** – flags the payment request to be handled as a final authorisation.
         */
        authorisationType?: string;
        /**
         * Allows you to determine or override the acquirer account that should be used for the transaction.
         *
         * If you need to process a payment with an acquirer different from a default one, you can set up a corresponding configuration on the Adyen payments platform. Then you can pass a custom routing flag in a payment request's additional data to target a specific acquirer.
         *
         * To enable this functionality, contact [Support](https://support.adyen.com/hc/en-us/requests/new).
         */
        customRoutingFlag?: string;
        /**
         * Allows you to link the transaction to the original or previous one in a subscription/card-on-file chain. This field is required for token-based transactions where Adyen does not tokenize the card.
         *
         * Transaction identifier from card schemes, for example, Mastercard Trace ID or the Visa Transaction ID.
         *
         * Submit the original transaction ID of the contract in your payment request if you are not tokenizing card details with Adyen and are making a merchant-initiated transaction (MIT) for subsequent charges.
         *
         * Make sure you are sending `shopperInteraction` **ContAuth** and `recurringProcessingModel` **Subscription** or **UnscheduledCardOnFile** to ensure that the transaction is classified as MIT.
         */
        networkTxReference?: string;
        /**
         * Boolean indicator that can be optionally used for performing debit transactions on combo cards (for example, combo cards in Brazil). This is not mandatory but we recommend that you set this to true if you want to use the `selectedBrand` value to specify how to process the transaction.
         */
        overwriteBrand?: string;
        /**
         * This field is required if the transaction is performed by a registered payment facilitator. This field must contain the city of the actual merchant's address.
         * * Format: alpha-numeric.
         * * Maximum length: 13 characters.
         */
        subMerchantCity?: string;
        /**
         * This field is required if the transaction is performed by a registered payment facilitator. This field must contain the three-letter country code of the actual merchant's address.
         * * Format: alpha-numeric.
         * * Fixed length: 3 characters.
         */
        subMerchantCountry?: string;
        /**
         * This field contains an identifier of the actual merchant when a transaction is submitted via a payment facilitator. The payment facilitator must send in this unique ID.
         *
         * A unique identifier per submerchant that is required if the transaction is performed by a registered payment facilitator.
         * * Format: alpha-numeric.
         * * Fixed length: 15 characters.
         */
        subMerchantID?: string;
        /**
         * This field is required if the transaction is performed by a registered payment facilitator. This field must contain the name of the actual merchant.
         * * Format: alpha-numeric.
         * * Maximum length: 22 characters.
         */
        subMerchantName?: string;
        /**
         * This field is required if the transaction is performed by a registered payment facilitator. This field must contain the postal code of the actual merchant's address.
         * * Format: alpha-numeric.
         * * Maximum length: 10 characters.
         */
        subMerchantPostalCode?: string;
        /**
         * This field is required if the transaction is performed by a registered payment facilitator, and if applicable to the country. This field must contain the state code of the actual merchant's address.
         * * Format: alpha-numeric.
         * * Maximum length: 3 characters.
         */
        subMerchantState?: string;
        /**
         * This field is required if the transaction is performed by a registered payment facilitator. This field must contain the street of the actual merchant's address.
         * * Format: alpha-numeric.
         * * Maximum length: 60 characters.
         */
        subMerchantStreet?: string;
        /**
         * This field is required if the transaction is performed by a registered payment facilitator. This field must contain the tax ID of the actual merchant.
         * * Format: alpha-numeric.
         * * Fixed length: 11 or 14 characters.
         */
        subMerchantTaxId?: string;
    }
    export interface AdditionalDataLevel23 {
        /**
         * Customer code, if supplied by a customer.
         *
         * Encoding: ASCII.
         *
         * Max length: 25 characters.
         *
         * > Required for Level 2 and Level 3 data.
         */
        "enhancedSchemeData.customerReference"?: string;
        /**
         * Destination country code.
         *
         * Encoding: ASCII.
         *
         * Max length: 3 characters.
         */
        "enhancedSchemeData.destinationCountryCode"?: string;
        /**
         * The postal code of a destination address.
         *
         * Encoding: ASCII.
         *
         * Max length: 10 characters.
         *
         * > Required for American Express.
         */
        "enhancedSchemeData.destinationPostalCode"?: string;
        /**
         * Destination state or province code.
         *
         * Encoding: ASCII.Max length: 3 characters.
         */
        "enhancedSchemeData.destinationStateProvinceCode"?: string;
        /**
         * Duty amount, in minor units.
         *
         * For example, 2000 means USD 20.00.
         *
         * Max length: 12 characters.
         */
        "enhancedSchemeData.dutyAmount"?: string;
        /**
         * Shipping amount, in minor units.
         *
         * For example, 2000 means USD 20.00.
         *
         * Max length: 12 characters.
         */
        "enhancedSchemeData.freightAmount"?: string;
        /**
         * Item commodity code.
         *
         * Encoding: ASCII.
         *
         * Max length: 12 characters.
         */
        "enhancedSchemeData.itemDetailLine[itemNr].commodityCode"?: string;
        /**
         * Item description.
         *
         * Encoding: ASCII.
         *
         * Max length: 26 characters.
         */
        "enhancedSchemeData.itemDetailLine[itemNr].description"?: string;
        /**
         * Discount amount, in minor units.
         *
         * For example, 2000 means USD 20.00.
         *
         * Max length: 12 characters.
         */
        "enhancedSchemeData.itemDetailLine[itemNr].discountAmount"?: string;
        /**
         * Product code.
         *
         * Encoding: ASCII.
         *
         * Max length: 12 characters.
         */
        "enhancedSchemeData.itemDetailLine[itemNr].productCode"?: string;
        /**
         * Quantity, specified as an integer value.
         *
         * Value must be greater than 0.
         *
         * Max length: 12 characters.
         */
        "enhancedSchemeData.itemDetailLine[itemNr].quantity"?: string;
        /**
         * Total amount, in minor units.
         *
         * For example, 2000 means USD 20.00.
         *
         * Max length: 12 characters.
         */
        "enhancedSchemeData.itemDetailLine[itemNr].totalAmount"?: string;
        /**
         * Item unit of measurement.
         *
         * Encoding: ASCII.
         *
         * Max length: 3 characters.
         */
        "enhancedSchemeData.itemDetailLine[itemNr].unitOfMeasure"?: string;
        /**
         * Unit price, specified in [minor units](https://docs.adyen.com/development-resources/currency-codes).
         *
         * Max length: 12 characters.
         */
        "enhancedSchemeData.itemDetailLine[itemNr].unitPrice"?: string;
        /**
         * Order date.
         * * Format: `ddMMyy`
         *
         * Encoding: ASCII.
         *
         * Max length: 6 characters.
         */
        "enhancedSchemeData.orderDate"?: string;
        /**
         * The postal code of a "ship-from" address.
         *
         * Encoding: ASCII.
         *
         * Max length: 10 characters.
         */
        "enhancedSchemeData.shipFromPostalCode"?: string;
        /**
         * Total tax amount, in minor units.
         *
         * For example, 2000 means USD 20.00.
         *
         * Max length: 12 characters.
         *
         * > Required for Level 2 and Level 3 data.
         */
        "enhancedSchemeData.totalTaxAmount"?: string;
    }
    export interface AdditionalDataLodging {
        /**
         * The arrival date.
         * * Date format: `yyyyMMdd`
         */
        "lodging.checkInDate"?: string;
        /**
         * The departure date.
         * * Date format: `yyyyMMdd`
         */
        "lodging.checkOutDate"?: string;
        /**
         * The toll free phone number for the hotel/lodgings.
         * * Format: Alphanumeric
         * * maxLength: 17
         */
        "lodging.customerServiceTollFreeNumber"?: string;
        /**
         * Identifies that the facility complies with the Hotel and Motel Fire Safety Act of 1990. Values can be: 'Y' or 'N'.
         * * Format: Alphabetic
         * * maxLength: 1
         */
        "lodging.fireSafetyActIndicator"?: string;
        /**
         * The folio cash advances.
         * * Format: Numeric
         * * maxLength: 12
         */
        "lodging.folioCashAdvances"?: string;
        /**
         * Card acceptor’s internal invoice or billing ID reference number.
         * * Format: Alphanumeric
         * * maxLength: 25
         */
        "lodging.folioNumber"?: string;
        /**
         * Any charges for food and beverages associated with the booking.
         * * Format: Numeric
         * * maxLength: 12
         */
        "lodging.foodBeverageCharges"?: string;
        /**
         * Indicates if the customer was a "no-show" (neither keeps nor cancels their booking).
         *
         * Value should be Y or N.
         * * Format: Numeric
         * * maxLength: 1
         */
        "lodging.noShowIndicator"?: string;
        /**
         * Prepaid expenses for the booking.
         * * Format: Numeric
         * * maxLength: 12
         */
        "lodging.prepaidExpenses"?: string;
        /**
         * Identifies specific lodging property location by its local phone number.
         * * Format: Alphanumeric
         * * maxLength: 17
         */
        "lodging.propertyPhoneNumber"?: string;
        /**
         * Total number of nights the room will be rented.
         * * Format: Numeric
         * * maxLength: 4
         */
        "lodging.room1.numberOfNights"?: string;
        /**
         * The rate of the room.
         * * Format: Numeric
         * * maxLength: 12
         */
        "lodging.room1.rate"?: string;
        /**
         * The total amount of tax to be paid.
         * * Format: Numeric
         * * maxLength: 12
         */
        "lodging.room1.tax"?: string;
        /**
         * Total room tax amount.
         * * Format: Numeric
         * * maxLength: 12
         */
        "lodging.totalRoomTax"?: string;
        /**
         * Total tax amount.
         * * Format: Numeric
         * * maxLength: 12
         */
        "lodging.totalTax"?: string;
        /**
         * Number of nights. This should be included in the auth message.
         * * Format: Numeric
         * * maxLength: 2
         */
        "travelEntertainmentAuthData.duration"?: string;
        /**
         * Indicates what market-specific dataset will be submitted or is being submitted. Value should be "H" for Hotel. This should be included in the auth message.
         *
         * * Format: Alphanumeric
         * * maxLength: 1
         */
        "travelEntertainmentAuthData.market"?: string;
    }
    export interface AdditionalDataOpenInvoice {
        /**
         * Holds different merchant data points like product, purchase, customer, and so on. It takes data in a Base64 encoded string.
         *
         * The `merchantData` parameter needs to be added to the `openinvoicedata` signature at the end.
         *
         * Since the field is optional, if it's not included it does not impact computing the merchant signature.
         *
         * Applies only to Klarna.
         *
         * You can contact Klarna for the format and structure of the string.
         */
        "openinvoicedata.merchantData"?: string;
        /**
         * The number of invoice lines included in `openinvoicedata`.
         *
         * There needs to be at least one line, so `numberOfLines` needs to be at least 1.
         */
        "openinvoicedata.numberOfLines"?: string;
        /**
         * The three-character ISO currency code.
         */
        "openinvoicedataLine[itemNr].currencyCode"?: string;
        /**
         * A text description of the product the invoice line refers to.
         */
        "openinvoicedataLine[itemNr].description"?: string;
        /**
         * The price for one item in the invoice line, represented in minor units.
         *
         * The due amount for the item, VAT excluded.
         */
        "openinvoicedataLine[itemNr].itemAmount"?: string;
        /**
         * A unique id for this item. Required for RatePay if the description of each item is not unique.
         */
        "openinvoicedataLine[itemNr].itemId"?: string;
        /**
         * The VAT due for one item in the invoice line, represented in minor units.
         */
        "openinvoicedataLine[itemNr].itemVatAmount"?: string;
        /**
         * The VAT percentage for one item in the invoice line, represented in minor units.
         *
         * For example, 19% VAT is specified as 1900.
         */
        "openinvoicedataLine[itemNr].itemVatPercentage"?: string;
        /**
         * The number of units purchased of a specific product.
         */
        "openinvoicedataLine[itemNr].numberOfItems"?: string;
        /**
         * Required for AfterPay. The country-specific VAT category a product falls under.
         *
         * Allowed values:
         * * High
         * * Low
         * * None.
         */
        "openinvoicedataLine[itemNr].vatCategory"?: string;
    }
    export interface AdditionalDataRatepay {
        /**
         * Amount the customer has to pay each month.
         */
        "ratepay.installmentAmount"?: string;
        /**
         * Interest rate of this installment.
         */
        "ratepay.interestRate"?: string;
        /**
         * Amount of the last installment.
         */
        "ratepay.lastInstallmentAmount"?: string;
        /**
         * Calendar day of the first payment.
         */
        "ratepay.paymentFirstday"?: string;
        /**
         * Date the merchant delivered the goods to the customer.
         */
        "ratepaydata.deliveryDate"?: string;
        /**
         * Date by which the customer must settle the payment.
         */
        "ratepaydata.dueDate"?: string;
        /**
         * Invoice date, defined by the merchant. If not included, the invoice date is set to the delivery date.
         */
        "ratepaydata.invoiceDate"?: string;
        /**
         * Identification name or number for the invoice, defined by the merchant.
         */
        "ratepaydata.invoiceId"?: string;
    }
    export interface AdditionalDataRetry {
        /**
         * The number of times the transaction (not order) has been retried between different payment service providers. For instance, the `chainAttemptNumber` set to 2 means that this transaction has been recently tried on another provider before being sent to Adyen.
         *
         * > If you submit `retry.chainAttemptNumber`, `retry.orderAttemptNumber`, and `retry.skipRetry` values, we also recommend you provide the `merchantOrderReference` to facilitate linking payment attempts together.
         */
        "retry.chainAttemptNumber"?: string;
        /**
         * The index of the attempt to bill a particular order, which is identified by the `merchantOrderReference` field. For example, if a recurring transaction fails and is retried one day later, then the order number for these attempts would be 1 and 2, respectively.
         *
         * > If you submit `retry.chainAttemptNumber`, `retry.orderAttemptNumber`, and `retry.skipRetry` values, we also recommend you provide the `merchantOrderReference` to facilitate linking payment attempts together.
         */
        "retry.orderAttemptNumber"?: string;
        /**
         * The Boolean value indicating whether Adyen should skip or retry this transaction, if possible.
         *
         * > If you submit `retry.chainAttemptNumber`, `retry.orderAttemptNumber`, and `retry.skipRetry` values, we also recommend you provide the `merchantOrderReference` to facilitate linking payment attempts together.
         */
        "retry.skipRetry"?: string;
    }
    export interface AdditionalDataRisk {
        /**
         * The data for your custom risk field. For more information, refer to [Create custom risk fields](https://docs.adyen.com/risk-management/configure-custom-risk-rules#step-1-create-custom-risk-fields).
         */
        "riskdata.[customFieldName]"?: string;
        /**
         * The price of item in the basket, represented in [minor units](https://docs.adyen.com/development-resources/currency-codes).
         */
        "riskdata.basket.item[itemNr].amountPerItem"?: string;
        /**
         * Brand of the item.
         */
        "riskdata.basket.item[itemNr].brand"?: string;
        /**
         * Category of the item.
         */
        "riskdata.basket.item[itemNr].category"?: string;
        /**
         * Color of the item.
         */
        "riskdata.basket.item[itemNr].color"?: string;
        /**
         * The three-character [ISO currency code](https://en.wikipedia.org/wiki/ISO_4217).
         */
        "riskdata.basket.item[itemNr].currency"?: string;
        /**
         * ID of the item.
         */
        "riskdata.basket.item[itemNr].itemID"?: string;
        /**
         * Manufacturer of the item.
         */
        "riskdata.basket.item[itemNr].manufacturer"?: string;
        /**
         * A text description of the product the invoice line refers to.
         */
        "riskdata.basket.item[itemNr].productTitle"?: string;
        /**
         * Quantity of the item purchased.
         */
        "riskdata.basket.item[itemNr].quantity"?: string;
        /**
         * Email associated with the given product in the basket (usually in electronic gift cards).
         */
        "riskdata.basket.item[itemNr].receiverEmail"?: string;
        /**
         * Size of the item.
         */
        "riskdata.basket.item[itemNr].size"?: string;
        /**
         * [Stock keeping unit](https://en.wikipedia.org/wiki/Stock_keeping_unit).
         */
        "riskdata.basket.item[itemNr].sku"?: string;
        /**
         * [Universal Product Code](https://en.wikipedia.org/wiki/Universal_Product_Code).
         */
        "riskdata.basket.item[itemNr].upc"?: string;
        /**
         * Code of the promotion.
         */
        "riskdata.promotions.promotion[itemNr].promotionCode"?: string;
        /**
         * The discount amount of the promotion, represented in [minor units](https://docs.adyen.com/development-resources/currency-codes).
         */
        "riskdata.promotions.promotion[itemNr].promotionDiscountAmount"?: string;
        /**
         * The three-character [ISO currency code](https://en.wikipedia.org/wiki/ISO_4217).
         */
        "riskdata.promotions.promotion[itemNr].promotionDiscountCurrency"?: string;
        /**
         * Promotion's percentage discount. It is represented in percentage value and there is no need to include the '%' sign.
         *
         * e.g. for a promotion discount of 30%, the value of the field should be 30.
         */
        "riskdata.promotions.promotion[itemNr].promotionDiscountPercentage"?: string;
        /**
         * Name of the promotion.
         */
        "riskdata.promotions.promotion[itemNr].promotionName"?: string;
    }
    export interface AdditionalDataRiskStandalone {
        /**
         * Shopper's country of residence in the form of ISO standard 3166 2-character country codes.
         */
        "PayPal.CountryCode"?: string;
        /**
         * Shopper's email.
         */
        "PayPal.EmailId"?: string;
        /**
         * Shopper's first name.
         */
        "PayPal.FirstName"?: string;
        /**
         * Shopper's last name.
         */
        "PayPal.LastName"?: string;
        /**
         * Unique PayPal Customer Account identification number. Character length and limitations: 13 single-byte alphanumeric characters.
         */
        "PayPal.PayerId"?: string;
        /**
         * Shopper's phone number.
         */
        "PayPal.Phone"?: string;
        /**
         * Allowed values:
         * * **Eligible** — Merchant is protected by PayPal's Seller Protection Policy for Unauthorized Payments and Item Not Received.
         *
         * * **PartiallyEligible** — Merchant is protected by PayPal's Seller Protection Policy for Item Not Received.
         *
         * * **Ineligible** — Merchant is not protected under the Seller Protection Policy.
         */
        "PayPal.ProtectionEligibility"?: string;
        /**
         * Unique transaction ID of the payment.
         */
        "PayPal.TransactionId"?: string;
        /**
         * Raw AVS result received from the acquirer, where available. Example: D
         */
        avsResultRaw?: string;
        /**
         * The Bank Identification Number of a credit card, which is the first six digits of a card number. Required for [tokenized card request](https://docs.adyen.com/risk-management/standalone-risk#tokenised-pan-request).
         */
        bin?: string;
        /**
         * Raw CVC result received from the acquirer, where available. Example: 1
         */
        cvcResultRaw?: string;
        /**
         * Unique identifier or token for the shopper's card details.
         */
        riskToken?: string;
        /**
         * A Boolean value indicating whether 3DS authentication was completed on this payment. Example: true
         */
        threeDAuthenticated?: string;
        /**
         * A Boolean value indicating whether 3DS was offered for this payment. Example: true
         */
        threeDOffered?: string;
        /**
         * Required for PayPal payments only. The only supported value is: **paypal**.
         */
        tokenDataType?: string;
    }
    export interface AdditionalDataTemporaryServices {
        /**
         * Customer code, if supplied by a customer.
         * * Encoding: ASCII
         * * maxLength: 25
         */
        "enhancedSchemeData.customerReference"?: string;
        /**
         * Name or ID associated with the individual working in a temporary capacity.
         * * maxLength: 40
         */
        "enhancedSchemeData.employeeName"?: string;
        /**
         * Description of the job or task of the individual working in a temporary capacity.
         * * maxLength: 40
         */
        "enhancedSchemeData.jobDescription"?: string;
        /**
         * Amount paid per regular hours worked, minor units.
         * * maxLength: 7
         */
        "enhancedSchemeData.regularHoursRate"?: string;
        /**
         * Amount of time worked during a normal operation for the task or job.
         * * maxLength: 7
         */
        "enhancedSchemeData.regularHoursWorked"?: string;
        /**
         * Name of the individual requesting temporary services.
         * * maxLength: 40
         */
        "enhancedSchemeData.requestName"?: string;
        /**
         * Date for the beginning of the pay period.
         * * Format: ddMMyy
         * * maxLength: 6
         */
        "enhancedSchemeData.tempStartDate"?: string;
        /**
         * Date of the end of the billing cycle.
         * * Format: ddMMyy
         * * maxLength: 6
         */
        "enhancedSchemeData.tempWeekEnding"?: string;
        /**
         * Total tax amount, in minor units. For example, 2000 means USD 20.00
         * * maxLength: 12
         */
        "enhancedSchemeData.totalTaxAmount"?: string;
    }
    export interface AdditionalDataWallets {
        /**
         * The Android Pay token retrieved from the SDK.
         */
        "androidpay.token"?: string;
        /**
         * The Mastercard Masterpass Transaction ID retrieved from the SDK.
         */
        "masterpass.transactionId"?: string;
        /**
         * The Apple Pay token retrieved from the SDK.
         */
        "payment.token"?: string;
        /**
         * The Google Pay token retrieved from the SDK.
         */
        "paywithgoogle.token"?: string;
        /**
         * The Samsung Pay token retrieved from the SDK.
         */
        "samsungpay.token"?: string;
        /**
         * The Visa Checkout Call ID retrieved from the SDK.
         */
        "visacheckout.callId"?: string;
    }
    export interface Address {
        /**
         * The name of the city.
         */
        city: string;
        /**
         * The two-character country code as defined in ISO-3166-1 alpha-2. For example, **US**.
         * > If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.
         */
        country: string;
        /**
         * The number or name of the house.
         */
        houseNumberOrName: string;
        /**
         * A maximum of five digits for an address in the US, or a maximum of ten characters for an address in all other countries.
         */
        postalCode: string;
        /**
         * State or province codes as defined in ISO 3166-2. For example, **CA** in the US or **ON** in Canada.
         * > Required for the US and Canada.
         */
        stateOrProvince?: string;
        /**
         * The name of the street.
         * > The house number should not be included in this field; it should be separately provided via `houseNumberOrName`.
         */
        street: string;
    }
    export interface AmazonPayDetails {
        amazonPayToken?: string;
        checkoutSessionId?: string;
        /**
         * **amazonpay**
         */
        type: string;
    }
    export interface Amount {
        /**
         * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).
         */
        currency: string;
        /**
         * The payable amount that can be charged for the transaction.
         *
         * The transaction amount needs to be represented in minor units according to the [following table](https://docs.adyen.com/development-resources/currency-codes).
         */
        value: number; // int64
    }
    export interface AndroidPayDetails {
        /**
         *
         */
        androidPayToken: string;
        /**
         * **androidpay**
         */
        type: string;
    }
    export interface ApplePayDetails {
        /**
         *
         */
        applePayToken: string;
        fundingSource?: "credit" | "debit";
        /**
         * This is the `recurringDetailReference` returned in the response when you created the token.
         */
        storedPaymentMethodId?: string;
        /**
         * **applepay**
         */
        type: string;
    }
    export interface ApplicationInfo {
        /**
         * Adyen-developed software, such as libraries and plugins, used to interact with the Adyen API. For example, Magento plugin, Java API library, etc.
         */
        adyenLibrary?: CommonField;
        /**
         * Adyen-developed software to get payment details. For example, Checkout SDK, Secured Fields SDK, etc.
         */
        adyenPaymentSource?: CommonField;
        /**
         * Third-party developed platform used to initiate payment requests. For example, Magento, Zuora, etc.
         */
        externalPlatform?: ExternalPlatform;
        /**
         * Merchant developed software, such as cashier application, used to interact with the Adyen API.
         */
        merchantApplication?: CommonField;
        /**
         * Merchant device information.
         */
        merchantDevice?: MerchantDevice;
        /**
         * Shopper interaction device, such as terminal, mobile device or web browser, to initiate payment requests.
         */
        shopperInteractionDevice?: ShopperInteractionDevice;
    }
    export interface Avs {
        /**
         * Indicates whether the shopper is allowed to modify the billing address for the current payment request.
         */
        addressEditable?: boolean;
        /**
         * Specifies whether the shopper should enter their billing address during checkout.
         *
         * Allowed values:
         * * yes — Perform AVS checks for every card payment.
         * * automatic — Perform AVS checks only when required to optimize the conversion rate.
         * * no — Do not perform AVS checks.
         */
        enabled?: "yes" | "no" | "automatic";
    }
    export interface BankAccount {
        /**
         * The bank account number (without separators).
         */
        bankAccountNumber?: string;
        /**
         * The bank city.
         */
        bankCity?: string;
        /**
         * The location id of the bank. The field value is `nil` in most cases.
         */
        bankLocationId?: string;
        /**
         * The name of the bank.
         */
        bankName?: string;
        /**
         * The [Business Identifier Code](https://en.wikipedia.org/wiki/ISO_9362) (BIC) is the SWIFT address assigned to a bank. The field value is `nil` in most cases.
         */
        bic?: string;
        /**
         * Country code where the bank is located.
         *
         * A valid value is an ISO two-character country code (e.g. 'NL').
         */
        countryCode?: string;
        /**
         * The [International Bank Account Number](https://en.wikipedia.org/wiki/International_Bank_Account_Number) (IBAN).
         */
        iban?: string;
        /**
         * The name of the bank account holder.
         * If you submit a name with non-Latin characters, we automatically replace some of them with corresponding Latin characters to meet the FATF recommendations. For example:
         * * χ12 is converted to ch12.
         * * üA is converted to euA.
         * * Peter Møller is converted to Peter Mller, because banks don't accept 'ø'.
         * After replacement, the ownerName must have at least three alphanumeric characters (A-Z, a-z, 0-9), and at least one of them must be a valid Latin character (A-Z, a-z). For example:
         * * John17 - allowed.
         * * J17 - allowed.
         * * 171 - not allowed.
         * * John-7 - allowed.
         * > If provided details don't match the required format, the response returns the error message: 203 'Invalid bank account holder name'.
         */
        ownerName?: string;
        /**
         * The bank account holder's tax ID.
         */
        taxId?: string;
    }
    export interface BillDeskOnlineDetails {
        /**
         * The issuer id of the shopper's selected bank.
         */
        issuer: string;
        /**
         * **billdesk_online**
         */
        type: string;
    }
    export interface BillDeskWalletDetails {
        /**
         * The issuer id of the shopper's selected bank.
         */
        issuer: string;
        /**
         * **billdesk_wallet**
         */
        type: string;
    }
    export interface BlikDetails {
        /**
         * BLIK code consisting of 6 digits.
         */
        blikCode?: string;
        /**
         * **blik**
         */
        type: string;
    }
    export interface BrowserInfo {
        /**
         * The accept header value of the shopper's browser.
         */
        acceptHeader: string;
        /**
         * The color depth of the shopper's browser in bits per pixel. This should be obtained by using the browser's `screen.colorDepth` property. Accepted values: 1, 4, 8, 15, 16, 24, 30, 32 or 48 bit color depth.
         */
        colorDepth: number; // int32
        /**
         * Boolean value indicating if the shopper's browser is able to execute Java.
         */
        javaEnabled: boolean;
        /**
         * Boolean value indicating if the shopper's browser is able to execute JavaScript. A default 'true' value is assumed if the field is not present.
         */
        javaScriptEnabled?: boolean;
        /**
         * The `navigator.language` value of the shopper's browser (as defined in IETF BCP 47).
         */
        language: string;
        /**
         * The total height of the shopper's device screen in pixels.
         */
        screenHeight: number; // int32
        /**
         * The total width of the shopper's device screen in pixels.
         */
        screenWidth: number; // int32
        /**
         * Time difference between UTC time and the shopper's browser local time, in minutes.
         */
        timeZoneOffset: number; // int32
        /**
         * The user agent value of the shopper's browser.
         */
        userAgent: string;
    }
    export interface Card {
        /**
         * The [card verification code](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-security-code-cvc-cvv-cid) (1-20 characters). Depending on the card brand, it is known also as:
         * * CVV2/CVC2 – length: 3 digits
         * * CID – length: 4 digits
         * > If you are using [Client-Side Encryption](https://docs.adyen.com/classic-integration/cse-integration-ecommerce), the CVC code is present in the encrypted data. You must never post the card details to the server.
         * > This field must be always present in a [one-click payment request](https://docs.adyen.com/classic-integration/recurring-payments).
         * > When this value is returned in a response, it is always empty because it is not stored.
         */
        cvc?: string;
        /**
         * The card expiry month.
         * Format: 2 digits, zero-padded for single digits. For example:
         * * 03 = March
         * * 11 = November
         */
        expiryMonth: string;
        /**
         * The card expiry year.
         * Format: 4 digits. For example: 2020
         */
        expiryYear: string;
        /**
         * The name of the cardholder, as printed on the card.
         */
        holderName: string;
        /**
         * The issue number of the card (for some UK debit cards only).
         */
        issueNumber?: string;
        /**
         * The card number (4-19 characters). Do not use any separators.
         * When this value is returned in a response, only the last 4 digits of the card number are returned.
         */
        number: string;
        /**
         * The month component of the start date (for some UK debit cards only).
         */
        startMonth?: string;
        /**
         * The year component of the start date (for some UK debit cards only).
         */
        startYear?: string;
    }
    export interface CardDetails {
        "cupsecureplus.smscode"?: string;
        cvc?: string;
        /**
         *
         */
        encryptedCardNumber: string;
        /**
         *
         */
        encryptedExpiryMonth: string;
        /**
         *
         */
        encryptedExpiryYear: string;
        expiryMonth?: string;
        expiryYear?: string;
        fundingSource?: "credit" | "debit";
        holderName?: string;
        number?: string;
        /**
         * This is the `recurringDetailReference` returned in the response when you created the token.
         */
        storedPaymentMethodId?: string;
        /**
         * **scheme**
         */
        type: string;
    }
    export interface CheckoutAwaitAction {
        /**
         * When non-empty, contains a value that you must submit to the `/payments/details` endpoint. In some cases, required for polling.
         */
        paymentData?: string;
        /**
         * Specifies the payment method.
         */
        paymentMethodType?: string;
        /**
         * Specifies the URL to redirect to.
         */
        url?: string;
    }
    export interface CheckoutBalanceCheckRequest {
        /**
         * Shopper account information for 3D Secure 2.
         * > For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.
         */
        accountInfo?: AccountInfo;
        /**
         * If you want a [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) request to use a non-zero value, assign this value to `additionalAmount` (while the amount must be still set to 0 to trigger BIN or card verification).
         * Required to be in the same currency as the `amount`.
         */
        additionalAmount?: Amount;
        /**
         * This field contains additional data, which may be required for a particular payment request.
         *
         * The `additionalData` object consists of entries, each of which includes the key and value.
         */
        additionalData?: /**
         * This field contains additional data, which may be required for a particular payment request.
         *
         * The `additionalData` object consists of entries, each of which includes the key and value.
         */
        AdditionalDataCommon | AdditionalData3DSecure | AdditionalDataAirline | AdditionalDataCarRental | AdditionalDataLevel23 | AdditionalDataLodging | AdditionalDataOpenInvoice | AdditionalDataRatepay | AdditionalDataRetry | AdditionalDataRisk | AdditionalDataRiskStandalone | AdditionalDataTemporaryServices | AdditionalDataWallets;
        /**
         * The amount information for the transaction (in [minor units](https://docs.adyen.com/development-resources/currency-codes)). For [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) requests, set amount to 0 (zero).
         */
        amount: Amount;
        /**
         * Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).
         */
        applicationInfo?: ApplicationInfo;
        /**
         * The address where to send the invoice.
         * > For 3D Secure 2 transactions, schemes require the `billingAddress` for both `deviceChannel` **browser** and **app**. Include all of the fields within this object.
         */
        billingAddress?: Address;
        /**
         * The shopper's browser information.
         * > For 3D Secure transactions, `browserInfo` is required for `channel` **web** (or `deviceChannel` **browser**).
         */
        browserInfo?: BrowserInfo;
        /**
         * The delay between the authorisation and scheduled auto-capture, specified in hours.
         */
        captureDelayHours?: number; // int32
        /**
         * The shopper's date of birth.
         *
         * Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD
         */
        dateOfBirth?: string; // date-time
        /**
         * The forex quote as returned in the response of the forex service.
         */
        dccQuote?: ForexQuote;
        /**
         * The address where the purchased goods should be delivered.
         */
        deliveryAddress?: Address;
        /**
         * The date and time the purchased goods should be delivered.
         *
         * Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD
         *
         * Example: 2017-07-17T13:42:40.428+01:00
         */
        deliveryDate?: string; // date-time
        /**
         * A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).
         */
        deviceFingerprint?: string;
        /**
         * Choose if a specific transaction should use the Real-time Account Updater, regardless of other settings.
         */
        enableRealTimeUpdate?: boolean;
        /**
         * An integer value that is added to the normal fraud score. The value can be either positive or negative.
         */
        fraudOffset?: number; // int32
        /**
         * Contains installment settings. For more information, refer to [Installments](https://docs.adyen.com/payment-methods/cards/credit-card-installments).
         */
        installments?: Installments;
        /**
         * The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.
         */
        mcc?: string;
        /**
         * The merchant account identifier, with which you want to process the transaction.
         */
        merchantAccount: string;
        /**
         * This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle.
         * The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations.
         * > We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`.
         */
        merchantOrderReference?: string;
        /**
         * Additional risk fields for 3D Secure 2.
         * > For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.
         */
        merchantRiskIndicator?: MerchantRiskIndicator;
        /**
         * Metadata consists of entries, each of which includes a key and a value.
         * Limitations: Maximum 20 key-value pairs per request. When exceeding, the "177" error occurs: "Metadata size exceeds limit".
         */
        metadata?: {
            [name: string]: string;
        };
        /**
         * When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead.
         */
        orderReference?: string;
        /**
         * The collection that contains the type of the payment method and its specific information.
         */
        paymentMethod: {
            [name: string]: string;
        };
        /**
         * The recurring settings for the payment. Use this property when you want to enable [recurring payments](https://docs.adyen.com/classic-integration/recurring-payments).
         */
        recurring?: Recurring;
        /**
         * Defines a recurring payment type.
         * Allowed values:
         * * `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.
         * * `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.
         * * `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.
         *
         */
        recurringProcessingModel?: "CardOnFile" | "Subscription" | "UnscheduledCardOnFile";
        /**
         * The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.
         * If you need to provide multiple references for a transaction, separate them with hyphens ("-").
         * Maximum length: 80 characters.
         */
        reference: string;
        /**
         * Some payment methods require defining a value for this field to specify how to process the transaction.
         *
         * For the Bancontact payment method, it can be set to:
         * * `maestro` (default), to be processed like a Maestro card, or
         * * `bcmc`, to be processed like a Bancontact card.
         */
        selectedBrand?: string;
        /**
         * The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used to select the most recently stored recurring detail.
         */
        selectedRecurringDetailReference?: string;
        /**
         * A session ID used to identify a payment session.
         */
        sessionId?: string;
        /**
         * The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks.
         * > For 3D Secure 2 transactions, schemes require the `shopperEmail` for both `deviceChannel` **browser** and **app**.
         */
        shopperEmail?: string;
        /**
         * The shopper's IP address. In general, we recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).
         * > Required for 3D Secure 2 transactions. This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://support.adyen.com/hc/en-us/requests/new).
         */
        shopperIP?: string;
        /**
         * Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.
         * For the web service API, Adyen assumes Ecommerce shopper interaction by default.
         *
         * This field has the following possible values:
         * * `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.
         * * `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).
         * * `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.
         * * `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.
         */
        shopperInteraction?: "Ecommerce" | "ContAuth" | "Moto" | "POS";
        /**
         * The combination of a language code and a country code to specify the language to be used in the payment.
         */
        shopperLocale?: string;
        /**
         * The shopper's full name and gender (if specified).
         */
        shopperName?: Name;
        /**
         * The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID).
         * > This field is required for recurring payments.
         */
        shopperReference?: string;
        /**
         * The text to be shown on the shopper's bank statement. To enable this field, contact our [Support Team](https://support.adyen.com/hc/en-us/requests/new).
         *  We recommend sending a maximum of 25 characters, otherwise banks might truncate the string.
         */
        shopperStatement?: string;
        /**
         * The shopper's social security number.
         */
        socialSecurityNumber?: string;
        /**
         * Information on how the payment should be split between accounts when using [Adyen for Platforms](https://docs.adyen.com/platforms/processing-payments#providing-split-information).
         */
        splits?: Split[];
        /**
         * The physical store, for which this payment is processed.
         */
        store?: string;
        /**
         * The shopper's telephone number.
         */
        telephoneNumber?: string;
        /**
         * Request fields for 3D Secure 2.
         */
        threeDS2RequestData?: ThreeDS2RequestData;
        /**
         * If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/checkout/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation.
         */
        threeDSAuthenticationOnly?: boolean;
        /**
         * The reference value to aggregate sales totals in reporting. When not specified, the store field is used (if available).
         */
        totalsGroup?: string;
        /**
         * Set to true if the payment should be routed to a trusted MID.
         */
        trustedShopper?: boolean;
    }
    export interface CheckoutBalanceCheckResponse {
        /**
         * This field contains additional data, which may be required to return in a particular payment response. To choose data fields to be returned, go to **Customer Area** > **Account** > **API URLs** > **Additional data settings**.
         */
        additionalData?: /* This field contains additional data, which may be required to return in a particular payment response. To choose data fields to be returned, go to **Customer Area** > **Account** > **API URLs** > **Additional data settings**. */ ResponseAdditionalDataCommon | ResponseAdditionalDataBillingAddress | ResponseAdditionalDataCard | ResponseAdditionalDataDeliveryAddress | ResponseAdditionalDataInstallments | ResponseAdditionalDataNetworkTokens | ResponseAdditionalDataPayPal | ResponseAdditionalDataSepa;
        /**
         * The balance for the payment method.
         */
        balance: Amount;
        /**
         * The fraud result properties of the payment.
         */
        fraudResult?: FraudResult;
        /**
         * Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.
         *
         * > `pspReference` is returned only for non-redirect payment methods.
         */
        pspReference?: string;
        /**
         * If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.
         *
         * For more information, see [Refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons).
         */
        refusalReason?: string;
        /**
         * The result of the payment. For more information, see [Result codes](https://docs.adyen.com/checkout/payment-result-codes).
         *
         * Possible values:
         *
         * * **AuthenticationFinished** – The payment has been successfully authenticated with 3D Secure 2. Returned for 3D Secure 2 authentication-only transactions.
         * * **Authorised** – The payment was successfully authorised. This state serves as an indicator to proceed with the delivery of goods and services. This is a final state.
         * * **Cancelled** – Indicates the payment has been cancelled (either by the shopper or the merchant) before processing was completed. This is a final state.
         * * **ChallengeShopper** – The issuer requires further shopper interaction before the payment can be authenticated. Returned for 3D Secure 2 transactions.
         * * **Error** – There was an error when the payment was being processed. The reason is given in the `refusalReason` field. This is a final state.
         * * **IdentifyShopper** – The issuer requires the shopper's device fingerprint before the payment can be authenticated. Returned for 3D Secure 2 transactions.
         * * **Pending** – Indicates that it is not possible to obtain the final status of the payment. This can happen if the systems providing final status information for the payment are unavailable, or if the shopper needs to take further action to complete the payment.
         * * **PresentToShopper** – Indicates that the response contains additional information that you need to present to a shopper, so that they can use it to complete a payment.
         * * **Received** – Indicates the payment has successfully been received by Adyen, and will be processed. This is the initial state for all payments.
         * * **RedirectShopper** – Indicates the shopper should be redirected to an external web page or app to complete the authorisation.
         * * **Refused** – Indicates the payment was refused. The reason is given in the `refusalReason` field. This is a final state.
         */
        resultCode?: "AuthenticationFinished" | "Authorised" | "Cancelled" | "ChallengeShopper" | "Error" | "IdentifyShopper" | "Pending" | "PresentToShopper" | "Received" | "RedirectShopper" | "Refused";
    }
    export interface CheckoutCancelOrderRequest {
        /**
         * The merchant account identifier that orderData belongs to.
         */
        merchantAccount: string;
        /**
         * The order request object that contains a pspReference that represents the order and the matching encrypted order data.
         */
        order: CheckoutOrder;
    }
    export interface CheckoutCancelOrderResponse {
        /**
         * A unique reference of the cancellation request.
         */
        pspReference: string;
        /**
         * The result of the cancellation request.
         */
        resultCode: string;
    }
    export interface CheckoutCreateOrderRequest {
        /**
         * The total amount of the order.
         */
        amount: Amount;
        /**
         * The date that order expires; e.g. 2019-03-23T12:25:28Z. If not provided, the default expiry duration is 1 day.
         */
        expiresAt?: string;
        /**
         * The merchant account identifier, with which you want to process the order.
         */
        merchantAccount: string;
        /**
         * A custom reference identifying the order.
         */
        reference?: string;
    }
    export interface CheckoutCreateOrderResponse {
        /**
         * This field contains additional data, which may be required to return in a particular payment response. To choose data fields to be returned, go to **Customer Area** > **Account** > **API URLs** > **Additional data settings**.
         */
        additionalData?: /* This field contains additional data, which may be required to return in a particular payment response. To choose data fields to be returned, go to **Customer Area** > **Account** > **API URLs** > **Additional data settings**. */ ResponseAdditionalDataCommon | ResponseAdditionalDataBillingAddress | ResponseAdditionalDataCard | ResponseAdditionalDataDeliveryAddress | ResponseAdditionalDataInstallments | ResponseAdditionalDataNetworkTokens | ResponseAdditionalDataPayPal | ResponseAdditionalDataSepa;
        /**
         * The date that the order will expire.
         */
        expiresAt: string;
        /**
         * The fraud result properties of the payment.
         */
        fraudResult?: FraudResult;
        /**
         * The encrypted data that will be used by merchant for adding payments to the order.
         */
        orderData: string;
        /**
         * Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.
         *
         * > `pspReference` is returned only for non-redirect payment methods.
         */
        pspReference?: string;
        /**
         * If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.
         *
         * For more information, see [Refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons).
         */
        refusalReason?: string;
        /**
         * The remaining amount in the order.
         */
        remainingAmount: Amount;
        /**
         * The result of the payment. For more information, see [Result codes](https://docs.adyen.com/checkout/payment-result-codes).
         *
         * Possible values:
         *
         * * **AuthenticationFinished** – The payment has been successfully authenticated with 3D Secure 2. Returned for 3D Secure 2 authentication-only transactions.
         * * **Authorised** – The payment was successfully authorised. This state serves as an indicator to proceed with the delivery of goods and services. This is a final state.
         * * **Cancelled** – Indicates the payment has been cancelled (either by the shopper or the merchant) before processing was completed. This is a final state.
         * * **ChallengeShopper** – The issuer requires further shopper interaction before the payment can be authenticated. Returned for 3D Secure 2 transactions.
         * * **Error** – There was an error when the payment was being processed. The reason is given in the `refusalReason` field. This is a final state.
         * * **IdentifyShopper** – The issuer requires the shopper's device fingerprint before the payment can be authenticated. Returned for 3D Secure 2 transactions.
         * * **Pending** – Indicates that it is not possible to obtain the final status of the payment. This can happen if the systems providing final status information for the payment are unavailable, or if the shopper needs to take further action to complete the payment.
         * * **PresentToShopper** – Indicates that the response contains additional information that you need to present to a shopper, so that they can use it to complete a payment.
         * * **Received** – Indicates the payment has successfully been received by Adyen, and will be processed. This is the initial state for all payments.
         * * **RedirectShopper** – Indicates the shopper should be redirected to an external web page or app to complete the authorisation.
         * * **Refused** – Indicates the payment was refused. The reason is given in the `refusalReason` field. This is a final state.
         */
        resultCode?: "AuthenticationFinished" | "Authorised" | "Cancelled" | "ChallengeShopper" | "Error" | "IdentifyShopper" | "Pending" | "PresentToShopper" | "Received" | "RedirectShopper" | "Refused";
    }
    export interface CheckoutDonationAction {
        /**
         * When non-empty, contains a value that you must submit to the `/payments/details` endpoint. In some cases, required for polling.
         */
        paymentData?: string;
        /**
         * Specifies the payment method.
         */
        paymentMethodType?: string;
        /**
         * Specifies the URL to redirect to.
         */
        url?: string;
    }
    export interface CheckoutOneTimePasscodeAction {
        /**
         * When non-empty, contains a value that you must submit to the `/payments/details` endpoint. In some cases, required for polling.
         */
        paymentData?: string;
        /**
         * Specifies the payment method.
         */
        paymentMethodType?: string;
        /**
         * When the payment flow requires a redirect as fallback, this object contains information about the redirect.
         */
        redirect?: Redirect;
        /**
         * The interval in second between OTP resend.
         */
        resendInterval?: number; // int32
        /**
         * The maximum number of OTP resend attempts.
         */
        resendMaxAttempts?: number; // int32
        /**
         * The URL, to which you make POST request to trigger OTP resend.
         */
        resendUrl?: string;
        /**
         * Specifies the URL to redirect to.
         */
        url?: string;
    }
    export interface CheckoutOrder {
        /**
         * The encrypted order data.
         */
        orderData: string;
        /**
         * The `pspReference` that belongs to the order.
         */
        pspReference: string;
    }
    export interface CheckoutOrderResponse {
        /**
         * The expiry date for the order.
         */
        expiresAt?: string;
        /**
         * The encrypted order data.
         */
        orderData?: string;
        /**
         * The `pspReference` that belongs to the order.
         */
        pspReference: string;
        /**
         * The merchant reference for the order.
         */
        reference?: string;
        /**
         * The updated remaining amount.
         */
        remainingAmount?: Amount;
    }
    export interface CheckoutQrCodeAction {
        /**
         * When non-empty, contains a value that you must submit to the `/payments/details` endpoint. In some cases, required for polling.
         */
        paymentData?: string;
        /**
         * Specifies the payment method.
         */
        paymentMethodType?: string;
        /**
         * The contents of the QR code as a UTF8 string.
         */
        qrCodeData?: string;
        /**
         * Specifies the URL to redirect to.
         */
        url?: string;
    }
    export interface CheckoutRedirectAction {
        /**
         * When the redirect URL must be accessed via POST, use this data to post to the redirect URL.
         */
        data?: {
            [name: string]: string;
        };
        /**
         * Specifies the HTTP method, for example GET or POST.
         */
        method?: string;
        /**
         * When non-empty, contains a value that you must submit to the `/payments/details` endpoint. In some cases, required for polling.
         */
        paymentData?: string;
        /**
         * Specifies the payment method.
         */
        paymentMethodType?: string;
        /**
         * Specifies the URL to redirect to.
         */
        url?: string;
    }
    export interface CheckoutSDKAction {
        /**
         * When non-empty, contains a value that you must submit to the `/payments/details` endpoint. In some cases, required for polling.
         */
        paymentData?: string;
        /**
         * Specifies the payment method.
         */
        paymentMethodType?: string;
        /**
         * The data to pass to the SDK.
         */
        sdkData?: {
            [name: string]: string;
        };
        /**
         * Specifies the URL to redirect to.
         */
        url?: string;
    }
    export interface CheckoutThreeDS2ChallengeAction {
        /**
         * When non-empty, contains a value that you must submit to the `/payments/details` endpoint. In some cases, required for polling.
         */
        paymentData?: string;
        /**
         * Specifies the payment method.
         */
        paymentMethodType?: string;
        /**
         * A token to pass to the 3DS2 Component to get the challenge.
         */
        token?: string;
        /**
         * Specifies the URL to redirect to.
         */
        url?: string;
    }
    export interface CheckoutThreeDS2FingerPrintAction {
        /**
         * When non-empty, contains a value that you must submit to the `/payments/details` endpoint. In some cases, required for polling.
         */
        paymentData?: string;
        /**
         * Specifies the payment method.
         */
        paymentMethodType?: string;
        /**
         * A token to pass to the 3DS2 Component to get the fingerprint.
         */
        token?: string;
        /**
         * Specifies the URL to redirect to.
         */
        url?: string;
    }
    export interface CheckoutUtilityRequest {
        /**
         * The list of origin domains, for which origin keys are requested.
         */
        originDomains: string[];
    }
    export interface CheckoutUtilityResponse {
        /**
         * The list of origin keys for all requested domains. For each list item, the key is the domain and the value is the origin key.
         */
        originKeys?: {
            [name: string]: string;
        };
    }
    export interface CheckoutVoucherAction {
        /**
         * The voucher alternative reference code.
         */
        alternativeReference?: string;
        /**
         * A collection institution number (store number) for Econtext Pay-Easy ATM.
         */
        collectionInstitutionNumber?: string;
        /**
         * The URL to download the voucher.
         */
        downloadUrl?: string;
        /**
         * An entity number of Multibanco.
         */
        entity?: string;
        /**
         * The date time of the voucher expiry.
         */
        expiresAt?: string;
        /**
         * The initial amount.
         */
        initialAmount?: Amount;
        /**
         * The URL to the detailed instructions to make payment using the voucher.
         */
        instructionsUrl?: string;
        /**
         * The issuer of the voucher.
         */
        issuer?: string;
        /**
         * The shopper telephone number (partially masked).
         */
        maskedTelephoneNumber?: string;
        /**
         * The merchant name.
         */
        merchantName?: string;
        /**
         * The merchant reference.
         */
        merchantReference?: string;
        /**
         * When non-empty, contains a value that you must submit to the `/payments/details` endpoint. In some cases, required for polling.
         */
        paymentData?: string;
        /**
         * Specifies the payment method.
         */
        paymentMethodType?: string;
        /**
         * The voucher reference code.
         */
        reference?: string;
        /**
         * The shopper email.
         */
        shopperEmail?: string;
        /**
         * The shopper name.
         */
        shopperName?: string;
        /**
         * The surcharge amount.
         */
        surcharge?: Amount;
        /**
         * The total amount (initial plus surcharge amount).
         */
        totalAmount?: Amount;
        /**
         * Specifies the URL to redirect to.
         */
        url?: string;
    }
    export interface CommonField {
        /**
         * Name of the field. For example, Name of External Platform.
         */
        name?: string;
        /**
         * Version of the field. For example, Version of External Platform.
         */
        version?: string;
    }
    export interface Company {
        /**
         * The company website's home page.
         */
        homepage?: string;
        /**
         * The company name.
         */
        name?: string;
        /**
         * Registration number of the company.
         */
        registrationNumber?: string;
        /**
         * Registry location of the company.
         */
        registryLocation?: string;
        /**
         * Tax ID of the company.
         */
        taxId?: string;
        /**
         * The company type.
         */
        type?: string;
    }
    export interface Configuration {
        /**
         * Describes the configuration for AVS ([Address Verification System](https://en.wikipedia.org/wiki/Address_Verification_System)).
         */
        avs?: Avs;
        /**
         * Determines whether the cardholder name should be provided or not.
         *
         * Permitted values:
         * * NONE
         * * OPTIONAL
         * * REQUIRED
         */
        cardHolderName?: "NONE" | "OPTIONAL" | "REQUIRED";
        /**
         * Describes the configuration for [installment payments](https://docs.adyen.com/payment-methods/cards/credit-card-installments).
         */
        installments?: Installments;
        /**
         * Determines how to display the details fields.
         */
        shopperInput?: ShopperInput;
    }
    export interface CreatePaymentLinkRequest {
        /**
         * List of payments methods to be presented to the shopper. To refer to payment methods, use their `paymentMethod.type` from [Payment methods overview](https://docs.adyen.com/payment-methods).
         *
         * Example: `"allowedPaymentMethods":["ideal","giropay"]`
         */
        allowedPaymentMethods?: string[];
        /**
         * The payment amount and currency.
         */
        amount: Amount;
        /**
         * Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).
         */
        applicationInfo?: ApplicationInfo;
        /**
         * The address where to send the invoice.
         */
        billingAddress?: Address;
        /**
         * List of payments methods to be hidden from the shopper. To refer to payment methods, use their `paymentMethod.type` from [Payment methods overview](https://docs.adyen.com/payment-methods).
         *
         * Example: `"blockedPaymentMethods":["ideal","giropay"]`
         */
        blockedPaymentMethods?: string[];
        /**
         * The shopper's two-letter country code.
         */
        countryCode?: string;
        /**
         * The address where the purchased goods should be delivered.
         */
        deliveryAddress?: Address;
        /**
         * A short description visible on the payment page.
         * Maximum length: 280 characters.
         */
        description?: string;
        /**
         * The date that the payment link expires, in ISO 8601 format. For example `2019-11-23T12:25:28Z`, or `2020-05-27T20:25:28+08:00`. Maximum expiry date should be 30 days from when the payment link is created. If not provided, the default expiry is set to 24 hours after the payment link is created.
         */
        expiresAt?: string;
        /**
         * Price and product information about the purchased items, to be included on the invoice sent to the shopper.
         * This parameter is required for open invoice (_buy now, pay later_) payment methods such AfterPay, Klarna, RatePay, and Zip.
         */
        lineItems?: LineItem[];
        /**
         * The merchant account identifier for which the payment link is created.
         */
        merchantAccount: string;
        /**
         * This reference allows linking multiple transactions to each other for reporting purposes (for example, order auth-rate). The reference should be unique per billing cycle.
         */
        merchantOrderReference?: string;
        /**
         * Metadata consists of entries, each of which includes a key and a value.
         * Limitations:
         * * Maximum 20 key-value pairs per request. When exceeding, the "177" error occurs: "Metadata size exceeds limit"
         * * Maximum 20 characters per key. When exceeding, the "178" error occurs: "Metadata key size exceeds limit"
         * * A key cannot have the name `checkout.linkId`. Whatever value is present under that key is going to be replaced by the real link id
         */
        metadata?: {
            [name: string]: string;
        };
        /**
         * Defines a recurring payment type.
         * Allowed values:
         * * `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.
         * * `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.
         * * `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or has variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.
         *
         */
        recurringProcessingModel?: "CardOnFile" | "Subscription" | "UnscheduledCardOnFile";
        /**
         * A reference that is used to uniquely identify the payment in future communications about the payment status.
         */
        reference: string;
        /**
         * Website URL used for redirection after payment is completed.
         * If provided, a **Continue** button will be shown on the payment page. If shoppers select the button, they are redirected to the specified URL.
         */
        returnUrl?: string;
        /**
         * Indicates whether the payment link can be reused for multiple payments. If not provided, this defaults to **false** which means the link can be used for one successful payment only.
         */
        reusable?: boolean;
        /**
         * The shopper's email address.
         */
        shopperEmail?: string;
        /**
         * The language to be used in the payment page, specified by a combination of a language and country code. For example, `en-US`.
         *
         * For a list of shopper locales that Pay by Link supports, refer to [Language and localization](https://docs.adyen.com/checkout/pay-by-link#language-and-localization).
         */
        shopperLocale?: string;
        /**
         * The shopper's full name. This object is required for some payment methods such as AfterPay, Klarna, or if you're enrolled in the PayPal Seller Protection program.
         */
        shopperName?: Name;
        /**
         * A unique identifier for the shopper (for example, user ID or account ID).
         */
        shopperReference?: string;
        /**
         * Information on how the payment should be split between accounts when using [Adyen for Platforms](https://docs.adyen.com/platforms/processing-payments#providing-split-information).
         */
        splits?: Split[];
        /**
         * The physical store, for which this payment is processed.
         */
        store?: string;
        /**
         * When this is set to **true** and the `shopperReference` is provided, the payment details will be stored.
         */
        storePaymentMethod?: boolean;
    }
    export interface DetailsRequest {
        /**
         * Use this collection to submit the details that were returned as a result of the `/payments` call.
         */
        details: PaymentCompletionDetails;
        /**
         * The `paymentData` value that you received in the response to the `/payments` call.
         */
        paymentData?: string;
        /**
         * Change the `authenticationOnly` indicator originally set in the `/payments` request. Only needs to be set if you want to modify the value set previously.
         */
        threeDSAuthenticationOnly?: boolean;
    }
    export interface DeviceRenderOptions {
        /**
         * Supported SDK interface types.
         * Allowed values:
         * * native
         * * html
         * * both
         */
        sdkInterface?: "native" | "html" | "both";
        /**
         * UI types supported for displaying specific challenges.
         * Allowed values:
         * * text
         * * singleSelect
         * * outOfBand
         * * otherHtml
         * * multiSelect
         */
        sdkUiType?: ("multiSelect" | "otherHtml" | "outOfBand" | "singleSelect" | "text")[];
    }
    export interface DokuDetails {
        /**
         * The shopper's first name.
         */
        firstName: string;
        infix?: string;
        /**
         * The shopper's last name.
         */
        lastName: string;
        ovoId?: string;
        /**
         * The shopper's email.
         */
        shopperEmail: string;
        /**
         * **doku**
         */
        type: "doku_mandiri_va" | "doku_cimb_va" | "doku_danamon_va" | "doku_bni_va" | "doku_permata_lite_atm" | "doku_bri_va" | "doku_bca_va" | "doku_alfamart" | "doku_indomaret";
    }
    export interface DotpayDetails {
        /**
         * The Dotpay issuer value of the shopper's selected bank. Set this to an **id** of a Dotpay issuer to preselect it.
         */
        issuer: string;
        /**
         * **dotpay**
         */
        type: string;
    }
    export interface DragonpayDetails {
        /**
         * The Dragonpay issuer value of the shopper's selected bank. Set this to an **id** of a Dragonpay issuer to preselect it.
         */
        issuer: string;
        /**
         * The shopper’s email address.
         */
        shopperEmail?: string;
        /**
         * **dragonpay**
         */
        type: "dragonpay_ebanking" | "dragonpay_otc_banking" | "dragonpay_otc_non_banking" | "dragonpay_otc_philippines";
    }
    export interface EcontextVoucherDetails {
        /**
         * The shopper's first name.
         */
        firstName: string;
        /**
         * The shopper's last name.
         */
        lastName: string;
        /**
         * The shopper's email.
         */
        shopperEmail: string;
        /**
         * The shopper's contact number.
         */
        telephoneNumber: string;
        /**
         * **econtextvoucher**
         */
        type: "econtext_seveneleven" | "econtext_stores";
    }
    export interface EntercashDetails {
        /**
         * The issuer id of the shopper's selected bank.
         */
        issuer: string;
        /**
         * **entercash**
         */
        type: string;
    }
    export interface ExternalPlatform {
        /**
         * External platform integrator.
         */
        integrator?: string;
        /**
         * Name of the field. For example, Name of External Platform.
         */
        name?: string;
        /**
         * Version of the field. For example, Version of External Platform.
         */
        version?: string;
    }
    export interface ForexQuote {
        /**
         * The account name.
         */
        account?: string;
        /**
         * The account type.
         */
        accountType?: string;
        /**
         * The base amount.
         */
        baseAmount?: Amount;
        /**
         * The base points.
         */
        basePoints: number; // int32
        /**
         * The buy rate.
         */
        buy?: Amount;
        /**
         * The interbank amount.
         */
        interbank?: Amount;
        /**
         * The reference assigned to the forex quote request.
         */
        reference?: string;
        /**
         * The sell rate.
         */
        sell?: Amount;
        /**
         * The signature to validate the integrity.
         */
        signature?: string;
        /**
         * The source of the forex quote.
         */
        source?: string;
        /**
         * The type of forex.
         */
        type?: string;
        /**
         * The date until which the forex quote is valid.
         */
        validTill: string; // date-time
    }
    export interface FraudCheckResult {
        /**
         * The fraud score generated by the risk check.
         */
        accountScore: number; // int32
        /**
         * The ID of the risk check.
         */
        checkId: number; // int32
        /**
         * The name of the risk check.
         */
        name: string;
    }
    export interface FraudResult {
        /**
         * The total fraud score generated by the risk checks.
         */
        accountScore: number; // int32
        /**
         * The result of the individual risk checks.
         */
        results?: FraudCheckResult[];
    }
    export interface GiropayDetails {
        /**
         * This is the `recurringDetailReference` returned in the response when you created the token.
         */
        storedPaymentMethodId?: string;
        /**
         * **giropay**
         */
        type: string;
    }
    export interface GooglePayDetails {
        fundingSource?: "credit" | "debit";
        /**
         *
         */
        googlePayCardNetwork: string;
        /**
         *
         */
        googlePayToken: string;
        /**
         * This is the `recurringDetailReference` returned in the response when you created the token.
         */
        storedPaymentMethodId?: string;
        /**
         * **paywithgoogle**
         */
        type: string;
    }
    export interface IdealDetails {
        /**
         * The iDEAL issuer value of the shopper's selected bank. Set this to an **id** of an iDEAL issuer to preselect it.
         */
        issuer: string;
        /**
         * This is the `recurringDetailReference` returned in the response when you created the token.
         */
        storedPaymentMethodId?: string;
        /**
         * **ideal**
         */
        type: string;
    }
    export interface InputDetail {
        /**
         * Configuration parameters for the required input.
         */
        configuration?: {
            [name: string]: string;
        };
        /**
         * Input details can also be provided recursively.
         */
        details?: SubInputDetail[];
        /**
         * Input details can also be provided recursively (deprecated).
         */
        inputDetails?: SubInputDetail[];
        /**
         * In case of a select, the URL from which to query the items.
         */
        itemSearchUrl?: string;
        /**
         * In case of a select, the items to choose from.
         */
        items?: Item[];
        /**
         * The value to provide in the result.
         */
        key?: string;
        /**
         * True if this input value is optional.
         */
        optional?: boolean;
        /**
         * The type of the required input.
         */
        type?: string;
        /**
         * The value can be pre-filled, if available.
         */
        value?: string;
    }
    export interface Installments {
        /**
         * Defines the type of installment plan. If not set, defaults to **regular**.
         *
         * Possible values:
         * * **regular**
         * * **revolving**
         */
        plan?: "regular" | "revolving";
        /**
         * Defines the number of installments. Its value needs to be greater than zero.
         *
         * Usually, the maximum allowed number of installments is capped. For example, it may not be possible to split a payment in more than 24 installments. The acquirer sets this upper limit, so its value may vary.
         */
        value: number; // int32
    }
    export interface Item {
        /**
         * The value to provide in the result.
         */
        id?: string;
        /**
         * The display name.
         */
        name?: string;
    }
    export interface KlarnaDetails {
        bankAccount?: string;
        billingAddress?: string;
        deliveryAddress?: string;
        installmentConfigurationKey?: string;
        personalDetails?: string;
        separateDeliveryAddress?: string;
        /**
         * This is the `recurringDetailReference` returned in the response when you created the token.
         */
        storedPaymentMethodId?: string;
        token?: string;
        /**
         * **klarna**
         */
        type: "klarna" | "klarnapayments" | "klarnapayments_account" | "klarnapayments_b2b" | "klarna_paynow" | "klarna_account" | "klarna_b2b";
    }
    export interface LianLianPayDetails {
        /**
         *
         */
        telephoneNumber: string;
        /**
         * **lianlianpay**
         */
        type: "lianlianpay_ebanking_enterprise" | "lianlianpay_ebanking_credit" | "lianlianpay_ebanking_debit";
    }
    export interface LineItem {
        /**
         * Item amount excluding the tax, in minor units.
         */
        amountExcludingTax?: number; // int64
        /**
         * Item amount including the tax, in minor units.
         */
        amountIncludingTax?: number; // int64
        /**
         * Description of the line item.
         */
        description?: string;
        /**
         * ID of the line item.
         */
        id?: string;
        /**
         * Number of items.
         */
        quantity?: number; // int64
        /**
         * Tax amount, in minor units.
         */
        taxAmount?: number; // int64
        /**
         * Required for AfterPay. Tax category: High, Low, None, Zero
         */
        taxCategory?: "High" | "Low" | "None" | "Zero";
        /**
         * Tax percentage, in minor units.
         */
        taxPercentage?: number; // int64
    }
    export interface MasterpassDetails {
        fundingSource?: "credit" | "debit";
        /**
         * The Masterpass transaction ID.
         */
        masterpassTransactionId: string;
        /**
         * **masterpass**
         */
        type: string;
    }
    export interface MbwayDetails {
        /**
         *
         */
        shopperEmail: string;
        /**
         *
         */
        telephoneNumber: string;
        /**
         * **mbway**
         */
        type: string;
    }
    export interface MerchantDevice {
        /**
         * Operating system running on the merchant device.
         */
        os?: string;
        /**
         * Version of the operating system on the merchant device.
         */
        osVersion?: string;
        /**
         * Merchant device reference.
         */
        reference?: string;
    }
    export interface MerchantRiskIndicator {
        /**
         * Whether the chosen delivery address is identical to the billing address.
         */
        addressMatch?: boolean;
        /**
         * Indicator regarding the delivery address.
         * Allowed values:
         * * `shipToBillingAddress`
         * * `shipToVerifiedAddress`
         * * `shipToNewAddress`
         * * `shipToStore`
         * * `digitalGoods`
         * * `goodsNotShipped`
         * * `other`
         */
        deliveryAddressIndicator?: "shipToBillingAddress" | "shipToVerifiedAddress" | "shipToNewAddress" | "shipToStore" | "digitalGoods" | "goodsNotShipped" | "other";
        /**
         * The delivery email address (for digital goods).
         */
        deliveryEmail?: string;
        /**
         * The estimated delivery time for the shopper to receive the goods.
         * Allowed values:
         * * `electronicDelivery`
         * * `sameDayShipping`
         * * `overnightShipping`
         * * `twoOrMoreDaysShipping`
         */
        deliveryTimeframe?: "electronicDelivery" | "sameDayShipping" | "overnightShipping" | "twoOrMoreDaysShipping";
        /**
         * For prepaid or gift card purchase, the purchase amount total of prepaid or gift card(s).
         */
        giftCardAmount?: Amount;
        /**
         * For prepaid or gift card purchase, total count of individual prepaid or gift cards/codes purchased.
         */
        giftCardCount?: number; // int32
        /**
         * For pre-order purchases, the expected date this product will be available to the shopper.
         */
        preOrderDate?: string; // date-time
        /**
         * Indicator for whether this transaction is for pre-ordering a product.
         */
        preOrderPurchase?: boolean;
        /**
         * Indicator for whether the shopper has already purchased the same items in the past.
         */
        reorderItems?: boolean;
    }
    export interface MobilePayDetails {
        /**
         * **mobilepay**
         */
        type: string;
    }
    export interface MolPayDetails {
        /**
         *
         */
        issuer: string;
        /**
         * **molpay**
         */
        type: "molpay_ebanking_fpx_MY" | "molpay_ebanking_TH";
    }
    export interface Name {
        /**
         * The first name.
         */
        firstName: string;
        /**
         * The gender.
         * >The following values are permitted: `MALE`, `FEMALE`, `UNKNOWN`.
         */
        gender: "MALE" | "FEMALE" | "UNKNOWN";
        /**
         * The name's infix, if applicable.
         * >A maximum length of twenty (20) characters is imposed.
         */
        infix?: string;
        /**
         * The last name.
         */
        lastName: string;
    }
    export interface NexoRouterDetails {
        /**
         * **nexorouter**
         */
        type: string;
        uniqueTerminalId?: string;
    }
    export interface OpenInvoiceDetails {
        bankAccount?: string;
        billingAddress?: string;
        deliveryAddress?: string;
        installmentConfigurationKey?: string;
        personalDetails?: string;
        separateDeliveryAddress?: string;
        /**
         * This is the `recurringDetailReference` returned in the response when you created the token.
         */
        storedPaymentMethodId?: string;
        /**
         * **openinvoice**
         */
        type: string;
    }
    export interface PayPalDetails {
        orderID?: string;
        payerID?: string;
        /**
         * The type of flow to initiate.
         */
        subtype?: "redirect" | "sdk";
        /**
         * **paypal**
         */
        type: string;
    }
    export interface PayUUpiDetails {
        /**
         * **payu_IN_upi**
         */
        type: string;
        /**
         * The VPA (Virtual Payment Address) for UPI.
         */
        vpa?: string;
    }
    export interface PaymentCompletionDetails {
        MD?: string;
        PaReq?: string;
        PaRes?: string;
        billingToken?: string;
        "cupsecureplus.smscode"?: string;
        facilitatorAccessToken?: string;
        oneTimePasscode?: string;
        orderID?: string;
        payerID?: string;
        payload?: string;
        paymentID?: string;
        paymentStatus?: string;
        redirectResult?: string;
        returnUrlQueryString?: string;
        "threeds2.challengeResult"?: string;
        "threeds2.fingerprint"?: string;
    }
    export interface PaymentDetails {
        /**
         * The payment method type.
         */
        type: string;
    }
    export interface PaymentLinkResource {
        /**
         * List of payments methods to be presented to the shopper. To refer to payment methods, use their `paymentMethod.type` from [Payment methods overview](https://docs.adyen.com/payment-methods).
         *
         * Example: `"allowedPaymentMethods":["ideal","giropay"]`
         */
        allowedPaymentMethods?: string[];
        /**
         * The payment amount and currency.
         */
        amount: Amount;
        /**
         * Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).
         */
        applicationInfo?: ApplicationInfo;
        /**
         * The address where to send the invoice.
         */
        billingAddress?: Address;
        /**
         * List of payments methods to be hidden from the shopper. To refer to payment methods, use their `paymentMethod.type` from [Payment methods overview](https://docs.adyen.com/payment-methods).
         *
         * Example: `"blockedPaymentMethods":["ideal","giropay"]`
         */
        blockedPaymentMethods?: string[];
        /**
         * The shopper's two-letter country code.
         */
        countryCode?: string;
        /**
         * The address where the purchased goods should be delivered.
         */
        deliveryAddress?: Address;
        /**
         * A short description visible on the payment page.
         * Maximum length: 280 characters.
         */
        description?: string;
        /**
         * The date that the payment link expires, in ISO 8601 format. For example `2019-11-23T12:25:28Z`, or `2020-05-27T20:25:28+08:00`. Maximum expiry date should be 30 days from when the payment link is created. If not provided, the default expiry is set to 24 hours after the payment link is created.
         */
        expiresAt?: string;
        /**
         * A unique identifier of the payment link.
         */
        readonly id: string;
        /**
         * Price and product information about the purchased items, to be included on the invoice sent to the shopper.
         * This parameter is required for open invoice (_buy now, pay later_) payment methods such AfterPay, Klarna, RatePay, and Zip.
         */
        lineItems?: LineItem[];
        /**
         * The merchant account identifier for which the payment link is created.
         */
        merchantAccount: string;
        /**
         * This reference allows linking multiple transactions to each other for reporting purposes (for example, order auth-rate). The reference should be unique per billing cycle.
         */
        merchantOrderReference?: string;
        /**
         * Defines a recurring payment type.
         * Allowed values:
         * * `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.
         * * `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.
         * * `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or has variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.
         *
         */
        recurringProcessingModel?: "CardOnFile" | "Subscription" | "UnscheduledCardOnFile";
        /**
         * A reference that is used to uniquely identify the payment in future communications about the payment status.
         */
        reference: string;
        /**
         * Website URL used for redirection after payment is completed.
         * If provided, a **Continue** button will be shown on the payment page. If shoppers select the button, they are redirected to the specified URL.
         */
        returnUrl?: string;
        /**
         * Indicates whether the payment link can be reused for multiple payments. If not provided, this defaults to **false** which means the link can be used for one successful payment only.
         */
        reusable?: boolean;
        /**
         * The shopper's email address.
         */
        shopperEmail?: string;
        /**
         * The language to be used in the payment page, specified by a combination of a language and country code. For example, `en-US`.
         *
         * For a list of shopper locales that Pay by Link supports, refer to [Language and localization](https://docs.adyen.com/checkout/pay-by-link#language-and-localization).
         */
        shopperLocale?: string;
        /**
         * The shopper's full name. This object is required for some payment methods such as AfterPay, Klarna, or if you're enrolled in the PayPal Seller Protection program.
         */
        shopperName?: Name;
        /**
         * A unique identifier for the shopper (for example, user ID or account ID).
         */
        shopperReference?: string;
        /**
         * Information on how the payment should be split between accounts when using [Adyen for Platforms](https://docs.adyen.com/platforms/processing-payments#providing-split-information).
         */
        splits?: Split[];
        /**
         * Status of the payment link. Possible values:
         * * **active**
         * * **paid**
         * * **expired**
         */
        status: "active" | "expired" | "paid";
        /**
         * The physical store, for which this payment is processed.
         */
        store?: string;
        /**
         * When this is set to **true** and the `shopperReference` is provided, the payment details will be stored.
         */
        storePaymentMethod?: boolean;
        /**
         * The URL at which the shopper can complete the payment.
         */
        readonly url: string;
    }
    export interface PaymentMethod {
        /**
         * List of possible brands. For example: visa, mc.
         */
        brands?: string[];
        /**
         * The configuration of the payment method.
         */
        configuration?: {
            [name: string]: string;
        };
        /**
         * All input details to be provided to complete the payment with this payment method.
         */
        details?: InputDetail[];
        /**
         * The funding source of the payment method.
         */
        fundingSource?: "credit" | "debit";
        /**
         * The group where this payment method belongs to.
         */
        group?: PaymentMethodGroup;
        /**
         * All input details to be provided to complete the payment with this payment method.
         */
        inputDetails?: InputDetail[];
        /**
         * The displayable name of this payment method.
         */
        name?: string;
        /**
         * Echo data required to send in next calls.
         */
        paymentMethodData?: string;
        /**
         * Indicates whether this payment method supports tokenization or not.
         */
        supportsRecurring?: boolean;
        /**
         * The unique payment method code.
         */
        type?: string;
    }
    export interface PaymentMethodGroup {
        /**
         * The name of the group.
         */
        name?: string;
        /**
         * Echo data to be used if the payment method is displayed as part of this group.
         */
        paymentMethodData?: string;
        /**
         * The unique code of the group.
         */
        type?: string;
    }
    export interface PaymentMethodsGroup {
        /**
         * The type to submit for any payment method in this group.
         */
        groupType?: string;
        /**
         * The human-readable name of this group.
         */
        name?: string;
        /**
         * The types of payment methods that belong in this group.
         */
        types?: string[];
    }
    export interface PaymentMethodsRequest {
        /**
         * This field contains additional data, which may be required for a particular payment request.
         *
         * The `additionalData` object consists of entries, each of which includes the key and value.
         */
        additionalData?: /**
         * This field contains additional data, which may be required for a particular payment request.
         *
         * The `additionalData` object consists of entries, each of which includes the key and value.
         */
        AdditionalDataCommon | AdditionalData3DSecure | AdditionalDataAirline | AdditionalDataCarRental | AdditionalDataLevel23 | AdditionalDataLodging | AdditionalDataOpenInvoice | AdditionalDataRatepay | AdditionalDataRetry | AdditionalDataRisk | AdditionalDataRiskStandalone | AdditionalDataTemporaryServices | AdditionalDataWallets;
        /**
         * List of payments methods to be presented to the shopper. To refer to payment methods, use their `paymentMethod.type` from [Payment methods overview](https://docs.adyen.com/payment-methods).
         *
         * Example: `"allowedPaymentMethods":["ideal","giropay"]`
         */
        allowedPaymentMethods?: string[];
        /**
         * The amount information for the transaction (in [minor units](https://docs.adyen.com/development-resources/currency-codes)). For [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) requests, set amount to 0 (zero).
         */
        amount?: Amount;
        /**
         * List of payments methods to be hidden from the shopper. To refer to payment methods, use their `paymentMethod.type` from [Payment methods overview](https://docs.adyen.com/payment-methods).
         *
         * Example: `"blockedPaymentMethods":["ideal","giropay"]`
         */
        blockedPaymentMethods?: string[];
        /**
         * The platform where a payment transaction takes place. This field can be used for filtering out payment methods that are only available on specific platforms. Possible values:
         * * iOS
         * * Android
         * * Web
         */
        channel?: "iOS" | "Android" | "Web";
        /**
         * The shopper's country code.
         */
        countryCode?: string;
        /**
         * Choose if a specific transaction should use the Real-time Account Updater, regardless of other settings.
         */
        enableRealTimeUpdate?: boolean;
        /**
         * The merchant account identifier, with which you want to process the transaction.
         */
        merchantAccount: string;
        /**
         * Contains the order information which is required for partial payments.
         */
        order?: CheckoutOrder;
        /**
         * The combination of a language code and a country code to specify the language to be used in the payment.
         */
        shopperLocale?: string;
        /**
         * The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID).
         * > This field is required for recurring payments.
         */
        shopperReference?: string;
        /**
         * Boolean value indicating whether the card payment method should be split into separate debit and credit options.
         */
        splitCardFundingSources?: boolean;
        /**
         * The physical store, for which this payment is processed.
         */
        store?: string;
    }
    export interface PaymentMethodsResponse {
        /**
         * Groups of payment methods.
         */
        groups?: PaymentMethodsGroup[];
        /**
         * Detailed list of one-click payment methods.
         */
        oneClickPaymentMethods?: RecurringDetail[];
        /**
         * Detailed list of payment methods required to generate payment forms.
         */
        paymentMethods?: PaymentMethod[];
        /**
         * List of all stored payment methods.
         */
        storedPaymentMethods?: StoredPaymentMethod[];
    }
    export interface PaymentRequest {
        /**
         * Shopper account information for 3D Secure 2.
         * > For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.
         */
        accountInfo?: AccountInfo;
        /**
         * This field contains additional data, which may be required for a particular payment request.
         *
         * The `additionalData` object consists of entries, each of which includes the key and value.
         */
        additionalData?: /**
         * This field contains additional data, which may be required for a particular payment request.
         *
         * The `additionalData` object consists of entries, each of which includes the key and value.
         */
        AdditionalDataCommon | AdditionalData3DSecure | AdditionalDataAirline | AdditionalDataCarRental | AdditionalDataLevel23 | AdditionalDataLodging | AdditionalDataOpenInvoice | AdditionalDataRatepay | AdditionalDataRetry | AdditionalDataRisk | AdditionalDataRiskStandalone | AdditionalDataTemporaryServices | AdditionalDataWallets;
        /**
         * The amount information for the transaction (in [minor units](https://docs.adyen.com/development-resources/currency-codes)). For [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) requests, set amount to 0 (zero).
         */
        amount: Amount;
        /**
         * Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).
         */
        applicationInfo?: ApplicationInfo;
        /**
         * The address where to send the invoice.
         * > For 3D Secure 2 transactions, schemes require the `billingAddress` for both `deviceChannel` **browser** and **app**. Include all of the fields within this object.
         */
        billingAddress?: Address;
        /**
         * The shopper's browser information.
         * > For 3D Secure transactions, `browserInfo` is required for `channel` **web** (or `deviceChannel` **browser**).
         */
        browserInfo?: BrowserInfo;
        /**
         * The delay between the authorisation and scheduled auto-capture, specified in hours.
         */
        captureDelayHours?: number; // int32
        /**
         * The platform where a payment transaction takes place. This field is optional for filtering out payment methods that are only available on specific platforms. If this value is not set, then we will try to infer it from the `sdkVersion` or `token`.
         *
         * Possible values:
         * * iOS
         * * Android
         * * Web
         */
        channel?: "iOS" | "Android" | "Web";
        /**
         * Information regarding the company.
         */
        company?: Company;
        /**
         * Conversion ID that corresponds to the Id generated for tracking user payment journey.
         */
        conversionId?: string;
        /**
         * The shopper country.
         *
         * Format: [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
         * Example: NL or DE
         */
        countryCode?: string;
        /**
         * The shopper's date of birth.
         *
         * Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD
         */
        dateOfBirth?: string; // date-time
        /**
         * The forex quote as returned in the response of the forex service.
         */
        dccQuote?: ForexQuote;
        /**
         * The address where the purchased goods should be delivered.
         */
        deliveryAddress?: Address;
        /**
         * The date and time the purchased goods should be delivered.
         *
         * Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD
         *
         * Example: 2017-07-17T13:42:40.428+01:00
         */
        deliveryDate?: string; // date-time
        /**
         * A string containing the shopper's device fingerprint. For more information, refer to [Device fingerprinting](https://docs.adyen.com/risk-management/device-fingerprinting).
         */
        deviceFingerprint?: string;
        /**
         * When true and `shopperReference` is provided, the shopper will be asked if the payment details should be stored for future one-click payments.
         */
        enableOneClick?: boolean;
        /**
         * When true and `shopperReference` is provided, the payment details will be tokenized for payouts.
         */
        enablePayOut?: boolean;
        /**
         * Choose if a specific transaction should use the Real-time Account Updater, regardless of other settings.
         */
        enableRealTimeUpdate?: boolean;
        /**
         * When true and `shopperReference` is provided, the payment details will be tokenized for recurring payments.
         */
        enableRecurring?: boolean;
        /**
         * The type of the entity the payment is processed for.
         */
        entityType?: "NaturalPerson" | "CompanyName";
        /**
         * An integer value that is added to the normal fraud score. The value can be either positive or negative.
         */
        fraudOffset?: number; // int32
        /**
         * Contains installment settings. For more information, refer to [Installments](https://docs.adyen.com/payment-methods/cards/credit-card-installments).
         */
        installments?: Installments;
        /**
         * Price and product information about the purchased items, to be included on the invoice sent to the shopper.
         * > This field is required for Klarna, AfterPay, and RatePay.
         */
        lineItems?: LineItem[];
        /**
         * The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.
         */
        mcc?: string;
        /**
         * The merchant account identifier, with which you want to process the transaction.
         */
        merchantAccount: string;
        /**
         * This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle.
         * The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations.
         * > We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`.
         */
        merchantOrderReference?: string;
        /**
         * Additional risk fields for 3D Secure 2.
         * > For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.
         */
        merchantRiskIndicator?: MerchantRiskIndicator;
        /**
         * Metadata consists of entries, each of which includes a key and a value.
         * Limitations: Maximum 20 key-value pairs per request. When exceeding, the "177" error occurs: "Metadata size exceeds limit".
         */
        metadata?: {
            [name: string]: string;
        };
        /**
         * Authentication data produced by an MPI (Mastercard SecureCode or Visa Secure).
         */
        mpiData?: ThreeDSecureData;
        /**
         * Contains the order information which is required for partial payments.
         */
        order?: CheckoutOrder;
        /**
         * When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead.
         */
        orderReference?: string;
        /**
         * Required for the 3D Secure 2 `channel` **Web** integration.
         *
         * Set this parameter to the origin URL of the page that you are loading the 3D Secure Component from.
         */
        origin?: string;
        /**
         * The type and required details of a payment method to use.
         */
        paymentMethod: /* The type and required details of a payment method to use. */ ApplePayDetails | SamsungPayDetails | AndroidPayDetails | VisaCheckoutDetails | GooglePayDetails | AmazonPayDetails | MasterpassDetails | StoredPaymentMethodDetails | CardDetails | PaymentDetails | AchDetails | KlarnaDetails | IdealDetails | PayPalDetails | SepaDirectDebitDetails | QiwiWalletDetails | VippsDetails | MobilePayDetails | WeChatPayDetails | WeChatPayMiniProgramDetails | LianLianPayDetails | MolPayDetails | BillDeskOnlineDetails | BillDeskWalletDetails | PayUUpiDetails | DotpayDetails | EntercashDetails | OpenInvoiceDetails | DokuDetails | EcontextVoucherDetails | DragonpayDetails | GiropayDetails | NexoRouterDetails | BlikDetails | MbwayDetails;
        /**
         * Date after which no further authorisations shall be performed. Only for 3D Secure 2.
         */
        recurringExpiry?: string;
        /**
         * Minimum number of days between authorisations. Only for 3D Secure 2.
         */
        recurringFrequency?: string;
        /**
         * Defines a recurring payment type.
         * Allowed values:
         * * `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.
         * * `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.
         * * `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.
         *
         */
        recurringProcessingModel?: "CardOnFile" | "Subscription" | "UnscheduledCardOnFile";
        /**
         * Specifies the redirect method (GET or POST) when redirecting back from the issuer.
         */
        redirectFromIssuerMethod?: string;
        /**
         * Specifies the redirect method (GET or POST) when redirecting to the issuer.
         */
        redirectToIssuerMethod?: string;
        /**
         * The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.
         * If you need to provide multiple references for a transaction, separate them with hyphens ("-").
         * Maximum length: 80 characters.
         */
        reference: string;
        /**
         * The URL to return to in case of a redirection.
         * The format depends on the channel. This URL can have a maximum of 1024 characters.
         * * For web, include the protocol `http://` or `https://`. You can also include your own additional query parameters, for example, shopper ID or order reference number.
         * Example: `https://your-company.com/checkout?shopperOrder=12xy`
         * * For iOS, use the custom URL for your app. To know more about setting custom URL schemes, refer to the [Apple Developer documentation](https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app).
         * Example: `my-app://`
         * * For Android, use a custom URL handled by an Activity on your app. You can configure it with an [intent filter](https://developer.android.com/guide/components/intents-filters).
         * Example: `my-app://your.package.name`
         */
        returnUrl: string;
        /**
         * Contains risk data, such as client-side data, used to identify risk for a transaction.
         */
        riskData?: RiskData;
        /**
         * The date and time until when the session remains valid, in [ISO 8601](https://www.w3.org/TR/NOTE-datetime) format.
         *
         * For example: 2020-07-18T15:42:40.428+01:00
         */
        sessionValidity?: string;
        /**
         * The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks.
         * > For 3D Secure 2 transactions, schemes require the `shopperEmail` for both `deviceChannel` **browser** and **app**.
         */
        shopperEmail?: string;
        /**
         * The shopper's IP address. In general, we recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).
         * > Required for 3D Secure 2 transactions. This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://support.adyen.com/hc/en-us/requests/new).
         */
        shopperIP?: string;
        /**
         * Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.
         * For the web service API, Adyen assumes Ecommerce shopper interaction by default.
         *
         * This field has the following possible values:
         * * `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.
         * * `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).
         * * `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.
         * * `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.
         */
        shopperInteraction?: "Ecommerce" | "ContAuth" | "Moto" | "POS";
        /**
         * The combination of a language code and a country code to specify the language to be used in the payment.
         */
        shopperLocale?: string;
        /**
         * The shopper's full name and gender (if specified).
         */
        shopperName?: Name;
        /**
         * The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID).
         * > This field is required for recurring payments.
         */
        shopperReference?: string;
        /**
         * The text to be shown on the shopper's bank statement. To enable this field, contact our [Support Team](https://support.adyen.com/hc/en-us/requests/new).
         *  We recommend sending a maximum of 25 characters, otherwise banks might truncate the string.
         */
        shopperStatement?: string;
        /**
         * The shopper's social security number.
         */
        socialSecurityNumber?: string;
        /**
         * Information on how the payment should be split between accounts when using [Adyen for Platforms](https://docs.adyen.com/platforms/processing-payments#providing-split-information).
         */
        splits?: Split[];
        /**
         * The physical store, for which this payment is processed.
         */
        store?: string;
        /**
         * When true and `shopperReference` is provided, the payment details will be stored.
         */
        storePaymentMethod?: boolean;
        /**
         * The shopper's telephone number.
         */
        telephoneNumber?: string;
        /**
         * Request fields for 3D Secure 2.
         */
        threeDS2RequestData?: ThreeDS2RequestData;
        /**
         * If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/checkout/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation.
         */
        threeDSAuthenticationOnly?: boolean;
        /**
         * Set to true if the payment should be routed to a trusted MID.
         */
        trustedShopper?: boolean;
    }
    export interface PaymentResponse {
        /**
         * Action to be taken for completing the payment.
         */
        action?: /* Action to be taken for completing the payment. */ CheckoutDonationAction | CheckoutQrCodeAction | CheckoutRedirectAction | CheckoutSDKAction | CheckoutThreeDS2ChallengeAction | CheckoutThreeDS2FingerPrintAction | CheckoutAwaitAction | CheckoutVoucherAction | CheckoutOneTimePasscodeAction;
        /**
         * This field contains additional data, which may be required to return in a particular payment response. To choose data fields to be returned, go to **Customer Area** > **Account** > **API URLs** > **Additional data settings**.
         */
        additionalData?: /* This field contains additional data, which may be required to return in a particular payment response. To choose data fields to be returned, go to **Customer Area** > **Account** > **API URLs** > **Additional data settings**. */ ResponseAdditionalDataCommon | ResponseAdditionalDataBillingAddress | ResponseAdditionalDataCard | ResponseAdditionalDataDeliveryAddress | ResponseAdditionalDataInstallments | ResponseAdditionalDataNetworkTokens | ResponseAdditionalDataPayPal | ResponseAdditionalDataSepa;
        /**
         * Authorised amount in the transaction.
         */
        amount?: Amount;
        /**
         * Contains `threeds2.fingerprint` or `threeds2.challengeToken` values to be used in further calls to `/payments/details` endpoint.
         */
        authentication?: {
            [name: string]: string;
        };
        /**
         * When non-empty, contains all the fields that you must submit to the `/payments/details` endpoint.
         */
        details?: InputDetail[];
        /**
         * The fraud result properties of the payment.
         */
        fraudResult?: FraudResult;
        /**
         * The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.
         * If you need to provide multiple references for a transaction, separate them with hyphens ("-").
         * Maximum length: 80 characters.
         */
        merchantReference?: string;
        /**
         * Contains updated information regarding the order in case order information was provided in the request.
         */
        order?: CheckoutOrderResponse;
        /**
         * Contains the details that will be presented to the shopper.
         */
        outputDetails?: {
            [name: string]: string;
        };
        /**
         * When non-empty, contains a value that you must submit to the `/payments/details` endpoint.
         */
        paymentData?: string;
        /**
         * Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.
         *
         * > `pspReference` is returned only for non-redirect payment methods.
         */
        pspReference?: string;
        /**
         * When the payment flow requires a redirect, this object contains information about the redirect URL.
         */
        redirect?: Redirect;
        /**
         * If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.
         *
         * For more information, see [Refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons).
         */
        refusalReason?: string;
        /**
         * Code that specifies the refusal reason. For more information, see [Authorisation refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons).
         */
        refusalReasonCode?: string;
        /**
         * The result of the payment. For more information, see [Result codes](https://docs.adyen.com/checkout/payment-result-codes).
         *
         * Possible values:
         *
         * * **AuthenticationFinished** – The payment has been successfully authenticated with 3D Secure 2. Returned for 3D Secure 2 authentication-only transactions.
         * * **Authorised** – The payment was successfully authorised. This state serves as an indicator to proceed with the delivery of goods and services. This is a final state.
         * * **Cancelled** – Indicates the payment has been cancelled (either by the shopper or the merchant) before processing was completed. This is a final state.
         * * **ChallengeShopper** – The issuer requires further shopper interaction before the payment can be authenticated. Returned for 3D Secure 2 transactions.
         * * **Error** – There was an error when the payment was being processed. The reason is given in the `refusalReason` field. This is a final state.
         * * **IdentifyShopper** – The issuer requires the shopper's device fingerprint before the payment can be authenticated. Returned for 3D Secure 2 transactions.
         * * **Pending** – Indicates that it is not possible to obtain the final status of the payment. This can happen if the systems providing final status information for the payment are unavailable, or if the shopper needs to take further action to complete the payment.
         * * **PresentToShopper** – Indicates that the response contains additional information that you need to present to a shopper, so that they can use it to complete a payment.
         * * **Received** – Indicates the payment has successfully been received by Adyen, and will be processed. This is the initial state for all payments.
         * * **RedirectShopper** – Indicates the shopper should be redirected to an external web page or app to complete the authorisation.
         * * **Refused** – Indicates the payment was refused. The reason is given in the `refusalReason` field. This is a final state.
         */
        resultCode?: "AuthenticationFinished" | "Authorised" | "Cancelled" | "ChallengeShopper" | "Error" | "IdentifyShopper" | "Pending" | "PresentToShopper" | "Received" | "RedirectShopper" | "Refused";
    }
    export interface PaymentSetupRequest {
        /**
         * This field contains additional data, which may be required for a particular payment request.
         *
         * The `additionalData` object consists of entries, each of which includes the key and value.
         */
        additionalData?: /**
         * This field contains additional data, which may be required for a particular payment request.
         *
         * The `additionalData` object consists of entries, each of which includes the key and value.
         */
        AdditionalDataCommon | AdditionalData3DSecure | AdditionalDataAirline | AdditionalDataCarRental | AdditionalDataLevel23 | AdditionalDataLodging | AdditionalDataOpenInvoice | AdditionalDataRatepay | AdditionalDataRetry | AdditionalDataRisk | AdditionalDataRiskStandalone | AdditionalDataTemporaryServices | AdditionalDataWallets;
        /**
         * List of payments methods to be presented to the shopper. To refer to payment methods, use their `paymentMethod.type`from [Payment methods overview](https://docs.adyen.com/payment-methods).
         *
         * Example: `"allowedPaymentMethods":["ideal","giropay"]`
         */
        allowedPaymentMethods?: string[];
        /**
         * The amount information for the transaction (in [minor units](https://docs.adyen.com/development-resources/currency-codes)). For [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) requests, set amount to 0 (zero).
         */
        amount: Amount;
        /**
         * Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).
         */
        applicationInfo?: ApplicationInfo;
        /**
         * The address where to send the invoice.
         * > For 3D Secure 2 transactions, schemes require the `billingAddress` for both `deviceChannel` **browser** and **app**. Include all of the fields within this object.
         */
        billingAddress?: Address;
        /**
         * List of payments methods to be hidden from the shopper. To refer to payment methods, use their `paymentMethod.type`from [Payment methods overview](https://docs.adyen.com/payment-methods).
         *
         * Example: `"blockedPaymentMethods":["ideal","giropay"]`
         */
        blockedPaymentMethods?: string[];
        /**
         * The delay between the authorisation and scheduled auto-capture, specified in hours.
         */
        captureDelayHours?: number; // int32
        /**
         * The platform where a payment transaction takes place. This field is optional for filtering out payment methods that are only available on specific platforms. If this value is not set, then we will try to infer it from the `sdkVersion` or `token`.
         *
         * Possible values:
         * * iOS
         * * Android
         * * Web
         */
        channel?: "iOS" | "Android" | "Web";
        /**
         * Information regarding the company.
         */
        company?: Company;
        /**
         * Specify configurations to enable additional features.
         */
        configuration?: Configuration;
        /**
         * Conversion ID that corresponds to the Id generated for tracking user payment journey.
         */
        conversionId?: string;
        /**
         * The shopper country.
         *
         * Format: [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
         * Example: NL or DE
         */
        countryCode: string;
        /**
         * The shopper's date of birth.
         *
         * Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD
         */
        dateOfBirth?: string; // date-time
        /**
         * The forex quote as returned in the response of the forex service.
         */
        dccQuote?: ForexQuote;
        /**
         * The address where the purchased goods should be delivered.
         */
        deliveryAddress?: Address;
        /**
         * The date and time the purchased goods should be delivered.
         *
         * Format [ISO 8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DDThh:mm:ss.sssTZD
         *
         * Example: 2017-07-17T13:42:40.428+01:00
         */
        deliveryDate?: string; // date-time
        /**
         * When true and `shopperReference` is provided, the shopper will be asked if the payment details should be stored for future one-click payments.
         */
        enableOneClick?: boolean;
        /**
         * When true and `shopperReference` is provided, the payment details will be tokenized for payouts.
         */
        enablePayOut?: boolean;
        /**
         * Choose if a specific transaction should use the Real-time Account Updater, regardless of other settings.
         */
        enableRealTimeUpdate?: boolean;
        /**
         * When true and `shopperReference` is provided, the payment details will be tokenized for recurring payments.
         */
        enableRecurring?: boolean;
        /**
         * The type of the entity the payment is processed for.
         */
        entityType?: "NaturalPerson" | "CompanyName";
        /**
         * An integer value that is added to the normal fraud score. The value can be either positive or negative.
         */
        fraudOffset?: number; // int32
        /**
         * Contains installment settings. For more information, refer to [Installments](https://docs.adyen.com/payment-methods/cards/credit-card-installments).
         */
        installments?: Installments;
        /**
         * Price and product information about the purchased items, to be included on the invoice sent to the shopper.
         * > This field is required for Klarna, AfterPay, and RatePay.
         */
        lineItems?: LineItem[];
        /**
         * The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.
         */
        mcc?: string;
        /**
         * The merchant account identifier, with which you want to process the transaction.
         */
        merchantAccount: string;
        /**
         * This reference allows linking multiple transactions to each other for reporting purposes (i.e. order auth-rate). The reference should be unique per billing cycle.
         * The same merchant order reference should never be reused after the first authorised attempt. If used, this field should be supplied for all incoming authorisations.
         * > We strongly recommend you send the `merchantOrderReference` value to benefit from linking payment requests when authorisation retries take place. In addition, we recommend you provide `retry.orderAttemptNumber`, `retry.chainAttemptNumber`, and `retry.skipRetry` values in `PaymentRequest.additionalData`.
         */
        merchantOrderReference?: string;
        /**
         * Metadata consists of entries, each of which includes a key and a value.
         * Limitations: Maximum 20 key-value pairs per request. When exceeding, the "177" error occurs: "Metadata size exceeds limit".
         */
        metadata?: {
            [name: string]: string;
        };
        /**
         * When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead.
         */
        orderReference?: string;
        /**
         * Required for the Web integration.
         *
         * Set this parameter to the origin URL of the page that you are loading the SDK from.
         */
        origin?: string;
        /**
         * Date after which no further authorisations shall be performed. Only for 3D Secure 2.
         */
        recurringExpiry?: string;
        /**
         * Minimum number of days between authorisations. Only for 3D Secure 2.
         */
        recurringFrequency?: string;
        /**
         * The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.
         * If you need to provide multiple references for a transaction, separate them with hyphens ("-").
         * Maximum length: 80 characters.
         */
        reference: string;
        /**
         * The URL to return to in case of a redirection.
         * The format depends on the channel. This URL can have a maximum of 1024 characters.
         * * For web, include the protocol `http://` or `https://`. You can also include your own additional query parameters, for example, shopper ID or order reference number.
         * Example: `https://your-company.com/checkout?shopperOrder=12xy`
         * * For iOS, use the custom URL for your app. To know more about setting custom URL schemes, refer to the [Apple Developer documentation](https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app).
         * Example: `my-app://`
         * * For Android, use a custom URL handled by an Activity on your app. You can configure it with an [intent filter](https://developer.android.com/guide/components/intents-filters).
         * Example: `my-app://your.package.name`
         */
        returnUrl: string;
        /**
         * Contains risk data, such as client-side data, used to identify risk for a transaction.
         */
        riskData?: RiskData;
        /**
         * The version of the SDK you are using (for Web SDK integrations only).
         */
        sdkVersion?: string;
        /**
         * The date and time until when the session remains valid, in [ISO 8601](https://www.w3.org/TR/NOTE-datetime) format.
         *
         * For example: 2020-07-18T15:42:40.428+01:00
         */
        sessionValidity?: string;
        /**
         * The shopper's email address. We recommend that you provide this data, as it is used in velocity fraud checks.
         * > For 3D Secure 2 transactions, schemes require the `shopperEmail` for both `deviceChannel` **browser** and **app**.
         */
        shopperEmail?: string;
        /**
         * The shopper's IP address. In general, we recommend that you provide this data, as it is used in a number of risk checks (for instance, number of payment attempts or location-based checks).
         * > Required for 3D Secure 2 transactions. This field is also mandatory for some merchants depending on your business model. For more information, [contact Support](https://support.adyen.com/hc/en-us/requests/new).
         */
        shopperIP?: string;
        /**
         * Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer.
         * For the web service API, Adyen assumes Ecommerce shopper interaction by default.
         *
         * This field has the following possible values:
         * * `Ecommerce` - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.
         * * `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).
         * * `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.
         * * `POS` - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.
         */
        shopperInteraction?: "Ecommerce" | "ContAuth" | "Moto" | "POS";
        /**
         * The combination of a language code and a country code to specify the language to be used in the payment.
         */
        shopperLocale?: string;
        /**
         * The shopper's full name and gender (if specified).
         */
        shopperName?: Name;
        /**
         * The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID).
         * > This field is required for recurring payments.
         */
        shopperReference?: string;
        /**
         * The text to be shown on the shopper's bank statement. To enable this field, contact our [Support Team](https://support.adyen.com/hc/en-us/requests/new).
         *  We recommend sending a maximum of 25 characters, otherwise banks might truncate the string.
         */
        shopperStatement?: string;
        /**
         * The shopper's social security number.
         */
        socialSecurityNumber?: string;
        /**
         * Information on how the payment should be split between accounts when using [Adyen for Platforms](https://docs.adyen.com/platforms/processing-payments#providing-split-information).
         */
        splits?: Split[];
        /**
         * When true and `shopperReference` is provided, the payment details will be stored.
         */
        storePaymentMethod?: boolean;
        /**
         * The shopper's telephone number.
         */
        telephoneNumber?: string;
        /**
         * If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/checkout/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation.
         */
        threeDSAuthenticationOnly?: boolean;
        /**
         * The token obtained when initializing the SDK.
         *
         * > This parameter is required for iOS and Android; not required for Web.
         */
        token?: string;
        /**
         * Set to true if the payment should be routed to a trusted MID.
         */
        trustedShopper?: boolean;
    }
    export interface PaymentSetupResponse {
        /**
         * The encoded payment session that you need to pass to the SDK.
         */
        paymentSession?: string;
        /**
         * The detailed list of stored payment details required to generate payment forms. Will be empty if oneClick is set to false in the request.
         */
        recurringDetails?: RecurringDetail[];
    }
    export interface PaymentVerificationRequest {
        /**
         * Encrypted and signed payment result data. You should receive this value from the Checkout SDK after the shopper completes the payment.
         */
        payload: string;
    }
    export interface PaymentVerificationResponse {
        /**
         * This field contains additional data, which may be required to return in a particular payment response. To choose data fields to be returned, go to **Customer Area** > **Account** > **API URLs** > **Additional data settings**.
         */
        additionalData?: /* This field contains additional data, which may be required to return in a particular payment response. To choose data fields to be returned, go to **Customer Area** > **Account** > **API URLs** > **Additional data settings**. */ ResponseAdditionalDataCommon | ResponseAdditionalDataBillingAddress | ResponseAdditionalDataCard | ResponseAdditionalDataDeliveryAddress | ResponseAdditionalDataInstallments | ResponseAdditionalDataNetworkTokens | ResponseAdditionalDataPayPal | ResponseAdditionalDataSepa;
        /**
         * The fraud result properties of the payment.
         */
        fraudResult?: FraudResult;
        /**
         * A unique value that you provided in the initial `/paymentSession` request as a `reference` field.
         */
        merchantReference: string;
        /**
         * Contains updated information regarding the order in case order information was provided in the request.
         */
        order?: CheckoutOrderResponse;
        /**
         * The payment method used in the transaction.
         */
        paymentMethod: string;
        /**
         * Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.
         *
         * > `pspReference` is returned only for non-redirect payment methods.
         */
        pspReference?: string;
        /**
         * If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error. When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.
         *
         * For more information, see [Refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons).
         */
        refusalReason?: string;
        /**
         * Code that specifies the refusal reason. For more information, see [Authorisation refusal reasons](https://docs.adyen.com/development-resources/refusal-reasons).
         */
        refusalReasonCode?: string;
        /**
         * The result of the payment. For more information, see [Result codes](https://docs.adyen.com/checkout/payment-result-codes).
         *
         * Possible values:
         *
         * * **AuthenticationFinished** – The payment has been successfully authenticated with 3D Secure 2. Returned for 3D Secure 2 authentication-only transactions.
         * * **Authorised** – The payment was successfully authorised. This state serves as an indicator to proceed with the delivery of goods and services. This is a final state.
         * * **Cancelled** – Indicates the payment has been cancelled (either by the shopper or the merchant) before processing was completed. This is a final state.
         * * **ChallengeShopper** – The issuer requires further shopper interaction before the payment can be authenticated. Returned for 3D Secure 2 transactions.
         * * **Error** – There was an error when the payment was being processed. The reason is given in the `refusalReason` field. This is a final state.
         * * **IdentifyShopper** – The issuer requires the shopper's device fingerprint before the payment can be authenticated. Returned for 3D Secure 2 transactions.
         * * **Pending** – Indicates that it is not possible to obtain the final status of the payment. This can happen if the systems providing final status information for the payment are unavailable, or if the shopper needs to take further action to complete the payment.
         * * **PresentToShopper** – Indicates that the response contains additional information that you need to present to a shopper, so that they can use it to complete a payment.
         * * **Received** – Indicates the payment has successfully been received by Adyen, and will be processed. This is the initial state for all payments.
         * * **RedirectShopper** – Indicates the shopper should be redirected to an external web page or app to complete the authorisation.
         * * **Refused** – Indicates the payment was refused. The reason is given in the `refusalReason` field. This is a final state.
         */
        resultCode?: "AuthenticationFinished" | "Authorised" | "Cancelled" | "ChallengeShopper" | "Error" | "IdentifyShopper" | "Pending" | "PresentToShopper" | "Received" | "RedirectShopper" | "Refused";
        /**
         * The type of the error.
         */
        serviceError?: ServiceError;
        /**
         * The shopperLocale value provided in the payment request.
         */
        shopperLocale: string;
    }
    export interface QiwiWalletDetails {
        /**
         *
         */
        telephoneNumber: string;
        /**
         * **qiwiwallet**
         */
        type: string;
    }
    export interface Recurring {
        /**
         * The type of recurring contract to be used.
         * Possible values:
         * * `ONECLICK` – Payment details can be used to initiate a one-click payment, where the shopper enters the [card security code (CVC/CVV)](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-security-code-cvc-cvv-cid).
         * * `RECURRING` – Payment details can be used without the card security code to initiate [card-not-present transactions](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-not-present-cnp).
         * * `ONECLICK,RECURRING` – Payment details can be used regardless of whether the shopper is on your site or not.
         * * `PAYOUT` – Payment details can be used to [make a payout](https://docs.adyen.com/checkout/online-payouts).
         */
        contract?: "ONECLICK" | "RECURRING" | "PAYOUT";
        /**
         * A descriptive name for this detail.
         */
        recurringDetailName?: string;
        /**
         * Date after which no further authorisations shall be performed. Only for 3D Secure 2.
         */
        recurringExpiry?: string; // date-time
        /**
         * Minimum number of days between authorisations. Only for 3D Secure 2.
         */
        recurringFrequency?: string;
        /**
         * The name of the token service.
         */
        tokenService?: "VISATOKENSERVICE" | "MCTOKENSERVICE";
    }
    export interface RecurringDetail {
        /**
         * List of possible brands. For example: visa, mc.
         */
        brands?: string[];
        /**
         * The configuration of the payment method.
         */
        configuration?: {
            [name: string]: string;
        };
        /**
         * All input details to be provided to complete the payment with this payment method.
         */
        details?: InputDetail[];
        /**
         * The funding source of the payment method.
         */
        fundingSource?: "credit" | "debit";
        /**
         * The group where this payment method belongs to.
         */
        group?: PaymentMethodGroup;
        /**
         * All input details to be provided to complete the payment with this payment method.
         */
        inputDetails?: InputDetail[];
        /**
         * The displayable name of this payment method.
         */
        name?: string;
        /**
         * Echo data required to send in next calls.
         */
        paymentMethodData?: string;
        /**
         * The reference that uniquely identifies the recurring detail.
         */
        recurringDetailReference?: string;
        /**
         * Contains information on previously stored payment details.
         */
        storedDetails?: StoredDetails;
        /**
         * Indicates whether this payment method supports tokenization or not.
         */
        supportsRecurring?: boolean;
        /**
         * The unique payment method code.
         */
        type?: string;
    }
    export interface Redirect {
        /**
         * When the redirect URL must be accessed via POST, use this data to post to the redirect URL.
         */
        data?: {
            [name: string]: string;
        };
        /**
         * The web method that you must use to access the redirect URL.
         *
         * Possible values: GET, POST.
         */
        method?: "GET" | "POST";
        /**
         * The URL, to which you must redirect a shopper to complete a payment.
         */
        url?: string;
    }
    export interface ResponseAdditionalDataBillingAddress {
        /**
         * The billing address city passed in the payment request.
         */
        "billingAddress.city"?: string;
        /**
         * The billing address country passed in the payment request.
         *
         * Example: NL
         */
        "billingAddress.country"?: string;
        /**
         * The billing address house number or name passed in the payment request.
         */
        "billingAddress.houseNumberOrName"?: string;
        /**
         * The billing address postal code passed in the payment request.
         *
         * Example: 1011 DJ
         */
        "billingAddress.postalCode"?: string;
        /**
         * The billing address state or province passed in the payment request.
         *
         * Example: NH
         */
        "billingAddress.stateOrProvince"?: string;
        /**
         * The billing address street passed in the payment request.
         */
        "billingAddress.street"?: string;
    }
    export interface ResponseAdditionalDataCard {
        /**
         * The Bank Identification Number of a credit card, which is the first six digits of a card number.
         *
         * Example: 521234
         */
        cardBin?: string;
        /**
         * The cardholder name passed in the payment request.
         */
        cardHolderName?: string;
        /**
         * The bank or the financial institution granting lines of credit through card association branded payment cards. This information can be included when available.
         */
        cardIssuingBank?: string;
        /**
         * The country where the card was issued.
         *
         * Example: US
         */
        cardIssuingCountry?: string;
        /**
         * The currency in which the card is issued, if this information is available. Provided as the currency code or currency number from the ISO-4217 standard.
         *
         * Example: USD
         */
        cardIssuingCurrency?: string;
        /**
         * The card payment method used for the transaction.
         *
         * Example: amex
         */
        cardPaymentMethod?: string;
        /**
         * The last four digits of a card number.
         *
         * > Returned only in case of a card payment.
         */
        cardSummary?: string;
    }
    export interface ResponseAdditionalDataCommon {
        /**
         * The name of the Adyen acquirer account.
         *
         * Example: PayPalSandbox_TestAcquirer
         *
         * > Only relevant for PayPal transactions.
         */
        acquirerAccountCode?: string;
        /**
         * The name of the acquirer processing the payment request.
         *
         * Example: TestPmmAcquirer
         */
        acquirerCode?: string;
        /**
         * The reference number that can be used for reconciliation in case a non-Adyen acquirer is used for settlement.
         *
         * Example: 7C9N3FNBKT9
         */
        acquirerReference?: string;
        /**
         * The Adyen alias of the card.
         *
         * Example: H167852639363479
         */
        alias?: string;
        /**
         * The type of the card alias.
         *
         * Example: Default
         */
        aliasType?: string;
        /**
         * Authorisation code:
         * * When the payment is authorised successfully, this field holds the authorisation code for the payment.
         * * When the payment is not authorised, this field is empty.
         *
         * Example: 58747
         */
        authCode?: string;
        /**
         * The currency of the authorised amount, as a three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).
         */
        authorisedAmountCurrency?: string;
        /**
         * Value of the amount authorised.
         *
         * This amount is represented in minor units according to the [following table](https://docs.adyen.com/development-resources/currency-codes).
         */
        authorisedAmountValue?: string;
        /**
         * The AVS result code of the payment, which provides information about the outcome of the AVS check.
         *
         * For possible values, see [AVS](https://docs.adyen.com/risk-management/configure-standard-risk-rules/consistency-rules#billing-address-does-not-match-cardholder-address-avs).
         */
        avsResult?: string;
        /**
         * Raw AVS result received from the acquirer, where available.
         *
         * Example: D
         */
        avsResultRaw?: string;
        /**
         * BIC of a bank account.
         *
         * Example: TESTNL01
         *
         * > Only relevant for SEPA Direct Debit transactions.
         */
        bic?: string;
        /**
         * Supported for 3D Secure 2. The unique transaction identifier assigned by the DS to identify a single transaction.
         */
        dsTransID?: string;
        /**
         * The Electronic Commerce Indicator returned from the schemes for the 3DS payment session.
         *
         * Example: 02
         */
        eci?: string;
        /**
         * The expiry date on the card.
         *
         * Example: 6/2016
         *
         * > Returned only in case of a card payment.
         */
        expiryDate?: string;
        /**
         * The currency of the extra amount charged due to additional amounts set in the skin used in the HPP payment request.
         *
         * Example: EUR
         */
        extraCostsCurrency?: string;
        /**
         * The value of the extra amount charged due to additional amounts set in the skin used in the HPP payment request. The amount is in minor units.
         */
        extraCostsValue?: string;
        /**
         * The fraud score due to a particular fraud check. The fraud check name is found in the key of the key-value pair.
         */
        "fraudCheck-[itemNr]-[FraudCheckname]"?: string;
        /**
         * Information regarding the funding type of the card. The possible return values are:
         * * CHARGE
         * * CREDIT
         * * DEBIT
         * * PREPAID
         * * PREPAID_RELOADABLE
         *
         * * PREPAID_NONRELOADABLE
         * * DEFFERED_DEBIT
         *
         * > This functionality requires additional configuration on Adyen's end. To enable it, contact the Support Team.
         *
         * For receiving this field in the notification, enable **Include Funding Source** in **Notifications** > **Additional settings**.
         */
        fundingSource?: string;
        /**
         * Indicates availability of funds.
         *
         * Visa:
         * * "I" (fast funds are supported)
         * * "N" (otherwise)
         *
         * Mastercard:
         * * "I" (product type is Prepaid or Debit, or issuing country is in CEE/HGEM list)
         * * "N" (otherwise)
         *
         * > Returned when you verify a card BIN or estimate costs, and only if payoutEligible is "Y" or "D".
         */
        fundsAvailability?: string;
        /**
         * Provides the more granular indication of why a transaction was refused. When a transaction fails with either "Refused", "Restricted Card", "Transaction Not Permitted", "Not supported" or "DeclinedNon Generic" refusalReason from the issuer, Adyen cross references its PSP-wide data for extra insight into the refusal reason. If an inferred refusal reason is available, the `inferredRefusalReason`, field is populated and the `refusalReason`, is set to "Not Supported".
         *
         * Possible values:
         *
         * * 3D Secure Mandated
         * * Closed Account
         * * ContAuth Not Supported
         * * CVC Mandated
         * * Ecommerce Not Allowed
         * * Crossborder Not Supported
         * * Card Updated
         *
         * * Low Authrate Bin
         * * Non-reloadable prepaid card
         */
        inferredRefusalReason?: string;
        /**
         * The issuing country of the card based on the BIN list that Adyen maintains.
         *
         * Example: JP
         */
        issuerCountry?: string;
        /**
         * The `mcBankNetReferenceNumber`, is a minimum of six characters and a maximum of nine characters long.
         *
         * > Contact Support Team to enable this field.
         */
        mcBankNetReferenceNumber?: string;
        /**
         * Returned in the response if you are not tokenizing with Adyen and are using the Merchant-initiated transactions (MIT) framework from Mastercard or Visa.
         *
         * This contains either the Mastercard Trace ID or the Visa Transaction ID.
         */
        networkTxReference?: string;
        /**
         * The owner name of a bank account.
         *
         * Only relevant for SEPA Direct Debit transactions.
         */
        ownerName?: string;
        /**
         * The Payment Account Reference (PAR) value links a network token with the underlying primary account number (PAN). The PAR value consists of 29 uppercase alphanumeric characters.
         */
        paymentAccountReference?: string;
        /**
         * The Adyen sub-variant of the payment method used for the payment request.
         *
         * For more information, refer to [PaymentMethodVariant](https://docs.adyen.com/development-resources/paymentmethodvariant).
         *
         * Example: mcpro
         */
        paymentMethodVariant?: string;
        /**
         * Indicates whether a payout is eligible or not for this card.
         *
         * Visa:
         * * "Y"
         * * "N"
         *
         * Mastercard:
         * * "Y" (domestic and cross-border)
         *
         * * "D" (only domestic)
         * * "N" (no MoneySend)
         * * "U" (unknown)
         */
        payoutEligible?: string;
        /**
         * The response code from the Real Time Account Updater service.
         *
         * Possible return values are:
         * * CardChanged
         * * CardExpiryChanged
         * * CloseAccount
         *
         * * ContactCardAccountHolder
         */
        realtimeAccountUpdaterStatus?: string;
        /**
         * Message to be displayed on the terminal.
         */
        receiptFreeText?: string;
        /**
         * The `pspReference`, of the first recurring payment that created the recurring detail.
         *
         * This functionality requires additional configuration on Adyen's end. To enable it, contact the Support Team.
         */
        "recurring.firstPspReference"?: string;
        /**
         * The reference that uniquely identifies the recurring transaction.
         */
        "recurring.recurringDetailReference"?: string;
        /**
         * If the payment is referred, this field is set to true.
         *
         * This field is unavailable if the payment is referred and is usually not returned with ecommerce transactions.
         *
         * Example: true
         */
        referred?: string;
        /**
         * Raw refusal reason received from the acquirer, where available.
         *
         * Example: AUTHORISED
         */
        refusalReasonRaw?: string;
        /**
         * The shopper interaction type of the payment request.
         *
         * Example: Ecommerce
         */
        shopperInteraction?: string;
        /**
         * The shopperReference passed in the payment request.
         *
         * Example: AdyenTestShopperXX
         */
        shopperReference?: string;
        /**
         * The terminal ID used in a point-of-sale payment.
         *
         * Example: 06022622
         */
        terminalId?: string;
        /**
         * A Boolean value indicating whether 3DS authentication was completed on this payment.
         *
         * Example: true
         */
        threeDAuthenticated?: string;
        /**
         * The raw 3DS authentication result from the card issuer.
         *
         * Example: N
         */
        threeDAuthenticatedResponse?: string;
        /**
         * A Boolean value indicating whether 3DS was offered for this payment.
         *
         * Example: true
         */
        threeDOffered?: string;
        /**
         * The raw enrollment result from the 3DS directory services of the card schemes.
         *
         * Example: Y
         */
        threeDOfferedResponse?: string;
        /**
         * The 3D Secure 2 version.
         */
        threeDSVersion?: string;
        /**
         * The `visaTransactionId`, has a fixed length of 15 numeric characters.
         *
         * > Contact Support Team to enable this field.
         */
        visaTransactionId?: string;
        /**
         * The 3DS transaction ID of the 3DS session sent in notifications. The value is Base64-encoded and is returned for transactions with directoryResponse 'N' or 'Y'. If you want to submit the xid in your 3D Secure 1 request, use the `mpiData.xid`, field.
         *
         * Example: ODgxNDc2MDg2MDExODk5MAAAAAA=
         */
        xid?: string;
    }
    export interface ResponseAdditionalDataDeliveryAddress {
        /**
         * The delivery address city passed in the payment request.
         */
        "deliveryAddress.city"?: string;
        /**
         * The delivery address country passed in the payment request.
         *
         * Example: NL
         */
        "deliveryAddress.country"?: string;
        /**
         * The delivery address house number or name passed in the payment request.
         */
        "deliveryAddress.houseNumberOrName"?: string;
        /**
         * The delivery address postal code passed in the payment request.
         *
         * Example: 1011 DJ
         */
        "deliveryAddress.postalCode"?: string;
        /**
         * The delivery address state or province passed in the payment request.
         *
         * Example: NH
         */
        "deliveryAddress.stateOrProvince"?: string;
        /**
         * The delivery address street passed in the payment request.
         */
        "deliveryAddress.street"?: string;
    }
    export interface ResponseAdditionalDataInstallments {
        /**
         * Type of installment. The value of `installmentType` should be **IssuerFinanced**.
         */
        "installmentPaymentData.installmentType"?: string;
        /**
         * Annual interest rate.
         */
        "installmentPaymentData.option[itemNr].annualPercentageRate"?: string;
        /**
         * First Installment Amount in minor units.
         */
        "installmentPaymentData.option[itemNr].firstInstallmentAmount"?: string;
        /**
         * Installment fee amount in minor units.
         */
        "installmentPaymentData.option[itemNr].installmentFee"?: string;
        /**
         * Interest rate for the installment period.
         */
        "installmentPaymentData.option[itemNr].interestRate"?: string;
        /**
         * Maximum number of installments possible for this payment.
         */
        "installmentPaymentData.option[itemNr].maximumNumberOfInstallments"?: string;
        /**
         * Minimum number of installments possible for this payment.
         */
        "installmentPaymentData.option[itemNr].minimumNumberOfInstallments"?: string;
        /**
         * Total number of installments possible for this payment.
         */
        "installmentPaymentData.option[itemNr].numberOfInstallments"?: string;
        /**
         * Subsequent Installment Amount in minor units.
         */
        "installmentPaymentData.option[itemNr].subsequentInstallmentAmount"?: string;
        /**
         * Total amount in minor units.
         */
        "installmentPaymentData.option[itemNr].totalAmountDue"?: string;
        /**
         * Possible values:
         * * PayInInstallmentsOnly
         * * PayInFullOnly
         * * PayInFullOrInstallments
         */
        "installmentPaymentData.paymentOptions"?: string;
        /**
         * The number of installments that the payment amount should be charged with.
         *
         * Example: 5
         * > Only relevant for card payments in countries that support installments.
         */
        "installments.value"?: string;
    }
    export interface ResponseAdditionalDataNetworkTokens {
        /**
         * Indicates whether a network token is available for the specified card.
         */
        "networkToken.available"?: string;
        /**
         * The Bank Identification Number of a tokenized card, which is the first six digits of a card number.
         */
        "networkToken.bin"?: string;
        /**
         * The last four digits of a card number.
         */
        "networkToken.tokenSummary"?: string;
    }
    export interface ResponseAdditionalDataPayPal {
        /**
         * The buyer's PayPal account email address.
         *
         * Example: paypaltest@adyen.com
         */
        paypalEmail?: string;
        /**
         * The buyer's PayPal ID.
         *
         * Example: LF5HCWWBRV2KL
         */
        paypalPayerId?: string;
        /**
         * The buyer's country of residence.
         *
         * Example: NL
         */
        paypalPayerResidenceCountry?: string;
        /**
         * The status of the buyer's PayPal account.
         *
         * Example: unverified
         */
        paypalPayerStatus?: string;
        /**
         * The eligibility for PayPal Seller Protection for this payment.
         *
         * Example: Ineligible
         */
        paypalProtectionEligibility?: string;
    }
    export interface ResponseAdditionalDataSepa {
        /**
         * The transaction signature date.
         *
         * Format: yyyy-MM-dd
         */
        "sepadirectdebit.dateOfSignature"?: string;
        /**
         * Its value corresponds to the pspReference value of the transaction.
         */
        "sepadirectdebit.mandateId"?: string;
        /**
         * This field can take one of the following values:
         * * OneOff: (OOFF) Direct debit instruction to initiate exactly one direct debit transaction.
         *
         * * First: (FRST) Initial/first collection in a series of direct debit instructions.
         * * Recurring: (RCUR) Direct debit instruction to carry out regular direct debit transactions initiated by the creditor.
         * * Final: (FNAL) Last/final collection in a series of direct debit instructions.
         *
         * Example: OOFF
         */
        "sepadirectdebit.sequenceType"?: string;
    }
    export interface RiskData {
        /**
         * Contains client-side data, like the device fingerprint, cookies, and specific browser settings.
         */
        clientData?: string;
    }
    export interface SDKEphemPubKey {
        /**
         * The `crv` value as received from the 3D Secure 2 SDK.
         */
        crv?: string;
        /**
         * The `kty` value as received from the 3D Secure 2 SDK.
         */
        kty?: string;
        /**
         * The `x` value as received from the 3D Secure 2 SDK.
         */
        x?: string;
        /**
         * The `y` value as received from the 3D Secure 2 SDK.
         */
        y?: string;
    }
    export interface SamsungPayDetails {
        fundingSource?: "credit" | "debit";
        /**
         *
         */
        samsungPayToken: string;
        /**
         * This is the `recurringDetailReference` returned in the response when you created the token.
         */
        storedPaymentMethodId?: string;
        /**
         * **samsungpay**
         */
        type: string;
    }
    export interface SepaDirectDebitDetails {
        /**
         * The International Bank Account Number (IBAN).
         */
        iban: string;
        /**
         * The name of the bank account holder.
         */
        ownerName: string;
        /**
         * This is the `recurringDetailReference` returned in the response when you created the token.
         */
        storedPaymentMethodId?: string;
        /**
         * **sepadirectdebit**
         */
        type: string;
    }
    export interface ServiceError {
        errorCode?: string;
        errorType?: string;
        message?: string;
    }
    export interface ShopperInput {
        /**
         * Specifies visibility of billing address fields.
         *
         * Permitted values:
         * * editable
         * * hidden
         * * readOnly
         */
        billingAddress?: "editable" | "hidden" | "readOnly";
        /**
         * Specifies visibility of delivery address fields.
         *
         * Permitted values:
         * * editable
         * * hidden
         * * readOnly
         */
        deliveryAddress?: "editable" | "hidden" | "readOnly";
        /**
         * Specifies visibility of personal details.
         *
         * Permitted values:
         * * editable
         * * hidden
         * * readOnly
         */
        personalDetails?: "editable" | "hidden" | "readOnly";
    }
    export interface ShopperInteractionDevice {
        /**
         * Locale on the shopper interaction device.
         */
        locale?: string;
        /**
         * Operating system running on the shopper interaction device.
         */
        os?: string;
        /**
         * Version of the operating system on the shopper interaction device.
         */
        osVersion?: string;
    }
    export interface Split {
        /**
         * The account to which this split applies.
         *
         * >Required if the type is `MarketPlace`.
         */
        account?: string;
        /**
         * The amount of this split.
         */
        amount: SplitAmount;
        /**
         * A description of this split.
         */
        description?: string;
        /**
         * The reference of this split. Used to link other operations (e.g. captures and refunds) to this split.
         *
         * >Required if the type is `MarketPlace`.
         */
        reference?: string;
        /**
         * The type of this split.
         *
         * >Permitted values: `Default`, `PaymentFee`, `VAT`, `Commission`, `MarketPlace`, `BalanceAccount`.
         */
        type: "BalanceAccount" | "Commission" | "Default" | "MarketPlace" | "PaymentFee" | "VAT" | "Verification";
    }
    export interface SplitAmount {
        /**
         * The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).
         *
         * If this value is not provided, the currency in which the payment is made will be used.
         */
        currency?: string;
        /**
         * The payable amount that can be charged for the transaction.
         *
         * The transaction amount needs to be represented in minor units according to the [following table](https://docs.adyen.com/development-resources/currency-codes).
         */
        value: number; // int64
    }
    export interface StoredDetails {
        /**
         * The stored bank account.
         */
        bank?: BankAccount;
        /**
         * The stored card information.
         */
        card?: Card;
        /**
         * The email associated with stored payment details.
         */
        emailAddress?: string;
    }
    export interface StoredPaymentMethod {
        /**
         * The brand of the card.
         */
        brand?: string;
        /**
         * The month the card expires.
         */
        expiryMonth?: string;
        /**
         * The year the card expires.
         */
        expiryYear?: string;
        /**
         * The unique payment method code.
         */
        holderName?: string;
        /**
         * A unique identifier of this stored payment method.
         */
        id?: string;
        /**
         * The last four digits of the PAN.
         */
        lastFour?: string;
        /**
         * The display name of the stored payment method.
         */
        name?: string;
        /**
         * The shopper’s email address.
         */
        shopperEmail?: string;
        /**
         * The supported shopper interactions for this stored payment method.
         */
        supportedShopperInteractions?: string[];
        /**
         * The type of payment method.
         */
        type?: string;
    }
    export interface StoredPaymentMethodDetails {
        /**
         * This is the `recurringDetailReference` returned in the response when you created the token.
         */
        storedPaymentMethodId?: string;
        /**
         * The payment method type.
         */
        type: string;
    }
    export interface SubInputDetail {
        /**
         * Configuration parameters for the required input.
         */
        configuration?: {
            [name: string]: string;
        };
        /**
         * In case of a select, the items to choose from.
         */
        items?: Item[];
        /**
         * The value to provide in the result.
         */
        key?: string;
        /**
         * True if this input is optional to provide.
         */
        optional?: boolean;
        /**
         * The type of the required input.
         */
        type?: string;
        /**
         * The value can be pre-filled, if available.
         */
        value?: string;
    }
    export interface ThreeDS2RequestData {
        /**
         * Required for [authentication-only integration](https://docs.adyen.com/checkout/3d-secure/other-3ds-flows/authentication-only). The acquiring BIN enrolled for 3D Secure 2. This string should match the value that you will use in the authorisation. Use 123456 on the Test platform.
         */
        acquirerBIN?: string;
        /**
         * Required for [authentication-only integration](https://docs.adyen.com/checkout/3d-secure/other-3ds-flows/authentication-only). The merchantId that is enrolled for 3D Secure 2 by the merchant's acquirer. This string should match the value that you will use in the authorisation. Use 123456 on the Test platform.
         */
        acquirerMerchantID?: string;
        /**
         * If set to true, you will only perform the [3D Secure 2 authentication](https://docs.adyen.com/checkout/3d-secure/other-3ds-flows/authentication-only), and not the payment authorisation.
         */
        authenticationOnly?: boolean;
        /**
         * Possibility to specify a preference for receiving a challenge from the issuer.
         * Allowed values:
         * * `noPreference`
         * * `requestNoChallenge`
         * * `requestChallenge`
         * * `requestChallengeAsMandate`
         *
         */
        challengeIndicator?: "noPreference" | "requestNoChallenge" | "requestChallenge" | "requestChallengeAsMandate";
        /**
         * The environment of the shopper.
         * Allowed values:
         * * `app`
         * * `browser`
         */
        deviceChannel: string;
        /**
         * Display options for the 3D Secure 2 SDK.
         * Optional and only for `deviceChannel` **app**.
         */
        deviceRenderOptions?: DeviceRenderOptions;
        /**
         * Required for merchants that have been enrolled for 3D Secure 2 by another party than Adyen, mostly [authentication-only integrations](https://docs.adyen.com/checkout/3d-secure/other-3ds-flows/authentication-only). The `mcc` is a four-digit code with which the previously given `acquirerMerchantID` is registered at the scheme.
         */
        mcc?: string;
        /**
         * Required for [authentication-only integration](https://docs.adyen.com/checkout/3d-secure/other-3ds-flows/authentication-only). The merchant name that the issuer presents to the shopper if they get a challenge. We recommend to use the same value that you will use in the authorization. Maximum length is 40 characters.
         * > Optional for a [full 3D Secure 2 integration](https://docs.adyen.com/checkout/3d-secure/native-3ds2/api-integration). Use this field if you are enrolled for 3D Secure 2 with us and want to override the merchant name already configured on your account.
         */
        merchantName?: string;
        /**
         * The `messageVersion` value indicating the 3D Secure 2 protocol version.
         */
        messageVersion?: string;
        /**
         * URL to where the issuer should send the `CRes`. Required if you are not using components for `channel` **Web** or if you are using classic integration `deviceChannel` **browser**.
         */
        notificationURL?: string;
        /**
         * The `sdkAppID` value as received from the 3D Secure 2 SDK.
         * Required for `deviceChannel` set to **app**.
         */
        sdkAppID?: string;
        /**
         * The `sdkEncData` value as received from the 3D Secure 2 SDK.
         * Required for `deviceChannel` set to **app**.
         */
        sdkEncData?: string;
        /**
         * The `sdkEphemPubKey` value as received from the 3D Secure 2 SDK.
         * Required for `deviceChannel` set to **app**.
         */
        sdkEphemPubKey?: SDKEphemPubKey;
        /**
         * The maximum amount of time in minutes for the 3D Secure 2 authentication process.
         * Optional and only for `deviceChannel` set to **app**. Defaults to **60** minutes.
         */
        sdkMaxTimeout?: number; // int32
        /**
         * The `sdkReferenceNumber` value as received from the 3D Secure 2 SDK.
         * Only for `deviceChannel` set to **app**.
         */
        sdkReferenceNumber?: string;
        /**
         * The `sdkTransID` value as received from the 3D Secure 2 SDK.
         * Only for `deviceChannel` set to **app**.
         */
        sdkTransID?: string;
        /**
         * Completion indicator for the device fingerprinting.
         */
        threeDSCompInd?: string;
        /**
         * Required for [authentication-only integration](https://docs.adyen.com/checkout/3d-secure/other-3ds-flows/authentication-only) for Visa. Unique 3D Secure requestor identifier assigned by the Directory Server when you enrol for 3D Secure 2.
         */
        threeDSRequestorID?: string;
        /**
         * Required for [authentication-only integration](https://docs.adyen.com/checkout/3d-secure/other-3ds-flows/authentication-only) for Visa. Unique 3D Secure requestor name assigned by the Directory Server when you enrol for 3D Secure 2.
         */
        threeDSRequestorName?: string;
        /**
         * URL of the (customer service) website that will be shown to the shopper in case of technical errors during the 3D Secure 2 process.
         */
        threeDSRequestorURL?: string;
        /**
         * Identify the type of the transaction being authenticated.
         */
        transactionType?: "goodsOrServicePurchase" | "checkAcceptance" | "accountFunding" | "quasiCashTransaction" | "prepaidActivationAndLoad";
        /**
         * The `whiteListStatus` value returned from a previous 3D Secure 2 transaction, only applicable for 3D Secure 2 protocol version 2.2.0.
         */
        whiteListStatus?: string;
    }
    export interface ThreeDSecureData {
        /**
         * In 3D Secure 1, the authentication response if the shopper was redirected.
         *
         * In 3D Secure 2, this is the `transStatus` from the challenge result. If the transaction was frictionless, omit this parameter.
         */
        authenticationResponse?: "Y" | "N" | "U" | "A";
        /**
         * The cardholder authentication value (base64 encoded, 20 bytes in a decoded form).
         */
        cavv?: string; // byte
        /**
         * The CAVV algorithm used. Include this only for 3D Secure 1.
         */
        cavvAlgorithm?: string;
        /**
         * In 3D Secure 1, this is the enrollment response from the 3D directory server.
         *
         * In 3D Secure 2, this is the `transStatus` from the `ARes`.
         */
        directoryResponse?: "A" | "C" | "D" | "I" | "N" | "R" | "U" | "Y";
        /**
         * Supported for 3D Secure 2. The unique transaction identifier assigned by the Directory Server (DS) to identify a single transaction.
         */
        dsTransID?: string;
        /**
         * The electronic commerce indicator.
         */
        eci?: string;
        /**
         * The version of the 3D Secure protocol.
         */
        threeDSVersion?: string;
        /**
         * Supported for 3D Secure 1. The transaction identifier (Base64-encoded, 20 bytes in a decoded form).
         */
        xid?: string; // byte
    }
    export interface UpdatePaymentLinkRequest {
        /**
         * Status of the payment link. Possible values:
         * * **expired**
         */
        status: "expired";
    }
    export interface VippsDetails {
        /**
         * This is the `recurringDetailReference` returned in the response when you created the token.
         */
        storedPaymentMethodId?: string;
        /**
         *
         */
        telephoneNumber: string;
        /**
         * **vipps**
         */
        type: string;
    }
    export interface VisaCheckoutDetails {
        fundingSource?: "credit" | "debit";
        /**
         * **visacheckout**
         */
        type: string;
        /**
         *
         */
        visaCheckoutCallId: string;
    }
    export interface WeChatPayDetails {
        appId?: string;
        openid?: string;
        /**
         * **wechatpay**
         */
        type: string;
    }
    export interface WeChatPayMiniProgramDetails {
        appId?: string;
        openid?: string;
        /**
         * **wechatpayMiniProgram**
         */
        type: string;
    }
}
declare namespace Paths {
    namespace GetPaymentLinksLinkId {
        namespace Parameters {
            export type LinkId = string;
        }
        export interface PathParameters {
            linkId: Parameters.LinkId;
        }
        namespace Responses {
            export type $200 = ICheckout.PaymentLinkResource;
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
    namespace PatchPaymentLinksLinkId {
        namespace Parameters {
            export type LinkId = string;
        }
        export interface PathParameters {
            linkId: Parameters.LinkId;
        }
        export type RequestBody = ICheckout.UpdatePaymentLinkRequest;
        namespace Responses {
            export type $200 = ICheckout.PaymentLinkResource;
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
    namespace PostOrders {
        export type RequestBody = ICheckout.CheckoutCreateOrderRequest;
        namespace Responses {
            export type $200 = ICheckout.CheckoutCreateOrderResponse;
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
    namespace PostOrdersCancel {
        export type RequestBody = ICheckout.CheckoutCancelOrderRequest;
        namespace Responses {
            export type $200 = ICheckout.CheckoutCancelOrderResponse;
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
    namespace PostOriginKeys {
        export type RequestBody = ICheckout.CheckoutUtilityRequest;
        namespace Responses {
            export type $200 = ICheckout.CheckoutUtilityResponse;
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
    namespace PostPaymentLinks {
        export type RequestBody = ICheckout.CreatePaymentLinkRequest;
        namespace Responses {
            export type $200 = ICheckout.PaymentLinkResource;
            export interface $201 {
            }
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
    namespace PostPaymentMethods {
        export type RequestBody = ICheckout.PaymentMethodsRequest;
        namespace Responses {
            export type $200 = ICheckout.PaymentMethodsResponse;
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
    namespace PostPaymentMethodsBalance {
        export type RequestBody = ICheckout.CheckoutBalanceCheckRequest;
        namespace Responses {
            export type $200 = ICheckout.CheckoutBalanceCheckResponse;
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
    namespace PostPaymentSession {
        export type RequestBody = ICheckout.PaymentSetupRequest;
        namespace Responses {
            export type $200 = ICheckout.PaymentSetupResponse;
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
    namespace PostPayments {
        export type RequestBody = ICheckout.PaymentRequest;
        namespace Responses {
            export type $200 = ICheckout.PaymentResponse;
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
    namespace PostPaymentsDetails {
        export type RequestBody = ICheckout.DetailsRequest;
        namespace Responses {
            export type $200 = ICheckout.PaymentResponse;
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
    namespace PostPaymentsResult {
        export type RequestBody = ICheckout.PaymentVerificationRequest;
        namespace Responses {
            export type $200 = ICheckout.PaymentVerificationResponse;
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
