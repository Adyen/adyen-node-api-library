/**
 * Adyen BinLookup Service
 * The BIN Lookup API provides endpoints for retrieving information, such as [cost estimates](https://docs.adyen.com/features/cost-estimation), and 3D Secure supported version based on a given [BIN](https://docs.adyen.com/payments-basics/payment-glossary#bankidentificationnumberbin).
 *
 * OpenAPI spec version: 40
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
export interface ThreeDSAvailabilityRequest {
    /**
     * This field contains additional data, which may be required for a particular request.  The `additionalData` object consists of entries, each of which includes the key and value. For more information on possible key-value pairs, refer to the [additionalData section](https://docs.adyen.com/api-reference/payments-api#paymentrequestadditionaldata).
     */
    additionalData?: any;
    /**
     * List of brands.
     */
    brands: Array<string>;
    /**
     * Card number or BIN.
     */
    cardNumber?: string;
    /**
     * The merchant account identifier.
     */
    merchantAccount: string;
    /**
     * A recurring detail reference corresponding to a card.
     */
    recurringDetailReference?: string;
    /**
     * The shopper's reference to uniquely identify this shopper (e.g. user ID or account ID).
     */
    shopperReference?: string;
}
