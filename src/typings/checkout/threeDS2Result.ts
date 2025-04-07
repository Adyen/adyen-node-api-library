/*
 * The version of the OpenAPI document: v71
 * 
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
    'challengeCancel'?: string;
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
    'exemptionIndicator'?: string;
    /**
    * The `messageVersion` value as defined in the 3D Secure 2 specification.
    */
    'messageVersion'?: string;
    /**
    * Risk score calculated by Cartes Bancaires Directory Server (DS).
    */
    'riskScore'?: string;
    /**
    * Indicates whether a challenge is requested for this transaction. Possible values: * **01** — No preference * **02** — No challenge requested * **03** — Challenge requested (3DS Requestor preference) * **04** — Challenge requested (Mandate) * **05** — No challenge (transactional risk analysis is already performed) * **06** — Data Only
    */
    'threeDSRequestorChallengeInd'?: string;
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

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "authenticationValue",
            "baseName": "authenticationValue",
            "type": "string"
        },
        {
            "name": "cavvAlgorithm",
            "baseName": "cavvAlgorithm",
            "type": "string"
        },
        {
            "name": "challengeCancel",
            "baseName": "challengeCancel",
            "type": "ThreeDS2Result.ChallengeCancelEnum"
        },
        {
            "name": "dsTransID",
            "baseName": "dsTransID",
            "type": "string"
        },
        {
            "name": "eci",
            "baseName": "eci",
            "type": "string"
        },
        {
            "name": "exemptionIndicator",
            "baseName": "exemptionIndicator",
            "type": "ThreeDS2Result.ExemptionIndicatorEnum"
        },
        {
            "name": "messageVersion",
            "baseName": "messageVersion",
            "type": "string"
        },
        {
            "name": "riskScore",
            "baseName": "riskScore",
            "type": "string"
        },
        {
            "name": "threeDSRequestorChallengeInd",
            "baseName": "threeDSRequestorChallengeInd",
            "type": "ThreeDS2Result.ThreeDSRequestorChallengeIndEnum"
        },
        {
            "name": "threeDSServerTransID",
            "baseName": "threeDSServerTransID",
            "type": "string"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "string"
        },
        {
            "name": "transStatus",
            "baseName": "transStatus",
            "type": "string"
        },
        {
            "name": "transStatusReason",
            "baseName": "transStatusReason",
            "type": "string"
        },
        {
            "name": "whiteListStatus",
            "baseName": "whiteListStatus",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ThreeDS2Result.attributeTypeMap;
    }
}

