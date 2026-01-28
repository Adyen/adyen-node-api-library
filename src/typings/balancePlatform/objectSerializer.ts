export * from "./models";

import { AULocalAccountIdentification } from "./aULocalAccountIdentification";
import { AccountHolder } from "./accountHolder";
import { AccountHolderCapability } from "./accountHolderCapability";
import { AccountHolderInfo } from "./accountHolderInfo";
import { AccountHolderUpdateRequest } from "./accountHolderUpdateRequest";
import { AccountSupportingEntityCapability } from "./accountSupportingEntityCapability";
import { ActiveNetworkTokensRestriction } from "./activeNetworkTokensRestriction";
import { AdditionalBankIdentification } from "./additionalBankIdentification";
import { AdditionalBankIdentificationRequirement } from "./additionalBankIdentificationRequirement";
import { Address } from "./address";
import { AddressRequirement } from "./addressRequirement";
import { Amount } from "./amount";
import { AmountMinMaxRequirement } from "./amountMinMaxRequirement";
import { AmountNonZeroDecimalsRequirement } from "./amountNonZeroDecimalsRequirement";
import { ApproveAssociationRequest } from "./approveAssociationRequest";
import { ApproveAssociationResponse } from "./approveAssociationResponse";
import { ApproveTransferLimitRequest } from "./approveTransferLimitRequest";
import { Association } from "./association";
import { AssociationDelegatedAuthenticationData } from "./associationDelegatedAuthenticationData";
import { AssociationFinaliseRequest } from "./associationFinaliseRequest";
import { AssociationFinaliseResponse } from "./associationFinaliseResponse";
import { AssociationInitiateRequest } from "./associationInitiateRequest";
import { AssociationInitiateResponse } from "./associationInitiateResponse";
import { AssociationListing } from "./associationListing";
import { AssociationStatus } from "./associationStatus";
import { Authentication } from "./authentication";
import { AuthorisedCardUsers } from "./authorisedCardUsers";
import { BRLocalAccountIdentification } from "./bRLocalAccountIdentification";
import { Balance } from "./balance";
import { BalanceAccount } from "./balanceAccount";
import { BalanceAccountBase } from "./balanceAccountBase";
import { BalanceAccountInfo } from "./balanceAccountInfo";
import { BalanceAccountUpdateRequest } from "./balanceAccountUpdateRequest";
import { BalancePlatform } from "./balancePlatform";
import { BalanceSweepConfigurationsResponse } from "./balanceSweepConfigurationsResponse";
import { BalanceWebhookSetting } from "./balanceWebhookSetting";
import { BalanceWebhookSettingInfo } from "./balanceWebhookSettingInfo";
import { BalanceWebhookSettingInfoUpdate } from "./balanceWebhookSettingInfoUpdate";
import { BankAccount } from "./bankAccount";
import { BankAccountAccountIdentificationClass } from "./bankAccountAccountIdentification";
import { BankAccountDetails } from "./bankAccountDetails";
import { BankAccountIdentificationTypeRequirement } from "./bankAccountIdentificationTypeRequirement";
import { BankAccountIdentificationValidationRequest } from "./bankAccountIdentificationValidationRequest";
import { BankAccountIdentificationValidationRequestAccountIdentificationClass } from "./bankAccountIdentificationValidationRequestAccountIdentification";
import { BankAccountModel } from "./bankAccountModel";
import { BankIdentification } from "./bankIdentification";
import { BeginScaDeviceRegistrationRequest } from "./beginScaDeviceRegistrationRequest";
import { BeginScaDeviceRegistrationResponse } from "./beginScaDeviceRegistrationResponse";
import { BrandVariantsRestriction } from "./brandVariantsRestriction";
import { BulkAddress } from "./bulkAddress";
import { CALocalAccountIdentification } from "./cALocalAccountIdentification";
import { CZLocalAccountIdentification } from "./cZLocalAccountIdentification";
import { CapabilityProblem } from "./capabilityProblem";
import { CapabilityProblemEntity } from "./capabilityProblemEntity";
import { CapabilityProblemEntityRecursive } from "./capabilityProblemEntityRecursive";
import { CapabilitySettings } from "./capabilitySettings";
import { CapitalBalance } from "./capitalBalance";
import { CapitalGrantAccount } from "./capitalGrantAccount";
import { Card } from "./card";
import { CardConfiguration } from "./cardConfiguration";
import { CardInfo } from "./cardInfo";
import { CardOrder } from "./cardOrder";
import { CardOrderItem } from "./cardOrderItem";
import { CardOrderItemDeliveryStatus } from "./cardOrderItemDeliveryStatus";
import { Condition } from "./condition";
import { ContactDetails } from "./contactDetails";
import { Counterparty } from "./counterparty";
import { CounterpartyBankRestriction } from "./counterpartyBankRestriction";
import { CounterpartyTypesRestriction } from "./counterpartyTypesRestriction";
import { CountriesRestriction } from "./countriesRestriction";
import { CreateScaInformation } from "./createScaInformation";
import { CreateSweepConfigurationV2 } from "./createSweepConfigurationV2";
import { CreateTransferLimitRequest } from "./createTransferLimitRequest";
import { DKLocalAccountIdentification } from "./dKLocalAccountIdentification";
import { DayOfWeekRestriction } from "./dayOfWeekRestriction";
import { DefaultErrorResponseEntity } from "./defaultErrorResponseEntity";
import { DelegatedAuthenticationData } from "./delegatedAuthenticationData";
import { DeliveryAddress } from "./deliveryAddress";
import { DeliveryContact } from "./deliveryContact";
import { Device } from "./device";
import { DeviceInfo } from "./deviceInfo";
import { DifferentCurrenciesRestriction } from "./differentCurrenciesRestriction";
import { Duration } from "./duration";
import { EntryModesRestriction } from "./entryModesRestriction";
import { Expiry } from "./expiry";
import { Fee } from "./fee";
import { FinishScaDeviceRegistrationRequest } from "./finishScaDeviceRegistrationRequest";
import { FinishScaDeviceRegistrationResponse } from "./finishScaDeviceRegistrationResponse";
import { GetNetworkTokenResponse } from "./getNetworkTokenResponse";
import { GetTaxFormResponse } from "./getTaxFormResponse";
import { GrantLimit } from "./grantLimit";
import { GrantOffer } from "./grantOffer";
import { GrantOffers } from "./grantOffers";
import { HKLocalAccountIdentification } from "./hKLocalAccountIdentification";
import { HULocalAccountIdentification } from "./hULocalAccountIdentification";
import { Href } from "./href";
import { IbanAccountIdentification } from "./ibanAccountIdentification";
import { IbanAccountIdentificationRequirement } from "./ibanAccountIdentificationRequirement";
import { InternationalTransactionRestriction } from "./internationalTransactionRestriction";
import { InvalidField } from "./invalidField";
import { LimitStatus } from "./limitStatus";
import { Link } from "./link";
import { ListAssociationsResponse } from "./listAssociationsResponse";
import { ListNetworkTokensResponse } from "./listNetworkTokensResponse";
import { MatchingTransactionsRestriction } from "./matchingTransactionsRestriction";
import { MatchingValuesRestriction } from "./matchingValuesRestriction";
import { MccsRestriction } from "./mccsRestriction";
import { MerchantAcquirerPair } from "./merchantAcquirerPair";
import { MerchantNamesRestriction } from "./merchantNamesRestriction";
import { MerchantsRestriction } from "./merchantsRestriction";
import { NOLocalAccountIdentification } from "./nOLocalAccountIdentification";
import { NZLocalAccountIdentification } from "./nZLocalAccountIdentification";
import { Name } from "./name";
import { NetworkToken } from "./networkToken";
import { NetworkTokenActivationDataRequest } from "./networkTokenActivationDataRequest";
import { NetworkTokenActivationDataResponse } from "./networkTokenActivationDataResponse";
import { NetworkTokenRequestor } from "./networkTokenRequestor";
import { NumberAndBicAccountIdentification } from "./numberAndBicAccountIdentification";
import { PLLocalAccountIdentification } from "./pLLocalAccountIdentification";
import { PaginatedAccountHoldersResponse } from "./paginatedAccountHoldersResponse";
import { PaginatedBalanceAccountsResponse } from "./paginatedBalanceAccountsResponse";
import { PaginatedGetCardOrderItemResponse } from "./paginatedGetCardOrderItemResponse";
import { PaginatedGetCardOrderResponse } from "./paginatedGetCardOrderResponse";
import { PaginatedPaymentInstrumentsResponse } from "./paginatedPaymentInstrumentsResponse";
import { PaymentInstrument } from "./paymentInstrument";
import { PaymentInstrumentAdditionalBankAccountIdentificationsInnerClass } from "./paymentInstrumentAdditionalBankAccountIdentificationsInner";
import { PaymentInstrumentGroup } from "./paymentInstrumentGroup";
import { PaymentInstrumentGroupInfo } from "./paymentInstrumentGroupInfo";
import { PaymentInstrumentInfo } from "./paymentInstrumentInfo";
import { PaymentInstrumentRequirement } from "./paymentInstrumentRequirement";
import { PaymentInstrumentRevealInfo } from "./paymentInstrumentRevealInfo";
import { PaymentInstrumentRevealRequest } from "./paymentInstrumentRevealRequest";
import { PaymentInstrumentRevealResponse } from "./paymentInstrumentRevealResponse";
import { PaymentInstrumentUpdateRequest } from "./paymentInstrumentUpdateRequest";
import { Phone } from "./phone";
import { PhoneInfo } from "./phoneInfo";
import { PhoneNumber } from "./phoneNumber";
import { PinChangeRequest } from "./pinChangeRequest";
import { PinChangeResponse } from "./pinChangeResponse";
import { PlatformPaymentConfiguration } from "./platformPaymentConfiguration";
import { ProcessingTypesRestriction } from "./processingTypesRestriction";
import { PublicKeyResponse } from "./publicKeyResponse";
import { RegisterSCAFinalResponse } from "./registerSCAFinalResponse";
import { RegisterSCARequest } from "./registerSCARequest";
import { RegisterSCAResponse } from "./registerSCAResponse";
import { RemediatingAction } from "./remediatingAction";
import { RemoveAssociationRequest } from "./removeAssociationRequest";
import { Repayment } from "./repayment";
import { RepaymentTerm } from "./repaymentTerm";
import { RestServiceError } from "./restServiceError";
import { RevealPinRequest } from "./revealPinRequest";
import { RevealPinResponse } from "./revealPinResponse";
import { RiskScores } from "./riskScores";
import { RiskScoresRestriction } from "./riskScoresRestriction";
import { SELocalAccountIdentification } from "./sELocalAccountIdentification";
import { SGLocalAccountIdentification } from "./sGLocalAccountIdentification";
import { SameAmountRestriction } from "./sameAmountRestriction";
import { SameCounterpartyRestriction } from "./sameCounterpartyRestriction";
import { ScaDevice } from "./scaDevice";
import { ScaDeviceType } from "./scaDeviceType";
import { ScaEntity } from "./scaEntity";
import { ScaEntityType } from "./scaEntityType";
import { ScaExemption } from "./scaExemption";
import { ScaInformation } from "./scaInformation";
import { ScaStatus } from "./scaStatus";
import { Scope } from "./scope";
import { SearchRegisteredDevicesResponse } from "./searchRegisteredDevicesResponse";
import { SettingType } from "./settingType";
import { SourceAccountTypesRestriction } from "./sourceAccountTypesRestriction";
import { StringMatch } from "./stringMatch";
import { SubmitScaAssociationRequest } from "./submitScaAssociationRequest";
import { SubmitScaAssociationResponse } from "./submitScaAssociationResponse";
import { SweepConfigurationV2 } from "./sweepConfigurationV2";
import { SweepCounterparty } from "./sweepCounterparty";
import { SweepSchedule } from "./sweepSchedule";
import { Target } from "./target";
import { TargetUpdate } from "./targetUpdate";
import { ThresholdRepayment } from "./thresholdRepayment";
import { TimeOfDay } from "./timeOfDay";
import { TimeOfDayRestriction } from "./timeOfDayRestriction";
import { TokenRequestorsRestriction } from "./tokenRequestorsRestriction";
import { TotalAmountRestriction } from "./totalAmountRestriction";
import { TransactionRule } from "./transactionRule";
import { TransactionRuleEntityKey } from "./transactionRuleEntityKey";
import { TransactionRuleInfo } from "./transactionRuleInfo";
import { TransactionRuleInterval } from "./transactionRuleInterval";
import { TransactionRuleResponse } from "./transactionRuleResponse";
import { TransactionRuleRestrictions } from "./transactionRuleRestrictions";
import { TransactionRulesResponse } from "./transactionRulesResponse";
import { TransferLimit } from "./transferLimit";
import { TransferLimitListResponse } from "./transferLimitListResponse";
import { TransferRoute } from "./transferRoute";
import { TransferRouteRequest } from "./transferRouteRequest";
import { TransferRouteRequirementsInnerClass } from "./transferRouteRequirementsInner";
import { TransferRouteResponse } from "./transferRouteResponse";
import { TransferType } from "./transferType";
import { UKLocalAccountIdentification } from "./uKLocalAccountIdentification";
import { USInstantPayoutAddressRequirement } from "./uSInstantPayoutAddressRequirement";
import { USInternationalAchAddressRequirement } from "./uSInternationalAchAddressRequirement";
import { USInternationalAchPriorityRequirement } from "./uSInternationalAchPriorityRequirement";
import { USLocalAccountIdentification } from "./uSLocalAccountIdentification";
import { UpdateNetworkTokenRequest } from "./updateNetworkTokenRequest";
import { UpdatePaymentInstrument } from "./updatePaymentInstrument";
import { UpdateSweepConfigurationV2 } from "./updateSweepConfigurationV2";
import { VerificationDeadline } from "./verificationDeadline";
import { VerificationError } from "./verificationError";
import { VerificationErrorRecursive } from "./verificationErrorRecursive";
import { WalletProviderAccountScoreRestriction } from "./walletProviderAccountScoreRestriction";
import { WalletProviderDeviceScore } from "./walletProviderDeviceScore";
import { WalletProviderDeviceType } from "./walletProviderDeviceType";
import { WebhookSetting } from "./webhookSetting";
import { WebhookSettings } from "./webhookSettings";

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

let enumsMap: Set<string> = new Set<string>([
    "AULocalAccountIdentification.TypeEnum",
    "AccountHolder.StatusEnum",
    "AccountHolderCapability.AllowedLevelEnum",
    "AccountHolderCapability.RequestedLevelEnum",
    "AccountHolderCapability.VerificationStatusEnum",
    "AccountHolderUpdateRequest.StatusEnum",
    "AccountSupportingEntityCapability.AllowedLevelEnum",
    "AccountSupportingEntityCapability.RequestedLevelEnum",
    "AccountSupportingEntityCapability.VerificationStatusEnum",
    "AdditionalBankIdentification.TypeEnum",
    "AdditionalBankIdentificationRequirement.AdditionalBankIdentificationTypeEnum",
    "AdditionalBankIdentificationRequirement.TypeEnum",
    "AddressRequirement.RequiredAddressFieldsEnum",
    "AddressRequirement.TypeEnum",
    "AmountMinMaxRequirement.TypeEnum",
    "AmountNonZeroDecimalsRequirement.TypeEnum",
    "AssociationFinaliseRequest.TypeEnum",
    "AssociationFinaliseResponse.TypeEnum",
    "AssociationInitiateRequest.TypeEnum",
    AssociationStatus.PendingApproval,
    AssociationStatus.Active,
    "BRLocalAccountIdentification.TypeEnum",
    "BalanceAccount.StatusEnum",
    "BalanceAccountBase.StatusEnum",
    "BalanceAccountUpdateRequest.StatusEnum",
    "BalanceWebhookSettingInfo.StatusEnum",
    "BalanceWebhookSettingInfo.TypeEnum",
    "BalanceWebhookSettingInfoUpdate.StatusEnum",
    "BalanceWebhookSettingInfoUpdate.TypeEnum",
    "BankAccountAccountIdentification.TypeEnum",
    "BankAccountAccountIdentification.AccountTypeEnum",
    "BankAccountIdentificationTypeRequirement.BankAccountIdentificationTypesEnum",
    "BankAccountIdentificationTypeRequirement.TypeEnum",
    "BankAccountIdentificationValidationRequestAccountIdentification.TypeEnum",
    "BankAccountIdentificationValidationRequestAccountIdentification.AccountTypeEnum",
    "BankAccountModel.FormFactorEnum",
    "BankIdentification.IdentificationTypeEnum",
    "CALocalAccountIdentification.AccountTypeEnum",
    "CALocalAccountIdentification.TypeEnum",
    "CZLocalAccountIdentification.TypeEnum",
    "CapabilityProblemEntity.TypeEnum",
    "CapabilityProblemEntityRecursive.TypeEnum",
    "CapabilitySettings.FundingSourceEnum",
    "CapabilitySettings.IntervalEnum",
    "Card.FormFactorEnum",
    "CardInfo.FormFactorEnum",
    "CardOrder.StatusEnum",
    "CardOrderItemDeliveryStatus.StatusEnum",
    "Condition.BalanceTypeEnum",
    "Condition.ConditionTypeEnum",
    "CounterpartyTypesRestriction.ValueEnum",
    "CreateSweepConfigurationV2.CategoryEnum",
    "CreateSweepConfigurationV2.PrioritiesEnum",
    "CreateSweepConfigurationV2.ReasonEnum",
    "CreateSweepConfigurationV2.StatusEnum",
    "CreateSweepConfigurationV2.TypeEnum",
    "DKLocalAccountIdentification.TypeEnum",
    "DayOfWeekRestriction.ValueEnum",
    "Device.TypeEnum",
    "Duration.UnitEnum",
    "EntryModesRestriction.ValueEnum",
    "GetTaxFormResponse.ContentTypeEnum",
    "GrantOffer.ContractTypeEnum",
    "HKLocalAccountIdentification.TypeEnum",
    "HULocalAccountIdentification.TypeEnum",
    "IbanAccountIdentification.TypeEnum",
    "IbanAccountIdentificationRequirement.TypeEnum",
    LimitStatus.Active,
    LimitStatus.Inactive,
    LimitStatus.PendingSca,
    LimitStatus.Scheduled,
    "MatchingValuesRestriction.ValueEnum",
    "NOLocalAccountIdentification.TypeEnum",
    "NZLocalAccountIdentification.TypeEnum",
    "NetworkToken.StatusEnum",
    "NumberAndBicAccountIdentification.TypeEnum",
    "PLLocalAccountIdentification.TypeEnum",
    "PaymentInstrument.StatusEnum",
    "PaymentInstrument.StatusReasonEnum",
    "PaymentInstrument.TypeEnum",
    "PaymentInstrumentAdditionalBankAccountIdentificationsInner.TypeEnum",
    "PaymentInstrumentInfo.StatusEnum",
    "PaymentInstrumentInfo.StatusReasonEnum",
    "PaymentInstrumentInfo.TypeEnum",
    "PaymentInstrumentRequirement.PaymentInstrumentTypeEnum",
    "PaymentInstrumentRequirement.TypeEnum",
    "PaymentInstrumentUpdateRequest.StatusEnum",
    "PaymentInstrumentUpdateRequest.StatusReasonEnum",
    "Phone.TypeEnum",
    "PhoneNumber.PhoneTypeEnum",
    "PinChangeResponse.StatusEnum",
    "ProcessingTypesRestriction.ValueEnum",
    "SELocalAccountIdentification.TypeEnum",
    "SGLocalAccountIdentification.TypeEnum",
    ScaDeviceType.Browser,
    ScaDeviceType.Ios,
    ScaDeviceType.Android,
    ScaEntityType.AccountHolder,
    ScaEntityType.PaymentInstrument,
    ScaExemption.SetByPlatform,
    ScaExemption.InitialLimit,
    ScaExemption.LowerLimit,
    ScaExemption.NotRegulated,
    ScaExemption.AlreadyPerformed,
    ScaStatus.NotPerformed,
    ScaStatus.Pending,
    ScaStatus.Performed,
    Scope.PerDay,
    Scope.PerTransaction,
    SettingType.Balance,
    "SourceAccountTypesRestriction.ValueEnum",
    "StringMatch.OperationEnum",
    "SweepConfigurationV2.CategoryEnum",
    "SweepConfigurationV2.PrioritiesEnum",
    "SweepConfigurationV2.ReasonEnum",
    "SweepConfigurationV2.StatusEnum",
    "SweepConfigurationV2.TypeEnum",
    "SweepSchedule.TypeEnum",
    "Target.TypeEnum",
    "TargetUpdate.TypeEnum",
    "TransactionRule.OutcomeTypeEnum",
    "TransactionRule.RequestTypeEnum",
    "TransactionRule.StatusEnum",
    "TransactionRule.TypeEnum",
    "TransactionRuleInfo.OutcomeTypeEnum",
    "TransactionRuleInfo.RequestTypeEnum",
    "TransactionRuleInfo.StatusEnum",
    "TransactionRuleInfo.TypeEnum",
    "TransactionRuleInterval.DayOfWeekEnum",
    "TransactionRuleInterval.TypeEnum",
    "TransferRoute.CategoryEnum",
    "TransferRoute.PriorityEnum",
    "TransferRouteRequest.CategoryEnum",
    "TransferRouteRequest.PrioritiesEnum",
    "TransferRouteRequirementsInner.AdditionalBankIdentificationTypeEnum",
    "TransferRouteRequirementsInner.TypeEnum",
    "TransferRouteRequirementsInner.RequiredAddressFieldsEnum",
    "TransferRouteRequirementsInner.BankAccountIdentificationTypesEnum",
    "TransferRouteRequirementsInner.PaymentInstrumentTypeEnum",
    TransferType.Instant,
    TransferType.All,
    "UKLocalAccountIdentification.TypeEnum",
    "USInstantPayoutAddressRequirement.TypeEnum",
    "USInternationalAchAddressRequirement.TypeEnum",
    "USInternationalAchPriorityRequirement.TypeEnum",
    "USLocalAccountIdentification.AccountTypeEnum",
    "USLocalAccountIdentification.TypeEnum",
    "UpdateNetworkTokenRequest.StatusEnum",
    "UpdatePaymentInstrument.StatusEnum",
    "UpdatePaymentInstrument.StatusReasonEnum",
    "UpdatePaymentInstrument.TypeEnum",
    "UpdateSweepConfigurationV2.CategoryEnum",
    "UpdateSweepConfigurationV2.PrioritiesEnum",
    "UpdateSweepConfigurationV2.ReasonEnum",
    "UpdateSweepConfigurationV2.StatusEnum",
    "UpdateSweepConfigurationV2.TypeEnum",
    "VerificationDeadline.CapabilitiesEnum",
    "VerificationError.CapabilitiesEnum",
    "VerificationError.TypeEnum",
    "VerificationErrorRecursive.CapabilitiesEnum",
    "VerificationErrorRecursive.TypeEnum",
    "WalletProviderDeviceType.ValueEnum",
]);

let typeMap: {[index: string]: any} = {
    "AULocalAccountIdentification": AULocalAccountIdentification,
    "AccountHolder": AccountHolder,
    "AccountHolderCapability": AccountHolderCapability,
    "AccountHolderInfo": AccountHolderInfo,
    "AccountHolderUpdateRequest": AccountHolderUpdateRequest,
    "AccountSupportingEntityCapability": AccountSupportingEntityCapability,
    "ActiveNetworkTokensRestriction": ActiveNetworkTokensRestriction,
    "AdditionalBankIdentification": AdditionalBankIdentification,
    "AdditionalBankIdentificationRequirement": AdditionalBankIdentificationRequirement,
    "Address": Address,
    "AddressRequirement": AddressRequirement,
    "Amount": Amount,
    "AmountMinMaxRequirement": AmountMinMaxRequirement,
    "AmountNonZeroDecimalsRequirement": AmountNonZeroDecimalsRequirement,
    "ApproveAssociationRequest": ApproveAssociationRequest,
    "ApproveAssociationResponse": ApproveAssociationResponse,
    "ApproveTransferLimitRequest": ApproveTransferLimitRequest,
    "Association": Association,
    "AssociationDelegatedAuthenticationData": AssociationDelegatedAuthenticationData,
    "AssociationFinaliseRequest": AssociationFinaliseRequest,
    "AssociationFinaliseResponse": AssociationFinaliseResponse,
    "AssociationInitiateRequest": AssociationInitiateRequest,
    "AssociationInitiateResponse": AssociationInitiateResponse,
    "AssociationListing": AssociationListing,
    "Authentication": Authentication,
    "AuthorisedCardUsers": AuthorisedCardUsers,
    "BRLocalAccountIdentification": BRLocalAccountIdentification,
    "Balance": Balance,
    "BalanceAccount": BalanceAccount,
    "BalanceAccountBase": BalanceAccountBase,
    "BalanceAccountInfo": BalanceAccountInfo,
    "BalanceAccountUpdateRequest": BalanceAccountUpdateRequest,
    "BalancePlatform": BalancePlatform,
    "BalanceSweepConfigurationsResponse": BalanceSweepConfigurationsResponse,
    "BalanceWebhookSetting": BalanceWebhookSetting,
    "BalanceWebhookSettingInfo": BalanceWebhookSettingInfo,
    "BalanceWebhookSettingInfoUpdate": BalanceWebhookSettingInfoUpdate,
    "BankAccount": BankAccount,
    "BankAccountAccountIdentification": BankAccountAccountIdentificationClass,
    "BankAccountDetails": BankAccountDetails,
    "BankAccountIdentificationTypeRequirement": BankAccountIdentificationTypeRequirement,
    "BankAccountIdentificationValidationRequest": BankAccountIdentificationValidationRequest,
    "BankAccountIdentificationValidationRequestAccountIdentification": BankAccountIdentificationValidationRequestAccountIdentificationClass,
    "BankAccountModel": BankAccountModel,
    "BankIdentification": BankIdentification,
    "BeginScaDeviceRegistrationRequest": BeginScaDeviceRegistrationRequest,
    "BeginScaDeviceRegistrationResponse": BeginScaDeviceRegistrationResponse,
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
    "Condition": Condition,
    "ContactDetails": ContactDetails,
    "Counterparty": Counterparty,
    "CounterpartyBankRestriction": CounterpartyBankRestriction,
    "CounterpartyTypesRestriction": CounterpartyTypesRestriction,
    "CountriesRestriction": CountriesRestriction,
    "CreateScaInformation": CreateScaInformation,
    "CreateSweepConfigurationV2": CreateSweepConfigurationV2,
    "CreateTransferLimitRequest": CreateTransferLimitRequest,
    "DKLocalAccountIdentification": DKLocalAccountIdentification,
    "DayOfWeekRestriction": DayOfWeekRestriction,
    "DefaultErrorResponseEntity": DefaultErrorResponseEntity,
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
    "FinishScaDeviceRegistrationRequest": FinishScaDeviceRegistrationRequest,
    "FinishScaDeviceRegistrationResponse": FinishScaDeviceRegistrationResponse,
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
    "ListAssociationsResponse": ListAssociationsResponse,
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
    "NetworkTokenActivationDataRequest": NetworkTokenActivationDataRequest,
    "NetworkTokenActivationDataResponse": NetworkTokenActivationDataResponse,
    "NetworkTokenRequestor": NetworkTokenRequestor,
    "NumberAndBicAccountIdentification": NumberAndBicAccountIdentification,
    "PLLocalAccountIdentification": PLLocalAccountIdentification,
    "PaginatedAccountHoldersResponse": PaginatedAccountHoldersResponse,
    "PaginatedBalanceAccountsResponse": PaginatedBalanceAccountsResponse,
    "PaginatedGetCardOrderItemResponse": PaginatedGetCardOrderItemResponse,
    "PaginatedGetCardOrderResponse": PaginatedGetCardOrderResponse,
    "PaginatedPaymentInstrumentsResponse": PaginatedPaymentInstrumentsResponse,
    "PaymentInstrument": PaymentInstrument,
    "PaymentInstrumentAdditionalBankAccountIdentificationsInner": PaymentInstrumentAdditionalBankAccountIdentificationsInnerClass,
    "PaymentInstrumentGroup": PaymentInstrumentGroup,
    "PaymentInstrumentGroupInfo": PaymentInstrumentGroupInfo,
    "PaymentInstrumentInfo": PaymentInstrumentInfo,
    "PaymentInstrumentRequirement": PaymentInstrumentRequirement,
    "PaymentInstrumentRevealInfo": PaymentInstrumentRevealInfo,
    "PaymentInstrumentRevealRequest": PaymentInstrumentRevealRequest,
    "PaymentInstrumentRevealResponse": PaymentInstrumentRevealResponse,
    "PaymentInstrumentUpdateRequest": PaymentInstrumentUpdateRequest,
    "Phone": Phone,
    "PhoneInfo": PhoneInfo,
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
    "RemoveAssociationRequest": RemoveAssociationRequest,
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
    "ScaDevice": ScaDevice,
    "ScaEntity": ScaEntity,
    "ScaInformation": ScaInformation,
    "SearchRegisteredDevicesResponse": SearchRegisteredDevicesResponse,
    "SourceAccountTypesRestriction": SourceAccountTypesRestriction,
    "StringMatch": StringMatch,
    "SubmitScaAssociationRequest": SubmitScaAssociationRequest,
    "SubmitScaAssociationResponse": SubmitScaAssociationResponse,
    "SweepConfigurationV2": SweepConfigurationV2,
    "SweepCounterparty": SweepCounterparty,
    "SweepSchedule": SweepSchedule,
    "Target": Target,
    "TargetUpdate": TargetUpdate,
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
    "TransferLimit": TransferLimit,
    "TransferLimitListResponse": TransferLimitListResponse,
    "TransferRoute": TransferRoute,
    "TransferRouteRequest": TransferRouteRequest,
    "TransferRouteRequirementsInner": TransferRouteRequirementsInnerClass,
    "TransferRouteResponse": TransferRouteResponse,
    "UKLocalAccountIdentification": UKLocalAccountIdentification,
    "USInstantPayoutAddressRequirement": USInstantPayoutAddressRequirement,
    "USInternationalAchAddressRequirement": USInternationalAchAddressRequirement,
    "USInternationalAchPriorityRequirement": USInternationalAchPriorityRequirement,
    "USLocalAccountIdentification": USLocalAccountIdentification,
    "UpdateNetworkTokenRequest": UpdateNetworkTokenRequest,
    "UpdatePaymentInstrument": UpdatePaymentInstrument,
    "UpdateSweepConfigurationV2": UpdateSweepConfigurationV2,
    "VerificationDeadline": VerificationDeadline,
    "VerificationError": VerificationError,
    "VerificationErrorRecursive": VerificationErrorRecursive,
    "WalletProviderAccountScoreRestriction": WalletProviderAccountScoreRestriction,
    "WalletProviderDeviceScore": WalletProviderDeviceScore,
    "WalletProviderDeviceType": WalletProviderDeviceType,
    "WebhookSetting": WebhookSetting,
    "WebhookSettings": WebhookSettings,
}

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type = '', subtype = ''] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

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
            if (enumsMap.has(expectedType)) {
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
                    let mapping = typeMap[expectedType].mapping;
                    if (mapping != undefined && mapping[discriminatorType]) {
                        return mapping[discriminatorType]; // use the type given in the discriminator
                    } else if(typeMap[discriminatorType]) {
                        return discriminatorType;
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    /**
     * Serializes a value into a plain JSON-compatible object based on its type.
     *
     * Supports primitives, arrays, maps, dates, enums, and classes defined in `typeMap`.
     * Falls back to raw data if type is unknown or lacks `getAttributeTypeMap()`.
     *
     * @param data - The value to serialize.
     * @param type - The expected type name as a string.
     * @param format - Format hint (e.g. "date" or "date-time"). Default is an empty string.
     * @returns A JSON-compatible representation of `data`.
     */
    public static serialize(data: any, type: string, format: string = ""): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            const clazz = typeMap[type];

            // Safe check for getAttributeTypeMap
            if (typeof clazz.getAttributeTypeMap !== "function") {
                return { ...data }; // fallback: shallow copy
            }

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    /**
     * Deserializes a plain JSON-compatible object into a typed instance.
     *
     * Handles primitives, arrays, maps, dates, enums, and known classes from `typeMap`.
     * Uses discriminators when available to resolve polymorphic types.
     * Falls back to raw data if the type is unknown or lacks `getAttributeTypeMap()`.
     *
     * @param data - The raw input to deserialize.
     * @param type - The expected type name as a string.
     * @param format - Format hint (e.g. "date" or "date-time"). Default is an empty string.
     * @returns A deserialized instance or value of `data`.
     */
    public static deserialize(data: any, type: string, format: string = ""): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.endsWith(nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.endsWith(optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType, format);
        } else if (type.startsWith(arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type.startsWith(mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                    format,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();

            // Safe check for getAttributeTypeMap
            if (typeof typeMap[type].getAttributeTypeMap !== "function") {
                Object.assign(instance, data); // fallback: shallow copy
                return instance;
            }

            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return (mediaType.split(";")[0] ?? '').trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(ObjectSerializer.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
