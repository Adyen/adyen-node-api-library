
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
 * Version of Payments: v51
 *
 * Copyright (c) 2019 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */
 

declare namespace IPayments {
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
    export interface AdditionalData3DSecure {
        /**
         * This parameter indicates that you are able to process 3D Secure 2 transactions natively on your payment page. Send this field when you are using `/payments` endpoint with any of our [native 3D Secure 2 solutions](https://docs.adyen.com/checkout/3d-secure/native-3ds2), such as Components or Drop-in. Possible values:
         * * **true** - Ready to support native 3D Secure 2 authentication. Setting this to true does not mean always applying 3D Secure 2. Adyen still selects the version of 3D Secure based on configuration to optimize authorisation rates and improve the shopper's experience.
         * * **false** – Not ready to support native 3D Secure 2 authentication. Adyen will not offer 3D Secure 2 to your shopper regardless of your configuration.
         * > This parameter only indicates your readiness to support 3D Secure 2 natively on Drop-in or Components. To specify that you want to perform 3D Secure on a transaction, use Dynamic 3D Secure or send the executeThreeD parameter.
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
         * Indicates the [exemption type](https://docs-admin.is.adyen.com/payments-fundamentals/psd2-sca-compliance-and-implementation-guide#specifypreferenceinyourapirequest) that you want to request for the transaction. Possible values:
         * * **lowValue** 
         * * **secureCorporate** 
         * * **trustedBeneficiary** 
         * * **transactionRiskAnalysis** 
         */
        scaExemption?: string;
    }
    export interface AdditionalDataAirline {
        /**
         * Passenger name, initials, and a title.
         * * Format: last name + first name or initials + title.
         * * Example: *FLYER / MARY MS*.
         * * minLength: 1
         * * maxLength: 49
         */
        "airline.passenger_name"?: string;
        /**
         * The [CRS](https://en.wikipedia.org/wiki/Computer_reservation_system) used to make the reservation and purchase the ticket.
         * * Format: alphanumeric.
         * * minLength: 4
         * * maxLength: 4
         */
        "airline.computerized_reservation_system"?: string;
        /**
         * [IATA](https://www.iata.org/services/pages/codes.aspx) 3-digit accounting code (PAX); numeric. It identifies the carrier.
         * * Format: IATA 3-digit accounting code (PAX)
         * * Example: KLM = 074
         * * minLength: 3
         * * maxLength: 3
         */
        "airline.airline_code"?: string;
        /**
         * The ticket's unique identifier.
         * * minLength: 1
         * * maxLength: 150
         */
        "airline.ticket_number"?: string;
        /**
         * Flight departure date. Local time `(HH:mm)` is optional.
         * * Date format: `yyyy-MM-dd`
         * * Date and time format: `yyyy-MM-dd HH:mm`
         * * minLength: 10
         * * maxLength: 16
         */
        "airline.flight_date"?: string;
        /**
         * Reference number; alphanumeric.
         * * minLength: 0
         * * maxLength: 20
         */
        "airline.customer_reference_number"?: string;
        /**
         * Address of the place/agency that issued the ticket.
         * * minLength: 0
         * * maxLength: 16
         */
        "airline.ticket_issue_address"?: string;
        /**
         * [IATA](https://www.iata.org/services/pages/codes.aspx) 2-letter accounting code (PAX); alphabetical. It identifies the carrier.
         * * Format: [IATA](https://www.iata.org/services/pages/codes.aspx) 2-letter airline code
         * * Example: KLM = KL
         * * minLength: 2
         * * maxLength: 2
         */
        "airline.airline_designator_code"?: string;
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
        /**
         * 2-letter agency plan identifier; alphabetical.
         * * minLength: 2
         * * maxLength: 2
         */
        "airline.agency_plan_name"?: string;
        /**
         * Reference number for the invoice, issued by the agency.
         * * minLength: 1
         * * maxLength: 6
         */
        "airline.agency_invoice_number"?: string;
        /**
         * Chargeable amount for boarding the plane.
         * The transaction amount needs to be represented in minor units according to the [following table](https://docs.adyen.com/development-resources/currency-codes).
         * * minLength: 1
         * * maxLength: 18
         */
        "airline.boarding_fee"?: string;
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
         * The flight identifier.
         * * minLength: 1
         * * maxLength: 5
         */
        "airline.leg.flight_number"?: string;
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
         * [Fare basis code](https://en.wikipedia.org/wiki/Fare_basis_code); alphanumeric.
         * * minLength: 1
         * * maxLength: 7
         */
        "airline.leg.fare_base_code"?: string;
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
         * Alphabetical identifier of the destination/arrival airport.
         * This field is required/mandatory if the airline data includes leg details.
         * * Format: [IATA](https://www.iata.org/services/pages/codes.aspx) 3-letter airport code.
         * * Example: Amsterdam = AMS
         * * minLength: 3
         * * maxLength: 3
         */
        "airline.leg.destination_code"?: string;
        /**
         * 	
         * Date and time of travel. [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-compliant.
         * * Format: `yyyy-MM-dd HH:mm`
         * * minLength: 16
         * * maxLength: 16
         */
        "airline.leg.date_of_travel"?: string;
        /**
         * [Departure tax](https://en.wikipedia.org/wiki/Departure_tax). Amount charged by a country to an individual upon their leaving. The transaction amount needs to be represented in minor units according to the [following table](https://docs.adyen.com/development-resources/currency-codes).
         * * minLength: 1
         * * maxLength: 12
         */
        "airline.leg.depart_tax"?: string;
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
         * Passenger type code (PTC). IATA PTC values are 3-letter alphabetical. Example: ADT, SRC, CNN, INS.
         * 
         * However, several carriers use non-standard codes that can be up to 5 alphanumeric characters.
         * * minLength: 3
         * * maxLength: 6
         */
        "airline.passenger.traveller_type"?: string;
        /**
         * Telephone number of the passenger, including country code. This is an alphanumeric field that can include the '+' and '-' signs.
         * * minLength: 3
         * * maxLength: 30
         */
        "airline.passenger.telephone_number"?: string;
        /**
         * Date of birth of the passenger.
         * 
         * Date format: `yyyy-MM-dd`
         * * minLength: 10
         * * maxLength: 10
         */
        "airline.passenger.date_of_birth"?: string;
    }
    export interface AdditionalDataCarRental {
        /**
         * The rental agreement number associated with this car rental.
         * * Format: Alphanumeric
         * * maxLength: 14
         */
        "carRental.rentalAgreementNumber"?: string;
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
         * The state or province where the car must be returned.
         * * Format: Alphanumeric
         * * maxLength: 3
         */
        "carRental.returnStateProvince"?: string;
        /**
         * The country where the car must be returned.
         * * Format: Alphanumeric
         * * maxLength: 2
         */
        "carRental.returnCountry"?: string;
        /**
         * Agency code, phone number, or address abbreviation
         * * Format: Alphanumeric
         * * maxLength: 10
         */
        "carRental.returnLocationId"?: string;
        /**
         * The last date to return the car by.
         * * Date format: `yyyyMMdd`
         */
        "carRental.returnDate"?: string;
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
         * The location from which the car is rented.
         * * Format: Alphanumeric
         * * maxLength: 18
         */
        "carRental.locationCity"?: string;
        /**
         * Pick-up date.
         * * Date format: `yyyyMMdd`
         */
        "carRental.locationStateProvince"?: string;
        /**
         * The customer service phone number of the car rental company.
         * * Format: Alphanumeric
         * * maxLength: 17
         */
        "carRental.locationCountry"?: string;
        /**
         * Daily rental rate.
         * * Format: Alphanumeric
         * * maxLength: 12
         */
        "carRental.rentalClassId"?: string;
        /**
         * Specifies whether the given rate is applied daily or weekly.
         * * D - Daily rate.
         * * W - Weekly rate.
         */
        "carRental.daysRented"?: string;
        /**
         * Indicates whether the goods or services were tax-exempt, or tax was not collected.
         * 
         * Values:
         * * 0 - Tax was not collected
         * * 1 - Goods or services were tax exempt
         */
        "carRental.taxExemptIndicator"?: string;
        /**
         * Indicates what market-specific dataset will be submitted or is being submitted. Value should be "A" for Car rental. This should be included in the auth message.
         * * Format: Alphanumeric
         * * maxLength: 1
         */
        "travelEntertainmentAuthData.market"?: string;
        /**
         * Number of nights.  This should be included in the auth message.
         * * Format: Numeric
         * * maxLength: 2
         */
        "travelEntertainmentAuthData.duration"?: string;
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
         * Indicates if the customer was a "no-show" (neither keeps nor cancels their booking).
         * * 0 - Not applicable.
         * * 1 - Customer was a no show.
         */
        "carRental.noShowIndicator"?: string;
        /**
         * Charge associated with not returning a vehicle to the original rental location.
         */
        "carRental.oneWayDropOffCharges"?: string;
    }
    export interface AdditionalDataCommon {
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
         * Make sure you are sending `shopperInteraction` **ContAuth** and `recurringProcessingModel` **Subscription** or **UnscheduledCardonFile** to ensure that the transaction is classified as MIT.
         */
        networkTxReference?: string;
        /**
         * Boolean indicator that can be optionally used for performing debit transactions on combo cards (for example, combo cards in Brazil). This is not mandatory but we recommend that you set this to true if you want to use the `selectedBrand` value to specify how to process the transaction.
         */
        overwriteBrand?: string;
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
         * This field contains an identifier of the actual merchant when a transaction is submitted via a payment facilitator. The payment facilitator must send in this unique ID, which is used by schemes to identify the merchant.
         * 
         * A unique identifier per submerchant that is required if the transaction is performed by a registered payment facilitator.
         * * Format: alpha-numeric.
         * * Fixed length: 15 characters.
         */
        subMerchantID?: string;
    }
    export interface AdditionalDataLevel23 {
        /**
         * Customer code, if supplied by a customer.
         * Encoding: ASCII.
         * Max length: 25 characters.
         * > Required for Level 2 and Level 3 data.
         */
        "enhancedSchemeData.customerReference"?: string;
        /**
         * Total tax amount, in minor units.
         * 
         * For example, 2000 means USD 20.00.
         * Max length: 12 characters.
         * > Required for Level 2 and Level 3 data.
         */
        "enhancedSchemeData.totalTaxAmount"?: number;
        /**
         * Shipping amount, in minor units.
         * 
         * For example, 2000 means USD 20.00.
         * Max length: 12 characters.
         */
        "enhancedSchemeData.freightAmount"?: number;
        /**
         * Duty amount, in minor units.
         * 
         * For example, 2000 means USD 20.00.
         * Max length: 12 characters.
         */
        "enhancedSchemeData.dutyAmount"?: number;
        /**
         * The postal code of a destination address.
         * 
         * Encoding: ASCII.
         * Max length: 10 characters.
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
         * The postal code of a "ship-from" address.
         * 
         * Encoding: ASCII.
         * Max length: 10 characters.
         */
        "enhancedSchemeData.shipFromPostalCode"?: string;
        /**
         * Destination country code.
         * 
         * Encoding: ASCII.
         * Max length: 3 characters.
         */
        "enhancedSchemeData.destinationCountryCode"?: string;
        /**
         * Order date.
         * * Format: `ddMMyy`
         * 
         * Encoding: ASCII.
         * Max length: 6 characters.
         */
        "enhancedSchemeData.orderDate"?: string;
        /**
         * Item commodity code.
         * Encoding: ASCII.
         * Max length: 12 characters.
         */
        "enhancedSchemeData.itemDetailLine[itemNr].commodityCode"?: string;
        /**
         * Item description.
         * Encoding: ASCII.
         * Max length: 26 characters.
         */
        "enhancedSchemeData.itemDetailLine[itemNr].description"?: string;
        /**
         * Product code.
         * Encoding: ASCII.
         * Max length: 12 characters.
         */
        "enhancedSchemeData.itemDetailLine[itemNr].productCode"?: string;
        /**
         * Quantity, specified as an integer value.
         * Value must be greater than 0.
         * Max length: 12 characters.
         */
        "enhancedSchemeData.itemDetailLine[itemNr].quantity"?: number;
        /**
         * Item unit of measurement.
         * Encoding: ASCII.
         * Max length: 3 characters.
         */
        "enhancedSchemeData.itemDetailLine[itemNr].unitOfMeasure"?: string;
        /**
         * Unit price, specified in [minor units](https://docs.adyen.com/development-resources/currency-codes).
         * Max length: 12 characters.
         */
        "enhancedSchemeData.itemDetailLine[itemNr].unitPrice"?: number;
        /**
         * Discount amount, in minor units.
         * 
         * For example, 2000 means USD 20.00.
         * Max length: 12 characters.
         */
        "enhancedSchemeData.itemDetailLine[itemNr].discountAmount"?: number;
        /**
         * Total amount, in minor units.
         * For example, 2000 means USD 20.00.
         * Max length: 12 characters.
         */
        "enhancedSchemeData.itemDetailLine[itemNr].totalAmount"?: number;
    }
    export interface AdditionalDataLodging {
        /**
         * The toll free phone number for the hotel/lodgings.
         * * Format: Alphanumeric
         * * maxLength: 17
         */
        "lodging.customerServiceTollFreeNumber"?: string;
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
         * Card acceptor’s internal invoice or billing ID reference number.
         * * Format: Alphanumeric
         * * maxLength: 25
         */
        "lodging.folioNumber"?: string;
        /**
         * Identifies specific lodging property location by its local phone number.
         * * Format: Alphanumeric
         * * maxLength: 17
         */
        "lodging.propertyPhoneNumber"?: string;
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
         * Total number of nights the room will be rented.
         * * Format: Numeric
         * * maxLength: 4
         */
        "lodging.room1.numberOfNights"?: string;
        /**
         * Identifies that the facility complies with the Hotel and Motel Fire Safety Act of 1990. Values can be: 'Y' or 'N'.
         * * Format: Alphabetic
         * * maxLength: 1
         */
        "lodging.fireSafetyActIndicator"?: string;
        /**
         * Indicates what market-specific dataset will be submitted or is being submitted. Value should be "H" for Hotel. This should be included in the auth message.
         * * Format: Alphanumeric
         * * maxLength: 1
         */
        "travelEntertainmentAuthData.market"?: string;
        /**
         * Number of nights.  This should be included in the auth message.
         * * Format: Numeric
         * * maxLength: 2
         */
        "travelEntertainmentAuthData.duration"?: string;
        /**
         * The folio cash advances.
         * * Format: Numeric
         * * maxLength: 12
         */
        "lodging.folioCashAdvances"?: string;
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
         * Total tax amount.
         * * Format: Numeric
         * * maxLength: 12
         */
        "lodging.totalTax"?: string;
        /**
         * Total room tax amount.
         * * Format: Numeric
         * * maxLength: 12
         */
        "lodging.totalRoomTax"?: string;
    }
    export interface AdditionalDataModifications {
        /**
         * This is the installment option selected by the shopper. It is required only if specified by the user.
         */
        "installmentPaymentData.selectedInstallmentOption"?: string;
    }
    export interface AdditionalDataOpenInvoice {
        /**
         * The number of invoice lines included in `openinvoicedata`.
         * 
         * There needs to be at least one line, so `numberOfLines` needs to be at least 1.
         */
        "openinvoicedata.numberOfLines"?: number;
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
         * Required for the Klarna account, identifying an installment plan. Include Klarna’s `pclassid` for the installment plan.
         */
        "openinvoicedata.installmentConfigurationKey"?: string;
        /**
         * The three-character ISO currency code.
         */
        "openinvoicedata.line[itemNr].currencyCode"?: string;
        /**
         * A text description of the product the invoice line refers to.
         */
        "openinvoicedata.line[itemNr].description"?: string;
        /**
         * The price for one item in the invoice line, represented in minor units.
         * 
         * The due amount for the item, VAT excluded.
         */
        "openinvoicedata.line[itemNr].itemAmount"?: number;
        /**
         * The VAT due for one item in the invoice line, represented in minor units.
         */
        "openinvoicedata.line[itemNr].itemVatAmount"?: number;
        /**
         * The VAT percentage for one item in the invoice line, represented in minor units.
         * 
         * For example, 19% VAT is specified as 1900.
         */
        "openinvoicedata.line[itemNr].itemVatPercentage"?: number;
        /**
         * A unique id for this item. Required for RatePay if the description of each item is not unique.
         */
        "openinvoicedata.line[itemNr].itemId"?: string;
        /**
         * The number of units purchased of a specific product.
         */
        "openinvoicedata.line[itemNr].numberOfItems"?: number;
        /**
         * The country-specific VAT category a product falls under.
         * 
         * Allowed values:
         * * High
         * * Low
         * * None.
         */
        "openinvoicedata.line[itemNr].vatCategory"?: string;
    }
    export interface AdditionalDataRatepay {
        /**
         * Amount the customer has to pay each month.
         */
        "ratepay.installmentAmount"?: number;
        /**
         * Amount of the last installment.
         */
        "ratepay.lastInstallmentAmount"?: number;
        /**
         * Interest rate of this installment. Double
         */
        "ratepay.interestRate"?: number;
        /**
         * Calendar day of the first payment.
         */
        "ratepay.paymentFirstday"?: number;
        /**
         * Identification name or number for the invoice, defined by the merchant.
         */
        "ratepaydata.invoiceId"?: string;
        /**
         * Invoice date, defined by the merchant. If not included, the invoice date is set to the delivery date.
         */
        "ratepaydata.invoiceDate"?: string;
        /**
         * Date the merchant delivered the goods to the customer.
         */
        "ratepaydata.deliveryDate"?: string;
        /**
         * Date by which the customer must settle the payment.
         */
        "ratepaydata.dueDate"?: string;
    }
    export interface AdditionalDataRetry {
        /**
         * The number of times the transaction (not order) has been retried between different payment service providers. For instance, the `chainAttemptNumber` set to 2 means that this transaction has been recently tried on another provider before being sent to Adyen.
         * > If you submit `retry.chainAttemptNumber`, `retry.orderAttemptNumber`, and `retry.skipRetry` values, we also recommend you provide the `merchantOrderReference` to facilitate linking payment attempts together.
         */
        "retry.chainAttemptNumber"?: number;
        /**
         * The index of the attempt to bill a particular order, which is identified by the `merchantOrderReference` field. For example, if a recurring transaction fails and is retried one day later, then the order number for these attempts would be 1 and 2, respectively.
         * > If you submit `retry.chainAttemptNumber`, `retry.orderAttemptNumber`, and `retry.skipRetry` values, we also recommend you provide the `merchantOrderReference` to facilitate linking payment attempts together.
         */
        "retry.orderAttemptNumber"?: number;
        /**
         * The Boolean value indicating whether Adyen should skip or retry this transaction, if possible.
         * > If you submit `retry.chainAttemptNumber`, `retry.orderAttemptNumber`, and `retry.skipRetry` values, we also recommend you provide the `merchantOrderReference` to facilitate linking payment attempts together.
         */
        "retry.skipRetry"?: boolean;
    }
    export interface AdditionalDataRisk {
        /**
         * The method to deliver the goods to the shopper.
         * 
         * Used in [Delivery Method](https://docs.adyen.com/risk-management/configure-standard-risk-rules/consistency-rules#delivery-method) check.
         */
        "riskdata.deliveryMethod"?: string;
        /**
         * The creation date of a shopper account on the merchant's platform.
         * * Format: `yyyy-MM-dd HH:mm:ss`
         * Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules). 
         */
        "riskdata.accountCreationDate"?: string;
        /**
         * This specifies the date when the shopper's account was created.
         * * Format: `yyyy-MM-dd HH:mm:ss.sssZ`
         * 
         * Used in [Shopper Account Age check](https://docs.adyen.com/risk-management/configure-standard-risk-rules/consistency-rules#shopper-account-age).
         */
        "riskdata.shopperAccountCreationDate"?: string;
        /**
         * A risk score coming from a system external to Adyen.
         * * Format: Numeric (when used in custom risk checks)
         * 
         * Used in [External Risk Score check](https://docs.adyen.com/risk-management/configure-standard-risk-rules/external-risk-rules#external-risk-score-generic).
         * 
         * Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
         */
        "riskdata.externalRiskScore"?: string;
        /**
         * Usually a boolean representing the fraud risk assessment coming from a system external to Adyen.
         * 
         * Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
         */
        "riskdata.externalSuspectedFraud"?: string;
        /**
         * A code corresponding to a telecom network operator
         * 
         * Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
         */
        "riskdata.operatorCode"?: string;
        /**
         * Country corresponding to the telecom network operator. Usually a two letter country code.
         * 
         * Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
         */
        "riskdata.operatorCountry"?: {
        };
        /**
         * Name of a telecom network operator e.g. Vodafone, Orange etc.
         * 
         * Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
         */
        "riskdata.operatorName"?: string;
        /**
         * Product code of a telecom product.
         * 
         * Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
         */
        "riskdata.operatorProductCode"?: string;
        /**
         * Represents the payment method as it is understood by the merchant. Does not necessarily have to coincide with the payment method determined by Adyen.
         * 
         * Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
         * 
         * For visacheckout, masterpass, and paywithgoogle, use `riskdata.paymentDataSource` instead.
         */
        "riskdata.paymentMethod"?: string;
        /**
         * Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules) for visacheckout, masterpass, and paywithgoogle.
         */
        "riskdata.paymentDataSource"?: string;
        /**
         * The number of previous non-fraudulent orders made by a shopper.
         * * Format: Numeric
         * 
         * Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
         */
        "riskdata.previousSuccessfulOrders"?: string;
        /**
         * The referral method/reason for joining the merchant's platform.
         * 
         * Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
         */
        "riskdata.referralMethod"?: string;
        /**
         * The user name of a member who referred somebody to the merchant's platform.
         * 
         * Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
         */
        "riskdata.referrerUserName"?: string;
        /**
         * The id of the risk profile to use instead of the merchant account's currently set risk profile.
         */
        "riskdata.riskProfileId"?: string;
        /**
         * A secondary phone number for a user of the merchant's platform.
         * 
         * Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
         */
        "riskdata.secondaryPhoneNumber"?: {
        };
        /**
         * Name of the shipping method.
         * 
         * Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
         */
        "riskdata.shippingMethod"?: string;
        /**
         * The shopper country as determined by the merchant, usually as a 2 letter country code. Does not have to coincide with the Adyen determined shopper country.
         * 
         * Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
         */
        "riskdata.shopperCountry"?: string;
        /**
         * Usually a SIM distribution company name e.g. Core, Elite, GK Tel etc.
         * 
         * Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
         */
        "riskdata.simDistributor"?: string;
        /**
         * User name of an account on the merchant's platform.
         * 
         * Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
         */
        "riskdata.userName"?: string;
        /**
         * Usually a user's loyalty status e.g. Gold, Silver etc.
         * 
         * Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
         */
        "riskdata.userStatus"?: string;
        /**
         * Name of the browser language used by the shopper. Usually a two letter country code (e.g. NL, FR, US etc.)
         * 
         * Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
         */
        "riskdata.browserLanguage"?: string;
        /**
         * ID of the item.
         */
        "riskdata.basket.item[itemNr].itemID"?: string;
        /**
         * A text description of the product the invoice line refers to.
         */
        "riskdata.basket.item[itemNr].productTitle"?: string;
        /**
         * The price of item in the basket, represented in [minor units](https://docs.adyen.com/development-resources/currency-codes).
         */
        "riskdata.basket.item[itemNr].amountPerItem"?: string;
        /**
         * The three-character [ISO currency code](https://en.wikipedia.org/wiki/ISO_4217).
         */
        "riskdata.basket.item[itemNr].currency"?: string;
        /**
         * [Universal Product Code](https://en.wikipedia.org/wiki/Universal_Product_Code).
         */
        "riskdata.basket.item[itemNr].upc"?: string;
        /**
         * [Stock keeping unit](https://en.wikipedia.org/wiki/Stock_keeping_unit).
         */
        "riskdata.basket.item[itemNr].sku"?: string;
        /**
         * Brand of the item.
         */
        "riskdata.basket.item[itemNr].brand"?: string;
        /**
         * Manufacturer of the item.
         */
        "riskdata.basket.item[itemNr].manufacturer"?: string;
        /**
         * Category of the item.
         */
        "riskdata.basket.item[itemNr].category"?: string;
        /**
         * Color of the item.
         */
        "riskdata.basket.item[itemNr].color"?: string;
        /**
         * Size of the item.
         */
        "riskdata.basket.item[itemNr].size"?: string;
        /**
         * Quantity of the item purchased.
         */
        "riskdata.basket.item[itemNr].quantity"?: string;
        /**
         * Email associated with the given product in the basket (usually in electronic gift cards).
         */
        "riskdata.basket.item[itemNr].receiverEmail"?: string;
        /**
         * Code of the promotion.
         */
        "riskdata.promotions.promotion[itemNr].promotionCode"?: string;
        /**
         * Name of the promotion.
         */
        "riskdata.promotions.promotion[itemNr].promotionName"?: string;
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
    }
    export interface AdditionalDataRiskStandalone {
        /**
         * Raw AVS result received from the acquirer, where available. Example: D
         */
        avsResultRaw?: string;
        /**
         * The Bank Identification Number of a credit card, which is the first six digits of a card number. Required for [tokenized card request](/risk-management/standalone-risk#tokenised-pan-request).
         */
        bin?: string;
        /**
         * Raw CVC result received from the acquirer, where available. Example: 1
         */
        cvcResultRaw?: string;
        /**
         * Unique identifier or token for the shopper's card details.
         */
        "risk.token"?: string;
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
        /**
         * Allowed values:
         * * **Eligible** — Merchant is protected by PayPal's Seller Protection Policy for Unauthorized Payments and Item Not Received.
         * * **PartiallyEligible** — Merchant is protected by PayPal's Seller Protection Policy for Item Not Received.
         * * **Ineligible** — Merchant is not protected under the Seller Protection Policy.
         */
        "PayPal.ProtectionEligibility"?: string;
        /**
         * Unique PayPal Customer Account identification number. Character length and limitations: 13 single-byte alphanumeric characters.
         */
        "PayPal.PayerId"?: string;
        /**
         * Unique transaction ID of the payment.
         */
        "PayPal.TransactionId"?: string;
        /**
         * Shopper's country of residence in the form of ISO standard 3166 2-character country codes.
         */
        "PayPal.CountryCode"?: string;
        /**
         * Shopper's first name.
         */
        "PayPal.FirstName"?: string;
        /**
         * Shopper's last name.
         */
        "PayPal.LastName"?: string;
        /**
         * Shopper's phone number.
         */
        "PayPal.Phone"?: string;
        /**
         * Shopper's email.
         */
        "PayPal.EmailId"?: string;
    }
    export interface AdditionalDataTemporaryServices {
        /**
         * Customer code, if supplied by a customer.
         * * Encoding: ASCII
         * * maxLength: 25
         */
        "enhancedSchemeData.customerReference"?: string;
        /**
         * Total tax amount, in minor units. For example, 2000 means USD 20.00
         * * maxLength: 12
         */
        "enhancedSchemeData.totalTaxAmount"?: string;
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
         * Name of the individual requesting temporary services.
         * * maxLength: 40
         */
        "enhancedSchemeData.requestName"?: string;
        /**
         * Amount of time worked during a normal operation for the task or job.
         * * maxLength: 7
         */
        "enhancedSchemeData.regularHoursWorked"?: string;
        /**
         * Amount paid per regular hours worked, minor units.
         * * maxLength: 7
         */
        "enhancedSchemeData.regularHoursRate"?: string;
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
    export interface ApplicationInfo {
        /**
         * Adyen-developed software, such as libraries and plugins, used to interact with the Adyen API. For example, Magento plugin, Java API library, etc.
         */
        adyenLibrary?: IPayments.CommonField;
        /**
         * Adyen-developed software to get payment details. For example, Checkout SDK, Secured Fields SDK, etc.
         */
        adyenPaymentSource?: IPayments.CommonField;
        /**
         * Third-party developed platform used to initiate payment requests. For example, Magento, Zuora, etc.
         */
        externalPlatform?: IPayments.ExternalPlatform;
        /**
         * Merchant developed software, such as cashier application, used to interact with the Adyen API.
         */
        merchantApplication?: IPayments.CommonField;
        /**
         * Merchant device information.
         */
        merchantDevice?: IPayments.MerchantDevice;
        /**
         * Shopper interaction device, such as terminal, mobile device or web browser, to initiate payment requests.
         */
        shopperInteractionDevice?: IPayments.ShopperInteractionDevice;
    }
    export interface AuthenticationResultRequest {
        /**
         * The merchant account identifier, with which the authentication was processed.
         */
        merchantAccount: string;
        /**
         * The pspReference identifier for the transaction.
         */
        pspReference: string;
    }
    export interface AuthenticationResultResponse {
        /**
         * The result of the 3D Secure authentication.
         */
        threeDS1Result?: IPayments.ThreeDS1Result;
        /**
         * The result of the 3D Secure 2 authentication.
         */
        threeDS2Result?: IPayments.ThreeDS2Result;
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
    export interface BrowserInfo {
        /**
         * The accept header value of the shopper's browser.
         */
        acceptHeader: string;
        /**
         * The color depth of the shopper's browser in bits per pixel. This should be obtained by using the browser's `screen.colorDepth` property. Accepted values: 1, 4, 8, 15, 16, 24, 32 or 48 bit color depth.
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
    export interface DeviceRenderOptions {
        /**
         * Supported SDK interface types.
         * Allowed values:
         * * Native
         * * Html
         * * both
         */
        sdkInterface?: "Html" | "Native" | "both";
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
        baseAmount?: IPayments.Amount;
        /**
         * The base points.
         */
        basePoints: number; // int32
        /**
         * The buy rate.
         */
        buy?: IPayments.Amount;
        /**
         * The interbank amount.
         */
        interbank?: IPayments.Amount;
        /**
         * The reference assigned to the forex quote request.
         */
        reference?: string;
        /**
         * The sell rate.
         */
        sell?: IPayments.Amount;
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
        results?: IPayments.FraudCheckResult[];
    }
    export interface Installments {
        /**
         * Defines the number of installments. Its value needs to be greater than zero.
         * 
         * Usually, the maximum allowed number of installments is capped. For example, it may not be possible to split a payment in more than 24 installments. The acquirer sets this upper limit, so its value may vary.
         */
        value: number; // int32
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
         * The amount of prepaid or gift cards used for this purchase.
         */
        giftCardAmount?: IPayments.Amount;
        /**
         * Number of individual prepaid or gift cards used for this purchase.
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
    export interface ModificationRequest {
        /**
         * This field contains additional data, which may be required for a particular modification request.
         * 
         * The additionalData object consists of entries, each of which includes the key and value.
         */
        additionalData?: IPayments.AdditionalDataCommon | IPayments.AdditionalDataModifications | IPayments.AdditionalData3DSecure | IPayments.AdditionalDataAirline | IPayments.AdditionalDataCarRental | IPayments.AdditionalDataLevel23 | IPayments.AdditionalDataLodging | IPayments.AdditionalDataOpenInvoice | IPayments.AdditionalDataRatepay | IPayments.AdditionalDataRetry | IPayments.AdditionalDataRisk | IPayments.AdditionalDataRiskStandalone | IPayments.AdditionalDataTemporaryServices | IPayments.AdditionalDataWallets;
        /**
         * The merchant account that is used to process the payment.
         */
        merchantAccount: string;
        /**
         * The amount that needs to be captured/refunded. Required for `/capture` and `/refund`, not allowed for `/cancel`. The `currency` must match the currency used in authorisation, the `value` must be smaller than or equal to the authorised amount.
         */
        modificationAmount?: IPayments.Amount;
        /**
         * Authentication data produced by an MPI (Mastercard SecureCode or Verified By Visa).
         */
        mpiData?: IPayments.ThreeDSecureData;
        /**
         * The original merchant reference to cancel.
         */
        originalMerchantReference?: string;
        /**
         * The original pspReference of the payment to modify.
         * This reference is returned in:
         * * authorisation response
         * * authorisation notification
         */
        originalReference: string;
        /**
         * Optionally, you can specify your reference for the payment modification. This reference is visible in Customer Area and in reports.
         * Maximum length: 80 characters.
         */
        reference?: string;
        /**
         * The details of how the payment should be split when distributing a payment to a Marketpay Marketplace and its Accounts.
         */
        splits?: IPayments.Split[];
        /**
         * The transaction reference provided by the PED. For point-of-sale integrations only.
         */
        tenderReference?: string;
        /**
         * Unique terminal ID for the PED that originally processed the request. For point-of-sale integrations only.
         */
        uniqueTerminalId?: string;
    }
    export interface ModificationResult {
        /**
         * This field contains additional data, which may be returned in a particular modification response.
         */
        additionalData?: {
        };
        /**
         * Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.
         */
        pspReference?: string;
        /**
         * Indicates if the modification request has been received for processing.
         */
        response?: "[capture-received]" | "[cancel-received]" | "[refund-received]" | "[cancelOrRefund-received]" | "[adjustAuthorisation-received]";
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
    export interface PaymentRequest {
        /**
         * Shopper account information for 3D Secure 2.
         * > For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.
         */
        accountInfo?: IPayments.AccountInfo;
        /**
         * If you want a [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) request to use a non-zero value, assign this value to `additionalAmount` (while the amount must be still set to 0 to trigger BIN or card verification).
         * Required to be in the same currency as the `amount`. 
         */
        additionalAmount?: IPayments.Amount;
        /**
         * This field contains additional data, which may be required for a particular payment request.
         * 
         * The `additionalData` object consists of entries, each of which includes the key and value.
         */
        additionalData?: IPayments.AdditionalDataCommon | IPayments.AdditionalData3DSecure | IPayments.AdditionalDataAirline | IPayments.AdditionalDataCarRental | IPayments.AdditionalDataLevel23 | IPayments.AdditionalDataLodging | IPayments.AdditionalDataOpenInvoice | IPayments.AdditionalDataRatepay | IPayments.AdditionalDataRetry | IPayments.AdditionalDataRisk | IPayments.AdditionalDataRiskStandalone | IPayments.AdditionalDataTemporaryServices | IPayments.AdditionalDataWallets;
        /**
         * The amount information for the transaction. For [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) requests, set amount to 0 (zero).
         */
        amount: IPayments.Amount;
        /**
         * Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).
         */
        applicationInfo?: IPayments.ApplicationInfo;
        /**
         * The details of the bank account, from which the payment should be made.
         * > Either `bankAccount` or `card` field must be provided in a payment request.
         */
        bankAccount?: IPayments.BankAccount;
        /**
         * The address where to send the invoice.
         * > For 3D Secure 2 transactions, schemes require the `billingAddress` for both `deviceChannel` **browser** and **app**. Include all of the fields within this object.
         */
        billingAddress?: IPayments.Address;
        /**
         * The shopper's browser information.
         * > For 3D Secure 2 transactions, `browserInfo` is required for `channel` **web** (or `deviceChannel` **browser**).
         */
        browserInfo?: IPayments.BrowserInfo;
        /**
         * The delay between the authorisation and scheduled auto-capture, specified in hours.
         */
        captureDelayHours?: number; // int32
        /**
         * A container for card data.
         * > Either `bankAccount` or `card` field must be provided in a payment request.
         */
        card?: IPayments.Card;
        /**
         * The shopper's date of birth.
         * 
         * Format [ISO-8601](https://www.w3.org/TR/NOTE-datetime): YYYY-MM-DD
         */
        dateOfBirth?: string; // date-time
        /**
         * The forex quote as returned in the response of the forex service.
         */
        dccQuote?: IPayments.ForexQuote;
        /**
         * The address where the purchased goods should be delivered.
         */
        deliveryAddress?: IPayments.Address;
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
         * The type of the entity the payment is processed for.
         */
        entityType?: "NaturalPerson" | "CompanyName";
        /**
         * An integer value that is added to the normal fraud score. The value can be either positive or negative.
         */
        fraudOffset?: number; // int32
        /**
         * Contains installment settings. For more information, refer to [Installments](https://docs.adyen.com/payment-methods/installment-payments).
         */
        installments?: IPayments.Installments;
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
        merchantRiskIndicator?: IPayments.MerchantRiskIndicator;
        /**
         * Metadata consists of entries, each of which includes a key and a value.
         * Limitations: Maximum 20 key-value pairs per request. When exceeding, the "177" error occurs: "Metadata size exceeds limit".
         */
        metadata?: {
        };
        /**
         * Authentication data produced by an MPI (Mastercard SecureCode or Verified By Visa).
         */
        mpiData?: IPayments.ThreeDSecureData;
        /**
         * The two-character country code of the shopper's nationality.
         */
        nationality?: string;
        /**
         * When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead.
         */
        orderReference?: string;
        /**
         * The recurring settings for the payment. Use this property when you want to enable [recurring payments](https://docs.adyen.com/classic-integration/recurring-payments).
         */
        recurring?: IPayments.Recurring;
        /**
         * Defines a recurring payment type.
         * Allowed values:
         * * `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.
         * * `CardOnFile` – Card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.
         * * `UnscheduledCardOnFile` – A transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.
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
        shopperName?: IPayments.Name;
        /**
         * The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID).
         * > This field is required for recurring payments.
         */
        shopperReference?: string;
        /**
         * The text to appear on the shopper's bank statement.
         */
        shopperStatement?: string;
        /**
         * The shopper's social security number.
         */
        socialSecurityNumber?: string;
        /**
         * The details of how the payment should be split when distributing a payment to a MarketPay Marketplace and its Accounts.
         */
        splits?: IPayments.Split[];
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
        threeDS2RequestData?: IPayments.ThreeDS2RequestData;
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
    export interface PaymentRequest3d {
        /**
         * Shopper account information for 3D Secure 2.
         * > For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.
         */
        accountInfo?: IPayments.AccountInfo;
        /**
         * If you want a [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) request to use a non-zero value, assign this value to `additionalAmount` (while the amount must be still set to 0 to trigger BIN or card verification).
         * Required to be in the same currency as the `amount`. 
         */
        additionalAmount?: IPayments.Amount;
        /**
         * This field contains additional data, which may be required for a particular payment request.
         * 
         * The `additionalData` object consists of entries, each of which includes the key and value.
         */
        additionalData?: IPayments.AdditionalDataCommon | IPayments.AdditionalData3DSecure | IPayments.AdditionalDataAirline | IPayments.AdditionalDataCarRental | IPayments.AdditionalDataLevel23 | IPayments.AdditionalDataLodging | IPayments.AdditionalDataOpenInvoice | IPayments.AdditionalDataRatepay | IPayments.AdditionalDataRetry | IPayments.AdditionalDataRisk | IPayments.AdditionalDataRiskStandalone | IPayments.AdditionalDataTemporaryServices | IPayments.AdditionalDataWallets;
        /**
         * The amount information for the transaction. For [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) requests, set amount to 0 (zero).
         */
        amount?: IPayments.Amount;
        /**
         * Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).
         */
        applicationInfo?: IPayments.ApplicationInfo;
        /**
         * The address where to send the invoice.
         * > For 3D Secure 2 transactions, schemes require the `billingAddress` for both `deviceChannel` **browser** and **app**. Include all of the fields within this object.
         */
        billingAddress?: IPayments.Address;
        /**
         * The shopper's browser information.
         * > For 3D Secure 2 transactions, `browserInfo` is required for `channel` **web** (or `deviceChannel` **browser**).
         */
        browserInfo?: IPayments.BrowserInfo;
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
        dccQuote?: IPayments.ForexQuote;
        /**
         * The address where the purchased goods should be delivered.
         */
        deliveryAddress?: IPayments.Address;
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
         * Contains installment settings. For more information, refer to [Installments](https://docs.adyen.com/payment-methods/installment-payments).
         */
        installments?: IPayments.Installments;
        /**
         * The [merchant category code](https://en.wikipedia.org/wiki/Merchant_category_code) (MCC) is a four-digit number, which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.
         */
        mcc?: string;
        /**
         * The payment session identifier returned by the card issuer.
         */
        md: string;
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
        merchantRiskIndicator?: IPayments.MerchantRiskIndicator;
        /**
         * Metadata consists of entries, each of which includes a key and a value.
         * Limitations: Maximum 20 key-value pairs per request. When exceeding, the "177" error occurs: "Metadata size exceeds limit".
         */
        metadata?: {
        };
        /**
         * When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead.
         */
        orderReference?: string;
        /**
         * Payment authorisation response returned by the card issuer. The `paResponse` field holds the PaRes value received from the card issuer.
         */
        paResponse: string;
        /**
         * The recurring settings for the payment. Use this property when you want to enable [recurring payments](https://docs.adyen.com/classic-integration/recurring-payments).
         */
        recurring?: IPayments.Recurring;
        /**
         * Defines a recurring payment type.
         * Allowed values:
         * * `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.
         * * `CardOnFile` – Card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.
         * * `UnscheduledCardOnFile` – A transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.
         * 
         */
        recurringProcessingModel?: "CardOnFile" | "Subscription" | "UnscheduledCardOnFile";
        /**
         * The reference to uniquely identify a payment. This reference is used in all communication with you about the payment status. We recommend using a unique value per payment; however, it is not a requirement.
         * If you need to provide multiple references for a transaction, separate them with hyphens ("-").
         * Maximum length: 80 characters.
         */
        reference?: string;
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
        shopperName?: IPayments.Name;
        /**
         * The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID).
         * > This field is required for recurring payments.
         */
        shopperReference?: string;
        /**
         * The text to appear on the shopper's bank statement.
         */
        shopperStatement?: string;
        /**
         * The shopper's social security number.
         */
        socialSecurityNumber?: string;
        /**
         * The details of how the payment should be split when distributing a payment to a MarketPay Marketplace and its Accounts.
         */
        splits?: IPayments.Split[];
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
        threeDS2RequestData?: IPayments.ThreeDS2RequestData;
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
    export interface PaymentRequest3ds2 {
        /**
         * Shopper account information for 3D Secure 2.
         * > For 3D Secure 2 transactions, we recommend that you include this object to increase the chances of achieving a frictionless flow.
         */
        accountInfo?: IPayments.AccountInfo;
        /**
         * If you want a [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) request to use a non-zero value, assign this value to `additionalAmount` (while the amount must be still set to 0 to trigger BIN or card verification).
         * Required to be in the same currency as the `amount`. 
         */
        additionalAmount?: IPayments.Amount;
        /**
         * This field contains additional data, which may be required for a particular payment request.
         * 
         * The `additionalData` object consists of entries, each of which includes the key and value.
         */
        additionalData?: IPayments.AdditionalDataCommon | IPayments.AdditionalData3DSecure | IPayments.AdditionalDataAirline | IPayments.AdditionalDataCarRental | IPayments.AdditionalDataLevel23 | IPayments.AdditionalDataLodging | IPayments.AdditionalDataOpenInvoice | IPayments.AdditionalDataRatepay | IPayments.AdditionalDataRetry | IPayments.AdditionalDataRisk | IPayments.AdditionalDataRiskStandalone | IPayments.AdditionalDataTemporaryServices | IPayments.AdditionalDataWallets;
        /**
         * The amount information for the transaction. For [BIN or card verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification) requests, set amount to 0 (zero).
         */
        amount: IPayments.Amount;
        /**
         * Information about your application. For more details, see [Building Adyen solutions](https://docs.adyen.com/development-resources/building-adyen-solutions).
         */
        applicationInfo?: IPayments.ApplicationInfo;
        /**
         * The address where to send the invoice.
         * > For 3D Secure 2 transactions, schemes require the `billingAddress` for both `deviceChannel` **browser** and **app**. Include all of the fields within this object.
         */
        billingAddress?: IPayments.Address;
        /**
         * The shopper's browser information.
         * > For 3D Secure 2 transactions, `browserInfo` is required for `channel` **web** (or `deviceChannel` **browser**).
         */
        browserInfo?: IPayments.BrowserInfo;
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
        dccQuote?: IPayments.ForexQuote;
        /**
         * The address where the purchased goods should be delivered.
         */
        deliveryAddress?: IPayments.Address;
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
         * Contains installment settings. For more information, refer to [Installments](https://docs.adyen.com/payment-methods/installment-payments).
         */
        installments?: IPayments.Installments;
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
        merchantRiskIndicator?: IPayments.MerchantRiskIndicator;
        /**
         * Metadata consists of entries, each of which includes a key and a value.
         * Limitations: Maximum 20 key-value pairs per request. When exceeding, the "177" error occurs: "Metadata size exceeds limit".
         */
        metadata?: {
        };
        /**
         * When you are doing multiple partial (gift card) payments, this is the `pspReference` of the first payment. We use this to link the multiple payments to each other. As your own reference for linking multiple payments, use the `merchantOrderReference`instead.
         */
        orderReference?: string;
        /**
         * The recurring settings for the payment. Use this property when you want to enable [recurring payments](https://docs.adyen.com/classic-integration/recurring-payments).
         */
        recurring?: IPayments.Recurring;
        /**
         * Defines a recurring payment type.
         * Allowed values:
         * * `Subscription` – A transaction for a fixed or variable amount, which follows a fixed schedule.
         * * `CardOnFile` – Card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.
         * * `UnscheduledCardOnFile` – A transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.
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
        shopperName?: IPayments.Name;
        /**
         * The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID).
         * > This field is required for recurring payments.
         */
        shopperReference?: string;
        /**
         * The text to appear on the shopper's bank statement.
         */
        shopperStatement?: string;
        /**
         * The shopper's social security number.
         */
        socialSecurityNumber?: string;
        /**
         * The details of how the payment should be split when distributing a payment to a MarketPay Marketplace and its Accounts.
         */
        splits?: IPayments.Split[];
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
        threeDS2RequestData?: IPayments.ThreeDS2RequestData;
        /**
         * Thre ThreeDS2Result that was returned in the final CRes.
         */
        threeDS2Result?: IPayments.ThreeDS2Result;
        /**
         * The ThreeDS2Token that was returned in the /authorise call.
         */
        threeDS2Token?: string;
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
    export interface PaymentResult {
        /**
         * This field contains additional data, which may be required to return in a particular payment response. To choose data fields to be returned, go to **Customer Area** > **Account** > **API URLs**.
         */
        additionalData?: IPayments.ResponseAdditionalDataCommon | IPayments.ResponseAdditionalDataBillingAddress | IPayments.ResponseAdditionalDataCard | IPayments.ResponseAdditionalDataDeliveryAddress | IPayments.ResponseAdditionalDataInstallments;
        /**
         * Authorisation code:
         * * When the payment is authorised successfully, this field holds the authorisation code for the payment.
         * * When the payment is not authorised, this field is empty.
         */
        authCode?: string;
        /**
         * Includes the currency of the conversion and the value of the transaction.
         * > This value only applies if you have implemented Dynamic Currency Conversion. For more information, [contact Support](https://support.adyen.com/hc/en-us/requests/new).
         */
        dccAmount?: IPayments.Amount;
        /**
         * Cryptographic signature used to verify `dccQuote`.
         * > This value only applies if you have implemented Dynamic Currency Conversion. For more information, [contact Support](https://support.adyen.com/hc/en-us/requests/new).
         */
        dccSignature?: string;
        /**
         * The fraud result properties of the payment.
         */
        fraudResult?: IPayments.FraudResult;
        /**
         * The URL to direct the shopper to.
         * > In case of SecurePlus, do not redirect a shopper to this URL.
         */
        issuerUrl?: string;
        /**
         * The payment session.
         */
        md?: string;
        /**
         * The 3D request data for the issuer.
         * 
         * If the value is **CUPSecurePlus-CollectSMSVerificationCode**, collect an SMS code from the shopper and pass it in the `/authorise3D` request. For more information, see [3D Secure](https://docs.adyen.com/classic-integration/3d-secure).
         */
        paRequest?: string;
        /**
         * Adyen's 16-character string reference associated with the transaction/request. This value is globally unique; quote it when communicating with us about this request.
         * 
         * > `pspReference` is returned only for non-redirect payment methods.
         */
        pspReference?: string;
        /**
         * If the payment's authorisation is refused or an error occurs during authorisation, this field holds Adyen's mapped reason for the refusal or a description of the error.
         * 
         * When a transaction fails, the authorisation response includes `resultCode` and `refusalReason` values.
         */
        refusalReason?: string;
        /**
         * The result of the payment. Possible values:
         * 
         * * **AuthenticationFinished** – The payment has been successfully authenticated with 3D Secure 2. Returned for 3D Secure 2 authentication-only transactions.
         * * **Authorised** – The payment was successfully authorised. This state serves as an indicator to proceed with the delivery of goods and services. This is a final state.
         * * **Cancelled** – Indicates the payment has been cancelled (either by the shopper or the merchant) before processing was completed. This is a final state.
         * * **ChallengeShopper** – The issuer requires further shopper interaction before the payment can be authenticated. Returned for 3D Secure 2 transactions.
         * * **Error** – There was an error when the payment was being processed. The reason is given in the `refusalReason` field. This is a final state.
         * * **IdentifyShopper** – The issuer requires the shopper's device fingerprint before the payment can be authenticated. Returned for 3D Secure 2 transactions.
         * * **Pending** – Indicates that it is not possible to obtain the final status of the payment. This can happen if the systems providing final status information for the payment are unavailable, or if the shopper needs to take further action to complete the payment. For more information, refer to [Result codes](https://docs.adyen.com/checkout/payment-result-codes).
         * * **PresentToShopper** – Indicates that the response contains additional information that you need to present to a shopper, so that they can use it to complete a payment.
         * * **Received** – Indicates the payment has successfully been received by Adyen, and will be processed. This is the initial state for all payments.
         * * **RedirectShopper** – Indicates the shopper should be redirected to an external web page or app to complete the authorisation.
         * * **Refused** – Indicates the payment was refused. The reason is given in the `refusalReason` field. This is a final state.
         */
        resultCode?: "AuthenticationFinished" | "Authorised" | "Cancelled" | "ChallengeShopper" | "Error" | "IdentifyShopper" | "Pending" | "PresentToShopper" | "Received" | "RedirectShopper" | "Refused";
    }
    namespace Post {
        export type RequestBody = IPayments.ModificationRequest;
        namespace Responses {
            export type $200 = IPayments.ModificationResult;
        }
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
         * The currency in which the card is issued, if this information is available.
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
         * > Returned only in case of a card payment.
         */
        cardSummary?: string;
    }
    export interface ResponseAdditionalDataCommon {
        /**
         * The name of the Adyen acquirer account.
         * 
         * Example: PayPalSandbox_TestAcquirer
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
         * * PREPAID_NONRELOADABLE
         * * DEFFERED_DEBIT
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
         * * 3D Secure Mandated
         * * ContAuth Not Supported
         * * CVC Mandated
         * * Ecommerce Not Allowed
         * * Crossborder Not Supported
         * * Card Updated
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
         * * "D" (only domestic)
         * * "N" (no MoneySend)
         * * "U" (unknown)
         */
        payoutEligible?: string;
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
         * The number of installments that the payment amount should be charged with.
         * 
         * Example: 5
         * > Only relevant for card payments in countries that support installments.
         */
        "installments.value"?: string;
        /**
         * Type of installment. The value of `installmentType` should be **IssuerFinanced**.
         */
        "installmentPaymentData.installmentType"?: string;
        /**
         * Possible values:
         * * PayInInstallmentsOnly
         * * PayInFullOnly
         * * PayInFullOrInstallments
         */
        "installmentPaymentData.paymentOptions"?: string;
        /**
         * Total number of installments possible for this payment.
         */
        "installmentPaymentData.option[itemNr].numberOfInstallments"?: string;
        /**
         * Interest rate for the installment period.
         */
        "installmentPaymentData.option[itemNr].interestRate"?: string;
        /**
         * Installment fee amount in minor units.
         */
        "installmentPaymentData.option[itemNr].installmentFee"?: string;
        /**
         * Annual interest rate.
         */
        "installmentPaymentData.option[itemNr].annualPercentageRate"?: string;
        /**
         * First Installment Amount in minor units.
         */
        "installmentPaymentData.option[itemNr].firstInstallmentAmount"?: string;
        /**
         * Subsequent Installment Amount in minor units.
         */
        "installmentPaymentData.option[itemNr].subsequentInstallmentAmount"?: string;
        /**
         * Minimum number of installments possible for this payment.
         */
        "installmentPaymentData.option[itemNr].minimumNumberOfInstallments"?: string;
        /**
         * Maximum number of installments possible for this payment.
         */
        "installmentPaymentData.option[itemNr].maximumNumberOfInstallments"?: string;
        /**
         * Total amount in minor units.
         */
        "installmentPaymentData.option[itemNr].totalAmountDue"?: string;
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
        amount: IPayments.SplitAmount;
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
    export interface ThreeDS1Result {
        /**
         * The cardholder authentication value (base64 encoded).
         */
        cavv?: string;
        /**
         * The CAVV algorithm used.
         */
        cavvAlgorithm?: string;
        /**
         * 3D Secure Electronic Commerce Indicator (ECI).
         */
        eci?: string;
        /**
         * The authentication response from the ACS.
         */
        threeDAuthenticatedResponse?: string;
        /**
         * Whether 3D Secure was offered or not.
         */
        threeDOfferedResponse?: string;
        /**
         * A unique transaction identifier generated by the MPI on behalf of the merchant to identify the 3D Secure transaction, in `Base64` encoding.
         */
        xid?: string;
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
        deviceRenderOptions?: IPayments.DeviceRenderOptions;
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
        sdkEphemPubKey?: IPayments.SDKEphemPubKey;
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
    export interface ThreeDS2Result {
        /**
         * The `authenticationValue` value as defined in the 3D Secure 2 specification.
         */
        authenticationValue?: string;
        /**
         * The algorithm used by the ACS to calculate the authentication value, only for CartesBancaires integrations.
         */
        cavvAlgorithm?: string;
        /**
         * The `dsTransID` value as defined in the 3D Secure 2 specification.
         */
        dsTransID?: string;
        /**
         * The `eci` value as defined in the 3D Secure 2 specification.
         */
        eci?: string;
        /**
         * The `messageVersion` value as defined in the 3D Secure 2 specification.
         */
        messageVersion?: string;
        /**
         * The `threeDSServerTransID` value as defined in the 3D Secure 2 specification.
         */
        threeDSServerTransID?: string;
        /**
         * The `timestamp` value of the 3D Secure 2 authentication.
         */
        timestamp?: string;
        /**
         * The `transStatus` value as defined in the 3D Secure 2 specification.
         */
        transStatus?: string;
        /**
         * The `transStatusReason` value as defined in the 3D Secure 2 specification.
         */
        transStatusReason?: string;
        /**
         * The `whiteListStatus` value as defined in the 3D Secure 2 specification.
         */
        whiteListStatus?: string;
    }
    export interface ThreeDS2ResultRequest {
        /**
         * The merchant account identifier, with which you want to process the transaction.
         */
        merchantAccount: string;
        /**
         * The pspReference returned in the /authorise call.
         */
        pspReference: string;
    }
    export interface ThreeDS2ResultResponse {
        /**
         * The result of the 3D Secure 2 authentication.
         */
        threeDS2Result?: IPayments.ThreeDS2Result;
    }
    export interface ThreeDSecureData {
        /**
         * In 3D Secure 1, the authentication response if the shopper was redirected.
         * 
         * In 3D Secure 2, this is the `transStatus` from the challenge result. If the transaction was frictionless, set this value to **Y**.
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
         * In 3D Secure 2, this is the `transStatus` from the `ARes`. The possible values are **A** or **Y** for a frictionless flow, or **C** for a challenge flow.
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
}
