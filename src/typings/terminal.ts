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

import {ApplicationInfo} from "./applicationInfo";

export interface TerminalApiRequest {
    saleToPoiRequest: SaleToPoiRequest;
}

export interface SaleToPoiRequest {
    abortRequest?:              AbortRequest;
    adminRequest?:              AdminRequest;
    balanceInquiryRequest?:     BalanceInquiryRequest;
    batchRequest?:              BatchRequest;
    cardAcquisitionRequest?:    CardAcquisitionRequest;
    cardReaderApduRequest?:     CardReaderApduRequest;
    cardReaderInitRequest?:     CardReaderInitRequest;
    cardReaderPowerOffRequest?: CardReaderPowerOffRequest;
    diagnosisRequest?:          DiagnosisRequest;
    displayRequest?:            DisplayRequest;
    enableServiceRequest?:      EnableServiceRequest;
    eventNotification?:         EventNotification;
    getTotalsRequest?:          GetTotalsRequest;
    inputRequest?:              InputRequest;
    inputUpdate?:               InputUpdate;
    loginRequest?:              LoginRequest;
    logoutRequest?:             LogoutRequest;
    loyaltyRequest?:            LoyaltyRequest;
    messageHeader:              MessageHeader;
    paymentRequest?:            PaymentRequest;
    pinRequest?:                PinRequest;
    printRequest?:              PrintRequest;
    reconciliationRequest?:     ReconciliationRequest;
    reversalRequest?:           ReversalRequest;
    securityTrailer?:           ContentInformation;
    soundRequest?:              SoundRequest;
    storedValueRequest?:        StoredValueRequest;
    transactionStatusRequest?:  TransactionStatusRequest;
    transmitRequest?:           TransmitRequest;
}

export interface AbortRequest {
    abortReason:      string;
    displayOutput?:   DisplayOutput;
    messageReference: MessageReference;
}

export interface DisplayOutput {
    device:                DeviceType;
    infoQualify:           InfoQualifyType;
    menuEntry?:            MenuEntry[];
    minimumDisplayTime?:   number;
    outputContent:         OutputContent;
    outputSignature?:      any;
    responseRequiredFlag?: boolean;
}

export enum DeviceType {
    CashierDisplay = "CashierDisplay",
    CashierInput = "CashierInput",
    CustomerDisplay = "CustomerDisplay",
    CustomerInput = "CustomerInput",
}

export enum InfoQualifyType {
    CustomerAssistance = "CustomerAssistance",
    Display = "Display",
    Document = "Document",
    Error = "Error",
    Input = "Input",
    PoiReplication = "POIReplication",
    Receipt = "Receipt",
    Sound = "Sound",
    Status = "Status",
    Voucher = "Voucher",
}

export interface MenuEntry {
    defaultSelectedFlag?: boolean;
    menuEntryTag?:        MenuEntryTagType;
    outputFormat:         OutputFormatType;
    outputText?:          OutputText[];
    outputXhtml?:         any;
    predefinedContent?:   PredefinedContent;
}

export enum MenuEntryTagType {
    NonSelectable = "NonSelectable",
    NonSelectableSubMenu = "NonSelectableSubMenu",
    Selectable = "Selectable",
    SubMenu = "SubMenu",
}

export enum OutputFormatType {
    BarCode = "BarCode",
    MessageRef = "MessageRef",
    Text = "Text",
    Xhtml = "XHTML",
}

export interface OutputText {
    alignment?:       AlignmentType;
    characterHeight?: CharacterHeightType;
    characterSet?:    number;
    characterStyle?:  CharacterStyleType;
    characterWidth?:  CharacterWidthType;
    color?:           ColorType;
    endOfLineFlag?:   boolean;
    font?:            string;
    startColumn?:     number;
    startRow?:        number;
    text?:            string;
}

export enum AlignmentType {
    Centred = "Centred",
    Justified = "Justified",
    Left = "Left",
    Right = "Right",
}

export enum CharacterHeightType {
    DoubleHeight = "DoubleHeight",
    HalfHeight = "HalfHeight",
    SingleHeight = "SingleHeight",
}

export enum CharacterStyleType {
    Bold = "Bold",
    Italic = "Italic",
    Normal = "Normal",
    Underlined = "Underlined",
}

export enum CharacterWidthType {
    DoubleWidth = "DoubleWidth",
    SingleWidth = "SingleWidth",
}

export enum ColorType {
    Black = "Black",
    Blue = "Blue",
    Cyan = "Cyan",
    Green = "Green",
    Magenta = "Magenta",
    Red = "Red",
    White = "White",
    Yellow = "Yellow",
}

export interface PredefinedContent {
    language?:   string;
    referenceId: string;
}

export interface OutputContent {
    outputBarcode?:     OutputBarcode;
    outputFormat:       OutputFormatType;
    outputText?:        OutputText[];
    outputXhtml?:       any;
    predefinedContent?: PredefinedContent;
}

export interface OutputBarcode {
    barcodeType?: BarcodeType;
    value?:       string;
}

export enum BarcodeType {
    Code128 = "Code128",
    Code25 = "Code25",
    Ean13 = "EAN13",
    Ean8 = "EAN8",
    Pdf417 = "PDF417",
    Qrcode = "QRCODE",
    Upca = "UPCA",
}

export interface MessageReference {
    deviceId?:        string;
    messageCategory?: MessageCategoryType;
    poiid?:           string;
    saleId?:          string;
    serviceId?:       string;
}

export enum MessageCategoryType {
    Abort = "Abort",
    Admin = "Admin",
    BalanceInquiry = "BalanceInquiry",
    Batch = "Batch",
    CardAcquisition = "CardAcquisition",
    CardReaderApdu = "CardReaderAPDU",
    CardReaderInit = "CardReaderInit",
    CardReaderPowerOff = "CardReaderPowerOff",
    Diagnosis = "Diagnosis",
    Display = "Display",
    EnableService = "EnableService",
    Event = "Event",
    GetTotals = "GetTotals",
    Input = "Input",
    InputUpdate = "InputUpdate",
    Login = "Login",
    Logout = "Logout",
    Loyalty = "Loyalty",
    Payment = "Payment",
    Pin = "PIN",
    Print = "Print",
    Reconciliation = "Reconciliation",
    Reversal = "Reversal",
    Sound = "Sound",
    StoredValue = "StoredValue",
    TransactionStatus = "TransactionStatus",
    Transmit = "Transmit",
}

export interface AdminRequest {
    serviceIdentification?: string;
}

export interface BalanceInquiryRequest {
    loyaltyAccountReq?: LoyaltyAccountReq;
    paymentAccountReq?: PaymentAccountReq;
}

export interface LoyaltyAccountReq {
    cardAcquisitionReference?: TransactionIdentification;
    loyaltyAccountId?:         LoyaltyAccountId;
}

export interface TransactionIdentification {
    timeStamp:     string;
    transactionId: string;
}

export interface LoyaltyAccountId {
    entryMode:              EntryModeType[];
    identificationSupport?: IdentificationSupportType;
    identificationType:     IdentificationType;
    value?:                 string;
}

export enum EntryModeType {
    Contactless = "Contactless",
    File = "File",
    Icc = "ICC",
    Keyed = "Keyed",
    MagStripe = "MagStripe",
    Manual = "Manual",
    Mobile = "Mobile",
    Rfid = "RFID",
    Scanned = "Scanned",
    SynchronousIcc = "SynchronousICC",
    Tapped = "Tapped",
}

export enum IdentificationSupportType {
    HybridCard = "HybridCard",
    LinkedCard = "LinkedCard",
    LoyaltyCard = "LoyaltyCard",
    NoCard = "NoCard",
}

export enum IdentificationType {
    AccountNumber = "AccountNumber",
    BarCode = "BarCode",
    IsoTrack2 = "ISOTrack2",
    Pan = "PAN",
    PhoneNumber = "PhoneNumber",
}

export interface PaymentAccountReq {
    accountType?:              AccountType;
    cardAcquisitionReference?: TransactionIdentification;
    paymentInstrumentData?:    PaymentInstrumentData;
}

export enum AccountType {
    CardTotals = "CardTotals",
    Checking = "Checking",
    CreditCard = "CreditCard",
    Default = "Default",
    EpurseCard = "EpurseCard",
    Investment = "Investment",
    Savings = "Savings",
    Universal = "Universal",
}

export interface PaymentInstrumentData {
    cardData?:             CardData;
    checkData?:            CheckData;
    mobileData?:           MobileData;
    paymentInstrumentType: PaymentInstrumentType;
}

export interface CardData {
    allowedProduct?:     AllowedProduct[];
    allowedProductCode?: string[];
    cardCountryCode?:    string;
    customerOrder?:      CustomerOrder[];
    entryMode?:          EntryModeType[];
    maskedPan?:          string;
    paymentAccountRef?:  string;
    paymentBrand?:       string;
    paymentToken?:       PaymentToken;
    protectedCardData?:  ContentInformation;
    sensitiveCardData?:  SensitiveCardData;
}

export interface AllowedProduct {
    additionalProductInfo?: string;
    eanUpc?:                string;
    productCode:            string;
    productLabel?:          string;
}

export interface CustomerOrder {
    accessedBy?:            string;
    additionalInformation?: string;
    currency?:              string;
    currentAmount:          number;
    customerOrderId:        string;
    endDate?:               { [key: string]: any };
    forecastedAmount:       number;
    openOrderState?:        boolean;
    startDate:              { [key: string]: any };
}

export interface PaymentToken {
    expiryDateTime?:    { [key: string]: any };
    tokenRequestedType: TokenRequestedType;
    tokenValue:         string;
}

export enum TokenRequestedType {
    Customer = "Customer",
    Transaction = "Transaction",
}

export interface ContentInformation {
    authenticatedData?:     AuthenticatedData;
    contentType:            ContentType;
    digestedData?:          DigestedData;
    envelopedData?:         EnvelopedData;
    namedKeyEncryptedData?: NamedKeyEncryptedData;
    signedData?:            SignedData;
}

export interface AuthenticatedData {
    encapsulatedContent: EncapsulatedContent;
    keyTransportOrKek?:  any[];
    mac:                 any;
    macAlgorithm:        AlgorithmIdentifier;
    version?:            VersionType;
}

export interface EncapsulatedContent {
    content?:    any;
    contentType: ContentType;
}

export enum ContentType {
    IdCtAuthData = "id-ct-authData",
    IdData = "id-data",
    IdDigestedData = "id-digestedData",
    IdEncryptedData = "id-encryptedData",
    IdEnvelopedData = "id-envelopedData",
    IdSignedData = "id-signedData",
}

export interface AlgorithmIdentifier {
    algorithm:  AlgorithmType;
    parameter?: Parameter;
}

export enum AlgorithmType {
    DesEde3Cbc = "des-ede3-cbc",
    DesEde3Ecb = "des-ede3-ecb",
    IdDukptWrap = "id-dukpt-wrap",
    IdRetailCbcMac = "id-retail-cbc-mac",
    IdRetailCbcMacSha256 = "id-retail-cbc-mac-sha-256",
    IdSha256 = "id-sha256",
    IdUkptWrap = "id-ukpt-wrap ",
    RsaEncryption = "rsaEncryption",
    Sha256WithRsaEncryption = "sha256WithRSAEncryption",
}

export interface Parameter {
    initialisationVector?: any;
}

export enum VersionType {
    V0 = "v0",
    V1 = "v1",
    V2 = "v2",
    V3 = "v3",
    V4 = "v4",
    V5 = "v5",
}

export interface DigestedData {
    digest:              any;
    digestAlgorithm:     AlgorithmIdentifier;
    encapsulatedContent: EncapsulatedContent;
    version?:            VersionType;
}

export interface EnvelopedData {
    encryptedContent:   EncryptedContent;
    keyTransportOrKek?: any[];
    version?:           VersionType;
}

export interface EncryptedContent {
    contentEncryptionAlgorithm: AlgorithmIdentifier;
    contentType:                ContentType;
    encryptedData:              any;
}

export interface NamedKeyEncryptedData {
    encryptedContent: EncryptedContent;
    keyName?:         string;
    version?:         VersionType;
}

export interface SignedData {
    certificate?:        any[];
    digestAlgorithm:     AlgorithmIdentifier[];
    encapsulatedContent: EncapsulatedContent;
    signer:              Signer[];
    version?:            VersionType;
}

export interface Signer {
    digestAlgorithm:    AlgorithmIdentifier;
    signature:          any;
    signatureAlgorithm: AlgorithmIdentifier;
    signerIdentifier:   SignerIdentifier;
    version?:           VersionType;
}

export interface SignerIdentifier {
    issuerAndSerialNumber: IssuerAndSerialNumber;
}

export interface IssuerAndSerialNumber {
    issuer:       Issuer;
    serialNumber: number;
}

export interface Issuer {
    relativeDistinguishedName: RelativeDistinguishedName[];
}

export interface RelativeDistinguishedName {
    attribute:      string;
    attributeValue: string;
}

export interface SensitiveCardData {
    cardSeqNumb?: string;
    expiryDate?:  string;
    pan?:         string;
    trackData?:   TrackData[];
}

export interface TrackData {
    trackFormat?: TrackFormatType;
    trackNumb?:   number;
    value?:       string;
}

export enum TrackFormatType {
    Aamva = "AAMVA",
    Cmc7 = "CMC-7",
    E13B = "E-13B",
    Iso = "ISO",
    JisI = "JIS-I",
    JisIi = "JIS-II",
}

export interface CheckData {
    accountNumber?:   string;
    bankId?:          string;
    checkCardNumber?: string;
    checkNumber?:     string;
    country?:         string;
    trackData?:       TrackData;
    typeCode?:            CheckTypeCodeType;
}

export enum CheckTypeCodeType {
    Company = "Company",
    Personal = "Personal",
}

export interface MobileData {
    geolocation?:         Geolocation;
    maskedMsisdn?:        string;
    mobileCountryCode?:   string;
    mobileNetworkCode?:   string;
    protectedMobileData?: ContentInformation;
    sensitiveMobileData?: SensitiveMobileData;
}

export interface Geolocation {
    geographicCoordinates?: GeographicCoordinates;
    utmCoordinates?:        UtmCoordinates;
}

export interface GeographicCoordinates {
    latitude:  string;
    longitude: string;
}

export interface UtmCoordinates {
    utmEastward:  string;
    utmNorthward: string;
    utmZone:      string;
}

export interface SensitiveMobileData {
    imei?:  string;
    imsi?:  string;
    msisdn: string;
}

export enum PaymentInstrumentType {
    Card = "Card",
    Cash = "Cash",
    Check = "Check",
    Mobile = "Mobile",
    StoredValue = "StoredValue",
}

export interface BatchRequest {
    removeAllFlag?:        boolean;
    transactionToPerform?: TransactionToPerform[];
}

export interface TransactionToPerform {
    loyaltyRequest?:  LoyaltyRequest;
    paymentRequest?:  PaymentRequest;
    reversalRequest?: ReversalRequest;
}

export interface LoyaltyRequest {
    loyaltyData?:       LoyaltyData[];
    loyaltyTransaction: LoyaltyTransaction;
    saleData:           SaleData;
}

export interface LoyaltyData {
    cardAcquisitionReference?: TransactionIdentification;
    loyaltyAccountId?:         LoyaltyAccountId;
    loyaltyAmount?:            LoyaltyAmount;
}

export interface LoyaltyAmount {
    currency?:    string;
    loyaltyUnit?: LoyaltyUnitType;
    value?:       number;
}

export enum LoyaltyUnitType {
    Monetary = "Monetary",
    Point = "Point",
}

export interface LoyaltyTransaction {
    currency?:               string;
    loyaltyTransactionType:  LoyaltyTransactionType;
    originalPoiTransaction?: OriginalPoiTransaction;
    saleItem?:               SaleItem[];
    totalAmount?:            number;
    transactionConditions?:  TransactionConditions;
}

export enum LoyaltyTransactionType {
    Award = "Award",
    AwardRefund = "AwardRefund",
    Rebate = "Rebate",
    RebateRefund = "RebateRefund",
    Redemption = "Redemption",
    RedemptionRefund = "RedemptionRefund",
}

export interface OriginalPoiTransaction {
    acquirerId?:        string;
    approvalCode?:      string;
    customerLanguage?:  string;
    hostTransactionId?: TransactionIdentification;
    poiid?:             string;
    poiTransactionId?:  TransactionIdentification;
    reuseCardDataFlag?: boolean;
    saleId?:            string;
}

export interface SaleItem {
    additionalProductInfo?: string;
    eanUpc?:                string;
    itemAmount:             number;
    itemId:                 number;
    productCode:            string;
    productLabel?:          string;
    quantity?:              number;
    saleChannel?:           string;
    taxCode?:               string;
    unitOfMeasure?:         UnitOfMeasureType;
    unitPrice?:             number;
}

export enum UnitOfMeasureType {
    Case = "Case",
    Centilitre = "Centilitre",
    Centimetre = "Centimetre",
    Foot = "Foot",
    Gram = "Gram",
    Inch = "Inch",
    Kilogram = "Kilogram",
    Kilometre = "Kilometre",
    Litre = "Litre",
    Meter = "Meter",
    Mile = "Mile",
    Other = "Other",
    Ounce = "Ounce",
    Pint = "Pint",
    Pound = "Pound",
    Quart = "Quart",
    UkGallon = "UKGallon",
    UsGallon = "USGallon",
    Yard = "Yard",
}

export interface TransactionConditions {
    acquirerId?:           string[];
    allowedLoyaltyBrand?:  string[];
    allowedPaymentBrand?:  string[];
    customerLanguage?:     string;
    debitPreferredFlag?:   boolean;
    forceEntryMode?:       Array<ForceEntryModeType[]>;
    forceOnlineFlag?:      boolean;
    loyaltyHandling?:      LoyaltyHandlingType;
    merchantCategoryCode?: string;
}

export enum ForceEntryModeType {
    CheckReader = "CheckReader",
    Contactless = "Contactless",
    File = "File",
    Icc = "ICC",
    Keyed = "Keyed",
    MagStripe = "MagStripe",
    Manual = "Manual",
    Rfid = "RFID",
    Scanned = "Scanned",
    SynchronousIcc = "SynchronousICC",
    Tapped = "Tapped",
}

export enum LoyaltyHandlingType {
    Allowed = "Allowed",
    Forbidden = "Forbidden",
    Processed = "Processed",
    Proposed = "Proposed",
    Required = "Required",
}

export interface SaleData {
    customerOrderId?:    string;
    customerOrderReq?:   CustomerOrderReqType[];
    operatorId?:         string;
    operatorLanguage?:   string;
    saleReferenceId?:    string;
    saleTerminalData?:   SaleTerminalData;
    saleToAcquirerData?: SaleToAcquirerData;
    saleToIssuerData?:   SaleToIssuerData;
    saleToPoiData?:      string;
    saleTransactionId:   TransactionIdentification;
    shiftNumber?:        string;
    sponsoredMerchant?:  SponsoredMerchant[];
    tokenRequestedType?: TokenRequestedType;
}

export enum CustomerOrderReqType {
    Both = "Both",
    Closed = "Closed",
    Open = "Open",
}

export interface SaleTerminalData {
    saleCapabilities?:    SaleCapabilitiesType[];
    saleProfile?:         SaleProfile;
    terminalEnvironment?: TerminalEnvironmentType;
    totalsGroupId?:       string;
}

export enum SaleCapabilitiesType {
    CashierDisplay = "CashierDisplay",
    CashierError = "CashierError",
    CashierInput = "CashierInput",
    CashierStatus = "CashierStatus",
    CustomerAssistance = "CustomerAssistance",
    CustomerDisplay = "CustomerDisplay",
    CustomerError = "CustomerError",
    CustomerInput = "CustomerInput",
    EmvContactless = "EMVContactless",
    Icc = "ICC",
    MagStripe = "MagStripe",
    PoiReplication = "POIReplication",
    PrinterDocument = "PrinterDocument",
    PrinterReceipt = "PrinterReceipt",
    PrinterVoucher = "PrinterVoucher",
}

export interface SaleProfile {
    genericProfile?:  GenericProfileType;
    serviceProfiles?: ServiceProfilesType[];
}

export enum GenericProfileType {
    Basic = "Basic",
    Extended = "Extended",
    Standard = "Standard",
}

export enum ServiceProfilesType {
    Batch = "Batch",
    CardReader = "CardReader",
    Communication = "Communication",
    Loyalty = "Loyalty",
    OneTimeRes = "OneTimeRes",
    Pin = "PIN",
    Reservation = "Reservation",
    Sound = "Sound",
    StoredValue = "StoredValue",
    Synchro = "Synchro",
}

export interface SaleToAcquirerData {
    applicationInfo?: ApplicationInfo
}

export enum TerminalEnvironmentType {
    Attended = "Attended",
    SemiAttended = "SemiAttended",
    Unattended = "Unattended",
}

export interface SaleToIssuerData {
    statementReference?: string;
}

export interface SponsoredMerchant {
    merchantAddress?:     string;
    merchantCategoryCode: string;
    merchantCountry:      string;
    merchantName:         string;
    registrationId:       string;
}

export interface PaymentRequest {
    loyaltyData?:       LoyaltyData[];
    paymentData?:       PaymentData;
    paymentTransaction: PaymentTransaction;
    saleData:           SaleData;
}

export interface PaymentData {
    cardAcquisitionReference?: TransactionIdentification;
    customerOrder?:            CustomerOrder;
    instalment?:               Instalment;
    paymentInstrumentData?:    PaymentInstrumentData;
    paymentType?:              PaymentType;
    requestedValidityDate?:    string;
    splitPaymentFlag?:         boolean;
}

export interface Instalment {
    charges?:           number;
    cumulativeAmount?:  number;
    firstAmount?:       number;
    firstPaymentDate?:  string;
    instalmentType?:        InstalmentType[];
    period?:            number;
    periodUnit?:        PeriodUnitType;
    planId?:            string;
    sequenceNumber?:    number;
    totalNbOfPayments?: number;
}

export enum InstalmentType {
    DeferredInstalments = "DeferredInstalments",
    EqualInstalments = "EqualInstalments",
    InequalInstalments = "InequalInstalments",
}

export enum PeriodUnitType {
    Annual = "Annual",
    Daily = "Daily",
    Monthly = "Monthly",
    Weekly = "Weekly",
}

export enum PaymentType {
    CashAdvance = "CashAdvance",
    CashDeposit = "CashDeposit",
    Completion = "Completion",
    FirstReservation = "FirstReservation",
    Instalment = "Instalment",
    IssuerInstalment = "IssuerInstalment",
    Normal = "Normal",
    OneTimeReservation = "OneTimeReservation",
    PaidOut = "PaidOut",
    Recurring = "Recurring",
    Refund = "Refund",
    UpdateReservation = "UpdateReservation",
}

export interface PaymentTransaction {
    amountsReq:              AmountsReq;
    originalPoiTransaction?: OriginalPoiTransaction;
    saleItem?:               SaleItem[];
    transactionConditions?:  TransactionConditions;
}

export interface AmountsReq {
    cashBackAmount?:         number;
    currency:                string;
    maximumCashBackAmount?:  number;
    minimumAmountToDeliver?: number;
    minimumSplitAmount?:     number;
    paidAmount?:             number;
    requestedAmount?:        number;
    tipAmount?:              number;
}

export interface ReversalRequest {
    customerOrderId?:       CustomerOrder;
    originalPoiTransaction: OriginalPoiTransaction;
    reversalReason:         ReversalReasonType;
    reversedAmount?:        number;
    saleReferenceId?:       string;
}

export enum ReversalReasonType {
    CustCancel = "CustCancel",
    Malfunction = "Malfunction",
    MerchantCancel = "MerchantCancel",
    Unable2Compl = "Unable2Compl",
}

export interface CardAcquisitionRequest {
    cardAcquisitionTransaction: CardAcquisitionTransaction;
    saleData:                   SaleData;
}

export interface CardAcquisitionTransaction {
    allowedLoyaltyBrand?:        string[];
    allowedPaymentBrand?:        string[];
    cashBackFlag?:               boolean;
    customerLanguage?:           string;
    forceCustomerSelectionFlag?: boolean;
    forceEntryMode?:             Array<ForceEntryModeType[]>;
    loyaltyHandling?:            LoyaltyHandlingType;
    paymentType?:                PaymentType;
    totalAmount?:                number;
}

export interface CardReaderApduRequest {
    apduClass:           any;
    apduData?:           any;
    apduExpectedLength?: any;
    apduInstruction:     any;
    apduPar1:            any;
    apduPar2:            any;
}

export interface CardReaderInitRequest {
    displayOutput?:  DisplayOutput;
    forceEntryMode?: Array<ForceEntryModeType[]>;
    leaveCardFlag?:  boolean;
    maxWaitingTime?: number;
    warmResetFlag?:  boolean;
}

export interface CardReaderPowerOffRequest {
    displayOutput?:  DisplayOutput;
    maxWaitingTime?: number;
}

export interface DiagnosisRequest {
    acquirerId?:        string[];
    hostDiagnosisFlag?: boolean;
    poiid?:             string;
}

export interface DisplayRequest {
    displayOutput: DisplayOutput[];
}

export interface EnableServiceRequest {
    displayOutput?:    DisplayOutput;
    servicesEnabled?:  ServicesEnabledType[];
    transactionAction: TransactionActionType;
}

export enum ServicesEnabledType {
    CardAcquisition = "CardAcquisition",
    Loyalty = "Loyalty",
    Payment = "Payment",
}

export enum TransactionActionType {
    AbortTransaction = "AbortTransaction",
    StartTransaction = "StartTransaction",
}

export interface EventNotification {
    customerLanguage?:        string;
    displayOutput?:           DisplayOutput;
    eventDetails?:            string;
    eventToNotify:            EventToNotifyType;
    maintenanceRequiredFlag?: boolean;
    rejectedMessage?:         any;
    timeStamp:                string;
}

export enum EventToNotifyType {
    Abort = "Abort",
    BeginMaintenance = "BeginMaintenance",
    CardInserted = "CardInserted",
    CardRemoved = "CardRemoved",
    Completed = "Completed",
    CustomerLanguage = "CustomerLanguage",
    EndMaintenance = "EndMaintenance",
    Initialised = "Initialised",
    KeyPressed = "KeyPressed",
    OutOfOrder = "OutOfOrder",
    Reject = "Reject",
    SaleAdmin = "SaleAdmin",
    SaleWakeUp = "SaleWakeUp",
    SecurityAlarm = "SecurityAlarm",
    Shutdown = "Shutdown",
    StopAssistance = "StopAssistance",
}

export interface GetTotalsRequest {
    totalDetails?: TotalDetailsType[];
    totalFilter?:  TotalFilter;
}

export enum TotalDetailsType {
    OperatorId = "OperatorID",
    Poiid = "POIID",
    SaleId = "SaleID",
    ShiftNumber = "ShiftNumber",
    TotalsGroupId = "TotalsGroupID",
}

export interface TotalFilter {
    operatorId?:    string;
    poiid?:         string;
    saleId?:        string;
    shiftNumber?:   string;
    totalsGroupId?: string;
}

export interface InputRequest {
    displayOutput?: DisplayOutput;
    inputData:      InputData;
}

export interface InputData {
    beepKeyFlag?:            boolean;
    defaultInputString?:     string;
    device:                  DeviceType;
    disableCancelFlag?:      boolean;
    disableCorrectFlag?:     boolean;
    disableValidFlag?:       boolean;
    fromRightToLeftFlag?:    boolean;
    globalCorrectionFlag?:   boolean;
    immediateResponseFlag?:  boolean;
    infoQualify:             InfoQualifyType;
    inputCommand:            InputCommandType;
    maskCharactersFlag?:     boolean;
    maxDecimalLength?:       number;
    maxInputTime?:           number;
    maxLength?:              number;
    menuBackFlag?:           boolean;
    minLength?:              number;
    notifyCardInputFlag?:    boolean;
    stringMask?:             string;
    waitUserValidationFlag?: boolean;
}

export enum InputCommandType {
    DecimalString = "DecimalString",
    DigitString = "DigitString",
    GetAnyKey = "GetAnyKey",
    GetConfirmation = "GetConfirmation",
    GetFunctionKey = "GetFunctionKey",
    GetMenuEntry = "GetMenuEntry",
    Password = "Password",
    SiteManager = "SiteManager",
    TextString = "TextString",
}

export interface InputUpdate {
    maxDecimalLength?: number;
    maxLength?:        number;
    menuEntry?:        MenuEntry[];
    messageReference:  MessageReference;
    minLength?:        number;
    outputContent:     OutputContent;
    outputSignature?:  any;
}

export interface LoginRequest {
    customerOrderReq?:   CustomerOrderReqType[];
    dateTime:            { [key: string]: any };
    operatorId?:         string;
    operatorLanguage:    string;
    poiSerialNumber?:    string;
    saleSoftware:        SaleSoftware;
    saleTerminalData?:   SaleTerminalData;
    shiftNumber?:        string;
    tokenRequestedType?: TokenRequestedType;
    trainingModeFlag?:   boolean;
}

export interface SaleSoftware {
    applicationName:   string;
    certificationCode: string;
    manufacturerId:    string;
    softwareVersion:   string;
}

export interface LogoutRequest {
    maintenanceAllowed?: boolean;
}

export interface MessageHeader {
    deviceId?:        string;
    messageCategory:  MessageCategoryType;
    messageClass:     MessageClassType;
    messageType:      MessageType;
    poiid:            string;
    protocolVersion?: string;
    saleId:           string;
    serviceId?:       string;
}

export enum MessageClassType {
    Device = "Device",
    Event = "Event",
    Service = "Service",
}

export enum MessageType {
    Notification = "Notification",
    Request = "Request",
    Response = "Response",
}

export interface PinRequest {
    additionalInput?: string;
    cardholderPin?:   CardholderPin;
    keyReference?:    string;
    maxWaitingTime?:  number;
    pinEncAlgorithm?: string;
    pinFormat?:       PinFormatType;
    pinRequestType:   PinRequestType;
    pinVerifMethod?:  string;
}

export interface CardholderPin {
    additionalInput?: string;
    encrPinBlock:     ContentInformation;
    pinFormat:        PinFormatType;
}

export enum PinFormatType {
    Iso0 = "ISO0",
    Iso1 = "ISO1",
    Iso2 = "ISO2",
    Iso3 = "ISO3",
}

export enum PinRequestType {
    PinEnter = "PINEnter",
    PinVerify = "PINVerify",
    PinVerifyOnly = "PINVerifyOnly",
}

export interface PrintRequest {
    printOutput: PrintOutput;
}

export interface PrintOutput {
    documentQualifier:      DocumentQualifierType;
    integratedPrintFlag?:   boolean;
    outputContent:          OutputContent;
    outputSignature?:       any;
    requiredSignatureFlag?: boolean;
    responseMode:           ResponseModeType;
}

export enum DocumentQualifierType {
    CashierReceipt = "CashierReceipt",
    CustomerReceipt = "CustomerReceipt",
    Document = "Document",
    Journal = "Journal",
    SaleReceipt = "SaleReceipt",
    Voucher = "Voucher",
}

export enum ResponseModeType {
    Immediate = "Immediate",
    NotRequired = "NotRequired",
    PrintEnd = "PrintEnd",
    SoundEnd = "SoundEnd",
}

export interface ReconciliationRequest {
    acquirerId?:          string[];
    poiReconciliationId?: string;
    reconciliationType:   ReconciliationType;
}

export enum ReconciliationType {
    AcquirerReconciliation = "AcquirerReconciliation",
    AcquirerSynchronisation = "AcquirerSynchronisation",
    PreviousReconciliation = "PreviousReconciliation",
    SaleReconciliation = "SaleReconciliation",
}

export interface SoundRequest {
    responseMode?: ResponseModeType;
    soundAction:   SoundActionType;
    soundContent:  SoundContent;
    soundVolume?:  number;
}

export enum SoundActionType {
    SetDefaultVolume = "SetDefaultVolume",
    StartSound = "StartSound",
    StopSound = "StopSound",
}

export interface SoundContent {
    language?:    string;
    referenceId?: string;
    soundFormat?: SoundFormatType;
    value?:       string;
}

export enum SoundFormatType {
    MessageRef = "MessageRef",
    SoundRef = "SoundRef",
    Text = "Text",
}

export interface StoredValueRequest {
    customerLanguage?: string;
    saleData:          SaleData;
    storedValueData:   StoredValueData[];
}

export interface StoredValueData {
    currency:                   string;
    eanUpc?:                    string;
    itemAmount:                 number;
    originalPoiTransaction?:    OriginalPoiTransaction;
    productCode?:               string;
    storedValueAccountId?:      StoredValueAccountId;
    storedValueProvider?:       string;
    storedValueTransactionType: StoredValueTransactionType;
}

export interface StoredValueAccountId {
    entryMode:              EntryModeType[];
    expiryDate?:            string;
    identificationType:     IdentificationType;
    ownerName?:             string;
    storedValueAccountType: StoredValueAccountType;
    storedValueProvider?:   string;
    value?:                 string;
}

export enum StoredValueAccountType {
    GiftCard = "GiftCard",
    Other = "Other",
    PhoneCard = "PhoneCard",
}

export enum StoredValueTransactionType {
    Activate = "Activate",
    Duplicate = "Duplicate",
    Load = "Load",
    Reserve = "Reserve",
    Reverse = "Reverse",
    Unload = "Unload",
}

export interface TransactionStatusRequest {
    documentQualifier?:  DocumentQualifierType[];
    messageReference?:   MessageReference;
    receiptReprintFlag?: boolean;
}

export interface TransmitRequest {
    destinationAddress:  string;
    maximumTransmitTime: number;
    message:             any;
    waitResponseFlag?:   boolean;
}

export interface TerminalApiResponse {
    saleToPoiResponse?: SaleToPoiResponse;
}

export interface SaleToPoiResponse {
    adminResponse?:              AdminResponse;
    balanceInquiryResponse?:     BalanceInquiryResponse;
    batchResponse?:              BatchResponse;
    cardAcquisitionResponse?:    CardAcquisitionResponse;
    cardReaderApduResponse?:     CardReaderApduResponse;
    cardReaderInitResponse?:     CardReaderInitResponse;
    cardReaderPowerOffResponse?: CardReaderPowerOffResponse;
    diagnosisResponse?:          DiagnosisResponse;
    displayResponse?:            DisplayResponse;
    enableServiceResponse?:      EnableServiceResponse;
    getTotalsResponse?:          GetTotalsResponse;
    inputResponse?:              InputResponse;
    loginResponse?:              LoginResponse;
    logoutResponse?:             LogoutResponse;
    loyaltyResponse?:            LoyaltyResponse;
    messageHeader:               MessageHeader;
    paymentResponse?:            PaymentResponse;
    pinResponse?:                PinResponse;
    printResponse?:              PrintResponse;
    reconciliationResponse?:     ReconciliationResponse;
    reversalResponse?:           ReversalResponse;
    securityTrailer?:            ContentInformation;
    soundResponse?:              SoundResponse;
    storedValueResponse?:        StoredValueResponse;
    transactionStatusResponse?:  TransactionStatusResponse;
    transmitResponse?:           TransmitResponse;
}

export interface AdminResponse {
    response: Response;
}

export interface Response {
    additionalResponse?: string;
    errorCondition?:     ErrorConditionType;
    result:              ResultType;
}

export enum ErrorConditionType {
    Aborted = "Aborted",
    Busy = "Busy",
    Cancel = "Cancel",
    DeviceOut = "DeviceOut",
    InProgress = "InProgress",
    InsertedCard = "InsertedCard",
    InvalidCard = "InvalidCard",
    LoggedOut = "LoggedOut",
    MessageFormat = "MessageFormat",
    NotAllowed = "NotAllowed",
    NotFound = "NotFound",
    PaymentRestriction = "PaymentRestriction",
    Refusal = "Refusal",
    UnavailableDevice = "UnavailableDevice",
    UnavailableService = "UnavailableService",
    UnreachableHost = "UnreachableHost",
    WrongPin = "WrongPIN",
}

export enum ResultType {
    Failure = "Failure",
    Partial = "Partial",
    Success = "Success",
}

export interface BalanceInquiryResponse {
    loyaltyAccountStatus?: LoyaltyAccountStatus;
    paymentAccountStatus?: PaymentAccountStatus;
    response:              Response;
}

export interface LoyaltyAccountStatus {
    currency?:       string;
    currentBalance?: number;
    loyaltyAccount:  LoyaltyAccount;
    loyaltyUnit?:    LoyaltyUnitType;
}

export interface LoyaltyAccount {
    loyaltyAccountId: LoyaltyAccountId;
    loyaltyBrand?:    string;
}

export interface PaymentAccountStatus {
    currency?:              string;
    currentBalance?:        number;
    loyaltyAccountStatus?:  LoyaltyAccountStatus;
    paymentAcquirerData?:   PaymentAcquirerData;
    paymentInstrumentData?: PaymentInstrumentData;
}

export interface PaymentAcquirerData {
    acquirerId?:            string;
    acquirerPoiid:          string;
    acquirerTransactionId?: TransactionIdentification;
    approvalCode?:          string;
    merchantId:             string;
}

export interface BatchResponse {
    performedTransaction?: PerformedTransaction[];
    response:              Response;
}

export interface PerformedTransaction {
    loyaltyResult?:  LoyaltyResult[];
    paymentResult?:  PaymentResult;
    poiData:         PoiData;
    response:        Response;
    reversedAmount?: number;
    saleData?:       SaleData;
}

export interface LoyaltyResult {
    currentBalance?:      number;
    loyaltyAccount:       LoyaltyAccount;
    loyaltyAcquirerData?: LoyaltyAcquirerData;
    loyaltyAmount?:       LoyaltyAmount;
    rebates?:             Rebates;
}

export interface LoyaltyAcquirerData {
    approvalCode?:         string;
    hostReconciliationId?: string;
    loyaltyAcquirerId?:    string;
    loyaltyTransactionId?: TransactionIdentification;
}

export interface Rebates {
    rebateLabel?:    string;
    saleItemRebate?: SaleItemRebate[];
    totalRebate?:    number;
}

export interface SaleItemRebate {
    eanUpc?:        string;
    itemAmount?:    number;
    itemId:         number;
    productCode:    string;
    quantity?:      number;
    rebateLabel?:   string;
    unitOfMeasure?: UnitOfMeasureType;
}

export interface PoiData {
    poiReconciliationId?: string;
    poiTransactionId:     TransactionIdentification;
}

export interface PaymentResult {
    amountsResp?:           AmountsResp;
    authenticationMethod?:  AuthenticationMethodType[];
    capturedSignature?:     CapturedSignature;
    currencyConversion?:    CurrencyConversion[];
    customerLanguage?:      string;
    instalmentType?:            Instalment;
    merchantOverrideFlag?:  boolean;
    onlineFlag?:            boolean;
    paymentAcquirerData?:   PaymentAcquirerData;
    paymentInstrumentData?: PaymentInstrumentData;
    paymentType?:           PaymentType;
    protectedSignature?:    ContentInformation;
    validityDate?:          string;
}

export interface AmountsResp {
    authorizedAmount:    number;
    cashBackAmount?:     number;
    currency?:           string;
    tipAmount?:          number;
    totalFeesAmount?:    number;
    totalRebatesAmount?: number;
}

export enum AuthenticationMethodType {
    Bypass = "Bypass",
    ManualVerification = "ManualVerification",
    MerchantAuthentication = "MerchantAuthentication",
    OfflinePin = "OfflinePIN",
    OnlinePin = "OnlinePIN",
    PaperSignature = "PaperSignature",
    SecureCertificate = "SecureCertificate",
    SecureNoCertificate = "SecureNoCertificate",
    SecuredChannel = "SecuredChannel",
    SignatureCapture = "SignatureCapture",
    UnknownMethod = "UnknownMethod",
}

export interface CapturedSignature {
    areaSize?:      AreaSize;
    signaturePoint: SignaturePoint[];
}

export interface AreaSize {
    x: string;
    y: string;
}

export interface SignaturePoint {
    x: string;
    y: string;
}

export interface CurrencyConversion {
    commission?:           number;
    convertedAmount:       Amount;
    customerApprovedFlag?: boolean;
    declaration?:          string;
    markup?:               number;
    rate?:                 number;
}

export interface Amount {
    currency?: string;
    value?:    number;
}

export interface CardAcquisitionResponse {
    customerOrder?:         CustomerOrder[];
    loyaltyAccount?:        LoyaltyAccount[];
    paymentBrand?:          string[];
    paymentInstrumentData?: PaymentInstrumentData;
    poiData:                PoiData;
    response:               Response;
    saleData:               SaleData;
}

export interface CardReaderApduResponse {
    apduData?:       any;
    cardStatusWords: any;
    response:        Response;
}

export interface CardReaderInitResponse {
    entryMode?:    EntryModeType[];
    iccResetData?: IccResetData;
    response:      Response;
    trackData?:    TrackData[];
}

export interface IccResetData {
    atrValue?:        any;
    cardStatusWords?: any;
}

export interface CardReaderPowerOffResponse {
    response: Response;
}

export interface DiagnosisResponse {
    hostStatus?:   HostStatus[];
    loggedSaleId?: string[];
    poiStatus?:    PoiStatus;
    response:      Response;
}

export interface HostStatus {
    acquirerId:       string;
    isReachableFlag?: boolean;
}

export interface PoiStatus {
    cardReaderOkFlag?:    boolean;
    cashHandlingDevice?:  CashHandlingDevice[];
    communicationOkFlag?: boolean;
    fraudPreventionFlag?: boolean;
    globalStatus:         GlobalStatusType;
    pedokFlag?:           boolean;
    printerStatus?:       PrinterStatusType;
    securityOkFlag?:      boolean;
}

export interface CashHandlingDevice {
    cashHandlingOkFlag: boolean;
    coinsOrBills:       CoinsOrBills[];
    currency:           string;
}

export interface CoinsOrBills {
    number:    number;
    unitValue: number;
}

export enum GlobalStatusType {
    Busy = "Busy",
    Maintenance = "Maintenance",
    Ok = "OK",
    Unreachable = "Unreachable",
}

export enum PrinterStatusType {
    NoPaper = "NoPaper",
    Ok = "OK",
    OutOfOrder = "OutOfOrder",
    PaperJam = "PaperJam",
    PaperLow = "PaperLow",
}

export interface DisplayResponse {
    outputResult: OutputResult[];
}

export interface OutputResult {
    device:      DeviceType;
    infoQualify: InfoQualifyType;
    response:    Response;
}

export interface EnableServiceResponse {
    response: Response;
}

export interface GetTotalsResponse {
    poiReconciliationId: string;
    response:            Response;
    transactionTotals?:  TransactionTotals[];
}

export interface TransactionTotals {
    acquirerId?:           string;
    cardBrand?:            string;
    errorCondition?:       ErrorConditionType;
    hostReconciliationId?: string;
    loyaltyCurrency?:      string;
    loyaltyTotals?:        LoyaltyTotals[];
    loyaltyUnit?:          LoyaltyUnitType;
    operatorId?:           string;
    paymentCurrency?:      string;
    paymentInstrumentType: PaymentInstrumentType;
    paymentTotals?:        PaymentTotals[];
    poiid?:                string;
    saleId?:               string;
    shiftNumber?:          string;
    totalsGroupId?:        string;
}

export interface LoyaltyTotals {
    transactionAmount: number;
    transactionCount:  number;
    transactionType:   TransactionType;
}

export enum TransactionType {
    Award = "Award",
    CashAdvance = "CashAdvance",
    CompletedDeffered = "CompletedDeffered",
    CompletedReservation = "CompletedReservation",
    Credit = "Credit",
    Debit = "Debit",
    Declined = "Declined",
    Failed = "Failed",
    FirstReservation = "FirstReservation",
    IssuerInstalment = "IssuerInstalment",
    OneTimeReservation = "OneTimeReservation",
    Rebate = "Rebate",
    Redemption = "Redemption",
    ReverseAward = "ReverseAward",
    ReverseCredit = "ReverseCredit",
    ReverseDebit = "ReverseDebit",
    ReverseRebate = "ReverseRebate",
    ReverseRedemption = "ReverseRedemption",
    UpdateReservation = "UpdateReservation",
}

export interface PaymentTotals {
    transactionAmount: number;
    transactionCount:  number;
    transactionType:   TransactionType;
}

export interface InputResponse {
    inputResult:   InputResult;
    outputResult?: OutputResult;
}

export interface InputResult {
    device:      DeviceType;
    infoQualify: InfoQualifyType;
    input?:      Input;
    response:    Response;
}

export interface Input {
    confirmedFlag?:   boolean;
    digitInput?:      string;
    functionKey?:     string;
    inputCommand:     InputCommandType;
    menuEntryNumber?: number;
    password?:        ContentInformation;
    textInput?:       string;
}

export interface LoginResponse {
    poiSystemData?: PoiSystemData;
    response:       Response;
}

export interface PoiSystemData {
    dateTime:         { [key: string]: any };
    poiSoftware:      PoiSoftware;
    poiStatus?:       PoiStatus;
    poiTerminalData?: PoiTerminalData;
}

export interface PoiSoftware {
    applicationName:   string;
    certificationCode: string;
    manufacturerId:    string;
    softwareVersion:   string;
}

export interface PoiTerminalData {
    poiCapabilities:     PoiCapabilitiesType[];
    poiProfile?:         PoiProfile;
    poiSerialNumber:     string;
    terminalEnvironment: TerminalEnvironmentType;
}

export enum PoiCapabilitiesType {
    CashHandling = "CashHandling",
    CashierDisplay = "CashierDisplay",
    CashierError = "CashierError",
    CashierInput = "CashierInput",
    CustomerDisplay = "CustomerDisplay",
    CustomerError = "CustomerError",
    CustomerInput = "CustomerInput",
    EmvContactless = "EMVContactless",
    Icc = "ICC",
    MagStripe = "MagStripe",
    PrinterDocument = "PrinterDocument",
    PrinterReceipt = "PrinterReceipt",
    PrinterVoucher = "PrinterVoucher",
}

export interface PoiProfile {
    genericProfile?:  GenericProfileType;
    serviceProfiles?: ServiceProfilesType[];
}

export interface LogoutResponse {
    response: Response;
}

export interface LoyaltyResponse {
    loyaltyResult?:  LoyaltyResult[];
    paymentReceipt?: PaymentReceipt[];
    poiData:         PoiData;
    response:        Response;
    saleData:        SaleData;
}

export interface PaymentReceipt {
    documentQualifier:      DocumentQualifierType;
    integratedPrintFlag?:   boolean;
    outputContent:          OutputContent;
    requiredSignatureFlag?: boolean;
}

export interface PinResponse {
    cardholderPin?: CardholderPin;
    response:       Response;
}

export interface PaymentResponse {
    customerOrder?:  CustomerOrder[];
    loyaltyResult?:  LoyaltyResult[];
    paymentReceipt?: PaymentReceipt[];
    paymentResult?:  PaymentResult;
    poiData:         PoiData;
    response:        Response;
    saleData:        SaleData;
}

export interface PrintResponse {
    documentQualifier: DocumentQualifierType;
    response:          Response;
}

export interface ReconciliationResponse {
    poiReconciliationId?: string;
    reconciliationType:   ReconciliationType;
    response:             Response;
    transactionTotals?:   TransactionTotals[];
}

export interface ReversalResponse {
    customerOrderId?:        string;
    originalPoiTransaction?: OriginalPoiTransaction;
    paymentReceipt?:         PaymentReceipt[];
    poiData?:                PoiData;
    response:                Response;
    reversedAmount?:         number;
}

export interface SoundResponse {
    response: Response;
}

export interface StoredValueResponse {
    poiData:            PoiData;
    response:           Response;
    saleData:           SaleData;
    storedValueResult?: StoredValueResult[];
}

export interface StoredValueResult {
    currency:                   string;
    eanUpc?:                    string;
    hostTransactionId?:         TransactionIdentification;
    itemAmount:                 number;
    productCode:                string;
    storedValueAccountStatus:   StoredValueAccountStatus;
    storedValueTransactionType: StoredValueTransactionType;
}

export interface StoredValueAccountStatus {
    currentBalance?:      number;
    storedValueAccountId: StoredValueAccountId;
}

export interface TransactionStatusResponse {
    messageReference?:        MessageReference;
    repeatedMessageResponse?: RepeatedMessageResponse;
    response:                 Response;
}

export interface RepeatedMessageResponse {
    messageHeader:               MessageHeader;
    repeatedResponseMessageBody: RepeatedResponseMessageBody;
}

export interface RepeatedResponseMessageBody {
    cardAcquisitionResponse?: CardAcquisitionResponse;
    cardReaderApduResponse?:  CardReaderApduResponse;
    loyaltyResponse?:         LoyaltyResponse;
    paymentResponse?:         PaymentResponse;
    reversalResponse?:        ReversalResponse;
    storedValueResponse?:     StoredValueResponse;
}

export interface TransmitResponse {
    message?: any;
    response: Response;
}

export interface TerminalApiSecuredRequest {
    saleToPoiRequest?: SaleToPoiSecuredMessage;
}

export interface SaleToPoiSecuredMessage {
    messageHeader:   MessageHeader;
    nexoBlob:        string;
    securityTrailer: SecurityTrailer;
}

export interface SecurityTrailer {
    adyenCryptoVersion?: number;
    hmac?:               any;
    keyIdentifier?:      string;
    keyVersion?:         number;
    nonce?:              any;
}

export interface TerminalApiSecuredResponse {
    saleToPoiResponse: SaleToPoiSecuredMessage;
}

export interface NexoDerivedKey {
    cipherKey?: any;
    hmacKey?:   any;
    iv?:        any;
}

export interface SecurityKey {
    adyenCryptoVersion: number;
    keyIdentifier:      string;
    keyVersion:         number;
    passphrase:         string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toTerminalApiRequest(json: string): TerminalApiRequest {
        return cast(JSON.parse(json), r("TerminalApiRequest"));
    }

    public static terminalApiRequestToJson(value: TerminalApiRequest): string {
        return JSON.stringify(uncast(value, r("TerminalApiRequest")), null, 2);
    }

    public static toTerminalApiResponse(json: string): TerminalApiResponse {
        return cast(JSON.parse(json), r("TerminalApiResponse"));
    }

    public static terminalApiResponseToJson(value: TerminalApiResponse): string {
        return JSON.stringify(uncast(value, r("TerminalApiResponse")), null, 2);
    }

    public static toTerminalApiSecuredRequest(json: string): TerminalApiSecuredRequest {
        return cast(JSON.parse(json), r("TerminalApiSecuredRequest"));
    }

    public static terminalApiSecuredRequestToJson(value: TerminalApiSecuredRequest): string {
        return JSON.stringify(uncast(value, r("TerminalApiSecuredRequest")), null, 2);
    }

    public static toTerminalApiSecuredResponse(json: string): TerminalApiSecuredResponse {
        return cast(JSON.parse(json), r("TerminalApiSecuredResponse"));
    }

    public static terminalApiSecuredResponseToJson(value: TerminalApiSecuredResponse): string {
        return JSON.stringify(uncast(value, r("TerminalApiSecuredResponse")), null, 2);
    }

    public static toNexoDerivedKey(json: string): NexoDerivedKey {
        return cast(JSON.parse(json), r("NexoDerivedKey"));
    }

    public static nexoDerivedKeyToJson(value: NexoDerivedKey): string {
        return JSON.stringify(uncast(value, r("NexoDerivedKey")), null, 2);
    }

    public static toSaleToPoiSecuredMessage(json: string): SaleToPoiSecuredMessage {
        return cast(JSON.parse(json), r("SaleToPoiSecuredMessage"));
    }

    public static saleToPoiSecuredMessageToJson(value: SaleToPoiSecuredMessage): string {
        return JSON.stringify(uncast(value, r("SaleToPoiSecuredMessage")), null, 2);
    }

    public static toSecurityKey(json: string): SecurityKey {
        return cast(JSON.parse(json), r("SecurityKey"));
    }

    public static securityKeyToJson(value: SecurityKey): string {
        return JSON.stringify(uncast(value, r("SecurityKey")), null, 2);
    }

    public static toSecurityTrailer(json: string): SecurityTrailer {
        return cast(JSON.parse(json), r("SecurityTrailer"));
    }

    public static securityTrailerToJson(value: SecurityTrailer): string {
        return JSON.stringify(uncast(value, r("SecurityTrailer")), null, 2);
    }

    public static toSaleToPoiRequest(json: string): SaleToPoiRequest {
        return cast(JSON.parse(json), r("SaleToPoiRequest"));
    }

    public static saleToPoiRequestToJson(value: SaleToPoiRequest): string {
        return JSON.stringify(uncast(value, r("SaleToPoiRequest")), null, 2);
    }

    public static toSaleToPoiResponse(json: string): SaleToPoiResponse {
        return cast(JSON.parse(json), r("SaleToPoiResponse"));
    }

    public static saleToPoiResponseToJson(value: SaleToPoiResponse): string {
        return JSON.stringify(uncast(value, r("SaleToPoiResponse")), null, 2);
    }

    public static toMessageHeader(json: string): MessageHeader {
        return cast(JSON.parse(json), r("MessageHeader"));
    }

    public static messageHeaderToJson(value: MessageHeader): string {
        return JSON.stringify(uncast(value, r("MessageHeader")), null, 2);
    }

    public static toAbortRequest(json: string): AbortRequest {
        return cast(JSON.parse(json), r("AbortRequest"));
    }

    public static abortRequestToJson(value: AbortRequest): string {
        return JSON.stringify(uncast(value, r("AbortRequest")), null, 2);
    }

    public static toBalanceInquiryRequest(json: string): BalanceInquiryRequest {
        return cast(JSON.parse(json), r("BalanceInquiryRequest"));
    }

    public static balanceInquiryRequestToJson(value: BalanceInquiryRequest): string {
        return JSON.stringify(uncast(value, r("BalanceInquiryRequest")), null, 2);
    }

    public static toBatchRequest(json: string): BatchRequest {
        return cast(JSON.parse(json), r("BatchRequest"));
    }

    public static batchRequestToJson(value: BatchRequest): string {
        return JSON.stringify(uncast(value, r("BatchRequest")), null, 2);
    }

    public static toCardAcquisitionRequest(json: string): CardAcquisitionRequest {
        return cast(JSON.parse(json), r("CardAcquisitionRequest"));
    }

    public static cardAcquisitionRequestToJson(value: CardAcquisitionRequest): string {
        return JSON.stringify(uncast(value, r("CardAcquisitionRequest")), null, 2);
    }

    public static toAdminRequest(json: string): AdminRequest {
        return cast(JSON.parse(json), r("AdminRequest"));
    }

    public static adminRequestToJson(value: AdminRequest): string {
        return JSON.stringify(uncast(value, r("AdminRequest")), null, 2);
    }

    public static toDiagnosisRequest(json: string): DiagnosisRequest {
        return cast(JSON.parse(json), r("DiagnosisRequest"));
    }

    public static diagnosisRequestToJson(value: DiagnosisRequest): string {
        return JSON.stringify(uncast(value, r("DiagnosisRequest")), null, 2);
    }

    public static toDisplayRequest(json: string): DisplayRequest {
        return cast(JSON.parse(json), r("DisplayRequest"));
    }

    public static displayRequestToJson(value: DisplayRequest): string {
        return JSON.stringify(uncast(value, r("DisplayRequest")), null, 2);
    }

    public static toEnableServiceRequest(json: string): EnableServiceRequest {
        return cast(JSON.parse(json), r("EnableServiceRequest"));
    }

    public static enableServiceRequestToJson(value: EnableServiceRequest): string {
        return JSON.stringify(uncast(value, r("EnableServiceRequest")), null, 2);
    }

    public static toEventNotification(json: string): EventNotification {
        return cast(JSON.parse(json), r("EventNotification"));
    }

    public static eventNotificationToJson(value: EventNotification): string {
        return JSON.stringify(uncast(value, r("EventNotification")), null, 2);
    }

    public static toGetTotalsRequest(json: string): GetTotalsRequest {
        return cast(JSON.parse(json), r("GetTotalsRequest"));
    }

    public static getTotalsRequestToJson(value: GetTotalsRequest): string {
        return JSON.stringify(uncast(value, r("GetTotalsRequest")), null, 2);
    }

    public static toInputRequest(json: string): InputRequest {
        return cast(JSON.parse(json), r("InputRequest"));
    }

    public static inputRequestToJson(value: InputRequest): string {
        return JSON.stringify(uncast(value, r("InputRequest")), null, 2);
    }

    public static toInputUpdate(json: string): InputUpdate {
        return cast(JSON.parse(json), r("InputUpdate"));
    }

    public static inputUpdateToJson(value: InputUpdate): string {
        return JSON.stringify(uncast(value, r("InputUpdate")), null, 2);
    }

    public static toLoginRequest(json: string): LoginRequest {
        return cast(JSON.parse(json), r("LoginRequest"));
    }

    public static loginRequestToJson(value: LoginRequest): string {
        return JSON.stringify(uncast(value, r("LoginRequest")), null, 2);
    }

    public static toLogoutRequest(json: string): LogoutRequest {
        return cast(JSON.parse(json), r("LogoutRequest"));
    }

    public static logoutRequestToJson(value: LogoutRequest): string {
        return JSON.stringify(uncast(value, r("LogoutRequest")), null, 2);
    }

    public static toLoyaltyRequest(json: string): LoyaltyRequest {
        return cast(JSON.parse(json), r("LoyaltyRequest"));
    }

    public static loyaltyRequestToJson(value: LoyaltyRequest): string {
        return JSON.stringify(uncast(value, r("LoyaltyRequest")), null, 2);
    }

    public static toPaymentRequest(json: string): PaymentRequest {
        return cast(JSON.parse(json), r("PaymentRequest"));
    }

    public static paymentRequestToJson(value: PaymentRequest): string {
        return JSON.stringify(uncast(value, r("PaymentRequest")), null, 2);
    }

    public static toPinRequest(json: string): PinRequest {
        return cast(JSON.parse(json), r("PinRequest"));
    }

    public static pinRequestToJson(value: PinRequest): string {
        return JSON.stringify(uncast(value, r("PinRequest")), null, 2);
    }

    public static toPrintRequest(json: string): PrintRequest {
        return cast(JSON.parse(json), r("PrintRequest"));
    }

    public static printRequestToJson(value: PrintRequest): string {
        return JSON.stringify(uncast(value, r("PrintRequest")), null, 2);
    }

    public static toCardReaderInitRequest(json: string): CardReaderInitRequest {
        return cast(JSON.parse(json), r("CardReaderInitRequest"));
    }

    public static cardReaderInitRequestToJson(value: CardReaderInitRequest): string {
        return JSON.stringify(uncast(value, r("CardReaderInitRequest")), null, 2);
    }

    public static toCardReaderApduRequest(json: string): CardReaderApduRequest {
        return cast(JSON.parse(json), r("CardReaderApduRequest"));
    }

    public static cardReaderApduRequestToJson(value: CardReaderApduRequest): string {
        return JSON.stringify(uncast(value, r("CardReaderApduRequest")), null, 2);
    }

    public static toCardReaderPowerOffRequest(json: string): CardReaderPowerOffRequest {
        return cast(JSON.parse(json), r("CardReaderPowerOffRequest"));
    }

    public static cardReaderPowerOffRequestToJson(value: CardReaderPowerOffRequest): string {
        return JSON.stringify(uncast(value, r("CardReaderPowerOffRequest")), null, 2);
    }

    public static toReconciliationRequest(json: string): ReconciliationRequest {
        return cast(JSON.parse(json), r("ReconciliationRequest"));
    }

    public static reconciliationRequestToJson(value: ReconciliationRequest): string {
        return JSON.stringify(uncast(value, r("ReconciliationRequest")), null, 2);
    }

    public static toReversalRequest(json: string): ReversalRequest {
        return cast(JSON.parse(json), r("ReversalRequest"));
    }

    public static reversalRequestToJson(value: ReversalRequest): string {
        return JSON.stringify(uncast(value, r("ReversalRequest")), null, 2);
    }

    public static toSoundRequest(json: string): SoundRequest {
        return cast(JSON.parse(json), r("SoundRequest"));
    }

    public static soundRequestToJson(value: SoundRequest): string {
        return JSON.stringify(uncast(value, r("SoundRequest")), null, 2);
    }

    public static toStoredValueRequest(json: string): StoredValueRequest {
        return cast(JSON.parse(json), r("StoredValueRequest"));
    }

    public static storedValueRequestToJson(value: StoredValueRequest): string {
        return JSON.stringify(uncast(value, r("StoredValueRequest")), null, 2);
    }

    public static toTransactionStatusRequest(json: string): TransactionStatusRequest {
        return cast(JSON.parse(json), r("TransactionStatusRequest"));
    }

    public static transactionStatusRequestToJson(value: TransactionStatusRequest): string {
        return JSON.stringify(uncast(value, r("TransactionStatusRequest")), null, 2);
    }

    public static toTransmitRequest(json: string): TransmitRequest {
        return cast(JSON.parse(json), r("TransmitRequest"));
    }

    public static transmitRequestToJson(value: TransmitRequest): string {
        return JSON.stringify(uncast(value, r("TransmitRequest")), null, 2);
    }

    public static toContentInformation(json: string): ContentInformation {
        return cast(JSON.parse(json), r("ContentInformation"));
    }

    public static contentInformationToJson(value: ContentInformation): string {
        return JSON.stringify(uncast(value, r("ContentInformation")), null, 2);
    }

    public static toBalanceInquiryResponse(json: string): BalanceInquiryResponse {
        return cast(JSON.parse(json), r("BalanceInquiryResponse"));
    }

    public static balanceInquiryResponseToJson(value: BalanceInquiryResponse): string {
        return JSON.stringify(uncast(value, r("BalanceInquiryResponse")), null, 2);
    }

    public static toBatchResponse(json: string): BatchResponse {
        return cast(JSON.parse(json), r("BatchResponse"));
    }

    public static batchResponseToJson(value: BatchResponse): string {
        return JSON.stringify(uncast(value, r("BatchResponse")), null, 2);
    }

    public static toCardAcquisitionResponse(json: string): CardAcquisitionResponse {
        return cast(JSON.parse(json), r("CardAcquisitionResponse"));
    }

    public static cardAcquisitionResponseToJson(value: CardAcquisitionResponse): string {
        return JSON.stringify(uncast(value, r("CardAcquisitionResponse")), null, 2);
    }

    public static toAdminResponse(json: string): AdminResponse {
        return cast(JSON.parse(json), r("AdminResponse"));
    }

    public static adminResponseToJson(value: AdminResponse): string {
        return JSON.stringify(uncast(value, r("AdminResponse")), null, 2);
    }

    public static toDiagnosisResponse(json: string): DiagnosisResponse {
        return cast(JSON.parse(json), r("DiagnosisResponse"));
    }

    public static diagnosisResponseToJson(value: DiagnosisResponse): string {
        return JSON.stringify(uncast(value, r("DiagnosisResponse")), null, 2);
    }

    public static toDisplayResponse(json: string): DisplayResponse {
        return cast(JSON.parse(json), r("DisplayResponse"));
    }

    public static displayResponseToJson(value: DisplayResponse): string {
        return JSON.stringify(uncast(value, r("DisplayResponse")), null, 2);
    }

    public static toEnableServiceResponse(json: string): EnableServiceResponse {
        return cast(JSON.parse(json), r("EnableServiceResponse"));
    }

    public static enableServiceResponseToJson(value: EnableServiceResponse): string {
        return JSON.stringify(uncast(value, r("EnableServiceResponse")), null, 2);
    }

    public static toGetTotalsResponse(json: string): GetTotalsResponse {
        return cast(JSON.parse(json), r("GetTotalsResponse"));
    }

    public static getTotalsResponseToJson(value: GetTotalsResponse): string {
        return JSON.stringify(uncast(value, r("GetTotalsResponse")), null, 2);
    }

    public static toInputResponse(json: string): InputResponse {
        return cast(JSON.parse(json), r("InputResponse"));
    }

    public static inputResponseToJson(value: InputResponse): string {
        return JSON.stringify(uncast(value, r("InputResponse")), null, 2);
    }

    public static toLoginResponse(json: string): LoginResponse {
        return cast(JSON.parse(json), r("LoginResponse"));
    }

    public static loginResponseToJson(value: LoginResponse): string {
        return JSON.stringify(uncast(value, r("LoginResponse")), null, 2);
    }

    public static toLogoutResponse(json: string): LogoutResponse {
        return cast(JSON.parse(json), r("LogoutResponse"));
    }

    public static logoutResponseToJson(value: LogoutResponse): string {
        return JSON.stringify(uncast(value, r("LogoutResponse")), null, 2);
    }

    public static toLoyaltyResponse(json: string): LoyaltyResponse {
        return cast(JSON.parse(json), r("LoyaltyResponse"));
    }

    public static loyaltyResponseToJson(value: LoyaltyResponse): string {
        return JSON.stringify(uncast(value, r("LoyaltyResponse")), null, 2);
    }

    public static toPaymentResponse(json: string): PaymentResponse {
        return cast(JSON.parse(json), r("PaymentResponse"));
    }

    public static paymentResponseToJson(value: PaymentResponse): string {
        return JSON.stringify(uncast(value, r("PaymentResponse")), null, 2);
    }

    public static toPinResponse(json: string): PinResponse {
        return cast(JSON.parse(json), r("PinResponse"));
    }

    public static pinResponseToJson(value: PinResponse): string {
        return JSON.stringify(uncast(value, r("PinResponse")), null, 2);
    }

    public static toPrintResponse(json: string): PrintResponse {
        return cast(JSON.parse(json), r("PrintResponse"));
    }

    public static printResponseToJson(value: PrintResponse): string {
        return JSON.stringify(uncast(value, r("PrintResponse")), null, 2);
    }

    public static toCardReaderInitResponse(json: string): CardReaderInitResponse {
        return cast(JSON.parse(json), r("CardReaderInitResponse"));
    }

    public static cardReaderInitResponseToJson(value: CardReaderInitResponse): string {
        return JSON.stringify(uncast(value, r("CardReaderInitResponse")), null, 2);
    }

    public static toCardReaderApduResponse(json: string): CardReaderApduResponse {
        return cast(JSON.parse(json), r("CardReaderApduResponse"));
    }

    public static cardReaderApduResponseToJson(value: CardReaderApduResponse): string {
        return JSON.stringify(uncast(value, r("CardReaderApduResponse")), null, 2);
    }

    public static toCardReaderPowerOffResponse(json: string): CardReaderPowerOffResponse {
        return cast(JSON.parse(json), r("CardReaderPowerOffResponse"));
    }

    public static cardReaderPowerOffResponseToJson(value: CardReaderPowerOffResponse): string {
        return JSON.stringify(uncast(value, r("CardReaderPowerOffResponse")), null, 2);
    }

    public static toReconciliationResponse(json: string): ReconciliationResponse {
        return cast(JSON.parse(json), r("ReconciliationResponse"));
    }

    public static reconciliationResponseToJson(value: ReconciliationResponse): string {
        return JSON.stringify(uncast(value, r("ReconciliationResponse")), null, 2);
    }

    public static toReversalResponse(json: string): ReversalResponse {
        return cast(JSON.parse(json), r("ReversalResponse"));
    }

    public static reversalResponseToJson(value: ReversalResponse): string {
        return JSON.stringify(uncast(value, r("ReversalResponse")), null, 2);
    }

    public static toSoundResponse(json: string): SoundResponse {
        return cast(JSON.parse(json), r("SoundResponse"));
    }

    public static soundResponseToJson(value: SoundResponse): string {
        return JSON.stringify(uncast(value, r("SoundResponse")), null, 2);
    }

    public static toStoredValueResponse(json: string): StoredValueResponse {
        return cast(JSON.parse(json), r("StoredValueResponse"));
    }

    public static storedValueResponseToJson(value: StoredValueResponse): string {
        return JSON.stringify(uncast(value, r("StoredValueResponse")), null, 2);
    }

    public static toTransactionStatusResponse(json: string): TransactionStatusResponse {
        return cast(JSON.parse(json), r("TransactionStatusResponse"));
    }

    public static transactionStatusResponseToJson(value: TransactionStatusResponse): string {
        return JSON.stringify(uncast(value, r("TransactionStatusResponse")), null, 2);
    }

    public static toTransmitResponse(json: string): TransmitResponse {
        return cast(JSON.parse(json), r("TransmitResponse"));
    }

    public static transmitResponseToJson(value: TransmitResponse): string {
        return JSON.stringify(uncast(value, r("TransmitResponse")), null, 2);
    }

    public static toMessageReference(json: string): MessageReference {
        return cast(JSON.parse(json), r("MessageReference"));
    }

    public static messageReferenceToJson(value: MessageReference): string {
        return JSON.stringify(uncast(value, r("MessageReference")), null, 2);
    }

    public static toDisplayOutput(json: string): DisplayOutput {
        return cast(JSON.parse(json), r("DisplayOutput"));
    }

    public static displayOutputToJson(value: DisplayOutput): string {
        return JSON.stringify(uncast(value, r("DisplayOutput")), null, 2);
    }

    public static toPaymentAccountReq(json: string): PaymentAccountReq {
        return cast(JSON.parse(json), r("PaymentAccountReq"));
    }

    public static paymentAccountReqToJson(value: PaymentAccountReq): string {
        return JSON.stringify(uncast(value, r("PaymentAccountReq")), null, 2);
    }

    public static toLoyaltyAccountReq(json: string): LoyaltyAccountReq {
        return cast(JSON.parse(json), r("LoyaltyAccountReq"));
    }

    public static loyaltyAccountReqToJson(value: LoyaltyAccountReq): string {
        return JSON.stringify(uncast(value, r("LoyaltyAccountReq")), null, 2);
    }

    public static toTransactionToPerform(json: string): TransactionToPerform {
        return cast(JSON.parse(json), r("TransactionToPerform"));
    }

    public static transactionToPerformToJson(value: TransactionToPerform): string {
        return JSON.stringify(uncast(value, r("TransactionToPerform")), null, 2);
    }

    public static toSaleData(json: string): SaleData {
        return cast(JSON.parse(json), r("SaleData"));
    }

    public static saleDataToJson(value: SaleData): string {
        return JSON.stringify(uncast(value, r("SaleData")), null, 2);
    }

    public static toCardAcquisitionTransaction(json: string): CardAcquisitionTransaction {
        return cast(JSON.parse(json), r("CardAcquisitionTransaction"));
    }

    public static cardAcquisitionTransactionToJson(value: CardAcquisitionTransaction): string {
        return JSON.stringify(uncast(value, r("CardAcquisitionTransaction")), null, 2);
    }

    public static toXmlGregorianCalendar(json: string): { [key: string]: any } {
        return cast(JSON.parse(json), m("any"));
    }

    public static xmlGregorianCalendarToJson(value: { [key: string]: any }): string {
        return JSON.stringify(uncast(value, m("any")), null, 2);
    }

    public static toTotalFilter(json: string): TotalFilter {
        return cast(JSON.parse(json), r("TotalFilter"));
    }

    public static totalFilterToJson(value: TotalFilter): string {
        return JSON.stringify(uncast(value, r("TotalFilter")), null, 2);
    }

    public static toInputData(json: string): InputData {
        return cast(JSON.parse(json), r("InputData"));
    }

    public static inputDataToJson(value: InputData): string {
        return JSON.stringify(uncast(value, r("InputData")), null, 2);
    }

    public static toOutputContent(json: string): OutputContent {
        return cast(JSON.parse(json), r("OutputContent"));
    }

    public static outputContentToJson(value: OutputContent): string {
        return JSON.stringify(uncast(value, r("OutputContent")), null, 2);
    }

    public static toMenuEntry(json: string): MenuEntry {
        return cast(JSON.parse(json), r("MenuEntry"));
    }

    public static menuEntryToJson(value: MenuEntry): string {
        return JSON.stringify(uncast(value, r("MenuEntry")), null, 2);
    }

    public static toSaleSoftware(json: string): SaleSoftware {
        return cast(JSON.parse(json), r("SaleSoftware"));
    }

    public static saleSoftwareToJson(value: SaleSoftware): string {
        return JSON.stringify(uncast(value, r("SaleSoftware")), null, 2);
    }

    public static toSaleTerminalData(json: string): SaleTerminalData {
        return cast(JSON.parse(json), r("SaleTerminalData"));
    }

    public static saleTerminalDataToJson(value: SaleTerminalData): string {
        return JSON.stringify(uncast(value, r("SaleTerminalData")), null, 2);
    }

    public static toLoyaltyTransaction(json: string): LoyaltyTransaction {
        return cast(JSON.parse(json), r("LoyaltyTransaction"));
    }

    public static loyaltyTransactionToJson(value: LoyaltyTransaction): string {
        return JSON.stringify(uncast(value, r("LoyaltyTransaction")), null, 2);
    }

    public static toLoyaltyData(json: string): LoyaltyData {
        return cast(JSON.parse(json), r("LoyaltyData"));
    }

    public static loyaltyDataToJson(value: LoyaltyData): string {
        return JSON.stringify(uncast(value, r("LoyaltyData")), null, 2);
    }

    public static toPaymentTransaction(json: string): PaymentTransaction {
        return cast(JSON.parse(json), r("PaymentTransaction"));
    }

    public static paymentTransactionToJson(value: PaymentTransaction): string {
        return JSON.stringify(uncast(value, r("PaymentTransaction")), null, 2);
    }

    public static toPaymentData(json: string): PaymentData {
        return cast(JSON.parse(json), r("PaymentData"));
    }

    public static paymentDataToJson(value: PaymentData): string {
        return JSON.stringify(uncast(value, r("PaymentData")), null, 2);
    }

    public static toCardholderPin(json: string): CardholderPin {
        return cast(JSON.parse(json), r("CardholderPin"));
    }

    public static cardholderPinToJson(value: CardholderPin): string {
        return JSON.stringify(uncast(value, r("CardholderPin")), null, 2);
    }

    public static toPrintOutput(json: string): PrintOutput {
        return cast(JSON.parse(json), r("PrintOutput"));
    }

    public static printOutputToJson(value: PrintOutput): string {
        return JSON.stringify(uncast(value, r("PrintOutput")), null, 2);
    }

    public static toOriginalPoiTransaction(json: string): OriginalPoiTransaction {
        return cast(JSON.parse(json), r("OriginalPoiTransaction"));
    }

    public static originalPoiTransactionToJson(value: OriginalPoiTransaction): string {
        return JSON.stringify(uncast(value, r("OriginalPoiTransaction")), null, 2);
    }

    public static toCustomerOrder(json: string): CustomerOrder {
        return cast(JSON.parse(json), r("CustomerOrder"));
    }

    public static customerOrderToJson(value: CustomerOrder): string {
        return JSON.stringify(uncast(value, r("CustomerOrder")), null, 2);
    }

    public static toSoundContent(json: string): SoundContent {
        return cast(JSON.parse(json), r("SoundContent"));
    }

    public static soundContentToJson(value: SoundContent): string {
        return JSON.stringify(uncast(value, r("SoundContent")), null, 2);
    }

    public static toStoredValueData(json: string): StoredValueData {
        return cast(JSON.parse(json), r("StoredValueData"));
    }

    public static storedValueDataToJson(value: StoredValueData): string {
        return JSON.stringify(uncast(value, r("StoredValueData")), null, 2);
    }

    public static toEnvelopedData(json: string): EnvelopedData {
        return cast(JSON.parse(json), r("EnvelopedData"));
    }

    public static envelopedDataToJson(value: EnvelopedData): string {
        return JSON.stringify(uncast(value, r("EnvelopedData")), null, 2);
    }

    public static toAuthenticatedData(json: string): AuthenticatedData {
        return cast(JSON.parse(json), r("AuthenticatedData"));
    }

    public static authenticatedDataToJson(value: AuthenticatedData): string {
        return JSON.stringify(uncast(value, r("AuthenticatedData")), null, 2);
    }

    public static toSignedData(json: string): SignedData {
        return cast(JSON.parse(json), r("SignedData"));
    }

    public static signedDataToJson(value: SignedData): string {
        return JSON.stringify(uncast(value, r("SignedData")), null, 2);
    }

    public static toDigestedData(json: string): DigestedData {
        return cast(JSON.parse(json), r("DigestedData"));
    }

    public static digestedDataToJson(value: DigestedData): string {
        return JSON.stringify(uncast(value, r("DigestedData")), null, 2);
    }

    public static toNamedKeyEncryptedData(json: string): NamedKeyEncryptedData {
        return cast(JSON.parse(json), r("NamedKeyEncryptedData"));
    }

    public static namedKeyEncryptedDataToJson(value: NamedKeyEncryptedData): string {
        return JSON.stringify(uncast(value, r("NamedKeyEncryptedData")), null, 2);
    }

    public static toResponse(json: string): Response {
        return cast(JSON.parse(json), r("Response"));
    }

    public static responseToJson(value: Response): string {
        return JSON.stringify(uncast(value, r("Response")), null, 2);
    }

    public static toPaymentAccountStatus(json: string): PaymentAccountStatus {
        return cast(JSON.parse(json), r("PaymentAccountStatus"));
    }

    public static paymentAccountStatusToJson(value: PaymentAccountStatus): string {
        return JSON.stringify(uncast(value, r("PaymentAccountStatus")), null, 2);
    }

    public static toLoyaltyAccountStatus(json: string): LoyaltyAccountStatus {
        return cast(JSON.parse(json), r("LoyaltyAccountStatus"));
    }

    public static loyaltyAccountStatusToJson(value: LoyaltyAccountStatus): string {
        return JSON.stringify(uncast(value, r("LoyaltyAccountStatus")), null, 2);
    }

    public static toPerformedTransaction(json: string): PerformedTransaction {
        return cast(JSON.parse(json), r("PerformedTransaction"));
    }

    public static performedTransactionToJson(value: PerformedTransaction): string {
        return JSON.stringify(uncast(value, r("PerformedTransaction")), null, 2);
    }

    public static toPoiData(json: string): PoiData {
        return cast(JSON.parse(json), r("PoiData"));
    }

    public static poiDataToJson(value: PoiData): string {
        return JSON.stringify(uncast(value, r("PoiData")), null, 2);
    }

    public static toPaymentInstrumentData(json: string): PaymentInstrumentData {
        return cast(JSON.parse(json), r("PaymentInstrumentData"));
    }

    public static paymentInstrumentDataToJson(value: PaymentInstrumentData): string {
        return JSON.stringify(uncast(value, r("PaymentInstrumentData")), null, 2);
    }

    public static toLoyaltyAccount(json: string): LoyaltyAccount {
        return cast(JSON.parse(json), r("LoyaltyAccount"));
    }

    public static loyaltyAccountToJson(value: LoyaltyAccount): string {
        return JSON.stringify(uncast(value, r("LoyaltyAccount")), null, 2);
    }

    public static toPoiStatus(json: string): PoiStatus {
        return cast(JSON.parse(json), r("PoiStatus"));
    }

    public static poiStatusToJson(value: PoiStatus): string {
        return JSON.stringify(uncast(value, r("PoiStatus")), null, 2);
    }

    public static toHostStatus(json: string): HostStatus {
        return cast(JSON.parse(json), r("HostStatus"));
    }

    public static hostStatusToJson(value: HostStatus): string {
        return JSON.stringify(uncast(value, r("HostStatus")), null, 2);
    }

    public static toOutputResult(json: string): OutputResult {
        return cast(JSON.parse(json), r("OutputResult"));
    }

    public static outputResultToJson(value: OutputResult): string {
        return JSON.stringify(uncast(value, r("OutputResult")), null, 2);
    }

    public static toTransactionTotals(json: string): TransactionTotals {
        return cast(JSON.parse(json), r("TransactionTotals"));
    }

    public static transactionTotalsToJson(value: TransactionTotals): string {
        return JSON.stringify(uncast(value, r("TransactionTotals")), null, 2);
    }

    public static toInputResult(json: string): InputResult {
        return cast(JSON.parse(json), r("InputResult"));
    }

    public static inputResultToJson(value: InputResult): string {
        return JSON.stringify(uncast(value, r("InputResult")), null, 2);
    }

    public static toPoiSystemData(json: string): PoiSystemData {
        return cast(JSON.parse(json), r("PoiSystemData"));
    }

    public static poiSystemDataToJson(value: PoiSystemData): string {
        return JSON.stringify(uncast(value, r("PoiSystemData")), null, 2);
    }

    public static toLoyaltyResult(json: string): LoyaltyResult {
        return cast(JSON.parse(json), r("LoyaltyResult"));
    }

    public static loyaltyResultToJson(value: LoyaltyResult): string {
        return JSON.stringify(uncast(value, r("LoyaltyResult")), null, 2);
    }

    public static toPaymentReceipt(json: string): PaymentReceipt {
        return cast(JSON.parse(json), r("PaymentReceipt"));
    }

    public static paymentReceiptToJson(value: PaymentReceipt): string {
        return JSON.stringify(uncast(value, r("PaymentReceipt")), null, 2);
    }

    public static toPaymentResult(json: string): PaymentResult {
        return cast(JSON.parse(json), r("PaymentResult"));
    }

    public static paymentResultToJson(value: PaymentResult): string {
        return JSON.stringify(uncast(value, r("PaymentResult")), null, 2);
    }

    public static toTrackData(json: string): TrackData {
        return cast(JSON.parse(json), r("TrackData"));
    }

    public static trackDataToJson(value: TrackData): string {
        return JSON.stringify(uncast(value, r("TrackData")), null, 2);
    }

    public static toIccResetData(json: string): IccResetData {
        return cast(JSON.parse(json), r("IccResetData"));
    }

    public static iccResetDataToJson(value: IccResetData): string {
        return JSON.stringify(uncast(value, r("IccResetData")), null, 2);
    }

    public static toStoredValueResult(json: string): StoredValueResult {
        return cast(JSON.parse(json), r("StoredValueResult"));
    }

    public static storedValueResultToJson(value: StoredValueResult): string {
        return JSON.stringify(uncast(value, r("StoredValueResult")), null, 2);
    }

    public static toRepeatedMessageResponse(json: string): RepeatedMessageResponse {
        return cast(JSON.parse(json), r("RepeatedMessageResponse"));
    }

    public static repeatedMessageResponseToJson(value: RepeatedMessageResponse): string {
        return JSON.stringify(uncast(value, r("RepeatedMessageResponse")), null, 2);
    }

    public static toTransactionIdentification(json: string): TransactionIdentification {
        return cast(JSON.parse(json), r("TransactionIdentification"));
    }

    public static transactionIdentificationToJson(value: TransactionIdentification): string {
        return JSON.stringify(uncast(value, r("TransactionIdentification")), null, 2);
    }

    public static toLoyaltyAccountId(json: string): LoyaltyAccountId {
        return cast(JSON.parse(json), r("LoyaltyAccountId"));
    }

    public static loyaltyAccountIdToJson(value: LoyaltyAccountId): string {
        return JSON.stringify(uncast(value, r("LoyaltyAccountId")), null, 2);
    }

    public static toSponsoredMerchant(json: string): SponsoredMerchant {
        return cast(JSON.parse(json), r("SponsoredMerchant"));
    }

    public static sponsoredMerchantToJson(value: SponsoredMerchant): string {
        return JSON.stringify(uncast(value, r("SponsoredMerchant")), null, 2);
    }

    public static toSaleToIssuerData(json: string): SaleToIssuerData {
        return cast(JSON.parse(json), r("SaleToIssuerData"));
    }

    public static saleToIssuerDataToJson(value: SaleToIssuerData): string {
        return JSON.stringify(uncast(value, r("SaleToIssuerData")), null, 2);
    }

    public static toCloneable(json: string): { [key: string]: any } {
        return cast(JSON.parse(json), m("any"));
    }

    public static cloneableToJson(value: { [key: string]: any }): string {
        return JSON.stringify(uncast(value, m("any")), null, 2);
    }

    public static toPredefinedContent(json: string): PredefinedContent {
        return cast(JSON.parse(json), r("PredefinedContent"));
    }

    public static predefinedContentToJson(value: PredefinedContent): string {
        return JSON.stringify(uncast(value, r("PredefinedContent")), null, 2);
    }

    public static toOutputText(json: string): OutputText {
        return cast(JSON.parse(json), r("OutputText"));
    }

    public static outputTextToJson(value: OutputText): string {
        return JSON.stringify(uncast(value, r("OutputText")), null, 2);
    }

    public static toOutputBarcode(json: string): OutputBarcode {
        return cast(JSON.parse(json), r("OutputBarcode"));
    }

    public static outputBarcodeToJson(value: OutputBarcode): string {
        return JSON.stringify(uncast(value, r("OutputBarcode")), null, 2);
    }

    public static toSaleProfile(json: string): SaleProfile {
        return cast(JSON.parse(json), r("SaleProfile"));
    }

    public static saleProfileToJson(value: SaleProfile): string {
        return JSON.stringify(uncast(value, r("SaleProfile")), null, 2);
    }

    public static toTransactionConditions(json: string): TransactionConditions {
        return cast(JSON.parse(json), r("TransactionConditions"));
    }

    public static transactionConditionsToJson(value: TransactionConditions): string {
        return JSON.stringify(uncast(value, r("TransactionConditions")), null, 2);
    }

    public static toSaleItem(json: string): SaleItem {
        return cast(JSON.parse(json), r("SaleItem"));
    }

    public static saleItemToJson(value: SaleItem): string {
        return JSON.stringify(uncast(value, r("SaleItem")), null, 2);
    }

    public static toLoyaltyAmount(json: string): LoyaltyAmount {
        return cast(JSON.parse(json), r("LoyaltyAmount"));
    }

    public static loyaltyAmountToJson(value: LoyaltyAmount): string {
        return JSON.stringify(uncast(value, r("LoyaltyAmount")), null, 2);
    }

    public static toAmountsReq(json: string): AmountsReq {
        return cast(JSON.parse(json), r("AmountsReq"));
    }

    public static amountsReqToJson(value: AmountsReq): string {
        return JSON.stringify(uncast(value, r("AmountsReq")), null, 2);
    }

    public static toInstalment(json: string): Instalment {
        return cast(JSON.parse(json), r("Instalment"));
    }

    public static instalmentToJson(value: Instalment): string {
        return JSON.stringify(uncast(value, r("Instalment")), null, 2);
    }

    public static toStoredValueAccountId(json: string): StoredValueAccountId {
        return cast(JSON.parse(json), r("StoredValueAccountId"));
    }

    public static storedValueAccountIdToJson(value: StoredValueAccountId): string {
        return JSON.stringify(uncast(value, r("StoredValueAccountId")), null, 2);
    }

    public static toEncryptedContent(json: string): EncryptedContent {
        return cast(JSON.parse(json), r("EncryptedContent"));
    }

    public static encryptedContentToJson(value: EncryptedContent): string {
        return JSON.stringify(uncast(value, r("EncryptedContent")), null, 2);
    }

    public static toAlgorithmIdentifier(json: string): AlgorithmIdentifier {
        return cast(JSON.parse(json), r("AlgorithmIdentifier"));
    }

    public static algorithmIdentifierToJson(value: AlgorithmIdentifier): string {
        return JSON.stringify(uncast(value, r("AlgorithmIdentifier")), null, 2);
    }

    public static toEncapsulatedContent(json: string): EncapsulatedContent {
        return cast(JSON.parse(json), r("EncapsulatedContent"));
    }

    public static encapsulatedContentToJson(value: EncapsulatedContent): string {
        return JSON.stringify(uncast(value, r("EncapsulatedContent")), null, 2);
    }

    public static toSigner(json: string): Signer {
        return cast(JSON.parse(json), r("Signer"));
    }

    public static signerToJson(value: Signer): string {
        return JSON.stringify(uncast(value, r("Signer")), null, 2);
    }

    public static toPaymentAcquirerData(json: string): PaymentAcquirerData {
        return cast(JSON.parse(json), r("PaymentAcquirerData"));
    }

    public static paymentAcquirerDataToJson(value: PaymentAcquirerData): string {
        return JSON.stringify(uncast(value, r("PaymentAcquirerData")), null, 2);
    }

    public static toCardData(json: string): CardData {
        return cast(JSON.parse(json), r("CardData"));
    }

    public static cardDataToJson(value: CardData): string {
        return JSON.stringify(uncast(value, r("CardData")), null, 2);
    }

    public static toCheckData(json: string): CheckData {
        return cast(JSON.parse(json), r("CheckData"));
    }

    public static checkDataToJson(value: CheckData): string {
        return JSON.stringify(uncast(value, r("CheckData")), null, 2);
    }

    public static toMobileData(json: string): MobileData {
        return cast(JSON.parse(json), r("MobileData"));
    }

    public static mobileDataToJson(value: MobileData): string {
        return JSON.stringify(uncast(value, r("MobileData")), null, 2);
    }

    public static toCashHandlingDevice(json: string): CashHandlingDevice {
        return cast(JSON.parse(json), r("CashHandlingDevice"));
    }

    public static cashHandlingDeviceToJson(value: CashHandlingDevice): string {
        return JSON.stringify(uncast(value, r("CashHandlingDevice")), null, 2);
    }

    public static toPaymentTotals(json: string): PaymentTotals {
        return cast(JSON.parse(json), r("PaymentTotals"));
    }

    public static paymentTotalsToJson(value: PaymentTotals): string {
        return JSON.stringify(uncast(value, r("PaymentTotals")), null, 2);
    }

    public static toLoyaltyTotals(json: string): LoyaltyTotals {
        return cast(JSON.parse(json), r("LoyaltyTotals"));
    }

    public static loyaltyTotalsToJson(value: LoyaltyTotals): string {
        return JSON.stringify(uncast(value, r("LoyaltyTotals")), null, 2);
    }

    public static toInput(json: string): Input {
        return cast(JSON.parse(json), r("Input"));
    }

    public static inputToJson(value: Input): string {
        return JSON.stringify(uncast(value, r("Input")), null, 2);
    }

    public static toPoiSoftware(json: string): PoiSoftware {
        return cast(JSON.parse(json), r("PoiSoftware"));
    }

    public static poiSoftwareToJson(value: PoiSoftware): string {
        return JSON.stringify(uncast(value, r("PoiSoftware")), null, 2);
    }

    public static toPoiTerminalData(json: string): PoiTerminalData {
        return cast(JSON.parse(json), r("PoiTerminalData"));
    }

    public static poiTerminalDataToJson(value: PoiTerminalData): string {
        return JSON.stringify(uncast(value, r("PoiTerminalData")), null, 2);
    }

    public static toLoyaltyAcquirerData(json: string): LoyaltyAcquirerData {
        return cast(JSON.parse(json), r("LoyaltyAcquirerData"));
    }

    public static loyaltyAcquirerDataToJson(value: LoyaltyAcquirerData): string {
        return JSON.stringify(uncast(value, r("LoyaltyAcquirerData")), null, 2);
    }

    public static toRebates(json: string): Rebates {
        return cast(JSON.parse(json), r("Rebates"));
    }

    public static rebatesToJson(value: Rebates): string {
        return JSON.stringify(uncast(value, r("Rebates")), null, 2);
    }

    public static toAmountsResp(json: string): AmountsResp {
        return cast(JSON.parse(json), r("AmountsResp"));
    }

    public static amountsRespToJson(value: AmountsResp): string {
        return JSON.stringify(uncast(value, r("AmountsResp")), null, 2);
    }

    public static toCurrencyConversion(json: string): CurrencyConversion {
        return cast(JSON.parse(json), r("CurrencyConversion"));
    }

    public static currencyConversionToJson(value: CurrencyConversion): string {
        return JSON.stringify(uncast(value, r("CurrencyConversion")), null, 2);
    }

    public static toCapturedSignature(json: string): CapturedSignature {
        return cast(JSON.parse(json), r("CapturedSignature"));
    }

    public static capturedSignatureToJson(value: CapturedSignature): string {
        return JSON.stringify(uncast(value, r("CapturedSignature")), null, 2);
    }

    public static toStoredValueAccountStatus(json: string): StoredValueAccountStatus {
        return cast(JSON.parse(json), r("StoredValueAccountStatus"));
    }

    public static storedValueAccountStatusToJson(value: StoredValueAccountStatus): string {
        return JSON.stringify(uncast(value, r("StoredValueAccountStatus")), null, 2);
    }

    public static toRepeatedResponseMessageBody(json: string): RepeatedResponseMessageBody {
        return cast(JSON.parse(json), r("RepeatedResponseMessageBody"));
    }

    public static repeatedResponseMessageBodyToJson(value: RepeatedResponseMessageBody): string {
        return JSON.stringify(uncast(value, r("RepeatedResponseMessageBody")), null, 2);
    }

    public static toParameter(json: string): Parameter {
        return cast(JSON.parse(json), r("Parameter"));
    }

    public static parameterToJson(value: Parameter): string {
        return JSON.stringify(uncast(value, r("Parameter")), null, 2);
    }

    public static toSignerIdentifier(json: string): SignerIdentifier {
        return cast(JSON.parse(json), r("SignerIdentifier"));
    }

    public static signerIdentifierToJson(value: SignerIdentifier): string {
        return JSON.stringify(uncast(value, r("SignerIdentifier")), null, 2);
    }

    public static toSensitiveCardData(json: string): SensitiveCardData {
        return cast(JSON.parse(json), r("SensitiveCardData"));
    }

    public static sensitiveCardDataToJson(value: SensitiveCardData): string {
        return JSON.stringify(uncast(value, r("SensitiveCardData")), null, 2);
    }

    public static toAllowedProduct(json: string): AllowedProduct {
        return cast(JSON.parse(json), r("AllowedProduct"));
    }

    public static allowedProductToJson(value: AllowedProduct): string {
        return JSON.stringify(uncast(value, r("AllowedProduct")), null, 2);
    }

    public static toPaymentToken(json: string): PaymentToken {
        return cast(JSON.parse(json), r("PaymentToken"));
    }

    public static paymentTokenToJson(value: PaymentToken): string {
        return JSON.stringify(uncast(value, r("PaymentToken")), null, 2);
    }

    public static toGeolocation(json: string): Geolocation {
        return cast(JSON.parse(json), r("Geolocation"));
    }

    public static geolocationToJson(value: Geolocation): string {
        return JSON.stringify(uncast(value, r("Geolocation")), null, 2);
    }

    public static toSensitiveMobileData(json: string): SensitiveMobileData {
        return cast(JSON.parse(json), r("SensitiveMobileData"));
    }

    public static sensitiveMobileDataToJson(value: SensitiveMobileData): string {
        return JSON.stringify(uncast(value, r("SensitiveMobileData")), null, 2);
    }

    public static toCoinsOrBills(json: string): CoinsOrBills {
        return cast(JSON.parse(json), r("CoinsOrBills"));
    }

    public static coinsOrBillsToJson(value: CoinsOrBills): string {
        return JSON.stringify(uncast(value, r("CoinsOrBills")), null, 2);
    }

    public static toPoiProfile(json: string): PoiProfile {
        return cast(JSON.parse(json), r("PoiProfile"));
    }

    public static poiProfileToJson(value: PoiProfile): string {
        return JSON.stringify(uncast(value, r("PoiProfile")), null, 2);
    }

    public static toSaleItemRebate(json: string): SaleItemRebate {
        return cast(JSON.parse(json), r("SaleItemRebate"));
    }

    public static saleItemRebateToJson(value: SaleItemRebate): string {
        return JSON.stringify(uncast(value, r("SaleItemRebate")), null, 2);
    }

    public static toAmount(json: string): Amount {
        return cast(JSON.parse(json), r("Amount"));
    }

    public static amountToJson(value: Amount): string {
        return JSON.stringify(uncast(value, r("Amount")), null, 2);
    }

    public static toAreaSize(json: string): AreaSize {
        return cast(JSON.parse(json), r("AreaSize"));
    }

    public static areaSizeToJson(value: AreaSize): string {
        return JSON.stringify(uncast(value, r("AreaSize")), null, 2);
    }

    public static toSignaturePoint(json: string): SignaturePoint {
        return cast(JSON.parse(json), r("SignaturePoint"));
    }

    public static signaturePointToJson(value: SignaturePoint): string {
        return JSON.stringify(uncast(value, r("SignaturePoint")), null, 2);
    }

    public static toIssuerAndSerialNumber(json: string): IssuerAndSerialNumber {
        return cast(JSON.parse(json), r("IssuerAndSerialNumber"));
    }

    public static issuerAndSerialNumberToJson(value: IssuerAndSerialNumber): string {
        return JSON.stringify(uncast(value, r("IssuerAndSerialNumber")), null, 2);
    }

    public static toGeographicCoordinates(json: string): GeographicCoordinates {
        return cast(JSON.parse(json), r("GeographicCoordinates"));
    }

    public static geographicCoordinatesToJson(value: GeographicCoordinates): string {
        return JSON.stringify(uncast(value, r("GeographicCoordinates")), null, 2);
    }

    public static toUtmCoordinates(json: string): UtmCoordinates {
        return cast(JSON.parse(json), r("UtmCoordinates"));
    }

    public static utmCoordinatesToJson(value: UtmCoordinates): string {
        return JSON.stringify(uncast(value, r("UtmCoordinates")), null, 2);
    }

    public static toIssuer(json: string): Issuer {
        return cast(JSON.parse(json), r("Issuer"));
    }

    public static issuerToJson(value: Issuer): string {
        return JSON.stringify(uncast(value, r("Issuer")), null, 2);
    }

    public static toRelativeDistinguishedName(json: string): RelativeDistinguishedName {
        return cast(JSON.parse(json), r("RelativeDistinguishedName"));
    }

    public static relativeDistinguishedNameToJson(value: RelativeDistinguishedName): string {
        return JSON.stringify(uncast(value, r("RelativeDistinguishedName")), null, 2);
    }

    public static toMessageClassType(json: string): MessageClassType {
        return cast(JSON.parse(json), r("MessageClassType"));
    }

    public static messageClassTypeToJson(value: MessageClassType): string {
        return JSON.stringify(uncast(value, r("MessageClassType")), null, 2);
    }

    public static toMessageCategoryType(json: string): MessageCategoryType {
        return cast(JSON.parse(json), r("MessageCategoryType"));
    }

    public static messageCategoryTypeToJson(value: MessageCategoryType): string {
        return JSON.stringify(uncast(value, r("MessageCategoryType")), null, 2);
    }

    public static toMessageType(json: string): MessageType {
        return cast(JSON.parse(json), r("MessageType"));
    }

    public static messageTypeToJson(value: MessageType): string {
        return JSON.stringify(uncast(value, r("MessageType")), null, 2);
    }

    public static toServicesEnabledType(json: string): ServicesEnabledType {
        return cast(JSON.parse(json), r("ServicesEnabledType"));
    }

    public static servicesEnabledTypeToJson(value: ServicesEnabledType): string {
        return JSON.stringify(uncast(value, r("ServicesEnabledType")), null, 2);
    }

    public static toTransactionActionType(json: string): TransactionActionType {
        return cast(JSON.parse(json), r("TransactionActionType"));
    }

    public static transactionActionTypeToJson(value: TransactionActionType): string {
        return JSON.stringify(uncast(value, r("TransactionActionType")), null, 2);
    }

    public static toEventToNotifyType(json: string): EventToNotifyType {
        return cast(JSON.parse(json), r("EventToNotifyType"));
    }

    public static eventToNotifyTypeToJson(value: EventToNotifyType): string {
        return JSON.stringify(uncast(value, r("EventToNotifyType")), null, 2);
    }

    public static toTotalDetailsType(json: string): TotalDetailsType {
        return cast(JSON.parse(json), r("TotalDetailsType"));
    }

    public static totalDetailsTypeToJson(value: TotalDetailsType): string {
        return JSON.stringify(uncast(value, r("TotalDetailsType")), null, 2);
    }

    public static toTokenRequestedType(json: string): TokenRequestedType {
        return cast(JSON.parse(json), r("TokenRequestedType"));
    }

    public static tokenRequestedTypeToJson(value: TokenRequestedType): string {
        return JSON.stringify(uncast(value, r("TokenRequestedType")), null, 2);
    }

    public static toCustomerOrderReqType(json: string): CustomerOrderReqType {
        return cast(JSON.parse(json), r("CustomerOrderReqType"));
    }

    public static customerOrderReqTypeToJson(value: CustomerOrderReqType): string {
        return JSON.stringify(uncast(value, r("CustomerOrderReqType")), null, 2);
    }

    public static toPinRequestType(json: string): PinRequestType {
        return cast(JSON.parse(json), r("PinRequestType"));
    }

    public static pinRequestTypeToJson(value: PinRequestType): string {
        return JSON.stringify(uncast(value, r("PinRequestType")), null, 2);
    }

    public static toPinFormatType(json: string): PinFormatType {
        return cast(JSON.parse(json), r("PinFormatType"));
    }

    public static pinFormatTypeToJson(value: PinFormatType): string {
        return JSON.stringify(uncast(value, r("PinFormatType")), null, 2);
    }

    public static toForceEntryModeType(json: string): ForceEntryModeType {
        return cast(JSON.parse(json), r("ForceEntryModeType"));
    }

    public static forceEntryModeTypeToJson(value: ForceEntryModeType): string {
        return JSON.stringify(uncast(value, r("ForceEntryModeType")), null, 2);
    }

    public static toReconciliationType(json: string): ReconciliationType {
        return cast(JSON.parse(json), r("ReconciliationType"));
    }

    public static reconciliationTypeToJson(value: ReconciliationType): string {
        return JSON.stringify(uncast(value, r("ReconciliationType")), null, 2);
    }

    public static toReversalReasonType(json: string): ReversalReasonType {
        return cast(JSON.parse(json), r("ReversalReasonType"));
    }

    public static reversalReasonTypeToJson(value: ReversalReasonType): string {
        return JSON.stringify(uncast(value, r("ReversalReasonType")), null, 2);
    }

    public static toResponseModeType(json: string): ResponseModeType {
        return cast(JSON.parse(json), r("ResponseModeType"));
    }

    public static responseModeTypeToJson(value: ResponseModeType): string {
        return JSON.stringify(uncast(value, r("ResponseModeType")), null, 2);
    }

    public static toSoundActionType(json: string): SoundActionType {
        return cast(JSON.parse(json), r("SoundActionType"));
    }

    public static soundActionTypeToJson(value: SoundActionType): string {
        return JSON.stringify(uncast(value, r("SoundActionType")), null, 2);
    }

    public static toDocumentQualifierType(json: string): DocumentQualifierType {
        return cast(JSON.parse(json), r("DocumentQualifierType"));
    }

    public static documentQualifierTypeToJson(value: DocumentQualifierType): string {
        return JSON.stringify(uncast(value, r("DocumentQualifierType")), null, 2);
    }

    public static toContentType(json: string): ContentType {
        return cast(JSON.parse(json), r("ContentType"));
    }

    public static contentTypeToJson(value: ContentType): string {
        return JSON.stringify(uncast(value, r("ContentType")), null, 2);
    }

    public static toEntryModeType(json: string): EntryModeType {
        return cast(JSON.parse(json), r("EntryModeType"));
    }

    public static entryModeTypeToJson(value: EntryModeType): string {
        return JSON.stringify(uncast(value, r("EntryModeType")), null, 2);
    }

    public static toDeviceType(json: string): DeviceType {
        return cast(JSON.parse(json), r("DeviceType"));
    }

    public static deviceTypeToJson(value: DeviceType): string {
        return JSON.stringify(uncast(value, r("DeviceType")), null, 2);
    }

    public static toInfoQualifyType(json: string): InfoQualifyType {
        return cast(JSON.parse(json), r("InfoQualifyType"));
    }

    public static infoQualifyTypeToJson(value: InfoQualifyType): string {
        return JSON.stringify(uncast(value, r("InfoQualifyType")), null, 2);
    }

    public static toAccountType(json: string): AccountType {
        return cast(JSON.parse(json), r("AccountType"));
    }

    public static accountTypeToJson(value: AccountType): string {
        return JSON.stringify(uncast(value, r("AccountType")), null, 2);
    }

    public static toLoyaltyHandlingType(json: string): LoyaltyHandlingType {
        return cast(JSON.parse(json), r("LoyaltyHandlingType"));
    }

    public static loyaltyHandlingTypeToJson(value: LoyaltyHandlingType): string {
        return JSON.stringify(uncast(value, r("LoyaltyHandlingType")), null, 2);
    }

    public static toPaymentType(json: string): PaymentType {
        return cast(JSON.parse(json), r("PaymentType"));
    }

    public static paymentTypeToJson(value: PaymentType): string {
        return JSON.stringify(uncast(value, r("PaymentType")), null, 2);
    }

    public static toInputCommandType(json: string): InputCommandType {
        return cast(JSON.parse(json), r("InputCommandType"));
    }

    public static inputCommandTypeToJson(value: InputCommandType): string {
        return JSON.stringify(uncast(value, r("InputCommandType")), null, 2);
    }

    public static toOutputFormatType(json: string): OutputFormatType {
        return cast(JSON.parse(json), r("OutputFormatType"));
    }

    public static outputFormatTypeToJson(value: OutputFormatType): string {
        return JSON.stringify(uncast(value, r("OutputFormatType")), null, 2);
    }

    public static toMenuEntryTagType(json: string): MenuEntryTagType {
        return cast(JSON.parse(json), r("MenuEntryTagType"));
    }

    public static menuEntryTagTypeToJson(value: MenuEntryTagType): string {
        return JSON.stringify(uncast(value, r("MenuEntryTagType")), null, 2);
    }

    public static toSaleCapabilitiesType(json: string): SaleCapabilitiesType {
        return cast(JSON.parse(json), r("SaleCapabilitiesType"));
    }

    public static saleCapabilitiesTypeToJson(value: SaleCapabilitiesType): string {
        return JSON.stringify(uncast(value, r("SaleCapabilitiesType")), null, 2);
    }

    public static toTerminalEnvironmentType(json: string): TerminalEnvironmentType {
        return cast(JSON.parse(json), r("TerminalEnvironmentType"));
    }

    public static terminalEnvironmentTypeToJson(value: TerminalEnvironmentType): string {
        return JSON.stringify(uncast(value, r("TerminalEnvironmentType")), null, 2);
    }

    public static toLoyaltyTransactionType(json: string): LoyaltyTransactionType {
        return cast(JSON.parse(json), r("LoyaltyTransactionType"));
    }

    public static loyaltyTransactionTypeToJson(value: LoyaltyTransactionType): string {
        return JSON.stringify(uncast(value, r("LoyaltyTransactionType")), null, 2);
    }

    public static toSoundFormatType(json: string): SoundFormatType {
        return cast(JSON.parse(json), r("SoundFormatType"));
    }

    public static soundFormatTypeToJson(value: SoundFormatType): string {
        return JSON.stringify(uncast(value, r("SoundFormatType")), null, 2);
    }

    public static toStoredValueTransactionType(json: string): StoredValueTransactionType {
        return cast(JSON.parse(json), r("StoredValueTransactionType"));
    }

    public static storedValueTransactionTypeToJson(value: StoredValueTransactionType): string {
        return JSON.stringify(uncast(value, r("StoredValueTransactionType")), null, 2);
    }

    public static toVersionType(json: string): VersionType {
        return cast(JSON.parse(json), r("VersionType"));
    }

    public static versionTypeToJson(value: VersionType): string {
        return JSON.stringify(uncast(value, r("VersionType")), null, 2);
    }

    public static toResultType(json: string): ResultType {
        return cast(JSON.parse(json), r("ResultType"));
    }

    public static resultTypeToJson(value: ResultType): string {
        return JSON.stringify(uncast(value, r("ResultType")), null, 2);
    }

    public static toErrorConditionType(json: string): ErrorConditionType {
        return cast(JSON.parse(json), r("ErrorConditionType"));
    }

    public static errorConditionTypeToJson(value: ErrorConditionType): string {
        return JSON.stringify(uncast(value, r("ErrorConditionType")), null, 2);
    }

    public static toLoyaltyUnitType(json: string): LoyaltyUnitType {
        return cast(JSON.parse(json), r("LoyaltyUnitType"));
    }

    public static loyaltyUnitTypeToJson(value: LoyaltyUnitType): string {
        return JSON.stringify(uncast(value, r("LoyaltyUnitType")), null, 2);
    }

    public static toPaymentInstrumentType(json: string): PaymentInstrumentType {
        return cast(JSON.parse(json), r("PaymentInstrumentType"));
    }

    public static paymentInstrumentTypeToJson(value: PaymentInstrumentType): string {
        return JSON.stringify(uncast(value, r("PaymentInstrumentType")), null, 2);
    }

    public static toGlobalStatusType(json: string): GlobalStatusType {
        return cast(JSON.parse(json), r("GlobalStatusType"));
    }

    public static globalStatusTypeToJson(value: GlobalStatusType): string {
        return JSON.stringify(uncast(value, r("GlobalStatusType")), null, 2);
    }

    public static toPrinterStatusType(json: string): PrinterStatusType {
        return cast(JSON.parse(json), r("PrinterStatusType"));
    }

    public static printerStatusTypeToJson(value: PrinterStatusType): string {
        return JSON.stringify(uncast(value, r("PrinterStatusType")), null, 2);
    }

    public static toAuthenticationMethodType(json: string): AuthenticationMethodType {
        return cast(JSON.parse(json), r("AuthenticationMethodType"));
    }

    public static authenticationMethodTypeToJson(value: AuthenticationMethodType): string {
        return JSON.stringify(uncast(value, r("AuthenticationMethodType")), null, 2);
    }

    public static toTrackFormatType(json: string): TrackFormatType {
        return cast(JSON.parse(json), r("TrackFormatType"));
    }

    public static trackFormatTypeToJson(value: TrackFormatType): string {
        return JSON.stringify(uncast(value, r("TrackFormatType")), null, 2);
    }

    public static toIdentificationType(json: string): IdentificationType {
        return cast(JSON.parse(json), r("IdentificationType"));
    }

    public static identificationTypeToJson(value: IdentificationType): string {
        return JSON.stringify(uncast(value, r("IdentificationType")), null, 2);
    }

    public static toIdentificationSupportType(json: string): IdentificationSupportType {
        return cast(JSON.parse(json), r("IdentificationSupportType"));
    }

    public static identificationSupportTypeToJson(value: IdentificationSupportType): string {
        return JSON.stringify(uncast(value, r("IdentificationSupportType")), null, 2);
    }

    public static toColorType(json: string): ColorType {
        return cast(JSON.parse(json), r("ColorType"));
    }

    public static colorTypeToJson(value: ColorType): string {
        return JSON.stringify(uncast(value, r("ColorType")), null, 2);
    }

    public static toCharacterWidthType(json: string): CharacterWidthType {
        return cast(JSON.parse(json), r("CharacterWidthType"));
    }

    public static characterWidthTypeToJson(value: CharacterWidthType): string {
        return JSON.stringify(uncast(value, r("CharacterWidthType")), null, 2);
    }

    public static toCharacterHeightType(json: string): CharacterHeightType {
        return cast(JSON.parse(json), r("CharacterHeightType"));
    }

    public static characterHeightTypeToJson(value: CharacterHeightType): string {
        return JSON.stringify(uncast(value, r("CharacterHeightType")), null, 2);
    }

    public static toCharacterStyleType(json: string): CharacterStyleType {
        return cast(JSON.parse(json), r("CharacterStyleType"));
    }

    public static characterStyleTypeToJson(value: CharacterStyleType): string {
        return JSON.stringify(uncast(value, r("CharacterStyleType")), null, 2);
    }

    public static toAlignmentType(json: string): AlignmentType {
        return cast(JSON.parse(json), r("AlignmentType"));
    }

    public static alignmentTypeToJson(value: AlignmentType): string {
        return JSON.stringify(uncast(value, r("AlignmentType")), null, 2);
    }

    public static toBarcodeType(json: string): BarcodeType {
        return cast(JSON.parse(json), r("BarcodeType"));
    }

    public static barcodeTypeToJson(value: BarcodeType): string {
        return JSON.stringify(uncast(value, r("BarcodeType")), null, 2);
    }

    public static toServiceProfilesType(json: string): ServiceProfilesType {
        return cast(JSON.parse(json), r("ServiceProfilesType"));
    }

    public static serviceProfilesTypeToJson(value: ServiceProfilesType): string {
        return JSON.stringify(uncast(value, r("ServiceProfilesType")), null, 2);
    }

    public static toGenericProfileType(json: string): GenericProfileType {
        return cast(JSON.parse(json), r("GenericProfileType"));
    }

    public static genericProfileTypeToJson(value: GenericProfileType): string {
        return JSON.stringify(uncast(value, r("GenericProfileType")), null, 2);
    }

    public static toUnitOfMeasureType(json: string): UnitOfMeasureType {
        return cast(JSON.parse(json), r("UnitOfMeasureType"));
    }

    public static unitOfMeasureTypeToJson(value: UnitOfMeasureType): string {
        return JSON.stringify(uncast(value, r("UnitOfMeasureType")), null, 2);
    }

    public static toInstalmentType(json: string): InstalmentType {
        return cast(JSON.parse(json), r("InstalmentType"));
    }

    public static instalmentTypeToJson(value: InstalmentType): string {
        return JSON.stringify(uncast(value, r("InstalmentType")), null, 2);
    }

    public static toPeriodUnitType(json: string): PeriodUnitType {
        return cast(JSON.parse(json), r("PeriodUnitType"));
    }

    public static periodUnitTypeToJson(value: PeriodUnitType): string {
        return JSON.stringify(uncast(value, r("PeriodUnitType")), null, 2);
    }

    public static toStoredValueAccountType(json: string): StoredValueAccountType {
        return cast(JSON.parse(json), r("StoredValueAccountType"));
    }

    public static storedValueAccountTypeToJson(value: StoredValueAccountType): string {
        return JSON.stringify(uncast(value, r("StoredValueAccountType")), null, 2);
    }

    public static toAlgorithmType(json: string): AlgorithmType {
        return cast(JSON.parse(json), r("AlgorithmType"));
    }

    public static algorithmTypeToJson(value: AlgorithmType): string {
        return JSON.stringify(uncast(value, r("AlgorithmType")), null, 2);
    }

    public static toCheckTypeCodeType(json: string): CheckTypeCodeType {
        return cast(JSON.parse(json), r("CheckTypeCodeType"));
    }

    public static checkTypeCodeTypeToJson(value: CheckTypeCodeType): string {
        return JSON.stringify(uncast(value, r("CheckTypeCodeType")), null, 2);
    }

    public static toTransactionType(json: string): TransactionType {
        return cast(JSON.parse(json), r("TransactionType"));
    }

    public static transactionTypeToJson(value: TransactionType): string {
        return JSON.stringify(uncast(value, r("TransactionType")), null, 2);
    }

    public static toPoiCapabilitiesType(json: string): PoiCapabilitiesType {
        return cast(JSON.parse(json), r("PoiCapabilitiesType"));
    }

    public static poiCapabilitiesTypeToJson(value: PoiCapabilitiesType): string {
        return JSON.stringify(uncast(value, r("PoiCapabilitiesType")), null, 2);
    }
}

function invalidValue(typ: any, val: any): never {
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        var map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        var map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        var l = typs.length;
        for (var i = 0; i < l; i++) {
            var typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(typ: any, val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        var result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
                    : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(typ, val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    // @ts-ignore
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
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
        { json: "SaleToAcquirerData", js: "saleToAcquirerData", typ: u(undefined, r("SaleToAcquirerData")) },
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
    "SaleToAcquirerData": o([
        { json: "ApplicationInfo", js: "applicationInfo", typ: u(undefined, "any") },
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
        "OnlinePIN",
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