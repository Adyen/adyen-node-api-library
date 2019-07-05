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
export interface Recurring {
    /**
     * The type of recurring contract to be used. Possible values: * `ONECLICK` – Payment details can be used to initiate a one-click payment, where the shopper enters the [card security code (CVC/CVV)](https://docs.adyen.com/payment-glossary#cardsecuritycodecvccvvcid). * `RECURRING` – Payment details can be used without the card security code to initiate [card-not-present transactions](https://docs.adyen.com/payment-glossary#cardnotpresentcnp). * `ONECLICK,RECURRING` – Payment details can be used regardless of whether the shopper is on your site or not. * `PAYOUT` – Payment details can be used to [make a payout](https://docs.adyen.com/features/third-party-payouts).
     */
    contract?: Recurring.ContractEnum;
    /**
     * A descriptive name for this detail.
     */
    recurringDetailName?: string;
    /**
     * Date after which no further authorisations shall be performed. Only for 3D Secure 2.
     */
    recurringExpiry?: Date;
    /**
     * Minimum number of days between authorisations. Only for 3D Secure 2.
     */
    recurringFrequency?: string;
    /**
     * The name of the token service.
     */
    tokenService?: Recurring.TokenServiceEnum;
}
export declare namespace Recurring {
    type ContractEnum = 'ONECLICK' | 'RECURRING' | 'PAYOUT';
    const ContractEnum: {
        ONECLICK: import("../checkout").Recurring.ContractEnum;
        RECURRING: import("../checkout").Recurring.ContractEnum;
        PAYOUT: import("../checkout").Recurring.ContractEnum;
    };
    type TokenServiceEnum = 'VISATOKENSERVICE' | 'MCTOKENSERVICE';
    const TokenServiceEnum: {
        VISATOKENSERVICE: import("../checkout").Recurring.TokenServiceEnum;
        MCTOKENSERVICE: import("../checkout").Recurring.TokenServiceEnum;
    };
}
