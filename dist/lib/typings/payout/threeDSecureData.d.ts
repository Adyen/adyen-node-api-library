/**
 * Adyen Payout Service
 * A set of API endpoints that allow you to store payout details, confirm, or decline a payout.  For more information, refer to [Third-party payouts](https://docs.adyen.com/features/third-party-payouts).
 *
 * OpenAPI spec version: 30
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
export interface ThreeDSecureData {
    /**
     * The authentication response if the shopper was redirected.
     */
    authenticationResponse?: ThreeDSecureData.AuthenticationResponseEnum;
    /**
     * The cardholder authentication value (base64 encoded, 20 bytes in a decoded form).
     */
    cavv?: string;
    /**
     * The CAVV algorithm used.
     */
    cavvAlgorithm?: string;
    /**
     * The enrollment response from the 3D directory server.
     */
    directoryResponse?: ThreeDSecureData.DirectoryResponseEnum;
    /**
     * The electronic commerce indicator.
     */
    eci?: string;
    /**
     * The transaction identifier (base64 encoded, 20 bytes in a decoded form).
     */
    xid?: string;
}
export declare namespace ThreeDSecureData {
    type AuthenticationResponseEnum = 'Y' | 'N' | 'U' | 'A';
    const AuthenticationResponseEnum: {
        Y: import("../checkout").ThreeDSecureData.AuthenticationResponseEnum;
        N: import("../checkout").ThreeDSecureData.AuthenticationResponseEnum;
        U: import("../checkout").ThreeDSecureData.AuthenticationResponseEnum;
        A: import("../checkout").ThreeDSecureData.AuthenticationResponseEnum;
    };
    type DirectoryResponseEnum = 'Y' | 'N' | 'U' | 'E';
    const DirectoryResponseEnum: {
        Y: DirectoryResponseEnum;
        N: DirectoryResponseEnum;
        U: DirectoryResponseEnum;
        E: DirectoryResponseEnum;
    };
}
