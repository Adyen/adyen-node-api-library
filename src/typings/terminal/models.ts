/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

export * from './abortRequest';
export * from './accountType';
export * from './adminRequest';
export * from './adminResponse';
export * from './algorithmIdentifier';
export * from './algorithmType';
export * from './alignmentType';
export * from './allowedProduct';
export * from './amount';
export * from './amountsReq';
export * from './amountsResp';
export * from './applicationInfo';
export * from './areaSize';
export * from './authenticatedData';
export * from './authenticationMethodType';
export * from './balanceInquiryRequest';
export * from './balanceInquiryResponse';
export * from './barcodeType';
export * from './batchRequest';
export * from './batchResponse';
export * from './capturedSignature';
export * from './cardAcquisitionRequest';
export * from './cardAcquisitionResponse';
export * from './cardAcquisitionTransaction';
export * from './cardData';
export * from './cardReaderAPDURequest';
export * from './cardReaderAPDUResponse';
export * from './cardReaderInitRequest';
export * from './cardReaderInitResponse';
export * from './cardReaderPowerOffRequest';
export * from './cardReaderPowerOffResponse';
export * from './cardholderPIN';
export * from './cashHandlingDevice';
export * from './characterHeightType';
export * from './characterStyleType';
export * from './characterWidthType';
export * from './checkData';
export * from './checkTypeCodeType';
export * from './coinsOrBills';
export * from './colorType';
export * from './commonField';
export * from './contentInformation';
export * from './contentType';
export * from './currencyConversion';
export * from './customerOrder';
export * from './customerOrderReqType';
export * from './deviceType';
export * from './diagnosisRequest';
export * from './diagnosisResponse';
export * from './digestedData';
export * from './displayOutput';
export * from './displayRequest';
export * from './displayResponse';
export * from './documentQualifierType';
export * from './enableServiceRequest';
export * from './enableServiceResponse';
export * from './encapsulatedContent';
export * from './encryptedContent';
export * from './entryModeType';
export * from './envelopedData';
export * from './errorConditionType';
export * from './eventNotification';
export * from './eventToNotifyType';
export * from './externalPlatform';
export * from './forceEntryModeType';
export * from './genericProfileType';
export * from './geographicCoordinates';
export * from './geolocation';
export * from './getTotalsRequest';
export * from './getTotalsResponse';
export * from './globalStatusType';
export * from './hostStatus';
export * from './iCCResetData';
export * from './identificationSupportType';
export * from './identificationType';
export * from './infoQualifyType';
export * from './input';
export * from './inputCommandType';
export * from './inputData';
export * from './inputRequest';
export * from './inputResponse';
export * from './inputResult';
export * from './inputUpdate';
export * from './instalment';
export * from './instalmentType';
export * from './issuer';
export * from './issuerAndSerialNumber';
export * from './loginRequest';
export * from './loginResponse';
export * from './logoutRequest';
export * from './logoutResponse';
export * from './loyaltyAccount';
export * from './loyaltyAccountId';
export * from './loyaltyAccountReq';
export * from './loyaltyAccountStatus';
export * from './loyaltyAcquirerData';
export * from './loyaltyAmount';
export * from './loyaltyData';
export * from './loyaltyHandlingType';
export * from './loyaltyRequest';
export * from './loyaltyResponse';
export * from './loyaltyResult';
export * from './loyaltyTotals';
export * from './loyaltyTransaction';
export * from './loyaltyTransactionType';
export * from './loyaltyUnitType';
export * from './menuEntry';
export * from './menuEntryTagType';
export * from './merchantDevice';
export * from './messageCategoryType';
export * from './messageClassType';
export * from './messageHeader';
export * from './messageReference';
export * from './messageType';
export * from './mobileData';
export * from './namedKeyEncryptedData';
export * from './nexoDerivedKey';
export * from './originalPOITransaction';
export * from './outputBarcode';
export * from './outputContent';
export * from './outputFormatType';
export * from './outputResult';
export * from './outputText';
export * from './pINFormatType';
export * from './pINRequest';
export * from './pINRequestType';
export * from './pINResponse';
export * from './pOICapabilitiesType';
export * from './pOIData';
export * from './pOIProfile';
export * from './pOISoftware';
export * from './pOIStatus';
export * from './pOISystemData';
export * from './pOITerminalData';
export * from './parameter';
export * from './paymentAccountReq';
export * from './paymentAccountStatus';
export * from './paymentAcquirerData';
export * from './paymentData';
export * from './paymentInstrumentData';
export * from './paymentInstrumentType';
export * from './paymentReceipt';
export * from './paymentRequest';
export * from './paymentResponse';
export * from './paymentResult';
export * from './paymentToken';
export * from './paymentTotals';
export * from './paymentTransaction';
export * from './paymentType';
export * from './performedTransaction';
export * from './periodUnitType';
export * from './predefinedContent';
export * from './printOutput';
export * from './printRequest';
export * from './printResponse';
export * from './printerStatusType';
export * from './rebates';
export * from './reconciliationRequest';
export * from './reconciliationResponse';
export * from './reconciliationType';
export * from './relativeDistinguishedName';
export * from './repeatedMessageResponse';
export * from './repeatedResponseMessageBody';
export * from './response';
export * from './responseModeType';
export * from './resultType';
export * from './reversalReasonType';
export * from './reversalRequest';
export * from './reversalResponse';
export * from './saleCapabilitiesType';
export * from './saleData';
export * from './saleItem';
export * from './saleItemRebate';
export * from './saleProfile';
export * from './saleSoftware';
export * from './saleTerminalData';
export * from './saleToAcquirerData';
export * from './saleToIssuerData';
export * from './saleToPOIRequest';
export * from './saleToPOIResponse';
export * from './saleToPOISecuredMessage';
export * from './securityKey';
export * from './securityTrailer';
export * from './sensitiveCardData';
export * from './sensitiveMobileData';
export * from './serviceProfilesType';
export * from './servicesEnabledType';
export * from './shopperInteractionDevice';
export * from './signaturePoint';
export * from './signedData';
export * from './signer';
export * from './signerIdentifier';
export * from './soundActionType';
export * from './soundContent';
export * from './soundFormatType';
export * from './soundRequest';
export * from './soundResponse';
export * from './sponsoredMerchant';
export * from './storedValueAccountId';
export * from './storedValueAccountStatus';
export * from './storedValueAccountType';
export * from './storedValueData';
export * from './storedValueRequest';
export * from './storedValueResponse';
export * from './storedValueResult';
export * from './storedValueTransactionType';
export * from './terminalApiRequest';
export * from './terminalApiResponse';
export * from './terminalApiSecuredRequest';
export * from './terminalApiSecuredResponse';
export * from './terminalEnvironmentType';
export * from './tokenRequestedType';
export * from './totalDetailsType';
export * from './totalFilter';
export * from './trackData';
export * from './trackFormatType';
export * from './transactionActionType';
export * from './transactionConditions';
export * from './transactionIdentification';
export * from './transactionStatusRequest';
export * from './transactionStatusResponse';
export * from './transactionToPerform';
export * from './transactionTotals';
export * from './transactionType';
export * from './transmitRequest';
export * from './transmitResponse';
export * from './uTMCoordinates';
export * from './unitOfMeasureType';
export * from './versionType';

import { AbortRequest } from './abortRequest';
import { AccountType } from './accountType';
import { AdminRequest } from './adminRequest';
import { AdminResponse } from './adminResponse';
import { AlgorithmIdentifier } from './algorithmIdentifier';
import { AlgorithmType } from './algorithmType';
import { AlignmentType } from './alignmentType';
import { AllowedProduct } from './allowedProduct';
import { Amount } from './amount';
import { AmountsReq } from './amountsReq';
import { AmountsResp } from './amountsResp';
import { ApplicationInfo } from './applicationInfo';
import { AreaSize } from './areaSize';
import { AuthenticatedData } from './authenticatedData';
import { AuthenticationMethodType } from './authenticationMethodType';
import { BalanceInquiryRequest } from './balanceInquiryRequest';
import { BalanceInquiryResponse } from './balanceInquiryResponse';
import { BarcodeType } from './barcodeType';
import { BatchRequest } from './batchRequest';
import { BatchResponse } from './batchResponse';
import { CapturedSignature } from './capturedSignature';
import { CardAcquisitionRequest } from './cardAcquisitionRequest';
import { CardAcquisitionResponse } from './cardAcquisitionResponse';
import { CardAcquisitionTransaction } from './cardAcquisitionTransaction';
import { CardData } from './cardData';
import { CardReaderAPDURequest } from './cardReaderAPDURequest';
import { CardReaderAPDUResponse } from './cardReaderAPDUResponse';
import { CardReaderInitRequest } from './cardReaderInitRequest';
import { CardReaderInitResponse } from './cardReaderInitResponse';
import { CardReaderPowerOffRequest } from './cardReaderPowerOffRequest';
import { CardReaderPowerOffResponse } from './cardReaderPowerOffResponse';
import { CardholderPIN } from './cardholderPIN';
import { CashHandlingDevice } from './cashHandlingDevice';
import { CharacterHeightType } from './characterHeightType';
import { CharacterStyleType } from './characterStyleType';
import { CharacterWidthType } from './characterWidthType';
import { CheckData } from './checkData';
import { CheckTypeCodeType } from './checkTypeCodeType';
import { CoinsOrBills } from './coinsOrBills';
import { ColorType } from './colorType';
import { CommonField } from './commonField';
import { ContentInformation } from './contentInformation';
import { ContentType } from './contentType';
import { CurrencyConversion } from './currencyConversion';
import { CustomerOrder } from './customerOrder';
import { CustomerOrderReqType } from './customerOrderReqType';
import { DeviceType } from './deviceType';
import { DiagnosisRequest } from './diagnosisRequest';
import { DiagnosisResponse } from './diagnosisResponse';
import { DigestedData } from './digestedData';
import { DisplayOutput } from './displayOutput';
import { DisplayRequest } from './displayRequest';
import { DisplayResponse } from './displayResponse';
import { DocumentQualifierType } from './documentQualifierType';
import { EnableServiceRequest } from './enableServiceRequest';
import { EnableServiceResponse } from './enableServiceResponse';
import { EncapsulatedContent } from './encapsulatedContent';
import { EncryptedContent } from './encryptedContent';
import { EntryModeType } from './entryModeType';
import { EnvelopedData } from './envelopedData';
import { ErrorConditionType } from './errorConditionType';
import { EventNotification } from './eventNotification';
import { EventToNotifyType } from './eventToNotifyType';
import { ExternalPlatform } from './externalPlatform';
import { ForceEntryModeType } from './forceEntryModeType';
import { GenericProfileType } from './genericProfileType';
import { GeographicCoordinates } from './geographicCoordinates';
import { Geolocation } from './geolocation';
import { GetTotalsRequest } from './getTotalsRequest';
import { GetTotalsResponse } from './getTotalsResponse';
import { GlobalStatusType } from './globalStatusType';
import { HostStatus } from './hostStatus';
import { ICCResetData } from './iCCResetData';
import { IdentificationSupportType } from './identificationSupportType';
import { IdentificationType } from './identificationType';
import { InfoQualifyType } from './infoQualifyType';
import { Input } from './input';
import { InputCommandType } from './inputCommandType';
import { InputData } from './inputData';
import { InputRequest } from './inputRequest';
import { InputResponse } from './inputResponse';
import { InputResult } from './inputResult';
import { InputUpdate } from './inputUpdate';
import { Instalment } from './instalment';
import { InstalmentType } from './instalmentType';
import { Issuer } from './issuer';
import { IssuerAndSerialNumber } from './issuerAndSerialNumber';
import { LoginRequest } from './loginRequest';
import { LoginResponse } from './loginResponse';
import { LogoutRequest } from './logoutRequest';
import { LogoutResponse } from './logoutResponse';
import { LoyaltyAccount } from './loyaltyAccount';
import { LoyaltyAccountId } from './loyaltyAccountId';
import { LoyaltyAccountReq } from './loyaltyAccountReq';
import { LoyaltyAccountStatus } from './loyaltyAccountStatus';
import { LoyaltyAcquirerData } from './loyaltyAcquirerData';
import { LoyaltyAmount } from './loyaltyAmount';
import { LoyaltyData } from './loyaltyData';
import { LoyaltyHandlingType } from './loyaltyHandlingType';
import { LoyaltyRequest } from './loyaltyRequest';
import { LoyaltyResponse } from './loyaltyResponse';
import { LoyaltyResult } from './loyaltyResult';
import { LoyaltyTotals } from './loyaltyTotals';
import { LoyaltyTransaction } from './loyaltyTransaction';
import { LoyaltyTransactionType } from './loyaltyTransactionType';
import { LoyaltyUnitType } from './loyaltyUnitType';
import { MenuEntry } from './menuEntry';
import { MenuEntryTagType } from './menuEntryTagType';
import { MerchantDevice } from './merchantDevice';
import { MessageCategoryType } from './messageCategoryType';
import { MessageClassType } from './messageClassType';
import { MessageHeader } from './messageHeader';
import { MessageReference } from './messageReference';
import { MessageType } from './messageType';
import { MobileData } from './mobileData';
import { NamedKeyEncryptedData } from './namedKeyEncryptedData';
import { NexoDerivedKey } from './nexoDerivedKey';
import { OriginalPOITransaction } from './originalPOITransaction';
import { OutputBarcode } from './outputBarcode';
import { OutputContent } from './outputContent';
import { OutputFormatType } from './outputFormatType';
import { OutputResult } from './outputResult';
import { OutputText } from './outputText';
import { PINFormatType } from './pINFormatType';
import { PINRequest } from './pINRequest';
import { PINRequestType } from './pINRequestType';
import { PINResponse } from './pINResponse';
import { POICapabilitiesType } from './pOICapabilitiesType';
import { POIData } from './pOIData';
import { POIProfile } from './pOIProfile';
import { POISoftware } from './pOISoftware';
import { POIStatus } from './pOIStatus';
import { POISystemData } from './pOISystemData';
import { POITerminalData } from './pOITerminalData';
import { Parameter } from './parameter';
import { PaymentAccountReq } from './paymentAccountReq';
import { PaymentAccountStatus } from './paymentAccountStatus';
import { PaymentAcquirerData } from './paymentAcquirerData';
import { PaymentData } from './paymentData';
import { PaymentInstrumentData } from './paymentInstrumentData';
import { PaymentInstrumentType } from './paymentInstrumentType';
import { PaymentReceipt } from './paymentReceipt';
import { PaymentRequest } from './paymentRequest';
import { PaymentResponse } from './paymentResponse';
import { PaymentResult } from './paymentResult';
import { PaymentToken } from './paymentToken';
import { PaymentTotals } from './paymentTotals';
import { PaymentTransaction } from './paymentTransaction';
import { PaymentType } from './paymentType';
import { PerformedTransaction } from './performedTransaction';
import { PeriodUnitType } from './periodUnitType';
import { PredefinedContent } from './predefinedContent';
import { PrintOutput } from './printOutput';
import { PrintRequest } from './printRequest';
import { PrintResponse } from './printResponse';
import { PrinterStatusType } from './printerStatusType';
import { Rebates } from './rebates';
import { ReconciliationRequest } from './reconciliationRequest';
import { ReconciliationResponse } from './reconciliationResponse';
import { ReconciliationType } from './reconciliationType';
import { RelativeDistinguishedName } from './relativeDistinguishedName';
import { RepeatedMessageResponse } from './repeatedMessageResponse';
import { RepeatedResponseMessageBody } from './repeatedResponseMessageBody';
import { Response } from './response';
import { ResponseModeType } from './responseModeType';
import { ResultType } from './resultType';
import { ReversalReasonType } from './reversalReasonType';
import { ReversalRequest } from './reversalRequest';
import { ReversalResponse } from './reversalResponse';
import { SaleCapabilitiesType } from './saleCapabilitiesType';
import { SaleData } from './saleData';
import { SaleItem } from './saleItem';
import { SaleItemRebate } from './saleItemRebate';
import { SaleProfile } from './saleProfile';
import { SaleSoftware } from './saleSoftware';
import { SaleTerminalData } from './saleTerminalData';
import { SaleToAcquirerData } from './saleToAcquirerData';
import { SaleToIssuerData } from './saleToIssuerData';
import { SaleToPOIRequest } from './saleToPOIRequest';
import { SaleToPOIResponse } from './saleToPOIResponse';
import { SaleToPOISecuredMessage } from './saleToPOISecuredMessage';
import { SecurityKey } from './securityKey';
import { SecurityTrailer } from './securityTrailer';
import { SensitiveCardData } from './sensitiveCardData';
import { SensitiveMobileData } from './sensitiveMobileData';
import { ServiceProfilesType } from './serviceProfilesType';
import { ServicesEnabledType } from './servicesEnabledType';
import { ShopperInteractionDevice } from './shopperInteractionDevice';
import { SignaturePoint } from './signaturePoint';
import { SignedData } from './signedData';
import { Signer } from './signer';
import { SignerIdentifier } from './signerIdentifier';
import { SoundActionType } from './soundActionType';
import { SoundContent } from './soundContent';
import { SoundFormatType } from './soundFormatType';
import { SoundRequest } from './soundRequest';
import { SoundResponse } from './soundResponse';
import { SponsoredMerchant } from './sponsoredMerchant';
import { StoredValueAccountId } from './storedValueAccountId';
import { StoredValueAccountStatus } from './storedValueAccountStatus';
import { StoredValueAccountType } from './storedValueAccountType';
import { StoredValueData } from './storedValueData';
import { StoredValueRequest } from './storedValueRequest';
import { StoredValueResponse } from './storedValueResponse';
import { StoredValueResult } from './storedValueResult';
import { StoredValueTransactionType } from './storedValueTransactionType';
import { TerminalApiRequest } from './terminalApiRequest';
import { TerminalApiResponse } from './terminalApiResponse';
import { TerminalApiSecuredRequest } from './terminalApiSecuredRequest';
import { TerminalApiSecuredResponse } from './terminalApiSecuredResponse';
import { TerminalEnvironmentType } from './terminalEnvironmentType';
import { TokenRequestedType } from './tokenRequestedType';
import { TotalDetailsType } from './totalDetailsType';
import { TotalFilter } from './totalFilter';
import { TrackData } from './trackData';
import { TrackFormatType } from './trackFormatType';
import { TransactionActionType } from './transactionActionType';
import { TransactionConditions } from './transactionConditions';
import { TransactionIdentification } from './transactionIdentification';
import { TransactionStatusRequest } from './transactionStatusRequest';
import { TransactionStatusResponse } from './transactionStatusResponse';
import { TransactionToPerform } from './transactionToPerform';
import { TransactionTotals } from './transactionTotals';
import { TransactionType } from './transactionType';
import { TransmitRequest } from './transmitRequest';
import { TransmitResponse } from './transmitResponse';
import { UTMCoordinates } from './uTMCoordinates';
import { UnitOfMeasureType } from './unitOfMeasureType';
import { VersionType } from './versionType';

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
        "AccountType": AccountType,
        "AlgorithmType": AlgorithmType,
        "AlignmentType": AlignmentType,
        "AuthenticatedData.VersionEnum": AuthenticatedData.VersionEnum,
        "AuthenticationMethodType": AuthenticationMethodType,
        "BarcodeType": BarcodeType,
        "CardAcquisitionTransaction.ForceEntryModeEnum": CardAcquisitionTransaction.ForceEntryModeEnum,
        "CardAcquisitionTransaction.LoyaltyHandlingEnum": CardAcquisitionTransaction.LoyaltyHandlingEnum,
        "CardAcquisitionTransaction.PaymentTypeEnum": CardAcquisitionTransaction.PaymentTypeEnum,
        "CardData.EntryModeEnum": CardData.EntryModeEnum,
        "CardReaderInitRequest.ForceEntryModeEnum": CardReaderInitRequest.ForceEntryModeEnum,
        "CardReaderInitResponse.EntryModeEnum": CardReaderInitResponse.EntryModeEnum,
        "CharacterHeightType": CharacterHeightType,
        "CharacterStyleType": CharacterStyleType,
        "CharacterWidthType": CharacterWidthType,
        "CheckData.TypeCodeEnum": CheckData.TypeCodeEnum,
        "CheckTypeCodeType": CheckTypeCodeType,
        "ColorType": ColorType,
        "ContentType": ContentType,
        "CustomerOrderReqType": CustomerOrderReqType,
        "DeviceType": DeviceType,
        "DigestedData.VersionEnum": DigestedData.VersionEnum,
        "DocumentQualifierType": DocumentQualifierType,
        "EnableServiceRequest.ServicesEnabledEnum": EnableServiceRequest.ServicesEnabledEnum,
        "EntryModeType": EntryModeType,
        "EnvelopedData.VersionEnum": EnvelopedData.VersionEnum,
        "ErrorConditionType": ErrorConditionType,
        "EventToNotifyType": EventToNotifyType,
        "ForceEntryModeType": ForceEntryModeType,
        "GenericProfileType": GenericProfileType,
        "GetTotalsRequest.TotalDetailsEnum": GetTotalsRequest.TotalDetailsEnum,
        "GlobalStatusType": GlobalStatusType,
        "IdentificationSupportType": IdentificationSupportType,
        "IdentificationType": IdentificationType,
        "InfoQualifyType": InfoQualifyType,
        "InputCommandType": InputCommandType,
        "Instalment.InstalmentTypeEnum": Instalment.InstalmentTypeEnum,
        "Instalment.PeriodUnitEnum": Instalment.PeriodUnitEnum,
        "InstalmentType": InstalmentType,
        "LoginRequest.CustomerOrderReqEnum": LoginRequest.CustomerOrderReqEnum,
        "LoginRequest.TokenRequestedTypeEnum": LoginRequest.TokenRequestedTypeEnum,
        "LoyaltyAccountId.EntryModeEnum": LoyaltyAccountId.EntryModeEnum,
        "LoyaltyAccountId.IdentificationSupportEnum": LoyaltyAccountId.IdentificationSupportEnum,
        "LoyaltyAccountStatus.LoyaltyUnitEnum": LoyaltyAccountStatus.LoyaltyUnitEnum,
        "LoyaltyAmount.LoyaltyUnitEnum": LoyaltyAmount.LoyaltyUnitEnum,
        "LoyaltyHandlingType": LoyaltyHandlingType,
        "LoyaltyTransactionType": LoyaltyTransactionType,
        "LoyaltyUnitType": LoyaltyUnitType,
        "MenuEntry.MenuEntryTagEnum": MenuEntry.MenuEntryTagEnum,
        "MenuEntryTagType": MenuEntryTagType,
        "MessageCategoryType": MessageCategoryType,
        "MessageClassType": MessageClassType,
        "MessageReference.MessageCategoryEnum": MessageReference.MessageCategoryEnum,
        "MessageType": MessageType,
        "NamedKeyEncryptedData.VersionEnum": NamedKeyEncryptedData.VersionEnum,
        "OutputBarcode.BarcodeTypeEnum": OutputBarcode.BarcodeTypeEnum,
        "OutputFormatType": OutputFormatType,
        "OutputText.AlignmentEnum": OutputText.AlignmentEnum,
        "OutputText.CharacterHeightEnum": OutputText.CharacterHeightEnum,
        "OutputText.CharacterStyleEnum": OutputText.CharacterStyleEnum,
        "OutputText.CharacterWidthEnum": OutputText.CharacterWidthEnum,
        "OutputText.ColorEnum": OutputText.ColorEnum,
        "PINFormatType": PINFormatType,
        "PINRequest.PINFormatEnum": PINRequest.PINFormatEnum,
        "PINRequestType": PINRequestType,
        "POICapabilitiesType": POICapabilitiesType,
        "POIProfile.GenericProfileEnum": POIProfile.GenericProfileEnum,
        "POIProfile.ServiceProfilesEnum": POIProfile.ServiceProfilesEnum,
        "POIStatus.PrinterStatusEnum": POIStatus.PrinterStatusEnum,
        "POITerminalData.POICapabilitiesEnum": POITerminalData.POICapabilitiesEnum,
        "PaymentAccountReq.AccountTypeEnum": PaymentAccountReq.AccountTypeEnum,
        "PaymentData.PaymentTypeEnum": PaymentData.PaymentTypeEnum,
        "PaymentInstrumentType": PaymentInstrumentType,
        "PaymentResult.AuthenticationMethodEnum": PaymentResult.AuthenticationMethodEnum,
        "PaymentResult.PaymentTypeEnum": PaymentResult.PaymentTypeEnum,
        "PaymentType": PaymentType,
        "PeriodUnitType": PeriodUnitType,
        "PrinterStatusType": PrinterStatusType,
        "ReconciliationType": ReconciliationType,
        "Response.ErrorConditionEnum": Response.ErrorConditionEnum,
        "ResponseModeType": ResponseModeType,
        "ResultType": ResultType,
        "ReversalReasonType": ReversalReasonType,
        "SaleCapabilitiesType": SaleCapabilitiesType,
        "SaleData.CustomerOrderReqEnum": SaleData.CustomerOrderReqEnum,
        "SaleData.TokenRequestedTypeEnum": SaleData.TokenRequestedTypeEnum,
        "SaleItem.UnitOfMeasureEnum": SaleItem.UnitOfMeasureEnum,
        "SaleItemRebate.UnitOfMeasureEnum": SaleItemRebate.UnitOfMeasureEnum,
        "SaleProfile.GenericProfileEnum": SaleProfile.GenericProfileEnum,
        "SaleProfile.ServiceProfilesEnum": SaleProfile.ServiceProfilesEnum,
        "SaleTerminalData.SaleCapabilitiesEnum": SaleTerminalData.SaleCapabilitiesEnum,
        "SaleTerminalData.TerminalEnvironmentEnum": SaleTerminalData.TerminalEnvironmentEnum,
        "ServiceProfilesType": ServiceProfilesType,
        "ServicesEnabledType": ServicesEnabledType,
        "SignedData.VersionEnum": SignedData.VersionEnum,
        "Signer.VersionEnum": Signer.VersionEnum,
        "SoundActionType": SoundActionType,
        "SoundContent.SoundFormatEnum": SoundContent.SoundFormatEnum,
        "SoundFormatType": SoundFormatType,
        "SoundRequest.ResponseModeEnum": SoundRequest.ResponseModeEnum,
        "StoredValueAccountId.EntryModeEnum": StoredValueAccountId.EntryModeEnum,
        "StoredValueAccountType": StoredValueAccountType,
        "StoredValueTransactionType": StoredValueTransactionType,
        "TerminalEnvironmentType": TerminalEnvironmentType,
        "TokenRequestedType": TokenRequestedType,
        "TotalDetailsType": TotalDetailsType,
        "TrackData.TrackFormatEnum": TrackData.TrackFormatEnum,
        "TrackFormatType": TrackFormatType,
        "TransactionActionType": TransactionActionType,
        "TransactionConditions.ForceEntryModeEnum": TransactionConditions.ForceEntryModeEnum,
        "TransactionConditions.LoyaltyHandlingEnum": TransactionConditions.LoyaltyHandlingEnum,
        "TransactionStatusRequest.DocumentQualifierEnum": TransactionStatusRequest.DocumentQualifierEnum,
        "TransactionTotals.ErrorConditionEnum": TransactionTotals.ErrorConditionEnum,
        "TransactionTotals.LoyaltyUnitEnum": TransactionTotals.LoyaltyUnitEnum,
        "TransactionType": TransactionType,
        "UnitOfMeasureType": UnitOfMeasureType,
        "VersionType": VersionType,
}

let typeMap: {[index: string]: any} = {
    "AbortRequest": AbortRequest,
    "AdminRequest": AdminRequest,
    "AdminResponse": AdminResponse,
    "AlgorithmIdentifier": AlgorithmIdentifier,
    "AllowedProduct": AllowedProduct,
    "Amount": Amount,
    "AmountsReq": AmountsReq,
    "AmountsResp": AmountsResp,
    "ApplicationInfo": ApplicationInfo,
    "AreaSize": AreaSize,
    "AuthenticatedData": AuthenticatedData,
    "BalanceInquiryRequest": BalanceInquiryRequest,
    "BalanceInquiryResponse": BalanceInquiryResponse,
    "BatchRequest": BatchRequest,
    "BatchResponse": BatchResponse,
    "CapturedSignature": CapturedSignature,
    "CardAcquisitionRequest": CardAcquisitionRequest,
    "CardAcquisitionResponse": CardAcquisitionResponse,
    "CardAcquisitionTransaction": CardAcquisitionTransaction,
    "CardData": CardData,
    "CardReaderAPDURequest": CardReaderAPDURequest,
    "CardReaderAPDUResponse": CardReaderAPDUResponse,
    "CardReaderInitRequest": CardReaderInitRequest,
    "CardReaderInitResponse": CardReaderInitResponse,
    "CardReaderPowerOffRequest": CardReaderPowerOffRequest,
    "CardReaderPowerOffResponse": CardReaderPowerOffResponse,
    "CardholderPIN": CardholderPIN,
    "CashHandlingDevice": CashHandlingDevice,
    "CheckData": CheckData,
    "CoinsOrBills": CoinsOrBills,
    "CommonField": CommonField,
    "ContentInformation": ContentInformation,
    "CurrencyConversion": CurrencyConversion,
    "CustomerOrder": CustomerOrder,
    "DiagnosisRequest": DiagnosisRequest,
    "DiagnosisResponse": DiagnosisResponse,
    "DigestedData": DigestedData,
    "DisplayOutput": DisplayOutput,
    "DisplayRequest": DisplayRequest,
    "DisplayResponse": DisplayResponse,
    "EnableServiceRequest": EnableServiceRequest,
    "EnableServiceResponse": EnableServiceResponse,
    "EncapsulatedContent": EncapsulatedContent,
    "EncryptedContent": EncryptedContent,
    "EnvelopedData": EnvelopedData,
    "EventNotification": EventNotification,
    "ExternalPlatform": ExternalPlatform,
    "GeographicCoordinates": GeographicCoordinates,
    "Geolocation": Geolocation,
    "GetTotalsRequest": GetTotalsRequest,
    "GetTotalsResponse": GetTotalsResponse,
    "HostStatus": HostStatus,
    "ICCResetData": ICCResetData,
    "Input": Input,
    "InputData": InputData,
    "InputRequest": InputRequest,
    "InputResponse": InputResponse,
    "InputResult": InputResult,
    "InputUpdate": InputUpdate,
    "Instalment": Instalment,
    "Issuer": Issuer,
    "IssuerAndSerialNumber": IssuerAndSerialNumber,
    "LoginRequest": LoginRequest,
    "LoginResponse": LoginResponse,
    "LogoutRequest": LogoutRequest,
    "LogoutResponse": LogoutResponse,
    "LoyaltyAccount": LoyaltyAccount,
    "LoyaltyAccountId": LoyaltyAccountId,
    "LoyaltyAccountReq": LoyaltyAccountReq,
    "LoyaltyAccountStatus": LoyaltyAccountStatus,
    "LoyaltyAcquirerData": LoyaltyAcquirerData,
    "LoyaltyAmount": LoyaltyAmount,
    "LoyaltyData": LoyaltyData,
    "LoyaltyRequest": LoyaltyRequest,
    "LoyaltyResponse": LoyaltyResponse,
    "LoyaltyResult": LoyaltyResult,
    "LoyaltyTotals": LoyaltyTotals,
    "LoyaltyTransaction": LoyaltyTransaction,
    "MenuEntry": MenuEntry,
    "MerchantDevice": MerchantDevice,
    "MessageHeader": MessageHeader,
    "MessageReference": MessageReference,
    "MobileData": MobileData,
    "NamedKeyEncryptedData": NamedKeyEncryptedData,
    "NexoDerivedKey": NexoDerivedKey,
    "OriginalPOITransaction": OriginalPOITransaction,
    "OutputBarcode": OutputBarcode,
    "OutputContent": OutputContent,
    "OutputResult": OutputResult,
    "OutputText": OutputText,
    "PINRequest": PINRequest,
    "PINResponse": PINResponse,
    "POIData": POIData,
    "POIProfile": POIProfile,
    "POISoftware": POISoftware,
    "POIStatus": POIStatus,
    "POISystemData": POISystemData,
    "POITerminalData": POITerminalData,
    "Parameter": Parameter,
    "PaymentAccountReq": PaymentAccountReq,
    "PaymentAccountStatus": PaymentAccountStatus,
    "PaymentAcquirerData": PaymentAcquirerData,
    "PaymentData": PaymentData,
    "PaymentInstrumentData": PaymentInstrumentData,
    "PaymentReceipt": PaymentReceipt,
    "PaymentRequest": PaymentRequest,
    "PaymentResponse": PaymentResponse,
    "PaymentResult": PaymentResult,
    "PaymentToken": PaymentToken,
    "PaymentTotals": PaymentTotals,
    "PaymentTransaction": PaymentTransaction,
    "PerformedTransaction": PerformedTransaction,
    "PredefinedContent": PredefinedContent,
    "PrintOutput": PrintOutput,
    "PrintRequest": PrintRequest,
    "PrintResponse": PrintResponse,
    "Rebates": Rebates,
    "ReconciliationRequest": ReconciliationRequest,
    "ReconciliationResponse": ReconciliationResponse,
    "RelativeDistinguishedName": RelativeDistinguishedName,
    "RepeatedMessageResponse": RepeatedMessageResponse,
    "RepeatedResponseMessageBody": RepeatedResponseMessageBody,
    "Response": Response,
    "ReversalRequest": ReversalRequest,
    "ReversalResponse": ReversalResponse,
    "SaleData": SaleData,
    "SaleItem": SaleItem,
    "SaleItemRebate": SaleItemRebate,
    "SaleProfile": SaleProfile,
    "SaleSoftware": SaleSoftware,
    "SaleTerminalData": SaleTerminalData,
    "SaleToAcquirerData": SaleToAcquirerData,
    "SaleToIssuerData": SaleToIssuerData,
    "SaleToPOIRequest": SaleToPOIRequest,
    "SaleToPOIResponse": SaleToPOIResponse,
    "SaleToPOISecuredMessage": SaleToPOISecuredMessage,
    "SecurityKey": SecurityKey,
    "SecurityTrailer": SecurityTrailer,
    "SensitiveCardData": SensitiveCardData,
    "SensitiveMobileData": SensitiveMobileData,
    "ShopperInteractionDevice": ShopperInteractionDevice,
    "SignaturePoint": SignaturePoint,
    "SignedData": SignedData,
    "Signer": Signer,
    "SignerIdentifier": SignerIdentifier,
    "SoundContent": SoundContent,
    "SoundRequest": SoundRequest,
    "SoundResponse": SoundResponse,
    "SponsoredMerchant": SponsoredMerchant,
    "StoredValueAccountId": StoredValueAccountId,
    "StoredValueAccountStatus": StoredValueAccountStatus,
    "StoredValueData": StoredValueData,
    "StoredValueRequest": StoredValueRequest,
    "StoredValueResponse": StoredValueResponse,
    "StoredValueResult": StoredValueResult,
    "TerminalApiRequest": TerminalApiRequest,
    "TerminalApiResponse": TerminalApiResponse,
    "TerminalApiSecuredRequest": TerminalApiSecuredRequest,
    "TerminalApiSecuredResponse": TerminalApiSecuredResponse,
    "TotalFilter": TotalFilter,
    "TrackData": TrackData,
    "TransactionConditions": TransactionConditions,
    "TransactionIdentification": TransactionIdentification,
    "TransactionStatusRequest": TransactionStatusRequest,
    "TransactionStatusResponse": TransactionStatusResponse,
    "TransactionToPerform": TransactionToPerform,
    "TransactionTotals": TransactionTotals,
    "TransmitRequest": TransmitRequest,
    "TransmitResponse": TransmitResponse,
    "UTMCoordinates": UTMCoordinates,
}

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

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
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
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
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
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}
