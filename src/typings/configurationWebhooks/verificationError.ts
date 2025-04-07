/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { RemediatingAction } from './remediatingAction';
import { VerificationErrorRecursive } from './verificationErrorRecursive';

export class VerificationError {
    /**
    * Contains the capabilities that the verification error applies to.
    */
    'capabilities'?: Array<VerificationError.CapabilitiesEnum>;
    /**
    * The verification error code.
    */
    'code'?: string;
    /**
    * A description of the error.
    */
    'message'?: string;
    /**
    * Contains the actions that you can take to resolve the verification error.
    */
    'remediatingActions'?: Array<RemediatingAction>;
    /**
    * Contains more granular information about the verification error.
    */
    'subErrors'?: Array<VerificationErrorRecursive>;
    /**
    * The type of error.   Possible values: **invalidInput**, **dataMissing**.
    */
    'type'?: VerificationError.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "capabilities",
            "baseName": "capabilities",
            "type": "Array<VerificationError.CapabilitiesEnum>"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "remediatingActions",
            "baseName": "remediatingActions",
            "type": "Array<RemediatingAction>"
        },
        {
            "name": "subErrors",
            "baseName": "subErrors",
            "type": "Array<VerificationErrorRecursive>"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "VerificationError.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return VerificationError.attributeTypeMap;
    }
}

export namespace VerificationError {
    export enum CapabilitiesEnum {
        AcceptExternalFunding = <any> 'acceptExternalFunding',
        AcceptPspFunding = <any> 'acceptPspFunding',
        AcceptTransactionInRestrictedCountries = <any> 'acceptTransactionInRestrictedCountries',
        AcceptTransactionInRestrictedCountriesCommercial = <any> 'acceptTransactionInRestrictedCountriesCommercial',
        AcceptTransactionInRestrictedCountriesConsumer = <any> 'acceptTransactionInRestrictedCountriesConsumer',
        AcceptTransactionInRestrictedIndustries = <any> 'acceptTransactionInRestrictedIndustries',
        AcceptTransactionInRestrictedIndustriesCommercial = <any> 'acceptTransactionInRestrictedIndustriesCommercial',
        AcceptTransactionInRestrictedIndustriesConsumer = <any> 'acceptTransactionInRestrictedIndustriesConsumer',
        Acquiring = <any> 'acquiring',
        AtmWithdrawal = <any> 'atmWithdrawal',
        AtmWithdrawalCommercial = <any> 'atmWithdrawalCommercial',
        AtmWithdrawalConsumer = <any> 'atmWithdrawalConsumer',
        AtmWithdrawalInRestrictedCountries = <any> 'atmWithdrawalInRestrictedCountries',
        AtmWithdrawalInRestrictedCountriesCommercial = <any> 'atmWithdrawalInRestrictedCountriesCommercial',
        AtmWithdrawalInRestrictedCountriesConsumer = <any> 'atmWithdrawalInRestrictedCountriesConsumer',
        AuthorisedPaymentInstrumentUser = <any> 'authorisedPaymentInstrumentUser',
        GetGrantOffers = <any> 'getGrantOffers',
        IssueBankAccount = <any> 'issueBankAccount',
        IssueCard = <any> 'issueCard',
        IssueCardCommercial = <any> 'issueCardCommercial',
        IssueCardConsumer = <any> 'issueCardConsumer',
        IssueChargeCard = <any> 'issueChargeCard',
        IssueChargeCardCommercial = <any> 'issueChargeCardCommercial',
        IssueCreditLimit = <any> 'issueCreditLimit',
        LocalAcceptance = <any> 'localAcceptance',
        Payout = <any> 'payout',
        PayoutToTransferInstrument = <any> 'payoutToTransferInstrument',
        Processing = <any> 'processing',
        ReceiveFromBalanceAccount = <any> 'receiveFromBalanceAccount',
        ReceiveFromPlatformPayments = <any> 'receiveFromPlatformPayments',
        ReceiveFromThirdParty = <any> 'receiveFromThirdParty',
        ReceiveFromTransferInstrument = <any> 'receiveFromTransferInstrument',
        ReceiveGrants = <any> 'receiveGrants',
        ReceivePayments = <any> 'receivePayments',
        SendToBalanceAccount = <any> 'sendToBalanceAccount',
        SendToThirdParty = <any> 'sendToThirdParty',
        SendToTransferInstrument = <any> 'sendToTransferInstrument',
        ThirdPartyFunding = <any> 'thirdPartyFunding',
        UseCard = <any> 'useCard',
        UseCardCommercial = <any> 'useCardCommercial',
        UseCardConsumer = <any> 'useCardConsumer',
        UseCardInRestrictedCountries = <any> 'useCardInRestrictedCountries',
        UseCardInRestrictedCountriesCommercial = <any> 'useCardInRestrictedCountriesCommercial',
        UseCardInRestrictedCountriesConsumer = <any> 'useCardInRestrictedCountriesConsumer',
        UseCardInRestrictedIndustries = <any> 'useCardInRestrictedIndustries',
        UseCardInRestrictedIndustriesCommercial = <any> 'useCardInRestrictedIndustriesCommercial',
        UseCardInRestrictedIndustriesConsumer = <any> 'useCardInRestrictedIndustriesConsumer',
        UseChargeCard = <any> 'useChargeCard',
        UseChargeCardCommercial = <any> 'useChargeCardCommercial',
        WithdrawFromAtm = <any> 'withdrawFromAtm',
        WithdrawFromAtmCommercial = <any> 'withdrawFromAtmCommercial',
        WithdrawFromAtmConsumer = <any> 'withdrawFromAtmConsumer',
        WithdrawFromAtmInRestrictedCountries = <any> 'withdrawFromAtmInRestrictedCountries',
        WithdrawFromAtmInRestrictedCountriesCommercial = <any> 'withdrawFromAtmInRestrictedCountriesCommercial',
        WithdrawFromAtmInRestrictedCountriesConsumer = <any> 'withdrawFromAtmInRestrictedCountriesConsumer'
    }
    export enum TypeEnum {
        DataMissing = <any> 'dataMissing',
        InvalidInput = <any> 'invalidInput',
        PendingStatus = <any> 'pendingStatus'
    }
}
