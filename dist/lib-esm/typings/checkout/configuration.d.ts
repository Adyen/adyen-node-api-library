/**
 * Adyen Checkout Service
 * Adyen Checkout API provides a simple and flexible way to initiate and authorise online payments. You can use the same integration for payments made with cards (including One-Click and 3D Secure), mobile wallets, and local payment methods (e.g. iDEAL and Sofort).  This API reference provides information on available endpoints and how to interact with them. To learn more about the API, visit [Checkout documentation](https://docs.adyen.com/checkout).  ## Authentication Each request to the Checkout API must be signed with an API key. For this, obtain an API Key from your Customer Area, as described in [How to get the API key](https://docs.adyen.com/user-management/how-to-get-the-api-key). Then set this key to the `X-API-Key` header value, for example:  ``` curl -H \"Content-Type: application/json\" \\ -H \"X-API-Key: Your_Checkout_API_key\" \\ ... ``` Note that when going live, you need to generate a new API Key to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Checkout API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://checkout-test.adyen.com/v46/payments ```
 *
 * OpenAPI spec version: 46
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */ import { Avs } from './avs';
import { Installments } from './installments';
import { ShopperInput } from './shopperInput';
export interface Configuration {
    avs?: Avs;
    /**
     * Determines whether the cardholder name should be provided or not.  Permitted values: * NONE * OPTIONAL * REQUIRED
     */
    cardHolderName?: Configuration.CardHolderNameEnum;
    installments?: Installments;
    shopperInput?: ShopperInput;
}
export declare namespace Configuration {
    type CardHolderNameEnum = 'NONE' | 'OPTIONAL' | 'REQUIRED';
    const CardHolderNameEnum: {
        NONE: CardHolderNameEnum;
        OPTIONAL: CardHolderNameEnum;
        REQUIRED: CardHolderNameEnum;
    };
}
