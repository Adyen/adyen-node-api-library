/*
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { RemediatingAction } from "./remediatingAction";
import { VerificationErrorRecursive } from "./verificationErrorRecursive";


export class VerificationError {
    /**
    * Contains key-value pairs that specify the actions that the legal entity can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing.The value is an object containing the settings for the capability.
    */
    "capabilities"?: Array<VerificationError.CapabilitiesEnum>;
    /**
    * The general error code.
    */
    "code"?: string;
    /**
    * The general error message.
    */
    "message"?: string;
    /**
    * An object containing possible solutions to fix a verification error.
    */
    "remediatingActions"?: Array<RemediatingAction>;
    /**
    * An array containing more granular information about the cause of the verification error.
    */
    "subErrors"?: Array<VerificationErrorRecursive>;
    /**
    * The type of error.  Possible values: *  **invalidInput** *  **dataMissing** *  **pendingStatus** *  **rejected** *  **dataReview**  
    */
    "type"?: VerificationError.TypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "capabilities",
            "baseName": "capabilities",
            "type": "VerificationError.CapabilitiesEnum",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "remediatingActions",
            "baseName": "remediatingActions",
            "type": "Array<RemediatingAction>",
            "format": ""
        },
        {
            "name": "subErrors",
            "baseName": "subErrors",
            "type": "Array<VerificationErrorRecursive>",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "VerificationError.TypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VerificationError.attributeTypeMap;
    }

    public constructor() {
    }
}

export namespace VerificationError {
    export enum CapabilitiesEnum {
        AcceptExternalFunding = 'acceptExternalFunding',
        AcceptPspFunding = 'acceptPspFunding',
        AcceptTransactionInRestrictedCountries = 'acceptTransactionInRestrictedCountries',
        AcceptTransactionInRestrictedCountriesCommercial = 'acceptTransactionInRestrictedCountriesCommercial',
        AcceptTransactionInRestrictedCountriesConsumer = 'acceptTransactionInRestrictedCountriesConsumer',
        AcceptTransactionInRestrictedIndustries = 'acceptTransactionInRestrictedIndustries',
        AcceptTransactionInRestrictedIndustriesCommercial = 'acceptTransactionInRestrictedIndustriesCommercial',
        AcceptTransactionInRestrictedIndustriesConsumer = 'acceptTransactionInRestrictedIndustriesConsumer',
        Acquiring = 'acquiring',
        AtmWithdrawal = 'atmWithdrawal',
        AtmWithdrawalCommercial = 'atmWithdrawalCommercial',
        AtmWithdrawalConsumer = 'atmWithdrawalConsumer',
        AtmWithdrawalInRestrictedCountries = 'atmWithdrawalInRestrictedCountries',
        AtmWithdrawalInRestrictedCountriesCommercial = 'atmWithdrawalInRestrictedCountriesCommercial',
        AtmWithdrawalInRestrictedCountriesConsumer = 'atmWithdrawalInRestrictedCountriesConsumer',
        AuthorisedPaymentInstrumentUser = 'authorisedPaymentInstrumentUser',
        GetGrantOffers = 'getGrantOffers',
        IssueBankAccount = 'issueBankAccount',
        IssueCard = 'issueCard',
        IssueCardCommercial = 'issueCardCommercial',
        IssueCardConsumer = 'issueCardConsumer',
        IssueChargeCard = 'issueChargeCard',
        IssueChargeCardCommercial = 'issueChargeCardCommercial',
        IssueCreditLimit = 'issueCreditLimit',
        LocalAcceptance = 'localAcceptance',
        Payout = 'payout',
        PayoutToTransferInstrument = 'payoutToTransferInstrument',
        Processing = 'processing',
        ReceiveFromBalanceAccount = 'receiveFromBalanceAccount',
        ReceiveFromPlatformPayments = 'receiveFromPlatformPayments',
        ReceiveFromThirdParty = 'receiveFromThirdParty',
        ReceiveFromTransferInstrument = 'receiveFromTransferInstrument',
        ReceiveGrants = 'receiveGrants',
        ReceivePayments = 'receivePayments',
        SendToBalanceAccount = 'sendToBalanceAccount',
        SendToThirdParty = 'sendToThirdParty',
        SendToTransferInstrument = 'sendToTransferInstrument',
        ThirdPartyFunding = 'thirdPartyFunding',
        UseCard = 'useCard',
        UseCardCommercial = 'useCardCommercial',
        UseCardConsumer = 'useCardConsumer',
        UseCardInRestrictedCountries = 'useCardInRestrictedCountries',
        UseCardInRestrictedCountriesCommercial = 'useCardInRestrictedCountriesCommercial',
        UseCardInRestrictedCountriesConsumer = 'useCardInRestrictedCountriesConsumer',
        UseCardInRestrictedIndustries = 'useCardInRestrictedIndustries',
        UseCardInRestrictedIndustriesCommercial = 'useCardInRestrictedIndustriesCommercial',
        UseCardInRestrictedIndustriesConsumer = 'useCardInRestrictedIndustriesConsumer',
        UseChargeCard = 'useChargeCard',
        UseChargeCardCommercial = 'useChargeCardCommercial',
        WithdrawFromAtm = 'withdrawFromAtm',
        WithdrawFromAtmCommercial = 'withdrawFromAtmCommercial',
        WithdrawFromAtmConsumer = 'withdrawFromAtmConsumer',
        WithdrawFromAtmInRestrictedCountries = 'withdrawFromAtmInRestrictedCountries',
        WithdrawFromAtmInRestrictedCountriesCommercial = 'withdrawFromAtmInRestrictedCountriesCommercial',
        WithdrawFromAtmInRestrictedCountriesConsumer = 'withdrawFromAtmInRestrictedCountriesConsumer'
    }
    export enum TypeEnum {
        DataMissing = 'dataMissing',
        DataReview = 'dataReview',
        InvalidInput = 'invalidInput',
        PendingStatus = 'pendingStatus',
        Rejected = 'rejected'
    }
}
