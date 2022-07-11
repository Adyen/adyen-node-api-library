/*
 * The version of the OpenAPI document: v68
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class ThreeDS2Result {

    /**
    * The `authenticationValue` value as defined in the 3D Secure 2 specification.
    */
    'authenticationValue'?: string;

    /**
    * The algorithm used by the ACS to calculate the authentication value, only for Cartes Bancaires integrations.
    */
    'cavvAlgorithm'?: string;

    /**
    * Indicator informing the Access Control Server (ACS) and the Directory Server (DS) that the authentication has been cancelled. For possible values, refer to [3D Secure API reference](https://docs.adyen.com/online-payments/3d-secure/api-reference#mpidata).
    */
    'challengeCancel'?: ThreeDS2Result.ChallengeCancelEnum;

    /**
    * Specifies a preference for receiving a challenge from the issuer. Allowed values: * `noPreference` * `requestNoChallenge` * `requestChallenge` * `requestChallengeAsMandate` 
    */
    'challengeIndicator'?: ThreeDS2Result.ChallengeIndicatorEnum;

    /**
    * The `dsTransID` value as defined in the 3D Secure 2 specification.
    */
    'dsTransID'?: string;

    /**
    * The `eci` value as defined in the 3D Secure 2 specification.
    */
    'eci'?: string;

    /**
    * Indicates the exemption type that was applied by the issuer to the authentication, if exemption applied. Allowed values: * `lowValue` * `secureCorporate` * `trustedBeneficiary` * `transactionRiskAnalysis` 
    */
    'exemptionIndicator'?: ThreeDS2Result.ExemptionIndicatorEnum;

    /**
    * The `messageVersion` value as defined in the 3D Secure 2 specification.
    */
    'messageVersion'?: string;

    /**
    * Risk score calculated by Cartes Bancaires Directory Server (DS).
    */
    'riskScore'?: string;

    /**
    * The `threeDSServerTransID` value as defined in the 3D Secure 2 specification.
    */
    'threeDSServerTransID'?: string;

    /**
    * The `timestamp` value of the 3D Secure 2 authentication.
    */
    'timestamp'?: string;

    /**
    * The `transStatus` value as defined in the 3D Secure 2 specification.
    */
    'transStatus'?: string;

    /**
    * Provides information on why the `transStatus` field has the specified value. For possible values, refer to [our docs](https://docs.adyen.com/online-payments/3d-secure/api-reference#possible-transstatusreason-values).
    */
    'transStatusReason'?: string;

    /**
    * The `whiteListStatus` value as defined in the 3D Secure 2 specification.
    */
    'whiteListStatus'?: string;
}

export namespace ThreeDS2Result {
    export enum ChallengeCancelEnum {
        _01 = <any> '01',
        _02 = <any> '02',
        _03 = <any> '03',
        _04 = <any> '04',
        _05 = <any> '05',
        _06 = <any> '06',
        _07 = <any> '07'
    }
    export enum ChallengeIndicatorEnum {
        NoPreference = <any> 'noPreference',
        RequestNoChallenge = <any> 'requestNoChallenge',
        RequestChallenge = <any> 'requestChallenge',
        RequestChallengeAsMandate = <any> 'requestChallengeAsMandate'
    }
    export enum ExemptionIndicatorEnum {
        LowValue = <any> 'lowValue',
        SecureCorporate = <any> 'secureCorporate',
        TrustedBeneficiary = <any> 'trustedBeneficiary',
        TransactionRiskAnalysis = <any> 'transactionRiskAnalysis'
    }
}
