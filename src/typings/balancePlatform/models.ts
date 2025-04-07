import localVarRequest from 'request';

export * from './aULocalAccountIdentification';
export * from './accountHolder';
export * from './accountHolderCapability';
export * from './accountHolderInfo';
export * from './accountHolderUpdateRequest';
export * from './accountSupportingEntityCapability';
export * from './activeNetworkTokensRestriction';
export * from './additionalBankIdentification';
export * from './address';
export * from './addressRequirement';
export * from './amount';
export * from './amountMinMaxRequirement';
export * from './amountNonZeroDecimalsRequirement';
export * from './associationDelegatedAuthenticationData';
export * from './associationFinaliseRequest';
export * from './associationFinaliseResponse';
export * from './associationInitiateRequest';
export * from './associationInitiateResponse';
export * from './authentication';
export * from './bRLocalAccountIdentification';
export * from './balance';
export * from './balanceAccount';
export * from './balanceAccountBase';
export * from './balanceAccountInfo';
export * from './balanceAccountUpdateRequest';
export * from './balancePlatform';
export * from './balanceSweepConfigurationsResponse';
export * from './bankAccount';
export * from './bankAccountAccountIdentification';
export * from './bankAccountDetails';
export * from './bankAccountIdentificationTypeRequirement';
export * from './bankAccountIdentificationValidationRequest';
export * from './bankAccountIdentificationValidationRequestAccountIdentification';
export * from './bankAccountModel';
export * from './bankIdentification';
export * from './brandVariantsRestriction';
export * from './bulkAddress';
export * from './cALocalAccountIdentification';
export * from './cZLocalAccountIdentification';
export * from './capabilityProblem';
export * from './capabilityProblemEntity';
export * from './capabilityProblemEntityRecursive';
export * from './capabilitySettings';
export * from './capitalBalance';
export * from './capitalGrantAccount';
export * from './card';
export * from './cardConfiguration';
export * from './cardInfo';
export * from './cardOrder';
export * from './cardOrderItem';
export * from './cardOrderItemDeliveryStatus';
export * from './contactDetails';
export * from './counterparty';
export * from './counterpartyBankRestriction';
export * from './counterpartyTypesRestriction';
export * from './countriesRestriction';
export * from './createSweepConfigurationV2';
export * from './dKLocalAccountIdentification';
export * from './dayOfWeekRestriction';
export * from './delegatedAuthenticationData';
export * from './deliveryAddress';
export * from './deliveryContact';
export * from './device';
export * from './deviceInfo';
export * from './differentCurrenciesRestriction';
export * from './duration';
export * from './entryModesRestriction';
export * from './expiry';
export * from './fee';
export * from './getNetworkTokenResponse';
export * from './getTaxFormResponse';
export * from './grantLimit';
export * from './grantOffer';
export * from './grantOffers';
export * from './hKLocalAccountIdentification';
export * from './hULocalAccountIdentification';
export * from './href';
export * from './ibanAccountIdentification';
export * from './ibanAccountIdentificationRequirement';
export * from './internationalTransactionRestriction';
export * from './invalidField';
export * from './link';
export * from './listNetworkTokensResponse';
export * from './matchingTransactionsRestriction';
export * from './matchingValuesRestriction';
export * from './mccsRestriction';
export * from './merchantAcquirerPair';
export * from './merchantNamesRestriction';
export * from './merchantsRestriction';
export * from './nOLocalAccountIdentification';
export * from './nZLocalAccountIdentification';
export * from './name';
export * from './networkToken';
export * from './numberAndBicAccountIdentification';
export * from './pLLocalAccountIdentification';
export * from './paginatedAccountHoldersResponse';
export * from './paginatedBalanceAccountsResponse';
export * from './paginatedGetCardOrderItemResponse';
export * from './paginatedGetCardOrderResponse';
export * from './paginatedPaymentInstrumentsResponse';
export * from './paymentInstrument';
export * from './paymentInstrumentAdditionalBankAccountIdentificationsInner';
export * from './paymentInstrumentGroup';
export * from './paymentInstrumentGroupInfo';
export * from './paymentInstrumentInfo';
export * from './paymentInstrumentRequirement';
export * from './paymentInstrumentRevealInfo';
export * from './paymentInstrumentRevealRequest';
export * from './paymentInstrumentRevealResponse';
export * from './paymentInstrumentUpdateRequest';
export * from './phone';
export * from './phoneNumber';
export * from './pinChangeRequest';
export * from './pinChangeResponse';
export * from './platformPaymentConfiguration';
export * from './processingTypesRestriction';
export * from './publicKeyResponse';
export * from './registerSCAFinalResponse';
export * from './registerSCARequest';
export * from './registerSCAResponse';
export * from './remediatingAction';
export * from './repayment';
export * from './repaymentTerm';
export * from './restServiceError';
export * from './revealPinRequest';
export * from './revealPinResponse';
export * from './riskScores';
export * from './riskScoresRestriction';
export * from './sELocalAccountIdentification';
export * from './sGLocalAccountIdentification';
export * from './sameAmountRestriction';
export * from './sameCounterpartyRestriction';
export * from './searchRegisteredDevicesResponse';
export * from './sourceAccountTypesRestriction';
export * from './stringMatch';
export * from './sweepConfigurationV2';
export * from './sweepCounterparty';
export * from './sweepSchedule';
export * from './thresholdRepayment';
export * from './timeOfDay';
export * from './timeOfDayRestriction';
export * from './tokenRequestorsRestriction';
export * from './totalAmountRestriction';
export * from './transactionRule';
export * from './transactionRuleEntityKey';
export * from './transactionRuleInfo';
export * from './transactionRuleInterval';
export * from './transactionRuleResponse';
export * from './transactionRuleRestrictions';
export * from './transactionRulesResponse';
export * from './transferRoute';
export * from './transferRouteRequest';
export * from './transferRouteRequirementsInner';
export * from './transferRouteResponse';
export * from './uKLocalAccountIdentification';
export * from './uSInternationalAchAddressRequirement';
export * from './uSLocalAccountIdentification';
export * from './updateNetworkTokenRequest';
export * from './updatePaymentInstrument';
export * from './updateSweepConfigurationV2';
export * from './verificationDeadline';
export * from './verificationError';
export * from './verificationErrorRecursive';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AULocalAccountIdentification } from './aULocalAccountIdentification';
import { AccountHolder } from './accountHolder';
import { AccountHolderCapability } from './accountHolderCapability';
import { AccountHolderInfo } from './accountHolderInfo';
import { AccountHolderUpdateRequest } from './accountHolderUpdateRequest';
import { AccountSupportingEntityCapability } from './accountSupportingEntityCapability';
import { ActiveNetworkTokensRestriction } from './activeNetworkTokensRestriction';
import { AdditionalBankIdentification } from './additionalBankIdentification';
import { Address } from './address';
import { AddressRequirement } from './addressRequirement';
import { Amount } from './amount';
import { AmountMinMaxRequirement } from './amountMinMaxRequirement';
import { AmountNonZeroDecimalsRequirement } from './amountNonZeroDecimalsRequirement';
import { AssociationDelegatedAuthenticationData } from './associationDelegatedAuthenticationData';
import { AssociationFinaliseRequest } from './associationFinaliseRequest';
import { AssociationFinaliseResponse } from './associationFinaliseResponse';
import { AssociationInitiateRequest } from './associationInitiateRequest';
import { AssociationInitiateResponse } from './associationInitiateResponse';
import { Authentication } from './authentication';
import { BRLocalAccountIdentification } from './bRLocalAccountIdentification';
import { Balance } from './balance';
import { BalanceAccount } from './balanceAccount';
import { BalanceAccountBase } from './balanceAccountBase';
import { BalanceAccountInfo } from './balanceAccountInfo';
import { BalanceAccountUpdateRequest } from './balanceAccountUpdateRequest';
import { BalancePlatform } from './balancePlatform';
import { BalanceSweepConfigurationsResponse } from './balanceSweepConfigurationsResponse';
import { BankAccount } from './bankAccount';
import { BankAccountAccountIdentification } from './bankAccountAccountIdentification';
import { BankAccountDetails } from './bankAccountDetails';
import { BankAccountIdentificationTypeRequirement } from './bankAccountIdentificationTypeRequirement';
import { BankAccountIdentificationValidationRequest } from './bankAccountIdentificationValidationRequest';
import { BankAccountIdentificationValidationRequestAccountIdentification } from './bankAccountIdentificationValidationRequestAccountIdentification';
import { BankAccountModel } from './bankAccountModel';
import { BankIdentification } from './bankIdentification';
import { BrandVariantsRestriction } from './brandVariantsRestriction';
import { BulkAddress } from './bulkAddress';
import { CALocalAccountIdentification } from './cALocalAccountIdentification';
import { CZLocalAccountIdentification } from './cZLocalAccountIdentification';
import { CapabilityProblem } from './capabilityProblem';
import { CapabilityProblemEntity } from './capabilityProblemEntity';
import { CapabilityProblemEntityRecursive } from './capabilityProblemEntityRecursive';
import { CapabilitySettings } from './capabilitySettings';
import { CapitalBalance } from './capitalBalance';
import { CapitalGrantAccount } from './capitalGrantAccount';
import { Card } from './card';
import { CardConfiguration } from './cardConfiguration';
import { CardInfo } from './cardInfo';
import { CardOrder } from './cardOrder';
import { CardOrderItem } from './cardOrderItem';
import { CardOrderItemDeliveryStatus } from './cardOrderItemDeliveryStatus';
import { ContactDetails } from './contactDetails';
import { Counterparty } from './counterparty';
import { CounterpartyBankRestriction } from './counterpartyBankRestriction';
import { CounterpartyTypesRestriction } from './counterpartyTypesRestriction';
import { CountriesRestriction } from './countriesRestriction';
import { CreateSweepConfigurationV2 } from './createSweepConfigurationV2';
import { DKLocalAccountIdentification } from './dKLocalAccountIdentification';
import { DayOfWeekRestriction } from './dayOfWeekRestriction';
import { DelegatedAuthenticationData } from './delegatedAuthenticationData';
import { DeliveryAddress } from './deliveryAddress';
import { DeliveryContact } from './deliveryContact';
import { Device } from './device';
import { DeviceInfo } from './deviceInfo';
import { DifferentCurrenciesRestriction } from './differentCurrenciesRestriction';
import { Duration } from './duration';
import { EntryModesRestriction } from './entryModesRestriction';
import { Expiry } from './expiry';
import { Fee } from './fee';
import { GetNetworkTokenResponse } from './getNetworkTokenResponse';
import { GetTaxFormResponse } from './getTaxFormResponse';
import { GrantLimit } from './grantLimit';
import { GrantOffer } from './grantOffer';
import { GrantOffers } from './grantOffers';
import { HKLocalAccountIdentification } from './hKLocalAccountIdentification';
import { HULocalAccountIdentification } from './hULocalAccountIdentification';
import { Href } from './href';
import { IbanAccountIdentification } from './ibanAccountIdentification';
import { IbanAccountIdentificationRequirement } from './ibanAccountIdentificationRequirement';
import { InternationalTransactionRestriction } from './internationalTransactionRestriction';
import { InvalidField } from './invalidField';
import { Link } from './link';
import { ListNetworkTokensResponse } from './listNetworkTokensResponse';
import { MatchingTransactionsRestriction } from './matchingTransactionsRestriction';
import { MatchingValuesRestriction } from './matchingValuesRestriction';
import { MccsRestriction } from './mccsRestriction';
import { MerchantAcquirerPair } from './merchantAcquirerPair';
import { MerchantNamesRestriction } from './merchantNamesRestriction';
import { MerchantsRestriction } from './merchantsRestriction';
import { NOLocalAccountIdentification } from './nOLocalAccountIdentification';
import { NZLocalAccountIdentification } from './nZLocalAccountIdentification';
import { Name } from './name';
import { NetworkToken } from './networkToken';
import { NumberAndBicAccountIdentification } from './numberAndBicAccountIdentification';
import { PLLocalAccountIdentification } from './pLLocalAccountIdentification';
import { PaginatedAccountHoldersResponse } from './paginatedAccountHoldersResponse';
import { PaginatedBalanceAccountsResponse } from './paginatedBalanceAccountsResponse';
import { PaginatedGetCardOrderItemResponse } from './paginatedGetCardOrderItemResponse';
import { PaginatedGetCardOrderResponse } from './paginatedGetCardOrderResponse';
import { PaginatedPaymentInstrumentsResponse } from './paginatedPaymentInstrumentsResponse';
import { PaymentInstrument } from './paymentInstrument';
import { PaymentInstrumentAdditionalBankAccountIdentificationsInner } from './paymentInstrumentAdditionalBankAccountIdentificationsInner';
import { PaymentInstrumentGroup } from './paymentInstrumentGroup';
import { PaymentInstrumentGroupInfo } from './paymentInstrumentGroupInfo';
import { PaymentInstrumentInfo } from './paymentInstrumentInfo';
import { PaymentInstrumentRequirement } from './paymentInstrumentRequirement';
import { PaymentInstrumentRevealInfo } from './paymentInstrumentRevealInfo';
import { PaymentInstrumentRevealRequest } from './paymentInstrumentRevealRequest';
import { PaymentInstrumentRevealResponse } from './paymentInstrumentRevealResponse';
import { PaymentInstrumentUpdateRequest } from './paymentInstrumentUpdateRequest';
import { Phone } from './phone';
import { PhoneNumber } from './phoneNumber';
import { PinChangeRequest } from './pinChangeRequest';
import { PinChangeResponse } from './pinChangeResponse';
import { PlatformPaymentConfiguration } from './platformPaymentConfiguration';
import { ProcessingTypesRestriction } from './processingTypesRestriction';
import { PublicKeyResponse } from './publicKeyResponse';
import { RegisterSCAFinalResponse } from './registerSCAFinalResponse';
import { RegisterSCARequest } from './registerSCARequest';
import { RegisterSCAResponse } from './registerSCAResponse';
import { RemediatingAction } from './remediatingAction';
import { Repayment } from './repayment';
import { RepaymentTerm } from './repaymentTerm';
import { RestServiceError } from './restServiceError';
import { RevealPinRequest } from './revealPinRequest';
import { RevealPinResponse } from './revealPinResponse';
import { RiskScores } from './riskScores';
import { RiskScoresRestriction } from './riskScoresRestriction';
import { SELocalAccountIdentification } from './sELocalAccountIdentification';
import { SGLocalAccountIdentification } from './sGLocalAccountIdentification';
import { SameAmountRestriction } from './sameAmountRestriction';
import { SameCounterpartyRestriction } from './sameCounterpartyRestriction';
import { SearchRegisteredDevicesResponse } from './searchRegisteredDevicesResponse';
import { SourceAccountTypesRestriction } from './sourceAccountTypesRestriction';
import { StringMatch } from './stringMatch';
import { SweepConfigurationV2 } from './sweepConfigurationV2';
import { SweepCounterparty } from './sweepCounterparty';
import { SweepSchedule } from './sweepSchedule';
import { ThresholdRepayment } from './thresholdRepayment';
import { TimeOfDay } from './timeOfDay';
import { TimeOfDayRestriction } from './timeOfDayRestriction';
import { TokenRequestorsRestriction } from './tokenRequestorsRestriction';
import { TotalAmountRestriction } from './totalAmountRestriction';
import { TransactionRule } from './transactionRule';
import { TransactionRuleEntityKey } from './transactionRuleEntityKey';
import { TransactionRuleInfo } from './transactionRuleInfo';
import { TransactionRuleInterval } from './transactionRuleInterval';
import { TransactionRuleResponse } from './transactionRuleResponse';
import { TransactionRuleRestrictions } from './transactionRuleRestrictions';
import { TransactionRulesResponse } from './transactionRulesResponse';
import { TransferRoute } from './transferRoute';
import { TransferRouteRequest } from './transferRouteRequest';
import { TransferRouteRequirementsInner } from './transferRouteRequirementsInner';
import { TransferRouteResponse } from './transferRouteResponse';
import { UKLocalAccountIdentification } from './uKLocalAccountIdentification';
import { USInternationalAchAddressRequirement } from './uSInternationalAchAddressRequirement';
import { USLocalAccountIdentification } from './uSLocalAccountIdentification';
import { UpdateNetworkTokenRequest } from './updateNetworkTokenRequest';
import { UpdatePaymentInstrument } from './updatePaymentInstrument';
import { UpdateSweepConfigurationV2 } from './updateSweepConfigurationV2';
import { VerificationDeadline } from './verificationDeadline';
import { VerificationError } from './verificationError';
import { VerificationErrorRecursive } from './verificationErrorRecursive';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AULocalAccountIdentification.TypeEnum": AULocalAccountIdentification.TypeEnum,
        "AccountHolder.StatusEnum": AccountHolder.StatusEnum,
        "AccountHolderCapability.AllowedLevelEnum": AccountHolderCapability.AllowedLevelEnum,
        "AccountHolderCapability.RequestedLevelEnum": AccountHolderCapability.RequestedLevelEnum,
        "AccountHolderCapability.VerificationStatusEnum": AccountHolderCapability.VerificationStatusEnum,
        "AccountHolderUpdateRequest.StatusEnum": AccountHolderUpdateRequest.StatusEnum,
        "AccountSupportingEntityCapability.AllowedLevelEnum": AccountSupportingEntityCapability.AllowedLevelEnum,
        "AccountSupportingEntityCapability.RequestedLevelEnum": AccountSupportingEntityCapability.RequestedLevelEnum,
        "AccountSupportingEntityCapability.VerificationStatusEnum": AccountSupportingEntityCapability.VerificationStatusEnum,
        "AdditionalBankIdentification.TypeEnum": AdditionalBankIdentification.TypeEnum,
        "AddressRequirement.RequiredAddressFieldsEnum": AddressRequirement.RequiredAddressFieldsEnum,
        "AddressRequirement.TypeEnum": AddressRequirement.TypeEnum,
        "AmountMinMaxRequirement.TypeEnum": AmountMinMaxRequirement.TypeEnum,
        "AmountNonZeroDecimalsRequirement.TypeEnum": AmountNonZeroDecimalsRequirement.TypeEnum,
        "AssociationFinaliseRequest.TypeEnum": AssociationFinaliseRequest.TypeEnum,
        "AssociationFinaliseResponse.TypeEnum": AssociationFinaliseResponse.TypeEnum,
        "AssociationInitiateRequest.TypeEnum": AssociationInitiateRequest.TypeEnum,
        "BRLocalAccountIdentification.TypeEnum": BRLocalAccountIdentification.TypeEnum,
        "BalanceAccount.StatusEnum": BalanceAccount.StatusEnum,
        "BalanceAccountBase.StatusEnum": BalanceAccountBase.StatusEnum,
        "BalanceAccountUpdateRequest.StatusEnum": BalanceAccountUpdateRequest.StatusEnum,
        "BankAccountAccountIdentification.TypeEnum": BankAccountAccountIdentification.TypeEnum,
        "BankAccountAccountIdentification.AccountTypeEnum": BankAccountAccountIdentification.AccountTypeEnum,
        "BankAccountIdentificationTypeRequirement.BankAccountIdentificationTypesEnum": BankAccountIdentificationTypeRequirement.BankAccountIdentificationTypesEnum,
        "BankAccountIdentificationTypeRequirement.TypeEnum": BankAccountIdentificationTypeRequirement.TypeEnum,
        "BankAccountIdentificationValidationRequestAccountIdentification.TypeEnum": BankAccountIdentificationValidationRequestAccountIdentification.TypeEnum,
        "BankAccountIdentificationValidationRequestAccountIdentification.AccountTypeEnum": BankAccountIdentificationValidationRequestAccountIdentification.AccountTypeEnum,
        "BankAccountModel.FormFactorEnum": BankAccountModel.FormFactorEnum,
        "BankIdentification.IdentificationTypeEnum": BankIdentification.IdentificationTypeEnum,
        "CALocalAccountIdentification.AccountTypeEnum": CALocalAccountIdentification.AccountTypeEnum,
        "CALocalAccountIdentification.TypeEnum": CALocalAccountIdentification.TypeEnum,
        "CZLocalAccountIdentification.TypeEnum": CZLocalAccountIdentification.TypeEnum,
        "CapabilityProblemEntity.TypeEnum": CapabilityProblemEntity.TypeEnum,
        "CapabilityProblemEntityRecursive.TypeEnum": CapabilityProblemEntityRecursive.TypeEnum,
        "CapabilitySettings.FundingSourceEnum": CapabilitySettings.FundingSourceEnum,
        "CapabilitySettings.IntervalEnum": CapabilitySettings.IntervalEnum,
        "Card.FormFactorEnum": Card.FormFactorEnum,
        "CardInfo.FormFactorEnum": CardInfo.FormFactorEnum,
        "CardOrder.StatusEnum": CardOrder.StatusEnum,
        "CardOrderItemDeliveryStatus.StatusEnum": CardOrderItemDeliveryStatus.StatusEnum,
        "CounterpartyTypesRestriction.ValueEnum": CounterpartyTypesRestriction.ValueEnum,
        "CreateSweepConfigurationV2.CategoryEnum": CreateSweepConfigurationV2.CategoryEnum,
        "CreateSweepConfigurationV2.PrioritiesEnum": CreateSweepConfigurationV2.PrioritiesEnum,
        "CreateSweepConfigurationV2.ReasonEnum": CreateSweepConfigurationV2.ReasonEnum,
        "CreateSweepConfigurationV2.StatusEnum": CreateSweepConfigurationV2.StatusEnum,
        "CreateSweepConfigurationV2.TypeEnum": CreateSweepConfigurationV2.TypeEnum,
        "DKLocalAccountIdentification.TypeEnum": DKLocalAccountIdentification.TypeEnum,
        "DayOfWeekRestriction.ValueEnum": DayOfWeekRestriction.ValueEnum,
        "Device.TypeEnum": Device.TypeEnum,
        "Duration.UnitEnum": Duration.UnitEnum,
        "EntryModesRestriction.ValueEnum": EntryModesRestriction.ValueEnum,
        "GetTaxFormResponse.ContentTypeEnum": GetTaxFormResponse.ContentTypeEnum,
        "GrantOffer.ContractTypeEnum": GrantOffer.ContractTypeEnum,
        "HKLocalAccountIdentification.TypeEnum": HKLocalAccountIdentification.TypeEnum,
        "HULocalAccountIdentification.TypeEnum": HULocalAccountIdentification.TypeEnum,
        "IbanAccountIdentification.TypeEnum": IbanAccountIdentification.TypeEnum,
        "IbanAccountIdentificationRequirement.TypeEnum": IbanAccountIdentificationRequirement.TypeEnum,
        "MatchingValuesRestriction.ValueEnum": MatchingValuesRestriction.ValueEnum,
        "NOLocalAccountIdentification.TypeEnum": NOLocalAccountIdentification.TypeEnum,
        "NZLocalAccountIdentification.TypeEnum": NZLocalAccountIdentification.TypeEnum,
        "NetworkToken.StatusEnum": NetworkToken.StatusEnum,
        "NumberAndBicAccountIdentification.TypeEnum": NumberAndBicAccountIdentification.TypeEnum,
        "PLLocalAccountIdentification.TypeEnum": PLLocalAccountIdentification.TypeEnum,
        "PaymentInstrument.StatusEnum": PaymentInstrument.StatusEnum,
        "PaymentInstrument.StatusReasonEnum": PaymentInstrument.StatusReasonEnum,
        "PaymentInstrument.TypeEnum": PaymentInstrument.TypeEnum,
        "PaymentInstrumentAdditionalBankAccountIdentificationsInner.TypeEnum": PaymentInstrumentAdditionalBankAccountIdentificationsInner.TypeEnum,
        "PaymentInstrumentInfo.StatusEnum": PaymentInstrumentInfo.StatusEnum,
        "PaymentInstrumentInfo.StatusReasonEnum": PaymentInstrumentInfo.StatusReasonEnum,
        "PaymentInstrumentInfo.TypeEnum": PaymentInstrumentInfo.TypeEnum,
        "PaymentInstrumentRequirement.PaymentInstrumentTypeEnum": PaymentInstrumentRequirement.PaymentInstrumentTypeEnum,
        "PaymentInstrumentRequirement.TypeEnum": PaymentInstrumentRequirement.TypeEnum,
        "PaymentInstrumentUpdateRequest.StatusEnum": PaymentInstrumentUpdateRequest.StatusEnum,
        "PaymentInstrumentUpdateRequest.StatusReasonEnum": PaymentInstrumentUpdateRequest.StatusReasonEnum,
        "Phone.TypeEnum": Phone.TypeEnum,
        "PhoneNumber.PhoneTypeEnum": PhoneNumber.PhoneTypeEnum,
        "PinChangeResponse.StatusEnum": PinChangeResponse.StatusEnum,
        "ProcessingTypesRestriction.ValueEnum": ProcessingTypesRestriction.ValueEnum,
        "SELocalAccountIdentification.TypeEnum": SELocalAccountIdentification.TypeEnum,
        "SGLocalAccountIdentification.TypeEnum": SGLocalAccountIdentification.TypeEnum,
        "SourceAccountTypesRestriction.ValueEnum": SourceAccountTypesRestriction.ValueEnum,
        "StringMatch.OperationEnum": StringMatch.OperationEnum,
        "SweepConfigurationV2.CategoryEnum": SweepConfigurationV2.CategoryEnum,
        "SweepConfigurationV2.PrioritiesEnum": SweepConfigurationV2.PrioritiesEnum,
        "SweepConfigurationV2.ReasonEnum": SweepConfigurationV2.ReasonEnum,
        "SweepConfigurationV2.StatusEnum": SweepConfigurationV2.StatusEnum,
        "SweepConfigurationV2.TypeEnum": SweepConfigurationV2.TypeEnum,
        "SweepSchedule.TypeEnum": SweepSchedule.TypeEnum,
        "TransactionRule.OutcomeTypeEnum": TransactionRule.OutcomeTypeEnum,
        "TransactionRule.RequestTypeEnum": TransactionRule.RequestTypeEnum,
        "TransactionRule.StatusEnum": TransactionRule.StatusEnum,
        "TransactionRule.TypeEnum": TransactionRule.TypeEnum,
        "TransactionRuleInfo.OutcomeTypeEnum": TransactionRuleInfo.OutcomeTypeEnum,
        "TransactionRuleInfo.RequestTypeEnum": TransactionRuleInfo.RequestTypeEnum,
        "TransactionRuleInfo.StatusEnum": TransactionRuleInfo.StatusEnum,
        "TransactionRuleInfo.TypeEnum": TransactionRuleInfo.TypeEnum,
        "TransactionRuleInterval.DayOfWeekEnum": TransactionRuleInterval.DayOfWeekEnum,
        "TransactionRuleInterval.TypeEnum": TransactionRuleInterval.TypeEnum,
        "TransferRoute.CategoryEnum": TransferRoute.CategoryEnum,
        "TransferRoute.PriorityEnum": TransferRoute.PriorityEnum,
        "TransferRouteRequest.CategoryEnum": TransferRouteRequest.CategoryEnum,
        "TransferRouteRequest.PrioritiesEnum": TransferRouteRequest.PrioritiesEnum,
        "TransferRouteRequirementsInner.RequiredAddressFieldsEnum": TransferRouteRequirementsInner.RequiredAddressFieldsEnum,
        "TransferRouteRequirementsInner.TypeEnum": TransferRouteRequirementsInner.TypeEnum,
        "TransferRouteRequirementsInner.BankAccountIdentificationTypesEnum": TransferRouteRequirementsInner.BankAccountIdentificationTypesEnum,
        "TransferRouteRequirementsInner.PaymentInstrumentTypeEnum": TransferRouteRequirementsInner.PaymentInstrumentTypeEnum,
        "UKLocalAccountIdentification.TypeEnum": UKLocalAccountIdentification.TypeEnum,
        "USInternationalAchAddressRequirement.TypeEnum": USInternationalAchAddressRequirement.TypeEnum,
        "USLocalAccountIdentification.AccountTypeEnum": USLocalAccountIdentification.AccountTypeEnum,
        "USLocalAccountIdentification.TypeEnum": USLocalAccountIdentification.TypeEnum,
        "UpdateNetworkTokenRequest.StatusEnum": UpdateNetworkTokenRequest.StatusEnum,
        "UpdatePaymentInstrument.StatusEnum": UpdatePaymentInstrument.StatusEnum,
        "UpdatePaymentInstrument.StatusReasonEnum": UpdatePaymentInstrument.StatusReasonEnum,
        "UpdatePaymentInstrument.TypeEnum": UpdatePaymentInstrument.TypeEnum,
        "UpdateSweepConfigurationV2.CategoryEnum": UpdateSweepConfigurationV2.CategoryEnum,
        "UpdateSweepConfigurationV2.PrioritiesEnum": UpdateSweepConfigurationV2.PrioritiesEnum,
        "UpdateSweepConfigurationV2.ReasonEnum": UpdateSweepConfigurationV2.ReasonEnum,
        "UpdateSweepConfigurationV2.StatusEnum": UpdateSweepConfigurationV2.StatusEnum,
        "UpdateSweepConfigurationV2.TypeEnum": UpdateSweepConfigurationV2.TypeEnum,
        "VerificationDeadline.CapabilitiesEnum": VerificationDeadline.CapabilitiesEnum,
        "VerificationError.CapabilitiesEnum": VerificationError.CapabilitiesEnum,
        "VerificationError.TypeEnum": VerificationError.TypeEnum,
        "VerificationErrorRecursive.CapabilitiesEnum": VerificationErrorRecursive.CapabilitiesEnum,
        "VerificationErrorRecursive.TypeEnum": VerificationErrorRecursive.TypeEnum,
}

let typeMap: {[index: string]: any} = {
    "AULocalAccountIdentification": AULocalAccountIdentification,
    "AccountHolder": AccountHolder,
    "AccountHolderCapability": AccountHolderCapability,
    "AccountHolderInfo": AccountHolderInfo,
    "AccountHolderUpdateRequest": AccountHolderUpdateRequest,
    "AccountSupportingEntityCapability": AccountSupportingEntityCapability,
    "ActiveNetworkTokensRestriction": ActiveNetworkTokensRestriction,
    "AdditionalBankIdentification": AdditionalBankIdentification,
    "Address": Address,
    "AddressRequirement": AddressRequirement,
    "Amount": Amount,
    "AmountMinMaxRequirement": AmountMinMaxRequirement,
    "AmountNonZeroDecimalsRequirement": AmountNonZeroDecimalsRequirement,
    "AssociationDelegatedAuthenticationData": AssociationDelegatedAuthenticationData,
    "AssociationFinaliseRequest": AssociationFinaliseRequest,
    "AssociationFinaliseResponse": AssociationFinaliseResponse,
    "AssociationInitiateRequest": AssociationInitiateRequest,
    "AssociationInitiateResponse": AssociationInitiateResponse,
    "Authentication": Authentication,
    "BRLocalAccountIdentification": BRLocalAccountIdentification,
    "Balance": Balance,
    "BalanceAccount": BalanceAccount,
    "BalanceAccountBase": BalanceAccountBase,
    "BalanceAccountInfo": BalanceAccountInfo,
    "BalanceAccountUpdateRequest": BalanceAccountUpdateRequest,
    "BalancePlatform": BalancePlatform,
    "BalanceSweepConfigurationsResponse": BalanceSweepConfigurationsResponse,
    "BankAccount": BankAccount,
    "BankAccountAccountIdentification": BankAccountAccountIdentification,
    "BankAccountDetails": BankAccountDetails,
    "BankAccountIdentificationTypeRequirement": BankAccountIdentificationTypeRequirement,
    "BankAccountIdentificationValidationRequest": BankAccountIdentificationValidationRequest,
    "BankAccountIdentificationValidationRequestAccountIdentification": BankAccountIdentificationValidationRequestAccountIdentification,
    "BankAccountModel": BankAccountModel,
    "BankIdentification": BankIdentification,
    "BrandVariantsRestriction": BrandVariantsRestriction,
    "BulkAddress": BulkAddress,
    "CALocalAccountIdentification": CALocalAccountIdentification,
    "CZLocalAccountIdentification": CZLocalAccountIdentification,
    "CapabilityProblem": CapabilityProblem,
    "CapabilityProblemEntity": CapabilityProblemEntity,
    "CapabilityProblemEntityRecursive": CapabilityProblemEntityRecursive,
    "CapabilitySettings": CapabilitySettings,
    "CapitalBalance": CapitalBalance,
    "CapitalGrantAccount": CapitalGrantAccount,
    "Card": Card,
    "CardConfiguration": CardConfiguration,
    "CardInfo": CardInfo,
    "CardOrder": CardOrder,
    "CardOrderItem": CardOrderItem,
    "CardOrderItemDeliveryStatus": CardOrderItemDeliveryStatus,
    "ContactDetails": ContactDetails,
    "Counterparty": Counterparty,
    "CounterpartyBankRestriction": CounterpartyBankRestriction,
    "CounterpartyTypesRestriction": CounterpartyTypesRestriction,
    "CountriesRestriction": CountriesRestriction,
    "CreateSweepConfigurationV2": CreateSweepConfigurationV2,
    "DKLocalAccountIdentification": DKLocalAccountIdentification,
    "DayOfWeekRestriction": DayOfWeekRestriction,
    "DelegatedAuthenticationData": DelegatedAuthenticationData,
    "DeliveryAddress": DeliveryAddress,
    "DeliveryContact": DeliveryContact,
    "Device": Device,
    "DeviceInfo": DeviceInfo,
    "DifferentCurrenciesRestriction": DifferentCurrenciesRestriction,
    "Duration": Duration,
    "EntryModesRestriction": EntryModesRestriction,
    "Expiry": Expiry,
    "Fee": Fee,
    "GetNetworkTokenResponse": GetNetworkTokenResponse,
    "GetTaxFormResponse": GetTaxFormResponse,
    "GrantLimit": GrantLimit,
    "GrantOffer": GrantOffer,
    "GrantOffers": GrantOffers,
    "HKLocalAccountIdentification": HKLocalAccountIdentification,
    "HULocalAccountIdentification": HULocalAccountIdentification,
    "Href": Href,
    "IbanAccountIdentification": IbanAccountIdentification,
    "IbanAccountIdentificationRequirement": IbanAccountIdentificationRequirement,
    "InternationalTransactionRestriction": InternationalTransactionRestriction,
    "InvalidField": InvalidField,
    "Link": Link,
    "ListNetworkTokensResponse": ListNetworkTokensResponse,
    "MatchingTransactionsRestriction": MatchingTransactionsRestriction,
    "MatchingValuesRestriction": MatchingValuesRestriction,
    "MccsRestriction": MccsRestriction,
    "MerchantAcquirerPair": MerchantAcquirerPair,
    "MerchantNamesRestriction": MerchantNamesRestriction,
    "MerchantsRestriction": MerchantsRestriction,
    "NOLocalAccountIdentification": NOLocalAccountIdentification,
    "NZLocalAccountIdentification": NZLocalAccountIdentification,
    "Name": Name,
    "NetworkToken": NetworkToken,
    "NumberAndBicAccountIdentification": NumberAndBicAccountIdentification,
    "PLLocalAccountIdentification": PLLocalAccountIdentification,
    "PaginatedAccountHoldersResponse": PaginatedAccountHoldersResponse,
    "PaginatedBalanceAccountsResponse": PaginatedBalanceAccountsResponse,
    "PaginatedGetCardOrderItemResponse": PaginatedGetCardOrderItemResponse,
    "PaginatedGetCardOrderResponse": PaginatedGetCardOrderResponse,
    "PaginatedPaymentInstrumentsResponse": PaginatedPaymentInstrumentsResponse,
    "PaymentInstrument": PaymentInstrument,
    "PaymentInstrumentAdditionalBankAccountIdentificationsInner": PaymentInstrumentAdditionalBankAccountIdentificationsInner,
    "PaymentInstrumentGroup": PaymentInstrumentGroup,
    "PaymentInstrumentGroupInfo": PaymentInstrumentGroupInfo,
    "PaymentInstrumentInfo": PaymentInstrumentInfo,
    "PaymentInstrumentRequirement": PaymentInstrumentRequirement,
    "PaymentInstrumentRevealInfo": PaymentInstrumentRevealInfo,
    "PaymentInstrumentRevealRequest": PaymentInstrumentRevealRequest,
    "PaymentInstrumentRevealResponse": PaymentInstrumentRevealResponse,
    "PaymentInstrumentUpdateRequest": PaymentInstrumentUpdateRequest,
    "Phone": Phone,
    "PhoneNumber": PhoneNumber,
    "PinChangeRequest": PinChangeRequest,
    "PinChangeResponse": PinChangeResponse,
    "PlatformPaymentConfiguration": PlatformPaymentConfiguration,
    "ProcessingTypesRestriction": ProcessingTypesRestriction,
    "PublicKeyResponse": PublicKeyResponse,
    "RegisterSCAFinalResponse": RegisterSCAFinalResponse,
    "RegisterSCARequest": RegisterSCARequest,
    "RegisterSCAResponse": RegisterSCAResponse,
    "RemediatingAction": RemediatingAction,
    "Repayment": Repayment,
    "RepaymentTerm": RepaymentTerm,
    "RestServiceError": RestServiceError,
    "RevealPinRequest": RevealPinRequest,
    "RevealPinResponse": RevealPinResponse,
    "RiskScores": RiskScores,
    "RiskScoresRestriction": RiskScoresRestriction,
    "SELocalAccountIdentification": SELocalAccountIdentification,
    "SGLocalAccountIdentification": SGLocalAccountIdentification,
    "SameAmountRestriction": SameAmountRestriction,
    "SameCounterpartyRestriction": SameCounterpartyRestriction,
    "SearchRegisteredDevicesResponse": SearchRegisteredDevicesResponse,
    "SourceAccountTypesRestriction": SourceAccountTypesRestriction,
    "StringMatch": StringMatch,
    "SweepConfigurationV2": SweepConfigurationV2,
    "SweepCounterparty": SweepCounterparty,
    "SweepSchedule": SweepSchedule,
    "ThresholdRepayment": ThresholdRepayment,
    "TimeOfDay": TimeOfDay,
    "TimeOfDayRestriction": TimeOfDayRestriction,
    "TokenRequestorsRestriction": TokenRequestorsRestriction,
    "TotalAmountRestriction": TotalAmountRestriction,
    "TransactionRule": TransactionRule,
    "TransactionRuleEntityKey": TransactionRuleEntityKey,
    "TransactionRuleInfo": TransactionRuleInfo,
    "TransactionRuleInterval": TransactionRuleInterval,
    "TransactionRuleResponse": TransactionRuleResponse,
    "TransactionRuleRestrictions": TransactionRuleRestrictions,
    "TransactionRulesResponse": TransactionRulesResponse,
    "TransferRoute": TransferRoute,
    "TransferRouteRequest": TransferRouteRequest,
    "TransferRouteRequirementsInner": TransferRouteRequirementsInner,
    "TransferRouteResponse": TransferRouteResponse,
    "UKLocalAccountIdentification": UKLocalAccountIdentification,
    "USInternationalAchAddressRequirement": USInternationalAchAddressRequirement,
    "USLocalAccountIdentification": USLocalAccountIdentification,
    "UpdateNetworkTokenRequest": UpdateNetworkTokenRequest,
    "UpdatePaymentInstrument": UpdatePaymentInstrument,
    "UpdateSweepConfigurationV2": UpdateSweepConfigurationV2,
    "VerificationDeadline": VerificationDeadline,
    "VerificationError": VerificationError,
    "VerificationErrorRecursive": VerificationErrorRecursive,
}

// Check if a string starts with another string without using es6 features
function startsWith(str: string, match: string): boolean {
    return str.substring(0, match.length) === match;
}

// Check if a string ends with another string without using es6 features
function endsWith(str: string, match: string): boolean {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
