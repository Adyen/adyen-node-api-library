/*
 * The version of the OpenAPI document: v2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { RemediatingAction } from './remediatingAction';

export class VerificationErrorRecursive {
    /**
    * Contains the capabilities that the verification error applies to.
    */
    'capabilities'?: Array<VerificationErrorRecursive.CapabilitiesEnum>;
    /**
    * The verification error code.
    */
    'code'?: string;
    /**
    * A description of the error.
    */
    'message'?: string;
    /**
    * The type of error.   Possible values: **invalidInput**, **dataMissing**.
    */
    'type'?: VerificationErrorRecursive.TypeEnum;
    /**
    * Contains the actions that you can take to resolve the verification error.
    */
    'remediatingActions'?: Array<RemediatingAction>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "capabilities",
            "baseName": "capabilities",
            "type": "Array<VerificationErrorRecursive.CapabilitiesEnum>"
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
            "name": "type",
            "baseName": "type",
            "type": "VerificationErrorRecursive.TypeEnum"
        },
        {
            "name": "remediatingActions",
            "baseName": "remediatingActions",
            "type": "Array<RemediatingAction>"
        }    ];

    static getAttributeTypeMap() {
        return VerificationErrorRecursive.attributeTypeMap;
    }
}

export namespace VerificationErrorRecursive {
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
        WithdrawFromAtm = 'withdrawFromAtm',
        WithdrawFromAtmCommercial = 'withdrawFromAtmCommercial',
        WithdrawFromAtmConsumer = 'withdrawFromAtmConsumer',
        WithdrawFromAtmInRestrictedCountries = 'withdrawFromAtmInRestrictedCountries',
        WithdrawFromAtmInRestrictedCountriesCommercial = 'withdrawFromAtmInRestrictedCountriesCommercial',
        WithdrawFromAtmInRestrictedCountriesConsumer = 'withdrawFromAtmInRestrictedCountriesConsumer'
    }
    export enum TypeEnum {
        DataMissing = 'dataMissing',
        InvalidInput = 'invalidInput',
        PendingStatus = 'pendingStatus'
    }
}
