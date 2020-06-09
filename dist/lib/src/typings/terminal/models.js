"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
__exportStar(require("./abortRequest"), exports);
__exportStar(require("./accountType"), exports);
__exportStar(require("./adminRequest"), exports);
__exportStar(require("./adminResponse"), exports);
__exportStar(require("./algorithmIdentifier"), exports);
__exportStar(require("./algorithmType"), exports);
__exportStar(require("./alignmentType"), exports);
__exportStar(require("./allowedProduct"), exports);
__exportStar(require("./amount"), exports);
__exportStar(require("./amountsReq"), exports);
__exportStar(require("./amountsResp"), exports);
__exportStar(require("./applicationInfo"), exports);
__exportStar(require("./areaSize"), exports);
__exportStar(require("./authenticatedData"), exports);
__exportStar(require("./authenticationMethodType"), exports);
__exportStar(require("./balanceInquiryRequest"), exports);
__exportStar(require("./balanceInquiryResponse"), exports);
__exportStar(require("./barcodeType"), exports);
__exportStar(require("./batchRequest"), exports);
__exportStar(require("./batchResponse"), exports);
__exportStar(require("./capturedSignature"), exports);
__exportStar(require("./cardAcquisitionRequest"), exports);
__exportStar(require("./cardAcquisitionResponse"), exports);
__exportStar(require("./cardAcquisitionTransaction"), exports);
__exportStar(require("./cardData"), exports);
__exportStar(require("./cardReaderAPDURequest"), exports);
__exportStar(require("./cardReaderAPDUResponse"), exports);
__exportStar(require("./cardReaderInitRequest"), exports);
__exportStar(require("./cardReaderInitResponse"), exports);
__exportStar(require("./cardReaderPowerOffRequest"), exports);
__exportStar(require("./cardReaderPowerOffResponse"), exports);
__exportStar(require("./cardholderPIN"), exports);
__exportStar(require("./cashHandlingDevice"), exports);
__exportStar(require("./characterHeightType"), exports);
__exportStar(require("./characterStyleType"), exports);
__exportStar(require("./characterWidthType"), exports);
__exportStar(require("./checkData"), exports);
__exportStar(require("./checkTypeCodeType"), exports);
__exportStar(require("./coinsOrBills"), exports);
__exportStar(require("./colorType"), exports);
__exportStar(require("./commonField"), exports);
__exportStar(require("./contentInformation"), exports);
__exportStar(require("./contentType"), exports);
__exportStar(require("./currencyConversion"), exports);
__exportStar(require("./customerOrder"), exports);
__exportStar(require("./customerOrderReqType"), exports);
__exportStar(require("./deviceType"), exports);
__exportStar(require("./diagnosisRequest"), exports);
__exportStar(require("./diagnosisResponse"), exports);
__exportStar(require("./digestedData"), exports);
__exportStar(require("./displayOutput"), exports);
__exportStar(require("./displayRequest"), exports);
__exportStar(require("./displayResponse"), exports);
__exportStar(require("./documentQualifierType"), exports);
__exportStar(require("./enableServiceRequest"), exports);
__exportStar(require("./enableServiceResponse"), exports);
__exportStar(require("./encapsulatedContent"), exports);
__exportStar(require("./encryptedContent"), exports);
__exportStar(require("./entryModeType"), exports);
__exportStar(require("./envelopedData"), exports);
__exportStar(require("./errorConditionType"), exports);
__exportStar(require("./eventNotification"), exports);
__exportStar(require("./eventToNotifyType"), exports);
__exportStar(require("./externalPlatform"), exports);
__exportStar(require("./forceEntryModeType"), exports);
__exportStar(require("./genericProfileType"), exports);
__exportStar(require("./geographicCoordinates"), exports);
__exportStar(require("./geolocation"), exports);
__exportStar(require("./getTotalsRequest"), exports);
__exportStar(require("./getTotalsResponse"), exports);
__exportStar(require("./globalStatusType"), exports);
__exportStar(require("./hostStatus"), exports);
__exportStar(require("./iCCResetData"), exports);
__exportStar(require("./identificationSupportType"), exports);
__exportStar(require("./identificationType"), exports);
__exportStar(require("./infoQualifyType"), exports);
__exportStar(require("./input"), exports);
__exportStar(require("./inputCommandType"), exports);
__exportStar(require("./inputData"), exports);
__exportStar(require("./inputRequest"), exports);
__exportStar(require("./inputResponse"), exports);
__exportStar(require("./inputResult"), exports);
__exportStar(require("./inputUpdate"), exports);
__exportStar(require("./instalment"), exports);
__exportStar(require("./instalmentType"), exports);
__exportStar(require("./issuer"), exports);
__exportStar(require("./issuerAndSerialNumber"), exports);
__exportStar(require("./loginRequest"), exports);
__exportStar(require("./loginResponse"), exports);
__exportStar(require("./logoutRequest"), exports);
__exportStar(require("./logoutResponse"), exports);
__exportStar(require("./loyaltyAccount"), exports);
__exportStar(require("./loyaltyAccountId"), exports);
__exportStar(require("./loyaltyAccountReq"), exports);
__exportStar(require("./loyaltyAccountStatus"), exports);
__exportStar(require("./loyaltyAcquirerData"), exports);
__exportStar(require("./loyaltyAmount"), exports);
__exportStar(require("./loyaltyData"), exports);
__exportStar(require("./loyaltyHandlingType"), exports);
__exportStar(require("./loyaltyRequest"), exports);
__exportStar(require("./loyaltyResponse"), exports);
__exportStar(require("./loyaltyResult"), exports);
__exportStar(require("./loyaltyTotals"), exports);
__exportStar(require("./loyaltyTransaction"), exports);
__exportStar(require("./loyaltyTransactionType"), exports);
__exportStar(require("./loyaltyUnitType"), exports);
__exportStar(require("./menuEntry"), exports);
__exportStar(require("./menuEntryTagType"), exports);
__exportStar(require("./merchantDevice"), exports);
__exportStar(require("./messageCategoryType"), exports);
__exportStar(require("./messageClassType"), exports);
__exportStar(require("./messageHeader"), exports);
__exportStar(require("./messageReference"), exports);
__exportStar(require("./messageType"), exports);
__exportStar(require("./mobileData"), exports);
__exportStar(require("./namedKeyEncryptedData"), exports);
__exportStar(require("./nexoDerivedKey"), exports);
__exportStar(require("./originalPOITransaction"), exports);
__exportStar(require("./outputBarcode"), exports);
__exportStar(require("./outputContent"), exports);
__exportStar(require("./outputFormatType"), exports);
__exportStar(require("./outputResult"), exports);
__exportStar(require("./outputText"), exports);
__exportStar(require("./pINFormatType"), exports);
__exportStar(require("./pINRequest"), exports);
__exportStar(require("./pINRequestType"), exports);
__exportStar(require("./pINResponse"), exports);
__exportStar(require("./pOICapabilitiesType"), exports);
__exportStar(require("./pOIData"), exports);
__exportStar(require("./pOIProfile"), exports);
__exportStar(require("./pOISoftware"), exports);
__exportStar(require("./pOIStatus"), exports);
__exportStar(require("./pOISystemData"), exports);
__exportStar(require("./pOITerminalData"), exports);
__exportStar(require("./parameter"), exports);
__exportStar(require("./paymentAccountReq"), exports);
__exportStar(require("./paymentAccountStatus"), exports);
__exportStar(require("./paymentAcquirerData"), exports);
__exportStar(require("./paymentData"), exports);
__exportStar(require("./paymentInstrumentData"), exports);
__exportStar(require("./paymentInstrumentType"), exports);
__exportStar(require("./paymentReceipt"), exports);
__exportStar(require("./paymentRequest"), exports);
__exportStar(require("./paymentResponse"), exports);
__exportStar(require("./paymentResult"), exports);
__exportStar(require("./paymentToken"), exports);
__exportStar(require("./paymentTotals"), exports);
__exportStar(require("./paymentTransaction"), exports);
__exportStar(require("./paymentType"), exports);
__exportStar(require("./performedTransaction"), exports);
__exportStar(require("./periodUnitType"), exports);
__exportStar(require("./predefinedContent"), exports);
__exportStar(require("./printOutput"), exports);
__exportStar(require("./printRequest"), exports);
__exportStar(require("./printResponse"), exports);
__exportStar(require("./printerStatusType"), exports);
__exportStar(require("./rebates"), exports);
__exportStar(require("./reconciliationRequest"), exports);
__exportStar(require("./reconciliationResponse"), exports);
__exportStar(require("./reconciliationType"), exports);
__exportStar(require("./relativeDistinguishedName"), exports);
__exportStar(require("./repeatedMessageResponse"), exports);
__exportStar(require("./repeatedResponseMessageBody"), exports);
__exportStar(require("./response"), exports);
__exportStar(require("./responseModeType"), exports);
__exportStar(require("./resultType"), exports);
__exportStar(require("./reversalReasonType"), exports);
__exportStar(require("./reversalRequest"), exports);
__exportStar(require("./reversalResponse"), exports);
__exportStar(require("./saleCapabilitiesType"), exports);
__exportStar(require("./saleData"), exports);
__exportStar(require("./saleItem"), exports);
__exportStar(require("./saleItemRebate"), exports);
__exportStar(require("./saleProfile"), exports);
__exportStar(require("./saleSoftware"), exports);
__exportStar(require("./saleTerminalData"), exports);
__exportStar(require("./saleToAcquirerData"), exports);
__exportStar(require("./saleToIssuerData"), exports);
__exportStar(require("./saleToPOIRequest"), exports);
__exportStar(require("./saleToPOIResponse"), exports);
__exportStar(require("./saleToPOISecuredMessage"), exports);
__exportStar(require("./securityKey"), exports);
__exportStar(require("./securityTrailer"), exports);
__exportStar(require("./sensitiveCardData"), exports);
__exportStar(require("./sensitiveMobileData"), exports);
__exportStar(require("./serviceProfilesType"), exports);
__exportStar(require("./servicesEnabledType"), exports);
__exportStar(require("./shopperInteractionDevice"), exports);
__exportStar(require("./signaturePoint"), exports);
__exportStar(require("./signedData"), exports);
__exportStar(require("./signer"), exports);
__exportStar(require("./signerIdentifier"), exports);
__exportStar(require("./soundActionType"), exports);
__exportStar(require("./soundContent"), exports);
__exportStar(require("./soundFormatType"), exports);
__exportStar(require("./soundRequest"), exports);
__exportStar(require("./soundResponse"), exports);
__exportStar(require("./sponsoredMerchant"), exports);
__exportStar(require("./storedValueAccountId"), exports);
__exportStar(require("./storedValueAccountStatus"), exports);
__exportStar(require("./storedValueAccountType"), exports);
__exportStar(require("./storedValueData"), exports);
__exportStar(require("./storedValueRequest"), exports);
__exportStar(require("./storedValueResponse"), exports);
__exportStar(require("./storedValueResult"), exports);
__exportStar(require("./storedValueTransactionType"), exports);
__exportStar(require("./terminalApiRequest"), exports);
__exportStar(require("./terminalApiResponse"), exports);
__exportStar(require("./terminalApiSecuredRequest"), exports);
__exportStar(require("./terminalApiSecuredResponse"), exports);
__exportStar(require("./terminalEnvironmentType"), exports);
__exportStar(require("./tokenRequestedType"), exports);
__exportStar(require("./totalDetailsType"), exports);
__exportStar(require("./totalFilter"), exports);
__exportStar(require("./trackData"), exports);
__exportStar(require("./trackFormatType"), exports);
__exportStar(require("./transactionActionType"), exports);
__exportStar(require("./transactionConditions"), exports);
__exportStar(require("./transactionIdentification"), exports);
__exportStar(require("./transactionStatusRequest"), exports);
__exportStar(require("./transactionStatusResponse"), exports);
__exportStar(require("./transactionToPerform"), exports);
__exportStar(require("./transactionTotals"), exports);
__exportStar(require("./transactionType"), exports);
__exportStar(require("./transmitRequest"), exports);
__exportStar(require("./transmitResponse"), exports);
__exportStar(require("./uTMCoordinates"), exports);
__exportStar(require("./unitOfMeasureType"), exports);
__exportStar(require("./versionType"), exports);
var abortRequest_1 = require("./abortRequest");
var accountType_1 = require("./accountType");
var adminRequest_1 = require("./adminRequest");
var adminResponse_1 = require("./adminResponse");
var algorithmIdentifier_1 = require("./algorithmIdentifier");
var algorithmType_1 = require("./algorithmType");
var alignmentType_1 = require("./alignmentType");
var allowedProduct_1 = require("./allowedProduct");
var amount_1 = require("./amount");
var amountsReq_1 = require("./amountsReq");
var amountsResp_1 = require("./amountsResp");
var applicationInfo_1 = require("./applicationInfo");
var areaSize_1 = require("./areaSize");
var authenticatedData_1 = require("./authenticatedData");
var authenticationMethodType_1 = require("./authenticationMethodType");
var balanceInquiryRequest_1 = require("./balanceInquiryRequest");
var balanceInquiryResponse_1 = require("./balanceInquiryResponse");
var barcodeType_1 = require("./barcodeType");
var batchRequest_1 = require("./batchRequest");
var batchResponse_1 = require("./batchResponse");
var capturedSignature_1 = require("./capturedSignature");
var cardAcquisitionRequest_1 = require("./cardAcquisitionRequest");
var cardAcquisitionResponse_1 = require("./cardAcquisitionResponse");
var cardAcquisitionTransaction_1 = require("./cardAcquisitionTransaction");
var cardData_1 = require("./cardData");
var cardReaderAPDURequest_1 = require("./cardReaderAPDURequest");
var cardReaderAPDUResponse_1 = require("./cardReaderAPDUResponse");
var cardReaderInitRequest_1 = require("./cardReaderInitRequest");
var cardReaderInitResponse_1 = require("./cardReaderInitResponse");
var cardReaderPowerOffRequest_1 = require("./cardReaderPowerOffRequest");
var cardReaderPowerOffResponse_1 = require("./cardReaderPowerOffResponse");
var cardholderPIN_1 = require("./cardholderPIN");
var cashHandlingDevice_1 = require("./cashHandlingDevice");
var characterHeightType_1 = require("./characterHeightType");
var characterStyleType_1 = require("./characterStyleType");
var characterWidthType_1 = require("./characterWidthType");
var checkData_1 = require("./checkData");
var checkTypeCodeType_1 = require("./checkTypeCodeType");
var coinsOrBills_1 = require("./coinsOrBills");
var colorType_1 = require("./colorType");
var commonField_1 = require("./commonField");
var contentInformation_1 = require("./contentInformation");
var contentType_1 = require("./contentType");
var currencyConversion_1 = require("./currencyConversion");
var customerOrder_1 = require("./customerOrder");
var customerOrderReqType_1 = require("./customerOrderReqType");
var deviceType_1 = require("./deviceType");
var diagnosisRequest_1 = require("./diagnosisRequest");
var diagnosisResponse_1 = require("./diagnosisResponse");
var digestedData_1 = require("./digestedData");
var displayOutput_1 = require("./displayOutput");
var displayRequest_1 = require("./displayRequest");
var displayResponse_1 = require("./displayResponse");
var documentQualifierType_1 = require("./documentQualifierType");
var enableServiceRequest_1 = require("./enableServiceRequest");
var enableServiceResponse_1 = require("./enableServiceResponse");
var encapsulatedContent_1 = require("./encapsulatedContent");
var encryptedContent_1 = require("./encryptedContent");
var entryModeType_1 = require("./entryModeType");
var envelopedData_1 = require("./envelopedData");
var errorConditionType_1 = require("./errorConditionType");
var eventNotification_1 = require("./eventNotification");
var eventToNotifyType_1 = require("./eventToNotifyType");
var externalPlatform_1 = require("./externalPlatform");
var forceEntryModeType_1 = require("./forceEntryModeType");
var genericProfileType_1 = require("./genericProfileType");
var geographicCoordinates_1 = require("./geographicCoordinates");
var geolocation_1 = require("./geolocation");
var getTotalsRequest_1 = require("./getTotalsRequest");
var getTotalsResponse_1 = require("./getTotalsResponse");
var globalStatusType_1 = require("./globalStatusType");
var hostStatus_1 = require("./hostStatus");
var iCCResetData_1 = require("./iCCResetData");
var identificationSupportType_1 = require("./identificationSupportType");
var identificationType_1 = require("./identificationType");
var infoQualifyType_1 = require("./infoQualifyType");
var input_1 = require("./input");
var inputCommandType_1 = require("./inputCommandType");
var inputData_1 = require("./inputData");
var inputRequest_1 = require("./inputRequest");
var inputResponse_1 = require("./inputResponse");
var inputResult_1 = require("./inputResult");
var inputUpdate_1 = require("./inputUpdate");
var instalment_1 = require("./instalment");
var instalmentType_1 = require("./instalmentType");
var issuer_1 = require("./issuer");
var issuerAndSerialNumber_1 = require("./issuerAndSerialNumber");
var loginRequest_1 = require("./loginRequest");
var loginResponse_1 = require("./loginResponse");
var logoutRequest_1 = require("./logoutRequest");
var logoutResponse_1 = require("./logoutResponse");
var loyaltyAccount_1 = require("./loyaltyAccount");
var loyaltyAccountId_1 = require("./loyaltyAccountId");
var loyaltyAccountReq_1 = require("./loyaltyAccountReq");
var loyaltyAccountStatus_1 = require("./loyaltyAccountStatus");
var loyaltyAcquirerData_1 = require("./loyaltyAcquirerData");
var loyaltyAmount_1 = require("./loyaltyAmount");
var loyaltyData_1 = require("./loyaltyData");
var loyaltyHandlingType_1 = require("./loyaltyHandlingType");
var loyaltyRequest_1 = require("./loyaltyRequest");
var loyaltyResponse_1 = require("./loyaltyResponse");
var loyaltyResult_1 = require("./loyaltyResult");
var loyaltyTotals_1 = require("./loyaltyTotals");
var loyaltyTransaction_1 = require("./loyaltyTransaction");
var loyaltyTransactionType_1 = require("./loyaltyTransactionType");
var loyaltyUnitType_1 = require("./loyaltyUnitType");
var menuEntry_1 = require("./menuEntry");
var menuEntryTagType_1 = require("./menuEntryTagType");
var merchantDevice_1 = require("./merchantDevice");
var messageCategoryType_1 = require("./messageCategoryType");
var messageClassType_1 = require("./messageClassType");
var messageHeader_1 = require("./messageHeader");
var messageReference_1 = require("./messageReference");
var messageType_1 = require("./messageType");
var mobileData_1 = require("./mobileData");
var namedKeyEncryptedData_1 = require("./namedKeyEncryptedData");
var nexoDerivedKey_1 = require("./nexoDerivedKey");
var originalPOITransaction_1 = require("./originalPOITransaction");
var outputBarcode_1 = require("./outputBarcode");
var outputContent_1 = require("./outputContent");
var outputFormatType_1 = require("./outputFormatType");
var outputResult_1 = require("./outputResult");
var outputText_1 = require("./outputText");
var pINFormatType_1 = require("./pINFormatType");
var pINRequest_1 = require("./pINRequest");
var pINRequestType_1 = require("./pINRequestType");
var pINResponse_1 = require("./pINResponse");
var pOICapabilitiesType_1 = require("./pOICapabilitiesType");
var pOIData_1 = require("./pOIData");
var pOIProfile_1 = require("./pOIProfile");
var pOISoftware_1 = require("./pOISoftware");
var pOIStatus_1 = require("./pOIStatus");
var pOISystemData_1 = require("./pOISystemData");
var pOITerminalData_1 = require("./pOITerminalData");
var parameter_1 = require("./parameter");
var paymentAccountReq_1 = require("./paymentAccountReq");
var paymentAccountStatus_1 = require("./paymentAccountStatus");
var paymentAcquirerData_1 = require("./paymentAcquirerData");
var paymentData_1 = require("./paymentData");
var paymentInstrumentData_1 = require("./paymentInstrumentData");
var paymentInstrumentType_1 = require("./paymentInstrumentType");
var paymentReceipt_1 = require("./paymentReceipt");
var paymentRequest_1 = require("./paymentRequest");
var paymentResponse_1 = require("./paymentResponse");
var paymentResult_1 = require("./paymentResult");
var paymentToken_1 = require("./paymentToken");
var paymentTotals_1 = require("./paymentTotals");
var paymentTransaction_1 = require("./paymentTransaction");
var paymentType_1 = require("./paymentType");
var performedTransaction_1 = require("./performedTransaction");
var periodUnitType_1 = require("./periodUnitType");
var predefinedContent_1 = require("./predefinedContent");
var printOutput_1 = require("./printOutput");
var printRequest_1 = require("./printRequest");
var printResponse_1 = require("./printResponse");
var printerStatusType_1 = require("./printerStatusType");
var rebates_1 = require("./rebates");
var reconciliationRequest_1 = require("./reconciliationRequest");
var reconciliationResponse_1 = require("./reconciliationResponse");
var reconciliationType_1 = require("./reconciliationType");
var relativeDistinguishedName_1 = require("./relativeDistinguishedName");
var repeatedMessageResponse_1 = require("./repeatedMessageResponse");
var repeatedResponseMessageBody_1 = require("./repeatedResponseMessageBody");
var response_1 = require("./response");
var responseModeType_1 = require("./responseModeType");
var resultType_1 = require("./resultType");
var reversalReasonType_1 = require("./reversalReasonType");
var reversalRequest_1 = require("./reversalRequest");
var reversalResponse_1 = require("./reversalResponse");
var saleCapabilitiesType_1 = require("./saleCapabilitiesType");
var saleData_1 = require("./saleData");
var saleItem_1 = require("./saleItem");
var saleItemRebate_1 = require("./saleItemRebate");
var saleProfile_1 = require("./saleProfile");
var saleSoftware_1 = require("./saleSoftware");
var saleTerminalData_1 = require("./saleTerminalData");
var saleToAcquirerData_1 = require("./saleToAcquirerData");
var saleToIssuerData_1 = require("./saleToIssuerData");
var saleToPOIRequest_1 = require("./saleToPOIRequest");
var saleToPOIResponse_1 = require("./saleToPOIResponse");
var saleToPOISecuredMessage_1 = require("./saleToPOISecuredMessage");
var securityKey_1 = require("./securityKey");
var securityTrailer_1 = require("./securityTrailer");
var sensitiveCardData_1 = require("./sensitiveCardData");
var sensitiveMobileData_1 = require("./sensitiveMobileData");
var serviceProfilesType_1 = require("./serviceProfilesType");
var servicesEnabledType_1 = require("./servicesEnabledType");
var shopperInteractionDevice_1 = require("./shopperInteractionDevice");
var signaturePoint_1 = require("./signaturePoint");
var signedData_1 = require("./signedData");
var signer_1 = require("./signer");
var signerIdentifier_1 = require("./signerIdentifier");
var soundActionType_1 = require("./soundActionType");
var soundContent_1 = require("./soundContent");
var soundFormatType_1 = require("./soundFormatType");
var soundRequest_1 = require("./soundRequest");
var soundResponse_1 = require("./soundResponse");
var sponsoredMerchant_1 = require("./sponsoredMerchant");
var storedValueAccountId_1 = require("./storedValueAccountId");
var storedValueAccountStatus_1 = require("./storedValueAccountStatus");
var storedValueAccountType_1 = require("./storedValueAccountType");
var storedValueData_1 = require("./storedValueData");
var storedValueRequest_1 = require("./storedValueRequest");
var storedValueResponse_1 = require("./storedValueResponse");
var storedValueResult_1 = require("./storedValueResult");
var storedValueTransactionType_1 = require("./storedValueTransactionType");
var terminalApiRequest_1 = require("./terminalApiRequest");
var terminalApiResponse_1 = require("./terminalApiResponse");
var terminalApiSecuredRequest_1 = require("./terminalApiSecuredRequest");
var terminalApiSecuredResponse_1 = require("./terminalApiSecuredResponse");
var terminalEnvironmentType_1 = require("./terminalEnvironmentType");
var tokenRequestedType_1 = require("./tokenRequestedType");
var totalDetailsType_1 = require("./totalDetailsType");
var totalFilter_1 = require("./totalFilter");
var trackData_1 = require("./trackData");
var trackFormatType_1 = require("./trackFormatType");
var transactionActionType_1 = require("./transactionActionType");
var transactionConditions_1 = require("./transactionConditions");
var transactionIdentification_1 = require("./transactionIdentification");
var transactionStatusRequest_1 = require("./transactionStatusRequest");
var transactionStatusResponse_1 = require("./transactionStatusResponse");
var transactionToPerform_1 = require("./transactionToPerform");
var transactionTotals_1 = require("./transactionTotals");
var transactionType_1 = require("./transactionType");
var transmitRequest_1 = require("./transmitRequest");
var transmitResponse_1 = require("./transmitResponse");
var uTMCoordinates_1 = require("./uTMCoordinates");
var unitOfMeasureType_1 = require("./unitOfMeasureType");
var versionType_1 = require("./versionType");
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var enumsMap = {
    "AccountType": accountType_1.AccountType,
    "AlgorithmType": algorithmType_1.AlgorithmType,
    "AlignmentType": alignmentType_1.AlignmentType,
    "AuthenticatedData.VersionEnum": authenticatedData_1.AuthenticatedData.VersionEnum,
    "AuthenticationMethodType": authenticationMethodType_1.AuthenticationMethodType,
    "BarcodeType": barcodeType_1.BarcodeType,
    "CardAcquisitionTransaction.ForceEntryModeEnum": cardAcquisitionTransaction_1.CardAcquisitionTransaction.ForceEntryModeEnum,
    "CardAcquisitionTransaction.LoyaltyHandlingEnum": cardAcquisitionTransaction_1.CardAcquisitionTransaction.LoyaltyHandlingEnum,
    "CardAcquisitionTransaction.PaymentTypeEnum": cardAcquisitionTransaction_1.CardAcquisitionTransaction.PaymentTypeEnum,
    "CardData.EntryModeEnum": cardData_1.CardData.EntryModeEnum,
    "CardReaderInitRequest.ForceEntryModeEnum": cardReaderInitRequest_1.CardReaderInitRequest.ForceEntryModeEnum,
    "CardReaderInitResponse.EntryModeEnum": cardReaderInitResponse_1.CardReaderInitResponse.EntryModeEnum,
    "CharacterHeightType": characterHeightType_1.CharacterHeightType,
    "CharacterStyleType": characterStyleType_1.CharacterStyleType,
    "CharacterWidthType": characterWidthType_1.CharacterWidthType,
    "CheckData.TypeCodeEnum": checkData_1.CheckData.TypeCodeEnum,
    "CheckTypeCodeType": checkTypeCodeType_1.CheckTypeCodeType,
    "ColorType": colorType_1.ColorType,
    "ContentType": contentType_1.ContentType,
    "CustomerOrderReqType": customerOrderReqType_1.CustomerOrderReqType,
    "DeviceType": deviceType_1.DeviceType,
    "DigestedData.VersionEnum": digestedData_1.DigestedData.VersionEnum,
    "DocumentQualifierType": documentQualifierType_1.DocumentQualifierType,
    "EnableServiceRequest.ServicesEnabledEnum": enableServiceRequest_1.EnableServiceRequest.ServicesEnabledEnum,
    "EntryModeType": entryModeType_1.EntryModeType,
    "EnvelopedData.VersionEnum": envelopedData_1.EnvelopedData.VersionEnum,
    "ErrorConditionType": errorConditionType_1.ErrorConditionType,
    "EventToNotifyType": eventToNotifyType_1.EventToNotifyType,
    "ForceEntryModeType": forceEntryModeType_1.ForceEntryModeType,
    "GenericProfileType": genericProfileType_1.GenericProfileType,
    "GetTotalsRequest.TotalDetailsEnum": getTotalsRequest_1.GetTotalsRequest.TotalDetailsEnum,
    "GlobalStatusType": globalStatusType_1.GlobalStatusType,
    "IdentificationSupportType": identificationSupportType_1.IdentificationSupportType,
    "IdentificationType": identificationType_1.IdentificationType,
    "InfoQualifyType": infoQualifyType_1.InfoQualifyType,
    "InputCommandType": inputCommandType_1.InputCommandType,
    "Instalment.InstalmentTypeEnum": instalment_1.Instalment.InstalmentTypeEnum,
    "Instalment.PeriodUnitEnum": instalment_1.Instalment.PeriodUnitEnum,
    "InstalmentType": instalmentType_1.InstalmentType,
    "LoginRequest.CustomerOrderReqEnum": loginRequest_1.LoginRequest.CustomerOrderReqEnum,
    "LoginRequest.TokenRequestedTypeEnum": loginRequest_1.LoginRequest.TokenRequestedTypeEnum,
    "LoyaltyAccountId.EntryModeEnum": loyaltyAccountId_1.LoyaltyAccountId.EntryModeEnum,
    "LoyaltyAccountId.IdentificationSupportEnum": loyaltyAccountId_1.LoyaltyAccountId.IdentificationSupportEnum,
    "LoyaltyAccountStatus.LoyaltyUnitEnum": loyaltyAccountStatus_1.LoyaltyAccountStatus.LoyaltyUnitEnum,
    "LoyaltyAmount.LoyaltyUnitEnum": loyaltyAmount_1.LoyaltyAmount.LoyaltyUnitEnum,
    "LoyaltyHandlingType": loyaltyHandlingType_1.LoyaltyHandlingType,
    "LoyaltyTransactionType": loyaltyTransactionType_1.LoyaltyTransactionType,
    "LoyaltyUnitType": loyaltyUnitType_1.LoyaltyUnitType,
    "MenuEntry.MenuEntryTagEnum": menuEntry_1.MenuEntry.MenuEntryTagEnum,
    "MenuEntryTagType": menuEntryTagType_1.MenuEntryTagType,
    "MessageCategoryType": messageCategoryType_1.MessageCategoryType,
    "MessageClassType": messageClassType_1.MessageClassType,
    "MessageReference.MessageCategoryEnum": messageReference_1.MessageReference.MessageCategoryEnum,
    "MessageType": messageType_1.MessageType,
    "NamedKeyEncryptedData.VersionEnum": namedKeyEncryptedData_1.NamedKeyEncryptedData.VersionEnum,
    "OutputBarcode.BarcodeTypeEnum": outputBarcode_1.OutputBarcode.BarcodeTypeEnum,
    "OutputFormatType": outputFormatType_1.OutputFormatType,
    "OutputText.AlignmentEnum": outputText_1.OutputText.AlignmentEnum,
    "OutputText.CharacterHeightEnum": outputText_1.OutputText.CharacterHeightEnum,
    "OutputText.CharacterStyleEnum": outputText_1.OutputText.CharacterStyleEnum,
    "OutputText.CharacterWidthEnum": outputText_1.OutputText.CharacterWidthEnum,
    "OutputText.ColorEnum": outputText_1.OutputText.ColorEnum,
    "PINFormatType": pINFormatType_1.PINFormatType,
    "PINRequest.PINFormatEnum": pINRequest_1.PINRequest.PINFormatEnum,
    "PINRequestType": pINRequestType_1.PINRequestType,
    "POICapabilitiesType": pOICapabilitiesType_1.POICapabilitiesType,
    "POIProfile.GenericProfileEnum": pOIProfile_1.POIProfile.GenericProfileEnum,
    "POIProfile.ServiceProfilesEnum": pOIProfile_1.POIProfile.ServiceProfilesEnum,
    "POIStatus.PrinterStatusEnum": pOIStatus_1.POIStatus.PrinterStatusEnum,
    "POITerminalData.POICapabilitiesEnum": pOITerminalData_1.POITerminalData.POICapabilitiesEnum,
    "PaymentAccountReq.AccountTypeEnum": paymentAccountReq_1.PaymentAccountReq.AccountTypeEnum,
    "PaymentData.PaymentTypeEnum": paymentData_1.PaymentData.PaymentTypeEnum,
    "PaymentInstrumentType": paymentInstrumentType_1.PaymentInstrumentType,
    "PaymentResult.AuthenticationMethodEnum": paymentResult_1.PaymentResult.AuthenticationMethodEnum,
    "PaymentResult.PaymentTypeEnum": paymentResult_1.PaymentResult.PaymentTypeEnum,
    "PaymentType": paymentType_1.PaymentType,
    "PeriodUnitType": periodUnitType_1.PeriodUnitType,
    "PrinterStatusType": printerStatusType_1.PrinterStatusType,
    "ReconciliationType": reconciliationType_1.ReconciliationType,
    "Response.ErrorConditionEnum": response_1.Response.ErrorConditionEnum,
    "ResponseModeType": responseModeType_1.ResponseModeType,
    "ResultType": resultType_1.ResultType,
    "ReversalReasonType": reversalReasonType_1.ReversalReasonType,
    "SaleCapabilitiesType": saleCapabilitiesType_1.SaleCapabilitiesType,
    "SaleData.CustomerOrderReqEnum": saleData_1.SaleData.CustomerOrderReqEnum,
    "SaleData.TokenRequestedTypeEnum": saleData_1.SaleData.TokenRequestedTypeEnum,
    "SaleItem.UnitOfMeasureEnum": saleItem_1.SaleItem.UnitOfMeasureEnum,
    "SaleItemRebate.UnitOfMeasureEnum": saleItemRebate_1.SaleItemRebate.UnitOfMeasureEnum,
    "SaleProfile.GenericProfileEnum": saleProfile_1.SaleProfile.GenericProfileEnum,
    "SaleProfile.ServiceProfilesEnum": saleProfile_1.SaleProfile.ServiceProfilesEnum,
    "SaleTerminalData.SaleCapabilitiesEnum": saleTerminalData_1.SaleTerminalData.SaleCapabilitiesEnum,
    "SaleTerminalData.TerminalEnvironmentEnum": saleTerminalData_1.SaleTerminalData.TerminalEnvironmentEnum,
    "ServiceProfilesType": serviceProfilesType_1.ServiceProfilesType,
    "ServicesEnabledType": servicesEnabledType_1.ServicesEnabledType,
    "SignedData.VersionEnum": signedData_1.SignedData.VersionEnum,
    "Signer.VersionEnum": signer_1.Signer.VersionEnum,
    "SoundActionType": soundActionType_1.SoundActionType,
    "SoundContent.SoundFormatEnum": soundContent_1.SoundContent.SoundFormatEnum,
    "SoundFormatType": soundFormatType_1.SoundFormatType,
    "SoundRequest.ResponseModeEnum": soundRequest_1.SoundRequest.ResponseModeEnum,
    "StoredValueAccountId.EntryModeEnum": storedValueAccountId_1.StoredValueAccountId.EntryModeEnum,
    "StoredValueAccountType": storedValueAccountType_1.StoredValueAccountType,
    "StoredValueTransactionType": storedValueTransactionType_1.StoredValueTransactionType,
    "TerminalEnvironmentType": terminalEnvironmentType_1.TerminalEnvironmentType,
    "TokenRequestedType": tokenRequestedType_1.TokenRequestedType,
    "TotalDetailsType": totalDetailsType_1.TotalDetailsType,
    "TrackData.TrackFormatEnum": trackData_1.TrackData.TrackFormatEnum,
    "TrackFormatType": trackFormatType_1.TrackFormatType,
    "TransactionActionType": transactionActionType_1.TransactionActionType,
    "TransactionConditions.ForceEntryModeEnum": transactionConditions_1.TransactionConditions.ForceEntryModeEnum,
    "TransactionConditions.LoyaltyHandlingEnum": transactionConditions_1.TransactionConditions.LoyaltyHandlingEnum,
    "TransactionStatusRequest.DocumentQualifierEnum": transactionStatusRequest_1.TransactionStatusRequest.DocumentQualifierEnum,
    "TransactionTotals.ErrorConditionEnum": transactionTotals_1.TransactionTotals.ErrorConditionEnum,
    "TransactionTotals.LoyaltyUnitEnum": transactionTotals_1.TransactionTotals.LoyaltyUnitEnum,
    "TransactionType": transactionType_1.TransactionType,
    "UnitOfMeasureType": unitOfMeasureType_1.UnitOfMeasureType,
    "VersionType": versionType_1.VersionType,
};
var typeMap = {
    "AbortRequest": abortRequest_1.AbortRequest,
    "AdminRequest": adminRequest_1.AdminRequest,
    "AdminResponse": adminResponse_1.AdminResponse,
    "AlgorithmIdentifier": algorithmIdentifier_1.AlgorithmIdentifier,
    "AllowedProduct": allowedProduct_1.AllowedProduct,
    "Amount": amount_1.Amount,
    "AmountsReq": amountsReq_1.AmountsReq,
    "AmountsResp": amountsResp_1.AmountsResp,
    "ApplicationInfo": applicationInfo_1.ApplicationInfo,
    "AreaSize": areaSize_1.AreaSize,
    "AuthenticatedData": authenticatedData_1.AuthenticatedData,
    "BalanceInquiryRequest": balanceInquiryRequest_1.BalanceInquiryRequest,
    "BalanceInquiryResponse": balanceInquiryResponse_1.BalanceInquiryResponse,
    "BatchRequest": batchRequest_1.BatchRequest,
    "BatchResponse": batchResponse_1.BatchResponse,
    "CapturedSignature": capturedSignature_1.CapturedSignature,
    "CardAcquisitionRequest": cardAcquisitionRequest_1.CardAcquisitionRequest,
    "CardAcquisitionResponse": cardAcquisitionResponse_1.CardAcquisitionResponse,
    "CardAcquisitionTransaction": cardAcquisitionTransaction_1.CardAcquisitionTransaction,
    "CardData": cardData_1.CardData,
    "CardReaderAPDURequest": cardReaderAPDURequest_1.CardReaderAPDURequest,
    "CardReaderAPDUResponse": cardReaderAPDUResponse_1.CardReaderAPDUResponse,
    "CardReaderInitRequest": cardReaderInitRequest_1.CardReaderInitRequest,
    "CardReaderInitResponse": cardReaderInitResponse_1.CardReaderInitResponse,
    "CardReaderPowerOffRequest": cardReaderPowerOffRequest_1.CardReaderPowerOffRequest,
    "CardReaderPowerOffResponse": cardReaderPowerOffResponse_1.CardReaderPowerOffResponse,
    "CardholderPIN": cardholderPIN_1.CardholderPIN,
    "CashHandlingDevice": cashHandlingDevice_1.CashHandlingDevice,
    "CheckData": checkData_1.CheckData,
    "CoinsOrBills": coinsOrBills_1.CoinsOrBills,
    "CommonField": commonField_1.CommonField,
    "ContentInformation": contentInformation_1.ContentInformation,
    "CurrencyConversion": currencyConversion_1.CurrencyConversion,
    "CustomerOrder": customerOrder_1.CustomerOrder,
    "DiagnosisRequest": diagnosisRequest_1.DiagnosisRequest,
    "DiagnosisResponse": diagnosisResponse_1.DiagnosisResponse,
    "DigestedData": digestedData_1.DigestedData,
    "DisplayOutput": displayOutput_1.DisplayOutput,
    "DisplayRequest": displayRequest_1.DisplayRequest,
    "DisplayResponse": displayResponse_1.DisplayResponse,
    "EnableServiceRequest": enableServiceRequest_1.EnableServiceRequest,
    "EnableServiceResponse": enableServiceResponse_1.EnableServiceResponse,
    "EncapsulatedContent": encapsulatedContent_1.EncapsulatedContent,
    "EncryptedContent": encryptedContent_1.EncryptedContent,
    "EnvelopedData": envelopedData_1.EnvelopedData,
    "EventNotification": eventNotification_1.EventNotification,
    "ExternalPlatform": externalPlatform_1.ExternalPlatform,
    "GeographicCoordinates": geographicCoordinates_1.GeographicCoordinates,
    "Geolocation": geolocation_1.Geolocation,
    "GetTotalsRequest": getTotalsRequest_1.GetTotalsRequest,
    "GetTotalsResponse": getTotalsResponse_1.GetTotalsResponse,
    "HostStatus": hostStatus_1.HostStatus,
    "ICCResetData": iCCResetData_1.ICCResetData,
    "Input": input_1.Input,
    "InputData": inputData_1.InputData,
    "InputRequest": inputRequest_1.InputRequest,
    "InputResponse": inputResponse_1.InputResponse,
    "InputResult": inputResult_1.InputResult,
    "InputUpdate": inputUpdate_1.InputUpdate,
    "Instalment": instalment_1.Instalment,
    "Issuer": issuer_1.Issuer,
    "IssuerAndSerialNumber": issuerAndSerialNumber_1.IssuerAndSerialNumber,
    "LoginRequest": loginRequest_1.LoginRequest,
    "LoginResponse": loginResponse_1.LoginResponse,
    "LogoutRequest": logoutRequest_1.LogoutRequest,
    "LogoutResponse": logoutResponse_1.LogoutResponse,
    "LoyaltyAccount": loyaltyAccount_1.LoyaltyAccount,
    "LoyaltyAccountId": loyaltyAccountId_1.LoyaltyAccountId,
    "LoyaltyAccountReq": loyaltyAccountReq_1.LoyaltyAccountReq,
    "LoyaltyAccountStatus": loyaltyAccountStatus_1.LoyaltyAccountStatus,
    "LoyaltyAcquirerData": loyaltyAcquirerData_1.LoyaltyAcquirerData,
    "LoyaltyAmount": loyaltyAmount_1.LoyaltyAmount,
    "LoyaltyData": loyaltyData_1.LoyaltyData,
    "LoyaltyRequest": loyaltyRequest_1.LoyaltyRequest,
    "LoyaltyResponse": loyaltyResponse_1.LoyaltyResponse,
    "LoyaltyResult": loyaltyResult_1.LoyaltyResult,
    "LoyaltyTotals": loyaltyTotals_1.LoyaltyTotals,
    "LoyaltyTransaction": loyaltyTransaction_1.LoyaltyTransaction,
    "MenuEntry": menuEntry_1.MenuEntry,
    "MerchantDevice": merchantDevice_1.MerchantDevice,
    "MessageHeader": messageHeader_1.MessageHeader,
    "MessageReference": messageReference_1.MessageReference,
    "MobileData": mobileData_1.MobileData,
    "NamedKeyEncryptedData": namedKeyEncryptedData_1.NamedKeyEncryptedData,
    "NexoDerivedKey": nexoDerivedKey_1.NexoDerivedKey,
    "OriginalPOITransaction": originalPOITransaction_1.OriginalPOITransaction,
    "OutputBarcode": outputBarcode_1.OutputBarcode,
    "OutputContent": outputContent_1.OutputContent,
    "OutputResult": outputResult_1.OutputResult,
    "OutputText": outputText_1.OutputText,
    "PINRequest": pINRequest_1.PINRequest,
    "PINResponse": pINResponse_1.PINResponse,
    "POIData": pOIData_1.POIData,
    "POIProfile": pOIProfile_1.POIProfile,
    "POISoftware": pOISoftware_1.POISoftware,
    "POIStatus": pOIStatus_1.POIStatus,
    "POISystemData": pOISystemData_1.POISystemData,
    "POITerminalData": pOITerminalData_1.POITerminalData,
    "Parameter": parameter_1.Parameter,
    "PaymentAccountReq": paymentAccountReq_1.PaymentAccountReq,
    "PaymentAccountStatus": paymentAccountStatus_1.PaymentAccountStatus,
    "PaymentAcquirerData": paymentAcquirerData_1.PaymentAcquirerData,
    "PaymentData": paymentData_1.PaymentData,
    "PaymentInstrumentData": paymentInstrumentData_1.PaymentInstrumentData,
    "PaymentReceipt": paymentReceipt_1.PaymentReceipt,
    "PaymentRequest": paymentRequest_1.PaymentRequest,
    "PaymentResponse": paymentResponse_1.PaymentResponse,
    "PaymentResult": paymentResult_1.PaymentResult,
    "PaymentToken": paymentToken_1.PaymentToken,
    "PaymentTotals": paymentTotals_1.PaymentTotals,
    "PaymentTransaction": paymentTransaction_1.PaymentTransaction,
    "PerformedTransaction": performedTransaction_1.PerformedTransaction,
    "PredefinedContent": predefinedContent_1.PredefinedContent,
    "PrintOutput": printOutput_1.PrintOutput,
    "PrintRequest": printRequest_1.PrintRequest,
    "PrintResponse": printResponse_1.PrintResponse,
    "Rebates": rebates_1.Rebates,
    "ReconciliationRequest": reconciliationRequest_1.ReconciliationRequest,
    "ReconciliationResponse": reconciliationResponse_1.ReconciliationResponse,
    "RelativeDistinguishedName": relativeDistinguishedName_1.RelativeDistinguishedName,
    "RepeatedMessageResponse": repeatedMessageResponse_1.RepeatedMessageResponse,
    "RepeatedResponseMessageBody": repeatedResponseMessageBody_1.RepeatedResponseMessageBody,
    "Response": response_1.Response,
    "ReversalRequest": reversalRequest_1.ReversalRequest,
    "ReversalResponse": reversalResponse_1.ReversalResponse,
    "SaleData": saleData_1.SaleData,
    "SaleItem": saleItem_1.SaleItem,
    "SaleItemRebate": saleItemRebate_1.SaleItemRebate,
    "SaleProfile": saleProfile_1.SaleProfile,
    "SaleSoftware": saleSoftware_1.SaleSoftware,
    "SaleTerminalData": saleTerminalData_1.SaleTerminalData,
    "SaleToAcquirerData": saleToAcquirerData_1.SaleToAcquirerData,
    "SaleToIssuerData": saleToIssuerData_1.SaleToIssuerData,
    "SaleToPOIRequest": saleToPOIRequest_1.SaleToPOIRequest,
    "SaleToPOIResponse": saleToPOIResponse_1.SaleToPOIResponse,
    "SaleToPOISecuredMessage": saleToPOISecuredMessage_1.SaleToPOISecuredMessage,
    "SecurityKey": securityKey_1.SecurityKey,
    "SecurityTrailer": securityTrailer_1.SecurityTrailer,
    "SensitiveCardData": sensitiveCardData_1.SensitiveCardData,
    "SensitiveMobileData": sensitiveMobileData_1.SensitiveMobileData,
    "ShopperInteractionDevice": shopperInteractionDevice_1.ShopperInteractionDevice,
    "SignaturePoint": signaturePoint_1.SignaturePoint,
    "SignedData": signedData_1.SignedData,
    "Signer": signer_1.Signer,
    "SignerIdentifier": signerIdentifier_1.SignerIdentifier,
    "SoundContent": soundContent_1.SoundContent,
    "SoundRequest": soundRequest_1.SoundRequest,
    "SoundResponse": soundResponse_1.SoundResponse,
    "SponsoredMerchant": sponsoredMerchant_1.SponsoredMerchant,
    "StoredValueAccountId": storedValueAccountId_1.StoredValueAccountId,
    "StoredValueAccountStatus": storedValueAccountStatus_1.StoredValueAccountStatus,
    "StoredValueData": storedValueData_1.StoredValueData,
    "StoredValueRequest": storedValueRequest_1.StoredValueRequest,
    "StoredValueResponse": storedValueResponse_1.StoredValueResponse,
    "StoredValueResult": storedValueResult_1.StoredValueResult,
    "TerminalApiRequest": terminalApiRequest_1.TerminalApiRequest,
    "TerminalApiResponse": terminalApiResponse_1.TerminalApiResponse,
    "TerminalApiSecuredRequest": terminalApiSecuredRequest_1.TerminalApiSecuredRequest,
    "TerminalApiSecuredResponse": terminalApiSecuredResponse_1.TerminalApiSecuredResponse,
    "TotalFilter": totalFilter_1.TotalFilter,
    "TrackData": trackData_1.TrackData,
    "TransactionConditions": transactionConditions_1.TransactionConditions,
    "TransactionIdentification": transactionIdentification_1.TransactionIdentification,
    "TransactionStatusRequest": transactionStatusRequest_1.TransactionStatusRequest,
    "TransactionStatusResponse": transactionStatusResponse_1.TransactionStatusResponse,
    "TransactionToPerform": transactionToPerform_1.TransactionToPerform,
    "TransactionTotals": transactionTotals_1.TransactionTotals,
    "TransmitRequest": transmitRequest_1.TransmitRequest,
    "TransmitResponse": transmitResponse_1.TransmitResponse,
    "UTMCoordinates": uTMCoordinates_1.UTMCoordinates,
};
var ObjectSerializer = (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
//# sourceMappingURL=models.js.map