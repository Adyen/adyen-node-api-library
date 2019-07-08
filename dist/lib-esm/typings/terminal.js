// To parse this data:
//
//   import { Convert, TerminalApiRequest, TerminalApiResponse, TerminalApiSecuredRequest, TerminalApiSecuredResponse, NexoDerivedKey, SaleToPoiSecuredMessage, SecurityKey, SecurityTrailer, SaleToPoiRequest, SaleToPoiResponse, MessageHeader, AbortRequest, BalanceInquiryRequest, BatchRequest, CardAcquisitionRequest, AdminRequest, DiagnosisRequest, DisplayRequest, EnableServiceRequest, EventNotification, GetTotalsRequest, InputRequest, InputUpdate, LoginRequest, LogoutRequest, LoyaltyRequest, PaymentRequest, PinRequest, PrintRequest, CardReaderInitRequest, CardReaderApduRequest, CardReaderPowerOffRequest, ReconciliationRequest, ReversalRequest, SoundRequest, StoredValueRequest, TransactionStatusRequest, TransmitRequest, ContentInformation, BalanceInquiryResponse, BatchResponse, CardAcquisitionResponse, AdminResponse, DiagnosisResponse, DisplayResponse, EnableServiceResponse, GetTotalsResponse, InputResponse, LoginResponse, LogoutResponse, LoyaltyResponse, PaymentResponse, PinResponse, PrintResponse, CardReaderInitResponse, CardReaderApduResponse, CardReaderPowerOffResponse, ReconciliationResponse, ReversalResponse, SoundResponse, StoredValueResponse, TransactionStatusResponse, TransmitResponse, MessageReference, DisplayOutput, PaymentAccountReq, LoyaltyAccountReq, TransactionToPerform, SaleData, CardAcquisitionTransaction, TotalFilter, InputData, OutputContent, MenuEntry, SaleSoftware, SaleTerminalData, LoyaltyTransaction, LoyaltyData, PaymentTransaction, PaymentData, CardholderPin, PrintOutput, OriginalPoiTransaction, CustomerOrder, SoundContent, StoredValueData, EnvelopedData, AuthenticatedData, SignedData, DigestedData, NamedKeyEncryptedData, Response, PaymentAccountStatus, LoyaltyAccountStatus, PerformedTransaction, PoiData, PaymentInstrumentData, LoyaltyAccount, PoiStatus, HostStatus, OutputResult, TransactionTotals, InputResult, PoiSystemData, LoyaltyResult, PaymentReceipt, PaymentResult, TrackData, IccResetData, StoredValueResult, RepeatedMessageResponse, TransactionIdentification, LoyaltyAccountId, SponsoredMerchant, SaleToIssuerData, PredefinedContent, OutputText, OutputBarcode, SaleProfile, TransactionConditions, SaleItem, LoyaltyAmount, AmountsReq, Instalment, StoredValueAccountId, EncryptedContent, AlgorithmIdentifier, EncapsulatedContent, Signer, PaymentAcquirerData, CardData, CheckData, MobileData, CashHandlingDevice, PaymentTotals, LoyaltyTotals, Input, PoiSoftware, PoiTerminalData, LoyaltyAcquirerData, Rebates, AmountsResp, CurrencyConversion, CapturedSignature, StoredValueAccountStatus, RepeatedResponseMessageBody, Parameter, SignerIdentifier, SensitiveCardData, AllowedProduct, PaymentToken, Geolocation, SensitiveMobileData, CoinsOrBills, PoiProfile, SaleItemRebate, Amount, AreaSize, SignaturePoint, IssuerAndSerialNumber, GeographicCoordinates, UtmCoordinates, Issuer, RelativeDistinguishedName, MessageClassType, MessageCategoryType, MessageType, ServicesEnabledType, TransactionActionType, EventToNotifyType, TotalDetailsType, TokenRequestedType, CustomerOrderReqType, PinRequestType, PinFormatType, ForceEntryModeType, ReconciliationType, ReversalReasonType, ResponseModeType, SoundActionType, DocumentQualifierType, ContentType, EntryModeType, DeviceType, InfoQualifyType, AccountType, LoyaltyHandlingType, PaymentType, InputCommandType, OutputFormatType, MenuEntryTagType, SaleCapabilitiesType, TerminalEnvironmentType, LoyaltyTransactionType, SoundFormatType, StoredValueTransactionType, VersionType, ResultType, ErrorConditionType, LoyaltyUnitType, PaymentInstrumentType, GlobalStatusType, PrinterStatusType, AuthenticationMethodType, TrackFormatType, IdentificationType, IdentificationSupportType, ColorType, CharacterWidthType, CharacterHeightType, CharacterStyleType, AlignmentType, BarcodeType, ServiceProfilesType, GenericProfileType, UnitOfMeasureType, InstalmentType, PeriodUnitType, StoredValueAccountType, AlgorithmType, CheckTypeCodeType, TransactionType, PoiCapabilitiesType } from "./file";
//
//   const terminalApiRequest = Convert.toTerminalApiRequest(json);
//   const terminalApiResponse = Convert.toTerminalApiResponse(json);
//   const terminalApiSecuredRequest = Convert.toTerminalApiSecuredRequest(json);
//   const terminalApiSecuredResponse = Convert.toTerminalApiSecuredResponse(json);
//   const nexoDerivedKey = Convert.toNexoDerivedKey(json);
//   const saleToPoiSecuredMessage = Convert.toSaleToPoiSecuredMessage(json);
//   const securityKey = Convert.toSecurityKey(json);
//   const securityTrailer = Convert.toSecurityTrailer(json);
//   const saleToPoiRequest = Convert.toSaleToPoiRequest(json);
//   const saleToPoiResponse = Convert.toSaleToPoiResponse(json);
//   const messageHeader = Convert.toMessageHeader(json);
//   const abortRequest = Convert.toAbortRequest(json);
//   const balanceInquiryRequest = Convert.toBalanceInquiryRequest(json);
//   const batchRequest = Convert.toBatchRequest(json);
//   const cardAcquisitionRequest = Convert.toCardAcquisitionRequest(json);
//   const adminRequest = Convert.toAdminRequest(json);
//   const diagnosisRequest = Convert.toDiagnosisRequest(json);
//   const displayRequest = Convert.toDisplayRequest(json);
//   const enableServiceRequest = Convert.toEnableServiceRequest(json);
//   const eventNotification = Convert.toEventNotification(json);
//   const getTotalsRequest = Convert.toGetTotalsRequest(json);
//   const inputRequest = Convert.toInputRequest(json);
//   const inputUpdate = Convert.toInputUpdate(json);
//   const loginRequest = Convert.toLoginRequest(json);
//   const logoutRequest = Convert.toLogoutRequest(json);
//   const loyaltyRequest = Convert.toLoyaltyRequest(json);
//   const paymentRequest = Convert.toPaymentRequest(json);
//   const pinRequest = Convert.toPinRequest(json);
//   const printRequest = Convert.toPrintRequest(json);
//   const cardReaderInitRequest = Convert.toCardReaderInitRequest(json);
//   const cardReaderApduRequest = Convert.toCardReaderApduRequest(json);
//   const cardReaderPowerOffRequest = Convert.toCardReaderPowerOffRequest(json);
//   const reconciliationRequest = Convert.toReconciliationRequest(json);
//   const reversalRequest = Convert.toReversalRequest(json);
//   const soundRequest = Convert.toSoundRequest(json);
//   const storedValueRequest = Convert.toStoredValueRequest(json);
//   const transactionStatusRequest = Convert.toTransactionStatusRequest(json);
//   const transmitRequest = Convert.toTransmitRequest(json);
//   const contentInformation = Convert.toContentInformation(json);
//   const balanceInquiryResponse = Convert.toBalanceInquiryResponse(json);
//   const batchResponse = Convert.toBatchResponse(json);
//   const cardAcquisitionResponse = Convert.toCardAcquisitionResponse(json);
//   const adminResponse = Convert.toAdminResponse(json);
//   const diagnosisResponse = Convert.toDiagnosisResponse(json);
//   const displayResponse = Convert.toDisplayResponse(json);
//   const enableServiceResponse = Convert.toEnableServiceResponse(json);
//   const getTotalsResponse = Convert.toGetTotalsResponse(json);
//   const inputResponse = Convert.toInputResponse(json);
//   const loginResponse = Convert.toLoginResponse(json);
//   const logoutResponse = Convert.toLogoutResponse(json);
//   const loyaltyResponse = Convert.toLoyaltyResponse(json);
//   const paymentResponse = Convert.toPaymentResponse(json);
//   const pinResponse = Convert.toPinResponse(json);
//   const printResponse = Convert.toPrintResponse(json);
//   const cardReaderInitResponse = Convert.toCardReaderInitResponse(json);
//   const cardReaderApduResponse = Convert.toCardReaderApduResponse(json);
//   const cardReaderPowerOffResponse = Convert.toCardReaderPowerOffResponse(json);
//   const reconciliationResponse = Convert.toReconciliationResponse(json);
//   const reversalResponse = Convert.toReversalResponse(json);
//   const soundResponse = Convert.toSoundResponse(json);
//   const storedValueResponse = Convert.toStoredValueResponse(json);
//   const transactionStatusResponse = Convert.toTransactionStatusResponse(json);
//   const transmitResponse = Convert.toTransmitResponse(json);
//   const messageReference = Convert.toMessageReference(json);
//   const displayOutput = Convert.toDisplayOutput(json);
//   const paymentAccountReq = Convert.toPaymentAccountReq(json);
//   const loyaltyAccountReq = Convert.toLoyaltyAccountReq(json);
//   const transactionToPerform = Convert.toTransactionToPerform(json);
//   const saleData = Convert.toSaleData(json);
//   const cardAcquisitionTransaction = Convert.toCardAcquisitionTransaction(json);
//   const xmlGregorianCalendar = Convert.toXmlGregorianCalendar(json);
//   const totalFilter = Convert.toTotalFilter(json);
//   const inputData = Convert.toInputData(json);
//   const outputContent = Convert.toOutputContent(json);
//   const menuEntry = Convert.toMenuEntry(json);
//   const saleSoftware = Convert.toSaleSoftware(json);
//   const saleTerminalData = Convert.toSaleTerminalData(json);
//   const loyaltyTransaction = Convert.toLoyaltyTransaction(json);
//   const loyaltyData = Convert.toLoyaltyData(json);
//   const paymentTransaction = Convert.toPaymentTransaction(json);
//   const paymentData = Convert.toPaymentData(json);
//   const cardholderPin = Convert.toCardholderPin(json);
//   const printOutput = Convert.toPrintOutput(json);
//   const originalPoiTransaction = Convert.toOriginalPoiTransaction(json);
//   const customerOrder = Convert.toCustomerOrder(json);
//   const soundContent = Convert.toSoundContent(json);
//   const storedValueData = Convert.toStoredValueData(json);
//   const envelopedData = Convert.toEnvelopedData(json);
//   const authenticatedData = Convert.toAuthenticatedData(json);
//   const signedData = Convert.toSignedData(json);
//   const digestedData = Convert.toDigestedData(json);
//   const namedKeyEncryptedData = Convert.toNamedKeyEncryptedData(json);
//   const response = Convert.toResponse(json);
//   const paymentAccountStatus = Convert.toPaymentAccountStatus(json);
//   const loyaltyAccountStatus = Convert.toLoyaltyAccountStatus(json);
//   const performedTransaction = Convert.toPerformedTransaction(json);
//   const poiData = Convert.toPoiData(json);
//   const paymentInstrumentData = Convert.toPaymentInstrumentData(json);
//   const loyaltyAccount = Convert.toLoyaltyAccount(json);
//   const poiStatus = Convert.toPoiStatus(json);
//   const hostStatus = Convert.toHostStatus(json);
//   const outputResult = Convert.toOutputResult(json);
//   const transactionTotals = Convert.toTransactionTotals(json);
//   const inputResult = Convert.toInputResult(json);
//   const poiSystemData = Convert.toPoiSystemData(json);
//   const loyaltyResult = Convert.toLoyaltyResult(json);
//   const paymentReceipt = Convert.toPaymentReceipt(json);
//   const paymentResult = Convert.toPaymentResult(json);
//   const trackData = Convert.toTrackData(json);
//   const iccResetData = Convert.toIccResetData(json);
//   const storedValueResult = Convert.toStoredValueResult(json);
//   const repeatedMessageResponse = Convert.toRepeatedMessageResponse(json);
//   const transactionIdentification = Convert.toTransactionIdentification(json);
//   const loyaltyAccountId = Convert.toLoyaltyAccountId(json);
//   const sponsoredMerchant = Convert.toSponsoredMerchant(json);
//   const saleToIssuerData = Convert.toSaleToIssuerData(json);
//   const cloneable = Convert.toCloneable(json);
//   const predefinedContent = Convert.toPredefinedContent(json);
//   const outputText = Convert.toOutputText(json);
//   const outputBarcode = Convert.toOutputBarcode(json);
//   const saleProfile = Convert.toSaleProfile(json);
//   const transactionConditions = Convert.toTransactionConditions(json);
//   const saleItem = Convert.toSaleItem(json);
//   const loyaltyAmount = Convert.toLoyaltyAmount(json);
//   const amountsReq = Convert.toAmountsReq(json);
//   const instalment = Convert.toInstalment(json);
//   const storedValueAccountId = Convert.toStoredValueAccountId(json);
//   const encryptedContent = Convert.toEncryptedContent(json);
//   const algorithmIdentifier = Convert.toAlgorithmIdentifier(json);
//   const encapsulatedContent = Convert.toEncapsulatedContent(json);
//   const signer = Convert.toSigner(json);
//   const paymentAcquirerData = Convert.toPaymentAcquirerData(json);
//   const cardData = Convert.toCardData(json);
//   const checkData = Convert.toCheckData(json);
//   const mobileData = Convert.toMobileData(json);
//   const cashHandlingDevice = Convert.toCashHandlingDevice(json);
//   const paymentTotals = Convert.toPaymentTotals(json);
//   const loyaltyTotals = Convert.toLoyaltyTotals(json);
//   const input = Convert.toInput(json);
//   const poiSoftware = Convert.toPoiSoftware(json);
//   const poiTerminalData = Convert.toPoiTerminalData(json);
//   const loyaltyAcquirerData = Convert.toLoyaltyAcquirerData(json);
//   const rebates = Convert.toRebates(json);
//   const amountsResp = Convert.toAmountsResp(json);
//   const currencyConversion = Convert.toCurrencyConversion(json);
//   const capturedSignature = Convert.toCapturedSignature(json);
//   const storedValueAccountStatus = Convert.toStoredValueAccountStatus(json);
//   const repeatedResponseMessageBody = Convert.toRepeatedResponseMessageBody(json);
//   const parameter = Convert.toParameter(json);
//   const signerIdentifier = Convert.toSignerIdentifier(json);
//   const sensitiveCardData = Convert.toSensitiveCardData(json);
//   const allowedProduct = Convert.toAllowedProduct(json);
//   const paymentToken = Convert.toPaymentToken(json);
//   const geolocation = Convert.toGeolocation(json);
//   const sensitiveMobileData = Convert.toSensitiveMobileData(json);
//   const coinsOrBills = Convert.toCoinsOrBills(json);
//   const poiProfile = Convert.toPoiProfile(json);
//   const saleItemRebate = Convert.toSaleItemRebate(json);
//   const amount = Convert.toAmount(json);
//   const areaSize = Convert.toAreaSize(json);
//   const signaturePoint = Convert.toSignaturePoint(json);
//   const issuerAndSerialNumber = Convert.toIssuerAndSerialNumber(json);
//   const geographicCoordinates = Convert.toGeographicCoordinates(json);
//   const utmCoordinates = Convert.toUtmCoordinates(json);
//   const issuer = Convert.toIssuer(json);
//   const relativeDistinguishedName = Convert.toRelativeDistinguishedName(json);
//   const messageClassType = Convert.toMessageClassType(json);
//   const messageCategoryType = Convert.toMessageCategoryType(json);
//   const messageType = Convert.toMessageType(json);
//   const servicesEnabledType = Convert.toServicesEnabledType(json);
//   const transactionActionType = Convert.toTransactionActionType(json);
//   const eventToNotifyType = Convert.toEventToNotifyType(json);
//   const totalDetailsType = Convert.toTotalDetailsType(json);
//   const tokenRequestedType = Convert.toTokenRequestedType(json);
//   const customerOrderReqType = Convert.toCustomerOrderReqType(json);
//   const pinRequestType = Convert.toPinRequestType(json);
//   const pinFormatType = Convert.toPinFormatType(json);
//   const forceEntryModeType = Convert.toForceEntryModeType(json);
//   const reconciliationType = Convert.toReconciliationType(json);
//   const reversalReasonType = Convert.toReversalReasonType(json);
//   const responseModeType = Convert.toResponseModeType(json);
//   const soundActionType = Convert.toSoundActionType(json);
//   const documentQualifierType = Convert.toDocumentQualifierType(json);
//   const contentType = Convert.toContentType(json);
//   const entryModeType = Convert.toEntryModeType(json);
//   const deviceType = Convert.toDeviceType(json);
//   const infoQualifyType = Convert.toInfoQualifyType(json);
//   const accountType = Convert.toAccountType(json);
//   const loyaltyHandlingType = Convert.toLoyaltyHandlingType(json);
//   const paymentType = Convert.toPaymentType(json);
//   const inputCommandType = Convert.toInputCommandType(json);
//   const outputFormatType = Convert.toOutputFormatType(json);
//   const menuEntryTagType = Convert.toMenuEntryTagType(json);
//   const saleCapabilitiesType = Convert.toSaleCapabilitiesType(json);
//   const terminalEnvironmentType = Convert.toTerminalEnvironmentType(json);
//   const loyaltyTransactionType = Convert.toLoyaltyTransactionType(json);
//   const soundFormatType = Convert.toSoundFormatType(json);
//   const storedValueTransactionType = Convert.toStoredValueTransactionType(json);
//   const versionType = Convert.toVersionType(json);
//   const resultType = Convert.toResultType(json);
//   const errorConditionType = Convert.toErrorConditionType(json);
//   const loyaltyUnitType = Convert.toLoyaltyUnitType(json);
//   const paymentInstrumentType = Convert.toPaymentInstrumentType(json);
//   const globalStatusType = Convert.toGlobalStatusType(json);
//   const printerStatusType = Convert.toPrinterStatusType(json);
//   const authenticationMethodType = Convert.toAuthenticationMethodType(json);
//   const trackFormatType = Convert.toTrackFormatType(json);
//   const identificationType = Convert.toIdentificationType(json);
//   const identificationSupportType = Convert.toIdentificationSupportType(json);
//   const colorType = Convert.toColorType(json);
//   const characterWidthType = Convert.toCharacterWidthType(json);
//   const characterHeightType = Convert.toCharacterHeightType(json);
//   const characterStyleType = Convert.toCharacterStyleType(json);
//   const alignmentType = Convert.toAlignmentType(json);
//   const barcodeType = Convert.toBarcodeType(json);
//   const serviceProfilesType = Convert.toServiceProfilesType(json);
//   const genericProfileType = Convert.toGenericProfileType(json);
//   const unitOfMeasureType = Convert.toUnitOfMeasureType(json);
//   const instalmentType = Convert.toInstalmentType(json);
//   const periodUnitType = Convert.toPeriodUnitType(json);
//   const storedValueAccountType = Convert.toStoredValueAccountType(json);
//   const algorithmType = Convert.toAlgorithmType(json);
//   const checkTypeCodeType = Convert.toCheckTypeCodeType(json);
//   const transactionType = Convert.toTransactionType(json);
//   const poiCapabilitiesType = Convert.toPoiCapabilitiesType(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.
export var DeviceType;
(function (DeviceType) {
    DeviceType["CashierDisplay"] = "CashierDisplay";
    DeviceType["CashierInput"] = "CashierInput";
    DeviceType["CustomerDisplay"] = "CustomerDisplay";
    DeviceType["CustomerInput"] = "CustomerInput";
})(DeviceType || (DeviceType = {}));
export var InfoQualifyType;
(function (InfoQualifyType) {
    InfoQualifyType["CustomerAssistance"] = "CustomerAssistance";
    InfoQualifyType["Display"] = "Display";
    InfoQualifyType["Document"] = "Document";
    InfoQualifyType["Error"] = "Error";
    InfoQualifyType["Input"] = "Input";
    InfoQualifyType["PoiReplication"] = "POIReplication";
    InfoQualifyType["Receipt"] = "Receipt";
    InfoQualifyType["Sound"] = "Sound";
    InfoQualifyType["Status"] = "Status";
    InfoQualifyType["Voucher"] = "Voucher";
})(InfoQualifyType || (InfoQualifyType = {}));
export var MenuEntryTagType;
(function (MenuEntryTagType) {
    MenuEntryTagType["NonSelectable"] = "NonSelectable";
    MenuEntryTagType["NonSelectableSubMenu"] = "NonSelectableSubMenu";
    MenuEntryTagType["Selectable"] = "Selectable";
    MenuEntryTagType["SubMenu"] = "SubMenu";
})(MenuEntryTagType || (MenuEntryTagType = {}));
export var OutputFormatType;
(function (OutputFormatType) {
    OutputFormatType["BarCode"] = "BarCode";
    OutputFormatType["MessageRef"] = "MessageRef";
    OutputFormatType["Text"] = "Text";
    OutputFormatType["Xhtml"] = "XHTML";
})(OutputFormatType || (OutputFormatType = {}));
export var AlignmentType;
(function (AlignmentType) {
    AlignmentType["Centred"] = "Centred";
    AlignmentType["Justified"] = "Justified";
    AlignmentType["Left"] = "Left";
    AlignmentType["Right"] = "Right";
})(AlignmentType || (AlignmentType = {}));
export var CharacterHeightType;
(function (CharacterHeightType) {
    CharacterHeightType["DoubleHeight"] = "DoubleHeight";
    CharacterHeightType["HalfHeight"] = "HalfHeight";
    CharacterHeightType["SingleHeight"] = "SingleHeight";
})(CharacterHeightType || (CharacterHeightType = {}));
export var CharacterStyleType;
(function (CharacterStyleType) {
    CharacterStyleType["Bold"] = "Bold";
    CharacterStyleType["Italic"] = "Italic";
    CharacterStyleType["Normal"] = "Normal";
    CharacterStyleType["Underlined"] = "Underlined";
})(CharacterStyleType || (CharacterStyleType = {}));
export var CharacterWidthType;
(function (CharacterWidthType) {
    CharacterWidthType["DoubleWidth"] = "DoubleWidth";
    CharacterWidthType["SingleWidth"] = "SingleWidth";
})(CharacterWidthType || (CharacterWidthType = {}));
export var ColorType;
(function (ColorType) {
    ColorType["Black"] = "Black";
    ColorType["Blue"] = "Blue";
    ColorType["Cyan"] = "Cyan";
    ColorType["Green"] = "Green";
    ColorType["Magenta"] = "Magenta";
    ColorType["Red"] = "Red";
    ColorType["White"] = "White";
    ColorType["Yellow"] = "Yellow";
})(ColorType || (ColorType = {}));
export var BarcodeType;
(function (BarcodeType) {
    BarcodeType["Code128"] = "Code128";
    BarcodeType["Code25"] = "Code25";
    BarcodeType["Ean13"] = "EAN13";
    BarcodeType["Ean8"] = "EAN8";
    BarcodeType["Pdf417"] = "PDF417";
    BarcodeType["Qrcode"] = "QRCODE";
    BarcodeType["Upca"] = "UPCA";
})(BarcodeType || (BarcodeType = {}));
export var MessageCategoryType;
(function (MessageCategoryType) {
    MessageCategoryType["Abort"] = "Abort";
    MessageCategoryType["Admin"] = "Admin";
    MessageCategoryType["BalanceInquiry"] = "BalanceInquiry";
    MessageCategoryType["Batch"] = "Batch";
    MessageCategoryType["CardAcquisition"] = "CardAcquisition";
    MessageCategoryType["CardReaderApdu"] = "CardReaderAPDU";
    MessageCategoryType["CardReaderInit"] = "CardReaderInit";
    MessageCategoryType["CardReaderPowerOff"] = "CardReaderPowerOff";
    MessageCategoryType["Diagnosis"] = "Diagnosis";
    MessageCategoryType["Display"] = "Display";
    MessageCategoryType["EnableService"] = "EnableService";
    MessageCategoryType["Event"] = "Event";
    MessageCategoryType["GetTotals"] = "GetTotals";
    MessageCategoryType["Input"] = "Input";
    MessageCategoryType["InputUpdate"] = "InputUpdate";
    MessageCategoryType["Login"] = "Login";
    MessageCategoryType["Logout"] = "Logout";
    MessageCategoryType["Loyalty"] = "Loyalty";
    MessageCategoryType["Payment"] = "Payment";
    MessageCategoryType["Pin"] = "PIN";
    MessageCategoryType["Print"] = "Print";
    MessageCategoryType["Reconciliation"] = "Reconciliation";
    MessageCategoryType["Reversal"] = "Reversal";
    MessageCategoryType["Sound"] = "Sound";
    MessageCategoryType["StoredValue"] = "StoredValue";
    MessageCategoryType["TransactionStatus"] = "TransactionStatus";
    MessageCategoryType["Transmit"] = "Transmit";
})(MessageCategoryType || (MessageCategoryType = {}));
export var EntryModeType;
(function (EntryModeType) {
    EntryModeType["Contactless"] = "Contactless";
    EntryModeType["File"] = "File";
    EntryModeType["Icc"] = "ICC";
    EntryModeType["Keyed"] = "Keyed";
    EntryModeType["MagStripe"] = "MagStripe";
    EntryModeType["Manual"] = "Manual";
    EntryModeType["Mobile"] = "Mobile";
    EntryModeType["Rfid"] = "RFID";
    EntryModeType["Scanned"] = "Scanned";
    EntryModeType["SynchronousIcc"] = "SynchronousICC";
    EntryModeType["Tapped"] = "Tapped";
})(EntryModeType || (EntryModeType = {}));
export var IdentificationSupportType;
(function (IdentificationSupportType) {
    IdentificationSupportType["HybridCard"] = "HybridCard";
    IdentificationSupportType["LinkedCard"] = "LinkedCard";
    IdentificationSupportType["LoyaltyCard"] = "LoyaltyCard";
    IdentificationSupportType["NoCard"] = "NoCard";
})(IdentificationSupportType || (IdentificationSupportType = {}));
export var IdentificationType;
(function (IdentificationType) {
    IdentificationType["AccountNumber"] = "AccountNumber";
    IdentificationType["BarCode"] = "BarCode";
    IdentificationType["IsoTrack2"] = "ISOTrack2";
    IdentificationType["Pan"] = "PAN";
    IdentificationType["PhoneNumber"] = "PhoneNumber";
})(IdentificationType || (IdentificationType = {}));
export var AccountType;
(function (AccountType) {
    AccountType["CardTotals"] = "CardTotals";
    AccountType["Checking"] = "Checking";
    AccountType["CreditCard"] = "CreditCard";
    AccountType["Default"] = "Default";
    AccountType["EpurseCard"] = "EpurseCard";
    AccountType["Investment"] = "Investment";
    AccountType["Savings"] = "Savings";
    AccountType["Universal"] = "Universal";
})(AccountType || (AccountType = {}));
export var TokenRequestedType;
(function (TokenRequestedType) {
    TokenRequestedType["Customer"] = "Customer";
    TokenRequestedType["Transaction"] = "Transaction";
})(TokenRequestedType || (TokenRequestedType = {}));
export var ContentType;
(function (ContentType) {
    ContentType["IdCtAuthData"] = "id-ct-authData";
    ContentType["IdData"] = "id-data";
    ContentType["IdDigestedData"] = "id-digestedData";
    ContentType["IdEncryptedData"] = "id-encryptedData";
    ContentType["IdEnvelopedData"] = "id-envelopedData";
    ContentType["IdSignedData"] = "id-signedData";
})(ContentType || (ContentType = {}));
export var AlgorithmType;
(function (AlgorithmType) {
    AlgorithmType["DesEde3Cbc"] = "des-ede3-cbc";
    AlgorithmType["DesEde3Ecb"] = "des-ede3-ecb";
    AlgorithmType["IdDukptWrap"] = "id-dukpt-wrap";
    AlgorithmType["IdRetailCbcMac"] = "id-retail-cbc-mac";
    AlgorithmType["IdRetailCbcMacSha256"] = "id-retail-cbc-mac-sha-256";
    AlgorithmType["IdSha256"] = "id-sha256";
    AlgorithmType["IdUkptWrap"] = "id-ukpt-wrap ";
    AlgorithmType["RsaEncryption"] = "rsaEncryption";
    AlgorithmType["Sha256WithRsaEncryption"] = "sha256WithRSAEncryption";
})(AlgorithmType || (AlgorithmType = {}));
export var VersionType;
(function (VersionType) {
    VersionType["V0"] = "v0";
    VersionType["V1"] = "v1";
    VersionType["V2"] = "v2";
    VersionType["V3"] = "v3";
    VersionType["V4"] = "v4";
    VersionType["V5"] = "v5";
})(VersionType || (VersionType = {}));
export var TrackFormatType;
(function (TrackFormatType) {
    TrackFormatType["Aamva"] = "AAMVA";
    TrackFormatType["Cmc7"] = "CMC-7";
    TrackFormatType["E13B"] = "E-13B";
    TrackFormatType["Iso"] = "ISO";
    TrackFormatType["JisI"] = "JIS-I";
    TrackFormatType["JisIi"] = "JIS-II";
})(TrackFormatType || (TrackFormatType = {}));
export var CheckTypeCodeType;
(function (CheckTypeCodeType) {
    CheckTypeCodeType["Company"] = "Company";
    CheckTypeCodeType["Personal"] = "Personal";
})(CheckTypeCodeType || (CheckTypeCodeType = {}));
export var PaymentInstrumentType;
(function (PaymentInstrumentType) {
    PaymentInstrumentType["Card"] = "Card";
    PaymentInstrumentType["Cash"] = "Cash";
    PaymentInstrumentType["Check"] = "Check";
    PaymentInstrumentType["Mobile"] = "Mobile";
    PaymentInstrumentType["StoredValue"] = "StoredValue";
})(PaymentInstrumentType || (PaymentInstrumentType = {}));
export var LoyaltyUnitType;
(function (LoyaltyUnitType) {
    LoyaltyUnitType["Monetary"] = "Monetary";
    LoyaltyUnitType["Point"] = "Point";
})(LoyaltyUnitType || (LoyaltyUnitType = {}));
export var LoyaltyTransactionType;
(function (LoyaltyTransactionType) {
    LoyaltyTransactionType["Award"] = "Award";
    LoyaltyTransactionType["AwardRefund"] = "AwardRefund";
    LoyaltyTransactionType["Rebate"] = "Rebate";
    LoyaltyTransactionType["RebateRefund"] = "RebateRefund";
    LoyaltyTransactionType["Redemption"] = "Redemption";
    LoyaltyTransactionType["RedemptionRefund"] = "RedemptionRefund";
})(LoyaltyTransactionType || (LoyaltyTransactionType = {}));
export var UnitOfMeasureType;
(function (UnitOfMeasureType) {
    UnitOfMeasureType["Case"] = "Case";
    UnitOfMeasureType["Centilitre"] = "Centilitre";
    UnitOfMeasureType["Centimetre"] = "Centimetre";
    UnitOfMeasureType["Foot"] = "Foot";
    UnitOfMeasureType["Gram"] = "Gram";
    UnitOfMeasureType["Inch"] = "Inch";
    UnitOfMeasureType["Kilogram"] = "Kilogram";
    UnitOfMeasureType["Kilometre"] = "Kilometre";
    UnitOfMeasureType["Litre"] = "Litre";
    UnitOfMeasureType["Meter"] = "Meter";
    UnitOfMeasureType["Mile"] = "Mile";
    UnitOfMeasureType["Other"] = "Other";
    UnitOfMeasureType["Ounce"] = "Ounce";
    UnitOfMeasureType["Pint"] = "Pint";
    UnitOfMeasureType["Pound"] = "Pound";
    UnitOfMeasureType["Quart"] = "Quart";
    UnitOfMeasureType["UkGallon"] = "UKGallon";
    UnitOfMeasureType["UsGallon"] = "USGallon";
    UnitOfMeasureType["Yard"] = "Yard";
})(UnitOfMeasureType || (UnitOfMeasureType = {}));
export var ForceEntryModeType;
(function (ForceEntryModeType) {
    ForceEntryModeType["CheckReader"] = "CheckReader";
    ForceEntryModeType["Contactless"] = "Contactless";
    ForceEntryModeType["File"] = "File";
    ForceEntryModeType["Icc"] = "ICC";
    ForceEntryModeType["Keyed"] = "Keyed";
    ForceEntryModeType["MagStripe"] = "MagStripe";
    ForceEntryModeType["Manual"] = "Manual";
    ForceEntryModeType["Rfid"] = "RFID";
    ForceEntryModeType["Scanned"] = "Scanned";
    ForceEntryModeType["SynchronousIcc"] = "SynchronousICC";
    ForceEntryModeType["Tapped"] = "Tapped";
})(ForceEntryModeType || (ForceEntryModeType = {}));
export var LoyaltyHandlingType;
(function (LoyaltyHandlingType) {
    LoyaltyHandlingType["Allowed"] = "Allowed";
    LoyaltyHandlingType["Forbidden"] = "Forbidden";
    LoyaltyHandlingType["Processed"] = "Processed";
    LoyaltyHandlingType["Proposed"] = "Proposed";
    LoyaltyHandlingType["Required"] = "Required";
})(LoyaltyHandlingType || (LoyaltyHandlingType = {}));
export var CustomerOrderReqType;
(function (CustomerOrderReqType) {
    CustomerOrderReqType["Both"] = "Both";
    CustomerOrderReqType["Closed"] = "Closed";
    CustomerOrderReqType["Open"] = "Open";
})(CustomerOrderReqType || (CustomerOrderReqType = {}));
export var SaleCapabilitiesType;
(function (SaleCapabilitiesType) {
    SaleCapabilitiesType["CashierDisplay"] = "CashierDisplay";
    SaleCapabilitiesType["CashierError"] = "CashierError";
    SaleCapabilitiesType["CashierInput"] = "CashierInput";
    SaleCapabilitiesType["CashierStatus"] = "CashierStatus";
    SaleCapabilitiesType["CustomerAssistance"] = "CustomerAssistance";
    SaleCapabilitiesType["CustomerDisplay"] = "CustomerDisplay";
    SaleCapabilitiesType["CustomerError"] = "CustomerError";
    SaleCapabilitiesType["CustomerInput"] = "CustomerInput";
    SaleCapabilitiesType["EmvContactless"] = "EMVContactless";
    SaleCapabilitiesType["Icc"] = "ICC";
    SaleCapabilitiesType["MagStripe"] = "MagStripe";
    SaleCapabilitiesType["PoiReplication"] = "POIReplication";
    SaleCapabilitiesType["PrinterDocument"] = "PrinterDocument";
    SaleCapabilitiesType["PrinterReceipt"] = "PrinterReceipt";
    SaleCapabilitiesType["PrinterVoucher"] = "PrinterVoucher";
})(SaleCapabilitiesType || (SaleCapabilitiesType = {}));
export var GenericProfileType;
(function (GenericProfileType) {
    GenericProfileType["Basic"] = "Basic";
    GenericProfileType["Extended"] = "Extended";
    GenericProfileType["Standard"] = "Standard";
})(GenericProfileType || (GenericProfileType = {}));
export var ServiceProfilesType;
(function (ServiceProfilesType) {
    ServiceProfilesType["Batch"] = "Batch";
    ServiceProfilesType["CardReader"] = "CardReader";
    ServiceProfilesType["Communication"] = "Communication";
    ServiceProfilesType["Loyalty"] = "Loyalty";
    ServiceProfilesType["OneTimeRes"] = "OneTimeRes";
    ServiceProfilesType["Pin"] = "PIN";
    ServiceProfilesType["Reservation"] = "Reservation";
    ServiceProfilesType["Sound"] = "Sound";
    ServiceProfilesType["StoredValue"] = "StoredValue";
    ServiceProfilesType["Synchro"] = "Synchro";
})(ServiceProfilesType || (ServiceProfilesType = {}));
export var TerminalEnvironmentType;
(function (TerminalEnvironmentType) {
    TerminalEnvironmentType["Attended"] = "Attended";
    TerminalEnvironmentType["SemiAttended"] = "SemiAttended";
    TerminalEnvironmentType["Unattended"] = "Unattended";
})(TerminalEnvironmentType || (TerminalEnvironmentType = {}));
export var InstalmentType;
(function (InstalmentType) {
    InstalmentType["DeferredInstalments"] = "DeferredInstalments";
    InstalmentType["EqualInstalments"] = "EqualInstalments";
    InstalmentType["InequalInstalments"] = "InequalInstalments";
})(InstalmentType || (InstalmentType = {}));
export var PeriodUnitType;
(function (PeriodUnitType) {
    PeriodUnitType["Annual"] = "Annual";
    PeriodUnitType["Daily"] = "Daily";
    PeriodUnitType["Monthly"] = "Monthly";
    PeriodUnitType["Weekly"] = "Weekly";
})(PeriodUnitType || (PeriodUnitType = {}));
export var PaymentType;
(function (PaymentType) {
    PaymentType["CashAdvance"] = "CashAdvance";
    PaymentType["CashDeposit"] = "CashDeposit";
    PaymentType["Completion"] = "Completion";
    PaymentType["FirstReservation"] = "FirstReservation";
    PaymentType["Instalment"] = "Instalment";
    PaymentType["IssuerInstalment"] = "IssuerInstalment";
    PaymentType["Normal"] = "Normal";
    PaymentType["OneTimeReservation"] = "OneTimeReservation";
    PaymentType["PaidOut"] = "PaidOut";
    PaymentType["Recurring"] = "Recurring";
    PaymentType["Refund"] = "Refund";
    PaymentType["UpdateReservation"] = "UpdateReservation";
})(PaymentType || (PaymentType = {}));
export var ReversalReasonType;
(function (ReversalReasonType) {
    ReversalReasonType["CustCancel"] = "CustCancel";
    ReversalReasonType["Malfunction"] = "Malfunction";
    ReversalReasonType["MerchantCancel"] = "MerchantCancel";
    ReversalReasonType["Unable2Compl"] = "Unable2Compl";
})(ReversalReasonType || (ReversalReasonType = {}));
export var ServicesEnabledType;
(function (ServicesEnabledType) {
    ServicesEnabledType["CardAcquisition"] = "CardAcquisition";
    ServicesEnabledType["Loyalty"] = "Loyalty";
    ServicesEnabledType["Payment"] = "Payment";
})(ServicesEnabledType || (ServicesEnabledType = {}));
export var TransactionActionType;
(function (TransactionActionType) {
    TransactionActionType["AbortTransaction"] = "AbortTransaction";
    TransactionActionType["StartTransaction"] = "StartTransaction";
})(TransactionActionType || (TransactionActionType = {}));
export var EventToNotifyType;
(function (EventToNotifyType) {
    EventToNotifyType["Abort"] = "Abort";
    EventToNotifyType["BeginMaintenance"] = "BeginMaintenance";
    EventToNotifyType["CardInserted"] = "CardInserted";
    EventToNotifyType["CardRemoved"] = "CardRemoved";
    EventToNotifyType["Completed"] = "Completed";
    EventToNotifyType["CustomerLanguage"] = "CustomerLanguage";
    EventToNotifyType["EndMaintenance"] = "EndMaintenance";
    EventToNotifyType["Initialised"] = "Initialised";
    EventToNotifyType["KeyPressed"] = "KeyPressed";
    EventToNotifyType["OutOfOrder"] = "OutOfOrder";
    EventToNotifyType["Reject"] = "Reject";
    EventToNotifyType["SaleAdmin"] = "SaleAdmin";
    EventToNotifyType["SaleWakeUp"] = "SaleWakeUp";
    EventToNotifyType["SecurityAlarm"] = "SecurityAlarm";
    EventToNotifyType["Shutdown"] = "Shutdown";
    EventToNotifyType["StopAssistance"] = "StopAssistance";
})(EventToNotifyType || (EventToNotifyType = {}));
export var TotalDetailsType;
(function (TotalDetailsType) {
    TotalDetailsType["OperatorId"] = "OperatorID";
    TotalDetailsType["Poiid"] = "POIID";
    TotalDetailsType["SaleId"] = "SaleID";
    TotalDetailsType["ShiftNumber"] = "ShiftNumber";
    TotalDetailsType["TotalsGroupId"] = "TotalsGroupID";
})(TotalDetailsType || (TotalDetailsType = {}));
export var InputCommandType;
(function (InputCommandType) {
    InputCommandType["DecimalString"] = "DecimalString";
    InputCommandType["DigitString"] = "DigitString";
    InputCommandType["GetAnyKey"] = "GetAnyKey";
    InputCommandType["GetConfirmation"] = "GetConfirmation";
    InputCommandType["GetFunctionKey"] = "GetFunctionKey";
    InputCommandType["GetMenuEntry"] = "GetMenuEntry";
    InputCommandType["Password"] = "Password";
    InputCommandType["SiteManager"] = "SiteManager";
    InputCommandType["TextString"] = "TextString";
})(InputCommandType || (InputCommandType = {}));
export var MessageClassType;
(function (MessageClassType) {
    MessageClassType["Device"] = "Device";
    MessageClassType["Event"] = "Event";
    MessageClassType["Service"] = "Service";
})(MessageClassType || (MessageClassType = {}));
export var MessageType;
(function (MessageType) {
    MessageType["Notification"] = "Notification";
    MessageType["Request"] = "Request";
    MessageType["Response"] = "Response";
})(MessageType || (MessageType = {}));
export var PinFormatType;
(function (PinFormatType) {
    PinFormatType["Iso0"] = "ISO0";
    PinFormatType["Iso1"] = "ISO1";
    PinFormatType["Iso2"] = "ISO2";
    PinFormatType["Iso3"] = "ISO3";
})(PinFormatType || (PinFormatType = {}));
export var PinRequestType;
(function (PinRequestType) {
    PinRequestType["PinEnter"] = "PINEnter";
    PinRequestType["PinVerify"] = "PINVerify";
    PinRequestType["PinVerifyOnly"] = "PINVerifyOnly";
})(PinRequestType || (PinRequestType = {}));
export var DocumentQualifierType;
(function (DocumentQualifierType) {
    DocumentQualifierType["CashierReceipt"] = "CashierReceipt";
    DocumentQualifierType["CustomerReceipt"] = "CustomerReceipt";
    DocumentQualifierType["Document"] = "Document";
    DocumentQualifierType["Journal"] = "Journal";
    DocumentQualifierType["SaleReceipt"] = "SaleReceipt";
    DocumentQualifierType["Voucher"] = "Voucher";
})(DocumentQualifierType || (DocumentQualifierType = {}));
export var ResponseModeType;
(function (ResponseModeType) {
    ResponseModeType["Immediate"] = "Immediate";
    ResponseModeType["NotRequired"] = "NotRequired";
    ResponseModeType["PrintEnd"] = "PrintEnd";
    ResponseModeType["SoundEnd"] = "SoundEnd";
})(ResponseModeType || (ResponseModeType = {}));
export var ReconciliationType;
(function (ReconciliationType) {
    ReconciliationType["AcquirerReconciliation"] = "AcquirerReconciliation";
    ReconciliationType["AcquirerSynchronisation"] = "AcquirerSynchronisation";
    ReconciliationType["PreviousReconciliation"] = "PreviousReconciliation";
    ReconciliationType["SaleReconciliation"] = "SaleReconciliation";
})(ReconciliationType || (ReconciliationType = {}));
export var SoundActionType;
(function (SoundActionType) {
    SoundActionType["SetDefaultVolume"] = "SetDefaultVolume";
    SoundActionType["StartSound"] = "StartSound";
    SoundActionType["StopSound"] = "StopSound";
})(SoundActionType || (SoundActionType = {}));
export var SoundFormatType;
(function (SoundFormatType) {
    SoundFormatType["MessageRef"] = "MessageRef";
    SoundFormatType["SoundRef"] = "SoundRef";
    SoundFormatType["Text"] = "Text";
})(SoundFormatType || (SoundFormatType = {}));
export var StoredValueAccountType;
(function (StoredValueAccountType) {
    StoredValueAccountType["GiftCard"] = "GiftCard";
    StoredValueAccountType["Other"] = "Other";
    StoredValueAccountType["PhoneCard"] = "PhoneCard";
})(StoredValueAccountType || (StoredValueAccountType = {}));
export var StoredValueTransactionType;
(function (StoredValueTransactionType) {
    StoredValueTransactionType["Activate"] = "Activate";
    StoredValueTransactionType["Duplicate"] = "Duplicate";
    StoredValueTransactionType["Load"] = "Load";
    StoredValueTransactionType["Reserve"] = "Reserve";
    StoredValueTransactionType["Reverse"] = "Reverse";
    StoredValueTransactionType["Unload"] = "Unload";
})(StoredValueTransactionType || (StoredValueTransactionType = {}));
export var ErrorConditionType;
(function (ErrorConditionType) {
    ErrorConditionType["Aborted"] = "Aborted";
    ErrorConditionType["Busy"] = "Busy";
    ErrorConditionType["Cancel"] = "Cancel";
    ErrorConditionType["DeviceOut"] = "DeviceOut";
    ErrorConditionType["InProgress"] = "InProgress";
    ErrorConditionType["InsertedCard"] = "InsertedCard";
    ErrorConditionType["InvalidCard"] = "InvalidCard";
    ErrorConditionType["LoggedOut"] = "LoggedOut";
    ErrorConditionType["MessageFormat"] = "MessageFormat";
    ErrorConditionType["NotAllowed"] = "NotAllowed";
    ErrorConditionType["NotFound"] = "NotFound";
    ErrorConditionType["PaymentRestriction"] = "PaymentRestriction";
    ErrorConditionType["Refusal"] = "Refusal";
    ErrorConditionType["UnavailableDevice"] = "UnavailableDevice";
    ErrorConditionType["UnavailableService"] = "UnavailableService";
    ErrorConditionType["UnreachableHost"] = "UnreachableHost";
    ErrorConditionType["WrongPin"] = "WrongPIN";
})(ErrorConditionType || (ErrorConditionType = {}));
export var ResultType;
(function (ResultType) {
    ResultType["Failure"] = "Failure";
    ResultType["Partial"] = "Partial";
    ResultType["Success"] = "Success";
})(ResultType || (ResultType = {}));
export var AuthenticationMethodType;
(function (AuthenticationMethodType) {
    AuthenticationMethodType["Bypass"] = "Bypass";
    AuthenticationMethodType["ManualVerification"] = "ManualVerification";
    AuthenticationMethodType["MerchantAuthentication"] = "MerchantAuthentication";
    AuthenticationMethodType["OfflinePin"] = "OfflinePIN";
    AuthenticationMethodType["OnLinePin"] = "OnLinePIN";
    AuthenticationMethodType["PaperSignature"] = "PaperSignature";
    AuthenticationMethodType["SecureCertificate"] = "SecureCertificate";
    AuthenticationMethodType["SecureNoCertificate"] = "SecureNoCertificate";
    AuthenticationMethodType["SecuredChannel"] = "SecuredChannel";
    AuthenticationMethodType["SignatureCapture"] = "SignatureCapture";
    AuthenticationMethodType["UnknownMethod"] = "UnknownMethod";
})(AuthenticationMethodType || (AuthenticationMethodType = {}));
export var GlobalStatusType;
(function (GlobalStatusType) {
    GlobalStatusType["Busy"] = "Busy";
    GlobalStatusType["Maintenance"] = "Maintenance";
    GlobalStatusType["Ok"] = "OK";
    GlobalStatusType["Unreachable"] = "Unreachable";
})(GlobalStatusType || (GlobalStatusType = {}));
export var PrinterStatusType;
(function (PrinterStatusType) {
    PrinterStatusType["NoPaper"] = "NoPaper";
    PrinterStatusType["Ok"] = "OK";
    PrinterStatusType["OutOfOrder"] = "OutOfOrder";
    PrinterStatusType["PaperJam"] = "PaperJam";
    PrinterStatusType["PaperLow"] = "PaperLow";
})(PrinterStatusType || (PrinterStatusType = {}));
export var TransactionType;
(function (TransactionType) {
    TransactionType["Award"] = "Award";
    TransactionType["CashAdvance"] = "CashAdvance";
    TransactionType["CompletedDeffered"] = "CompletedDeffered";
    TransactionType["CompletedReservation"] = "CompletedReservation";
    TransactionType["Credit"] = "Credit";
    TransactionType["Debit"] = "Debit";
    TransactionType["Declined"] = "Declined";
    TransactionType["Failed"] = "Failed";
    TransactionType["FirstReservation"] = "FirstReservation";
    TransactionType["IssuerInstalment"] = "IssuerInstalment";
    TransactionType["OneTimeReservation"] = "OneTimeReservation";
    TransactionType["Rebate"] = "Rebate";
    TransactionType["Redemption"] = "Redemption";
    TransactionType["ReverseAward"] = "ReverseAward";
    TransactionType["ReverseCredit"] = "ReverseCredit";
    TransactionType["ReverseDebit"] = "ReverseDebit";
    TransactionType["ReverseRebate"] = "ReverseRebate";
    TransactionType["ReverseRedemption"] = "ReverseRedemption";
    TransactionType["UpdateReservation"] = "UpdateReservation";
})(TransactionType || (TransactionType = {}));
export var PoiCapabilitiesType;
(function (PoiCapabilitiesType) {
    PoiCapabilitiesType["CashHandling"] = "CashHandling";
    PoiCapabilitiesType["CashierDisplay"] = "CashierDisplay";
    PoiCapabilitiesType["CashierError"] = "CashierError";
    PoiCapabilitiesType["CashierInput"] = "CashierInput";
    PoiCapabilitiesType["CustomerDisplay"] = "CustomerDisplay";
    PoiCapabilitiesType["CustomerError"] = "CustomerError";
    PoiCapabilitiesType["CustomerInput"] = "CustomerInput";
    PoiCapabilitiesType["EmvContactless"] = "EMVContactless";
    PoiCapabilitiesType["Icc"] = "ICC";
    PoiCapabilitiesType["MagStripe"] = "MagStripe";
    PoiCapabilitiesType["PrinterDocument"] = "PrinterDocument";
    PoiCapabilitiesType["PrinterReceipt"] = "PrinterReceipt";
    PoiCapabilitiesType["PrinterVoucher"] = "PrinterVoucher";
})(PoiCapabilitiesType || (PoiCapabilitiesType = {}));
// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
var Convert = /** @class */ (function () {
    function Convert() {
    }
    Convert.toTerminalApiRequest = function (json) {
        return cast(JSON.parse(json), r("TerminalApiRequest"));
    };
    Convert.terminalApiRequestToJson = function (value) {
        return JSON.stringify(uncast(value, r("TerminalApiRequest")), null, 2);
    };
    Convert.toTerminalApiResponse = function (json) {
        return cast(JSON.parse(json), r("TerminalApiResponse"));
    };
    Convert.terminalApiResponseToJson = function (value) {
        return JSON.stringify(uncast(value, r("TerminalApiResponse")), null, 2);
    };
    Convert.toTerminalApiSecuredRequest = function (json) {
        return cast(JSON.parse(json), r("TerminalApiSecuredRequest"));
    };
    Convert.terminalApiSecuredRequestToJson = function (value) {
        return JSON.stringify(uncast(value, r("TerminalApiSecuredRequest")), null, 2);
    };
    Convert.toTerminalApiSecuredResponse = function (json) {
        return cast(JSON.parse(json), r("TerminalApiSecuredResponse"));
    };
    Convert.terminalApiSecuredResponseToJson = function (value) {
        return JSON.stringify(uncast(value, r("TerminalApiSecuredResponse")), null, 2);
    };
    Convert.toNexoDerivedKey = function (json) {
        return cast(JSON.parse(json), r("NexoDerivedKey"));
    };
    Convert.nexoDerivedKeyToJson = function (value) {
        return JSON.stringify(uncast(value, r("NexoDerivedKey")), null, 2);
    };
    Convert.toSaleToPoiSecuredMessage = function (json) {
        return cast(JSON.parse(json), r("SaleToPoiSecuredMessage"));
    };
    Convert.saleToPoiSecuredMessageToJson = function (value) {
        return JSON.stringify(uncast(value, r("SaleToPoiSecuredMessage")), null, 2);
    };
    Convert.toSecurityKey = function (json) {
        return cast(JSON.parse(json), r("SecurityKey"));
    };
    Convert.securityKeyToJson = function (value) {
        return JSON.stringify(uncast(value, r("SecurityKey")), null, 2);
    };
    Convert.toSecurityTrailer = function (json) {
        return cast(JSON.parse(json), r("SecurityTrailer"));
    };
    Convert.securityTrailerToJson = function (value) {
        return JSON.stringify(uncast(value, r("SecurityTrailer")), null, 2);
    };
    Convert.toSaleToPoiRequest = function (json) {
        return cast(JSON.parse(json), r("SaleToPoiRequest"));
    };
    Convert.saleToPoiRequestToJson = function (value) {
        return JSON.stringify(uncast(value, r("SaleToPoiRequest")), null, 2);
    };
    Convert.toSaleToPoiResponse = function (json) {
        return cast(JSON.parse(json), r("SaleToPoiResponse"));
    };
    Convert.saleToPoiResponseToJson = function (value) {
        return JSON.stringify(uncast(value, r("SaleToPoiResponse")), null, 2);
    };
    Convert.toMessageHeader = function (json) {
        return cast(JSON.parse(json), r("MessageHeader"));
    };
    Convert.messageHeaderToJson = function (value) {
        return JSON.stringify(uncast(value, r("MessageHeader")), null, 2);
    };
    Convert.toAbortRequest = function (json) {
        return cast(JSON.parse(json), r("AbortRequest"));
    };
    Convert.abortRequestToJson = function (value) {
        return JSON.stringify(uncast(value, r("AbortRequest")), null, 2);
    };
    Convert.toBalanceInquiryRequest = function (json) {
        return cast(JSON.parse(json), r("BalanceInquiryRequest"));
    };
    Convert.balanceInquiryRequestToJson = function (value) {
        return JSON.stringify(uncast(value, r("BalanceInquiryRequest")), null, 2);
    };
    Convert.toBatchRequest = function (json) {
        return cast(JSON.parse(json), r("BatchRequest"));
    };
    Convert.batchRequestToJson = function (value) {
        return JSON.stringify(uncast(value, r("BatchRequest")), null, 2);
    };
    Convert.toCardAcquisitionRequest = function (json) {
        return cast(JSON.parse(json), r("CardAcquisitionRequest"));
    };
    Convert.cardAcquisitionRequestToJson = function (value) {
        return JSON.stringify(uncast(value, r("CardAcquisitionRequest")), null, 2);
    };
    Convert.toAdminRequest = function (json) {
        return cast(JSON.parse(json), r("AdminRequest"));
    };
    Convert.adminRequestToJson = function (value) {
        return JSON.stringify(uncast(value, r("AdminRequest")), null, 2);
    };
    Convert.toDiagnosisRequest = function (json) {
        return cast(JSON.parse(json), r("DiagnosisRequest"));
    };
    Convert.diagnosisRequestToJson = function (value) {
        return JSON.stringify(uncast(value, r("DiagnosisRequest")), null, 2);
    };
    Convert.toDisplayRequest = function (json) {
        return cast(JSON.parse(json), r("DisplayRequest"));
    };
    Convert.displayRequestToJson = function (value) {
        return JSON.stringify(uncast(value, r("DisplayRequest")), null, 2);
    };
    Convert.toEnableServiceRequest = function (json) {
        return cast(JSON.parse(json), r("EnableServiceRequest"));
    };
    Convert.enableServiceRequestToJson = function (value) {
        return JSON.stringify(uncast(value, r("EnableServiceRequest")), null, 2);
    };
    Convert.toEventNotification = function (json) {
        return cast(JSON.parse(json), r("EventNotification"));
    };
    Convert.eventNotificationToJson = function (value) {
        return JSON.stringify(uncast(value, r("EventNotification")), null, 2);
    };
    Convert.toGetTotalsRequest = function (json) {
        return cast(JSON.parse(json), r("GetTotalsRequest"));
    };
    Convert.getTotalsRequestToJson = function (value) {
        return JSON.stringify(uncast(value, r("GetTotalsRequest")), null, 2);
    };
    Convert.toInputRequest = function (json) {
        return cast(JSON.parse(json), r("InputRequest"));
    };
    Convert.inputRequestToJson = function (value) {
        return JSON.stringify(uncast(value, r("InputRequest")), null, 2);
    };
    Convert.toInputUpdate = function (json) {
        return cast(JSON.parse(json), r("InputUpdate"));
    };
    Convert.inputUpdateToJson = function (value) {
        return JSON.stringify(uncast(value, r("InputUpdate")), null, 2);
    };
    Convert.toLoginRequest = function (json) {
        return cast(JSON.parse(json), r("LoginRequest"));
    };
    Convert.loginRequestToJson = function (value) {
        return JSON.stringify(uncast(value, r("LoginRequest")), null, 2);
    };
    Convert.toLogoutRequest = function (json) {
        return cast(JSON.parse(json), r("LogoutRequest"));
    };
    Convert.logoutRequestToJson = function (value) {
        return JSON.stringify(uncast(value, r("LogoutRequest")), null, 2);
    };
    Convert.toLoyaltyRequest = function (json) {
        return cast(JSON.parse(json), r("LoyaltyRequest"));
    };
    Convert.loyaltyRequestToJson = function (value) {
        return JSON.stringify(uncast(value, r("LoyaltyRequest")), null, 2);
    };
    Convert.toPaymentRequest = function (json) {
        return cast(JSON.parse(json), r("PaymentRequest"));
    };
    Convert.paymentRequestToJson = function (value) {
        return JSON.stringify(uncast(value, r("PaymentRequest")), null, 2);
    };
    Convert.toPinRequest = function (json) {
        return cast(JSON.parse(json), r("PinRequest"));
    };
    Convert.pinRequestToJson = function (value) {
        return JSON.stringify(uncast(value, r("PinRequest")), null, 2);
    };
    Convert.toPrintRequest = function (json) {
        return cast(JSON.parse(json), r("PrintRequest"));
    };
    Convert.printRequestToJson = function (value) {
        return JSON.stringify(uncast(value, r("PrintRequest")), null, 2);
    };
    Convert.toCardReaderInitRequest = function (json) {
        return cast(JSON.parse(json), r("CardReaderInitRequest"));
    };
    Convert.cardReaderInitRequestToJson = function (value) {
        return JSON.stringify(uncast(value, r("CardReaderInitRequest")), null, 2);
    };
    Convert.toCardReaderApduRequest = function (json) {
        return cast(JSON.parse(json), r("CardReaderApduRequest"));
    };
    Convert.cardReaderApduRequestToJson = function (value) {
        return JSON.stringify(uncast(value, r("CardReaderApduRequest")), null, 2);
    };
    Convert.toCardReaderPowerOffRequest = function (json) {
        return cast(JSON.parse(json), r("CardReaderPowerOffRequest"));
    };
    Convert.cardReaderPowerOffRequestToJson = function (value) {
        return JSON.stringify(uncast(value, r("CardReaderPowerOffRequest")), null, 2);
    };
    Convert.toReconciliationRequest = function (json) {
        return cast(JSON.parse(json), r("ReconciliationRequest"));
    };
    Convert.reconciliationRequestToJson = function (value) {
        return JSON.stringify(uncast(value, r("ReconciliationRequest")), null, 2);
    };
    Convert.toReversalRequest = function (json) {
        return cast(JSON.parse(json), r("ReversalRequest"));
    };
    Convert.reversalRequestToJson = function (value) {
        return JSON.stringify(uncast(value, r("ReversalRequest")), null, 2);
    };
    Convert.toSoundRequest = function (json) {
        return cast(JSON.parse(json), r("SoundRequest"));
    };
    Convert.soundRequestToJson = function (value) {
        return JSON.stringify(uncast(value, r("SoundRequest")), null, 2);
    };
    Convert.toStoredValueRequest = function (json) {
        return cast(JSON.parse(json), r("StoredValueRequest"));
    };
    Convert.storedValueRequestToJson = function (value) {
        return JSON.stringify(uncast(value, r("StoredValueRequest")), null, 2);
    };
    Convert.toTransactionStatusRequest = function (json) {
        return cast(JSON.parse(json), r("TransactionStatusRequest"));
    };
    Convert.transactionStatusRequestToJson = function (value) {
        return JSON.stringify(uncast(value, r("TransactionStatusRequest")), null, 2);
    };
    Convert.toTransmitRequest = function (json) {
        return cast(JSON.parse(json), r("TransmitRequest"));
    };
    Convert.transmitRequestToJson = function (value) {
        return JSON.stringify(uncast(value, r("TransmitRequest")), null, 2);
    };
    Convert.toContentInformation = function (json) {
        return cast(JSON.parse(json), r("ContentInformation"));
    };
    Convert.contentInformationToJson = function (value) {
        return JSON.stringify(uncast(value, r("ContentInformation")), null, 2);
    };
    Convert.toBalanceInquiryResponse = function (json) {
        return cast(JSON.parse(json), r("BalanceInquiryResponse"));
    };
    Convert.balanceInquiryResponseToJson = function (value) {
        return JSON.stringify(uncast(value, r("BalanceInquiryResponse")), null, 2);
    };
    Convert.toBatchResponse = function (json) {
        return cast(JSON.parse(json), r("BatchResponse"));
    };
    Convert.batchResponseToJson = function (value) {
        return JSON.stringify(uncast(value, r("BatchResponse")), null, 2);
    };
    Convert.toCardAcquisitionResponse = function (json) {
        return cast(JSON.parse(json), r("CardAcquisitionResponse"));
    };
    Convert.cardAcquisitionResponseToJson = function (value) {
        return JSON.stringify(uncast(value, r("CardAcquisitionResponse")), null, 2);
    };
    Convert.toAdminResponse = function (json) {
        return cast(JSON.parse(json), r("AdminResponse"));
    };
    Convert.adminResponseToJson = function (value) {
        return JSON.stringify(uncast(value, r("AdminResponse")), null, 2);
    };
    Convert.toDiagnosisResponse = function (json) {
        return cast(JSON.parse(json), r("DiagnosisResponse"));
    };
    Convert.diagnosisResponseToJson = function (value) {
        return JSON.stringify(uncast(value, r("DiagnosisResponse")), null, 2);
    };
    Convert.toDisplayResponse = function (json) {
        return cast(JSON.parse(json), r("DisplayResponse"));
    };
    Convert.displayResponseToJson = function (value) {
        return JSON.stringify(uncast(value, r("DisplayResponse")), null, 2);
    };
    Convert.toEnableServiceResponse = function (json) {
        return cast(JSON.parse(json), r("EnableServiceResponse"));
    };
    Convert.enableServiceResponseToJson = function (value) {
        return JSON.stringify(uncast(value, r("EnableServiceResponse")), null, 2);
    };
    Convert.toGetTotalsResponse = function (json) {
        return cast(JSON.parse(json), r("GetTotalsResponse"));
    };
    Convert.getTotalsResponseToJson = function (value) {
        return JSON.stringify(uncast(value, r("GetTotalsResponse")), null, 2);
    };
    Convert.toInputResponse = function (json) {
        return cast(JSON.parse(json), r("InputResponse"));
    };
    Convert.inputResponseToJson = function (value) {
        return JSON.stringify(uncast(value, r("InputResponse")), null, 2);
    };
    Convert.toLoginResponse = function (json) {
        return cast(JSON.parse(json), r("LoginResponse"));
    };
    Convert.loginResponseToJson = function (value) {
        return JSON.stringify(uncast(value, r("LoginResponse")), null, 2);
    };
    Convert.toLogoutResponse = function (json) {
        return cast(JSON.parse(json), r("LogoutResponse"));
    };
    Convert.logoutResponseToJson = function (value) {
        return JSON.stringify(uncast(value, r("LogoutResponse")), null, 2);
    };
    Convert.toLoyaltyResponse = function (json) {
        return cast(JSON.parse(json), r("LoyaltyResponse"));
    };
    Convert.loyaltyResponseToJson = function (value) {
        return JSON.stringify(uncast(value, r("LoyaltyResponse")), null, 2);
    };
    Convert.toPaymentResponse = function (json) {
        return cast(JSON.parse(json), r("PaymentResponse"));
    };
    Convert.paymentResponseToJson = function (value) {
        return JSON.stringify(uncast(value, r("PaymentResponse")), null, 2);
    };
    Convert.toPinResponse = function (json) {
        return cast(JSON.parse(json), r("PinResponse"));
    };
    Convert.pinResponseToJson = function (value) {
        return JSON.stringify(uncast(value, r("PinResponse")), null, 2);
    };
    Convert.toPrintResponse = function (json) {
        return cast(JSON.parse(json), r("PrintResponse"));
    };
    Convert.printResponseToJson = function (value) {
        return JSON.stringify(uncast(value, r("PrintResponse")), null, 2);
    };
    Convert.toCardReaderInitResponse = function (json) {
        return cast(JSON.parse(json), r("CardReaderInitResponse"));
    };
    Convert.cardReaderInitResponseToJson = function (value) {
        return JSON.stringify(uncast(value, r("CardReaderInitResponse")), null, 2);
    };
    Convert.toCardReaderApduResponse = function (json) {
        return cast(JSON.parse(json), r("CardReaderApduResponse"));
    };
    Convert.cardReaderApduResponseToJson = function (value) {
        return JSON.stringify(uncast(value, r("CardReaderApduResponse")), null, 2);
    };
    Convert.toCardReaderPowerOffResponse = function (json) {
        return cast(JSON.parse(json), r("CardReaderPowerOffResponse"));
    };
    Convert.cardReaderPowerOffResponseToJson = function (value) {
        return JSON.stringify(uncast(value, r("CardReaderPowerOffResponse")), null, 2);
    };
    Convert.toReconciliationResponse = function (json) {
        return cast(JSON.parse(json), r("ReconciliationResponse"));
    };
    Convert.reconciliationResponseToJson = function (value) {
        return JSON.stringify(uncast(value, r("ReconciliationResponse")), null, 2);
    };
    Convert.toReversalResponse = function (json) {
        return cast(JSON.parse(json), r("ReversalResponse"));
    };
    Convert.reversalResponseToJson = function (value) {
        return JSON.stringify(uncast(value, r("ReversalResponse")), null, 2);
    };
    Convert.toSoundResponse = function (json) {
        return cast(JSON.parse(json), r("SoundResponse"));
    };
    Convert.soundResponseToJson = function (value) {
        return JSON.stringify(uncast(value, r("SoundResponse")), null, 2);
    };
    Convert.toStoredValueResponse = function (json) {
        return cast(JSON.parse(json), r("StoredValueResponse"));
    };
    Convert.storedValueResponseToJson = function (value) {
        return JSON.stringify(uncast(value, r("StoredValueResponse")), null, 2);
    };
    Convert.toTransactionStatusResponse = function (json) {
        return cast(JSON.parse(json), r("TransactionStatusResponse"));
    };
    Convert.transactionStatusResponseToJson = function (value) {
        return JSON.stringify(uncast(value, r("TransactionStatusResponse")), null, 2);
    };
    Convert.toTransmitResponse = function (json) {
        return cast(JSON.parse(json), r("TransmitResponse"));
    };
    Convert.transmitResponseToJson = function (value) {
        return JSON.stringify(uncast(value, r("TransmitResponse")), null, 2);
    };
    Convert.toMessageReference = function (json) {
        return cast(JSON.parse(json), r("MessageReference"));
    };
    Convert.messageReferenceToJson = function (value) {
        return JSON.stringify(uncast(value, r("MessageReference")), null, 2);
    };
    Convert.toDisplayOutput = function (json) {
        return cast(JSON.parse(json), r("DisplayOutput"));
    };
    Convert.displayOutputToJson = function (value) {
        return JSON.stringify(uncast(value, r("DisplayOutput")), null, 2);
    };
    Convert.toPaymentAccountReq = function (json) {
        return cast(JSON.parse(json), r("PaymentAccountReq"));
    };
    Convert.paymentAccountReqToJson = function (value) {
        return JSON.stringify(uncast(value, r("PaymentAccountReq")), null, 2);
    };
    Convert.toLoyaltyAccountReq = function (json) {
        return cast(JSON.parse(json), r("LoyaltyAccountReq"));
    };
    Convert.loyaltyAccountReqToJson = function (value) {
        return JSON.stringify(uncast(value, r("LoyaltyAccountReq")), null, 2);
    };
    Convert.toTransactionToPerform = function (json) {
        return cast(JSON.parse(json), r("TransactionToPerform"));
    };
    Convert.transactionToPerformToJson = function (value) {
        return JSON.stringify(uncast(value, r("TransactionToPerform")), null, 2);
    };
    Convert.toSaleData = function (json) {
        return cast(JSON.parse(json), r("SaleData"));
    };
    Convert.saleDataToJson = function (value) {
        return JSON.stringify(uncast(value, r("SaleData")), null, 2);
    };
    Convert.toCardAcquisitionTransaction = function (json) {
        return cast(JSON.parse(json), r("CardAcquisitionTransaction"));
    };
    Convert.cardAcquisitionTransactionToJson = function (value) {
        return JSON.stringify(uncast(value, r("CardAcquisitionTransaction")), null, 2);
    };
    Convert.toXmlGregorianCalendar = function (json) {
        return cast(JSON.parse(json), m("any"));
    };
    Convert.xmlGregorianCalendarToJson = function (value) {
        return JSON.stringify(uncast(value, m("any")), null, 2);
    };
    Convert.toTotalFilter = function (json) {
        return cast(JSON.parse(json), r("TotalFilter"));
    };
    Convert.totalFilterToJson = function (value) {
        return JSON.stringify(uncast(value, r("TotalFilter")), null, 2);
    };
    Convert.toInputData = function (json) {
        return cast(JSON.parse(json), r("InputData"));
    };
    Convert.inputDataToJson = function (value) {
        return JSON.stringify(uncast(value, r("InputData")), null, 2);
    };
    Convert.toOutputContent = function (json) {
        return cast(JSON.parse(json), r("OutputContent"));
    };
    Convert.outputContentToJson = function (value) {
        return JSON.stringify(uncast(value, r("OutputContent")), null, 2);
    };
    Convert.toMenuEntry = function (json) {
        return cast(JSON.parse(json), r("MenuEntry"));
    };
    Convert.menuEntryToJson = function (value) {
        return JSON.stringify(uncast(value, r("MenuEntry")), null, 2);
    };
    Convert.toSaleSoftware = function (json) {
        return cast(JSON.parse(json), r("SaleSoftware"));
    };
    Convert.saleSoftwareToJson = function (value) {
        return JSON.stringify(uncast(value, r("SaleSoftware")), null, 2);
    };
    Convert.toSaleTerminalData = function (json) {
        return cast(JSON.parse(json), r("SaleTerminalData"));
    };
    Convert.saleTerminalDataToJson = function (value) {
        return JSON.stringify(uncast(value, r("SaleTerminalData")), null, 2);
    };
    Convert.toLoyaltyTransaction = function (json) {
        return cast(JSON.parse(json), r("LoyaltyTransaction"));
    };
    Convert.loyaltyTransactionToJson = function (value) {
        return JSON.stringify(uncast(value, r("LoyaltyTransaction")), null, 2);
    };
    Convert.toLoyaltyData = function (json) {
        return cast(JSON.parse(json), r("LoyaltyData"));
    };
    Convert.loyaltyDataToJson = function (value) {
        return JSON.stringify(uncast(value, r("LoyaltyData")), null, 2);
    };
    Convert.toPaymentTransaction = function (json) {
        return cast(JSON.parse(json), r("PaymentTransaction"));
    };
    Convert.paymentTransactionToJson = function (value) {
        return JSON.stringify(uncast(value, r("PaymentTransaction")), null, 2);
    };
    Convert.toPaymentData = function (json) {
        return cast(JSON.parse(json), r("PaymentData"));
    };
    Convert.paymentDataToJson = function (value) {
        return JSON.stringify(uncast(value, r("PaymentData")), null, 2);
    };
    Convert.toCardholderPin = function (json) {
        return cast(JSON.parse(json), r("CardholderPin"));
    };
    Convert.cardholderPinToJson = function (value) {
        return JSON.stringify(uncast(value, r("CardholderPin")), null, 2);
    };
    Convert.toPrintOutput = function (json) {
        return cast(JSON.parse(json), r("PrintOutput"));
    };
    Convert.printOutputToJson = function (value) {
        return JSON.stringify(uncast(value, r("PrintOutput")), null, 2);
    };
    Convert.toOriginalPoiTransaction = function (json) {
        return cast(JSON.parse(json), r("OriginalPoiTransaction"));
    };
    Convert.originalPoiTransactionToJson = function (value) {
        return JSON.stringify(uncast(value, r("OriginalPoiTransaction")), null, 2);
    };
    Convert.toCustomerOrder = function (json) {
        return cast(JSON.parse(json), r("CustomerOrder"));
    };
    Convert.customerOrderToJson = function (value) {
        return JSON.stringify(uncast(value, r("CustomerOrder")), null, 2);
    };
    Convert.toSoundContent = function (json) {
        return cast(JSON.parse(json), r("SoundContent"));
    };
    Convert.soundContentToJson = function (value) {
        return JSON.stringify(uncast(value, r("SoundContent")), null, 2);
    };
    Convert.toStoredValueData = function (json) {
        return cast(JSON.parse(json), r("StoredValueData"));
    };
    Convert.storedValueDataToJson = function (value) {
        return JSON.stringify(uncast(value, r("StoredValueData")), null, 2);
    };
    Convert.toEnvelopedData = function (json) {
        return cast(JSON.parse(json), r("EnvelopedData"));
    };
    Convert.envelopedDataToJson = function (value) {
        return JSON.stringify(uncast(value, r("EnvelopedData")), null, 2);
    };
    Convert.toAuthenticatedData = function (json) {
        return cast(JSON.parse(json), r("AuthenticatedData"));
    };
    Convert.authenticatedDataToJson = function (value) {
        return JSON.stringify(uncast(value, r("AuthenticatedData")), null, 2);
    };
    Convert.toSignedData = function (json) {
        return cast(JSON.parse(json), r("SignedData"));
    };
    Convert.signedDataToJson = function (value) {
        return JSON.stringify(uncast(value, r("SignedData")), null, 2);
    };
    Convert.toDigestedData = function (json) {
        return cast(JSON.parse(json), r("DigestedData"));
    };
    Convert.digestedDataToJson = function (value) {
        return JSON.stringify(uncast(value, r("DigestedData")), null, 2);
    };
    Convert.toNamedKeyEncryptedData = function (json) {
        return cast(JSON.parse(json), r("NamedKeyEncryptedData"));
    };
    Convert.namedKeyEncryptedDataToJson = function (value) {
        return JSON.stringify(uncast(value, r("NamedKeyEncryptedData")), null, 2);
    };
    Convert.toResponse = function (json) {
        return cast(JSON.parse(json), r("Response"));
    };
    Convert.responseToJson = function (value) {
        return JSON.stringify(uncast(value, r("Response")), null, 2);
    };
    Convert.toPaymentAccountStatus = function (json) {
        return cast(JSON.parse(json), r("PaymentAccountStatus"));
    };
    Convert.paymentAccountStatusToJson = function (value) {
        return JSON.stringify(uncast(value, r("PaymentAccountStatus")), null, 2);
    };
    Convert.toLoyaltyAccountStatus = function (json) {
        return cast(JSON.parse(json), r("LoyaltyAccountStatus"));
    };
    Convert.loyaltyAccountStatusToJson = function (value) {
        return JSON.stringify(uncast(value, r("LoyaltyAccountStatus")), null, 2);
    };
    Convert.toPerformedTransaction = function (json) {
        return cast(JSON.parse(json), r("PerformedTransaction"));
    };
    Convert.performedTransactionToJson = function (value) {
        return JSON.stringify(uncast(value, r("PerformedTransaction")), null, 2);
    };
    Convert.toPoiData = function (json) {
        return cast(JSON.parse(json), r("PoiData"));
    };
    Convert.poiDataToJson = function (value) {
        return JSON.stringify(uncast(value, r("PoiData")), null, 2);
    };
    Convert.toPaymentInstrumentData = function (json) {
        return cast(JSON.parse(json), r("PaymentInstrumentData"));
    };
    Convert.paymentInstrumentDataToJson = function (value) {
        return JSON.stringify(uncast(value, r("PaymentInstrumentData")), null, 2);
    };
    Convert.toLoyaltyAccount = function (json) {
        return cast(JSON.parse(json), r("LoyaltyAccount"));
    };
    Convert.loyaltyAccountToJson = function (value) {
        return JSON.stringify(uncast(value, r("LoyaltyAccount")), null, 2);
    };
    Convert.toPoiStatus = function (json) {
        return cast(JSON.parse(json), r("PoiStatus"));
    };
    Convert.poiStatusToJson = function (value) {
        return JSON.stringify(uncast(value, r("PoiStatus")), null, 2);
    };
    Convert.toHostStatus = function (json) {
        return cast(JSON.parse(json), r("HostStatus"));
    };
    Convert.hostStatusToJson = function (value) {
        return JSON.stringify(uncast(value, r("HostStatus")), null, 2);
    };
    Convert.toOutputResult = function (json) {
        return cast(JSON.parse(json), r("OutputResult"));
    };
    Convert.outputResultToJson = function (value) {
        return JSON.stringify(uncast(value, r("OutputResult")), null, 2);
    };
    Convert.toTransactionTotals = function (json) {
        return cast(JSON.parse(json), r("TransactionTotals"));
    };
    Convert.transactionTotalsToJson = function (value) {
        return JSON.stringify(uncast(value, r("TransactionTotals")), null, 2);
    };
    Convert.toInputResult = function (json) {
        return cast(JSON.parse(json), r("InputResult"));
    };
    Convert.inputResultToJson = function (value) {
        return JSON.stringify(uncast(value, r("InputResult")), null, 2);
    };
    Convert.toPoiSystemData = function (json) {
        return cast(JSON.parse(json), r("PoiSystemData"));
    };
    Convert.poiSystemDataToJson = function (value) {
        return JSON.stringify(uncast(value, r("PoiSystemData")), null, 2);
    };
    Convert.toLoyaltyResult = function (json) {
        return cast(JSON.parse(json), r("LoyaltyResult"));
    };
    Convert.loyaltyResultToJson = function (value) {
        return JSON.stringify(uncast(value, r("LoyaltyResult")), null, 2);
    };
    Convert.toPaymentReceipt = function (json) {
        return cast(JSON.parse(json), r("PaymentReceipt"));
    };
    Convert.paymentReceiptToJson = function (value) {
        return JSON.stringify(uncast(value, r("PaymentReceipt")), null, 2);
    };
    Convert.toPaymentResult = function (json) {
        return cast(JSON.parse(json), r("PaymentResult"));
    };
    Convert.paymentResultToJson = function (value) {
        return JSON.stringify(uncast(value, r("PaymentResult")), null, 2);
    };
    Convert.toTrackData = function (json) {
        return cast(JSON.parse(json), r("TrackData"));
    };
    Convert.trackDataToJson = function (value) {
        return JSON.stringify(uncast(value, r("TrackData")), null, 2);
    };
    Convert.toIccResetData = function (json) {
        return cast(JSON.parse(json), r("IccResetData"));
    };
    Convert.iccResetDataToJson = function (value) {
        return JSON.stringify(uncast(value, r("IccResetData")), null, 2);
    };
    Convert.toStoredValueResult = function (json) {
        return cast(JSON.parse(json), r("StoredValueResult"));
    };
    Convert.storedValueResultToJson = function (value) {
        return JSON.stringify(uncast(value, r("StoredValueResult")), null, 2);
    };
    Convert.toRepeatedMessageResponse = function (json) {
        return cast(JSON.parse(json), r("RepeatedMessageResponse"));
    };
    Convert.repeatedMessageResponseToJson = function (value) {
        return JSON.stringify(uncast(value, r("RepeatedMessageResponse")), null, 2);
    };
    Convert.toTransactionIdentification = function (json) {
        return cast(JSON.parse(json), r("TransactionIdentification"));
    };
    Convert.transactionIdentificationToJson = function (value) {
        return JSON.stringify(uncast(value, r("TransactionIdentification")), null, 2);
    };
    Convert.toLoyaltyAccountId = function (json) {
        return cast(JSON.parse(json), r("LoyaltyAccountId"));
    };
    Convert.loyaltyAccountIdToJson = function (value) {
        return JSON.stringify(uncast(value, r("LoyaltyAccountId")), null, 2);
    };
    Convert.toSponsoredMerchant = function (json) {
        return cast(JSON.parse(json), r("SponsoredMerchant"));
    };
    Convert.sponsoredMerchantToJson = function (value) {
        return JSON.stringify(uncast(value, r("SponsoredMerchant")), null, 2);
    };
    Convert.toSaleToIssuerData = function (json) {
        return cast(JSON.parse(json), r("SaleToIssuerData"));
    };
    Convert.saleToIssuerDataToJson = function (value) {
        return JSON.stringify(uncast(value, r("SaleToIssuerData")), null, 2);
    };
    Convert.toCloneable = function (json) {
        return cast(JSON.parse(json), m("any"));
    };
    Convert.cloneableToJson = function (value) {
        return JSON.stringify(uncast(value, m("any")), null, 2);
    };
    Convert.toPredefinedContent = function (json) {
        return cast(JSON.parse(json), r("PredefinedContent"));
    };
    Convert.predefinedContentToJson = function (value) {
        return JSON.stringify(uncast(value, r("PredefinedContent")), null, 2);
    };
    Convert.toOutputText = function (json) {
        return cast(JSON.parse(json), r("OutputText"));
    };
    Convert.outputTextToJson = function (value) {
        return JSON.stringify(uncast(value, r("OutputText")), null, 2);
    };
    Convert.toOutputBarcode = function (json) {
        return cast(JSON.parse(json), r("OutputBarcode"));
    };
    Convert.outputBarcodeToJson = function (value) {
        return JSON.stringify(uncast(value, r("OutputBarcode")), null, 2);
    };
    Convert.toSaleProfile = function (json) {
        return cast(JSON.parse(json), r("SaleProfile"));
    };
    Convert.saleProfileToJson = function (value) {
        return JSON.stringify(uncast(value, r("SaleProfile")), null, 2);
    };
    Convert.toTransactionConditions = function (json) {
        return cast(JSON.parse(json), r("TransactionConditions"));
    };
    Convert.transactionConditionsToJson = function (value) {
        return JSON.stringify(uncast(value, r("TransactionConditions")), null, 2);
    };
    Convert.toSaleItem = function (json) {
        return cast(JSON.parse(json), r("SaleItem"));
    };
    Convert.saleItemToJson = function (value) {
        return JSON.stringify(uncast(value, r("SaleItem")), null, 2);
    };
    Convert.toLoyaltyAmount = function (json) {
        return cast(JSON.parse(json), r("LoyaltyAmount"));
    };
    Convert.loyaltyAmountToJson = function (value) {
        return JSON.stringify(uncast(value, r("LoyaltyAmount")), null, 2);
    };
    Convert.toAmountsReq = function (json) {
        return cast(JSON.parse(json), r("AmountsReq"));
    };
    Convert.amountsReqToJson = function (value) {
        return JSON.stringify(uncast(value, r("AmountsReq")), null, 2);
    };
    Convert.toInstalment = function (json) {
        return cast(JSON.parse(json), r("Instalment"));
    };
    Convert.instalmentToJson = function (value) {
        return JSON.stringify(uncast(value, r("Instalment")), null, 2);
    };
    Convert.toStoredValueAccountId = function (json) {
        return cast(JSON.parse(json), r("StoredValueAccountId"));
    };
    Convert.storedValueAccountIdToJson = function (value) {
        return JSON.stringify(uncast(value, r("StoredValueAccountId")), null, 2);
    };
    Convert.toEncryptedContent = function (json) {
        return cast(JSON.parse(json), r("EncryptedContent"));
    };
    Convert.encryptedContentToJson = function (value) {
        return JSON.stringify(uncast(value, r("EncryptedContent")), null, 2);
    };
    Convert.toAlgorithmIdentifier = function (json) {
        return cast(JSON.parse(json), r("AlgorithmIdentifier"));
    };
    Convert.algorithmIdentifierToJson = function (value) {
        return JSON.stringify(uncast(value, r("AlgorithmIdentifier")), null, 2);
    };
    Convert.toEncapsulatedContent = function (json) {
        return cast(JSON.parse(json), r("EncapsulatedContent"));
    };
    Convert.encapsulatedContentToJson = function (value) {
        return JSON.stringify(uncast(value, r("EncapsulatedContent")), null, 2);
    };
    Convert.toSigner = function (json) {
        return cast(JSON.parse(json), r("Signer"));
    };
    Convert.signerToJson = function (value) {
        return JSON.stringify(uncast(value, r("Signer")), null, 2);
    };
    Convert.toPaymentAcquirerData = function (json) {
        return cast(JSON.parse(json), r("PaymentAcquirerData"));
    };
    Convert.paymentAcquirerDataToJson = function (value) {
        return JSON.stringify(uncast(value, r("PaymentAcquirerData")), null, 2);
    };
    Convert.toCardData = function (json) {
        return cast(JSON.parse(json), r("CardData"));
    };
    Convert.cardDataToJson = function (value) {
        return JSON.stringify(uncast(value, r("CardData")), null, 2);
    };
    Convert.toCheckData = function (json) {
        return cast(JSON.parse(json), r("CheckData"));
    };
    Convert.checkDataToJson = function (value) {
        return JSON.stringify(uncast(value, r("CheckData")), null, 2);
    };
    Convert.toMobileData = function (json) {
        return cast(JSON.parse(json), r("MobileData"));
    };
    Convert.mobileDataToJson = function (value) {
        return JSON.stringify(uncast(value, r("MobileData")), null, 2);
    };
    Convert.toCashHandlingDevice = function (json) {
        return cast(JSON.parse(json), r("CashHandlingDevice"));
    };
    Convert.cashHandlingDeviceToJson = function (value) {
        return JSON.stringify(uncast(value, r("CashHandlingDevice")), null, 2);
    };
    Convert.toPaymentTotals = function (json) {
        return cast(JSON.parse(json), r("PaymentTotals"));
    };
    Convert.paymentTotalsToJson = function (value) {
        return JSON.stringify(uncast(value, r("PaymentTotals")), null, 2);
    };
    Convert.toLoyaltyTotals = function (json) {
        return cast(JSON.parse(json), r("LoyaltyTotals"));
    };
    Convert.loyaltyTotalsToJson = function (value) {
        return JSON.stringify(uncast(value, r("LoyaltyTotals")), null, 2);
    };
    Convert.toInput = function (json) {
        return cast(JSON.parse(json), r("Input"));
    };
    Convert.inputToJson = function (value) {
        return JSON.stringify(uncast(value, r("Input")), null, 2);
    };
    Convert.toPoiSoftware = function (json) {
        return cast(JSON.parse(json), r("PoiSoftware"));
    };
    Convert.poiSoftwareToJson = function (value) {
        return JSON.stringify(uncast(value, r("PoiSoftware")), null, 2);
    };
    Convert.toPoiTerminalData = function (json) {
        return cast(JSON.parse(json), r("PoiTerminalData"));
    };
    Convert.poiTerminalDataToJson = function (value) {
        return JSON.stringify(uncast(value, r("PoiTerminalData")), null, 2);
    };
    Convert.toLoyaltyAcquirerData = function (json) {
        return cast(JSON.parse(json), r("LoyaltyAcquirerData"));
    };
    Convert.loyaltyAcquirerDataToJson = function (value) {
        return JSON.stringify(uncast(value, r("LoyaltyAcquirerData")), null, 2);
    };
    Convert.toRebates = function (json) {
        return cast(JSON.parse(json), r("Rebates"));
    };
    Convert.rebatesToJson = function (value) {
        return JSON.stringify(uncast(value, r("Rebates")), null, 2);
    };
    Convert.toAmountsResp = function (json) {
        return cast(JSON.parse(json), r("AmountsResp"));
    };
    Convert.amountsRespToJson = function (value) {
        return JSON.stringify(uncast(value, r("AmountsResp")), null, 2);
    };
    Convert.toCurrencyConversion = function (json) {
        return cast(JSON.parse(json), r("CurrencyConversion"));
    };
    Convert.currencyConversionToJson = function (value) {
        return JSON.stringify(uncast(value, r("CurrencyConversion")), null, 2);
    };
    Convert.toCapturedSignature = function (json) {
        return cast(JSON.parse(json), r("CapturedSignature"));
    };
    Convert.capturedSignatureToJson = function (value) {
        return JSON.stringify(uncast(value, r("CapturedSignature")), null, 2);
    };
    Convert.toStoredValueAccountStatus = function (json) {
        return cast(JSON.parse(json), r("StoredValueAccountStatus"));
    };
    Convert.storedValueAccountStatusToJson = function (value) {
        return JSON.stringify(uncast(value, r("StoredValueAccountStatus")), null, 2);
    };
    Convert.toRepeatedResponseMessageBody = function (json) {
        return cast(JSON.parse(json), r("RepeatedResponseMessageBody"));
    };
    Convert.repeatedResponseMessageBodyToJson = function (value) {
        return JSON.stringify(uncast(value, r("RepeatedResponseMessageBody")), null, 2);
    };
    Convert.toParameter = function (json) {
        return cast(JSON.parse(json), r("Parameter"));
    };
    Convert.parameterToJson = function (value) {
        return JSON.stringify(uncast(value, r("Parameter")), null, 2);
    };
    Convert.toSignerIdentifier = function (json) {
        return cast(JSON.parse(json), r("SignerIdentifier"));
    };
    Convert.signerIdentifierToJson = function (value) {
        return JSON.stringify(uncast(value, r("SignerIdentifier")), null, 2);
    };
    Convert.toSensitiveCardData = function (json) {
        return cast(JSON.parse(json), r("SensitiveCardData"));
    };
    Convert.sensitiveCardDataToJson = function (value) {
        return JSON.stringify(uncast(value, r("SensitiveCardData")), null, 2);
    };
    Convert.toAllowedProduct = function (json) {
        return cast(JSON.parse(json), r("AllowedProduct"));
    };
    Convert.allowedProductToJson = function (value) {
        return JSON.stringify(uncast(value, r("AllowedProduct")), null, 2);
    };
    Convert.toPaymentToken = function (json) {
        return cast(JSON.parse(json), r("PaymentToken"));
    };
    Convert.paymentTokenToJson = function (value) {
        return JSON.stringify(uncast(value, r("PaymentToken")), null, 2);
    };
    Convert.toGeolocation = function (json) {
        return cast(JSON.parse(json), r("Geolocation"));
    };
    Convert.geolocationToJson = function (value) {
        return JSON.stringify(uncast(value, r("Geolocation")), null, 2);
    };
    Convert.toSensitiveMobileData = function (json) {
        return cast(JSON.parse(json), r("SensitiveMobileData"));
    };
    Convert.sensitiveMobileDataToJson = function (value) {
        return JSON.stringify(uncast(value, r("SensitiveMobileData")), null, 2);
    };
    Convert.toCoinsOrBills = function (json) {
        return cast(JSON.parse(json), r("CoinsOrBills"));
    };
    Convert.coinsOrBillsToJson = function (value) {
        return JSON.stringify(uncast(value, r("CoinsOrBills")), null, 2);
    };
    Convert.toPoiProfile = function (json) {
        return cast(JSON.parse(json), r("PoiProfile"));
    };
    Convert.poiProfileToJson = function (value) {
        return JSON.stringify(uncast(value, r("PoiProfile")), null, 2);
    };
    Convert.toSaleItemRebate = function (json) {
        return cast(JSON.parse(json), r("SaleItemRebate"));
    };
    Convert.saleItemRebateToJson = function (value) {
        return JSON.stringify(uncast(value, r("SaleItemRebate")), null, 2);
    };
    Convert.toAmount = function (json) {
        return cast(JSON.parse(json), r("Amount"));
    };
    Convert.amountToJson = function (value) {
        return JSON.stringify(uncast(value, r("Amount")), null, 2);
    };
    Convert.toAreaSize = function (json) {
        return cast(JSON.parse(json), r("AreaSize"));
    };
    Convert.areaSizeToJson = function (value) {
        return JSON.stringify(uncast(value, r("AreaSize")), null, 2);
    };
    Convert.toSignaturePoint = function (json) {
        return cast(JSON.parse(json), r("SignaturePoint"));
    };
    Convert.signaturePointToJson = function (value) {
        return JSON.stringify(uncast(value, r("SignaturePoint")), null, 2);
    };
    Convert.toIssuerAndSerialNumber = function (json) {
        return cast(JSON.parse(json), r("IssuerAndSerialNumber"));
    };
    Convert.issuerAndSerialNumberToJson = function (value) {
        return JSON.stringify(uncast(value, r("IssuerAndSerialNumber")), null, 2);
    };
    Convert.toGeographicCoordinates = function (json) {
        return cast(JSON.parse(json), r("GeographicCoordinates"));
    };
    Convert.geographicCoordinatesToJson = function (value) {
        return JSON.stringify(uncast(value, r("GeographicCoordinates")), null, 2);
    };
    Convert.toUtmCoordinates = function (json) {
        return cast(JSON.parse(json), r("UtmCoordinates"));
    };
    Convert.utmCoordinatesToJson = function (value) {
        return JSON.stringify(uncast(value, r("UtmCoordinates")), null, 2);
    };
    Convert.toIssuer = function (json) {
        return cast(JSON.parse(json), r("Issuer"));
    };
    Convert.issuerToJson = function (value) {
        return JSON.stringify(uncast(value, r("Issuer")), null, 2);
    };
    Convert.toRelativeDistinguishedName = function (json) {
        return cast(JSON.parse(json), r("RelativeDistinguishedName"));
    };
    Convert.relativeDistinguishedNameToJson = function (value) {
        return JSON.stringify(uncast(value, r("RelativeDistinguishedName")), null, 2);
    };
    Convert.toMessageClassType = function (json) {
        return cast(JSON.parse(json), r("MessageClassType"));
    };
    Convert.messageClassTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("MessageClassType")), null, 2);
    };
    Convert.toMessageCategoryType = function (json) {
        return cast(JSON.parse(json), r("MessageCategoryType"));
    };
    Convert.messageCategoryTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("MessageCategoryType")), null, 2);
    };
    Convert.toMessageType = function (json) {
        return cast(JSON.parse(json), r("MessageType"));
    };
    Convert.messageTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("MessageType")), null, 2);
    };
    Convert.toServicesEnabledType = function (json) {
        return cast(JSON.parse(json), r("ServicesEnabledType"));
    };
    Convert.servicesEnabledTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("ServicesEnabledType")), null, 2);
    };
    Convert.toTransactionActionType = function (json) {
        return cast(JSON.parse(json), r("TransactionActionType"));
    };
    Convert.transactionActionTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("TransactionActionType")), null, 2);
    };
    Convert.toEventToNotifyType = function (json) {
        return cast(JSON.parse(json), r("EventToNotifyType"));
    };
    Convert.eventToNotifyTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("EventToNotifyType")), null, 2);
    };
    Convert.toTotalDetailsType = function (json) {
        return cast(JSON.parse(json), r("TotalDetailsType"));
    };
    Convert.totalDetailsTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("TotalDetailsType")), null, 2);
    };
    Convert.toTokenRequestedType = function (json) {
        return cast(JSON.parse(json), r("TokenRequestedType"));
    };
    Convert.tokenRequestedTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("TokenRequestedType")), null, 2);
    };
    Convert.toCustomerOrderReqType = function (json) {
        return cast(JSON.parse(json), r("CustomerOrderReqType"));
    };
    Convert.customerOrderReqTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("CustomerOrderReqType")), null, 2);
    };
    Convert.toPinRequestType = function (json) {
        return cast(JSON.parse(json), r("PinRequestType"));
    };
    Convert.pinRequestTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("PinRequestType")), null, 2);
    };
    Convert.toPinFormatType = function (json) {
        return cast(JSON.parse(json), r("PinFormatType"));
    };
    Convert.pinFormatTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("PinFormatType")), null, 2);
    };
    Convert.toForceEntryModeType = function (json) {
        return cast(JSON.parse(json), r("ForceEntryModeType"));
    };
    Convert.forceEntryModeTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("ForceEntryModeType")), null, 2);
    };
    Convert.toReconciliationType = function (json) {
        return cast(JSON.parse(json), r("ReconciliationType"));
    };
    Convert.reconciliationTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("ReconciliationType")), null, 2);
    };
    Convert.toReversalReasonType = function (json) {
        return cast(JSON.parse(json), r("ReversalReasonType"));
    };
    Convert.reversalReasonTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("ReversalReasonType")), null, 2);
    };
    Convert.toResponseModeType = function (json) {
        return cast(JSON.parse(json), r("ResponseModeType"));
    };
    Convert.responseModeTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("ResponseModeType")), null, 2);
    };
    Convert.toSoundActionType = function (json) {
        return cast(JSON.parse(json), r("SoundActionType"));
    };
    Convert.soundActionTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("SoundActionType")), null, 2);
    };
    Convert.toDocumentQualifierType = function (json) {
        return cast(JSON.parse(json), r("DocumentQualifierType"));
    };
    Convert.documentQualifierTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("DocumentQualifierType")), null, 2);
    };
    Convert.toContentType = function (json) {
        return cast(JSON.parse(json), r("ContentType"));
    };
    Convert.contentTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("ContentType")), null, 2);
    };
    Convert.toEntryModeType = function (json) {
        return cast(JSON.parse(json), r("EntryModeType"));
    };
    Convert.entryModeTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("EntryModeType")), null, 2);
    };
    Convert.toDeviceType = function (json) {
        return cast(JSON.parse(json), r("DeviceType"));
    };
    Convert.deviceTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("DeviceType")), null, 2);
    };
    Convert.toInfoQualifyType = function (json) {
        return cast(JSON.parse(json), r("InfoQualifyType"));
    };
    Convert.infoQualifyTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("InfoQualifyType")), null, 2);
    };
    Convert.toAccountType = function (json) {
        return cast(JSON.parse(json), r("AccountType"));
    };
    Convert.accountTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("AccountType")), null, 2);
    };
    Convert.toLoyaltyHandlingType = function (json) {
        return cast(JSON.parse(json), r("LoyaltyHandlingType"));
    };
    Convert.loyaltyHandlingTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("LoyaltyHandlingType")), null, 2);
    };
    Convert.toPaymentType = function (json) {
        return cast(JSON.parse(json), r("PaymentType"));
    };
    Convert.paymentTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("PaymentType")), null, 2);
    };
    Convert.toInputCommandType = function (json) {
        return cast(JSON.parse(json), r("InputCommandType"));
    };
    Convert.inputCommandTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("InputCommandType")), null, 2);
    };
    Convert.toOutputFormatType = function (json) {
        return cast(JSON.parse(json), r("OutputFormatType"));
    };
    Convert.outputFormatTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("OutputFormatType")), null, 2);
    };
    Convert.toMenuEntryTagType = function (json) {
        return cast(JSON.parse(json), r("MenuEntryTagType"));
    };
    Convert.menuEntryTagTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("MenuEntryTagType")), null, 2);
    };
    Convert.toSaleCapabilitiesType = function (json) {
        return cast(JSON.parse(json), r("SaleCapabilitiesType"));
    };
    Convert.saleCapabilitiesTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("SaleCapabilitiesType")), null, 2);
    };
    Convert.toTerminalEnvironmentType = function (json) {
        return cast(JSON.parse(json), r("TerminalEnvironmentType"));
    };
    Convert.terminalEnvironmentTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("TerminalEnvironmentType")), null, 2);
    };
    Convert.toLoyaltyTransactionType = function (json) {
        return cast(JSON.parse(json), r("LoyaltyTransactionType"));
    };
    Convert.loyaltyTransactionTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("LoyaltyTransactionType")), null, 2);
    };
    Convert.toSoundFormatType = function (json) {
        return cast(JSON.parse(json), r("SoundFormatType"));
    };
    Convert.soundFormatTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("SoundFormatType")), null, 2);
    };
    Convert.toStoredValueTransactionType = function (json) {
        return cast(JSON.parse(json), r("StoredValueTransactionType"));
    };
    Convert.storedValueTransactionTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("StoredValueTransactionType")), null, 2);
    };
    Convert.toVersionType = function (json) {
        return cast(JSON.parse(json), r("VersionType"));
    };
    Convert.versionTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("VersionType")), null, 2);
    };
    Convert.toResultType = function (json) {
        return cast(JSON.parse(json), r("ResultType"));
    };
    Convert.resultTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("ResultType")), null, 2);
    };
    Convert.toErrorConditionType = function (json) {
        return cast(JSON.parse(json), r("ErrorConditionType"));
    };
    Convert.errorConditionTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("ErrorConditionType")), null, 2);
    };
    Convert.toLoyaltyUnitType = function (json) {
        return cast(JSON.parse(json), r("LoyaltyUnitType"));
    };
    Convert.loyaltyUnitTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("LoyaltyUnitType")), null, 2);
    };
    Convert.toPaymentInstrumentType = function (json) {
        return cast(JSON.parse(json), r("PaymentInstrumentType"));
    };
    Convert.paymentInstrumentTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("PaymentInstrumentType")), null, 2);
    };
    Convert.toGlobalStatusType = function (json) {
        return cast(JSON.parse(json), r("GlobalStatusType"));
    };
    Convert.globalStatusTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("GlobalStatusType")), null, 2);
    };
    Convert.toPrinterStatusType = function (json) {
        return cast(JSON.parse(json), r("PrinterStatusType"));
    };
    Convert.printerStatusTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("PrinterStatusType")), null, 2);
    };
    Convert.toAuthenticationMethodType = function (json) {
        return cast(JSON.parse(json), r("AuthenticationMethodType"));
    };
    Convert.authenticationMethodTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("AuthenticationMethodType")), null, 2);
    };
    Convert.toTrackFormatType = function (json) {
        return cast(JSON.parse(json), r("TrackFormatType"));
    };
    Convert.trackFormatTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("TrackFormatType")), null, 2);
    };
    Convert.toIdentificationType = function (json) {
        return cast(JSON.parse(json), r("IdentificationType"));
    };
    Convert.identificationTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("IdentificationType")), null, 2);
    };
    Convert.toIdentificationSupportType = function (json) {
        return cast(JSON.parse(json), r("IdentificationSupportType"));
    };
    Convert.identificationSupportTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("IdentificationSupportType")), null, 2);
    };
    Convert.toColorType = function (json) {
        return cast(JSON.parse(json), r("ColorType"));
    };
    Convert.colorTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("ColorType")), null, 2);
    };
    Convert.toCharacterWidthType = function (json) {
        return cast(JSON.parse(json), r("CharacterWidthType"));
    };
    Convert.characterWidthTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("CharacterWidthType")), null, 2);
    };
    Convert.toCharacterHeightType = function (json) {
        return cast(JSON.parse(json), r("CharacterHeightType"));
    };
    Convert.characterHeightTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("CharacterHeightType")), null, 2);
    };
    Convert.toCharacterStyleType = function (json) {
        return cast(JSON.parse(json), r("CharacterStyleType"));
    };
    Convert.characterStyleTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("CharacterStyleType")), null, 2);
    };
    Convert.toAlignmentType = function (json) {
        return cast(JSON.parse(json), r("AlignmentType"));
    };
    Convert.alignmentTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("AlignmentType")), null, 2);
    };
    Convert.toBarcodeType = function (json) {
        return cast(JSON.parse(json), r("BarcodeType"));
    };
    Convert.barcodeTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("BarcodeType")), null, 2);
    };
    Convert.toServiceProfilesType = function (json) {
        return cast(JSON.parse(json), r("ServiceProfilesType"));
    };
    Convert.serviceProfilesTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("ServiceProfilesType")), null, 2);
    };
    Convert.toGenericProfileType = function (json) {
        return cast(JSON.parse(json), r("GenericProfileType"));
    };
    Convert.genericProfileTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("GenericProfileType")), null, 2);
    };
    Convert.toUnitOfMeasureType = function (json) {
        return cast(JSON.parse(json), r("UnitOfMeasureType"));
    };
    Convert.unitOfMeasureTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("UnitOfMeasureType")), null, 2);
    };
    Convert.toInstalmentType = function (json) {
        return cast(JSON.parse(json), r("InstalmentType"));
    };
    Convert.instalmentTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("InstalmentType")), null, 2);
    };
    Convert.toPeriodUnitType = function (json) {
        return cast(JSON.parse(json), r("PeriodUnitType"));
    };
    Convert.periodUnitTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("PeriodUnitType")), null, 2);
    };
    Convert.toStoredValueAccountType = function (json) {
        return cast(JSON.parse(json), r("StoredValueAccountType"));
    };
    Convert.storedValueAccountTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("StoredValueAccountType")), null, 2);
    };
    Convert.toAlgorithmType = function (json) {
        return cast(JSON.parse(json), r("AlgorithmType"));
    };
    Convert.algorithmTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("AlgorithmType")), null, 2);
    };
    Convert.toCheckTypeCodeType = function (json) {
        return cast(JSON.parse(json), r("CheckTypeCodeType"));
    };
    Convert.checkTypeCodeTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("CheckTypeCodeType")), null, 2);
    };
    Convert.toTransactionType = function (json) {
        return cast(JSON.parse(json), r("TransactionType"));
    };
    Convert.transactionTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("TransactionType")), null, 2);
    };
    Convert.toPoiCapabilitiesType = function (json) {
        return cast(JSON.parse(json), r("PoiCapabilitiesType"));
    };
    Convert.poiCapabilitiesTypeToJson = function (value) {
        return JSON.stringify(uncast(value, r("PoiCapabilitiesType")), null, 2);
    };
    return Convert;
}());
export { Convert };
function invalidValue(typ, val) {
    throw Error("Invalid value " + JSON.stringify(val) + " for type " + JSON.stringify(typ));
}
function jsonToJSProps(typ) {
    if (typ.jsonToJS === undefined) {
        var map = {};
        typ.props.forEach(function (p) { return map[p.json] = { key: p.js, typ: p.typ }; });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}
function jsToJSONProps(typ) {
    if (typ.jsToJSON === undefined) {
        var map = {};
        typ.props.forEach(function (p) { return map[p.js] = { key: p.json, typ: p.typ }; });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}
function transform(val, typ, getProps) {
    function transformPrimitive(typ, val) {
        if (typeof typ === typeof val)
            return val;
        return invalidValue(typ, val);
    }
    function transformUnion(typs, val) {
        // val must validate against one typ in typs
        var l = typs.length;
        for (var i = 0; i < l; i++) {
            var typ = typs[i];
            try {
                return transform(val, typ, getProps);
            }
            catch (_) { }
        }
        return invalidValue(typs, val);
    }
    function transformEnum(cases, val) {
        if (cases.indexOf(val) !== -1)
            return val;
        return invalidValue(cases, val);
    }
    function transformArray(typ, val) {
        // val must be an array with no invalid elements
        if (!Array.isArray(val))
            return invalidValue("array", val);
        return val.map(function (el) { return transform(el, typ, getProps); });
    }
    function transformDate(typ, val) {
        if (val === null) {
            return null;
        }
        var d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }
    function transformObject(props, additional, val) {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        var result = {};
        Object.getOwnPropertyNames(props).forEach(function (key) {
            var prop = props[key];
            var v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps);
        });
        Object.getOwnPropertyNames(val).forEach(function (key) {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps);
            }
        });
        return result;
    }
    if (typ === "any")
        return val;
    if (typ === null) {
        if (val === null)
            return val;
        return invalidValue(typ, val);
    }
    if (typ === false)
        return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ))
        return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems") ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props") ? transformObject(getProps(typ), typ.additional, val)
                    : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number")
        return transformDate(typ, val);
    return transformPrimitive(typ, val);
}
function cast(val, typ) {
    return transform(val, typ, jsonToJSProps);
}
function uncast(val, typ) {
    return transform(val, typ, jsToJSONProps);
}
function a(typ) {
    return { arrayItems: typ };
}
function u() {
    var typs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        typs[_i] = arguments[_i];
    }
    return { unionMembers: typs };
}
function o(props, additional) {
    return { props: props, additional: additional };
}
function m(additional) {
    // @ts-ignore
    return { props: [], additional: additional };
}
function r(name) {
    return { ref: name };
}
var typeMap = {
    "TerminalApiRequest": o([
        { json: "SaleToPOIRequest", js: "saleToPoiRequest", typ: u(undefined, r("SaleToPoiRequest")) },
    ], "any"),
    "SaleToPoiRequest": o([
        { json: "AbortRequest", js: "abortRequest", typ: u(undefined, r("AbortRequest")) },
        { json: "AdminRequest", js: "adminRequest", typ: u(undefined, r("AdminRequest")) },
        { json: "BalanceInquiryRequest", js: "balanceInquiryRequest", typ: u(undefined, r("BalanceInquiryRequest")) },
        { json: "BatchRequest", js: "batchRequest", typ: u(undefined, r("BatchRequest")) },
        { json: "CardAcquisitionRequest", js: "cardAcquisitionRequest", typ: u(undefined, r("CardAcquisitionRequest")) },
        { json: "CardReaderAPDURequest", js: "cardReaderApduRequest", typ: u(undefined, r("CardReaderApduRequest")) },
        { json: "CardReaderInitRequest", js: "cardReaderInitRequest", typ: u(undefined, r("CardReaderInitRequest")) },
        { json: "CardReaderPowerOffRequest", js: "cardReaderPowerOffRequest", typ: u(undefined, r("CardReaderPowerOffRequest")) },
        { json: "DiagnosisRequest", js: "diagnosisRequest", typ: u(undefined, r("DiagnosisRequest")) },
        { json: "DisplayRequest", js: "displayRequest", typ: u(undefined, r("DisplayRequest")) },
        { json: "EnableServiceRequest", js: "enableServiceRequest", typ: u(undefined, r("EnableServiceRequest")) },
        { json: "EventNotification", js: "eventNotification", typ: u(undefined, r("EventNotification")) },
        { json: "GetTotalsRequest", js: "getTotalsRequest", typ: u(undefined, r("GetTotalsRequest")) },
        { json: "InputRequest", js: "inputRequest", typ: u(undefined, r("InputRequest")) },
        { json: "InputUpdate", js: "inputUpdate", typ: u(undefined, r("InputUpdate")) },
        { json: "LoginRequest", js: "loginRequest", typ: u(undefined, r("LoginRequest")) },
        { json: "LogoutRequest", js: "logoutRequest", typ: u(undefined, r("LogoutRequest")) },
        { json: "LoyaltyRequest", js: "loyaltyRequest", typ: u(undefined, r("LoyaltyRequest")) },
        { json: "MessageHeader", js: "messageHeader", typ: r("MessageHeader") },
        { json: "PaymentRequest", js: "paymentRequest", typ: u(undefined, r("PaymentRequest")) },
        { json: "PINRequest", js: "pinRequest", typ: u(undefined, r("PinRequest")) },
        { json: "PrintRequest", js: "printRequest", typ: u(undefined, r("PrintRequest")) },
        { json: "ReconciliationRequest", js: "reconciliationRequest", typ: u(undefined, r("ReconciliationRequest")) },
        { json: "ReversalRequest", js: "reversalRequest", typ: u(undefined, r("ReversalRequest")) },
        { json: "SecurityTrailer", js: "securityTrailer", typ: u(undefined, r("ContentInformation")) },
        { json: "SoundRequest", js: "soundRequest", typ: u(undefined, r("SoundRequest")) },
        { json: "StoredValueRequest", js: "storedValueRequest", typ: u(undefined, r("StoredValueRequest")) },
        { json: "TransactionStatusRequest", js: "transactionStatusRequest", typ: u(undefined, r("TransactionStatusRequest")) },
        { json: "TransmitRequest", js: "transmitRequest", typ: u(undefined, r("TransmitRequest")) },
    ], "any"),
    "AbortRequest": o([
        { json: "AbortReason", js: "abortReason", typ: "" },
        { json: "DisplayOutput", js: "displayOutput", typ: u(undefined, r("DisplayOutput")) },
        { json: "MessageReference", js: "messageReference", typ: r("MessageReference") },
    ], "any"),
    "DisplayOutput": o([
        { json: "Device", js: "device", typ: r("DeviceType") },
        { json: "InfoQualify", js: "infoQualify", typ: r("InfoQualifyType") },
        { json: "MenuEntry", js: "menuEntry", typ: u(undefined, a(r("MenuEntry"))) },
        { json: "MinimumDisplayTime", js: "minimumDisplayTime", typ: u(undefined, 3.14) },
        { json: "OutputContent", js: "outputContent", typ: r("OutputContent") },
        { json: "OutputSignature", js: "outputSignature", typ: u(undefined, "any") },
        { json: "ResponseRequiredFlag", js: "responseRequiredFlag", typ: u(undefined, true) },
    ], "any"),
    "MenuEntry": o([
        { json: "DefaultSelectedFlag", js: "defaultSelectedFlag", typ: u(undefined, true) },
        { json: "MenuEntryTag", js: "menuEntryTag", typ: u(undefined, r("MenuEntryTagType")) },
        { json: "OutputFormat", js: "outputFormat", typ: r("OutputFormatType") },
        { json: "OutputText", js: "outputText", typ: u(undefined, a(r("OutputText"))) },
        { json: "OutputXHTML", js: "outputXhtml", typ: u(undefined, "any") },
        { json: "PredefinedContent", js: "predefinedContent", typ: u(undefined, r("PredefinedContent")) },
    ], "any"),
    "OutputText": o([
        { json: "Alignment", js: "alignment", typ: u(undefined, r("AlignmentType")) },
        { json: "CharacterHeight", js: "characterHeight", typ: u(undefined, r("CharacterHeightType")) },
        { json: "CharacterSet", js: "characterSet", typ: u(undefined, 3.14) },
        { json: "CharacterStyle", js: "characterStyle", typ: u(undefined, r("CharacterStyleType")) },
        { json: "CharacterWidth", js: "characterWidth", typ: u(undefined, r("CharacterWidthType")) },
        { json: "Color", js: "color", typ: u(undefined, r("ColorType")) },
        { json: "EndOfLineFlag", js: "endOfLineFlag", typ: u(undefined, true) },
        { json: "Font", js: "font", typ: u(undefined, "") },
        { json: "StartColumn", js: "startColumn", typ: u(undefined, 3.14) },
        { json: "StartRow", js: "startRow", typ: u(undefined, 3.14) },
        { json: "Text", js: "text", typ: u(undefined, "") },
    ], "any"),
    "PredefinedContent": o([
        { json: "Language", js: "language", typ: u(undefined, "") },
        { json: "ReferenceID", js: "referenceId", typ: "" },
    ], "any"),
    "OutputContent": o([
        { json: "OutputBarcode", js: "outputBarcode", typ: u(undefined, r("OutputBarcode")) },
        { json: "OutputFormat", js: "outputFormat", typ: r("OutputFormatType") },
        { json: "OutputText", js: "outputText", typ: u(undefined, a(r("OutputText"))) },
        { json: "OutputXHTML", js: "outputXhtml", typ: u(undefined, "any") },
        { json: "PredefinedContent", js: "predefinedContent", typ: u(undefined, r("PredefinedContent")) },
    ], "any"),
    "OutputBarcode": o([
        { json: "BarcodeType", js: "barcodeType", typ: u(undefined, r("BarcodeType")) },
        { json: "value", js: "value", typ: u(undefined, "") },
    ], "any"),
    "MessageReference": o([
        { json: "DeviceID", js: "deviceId", typ: u(undefined, "") },
        { json: "MessageCategory", js: "messageCategory", typ: u(undefined, r("MessageCategoryType")) },
        { json: "POIID", js: "poiid", typ: u(undefined, "") },
        { json: "SaleID", js: "saleId", typ: u(undefined, "") },
        { json: "ServiceID", js: "serviceId", typ: u(undefined, "") },
    ], "any"),
    "AdminRequest": o([
        { json: "ServiceIdentification", js: "serviceIdentification", typ: u(undefined, "") },
    ], "any"),
    "BalanceInquiryRequest": o([
        { json: "LoyaltyAccountReq", js: "loyaltyAccountReq", typ: u(undefined, r("LoyaltyAccountReq")) },
        { json: "PaymentAccountReq", js: "paymentAccountReq", typ: u(undefined, r("PaymentAccountReq")) },
    ], "any"),
    "LoyaltyAccountReq": o([
        { json: "CardAcquisitionReference", js: "cardAcquisitionReference", typ: u(undefined, r("TransactionIdentification")) },
        { json: "LoyaltyAccountID", js: "loyaltyAccountId", typ: u(undefined, r("LoyaltyAccountId")) },
    ], "any"),
    "TransactionIdentification": o([
        { json: "TimeStamp", js: "timeStamp", typ: "" },
        { json: "TransactionID", js: "transactionId", typ: "" },
    ], "any"),
    "LoyaltyAccountId": o([
        { json: "EntryMode", js: "entryMode", typ: a(r("EntryModeType")) },
        { json: "IdentificationSupport", js: "identificationSupport", typ: u(undefined, r("IdentificationSupportType")) },
        { json: "IdentificationType", js: "identificationType", typ: r("IdentificationType") },
        { json: "value", js: "value", typ: u(undefined, "") },
    ], "any"),
    "PaymentAccountReq": o([
        { json: "AccountType", js: "accountType", typ: u(undefined, r("AccountType")) },
        { json: "CardAcquisitionReference", js: "cardAcquisitionReference", typ: u(undefined, r("TransactionIdentification")) },
        { json: "PaymentInstrumentData", js: "paymentInstrumentData", typ: u(undefined, r("PaymentInstrumentData")) },
    ], "any"),
    "PaymentInstrumentData": o([
        { json: "CardData", js: "cardData", typ: u(undefined, r("CardData")) },
        { json: "CheckData", js: "checkData", typ: u(undefined, r("CheckData")) },
        { json: "MobileData", js: "mobileData", typ: u(undefined, r("MobileData")) },
        { json: "PaymentInstrumentType", js: "paymentInstrumentType", typ: r("PaymentInstrumentType") },
    ], "any"),
    "CardData": o([
        { json: "AllowedProduct", js: "allowedProduct", typ: u(undefined, a(r("AllowedProduct"))) },
        { json: "AllowedProductCode", js: "allowedProductCode", typ: u(undefined, a("")) },
        { json: "CardCountryCode", js: "cardCountryCode", typ: u(undefined, "") },
        { json: "CustomerOrder", js: "customerOrder", typ: u(undefined, a(r("CustomerOrder"))) },
        { json: "EntryMode", js: "entryMode", typ: u(undefined, a(r("EntryModeType"))) },
        { json: "MaskedPan", js: "maskedPan", typ: u(undefined, "") },
        { json: "PaymentAccountRef", js: "paymentAccountRef", typ: u(undefined, "") },
        { json: "PaymentBrand", js: "paymentBrand", typ: u(undefined, "") },
        { json: "PaymentToken", js: "paymentToken", typ: u(undefined, r("PaymentToken")) },
        { json: "ProtectedCardData", js: "protectedCardData", typ: u(undefined, r("ContentInformation")) },
        { json: "SensitiveCardData", js: "sensitiveCardData", typ: u(undefined, r("SensitiveCardData")) },
    ], "any"),
    "AllowedProduct": o([
        { json: "AdditionalProductInfo", js: "additionalProductInfo", typ: u(undefined, "") },
        { json: "EanUpc", js: "eanUpc", typ: u(undefined, "") },
        { json: "ProductCode", js: "productCode", typ: "" },
        { json: "ProductLabel", js: "productLabel", typ: u(undefined, "") },
    ], "any"),
    "CustomerOrder": o([
        { json: "AccessedBy", js: "accessedBy", typ: u(undefined, "") },
        { json: "AdditionalInformation", js: "additionalInformation", typ: u(undefined, "") },
        { json: "Currency", js: "currency", typ: u(undefined, "") },
        { json: "CurrentAmount", js: "currentAmount", typ: 3.14 },
        { json: "CustomerOrderID", js: "customerOrderId", typ: "" },
        { json: "EndDate", js: "endDate", typ: u(undefined, m("any")) },
        { json: "ForecastedAmount", js: "forecastedAmount", typ: 3.14 },
        { json: "OpenOrderState", js: "openOrderState", typ: u(undefined, true) },
        { json: "StartDate", js: "startDate", typ: m("any") },
    ], "any"),
    "PaymentToken": o([
        { json: "ExpiryDateTime", js: "expiryDateTime", typ: u(undefined, m("any")) },
        { json: "TokenRequestedType", js: "tokenRequestedType", typ: r("TokenRequestedType") },
        { json: "TokenValue", js: "tokenValue", typ: "" },
    ], "any"),
    "ContentInformation": o([
        { json: "AuthenticatedData", js: "authenticatedData", typ: u(undefined, r("AuthenticatedData")) },
        { json: "ContentType", js: "contentType", typ: r("ContentType") },
        { json: "DigestedData", js: "digestedData", typ: u(undefined, r("DigestedData")) },
        { json: "EnvelopedData", js: "envelopedData", typ: u(undefined, r("EnvelopedData")) },
        { json: "NamedKeyEncryptedData", js: "namedKeyEncryptedData", typ: u(undefined, r("NamedKeyEncryptedData")) },
        { json: "SignedData", js: "signedData", typ: u(undefined, r("SignedData")) },
    ], "any"),
    "AuthenticatedData": o([
        { json: "EncapsulatedContent", js: "encapsulatedContent", typ: r("EncapsulatedContent") },
        { json: "keyTransportOrKEK", js: "keyTransportOrKek", typ: u(undefined, a("any")) },
        { json: "MAC", js: "mac", typ: "any" },
        { json: "MACAlgorithm", js: "macAlgorithm", typ: r("AlgorithmIdentifier") },
        { json: "Version", js: "version", typ: u(undefined, r("VersionType")) },
    ], "any"),
    "EncapsulatedContent": o([
        { json: "Content", js: "content", typ: u(undefined, "any") },
        { json: "ContentType", js: "contentType", typ: r("ContentType") },
    ], "any"),
    "AlgorithmIdentifier": o([
        { json: "Algorithm", js: "algorithm", typ: r("AlgorithmType") },
        { json: "Parameter", js: "parameter", typ: u(undefined, r("Parameter")) },
    ], "any"),
    "Parameter": o([
        { json: "InitialisationVector", js: "initialisationVector", typ: u(undefined, "any") },
    ], "any"),
    "DigestedData": o([
        { json: "Digest", js: "digest", typ: "any" },
        { json: "DigestAlgorithm", js: "digestAlgorithm", typ: r("AlgorithmIdentifier") },
        { json: "EncapsulatedContent", js: "encapsulatedContent", typ: r("EncapsulatedContent") },
        { json: "Version", js: "version", typ: u(undefined, r("VersionType")) },
    ], "any"),
    "EnvelopedData": o([
        { json: "EncryptedContent", js: "encryptedContent", typ: r("EncryptedContent") },
        { json: "keyTransportOrKEK", js: "keyTransportOrKek", typ: u(undefined, a("any")) },
        { json: "Version", js: "version", typ: u(undefined, r("VersionType")) },
    ], "any"),
    "EncryptedContent": o([
        { json: "ContentEncryptionAlgorithm", js: "contentEncryptionAlgorithm", typ: r("AlgorithmIdentifier") },
        { json: "ContentType", js: "contentType", typ: r("ContentType") },
        { json: "EncryptedData", js: "encryptedData", typ: "any" },
    ], "any"),
    "NamedKeyEncryptedData": o([
        { json: "EncryptedContent", js: "encryptedContent", typ: r("EncryptedContent") },
        { json: "KeyName", js: "keyName", typ: u(undefined, "") },
        { json: "Version", js: "version", typ: u(undefined, r("VersionType")) },
    ], "any"),
    "SignedData": o([
        { json: "Certificate", js: "certificate", typ: u(undefined, a("any")) },
        { json: "DigestAlgorithm", js: "digestAlgorithm", typ: a(r("AlgorithmIdentifier")) },
        { json: "EncapsulatedContent", js: "encapsulatedContent", typ: r("EncapsulatedContent") },
        { json: "Signer", js: "signer", typ: a(r("Signer")) },
        { json: "Version", js: "version", typ: u(undefined, r("VersionType")) },
    ], "any"),
    "Signer": o([
        { json: "DigestAlgorithm", js: "digestAlgorithm", typ: r("AlgorithmIdentifier") },
        { json: "Signature", js: "signature", typ: "any" },
        { json: "SignatureAlgorithm", js: "signatureAlgorithm", typ: r("AlgorithmIdentifier") },
        { json: "SignerIdentifier", js: "signerIdentifier", typ: r("SignerIdentifier") },
        { json: "Version", js: "version", typ: u(undefined, r("VersionType")) },
    ], "any"),
    "SignerIdentifier": o([
        { json: "IssuerAndSerialNumber", js: "issuerAndSerialNumber", typ: r("IssuerAndSerialNumber") },
    ], "any"),
    "IssuerAndSerialNumber": o([
        { json: "Issuer", js: "issuer", typ: r("Issuer") },
        { json: "SerialNumber", js: "serialNumber", typ: 3.14 },
    ], "any"),
    "Issuer": o([
        { json: "RelativeDistinguishedName", js: "relativeDistinguishedName", typ: a(r("RelativeDistinguishedName")) },
    ], "any"),
    "RelativeDistinguishedName": o([
        { json: "Attribute", js: "attribute", typ: "" },
        { json: "AttributeValue", js: "attributeValue", typ: "" },
    ], "any"),
    "SensitiveCardData": o([
        { json: "CardSeqNumb", js: "cardSeqNumb", typ: u(undefined, "") },
        { json: "ExpiryDate", js: "expiryDate", typ: u(undefined, "") },
        { json: "PAN", js: "pan", typ: u(undefined, "") },
        { json: "TrackData", js: "trackData", typ: u(undefined, a(r("TrackData"))) },
    ], "any"),
    "TrackData": o([
        { json: "TrackFormat", js: "trackFormat", typ: u(undefined, r("TrackFormatType")) },
        { json: "TrackNumb", js: "trackNumb", typ: u(undefined, 3.14) },
        { json: "value", js: "value", typ: u(undefined, "") },
    ], "any"),
    "CheckData": o([
        { json: "AccountNumber", js: "accountNumber", typ: u(undefined, "") },
        { json: "BankID", js: "bankId", typ: u(undefined, "") },
        { json: "CheckCardNumber", js: "checkCardNumber", typ: u(undefined, "") },
        { json: "CheckNumber", js: "checkNumber", typ: u(undefined, "") },
        { json: "Country", js: "country", typ: u(undefined, "") },
        { json: "TrackData", js: "trackData", typ: u(undefined, r("TrackData")) },
        { json: "TypeCode", js: "typeCode", typ: u(undefined, r("CheckTypeCodeType")) },
    ], "any"),
    "MobileData": o([
        { json: "Geolocation", js: "geolocation", typ: u(undefined, r("Geolocation")) },
        { json: "MaskedMSISDN", js: "maskedMsisdn", typ: u(undefined, "") },
        { json: "MobileCountryCode", js: "mobileCountryCode", typ: u(undefined, "") },
        { json: "MobileNetworkCode", js: "mobileNetworkCode", typ: u(undefined, "") },
        { json: "ProtectedMobileData", js: "protectedMobileData", typ: u(undefined, r("ContentInformation")) },
        { json: "SensitiveMobileData", js: "sensitiveMobileData", typ: u(undefined, r("SensitiveMobileData")) },
    ], "any"),
    "Geolocation": o([
        { json: "GeographicCoordinates", js: "geographicCoordinates", typ: u(undefined, r("GeographicCoordinates")) },
        { json: "UTMCoordinates", js: "utmCoordinates", typ: u(undefined, r("UtmCoordinates")) },
    ], "any"),
    "GeographicCoordinates": o([
        { json: "Latitude", js: "latitude", typ: "" },
        { json: "Longitude", js: "longitude", typ: "" },
    ], "any"),
    "UtmCoordinates": o([
        { json: "UTMEastward", js: "utmEastward", typ: "" },
        { json: "UTMNorthward", js: "utmNorthward", typ: "" },
        { json: "UTMZone", js: "utmZone", typ: "" },
    ], "any"),
    "SensitiveMobileData": o([
        { json: "IMEI", js: "imei", typ: u(undefined, "") },
        { json: "IMSI", js: "imsi", typ: u(undefined, "") },
        { json: "MSISDN", js: "msisdn", typ: "" },
    ], "any"),
    "BatchRequest": o([
        { json: "RemoveAllFlag", js: "removeAllFlag", typ: u(undefined, true) },
        { json: "TransactionToPerform", js: "transactionToPerform", typ: u(undefined, a(r("TransactionToPerform"))) },
    ], "any"),
    "TransactionToPerform": o([
        { json: "LoyaltyRequest", js: "loyaltyRequest", typ: u(undefined, r("LoyaltyRequest")) },
        { json: "PaymentRequest", js: "paymentRequest", typ: u(undefined, r("PaymentRequest")) },
        { json: "ReversalRequest", js: "reversalRequest", typ: u(undefined, r("ReversalRequest")) },
    ], "any"),
    "LoyaltyRequest": o([
        { json: "LoyaltyData", js: "loyaltyData", typ: u(undefined, a(r("LoyaltyData"))) },
        { json: "LoyaltyTransaction", js: "loyaltyTransaction", typ: r("LoyaltyTransaction") },
        { json: "SaleData", js: "saleData", typ: r("SaleData") },
    ], "any"),
    "LoyaltyData": o([
        { json: "CardAcquisitionReference", js: "cardAcquisitionReference", typ: u(undefined, r("TransactionIdentification")) },
        { json: "LoyaltyAccountID", js: "loyaltyAccountId", typ: u(undefined, r("LoyaltyAccountId")) },
        { json: "LoyaltyAmount", js: "loyaltyAmount", typ: u(undefined, r("LoyaltyAmount")) },
    ], "any"),
    "LoyaltyAmount": o([
        { json: "Currency", js: "currency", typ: u(undefined, "") },
        { json: "LoyaltyUnit", js: "loyaltyUnit", typ: u(undefined, r("LoyaltyUnitType")) },
        { json: "value", js: "value", typ: u(undefined, 3.14) },
    ], "any"),
    "LoyaltyTransaction": o([
        { json: "Currency", js: "currency", typ: u(undefined, "") },
        { json: "LoyaltyTransactionType", js: "loyaltyTransactionType", typ: r("LoyaltyTransactionType") },
        { json: "OriginalPOITransaction", js: "originalPoiTransaction", typ: u(undefined, r("OriginalPoiTransaction")) },
        { json: "SaleItem", js: "saleItem", typ: u(undefined, a(r("SaleItem"))) },
        { json: "TotalAmount", js: "totalAmount", typ: u(undefined, 3.14) },
        { json: "TransactionConditions", js: "transactionConditions", typ: u(undefined, r("TransactionConditions")) },
    ], "any"),
    "OriginalPoiTransaction": o([
        { json: "AcquirerID", js: "acquirerId", typ: u(undefined, "") },
        { json: "ApprovalCode", js: "approvalCode", typ: u(undefined, "") },
        { json: "CustomerLanguage", js: "customerLanguage", typ: u(undefined, "") },
        { json: "HostTransactionID", js: "hostTransactionId", typ: u(undefined, r("TransactionIdentification")) },
        { json: "POIID", js: "poiid", typ: u(undefined, "") },
        { json: "POITransactionID", js: "poiTransactionId", typ: u(undefined, r("TransactionIdentification")) },
        { json: "ReuseCardDataFlag", js: "reuseCardDataFlag", typ: u(undefined, true) },
        { json: "SaleID", js: "saleId", typ: u(undefined, "") },
    ], "any"),
    "SaleItem": o([
        { json: "AdditionalProductInfo", js: "additionalProductInfo", typ: u(undefined, "") },
        { json: "EanUpc", js: "eanUpc", typ: u(undefined, "") },
        { json: "ItemAmount", js: "itemAmount", typ: 3.14 },
        { json: "ItemID", js: "itemId", typ: 3.14 },
        { json: "ProductCode", js: "productCode", typ: "" },
        { json: "ProductLabel", js: "productLabel", typ: u(undefined, "") },
        { json: "Quantity", js: "quantity", typ: u(undefined, 3.14) },
        { json: "SaleChannel", js: "saleChannel", typ: u(undefined, "") },
        { json: "TaxCode", js: "taxCode", typ: u(undefined, "") },
        { json: "UnitOfMeasure", js: "unitOfMeasure", typ: u(undefined, r("UnitOfMeasureType")) },
        { json: "UnitPrice", js: "unitPrice", typ: u(undefined, 3.14) },
    ], "any"),
    "TransactionConditions": o([
        { json: "AcquirerID", js: "acquirerId", typ: u(undefined, a("")) },
        { json: "AllowedLoyaltyBrand", js: "allowedLoyaltyBrand", typ: u(undefined, a("")) },
        { json: "AllowedPaymentBrand", js: "allowedPaymentBrand", typ: u(undefined, a("")) },
        { json: "CustomerLanguage", js: "customerLanguage", typ: u(undefined, "") },
        { json: "DebitPreferredFlag", js: "debitPreferredFlag", typ: u(undefined, true) },
        { json: "ForceEntryMode", js: "forceEntryMode", typ: u(undefined, a(a(r("ForceEntryModeType")))) },
        { json: "ForceOnlineFlag", js: "forceOnlineFlag", typ: u(undefined, true) },
        { json: "LoyaltyHandling", js: "loyaltyHandling", typ: u(undefined, r("LoyaltyHandlingType")) },
        { json: "MerchantCategoryCode", js: "merchantCategoryCode", typ: u(undefined, "") },
    ], "any"),
    "SaleData": o([
        { json: "CustomerOrderID", js: "customerOrderId", typ: u(undefined, "") },
        { json: "CustomerOrderReq", js: "customerOrderReq", typ: u(undefined, a(r("CustomerOrderReqType"))) },
        { json: "OperatorID", js: "operatorId", typ: u(undefined, "") },
        { json: "OperatorLanguage", js: "operatorLanguage", typ: u(undefined, "") },
        { json: "SaleReferenceID", js: "saleReferenceId", typ: u(undefined, "") },
        { json: "SaleTerminalData", js: "saleTerminalData", typ: u(undefined, r("SaleTerminalData")) },
        { json: "SaleToAcquirerData", js: "saleToAcquirerData", typ: u(undefined, "") },
        { json: "SaleToIssuerData", js: "saleToIssuerData", typ: u(undefined, r("SaleToIssuerData")) },
        { json: "SaleToPOIData", js: "saleToPoiData", typ: u(undefined, "") },
        { json: "SaleTransactionID", js: "saleTransactionId", typ: r("TransactionIdentification") },
        { json: "ShiftNumber", js: "shiftNumber", typ: u(undefined, "") },
        { json: "SponsoredMerchant", js: "sponsoredMerchant", typ: u(undefined, a(r("SponsoredMerchant"))) },
        { json: "TokenRequestedType", js: "tokenRequestedType", typ: u(undefined, r("TokenRequestedType")) },
    ], "any"),
    "SaleTerminalData": o([
        { json: "SaleCapabilities", js: "saleCapabilities", typ: u(undefined, a(r("SaleCapabilitiesType"))) },
        { json: "SaleProfile", js: "saleProfile", typ: u(undefined, r("SaleProfile")) },
        { json: "TerminalEnvironment", js: "terminalEnvironment", typ: u(undefined, r("TerminalEnvironmentType")) },
        { json: "TotalsGroupID", js: "totalsGroupId", typ: u(undefined, "") },
    ], "any"),
    "SaleProfile": o([
        { json: "GenericProfile", js: "genericProfile", typ: u(undefined, r("GenericProfileType")) },
        { json: "ServiceProfiles", js: "serviceProfiles", typ: u(undefined, a(r("ServiceProfilesType"))) },
    ], "any"),
    "SaleToIssuerData": o([
        { json: "StatementReference", js: "statementReference", typ: u(undefined, "") },
    ], "any"),
    "SponsoredMerchant": o([
        { json: "MerchantAddress", js: "merchantAddress", typ: u(undefined, "") },
        { json: "MerchantCategoryCode", js: "merchantCategoryCode", typ: "" },
        { json: "MerchantCountry", js: "merchantCountry", typ: "" },
        { json: "MerchantName", js: "merchantName", typ: "" },
        { json: "RegistrationID", js: "registrationId", typ: "" },
    ], "any"),
    "PaymentRequest": o([
        { json: "LoyaltyData", js: "loyaltyData", typ: u(undefined, a(r("LoyaltyData"))) },
        { json: "PaymentData", js: "paymentData", typ: u(undefined, r("PaymentData")) },
        { json: "PaymentTransaction", js: "paymentTransaction", typ: r("PaymentTransaction") },
        { json: "SaleData", js: "saleData", typ: r("SaleData") },
    ], "any"),
    "PaymentData": o([
        { json: "CardAcquisitionReference", js: "cardAcquisitionReference", typ: u(undefined, r("TransactionIdentification")) },
        { json: "CustomerOrder", js: "customerOrder", typ: u(undefined, r("CustomerOrder")) },
        { json: "InstalmentType", js: "instalmentType", typ: u(undefined, r("Instalment")) },
        { json: "PaymentInstrumentData", js: "paymentInstrumentData", typ: u(undefined, r("PaymentInstrumentData")) },
        { json: "PaymentType", js: "paymentType", typ: u(undefined, r("PaymentType")) },
        { json: "RequestedValidityDate", js: "requestedValidityDate", typ: u(undefined, "") },
        { json: "SplitPaymentFlag", js: "splitPaymentFlag", typ: u(undefined, true) },
    ], "any"),
    "Instalment": o([
        { json: "Charges", js: "charges", typ: u(undefined, 3.14) },
        { json: "CumulativeAmount", js: "cumulativeAmount", typ: u(undefined, 3.14) },
        { json: "FirstAmount", js: "firstAmount", typ: u(undefined, 3.14) },
        { json: "FirstPaymentDate", js: "firstPaymentDate", typ: u(undefined, "") },
        { json: "InstalmentType", js: "instalmentType", typ: u(undefined, a(r("InstalmentType"))) },
        { json: "Period", js: "period", typ: u(undefined, 3.14) },
        { json: "PeriodUnit", js: "periodUnit", typ: u(undefined, r("PeriodUnitType")) },
        { json: "PlanID", js: "planId", typ: u(undefined, "") },
        { json: "SequenceNumber", js: "sequenceNumber", typ: u(undefined, 3.14) },
        { json: "TotalNbOfPayments", js: "totalNbOfPayments", typ: u(undefined, 3.14) },
    ], "any"),
    "PaymentTransaction": o([
        { json: "AmountsReq", js: "amountsReq", typ: r("AmountsReq") },
        { json: "OriginalPOITransaction", js: "originalPoiTransaction", typ: u(undefined, r("OriginalPoiTransaction")) },
        { json: "SaleItem", js: "saleItem", typ: u(undefined, a(r("SaleItem"))) },
        { json: "TransactionConditions", js: "transactionConditions", typ: u(undefined, r("TransactionConditions")) },
    ], "any"),
    "AmountsReq": o([
        { json: "CashBackAmount", js: "cashBackAmount", typ: u(undefined, 3.14) },
        { json: "Currency", js: "currency", typ: "" },
        { json: "MaximumCashBackAmount", js: "maximumCashBackAmount", typ: u(undefined, 3.14) },
        { json: "MinimumAmountToDeliver", js: "minimumAmountToDeliver", typ: u(undefined, 3.14) },
        { json: "MinimumSplitAmount", js: "minimumSplitAmount", typ: u(undefined, 3.14) },
        { json: "PaidAmount", js: "paidAmount", typ: u(undefined, 3.14) },
        { json: "RequestedAmount", js: "requestedAmount", typ: u(undefined, 3.14) },
        { json: "TipAmount", js: "tipAmount", typ: u(undefined, 3.14) },
    ], "any"),
    "ReversalRequest": o([
        { json: "CustomerOrderID", js: "customerOrderId", typ: u(undefined, r("CustomerOrder")) },
        { json: "OriginalPOITransaction", js: "originalPoiTransaction", typ: r("OriginalPoiTransaction") },
        { json: "ReversalReason", js: "reversalReason", typ: r("ReversalReasonType") },
        { json: "ReversedAmount", js: "reversedAmount", typ: u(undefined, 3.14) },
        { json: "SaleReferenceID", js: "saleReferenceId", typ: u(undefined, "") },
    ], "any"),
    "CardAcquisitionRequest": o([
        { json: "CardAcquisitionTransaction", js: "cardAcquisitionTransaction", typ: r("CardAcquisitionTransaction") },
        { json: "SaleData", js: "saleData", typ: r("SaleData") },
    ], "any"),
    "CardAcquisitionTransaction": o([
        { json: "AllowedLoyaltyBrand", js: "allowedLoyaltyBrand", typ: u(undefined, a("")) },
        { json: "AllowedPaymentBrand", js: "allowedPaymentBrand", typ: u(undefined, a("")) },
        { json: "CashBackFlag", js: "cashBackFlag", typ: u(undefined, true) },
        { json: "CustomerLanguage", js: "customerLanguage", typ: u(undefined, "") },
        { json: "ForceCustomerSelectionFlag", js: "forceCustomerSelectionFlag", typ: u(undefined, true) },
        { json: "ForceEntryMode", js: "forceEntryMode", typ: u(undefined, a(a(r("ForceEntryModeType")))) },
        { json: "LoyaltyHandling", js: "loyaltyHandling", typ: u(undefined, r("LoyaltyHandlingType")) },
        { json: "PaymentType", js: "paymentType", typ: u(undefined, r("PaymentType")) },
        { json: "TotalAmount", js: "totalAmount", typ: u(undefined, 3.14) },
    ], "any"),
    "CardReaderApduRequest": o([
        { json: "APDUClass", js: "apduClass", typ: "any" },
        { json: "APDUData", js: "apduData", typ: u(undefined, "any") },
        { json: "APDUExpectedLength", js: "apduExpectedLength", typ: u(undefined, "any") },
        { json: "APDUInstruction", js: "apduInstruction", typ: "any" },
        { json: "APDUPar1", js: "apduPar1", typ: "any" },
        { json: "APDUPar2", js: "apduPar2", typ: "any" },
    ], "any"),
    "CardReaderInitRequest": o([
        { json: "DisplayOutput", js: "displayOutput", typ: u(undefined, r("DisplayOutput")) },
        { json: "ForceEntryMode", js: "forceEntryMode", typ: u(undefined, a(a(r("ForceEntryModeType")))) },
        { json: "LeaveCardFlag", js: "leaveCardFlag", typ: u(undefined, true) },
        { json: "MaxWaitingTime", js: "maxWaitingTime", typ: u(undefined, 3.14) },
        { json: "WarmResetFlag", js: "warmResetFlag", typ: u(undefined, true) },
    ], "any"),
    "CardReaderPowerOffRequest": o([
        { json: "DisplayOutput", js: "displayOutput", typ: u(undefined, r("DisplayOutput")) },
        { json: "MaxWaitingTime", js: "maxWaitingTime", typ: u(undefined, 3.14) },
    ], "any"),
    "DiagnosisRequest": o([
        { json: "AcquirerID", js: "acquirerId", typ: u(undefined, a("")) },
        { json: "HostDiagnosisFlag", js: "hostDiagnosisFlag", typ: u(undefined, true) },
        { json: "POIID", js: "poiid", typ: u(undefined, "") },
    ], "any"),
    "DisplayRequest": o([
        { json: "DisplayOutput", js: "displayOutput", typ: a(r("DisplayOutput")) },
    ], "any"),
    "EnableServiceRequest": o([
        { json: "DisplayOutput", js: "displayOutput", typ: u(undefined, r("DisplayOutput")) },
        { json: "ServicesEnabled", js: "servicesEnabled", typ: u(undefined, a(r("ServicesEnabledType"))) },
        { json: "TransactionAction", js: "transactionAction", typ: r("TransactionActionType") },
    ], "any"),
    "EventNotification": o([
        { json: "CustomerLanguage", js: "customerLanguage", typ: u(undefined, "") },
        { json: "DisplayOutput", js: "displayOutput", typ: u(undefined, r("DisplayOutput")) },
        { json: "EventDetails", js: "eventDetails", typ: u(undefined, "") },
        { json: "EventToNotify", js: "eventToNotify", typ: r("EventToNotifyType") },
        { json: "MaintenanceRequiredFlag", js: "maintenanceRequiredFlag", typ: u(undefined, true) },
        { json: "RejectedMessage", js: "rejectedMessage", typ: u(undefined, "any") },
        { json: "TimeStamp", js: "timeStamp", typ: "" },
    ], "any"),
    "GetTotalsRequest": o([
        { json: "TotalDetails", js: "totalDetails", typ: u(undefined, a(r("TotalDetailsType"))) },
        { json: "TotalFilter", js: "totalFilter", typ: u(undefined, r("TotalFilter")) },
    ], "any"),
    "TotalFilter": o([
        { json: "OperatorID", js: "operatorId", typ: u(undefined, "") },
        { json: "POIID", js: "poiid", typ: u(undefined, "") },
        { json: "SaleID", js: "saleId", typ: u(undefined, "") },
        { json: "ShiftNumber", js: "shiftNumber", typ: u(undefined, "") },
        { json: "TotalsGroupID", js: "totalsGroupId", typ: u(undefined, "") },
    ], "any"),
    "InputRequest": o([
        { json: "DisplayOutput", js: "displayOutput", typ: u(undefined, r("DisplayOutput")) },
        { json: "InputData", js: "inputData", typ: r("InputData") },
    ], "any"),
    "InputData": o([
        { json: "BeepKeyFlag", js: "beepKeyFlag", typ: u(undefined, true) },
        { json: "DefaultInputString", js: "defaultInputString", typ: u(undefined, "") },
        { json: "Device", js: "device", typ: r("DeviceType") },
        { json: "DisableCancelFlag", js: "disableCancelFlag", typ: u(undefined, true) },
        { json: "DisableCorrectFlag", js: "disableCorrectFlag", typ: u(undefined, true) },
        { json: "DisableValidFlag", js: "disableValidFlag", typ: u(undefined, true) },
        { json: "FromRightToLeftFlag", js: "fromRightToLeftFlag", typ: u(undefined, true) },
        { json: "GlobalCorrectionFlag", js: "globalCorrectionFlag", typ: u(undefined, true) },
        { json: "ImmediateResponseFlag", js: "immediateResponseFlag", typ: u(undefined, true) },
        { json: "InfoQualify", js: "infoQualify", typ: r("InfoQualifyType") },
        { json: "InputCommand", js: "inputCommand", typ: r("InputCommandType") },
        { json: "MaskCharactersFlag", js: "maskCharactersFlag", typ: u(undefined, true) },
        { json: "MaxDecimalLength", js: "maxDecimalLength", typ: u(undefined, 3.14) },
        { json: "MaxInputTime", js: "maxInputTime", typ: u(undefined, 3.14) },
        { json: "MaxLength", js: "maxLength", typ: u(undefined, 3.14) },
        { json: "MenuBackFlag", js: "menuBackFlag", typ: u(undefined, true) },
        { json: "MinLength", js: "minLength", typ: u(undefined, 3.14) },
        { json: "NotifyCardInputFlag", js: "notifyCardInputFlag", typ: u(undefined, true) },
        { json: "StringMask", js: "stringMask", typ: u(undefined, "") },
        { json: "WaitUserValidationFlag", js: "waitUserValidationFlag", typ: u(undefined, true) },
    ], "any"),
    "InputUpdate": o([
        { json: "MaxDecimalLength", js: "maxDecimalLength", typ: u(undefined, 3.14) },
        { json: "MaxLength", js: "maxLength", typ: u(undefined, 3.14) },
        { json: "MenuEntry", js: "menuEntry", typ: u(undefined, a(r("MenuEntry"))) },
        { json: "MessageReference", js: "messageReference", typ: r("MessageReference") },
        { json: "MinLength", js: "minLength", typ: u(undefined, 3.14) },
        { json: "OutputContent", js: "outputContent", typ: r("OutputContent") },
        { json: "OutputSignature", js: "outputSignature", typ: u(undefined, "any") },
    ], "any"),
    "LoginRequest": o([
        { json: "CustomerOrderReq", js: "customerOrderReq", typ: u(undefined, a(r("CustomerOrderReqType"))) },
        { json: "DateTime", js: "dateTime", typ: m("any") },
        { json: "OperatorID", js: "operatorId", typ: u(undefined, "") },
        { json: "OperatorLanguage", js: "operatorLanguage", typ: "" },
        { json: "POISerialNumber", js: "poiSerialNumber", typ: u(undefined, "") },
        { json: "SaleSoftware", js: "saleSoftware", typ: r("SaleSoftware") },
        { json: "SaleTerminalData", js: "saleTerminalData", typ: u(undefined, r("SaleTerminalData")) },
        { json: "ShiftNumber", js: "shiftNumber", typ: u(undefined, "") },
        { json: "TokenRequestedType", js: "tokenRequestedType", typ: u(undefined, r("TokenRequestedType")) },
        { json: "TrainingModeFlag", js: "trainingModeFlag", typ: u(undefined, true) },
    ], "any"),
    "SaleSoftware": o([
        { json: "ApplicationName", js: "applicationName", typ: "" },
        { json: "CertificationCode", js: "certificationCode", typ: "" },
        { json: "ManufacturerID", js: "manufacturerId", typ: "" },
        { json: "SoftwareVersion", js: "softwareVersion", typ: "" },
    ], "any"),
    "LogoutRequest": o([
        { json: "MaintenanceAllowed", js: "maintenanceAllowed", typ: u(undefined, true) },
    ], "any"),
    "MessageHeader": o([
        { json: "DeviceID", js: "deviceId", typ: u(undefined, "") },
        { json: "MessageCategory", js: "messageCategory", typ: r("MessageCategoryType") },
        { json: "MessageClass", js: "messageClass", typ: r("MessageClassType") },
        { json: "MessageType", js: "messageType", typ: r("MessageType") },
        { json: "POIID", js: "poiid", typ: "" },
        { json: "ProtocolVersion", js: "protocolVersion", typ: u(undefined, "") },
        { json: "SaleID", js: "saleId", typ: "" },
        { json: "ServiceID", js: "serviceId", typ: u(undefined, "") },
    ], "any"),
    "PinRequest": o([
        { json: "AdditionalInput", js: "additionalInput", typ: u(undefined, "") },
        { json: "CardholderPIN", js: "cardholderPin", typ: u(undefined, r("CardholderPin")) },
        { json: "KeyReference", js: "keyReference", typ: u(undefined, "") },
        { json: "MaxWaitingTime", js: "maxWaitingTime", typ: u(undefined, 3.14) },
        { json: "PINEncAlgorithm", js: "pinEncAlgorithm", typ: u(undefined, "") },
        { json: "PINFormat", js: "pinFormat", typ: u(undefined, r("PinFormatType")) },
        { json: "PINRequestType", js: "pinRequestType", typ: r("PinRequestType") },
        { json: "PINVerifMethod", js: "pinVerifMethod", typ: u(undefined, "") },
    ], "any"),
    "CardholderPin": o([
        { json: "AdditionalInput", js: "additionalInput", typ: u(undefined, "") },
        { json: "EncrPINBlock", js: "encrPinBlock", typ: r("ContentInformation") },
        { json: "PINFormat", js: "pinFormat", typ: r("PinFormatType") },
    ], "any"),
    "PrintRequest": o([
        { json: "PrintOutput", js: "printOutput", typ: r("PrintOutput") },
    ], "any"),
    "PrintOutput": o([
        { json: "DocumentQualifier", js: "documentQualifier", typ: r("DocumentQualifierType") },
        { json: "IntegratedPrintFlag", js: "integratedPrintFlag", typ: u(undefined, true) },
        { json: "OutputContent", js: "outputContent", typ: r("OutputContent") },
        { json: "OutputSignature", js: "outputSignature", typ: u(undefined, "any") },
        { json: "RequiredSignatureFlag", js: "requiredSignatureFlag", typ: u(undefined, true) },
        { json: "ResponseMode", js: "responseMode", typ: r("ResponseModeType") },
    ], "any"),
    "ReconciliationRequest": o([
        { json: "AcquirerID", js: "acquirerId", typ: u(undefined, a("")) },
        { json: "POIReconciliationID", js: "poiReconciliationId", typ: u(undefined, "") },
        { json: "ReconciliationType", js: "reconciliationType", typ: r("ReconciliationType") },
    ], "any"),
    "SoundRequest": o([
        { json: "ResponseMode", js: "responseMode", typ: u(undefined, r("ResponseModeType")) },
        { json: "SoundAction", js: "soundAction", typ: r("SoundActionType") },
        { json: "SoundContent", js: "soundContent", typ: r("SoundContent") },
        { json: "SoundVolume", js: "soundVolume", typ: u(undefined, 3.14) },
    ], "any"),
    "SoundContent": o([
        { json: "Language", js: "language", typ: u(undefined, "") },
        { json: "ReferenceID", js: "referenceId", typ: u(undefined, "") },
        { json: "SoundFormat", js: "soundFormat", typ: u(undefined, r("SoundFormatType")) },
        { json: "value", js: "value", typ: u(undefined, "") },
    ], "any"),
    "StoredValueRequest": o([
        { json: "CustomerLanguage", js: "customerLanguage", typ: u(undefined, "") },
        { json: "SaleData", js: "saleData", typ: r("SaleData") },
        { json: "StoredValueData", js: "storedValueData", typ: a(r("StoredValueData")) },
    ], "any"),
    "StoredValueData": o([
        { json: "Currency", js: "currency", typ: "" },
        { json: "EanUpc", js: "eanUpc", typ: u(undefined, "") },
        { json: "ItemAmount", js: "itemAmount", typ: 3.14 },
        { json: "OriginalPOITransaction", js: "originalPoiTransaction", typ: u(undefined, r("OriginalPoiTransaction")) },
        { json: "ProductCode", js: "productCode", typ: u(undefined, "") },
        { json: "StoredValueAccountID", js: "storedValueAccountId", typ: u(undefined, r("StoredValueAccountId")) },
        { json: "StoredValueProvider", js: "storedValueProvider", typ: u(undefined, "") },
        { json: "StoredValueTransactionType", js: "storedValueTransactionType", typ: r("StoredValueTransactionType") },
    ], "any"),
    "StoredValueAccountId": o([
        { json: "EntryMode", js: "entryMode", typ: a(r("EntryModeType")) },
        { json: "ExpiryDate", js: "expiryDate", typ: u(undefined, "") },
        { json: "IdentificationType", js: "identificationType", typ: r("IdentificationType") },
        { json: "OwnerName", js: "ownerName", typ: u(undefined, "") },
        { json: "StoredValueAccountType", js: "storedValueAccountType", typ: r("StoredValueAccountType") },
        { json: "StoredValueProvider", js: "storedValueProvider", typ: u(undefined, "") },
        { json: "value", js: "value", typ: u(undefined, "") },
    ], "any"),
    "TransactionStatusRequest": o([
        { json: "DocumentQualifier", js: "documentQualifier", typ: u(undefined, a(r("DocumentQualifierType"))) },
        { json: "MessageReference", js: "messageReference", typ: u(undefined, r("MessageReference")) },
        { json: "ReceiptReprintFlag", js: "receiptReprintFlag", typ: u(undefined, true) },
    ], "any"),
    "TransmitRequest": o([
        { json: "DestinationAddress", js: "destinationAddress", typ: "" },
        { json: "MaximumTransmitTime", js: "maximumTransmitTime", typ: 3.14 },
        { json: "Message", js: "message", typ: "any" },
        { json: "WaitResponseFlag", js: "waitResponseFlag", typ: u(undefined, true) },
    ], "any"),
    "TerminalApiResponse": o([
        { json: "SaleToPOIResponse", js: "saleToPoiResponse", typ: u(undefined, r("SaleToPoiResponse")) },
    ], "any"),
    "SaleToPoiResponse": o([
        { json: "AdminResponse", js: "adminResponse", typ: u(undefined, r("AdminResponse")) },
        { json: "BalanceInquiryResponse", js: "balanceInquiryResponse", typ: u(undefined, r("BalanceInquiryResponse")) },
        { json: "BatchResponse", js: "batchResponse", typ: u(undefined, r("BatchResponse")) },
        { json: "CardAcquisitionResponse", js: "cardAcquisitionResponse", typ: u(undefined, r("CardAcquisitionResponse")) },
        { json: "CardReaderAPDUResponse", js: "cardReaderApduResponse", typ: u(undefined, r("CardReaderApduResponse")) },
        { json: "CardReaderInitResponse", js: "cardReaderInitResponse", typ: u(undefined, r("CardReaderInitResponse")) },
        { json: "CardReaderPowerOffResponse", js: "cardReaderPowerOffResponse", typ: u(undefined, r("CardReaderPowerOffResponse")) },
        { json: "DiagnosisResponse", js: "diagnosisResponse", typ: u(undefined, r("DiagnosisResponse")) },
        { json: "DisplayResponse", js: "displayResponse", typ: u(undefined, r("DisplayResponse")) },
        { json: "EnableServiceResponse", js: "enableServiceResponse", typ: u(undefined, r("EnableServiceResponse")) },
        { json: "GetTotalsResponse", js: "getTotalsResponse", typ: u(undefined, r("GetTotalsResponse")) },
        { json: "InputResponse", js: "inputResponse", typ: u(undefined, r("InputResponse")) },
        { json: "LoginResponse", js: "loginResponse", typ: u(undefined, r("LoginResponse")) },
        { json: "LogoutResponse", js: "logoutResponse", typ: u(undefined, r("LogoutResponse")) },
        { json: "LoyaltyResponse", js: "loyaltyResponse", typ: u(undefined, r("LoyaltyResponse")) },
        { json: "MessageHeader", js: "messageHeader", typ: r("MessageHeader") },
        { json: "PaymentResponse", js: "paymentResponse", typ: u(undefined, r("PaymentResponse")) },
        { json: "PINResponse", js: "pinResponse", typ: u(undefined, r("PinResponse")) },
        { json: "PrintResponse", js: "printResponse", typ: u(undefined, r("PrintResponse")) },
        { json: "ReconciliationResponse", js: "reconciliationResponse", typ: u(undefined, r("ReconciliationResponse")) },
        { json: "ReversalResponse", js: "reversalResponse", typ: u(undefined, r("ReversalResponse")) },
        { json: "SecurityTrailer", js: "securityTrailer", typ: u(undefined, r("ContentInformation")) },
        { json: "SoundResponse", js: "soundResponse", typ: u(undefined, r("SoundResponse")) },
        { json: "StoredValueResponse", js: "storedValueResponse", typ: u(undefined, r("StoredValueResponse")) },
        { json: "TransactionStatusResponse", js: "transactionStatusResponse", typ: u(undefined, r("TransactionStatusResponse")) },
        { json: "TransmitResponse", js: "transmitResponse", typ: u(undefined, r("TransmitResponse")) },
    ], "any"),
    "AdminResponse": o([
        { json: "Response", js: "response", typ: r("Response") },
    ], "any"),
    "Response": o([
        { json: "AdditionalResponse", js: "additionalResponse", typ: u(undefined, "") },
        { json: "ErrorCondition", js: "errorCondition", typ: u(undefined, r("ErrorConditionType")) },
        { json: "Result", js: "result", typ: r("ResultType") },
    ], "any"),
    "BalanceInquiryResponse": o([
        { json: "LoyaltyAccountStatus", js: "loyaltyAccountStatus", typ: u(undefined, r("LoyaltyAccountStatus")) },
        { json: "PaymentAccountStatus", js: "paymentAccountStatus", typ: u(undefined, r("PaymentAccountStatus")) },
        { json: "Response", js: "response", typ: r("Response") },
    ], "any"),
    "LoyaltyAccountStatus": o([
        { json: "Currency", js: "currency", typ: u(undefined, "") },
        { json: "CurrentBalance", js: "currentBalance", typ: u(undefined, 3.14) },
        { json: "LoyaltyAccount", js: "loyaltyAccount", typ: r("LoyaltyAccount") },
        { json: "LoyaltyUnit", js: "loyaltyUnit", typ: u(undefined, r("LoyaltyUnitType")) },
    ], "any"),
    "LoyaltyAccount": o([
        { json: "LoyaltyAccountID", js: "loyaltyAccountId", typ: r("LoyaltyAccountId") },
        { json: "LoyaltyBrand", js: "loyaltyBrand", typ: u(undefined, "") },
    ], "any"),
    "PaymentAccountStatus": o([
        { json: "Currency", js: "currency", typ: u(undefined, "") },
        { json: "CurrentBalance", js: "currentBalance", typ: u(undefined, 3.14) },
        { json: "LoyaltyAccountStatus", js: "loyaltyAccountStatus", typ: u(undefined, r("LoyaltyAccountStatus")) },
        { json: "PaymentAcquirerData", js: "paymentAcquirerData", typ: u(undefined, r("PaymentAcquirerData")) },
        { json: "PaymentInstrumentData", js: "paymentInstrumentData", typ: u(undefined, r("PaymentInstrumentData")) },
    ], "any"),
    "PaymentAcquirerData": o([
        { json: "AcquirerID", js: "acquirerId", typ: u(undefined, "") },
        { json: "AcquirerPOIID", js: "acquirerPoiid", typ: "" },
        { json: "AcquirerTransactionID", js: "acquirerTransactionId", typ: u(undefined, r("TransactionIdentification")) },
        { json: "ApprovalCode", js: "approvalCode", typ: u(undefined, "") },
        { json: "MerchantID", js: "merchantId", typ: "" },
    ], "any"),
    "BatchResponse": o([
        { json: "PerformedTransaction", js: "performedTransaction", typ: u(undefined, a(r("PerformedTransaction"))) },
        { json: "Response", js: "response", typ: r("Response") },
    ], "any"),
    "PerformedTransaction": o([
        { json: "LoyaltyResult", js: "loyaltyResult", typ: u(undefined, a(r("LoyaltyResult"))) },
        { json: "PaymentResult", js: "paymentResult", typ: u(undefined, r("PaymentResult")) },
        { json: "POIData", js: "poiData", typ: r("PoiData") },
        { json: "Response", js: "response", typ: r("Response") },
        { json: "ReversedAmount", js: "reversedAmount", typ: u(undefined, 3.14) },
        { json: "SaleData", js: "saleData", typ: u(undefined, r("SaleData")) },
    ], "any"),
    "LoyaltyResult": o([
        { json: "CurrentBalance", js: "currentBalance", typ: u(undefined, 3.14) },
        { json: "LoyaltyAccount", js: "loyaltyAccount", typ: r("LoyaltyAccount") },
        { json: "LoyaltyAcquirerData", js: "loyaltyAcquirerData", typ: u(undefined, r("LoyaltyAcquirerData")) },
        { json: "LoyaltyAmount", js: "loyaltyAmount", typ: u(undefined, r("LoyaltyAmount")) },
        { json: "Rebates", js: "rebates", typ: u(undefined, r("Rebates")) },
    ], "any"),
    "LoyaltyAcquirerData": o([
        { json: "ApprovalCode", js: "approvalCode", typ: u(undefined, "") },
        { json: "HostReconciliationID", js: "hostReconciliationId", typ: u(undefined, "") },
        { json: "LoyaltyAcquirerID", js: "loyaltyAcquirerId", typ: u(undefined, "") },
        { json: "LoyaltyTransactionID", js: "loyaltyTransactionId", typ: u(undefined, r("TransactionIdentification")) },
    ], "any"),
    "Rebates": o([
        { json: "RebateLabel", js: "rebateLabel", typ: u(undefined, "") },
        { json: "SaleItemRebate", js: "saleItemRebate", typ: u(undefined, a(r("SaleItemRebate"))) },
        { json: "TotalRebate", js: "totalRebate", typ: u(undefined, 3.14) },
    ], "any"),
    "SaleItemRebate": o([
        { json: "EanUpc", js: "eanUpc", typ: u(undefined, "") },
        { json: "ItemAmount", js: "itemAmount", typ: u(undefined, 3.14) },
        { json: "ItemID", js: "itemId", typ: 3.14 },
        { json: "ProductCode", js: "productCode", typ: "" },
        { json: "Quantity", js: "quantity", typ: u(undefined, 3.14) },
        { json: "RebateLabel", js: "rebateLabel", typ: u(undefined, "") },
        { json: "UnitOfMeasure", js: "unitOfMeasure", typ: u(undefined, r("UnitOfMeasureType")) },
    ], "any"),
    "PoiData": o([
        { json: "POIReconciliationID", js: "poiReconciliationId", typ: u(undefined, "") },
        { json: "POITransactionID", js: "poiTransactionId", typ: r("TransactionIdentification") },
    ], "any"),
    "PaymentResult": o([
        { json: "AmountsResp", js: "amountsResp", typ: u(undefined, r("AmountsResp")) },
        { json: "AuthenticationMethod", js: "authenticationMethod", typ: u(undefined, a(r("AuthenticationMethodType"))) },
        { json: "CapturedSignature", js: "capturedSignature", typ: u(undefined, r("CapturedSignature")) },
        { json: "CurrencyConversion", js: "currencyConversion", typ: u(undefined, a(r("CurrencyConversion"))) },
        { json: "CustomerLanguage", js: "customerLanguage", typ: u(undefined, "") },
        { json: "InstalmentType", js: "instalmentType", typ: u(undefined, r("Instalment")) },
        { json: "MerchantOverrideFlag", js: "merchantOverrideFlag", typ: u(undefined, true) },
        { json: "OnlineFlag", js: "onlineFlag", typ: u(undefined, true) },
        { json: "PaymentAcquirerData", js: "paymentAcquirerData", typ: u(undefined, r("PaymentAcquirerData")) },
        { json: "PaymentInstrumentData", js: "paymentInstrumentData", typ: u(undefined, r("PaymentInstrumentData")) },
        { json: "PaymentType", js: "paymentType", typ: u(undefined, r("PaymentType")) },
        { json: "ProtectedSignature", js: "protectedSignature", typ: u(undefined, r("ContentInformation")) },
        { json: "ValidityDate", js: "validityDate", typ: u(undefined, "") },
    ], "any"),
    "AmountsResp": o([
        { json: "AuthorizedAmount", js: "authorizedAmount", typ: 3.14 },
        { json: "CashBackAmount", js: "cashBackAmount", typ: u(undefined, 3.14) },
        { json: "Currency", js: "currency", typ: u(undefined, "") },
        { json: "TipAmount", js: "tipAmount", typ: u(undefined, 3.14) },
        { json: "TotalFeesAmount", js: "totalFeesAmount", typ: u(undefined, 3.14) },
        { json: "TotalRebatesAmount", js: "totalRebatesAmount", typ: u(undefined, 3.14) },
    ], "any"),
    "CapturedSignature": o([
        { json: "AreaSize", js: "areaSize", typ: u(undefined, r("AreaSize")) },
        { json: "SignaturePoint", js: "signaturePoint", typ: a(r("SignaturePoint")) },
    ], "any"),
    "AreaSize": o([
        { json: "X", js: "x", typ: "" },
        { json: "Y", js: "y", typ: "" },
    ], "any"),
    "SignaturePoint": o([
        { json: "X", js: "x", typ: "" },
        { json: "Y", js: "y", typ: "" },
    ], "any"),
    "CurrencyConversion": o([
        { json: "Commission", js: "commission", typ: u(undefined, 3.14) },
        { json: "ConvertedAmount", js: "convertedAmount", typ: r("Amount") },
        { json: "CustomerApprovedFlag", js: "customerApprovedFlag", typ: u(undefined, true) },
        { json: "Declaration", js: "declaration", typ: u(undefined, "") },
        { json: "Markup", js: "markup", typ: u(undefined, 3.14) },
        { json: "Rate", js: "rate", typ: u(undefined, 3.14) },
    ], "any"),
    "Amount": o([
        { json: "Currency", js: "currency", typ: u(undefined, "") },
        { json: "value", js: "value", typ: u(undefined, 3.14) },
    ], "any"),
    "CardAcquisitionResponse": o([
        { json: "CustomerOrder", js: "customerOrder", typ: u(undefined, a(r("CustomerOrder"))) },
        { json: "LoyaltyAccount", js: "loyaltyAccount", typ: u(undefined, a(r("LoyaltyAccount"))) },
        { json: "PaymentBrand", js: "paymentBrand", typ: u(undefined, a("")) },
        { json: "PaymentInstrumentData", js: "paymentInstrumentData", typ: u(undefined, r("PaymentInstrumentData")) },
        { json: "POIData", js: "poiData", typ: r("PoiData") },
        { json: "Response", js: "response", typ: r("Response") },
        { json: "SaleData", js: "saleData", typ: r("SaleData") },
    ], "any"),
    "CardReaderApduResponse": o([
        { json: "APDUData", js: "apduData", typ: u(undefined, "any") },
        { json: "CardStatusWords", js: "cardStatusWords", typ: "any" },
        { json: "Response", js: "response", typ: r("Response") },
    ], "any"),
    "CardReaderInitResponse": o([
        { json: "EntryMode", js: "entryMode", typ: u(undefined, a(r("EntryModeType"))) },
        { json: "ICCResetData", js: "iccResetData", typ: u(undefined, r("IccResetData")) },
        { json: "Response", js: "response", typ: r("Response") },
        { json: "TrackData", js: "trackData", typ: u(undefined, a(r("TrackData"))) },
    ], "any"),
    "IccResetData": o([
        { json: "ATRValue", js: "atrValue", typ: u(undefined, "any") },
        { json: "CardStatusWords", js: "cardStatusWords", typ: u(undefined, "any") },
    ], "any"),
    "CardReaderPowerOffResponse": o([
        { json: "Response", js: "response", typ: r("Response") },
    ], "any"),
    "DiagnosisResponse": o([
        { json: "HostStatus", js: "hostStatus", typ: u(undefined, a(r("HostStatus"))) },
        { json: "LoggedSaleID", js: "loggedSaleId", typ: u(undefined, a("")) },
        { json: "POIStatus", js: "poiStatus", typ: u(undefined, r("PoiStatus")) },
        { json: "Response", js: "response", typ: r("Response") },
    ], "any"),
    "HostStatus": o([
        { json: "AcquirerID", js: "acquirerId", typ: "" },
        { json: "IsReachableFlag", js: "isReachableFlag", typ: u(undefined, true) },
    ], "any"),
    "PoiStatus": o([
        { json: "CardReaderOKFlag", js: "cardReaderOkFlag", typ: u(undefined, true) },
        { json: "CashHandlingDevice", js: "cashHandlingDevice", typ: u(undefined, a(r("CashHandlingDevice"))) },
        { json: "CommunicationOKFlag", js: "communicationOkFlag", typ: u(undefined, true) },
        { json: "FraudPreventionFlag", js: "fraudPreventionFlag", typ: u(undefined, true) },
        { json: "GlobalStatus", js: "globalStatus", typ: r("GlobalStatusType") },
        { json: "PEDOKFlag", js: "pedokFlag", typ: u(undefined, true) },
        { json: "PrinterStatus", js: "printerStatus", typ: u(undefined, r("PrinterStatusType")) },
        { json: "SecurityOKFlag", js: "securityOkFlag", typ: u(undefined, true) },
    ], "any"),
    "CashHandlingDevice": o([
        { json: "CashHandlingOKFlag", js: "cashHandlingOkFlag", typ: true },
        { json: "CoinsOrBills", js: "coinsOrBills", typ: a(r("CoinsOrBills")) },
        { json: "Currency", js: "currency", typ: "" },
    ], "any"),
    "CoinsOrBills": o([
        { json: "Number", js: "number", typ: 3.14 },
        { json: "UnitValue", js: "unitValue", typ: 3.14 },
    ], "any"),
    "DisplayResponse": o([
        { json: "OutputResult", js: "outputResult", typ: a(r("OutputResult")) },
    ], "any"),
    "OutputResult": o([
        { json: "Device", js: "device", typ: r("DeviceType") },
        { json: "InfoQualify", js: "infoQualify", typ: r("InfoQualifyType") },
        { json: "Response", js: "response", typ: r("Response") },
    ], "any"),
    "EnableServiceResponse": o([
        { json: "Response", js: "response", typ: r("Response") },
    ], "any"),
    "GetTotalsResponse": o([
        { json: "POIReconciliationID", js: "poiReconciliationId", typ: "" },
        { json: "Response", js: "response", typ: r("Response") },
        { json: "TransactionTotals", js: "transactionTotals", typ: u(undefined, a(r("TransactionTotals"))) },
    ], "any"),
    "TransactionTotals": o([
        { json: "AcquirerID", js: "acquirerId", typ: u(undefined, "") },
        { json: "CardBrand", js: "cardBrand", typ: u(undefined, "") },
        { json: "ErrorCondition", js: "errorCondition", typ: u(undefined, r("ErrorConditionType")) },
        { json: "HostReconciliationID", js: "hostReconciliationId", typ: u(undefined, "") },
        { json: "LoyaltyCurrency", js: "loyaltyCurrency", typ: u(undefined, "") },
        { json: "LoyaltyTotals", js: "loyaltyTotals", typ: u(undefined, a(r("LoyaltyTotals"))) },
        { json: "LoyaltyUnit", js: "loyaltyUnit", typ: u(undefined, r("LoyaltyUnitType")) },
        { json: "OperatorID", js: "operatorId", typ: u(undefined, "") },
        { json: "PaymentCurrency", js: "paymentCurrency", typ: u(undefined, "") },
        { json: "PaymentInstrumentType", js: "paymentInstrumentType", typ: r("PaymentInstrumentType") },
        { json: "PaymentTotals", js: "paymentTotals", typ: u(undefined, a(r("PaymentTotals"))) },
        { json: "POIID", js: "poiid", typ: u(undefined, "") },
        { json: "SaleID", js: "saleId", typ: u(undefined, "") },
        { json: "ShiftNumber", js: "shiftNumber", typ: u(undefined, "") },
        { json: "TotalsGroupID", js: "totalsGroupId", typ: u(undefined, "") },
    ], "any"),
    "LoyaltyTotals": o([
        { json: "TransactionAmount", js: "transactionAmount", typ: 3.14 },
        { json: "TransactionCount", js: "transactionCount", typ: 3.14 },
        { json: "TransactionType", js: "transactionType", typ: r("TransactionType") },
    ], "any"),
    "PaymentTotals": o([
        { json: "TransactionAmount", js: "transactionAmount", typ: 3.14 },
        { json: "TransactionCount", js: "transactionCount", typ: 3.14 },
        { json: "TransactionType", js: "transactionType", typ: r("TransactionType") },
    ], "any"),
    "InputResponse": o([
        { json: "InputResult", js: "inputResult", typ: r("InputResult") },
        { json: "OutputResult", js: "outputResult", typ: u(undefined, r("OutputResult")) },
    ], "any"),
    "InputResult": o([
        { json: "Device", js: "device", typ: r("DeviceType") },
        { json: "InfoQualify", js: "infoQualify", typ: r("InfoQualifyType") },
        { json: "Input", js: "input", typ: u(undefined, r("Input")) },
        { json: "Response", js: "response", typ: r("Response") },
    ], "any"),
    "Input": o([
        { json: "ConfirmedFlag", js: "confirmedFlag", typ: u(undefined, true) },
        { json: "DigitInput", js: "digitInput", typ: u(undefined, "") },
        { json: "FunctionKey", js: "functionKey", typ: u(undefined, "") },
        { json: "InputCommand", js: "inputCommand", typ: r("InputCommandType") },
        { json: "MenuEntryNumber", js: "menuEntryNumber", typ: u(undefined, 3.14) },
        { json: "Password", js: "password", typ: u(undefined, r("ContentInformation")) },
        { json: "TextInput", js: "textInput", typ: u(undefined, "") },
    ], "any"),
    "LoginResponse": o([
        { json: "POISystemData", js: "poiSystemData", typ: u(undefined, r("PoiSystemData")) },
        { json: "Response", js: "response", typ: r("Response") },
    ], "any"),
    "PoiSystemData": o([
        { json: "DateTime", js: "dateTime", typ: m("any") },
        { json: "POISoftware", js: "poiSoftware", typ: r("PoiSoftware") },
        { json: "POIStatus", js: "poiStatus", typ: u(undefined, r("PoiStatus")) },
        { json: "POITerminalData", js: "poiTerminalData", typ: u(undefined, r("PoiTerminalData")) },
    ], "any"),
    "PoiSoftware": o([
        { json: "ApplicationName", js: "applicationName", typ: "" },
        { json: "CertificationCode", js: "certificationCode", typ: "" },
        { json: "ManufacturerID", js: "manufacturerId", typ: "" },
        { json: "SoftwareVersion", js: "softwareVersion", typ: "" },
    ], "any"),
    "PoiTerminalData": o([
        { json: "POICapabilities", js: "poiCapabilities", typ: a(r("PoiCapabilitiesType")) },
        { json: "POIProfile", js: "poiProfile", typ: u(undefined, r("PoiProfile")) },
        { json: "POISerialNumber", js: "poiSerialNumber", typ: "" },
        { json: "TerminalEnvironment", js: "terminalEnvironment", typ: r("TerminalEnvironmentType") },
    ], "any"),
    "PoiProfile": o([
        { json: "GenericProfile", js: "genericProfile", typ: u(undefined, r("GenericProfileType")) },
        { json: "ServiceProfiles", js: "serviceProfiles", typ: u(undefined, a(r("ServiceProfilesType"))) },
    ], "any"),
    "LogoutResponse": o([
        { json: "Response", js: "response", typ: r("Response") },
    ], "any"),
    "LoyaltyResponse": o([
        { json: "LoyaltyResult", js: "loyaltyResult", typ: u(undefined, a(r("LoyaltyResult"))) },
        { json: "PaymentReceipt", js: "paymentReceipt", typ: u(undefined, a(r("PaymentReceipt"))) },
        { json: "POIData", js: "poiData", typ: r("PoiData") },
        { json: "Response", js: "response", typ: r("Response") },
        { json: "SaleData", js: "saleData", typ: r("SaleData") },
    ], "any"),
    "PaymentReceipt": o([
        { json: "DocumentQualifier", js: "documentQualifier", typ: r("DocumentQualifierType") },
        { json: "IntegratedPrintFlag", js: "integratedPrintFlag", typ: u(undefined, true) },
        { json: "OutputContent", js: "outputContent", typ: r("OutputContent") },
        { json: "RequiredSignatureFlag", js: "requiredSignatureFlag", typ: u(undefined, true) },
    ], "any"),
    "PinResponse": o([
        { json: "CardholderPIN", js: "cardholderPin", typ: u(undefined, r("CardholderPin")) },
        { json: "Response", js: "response", typ: r("Response") },
    ], "any"),
    "PaymentResponse": o([
        { json: "CustomerOrder", js: "customerOrder", typ: u(undefined, a(r("CustomerOrder"))) },
        { json: "LoyaltyResult", js: "loyaltyResult", typ: u(undefined, a(r("LoyaltyResult"))) },
        { json: "PaymentReceipt", js: "paymentReceipt", typ: u(undefined, a(r("PaymentReceipt"))) },
        { json: "PaymentResult", js: "paymentResult", typ: u(undefined, r("PaymentResult")) },
        { json: "POIData", js: "poiData", typ: r("PoiData") },
        { json: "Response", js: "response", typ: r("Response") },
        { json: "SaleData", js: "saleData", typ: r("SaleData") },
    ], "any"),
    "PrintResponse": o([
        { json: "DocumentQualifier", js: "documentQualifier", typ: r("DocumentQualifierType") },
        { json: "Response", js: "response", typ: r("Response") },
    ], "any"),
    "ReconciliationResponse": o([
        { json: "POIReconciliationID", js: "poiReconciliationId", typ: u(undefined, "") },
        { json: "ReconciliationType", js: "reconciliationType", typ: r("ReconciliationType") },
        { json: "Response", js: "response", typ: r("Response") },
        { json: "TransactionTotals", js: "transactionTotals", typ: u(undefined, a(r("TransactionTotals"))) },
    ], "any"),
    "ReversalResponse": o([
        { json: "CustomerOrderID", js: "customerOrderId", typ: u(undefined, "") },
        { json: "OriginalPOITransaction", js: "originalPoiTransaction", typ: u(undefined, r("OriginalPoiTransaction")) },
        { json: "PaymentReceipt", js: "paymentReceipt", typ: u(undefined, a(r("PaymentReceipt"))) },
        { json: "POIData", js: "poiData", typ: u(undefined, r("PoiData")) },
        { json: "Response", js: "response", typ: r("Response") },
        { json: "ReversedAmount", js: "reversedAmount", typ: u(undefined, 3.14) },
    ], "any"),
    "SoundResponse": o([
        { json: "Response", js: "response", typ: r("Response") },
    ], "any"),
    "StoredValueResponse": o([
        { json: "POIData", js: "poiData", typ: r("PoiData") },
        { json: "Response", js: "response", typ: r("Response") },
        { json: "SaleData", js: "saleData", typ: r("SaleData") },
        { json: "StoredValueResult", js: "storedValueResult", typ: u(undefined, a(r("StoredValueResult"))) },
    ], "any"),
    "StoredValueResult": o([
        { json: "Currency", js: "currency", typ: "" },
        { json: "EanUpc", js: "eanUpc", typ: u(undefined, "") },
        { json: "HostTransactionID", js: "hostTransactionId", typ: u(undefined, r("TransactionIdentification")) },
        { json: "ItemAmount", js: "itemAmount", typ: 3.14 },
        { json: "ProductCode", js: "productCode", typ: "" },
        { json: "StoredValueAccountStatus", js: "storedValueAccountStatus", typ: r("StoredValueAccountStatus") },
        { json: "StoredValueTransactionType", js: "storedValueTransactionType", typ: r("StoredValueTransactionType") },
    ], "any"),
    "StoredValueAccountStatus": o([
        { json: "CurrentBalance", js: "currentBalance", typ: u(undefined, 3.14) },
        { json: "StoredValueAccountID", js: "storedValueAccountId", typ: r("StoredValueAccountId") },
    ], "any"),
    "TransactionStatusResponse": o([
        { json: "MessageReference", js: "messageReference", typ: u(undefined, r("MessageReference")) },
        { json: "RepeatedMessageResponse", js: "repeatedMessageResponse", typ: u(undefined, r("RepeatedMessageResponse")) },
        { json: "Response", js: "response", typ: r("Response") },
    ], "any"),
    "RepeatedMessageResponse": o([
        { json: "MessageHeader", js: "messageHeader", typ: r("MessageHeader") },
        { json: "RepeatedResponseMessageBody", js: "repeatedResponseMessageBody", typ: r("RepeatedResponseMessageBody") },
    ], "any"),
    "RepeatedResponseMessageBody": o([
        { json: "CardAcquisitionResponse", js: "cardAcquisitionResponse", typ: u(undefined, r("CardAcquisitionResponse")) },
        { json: "CardReaderAPDUResponse", js: "cardReaderApduResponse", typ: u(undefined, r("CardReaderApduResponse")) },
        { json: "LoyaltyResponse", js: "loyaltyResponse", typ: u(undefined, r("LoyaltyResponse")) },
        { json: "PaymentResponse", js: "paymentResponse", typ: u(undefined, r("PaymentResponse")) },
        { json: "ReversalResponse", js: "reversalResponse", typ: u(undefined, r("ReversalResponse")) },
        { json: "StoredValueResponse", js: "storedValueResponse", typ: u(undefined, r("StoredValueResponse")) },
    ], "any"),
    "TransmitResponse": o([
        { json: "Message", js: "message", typ: u(undefined, "any") },
        { json: "Response", js: "response", typ: r("Response") },
    ], "any"),
    "TerminalApiSecuredRequest": o([
        { json: "SaleToPOIRequest", js: "saleToPoiRequest", typ: u(undefined, r("SaleToPoiSecuredMessage")) },
    ], "any"),
    "SaleToPoiSecuredMessage": o([
        { json: "MessageHeader", js: "messageHeader", typ: u(undefined, r("MessageHeader")) },
        { json: "NexoBlob", js: "nexoBlob", typ: u(undefined, "") },
        { json: "SecurityTrailer", js: "securityTrailer", typ: u(undefined, r("SecurityTrailer")) },
    ], "any"),
    "SecurityTrailer": o([
        { json: "AdyenCryptoVersion", js: "adyenCryptoVersion", typ: u(undefined, 3.14) },
        { json: "Hmac", js: "hmac", typ: u(undefined, "any") },
        { json: "KeyIdentifier", js: "keyIdentifier", typ: u(undefined, "") },
        { json: "KeyVersion", js: "keyVersion", typ: u(undefined, 3.14) },
        { json: "Nonce", js: "nonce", typ: u(undefined, "any") },
    ], "any"),
    "TerminalApiSecuredResponse": o([
        { json: "SaleToPOIResponse", js: "saleToPoiResponse", typ: u(undefined, r("SaleToPoiSecuredMessage")) },
    ], "any"),
    "NexoDerivedKey": o([
        { json: "CipherKey", js: "cipherKey", typ: u(undefined, "any") },
        { json: "HmacKey", js: "hmacKey", typ: u(undefined, "any") },
        { json: "Iv", js: "iv", typ: u(undefined, "any") },
    ], "any"),
    "SecurityKey": o([
        { json: "adyenCryptoVersion", js: "adyenCryptoVersion", typ: u(undefined, 3.14) },
        { json: "keyIdentifier", js: "keyIdentifier", typ: u(undefined, "") },
        { json: "keyVersion", js: "keyVersion", typ: u(undefined, 3.14) },
        { json: "passphrase", js: "passphrase", typ: u(undefined, "") },
    ], "any"),
    "DeviceType": [
        "CashierDisplay",
        "CashierInput",
        "CustomerDisplay",
        "CustomerInput",
    ],
    "InfoQualifyType": [
        "CustomerAssistance",
        "Display",
        "Document",
        "Error",
        "Input",
        "POIReplication",
        "Receipt",
        "Sound",
        "Status",
        "Voucher",
    ],
    "MenuEntryTagType": [
        "NonSelectable",
        "NonSelectableSubMenu",
        "Selectable",
        "SubMenu",
    ],
    "OutputFormatType": [
        "BarCode",
        "MessageRef",
        "Text",
        "XHTML",
    ],
    "AlignmentType": [
        "Centred",
        "Justified",
        "Left",
        "Right",
    ],
    "CharacterHeightType": [
        "DoubleHeight",
        "HalfHeight",
        "SingleHeight",
    ],
    "CharacterStyleType": [
        "Bold",
        "Italic",
        "Normal",
        "Underlined",
    ],
    "CharacterWidthType": [
        "DoubleWidth",
        "SingleWidth",
    ],
    "ColorType": [
        "Black",
        "Blue",
        "Cyan",
        "Green",
        "Magenta",
        "Red",
        "White",
        "Yellow",
    ],
    "BarcodeType": [
        "Code128",
        "Code25",
        "EAN13",
        "EAN8",
        "PDF417",
        "QRCODE",
        "UPCA",
    ],
    "MessageCategoryType": [
        "Abort",
        "Admin",
        "BalanceInquiry",
        "Batch",
        "CardAcquisition",
        "CardReaderAPDU",
        "CardReaderInit",
        "CardReaderPowerOff",
        "Diagnosis",
        "Display",
        "EnableService",
        "Event",
        "GetTotals",
        "Input",
        "InputUpdate",
        "Login",
        "Logout",
        "Loyalty",
        "Payment",
        "PIN",
        "Print",
        "Reconciliation",
        "Reversal",
        "Sound",
        "StoredValue",
        "TransactionStatus",
        "Transmit",
    ],
    "EntryModeType": [
        "Contactless",
        "File",
        "ICC",
        "Keyed",
        "MagStripe",
        "Manual",
        "Mobile",
        "RFID",
        "Scanned",
        "SynchronousICC",
        "Tapped",
    ],
    "IdentificationSupportType": [
        "HybridCard",
        "LinkedCard",
        "LoyaltyCard",
        "NoCard",
    ],
    "IdentificationType": [
        "AccountNumber",
        "BarCode",
        "ISOTrack2",
        "PAN",
        "PhoneNumber",
    ],
    "AccountType": [
        "CardTotals",
        "Checking",
        "CreditCard",
        "Default",
        "EpurseCard",
        "Investment",
        "Savings",
        "Universal",
    ],
    "TokenRequestedType": [
        "Customer",
        "Transaction",
    ],
    "ContentType": [
        "id-ct-authData",
        "id-data",
        "id-digestedData",
        "id-encryptedData",
        "id-envelopedData",
        "id-signedData",
    ],
    "AlgorithmType": [
        "des-ede3-cbc",
        "des-ede3-ecb",
        "id-dukpt-wrap",
        "id-retail-cbc-mac",
        "id-retail-cbc-mac-sha-256",
        "id-sha256",
        "id-ukpt-wrap ",
        "rsaEncryption",
        "sha256WithRSAEncryption",
    ],
    "VersionType": [
        "v0",
        "v1",
        "v2",
        "v3",
        "v4",
        "v5",
    ],
    "TrackFormatType": [
        "AAMVA",
        "CMC-7",
        "E-13B",
        "ISO",
        "JIS-I",
        "JIS-II",
    ],
    "CheckTypeCodeType": [
        "Company",
        "Personal",
    ],
    "PaymentInstrumentType": [
        "Card",
        "Cash",
        "Check",
        "Mobile",
        "StoredValue",
    ],
    "LoyaltyUnitType": [
        "Monetary",
        "Point",
    ],
    "LoyaltyTransactionType": [
        "Award",
        "AwardRefund",
        "Rebate",
        "RebateRefund",
        "Redemption",
        "RedemptionRefund",
    ],
    "UnitOfMeasureType": [
        "Case",
        "Centilitre",
        "Centimetre",
        "Foot",
        "Gram",
        "Inch",
        "Kilogram",
        "Kilometre",
        "Litre",
        "Meter",
        "Mile",
        "Other",
        "Ounce",
        "Pint",
        "Pound",
        "Quart",
        "UKGallon",
        "USGallon",
        "Yard",
    ],
    "ForceEntryModeType": [
        "CheckReader",
        "Contactless",
        "File",
        "ICC",
        "Keyed",
        "MagStripe",
        "Manual",
        "RFID",
        "Scanned",
        "SynchronousICC",
        "Tapped",
    ],
    "LoyaltyHandlingType": [
        "Allowed",
        "Forbidden",
        "Processed",
        "Proposed",
        "Required",
    ],
    "CustomerOrderReqType": [
        "Both",
        "Closed",
        "Open",
    ],
    "SaleCapabilitiesType": [
        "CashierDisplay",
        "CashierError",
        "CashierInput",
        "CashierStatus",
        "CustomerAssistance",
        "CustomerDisplay",
        "CustomerError",
        "CustomerInput",
        "EMVContactless",
        "ICC",
        "MagStripe",
        "POIReplication",
        "PrinterDocument",
        "PrinterReceipt",
        "PrinterVoucher",
    ],
    "GenericProfileType": [
        "Basic",
        "Extended",
        "Standard",
    ],
    "ServiceProfilesType": [
        "Batch",
        "CardReader",
        "Communication",
        "Loyalty",
        "OneTimeRes",
        "PIN",
        "Reservation",
        "Sound",
        "StoredValue",
        "Synchro",
    ],
    "TerminalEnvironmentType": [
        "Attended",
        "SemiAttended",
        "Unattended",
    ],
    "InstalmentType": [
        "DeferredInstalments",
        "EqualInstalments",
        "InequalInstalments",
    ],
    "PeriodUnitType": [
        "Annual",
        "Daily",
        "Monthly",
        "Weekly",
    ],
    "PaymentType": [
        "CashAdvance",
        "CashDeposit",
        "Completion",
        "FirstReservation",
        "Instalment",
        "IssuerInstalment",
        "Normal",
        "OneTimeReservation",
        "PaidOut",
        "Recurring",
        "Refund",
        "UpdateReservation",
    ],
    "ReversalReasonType": [
        "CustCancel",
        "Malfunction",
        "MerchantCancel",
        "Unable2Compl",
    ],
    "ServicesEnabledType": [
        "CardAcquisition",
        "Loyalty",
        "Payment",
    ],
    "TransactionActionType": [
        "AbortTransaction",
        "StartTransaction",
    ],
    "EventToNotifyType": [
        "Abort",
        "BeginMaintenance",
        "CardInserted",
        "CardRemoved",
        "Completed",
        "CustomerLanguage",
        "EndMaintenance",
        "Initialised",
        "KeyPressed",
        "OutOfOrder",
        "Reject",
        "SaleAdmin",
        "SaleWakeUp",
        "SecurityAlarm",
        "Shutdown",
        "StopAssistance",
    ],
    "TotalDetailsType": [
        "OperatorID",
        "POIID",
        "SaleID",
        "ShiftNumber",
        "TotalsGroupID",
    ],
    "InputCommandType": [
        "DecimalString",
        "DigitString",
        "GetAnyKey",
        "GetConfirmation",
        "GetFunctionKey",
        "GetMenuEntry",
        "Password",
        "SiteManager",
        "TextString",
    ],
    "MessageClassType": [
        "Device",
        "Event",
        "Service",
    ],
    "MessageType": [
        "Notification",
        "Request",
        "Response",
    ],
    "PinFormatType": [
        "ISO0",
        "ISO1",
        "ISO2",
        "ISO3",
    ],
    "PinRequestType": [
        "PINEnter",
        "PINVerify",
        "PINVerifyOnly",
    ],
    "DocumentQualifierType": [
        "CashierReceipt",
        "CustomerReceipt",
        "Document",
        "Journal",
        "SaleReceipt",
        "Voucher",
    ],
    "ResponseModeType": [
        "Immediate",
        "NotRequired",
        "PrintEnd",
        "SoundEnd",
    ],
    "ReconciliationType": [
        "AcquirerReconciliation",
        "AcquirerSynchronisation",
        "PreviousReconciliation",
        "SaleReconciliation",
    ],
    "SoundActionType": [
        "SetDefaultVolume",
        "StartSound",
        "StopSound",
    ],
    "SoundFormatType": [
        "MessageRef",
        "SoundRef",
        "Text",
    ],
    "StoredValueAccountType": [
        "GiftCard",
        "Other",
        "PhoneCard",
    ],
    "StoredValueTransactionType": [
        "Activate",
        "Duplicate",
        "Load",
        "Reserve",
        "Reverse",
        "Unload",
    ],
    "ErrorConditionType": [
        "Aborted",
        "Busy",
        "Cancel",
        "DeviceOut",
        "InProgress",
        "InsertedCard",
        "InvalidCard",
        "LoggedOut",
        "MessageFormat",
        "NotAllowed",
        "NotFound",
        "PaymentRestriction",
        "Refusal",
        "UnavailableDevice",
        "UnavailableService",
        "UnreachableHost",
        "WrongPIN",
    ],
    "ResultType": [
        "Failure",
        "Partial",
        "Success",
    ],
    "AuthenticationMethodType": [
        "Bypass",
        "ManualVerification",
        "MerchantAuthentication",
        "OfflinePIN",
        "OnLinePIN",
        "PaperSignature",
        "SecureCertificate",
        "SecureNoCertificate",
        "SecuredChannel",
        "SignatureCapture",
        "UnknownMethod",
    ],
    "GlobalStatusType": [
        "Busy",
        "Maintenance",
        "OK",
        "Unreachable",
    ],
    "PrinterStatusType": [
        "NoPaper",
        "OK",
        "OutOfOrder",
        "PaperJam",
        "PaperLow",
    ],
    "TransactionType": [
        "Award",
        "CashAdvance",
        "CompletedDeffered",
        "CompletedReservation",
        "Credit",
        "Debit",
        "Declined",
        "Failed",
        "FirstReservation",
        "IssuerInstalment",
        "OneTimeReservation",
        "Rebate",
        "Redemption",
        "ReverseAward",
        "ReverseCredit",
        "ReverseDebit",
        "ReverseRebate",
        "ReverseRedemption",
        "UpdateReservation",
    ],
    "PoiCapabilitiesType": [
        "CashHandling",
        "CashierDisplay",
        "CashierError",
        "CashierInput",
        "CustomerDisplay",
        "CustomerError",
        "CustomerInput",
        "EMVContactless",
        "ICC",
        "MagStripe",
        "PrinterDocument",
        "PrinterReceipt",
        "PrinterVoucher",
    ],
};
//# sourceMappingURL=terminal.js.map